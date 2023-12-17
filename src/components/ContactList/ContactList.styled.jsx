import styled from '@emotion/styled';

export const H3 = styled.h3`
  margin: 30px 10px 10px;
  color: #4e6141;
`

export const ContactsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 20px 20px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
`;

export const Button = styled.button`
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0.563em 1em;
  background-color: #ecf0f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
        box-shadow: none;
        color: white;
        background: #FD9222;
    }
`;