import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// createGlobalStyle의 백틱 안에 스타일을 직접 작성하게 되면 포맷팅을 지원하지 않기 때문에
// 불편함이 있습니다. styled-components의 css 함수를 이용하면 스타일드 컴포넌트에서 사용할
// css 값을 변수로 만들어 사용할 수 있습니다.
const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Noto Sans, Noto Sans KR;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
