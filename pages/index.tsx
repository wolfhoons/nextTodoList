import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

// index 뒤에 콜론(:)이 붙어 있는데 변수 뒤의 : 은 해당 변수에
// 타입을 지정해줍니다.

const index: NextPage = () => {
  return (
    <Container>
      <h1>Hello Styled-Components</h1>
      <h2>Hello Styled-Components</h2>
      <p>Hello Styled-Components</p>
      <ul>
        <li>
          Hello Styled-Components
        </li>
      </ul>
      <a>Hello Styled-Components</a>
      <span>Hello Styled-Components</span>
    </Container>
  );
};

export default index;
