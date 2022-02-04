import React from "react";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import { Layout } from "./hocs/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Aside />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
