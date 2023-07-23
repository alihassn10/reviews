import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1)
      return 0;
    if (num < 0)
      return people.length - 1;
    return num;
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });

  }
  const randomPeople=()=>{
    const randVal=Math.floor(Math.random()*people.length);
    if (randVal==index)
    randVal=index+1;
    setIndex(checkNumber(randVal));
    console.log(randVal);
  }
  return (<article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>

        <FaQuoteRight />
      </span>
  
    </div>
    <div className='btn-container'>
    <btn className='btn' onClick={prevPerson}>
      <FaChevronLeft />
    </btn>
    <btn className='btn' onClick={nextPerson}>
      <FaChevronRight />
    </btn>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
  <button className='random-btn' onClick={randomPeople}>Suprise me</button>
  </article>)
};

export default Review;
