import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Header from "./Header";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        background-color: #212E37;
        color: white;
    }
`;

const App = ({ className }) => {
    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Search />}></Route>
                    <Route path="/country/:cioc" element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
