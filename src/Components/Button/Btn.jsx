import './Btn.css';
import React from 'react'

const Btn = ({ className, text, whenClicked, state }) => {
  const style = `btn ${className} ${state}`
  return (
    <button className={style} onClick={whenClicked}>
     {text}
    </button>
  )
}

export default Btn

