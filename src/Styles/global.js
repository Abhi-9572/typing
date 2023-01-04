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
    transition:all 0.25s linear;
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
.hidden-input{
    border:2px solid blue;
    opacity:0;
}
.correct{
    color:green;
}
.incorrect{
    color:red;
}

.blinking{
    border-left:1px solid;
    animation:blink 2s infinite;
    animation-timing-function:ease;

    @keyframes blink
    {
        0%{border-left-color:#fff;}
        20%{border-left-color:#000;}
        40%{border-left-color:#fff;}
        60%{border-left-color:#000;}
        100%{border-left-color:#fff}
    }

   
}

.right{
    border-right:1px solid;
    animation:blinkRight 2s infinite;
    animation-timing-function:ease;

    @keyframes blinkRight
    {
        0%{border-right-color:#fff;}
        20%{border-right-color:#000;}
        40%{border-right-color:#fff;}
        60%{border-right-color:#000;}
        100%{border-right-color:#fff}
    }    
}

   
.upperMenu
{
    display:flex;
    width:1000px;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
}

.rightSection{
    display:flex;
    // padding-right:10px
    gap:10px
}
.time:hover{
    color:red;
    cursor:pointer
}
.statsBox{
    display:flex;
    max-width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
}
 .title{
    font-size:20px;
    color:grey;
 }

 .subtitle{
    font-size:30px;
    color:gold;
 }
.leftStats{
    width:30%;
    padding:30px;
}
.rightStats{
    width:70%;
}

`