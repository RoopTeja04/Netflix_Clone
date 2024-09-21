import React, { useState, useRef } from 'react';

const Accordiation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef([]);

  const faqs = [
    {
      question: 'What is Netflix?',
      answer1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,",
      answer2: "documentaries and more - on thousands of internet-connected devices.",
    },
    {
      question: 'How much does Netflix cost?',
      answer1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,",
      answer2: "documentaries and more - on thousands of internet-connected devices.",
    },
    {
      question: 'Where can I watch?',
      answer1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from",
      answer2: "your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs.",
    },
    {
        question: 'How do I cancel?',
        answer1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account",
        answer2: "online in two clicks. There are no cancellation fees - start or stop your account anytime.",
    },
    {
        question: 'What can I watch on Netflix?',
        answer1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix",
        answer2: "originals, and more. Watch as much as you want, anytime you want.",
    },
    {
        question: 'Is Netflix good for kids?',
        answer1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-",
        answer2: "friendly TV shows and films in their own space.",
    },


  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setHeight(activeIndex === index ? '0px' : `${contentRef.current[index].scrollHeight}px`);
  };

  return (
    <div className='Accordiation'>
      <h1 className='Accordiation-head'>Frequently Asked Questions</h1>
      <div className='Accord-view'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq'>
            <div className='faq-question' onClick={() => handleToggle(index)}>
              <span className='faq-question-line'>{faq.question}</span>
              <button className='toggle-button'>
                <span className='tog-btn-icon'>{activeIndex === index ? 'x' : '+'}</span>
              </button>
            </div>
            <div
              className='faq-answer'
              style={{ maxHeight: activeIndex === index ? height : '0px' }}
              ref={(el) => (contentRef.current[index] = el)}
            >
                <div className='faq-ans-1'>
                    <span className='faq-ans-line'>{faq.answer1}</span><br/>
                    <span className='faq-ans-line'>{faq.answer2}</span><br/>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordiation;
