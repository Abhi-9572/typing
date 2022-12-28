import React, { createRef, useEffect, useRef, useState } from 'react'

const Typing = ({words}) => {

    const[currWordIndex,setcurrWordIndex]=useState(0)
    const[currCharIndex,setcurrCharIndex]=useState(0)
    const inputRef=useRef();
    const wordSpanRef=Array(words.length).fill(0).map(()=>createRef())

   


    const keyPress=(e)=>{
        console.log(e);
        console.log(e.key);//pressed key
        // console.log(wordSpanRef[0].current);
        let allChildrenSpans=wordSpanRef[currWordIndex].current.querySelectorAll('span')
        // console.log(allChildrenSpans);
        // console.log(allChildrenSpans[currCharIndex].innerText);//present 
        
        if(e.keyCode===32)
        {
            setcurrWordIndex(currWordIndex+1)
            setcurrCharIndex(0);
            if(allChildrenSpans.length<=currCharIndex+1)
            {
                // console.log(currCharIndex);
                allChildrenSpans[currCharIndex-1].classList.remove('right')
                
            }
            else{
                allChildrenSpans[currCharIndex].className=allChildrenSpans[currCharIndex].className.replace("blinking","")
            }
            return;

        }

        if(e.key==allChildrenSpans[currCharIndex].innerText)
        {
            // console.log("corect");
            allChildrenSpans[currCharIndex].className="char correct"
            
            setcurrCharIndex(currCharIndex+1)
        }
        else
        {
            // console.log("incorrect");
            allChildrenSpans[currCharIndex].className="char incorrect"
            setcurrCharIndex(currCharIndex+1)
        }

        if(currCharIndex+1==allChildrenSpans.length)
        {
            allChildrenSpans[currCharIndex].className+=" right"
        }
        else
        {
            allChildrenSpans[currCharIndex+1].className="char blinking";
        }
        
    }

   

    const inputFocus=()=>{
        inputRef.current.focus();
    }

    

    useEffect(()=>
    { 
        inputFocus();
        wordSpanRef[0].current.childNodes[0].className="char blinking"
    },[])
  return (
    <div>
    <div className="typing-box" onClick={inputFocus}>
        <div className="words">
           { words.map((word,index)=>
            (
                <span className='word' key={index} ref={wordSpanRef[index]}>
                    {word.split("").map((char,i)=>
                    (
                        <span key={i} className='char'>{char}</span>
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