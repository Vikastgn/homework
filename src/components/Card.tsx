import styled from "styled-components";

export const Card = styled.div`
  max-width: 280px;
  width: 100%; /* если экран будет больше, чем 360px, то карточка застрянет на этом размере, если меньше, то ширина карточки будет равна ширине родителя*/
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 0px 20px;
  border-radius: 10px;
`

// export const Card = styled.article.attrs( ({src, title, text}) =>({
//     src: src || image,
//     title: "Headline",
//     text:  "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut."
// }) ) `
//   max-width: 280px;
//   width: 100%; /* если экран будет больше, чем 360px, то карточка застрянет на этом размере, если меньше, то ширина карточки будет равна ширине родителя*/
//   padding: 10px;
//   box-sizing: border-box;
//   margin: 0 auto;
// `
//


