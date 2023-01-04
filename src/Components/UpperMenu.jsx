import React, { useContext } from 'react'
import { useTestMode } from '../Context/TestMode'

const UpperMenu = ({counterDown}) => {

    const{testTime,setTestTime}=useTestMode()

    function TimeCountDown(e)
    {
        // console.log("hi");
        setTestTime(e.target.id)
    }
  return (
    <div className="upperMenu">
        <div className="leftSection">
            {counterDown}
        </div>
        <div className="rightSection">
            <div className="time" id={15} onClick={(e)=>TimeCountDown(e)}>15s</div>
            <div className="time" id={30} onClick={(e)=>TimeCountDown(e)}>30s</div>
            <div className="time" id={60} onClick={(e)=>TimeCountDown(e)}>60s</div>
        </div>
    </div>
  )
}

export default UpperMenu