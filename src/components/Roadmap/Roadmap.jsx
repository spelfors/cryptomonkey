import React from 'react'
import './Roadmap.css';
import { useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
// import vector from '../../assets/Lenta.png';
import lenta from '../../assets/Lenta.png';



const Roadmap = () => {

  const [checkedState, setState] = useState(false);
  const props = {
    checked: checkedState
  };

  return (
    <section className="roadmap">
      <img  className="roadmap-img" src={lenta} alt="" />
      <div className="roadmap__section">


        <h2 className="roadmap__title">
          Snow Monkey<br/> <span>Roadmap</span>
        </h2>
        <p className="roadmap__discr">See how we intend on helping the snow monkeys take over the world.</p>
        <div className="roadmap__tab">
            <Tabs>
              <TabList >
                <div className="roadmap__tab-listblock">
                  <Tab><p className="roadmap__tab-list">Phase one</p></Tab>
                  <Tab><p className="roadmap__tab-list">Phase two</p></Tab>
                  <Tab><p className="roadmap__tab-list">Phase three</p></Tab>
                  <Tab><p className="roadmap__tab-list">Phase four</p></Tab>
                </div>

              </TabList>
              <div className="roadmap__tab-panels">
              <TabPanel>
                      <div className="roadmap__tab-panel">
                          <label className="roadmap__tab-input">
                            <input type="radio" className="option-input radio" name="example" {...props}                          onChange={() => {
                              setState(true);
                            }} />
                            Create artwork
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Setup Discord
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Utlitise initial marketing
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Launch SNOW MONKEY website
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal roadmap
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal Lore
                          </label>
                        </div>
               </TabPanel>
               <TabPanel>
                        <div className="roadmap__tab-panel">
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" {...props} 
                            onChange={() => {
                              setState(true);
                            }} />
                            Setup Discord 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Create artwork
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Utlitise initial marketing
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal Lore
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal roadmap
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Launch SNOW MONKEY website 
                          </label>
                        </div>
               </TabPanel>
               <TabPanel>
                        <div className="roadmap__tab-panel">
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" {...props} 
                            onChange={() => {
                              setState(true);
                            }} />
                            Launch SNOW MONKEY website 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Utlitise initial marketing 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal roadmap 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal Lore
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Create artwork
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Setup Discord 
                          </label>
                        </div>
               </TabPanel>
               <TabPanel>
                        <div className="roadmap__tab-panel">
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" {...props} 
                            onChange={() => {
                              setState(true);
                            }} />
                            Setup Discord 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Utlitise initial marketing 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal roadmap 
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Reveal Lore
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Create artwork
                          </label>
                          <label className="roadmap__tab-input">
                            <input type="radio" className="  option-input radio" name="example" />
                            Launch SNOW MONKEY website 
                          </label>
                        </div>
               </TabPanel> 
              </div>
              
      </Tabs>
          
          

         

{/* <label className="roadmap__tab-input">hkgvbgbj
                            <input type="checkbox"name="example" {...props} 
            onChange={() => {
              setState(true);
            }} />
                          
                          </label>
                          <label className="roadmap__tab-input">
                            yhflhlv
                            <input type="checkbox"  name="example" />
                            
                          </label>
                          <label className="roadmap__tab-input">fggg
                            <input type="checkbox"  name="example" />
                            
                          </label>
                          <label className="roadmap__tab-input">fhfhxdf
                            <input type="checkbox"  name="example" />
                            
                          </label>
                          <label className="roadmap__tab-input">zdfhfghtfg
                            <input type="checkbox"  name="example" />
                           
                          </label>
                          <label className="roadmap__tab-input">fghztht
                            <input type="checkbox"  name="example" />
                            
                          </label>        
           */}
        

        {/* <label className="roadmap__tab-input">hkxghgbj
                            <input type="checkbox"name="example"  />
                          
                          </label>
                          <label className="roadmap__tab-input">
                            yhfxghlv
                            <input type="checkbox"  name="example" />
                            
                          </label>
                          <label className="roadmap__tab-input">fxgg
                            <input type="checkbox"  name="example" />
                            
                          </label>
                          <label className="roadmap__tab-input">fhxgdf
                            <input type="checkbox"  name="example" />
                            
                          </label>
                          <label className="roadmap__tab-input">zdfhfxfgghtfg
                            <input type="checkbox"  name="example" />
                           
                          </label>
                          <label className="roadmap__tab-input">fgxfghztht
                            <input type="checkbox"  name="example" />
                            
                          </label>  
 */}

    </div>

          </div>

      


    
    </section>
  )
};

export default Roadmap


