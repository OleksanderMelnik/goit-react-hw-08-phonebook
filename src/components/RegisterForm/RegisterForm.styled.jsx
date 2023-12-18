import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 500;
`;

export const Input = styled.input`
    width: 250px;
    padding: 22px 36px;
    color: #000000;
    // background: #efefef;
    border-radius: 18px;
    border: 1px solid #efefef;
    // :placeholder {
    // color: #757575;
    // }
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
    border: 1px solid #000000;
    }
`;

export const Button = styled.button`
    height: 40px;
    width: 250px;
    margin-top: 24px;
    padding: 1.063em 1.5em;
    background: #ecf0f3;
    border: 1px solid transparent;
    outline: none;
    border-radius: 50px;
    color: black;
    cursor: pointer;
    box-shadow: 6px 6px 6px #cbced1, -2px -2px 18px white;
    padding: 0 20px;
    transition: all 250ms ease-in-out;
    :hover,
    :focus {
        box-shadow: none;
        color: white;
        background: #FD9222;
    }
`;

