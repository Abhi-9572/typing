import { createGlobalStyle } from "styled-components";


export const GlobalStyle=createGlobalStyle`

*,
*::after,
*::before{
    box-sizing:border-box;
}

body{
    background:black;
    color:white;
    padding:0;
    margin:0;
}

.container{
    display:grid;
    grid-auto-flow:row;
    grid-templete-row:auto 1fr auto;
    gap:0.5rem;
    padding:1rem;
    align-item:center;
   width:100vw;
    min-height:100vh;
}

.typing-box{
    width:1000px;
    height:150px;
    margin-inline:auto;
    overflow:hidden;
}

.words{
    font-size:30px;
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    width:100%;
}
.word{
 margin:5px;
}


`