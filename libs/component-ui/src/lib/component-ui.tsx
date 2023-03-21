import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentUiProps {}

const StyledComponentUi = styled.div`
  color: pink;
`;

export function ComponentUi(props: ComponentUiProps) {
  return (
    <StyledComponentUi>
      <h1>Welcome to ComponentUi!</h1>
    </StyledComponentUi>
  );
}

export default ComponentUi;
