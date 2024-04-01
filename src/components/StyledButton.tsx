import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    type?: string
}

export const StyledButton = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 4px 20px 6px;
  border-radius: 5px;
  font-size: 10px;
  white-space: nowrap;
  
  ${props => props.type ==="primary" && css<StyledBtnPropsType>`
    // type="primary"
    background-color: ${props => props.color || "#4E71FE"};
    color: ${props => props.color || "#FFFFFF"};
  `}
  
  ${props => props.type === "secondary" && css<StyledBtnPropsType>`
    // type="secondary"
  border: 2px solid #4E71FE;
  background-color: ${props => props.color || "#FFFFFF"};
  color:${props => props.color || "#4E71FE"};
  `}
  
`
// export const SubButton = styled(ButtonStyled)`
//   border: 2px solid #4E71FE;
//   background-color: #FFFFFF;
//   color: #4E71FE;
// `