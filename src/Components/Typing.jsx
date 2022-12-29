import React, { createRef, useEffect, useRef, useState } from 'react'

const Typing = ({words}) => {

    const[currWordIndex,setcurrWordIndex]=useState(0)
    const[currCharIndex,setcurrCharIndex]=useState(0)
    const inputRef=useRef();
    const wordSpanRef=Array(words.length).fill(0).map(()=>createRef())
    // console.log(wordSpanRef[0]);

   


    const keyPress=(e)=>{
        console.log(e);
        console.log(e.key);//pressed key
        // console.log(wordSpanRef[0].current);
        let allChildrenSpans=wordSpanRef[currWordIndex].current.querySelectorAll('span')
        // console.log(allChildrenSpans);
        // console.log(allChildrenSpans[currCharIndex].innerText);//present 
        

        // -----------space logic-----------//
        if(e.keyCode===32)
        {
           
            setcurrWordIndex(currWordIndex+1)
            setcurrCharIndex(0);
            if(allChildrenSpans.length<currCharIndex+1)
            {
                // console.log(currCharIndex);
                allChildrenSpans[currCharIndex-1].classList.remove('right')
                
            }
            else{
                console.log(allChildrenSpans[currCharIndex]);
                allChildrenSpans[currCharIndex].className=allChildrenSpans[currCharIndex].className.replace("blinking","")
            }

            console.log( wordSpanRef[currWordIndex+1].current.querySelector('span'));
            // after pressing space cursor move to the next first char of nexr word
            wordSpanRef[currWordIndex+1].current.querySelector('span').className="char blinking"
            return;

        }

         // -----------Backspace logic-----------//

         if(e.keyCode===8)
         {
            if(currCharIndex!==0)
            {
                if(currCharIndex===allChildrenSpans.length)
                {
                    if(allChildrenSpans[currCharIndex-1].className.includes("extra"))
                    {
                        allChildrenSpans[currCharIndex-1].remove();
                        allChildrenSpans[currCharIndex-2].className+=" right"
                    }
                    else
                    {
                        allChildrenSpans[currCharIndex-1].className="char blinking"
                    }
                    
                   
                    setcurrCharIndex(currCharIndex-1);
                    return;
                }
                console.log(currCharIndex);
                setcurrCharIndex(currCharIndex-1);
                allChildrenSpans[currCharIndex].className="char"
                allChildrenSpans[currCharIndex-1].className="char blinking"

            }
            return;
         }

         //-------user press more than number of char present in the word-----//
         if(currCharIndex===allChildrenSpans.length)
         {
            let newSpan=document.createElement('span')
            newSpan.innerText=e.key;
            newSpan.className="char incorrect right extra"
            
            allChildrenSpans[currCharIndex-1].className=allChildrenSpans[currCharIndex-1].className.replace("right","")
            wordSpanRef[currWordIndex].current.append(newSpan)
            setcurrCharIndex(currCharIndex+1);
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