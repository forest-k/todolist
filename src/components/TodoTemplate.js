import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  width: 20px;
  height: 20px;
  background: pink;
`;

const TodoTemplateWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: absolute;
  left: 50%;
  top: 50%;
  background-color: white;
  border-radius: 16px;

  margin: 0 auto;
  transform: translate(-50%, -50%);
`;

function TodoTemplate({children}) { //TodoTemplate
  return (
    <TodoTemplateWrap>
      <TodoTemplateBlock>
        <Test/>
        {children}      
      </TodoTemplateBlock>
    </TodoTemplateWrap>
  )   
}

export default TodoTemplate;
