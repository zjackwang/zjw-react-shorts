import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title, info} = props.question;
  const [plus, setPlus] = useState(true);

  return (<article className="question">
    <header>
      <h4>{title}</h4>
      <button type="button" className="btn" onClick={() => setPlus(!plus)}>
        {plus ? <AiOutlinePlus/> : <AiOutlineMinus/>}
      </button>
    </header>
    {!plus && <p>{info}</p>}
  </article>)
  
};

export default Question;
