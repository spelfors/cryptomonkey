import React from 'react'
import './Collection.css';
import mokey1 from '../../assets/collec_monk1.jpg'
import mokey2 from '../../assets/collec_monk2.jpg'
import mokey3 from '../../assets/collec_monk3.jpg'
import mokey4 from '../../assets/collec_monk4.jpg'
import mokey5 from '../../assets/collec_monk5.jpg'
import mokey6 from '../../assets/collec_monk6.jpg'
import mokey7 from '../../assets/collec_monk7.jpg'
import mokey8 from '../../assets/collec_monk8.jpg'
import mokey9 from '../../assets/collec_monk9.jpg'
import mokey10 from '../../assets/collec_monk10.jpg'
import Marquee from "react-fast-marquee";
// import React from "react";
// import MyComponent from "../components/MyComponent";
// import Marquee from "react-fast-marquee";
const Collection = () => {
  return ( 

    <section id='collection' className='collection'>
      <h3 className='collection__title' >The Collection</h3>
      <Marquee direction="left" speed={50} gradient={false} pauseOnHover={true} className='collection__line'>
          <img src={mokey2} alt='' className='collection__img' />
          <img src={mokey3} alt=''  className='collection__img'/>
          <img src={mokey4} alt=''  className='collection__img'/>
          <img src={mokey5} alt=''  className='collection__img'/>
          <img src={mokey6} alt=''  className='collection__img'/>
          <img src={mokey7} alt=''  className='collection__img'/>
          <img src={mokey8} alt='' className='collection__img'/>
          <img src={mokey9} alt='' className='collection__img'/>
          <img src={mokey10} alt='' className='collection__img'/>

      </Marquee>
      <Marquee direction="right"  speed={30} gradient={false} pauseOnHover={true}>
          <img src={mokey2} alt='' className='collection__img' />
          <img src={mokey3} alt='' className='collection__img' />
          <img src={mokey4} alt='' className='collection__img' />
          <img src={mokey5} alt='' className='collection__img' />
          <img src={mokey6} alt='' className='collection__img' />
          <img src={mokey7} alt='' className='collection__img' />
          <img src={mokey8} alt='' className='collection__img' />
          <img src={mokey9} alt='' className='collection__img' />
          <img src={mokey10} alt='' className='collection__img' />
        {/* <MyComponent />
        <MyComponent />
        <MyComponent /> */}
      </Marquee>
    

    </section>
  )
}

export default Collection