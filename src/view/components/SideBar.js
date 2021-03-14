import React from 'react';
import styled from 'styled-components';

const SideBar = () => {

    return (
        <Container>
            SideBar
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
  width: 300px;
  border-right: 1px solid #eee;
  
`;

export default SideBar;