import styled from 'styled-components';

export const Btn = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 18px;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
