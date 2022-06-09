import React from 'react'
import './Ethos.css'
import mnk1 from '../../assets/collec_monk1.jpg';
import mnk2 from '../../assets/collec_monk2.jpg';
import mnk3 from '../../assets/collec_monk3.jpg';
import mnk4 from '../../assets/collec_monk4.jpg';
import mnk5 from '../../assets/collec_monk5.jpg';
import mnk6 from '../../assets/collec_monk6.jpg';
import mnk7 from '../../assets/collec_monk7.jpg';
import mnk8 from '../../assets/collec_monk8.jpg';
import mnk9 from '../../assets/collec_monk9.jpg';




const Ethos = () => {
  return (
    <section className="ethos">
      <div className="ethos__container">
        <div className="ethos__left-block">
          <h2 className="ethos__title"><span>Project</span>  ethos</h2>
          <div className="ethos__card">
            <h5 className="ethos__card-head">Unique and generated from over 100 possible traits</h5>
            <div className="ethos__card-contex">Each Snow Monkey is unique and generated from over 100 possible traits. All our Snow Monkeys are individually unique, but some are rarer than others.</div>
          </div>
          <div className="ethos__card">
            <h5 className="ethos__card-head">brand which is focused on mental and health awareness</h5>
            <div className="ethos__card-contex">We believe an NFT can embody the spirit of the Snow monkeys and build a brand which is focused not just on awesome parties, but a brand which is focused on mental and health awareness.</div>
          </div>
          <div className="ethos__card">
            <h5 className="ethos__card-head">we are driving personal value, and monetary value, through our NFT</h5>
            <div className="ethos__card-contex">We believe that life is hard at the best of times and want to ensure we are driving personal value, and monetary value, through our NFT. We are there with you.</div>
          </div>
        </div>
        <div className="ethos__right-block">
          <div className="ethos__foto">
            <div className="ethos__threefoto
            ethos__threefoto-col1">
              <img src={mnk1} alt="" className="ethos__monkey-group" />
              <img src={mnk3} alt="" className="ethos__monkey-group" />
              <img src={mnk2} alt="" className="ethos__monkey-group" />
            </div>
            <div className="ethos__threefoto ethos__threefoto-col2">
              <img src={mnk4} alt="" className="ethos__monkey-group" />
              <img src={mnk6} alt="" className="ethos__monkey-group" />
              <img src={mnk5} alt="" className="ethos__monkey-group" />
            </div>
            <div className="ethos__threefoto ethos__threefoto-col3">
              <img src={mnk7} alt="" className="ethos__monkey-group" />
              <img src={mnk8} alt="" className="ethos__monkey-group" />
              <img src={mnk9} alt="" className="ethos__monkey-group" />
            </div>
          </div>
          <div className="ethos__card ethos__card-rb">
            <h5 className="ethos__card-head">A Web3 brand which is built for you and your wellbeing</h5>
            <div className="ethos__card-contex">Ultimately we wanted to build a brand sitting at the top of the WEB3 community who focuses on you, the buyer, the person and the being - and help bring zen, tranquility and abundance to you.</div>
          </div>

        </div>
        

      </div>

    </section>
  )
}

export default Ethos