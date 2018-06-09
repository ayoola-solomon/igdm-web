import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.75em 2.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
`;

export default Button;
