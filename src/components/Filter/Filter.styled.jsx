import styled from '@emotion/styled';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
`;
export const Input = styled.input`
    width: 250px;
    padding: 12px 36px;
    color: #000000;
    background: #efefef;
    border-radius: 18px;
    border-style: none;
    :placeholder {
        color: #757575;
  }
`;