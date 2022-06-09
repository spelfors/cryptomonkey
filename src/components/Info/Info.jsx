import React from 'react'
import './Info.css';
import threemonk from '../../assets/monke4.png';
import monklis from '../../assets/monke3.png';

const Info = () => {
  return (
    <section id='info' className='info'>
      <div className='info__container'>
        <h2 className='info__title'><span>Project</span> Information</h2>
        <p className='info__discr'>Each Snow Monkey is unique and generated from over 100 possible traits. All our Snow Monkeys are individually unique, but some are rarer than others.</p>
        <div className='info__content'>
          <div className='info__data'>
            <div className="info__data-block">
              <h5 className="info__data-head">Project size</h5>
              <span className="info__data-digit">8,888</span>
            </div>
            <div className="info__data-block">
              <h5 className="info__data-head">Mint Price</h5>
              <span className="info__data-digit">1 SOL</span>
            </div>
            <div className="info__data-block">
              <h5 className="info__data-head">Mint Date</h5>
              <span className="info__data-digit">TBA</span>
            </div>
          </div>
          <img src={threemonk} alt="" className="info__monkeys" />
        </div>
        <img src={monklis} alt="" className="info__monk-black" />
      </div>
    </section>
  )
}

export default Info
