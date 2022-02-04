import { atom, atomFamily, selector } from "recoil";

export interface Iproduct {
  id: number;
  name: string;
  price: number;
  count: number;
}
interface IproductSelector {
  itemsCount: number;
  countTotal: number;
  total: string;
  checkoutPost: { products: Iproduct[] };
}
export const cartItems = atom<Iproduct[]>({
  key: "cartItems",
  default: [],
});
export const asidOpenAtom = atom ({
  key: "asidOpenAtom",
  default: false,
});

export const inCart = atomFamily({
  key: "inCart",
  default: false,
});

export const cartCount = selector<IproductSelector>({
  key: "cartCount",
  get: ({ get }) => {
    const items = get(cartItems);
    const countTotal = items.reduce((acc, cur) => acc + cur.count, 0);
    const itemsCount = items.length;
    const total = items
      .reduce((acc, cur) => acc + cur.price * cur.count, 0)
      .toFixed(2);
    const checkoutPost = {
      products: items.map((item) => ({
        id: item.id,
        name: item.name,
        count: item.count,
        price: item.price,
      })),
    };

    return { itemsCount, countTotal, total, checkoutPost };
  },
});
