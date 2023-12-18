import styled from '@emotion/styled';

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: a;
`;

export const UserName = styled.p`
  margin: 24px;
  color: white;
}
`;


export const Btn = styled.button`
  height: 40px;
  width: 100px;
  background: #4e6141;
  border: 1px solid transparent;
  outline: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  padding: 0 20px;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    box-shadow: none;
    color: white;
    background: #FD9222;
  }
`;