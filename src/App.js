import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import Home from "./view/pages/Home";
import Header from "./view/components/Header";

const GlobalStyle = createGlobalStyle`

    *{
      padding: 0;
      margin: 0;
      list-style: none;
      box-sizing: border-box;
      text-decoration: none;
      
    }
`;

const App = () => {

    return (

        <Container>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route path={"/"} component={Home}/>
            </Switch>

        </Container>
    )
}

const Container = styled.div`

`;

export default App;