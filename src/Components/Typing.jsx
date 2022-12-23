import React from 'react'

const Typing = ({words}) => {
  return (
    <div className="typing-box">
        <div className="words">
           { words.map((word,index)=>
            (
                <span className='word'>
                    {word.split("").map((char,i)=>
                    (
                        <span>{char}</span>
                    ))}
                </span>
            ))}
        </div>
    </div>
  )
}

export default Typing