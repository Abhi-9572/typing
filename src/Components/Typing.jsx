import React, { createRef, useEffect, useRef, useState } from 'react'

const Typing = ({words}) => {

    const[currWordIndex,setcurrWordIndex]=useState(0)
    const[currCharIndex,setcurrCharIndex]=useState(0)
    const inputRef=useRef();
    const wordSpanRef=Array(words.length).fill(0).map(()=>createRef())

   


    const keyPress=(e)=>{
        console.log(e.key);
        // console.log(wordSpanRef[0].current);
        let allChildrenSpans=wordSpanRef[currWordIndex].current.querySelectorAll('span')
        console.log(allChildrenSpans);
        console.log(allChildrenSpans[currCharIndex].innerText);
    }

    const inputFocus=()=>{
        inputRef.current.focus();
    }

    

    useEffect(()=>
    { 
        inputFocus();
    },[])
  return (
    <div>
    <div className="typing-box">
        <div className="words">
           { words.map((word,index)=>
            (
                <span className='word' key={index} ref={wordSpanRef[index]}>
                    {word.split("").map((char,i)=>
                    (
                        <span key={i}>{char}</span>
                    ))}
                </span>
            ))}
        </div>
    </div>
    <input ref={inputRef} 
    type='text' 
    className='hidden-input'
    onKeyDown={(e)=>keyPress(e)}
    />
    </div>
  )
}

export default Typing