import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 22px 48px;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
  background: linear-gradient(
    315deg,
    rgba(101, 0, 94, 1) 3%,
    rgba(60, 132, 206, 1) 38%,
    rgba(48, 238, 226, 1) 68%,
    rgba(255, 25, 25, 1) 98%
  );
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
 
`;