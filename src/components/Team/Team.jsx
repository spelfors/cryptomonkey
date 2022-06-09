import React from 'react'
import './Team.css';
import avatar1 from '../../assets/team1.jpg';
import avatar2 from '../../assets/team2.jpg';
import avatar3 from '../../assets/team3.jpg';
import avatar4 from '../../assets/team4.jpg';
import avatar5 from '../../assets/team5.jpg';
import avatar6 from '../../assets/team6.jpg';


const Team = () => {
  return (
    <section className="team" id='team'>
      <div className="team__container">
        <h2 className="team__title">Our<br/> <span>Team</span></h2>
        <ul className="team__block">
          <li className="team__list"><img src={avatar1} alt="" className="team__avatar" />
          <p className="team__avatar-name">Jhonson</p>
          <span className="team__avatar-res">CEO</span>
          </li>
          <li className="team__list"><img src={avatar2} alt="" className="team__avatar" />
          <p className="team__avatar-name">Alexander</p>
          <span className="team__avatar-res">Strategy / Operations</span>
          </li>
          <li className="team__list"><img src={avatar3} alt="" className="team__avatar" />
          <p className="team__avatar-name">John Ali</p>
          <span className="team__avatar-res">Smart Contract Dev</span>
          </li>
          <li className="team__list"><img src={avatar4} alt="" className="team__avatar" />
          <p className="team__avatar-name">Jhonson</p>
          <span className="team__avatar-res">CEO</span>
          </li>
          <li className="team__list"><img src={avatar5} alt="" className="team__avatar" />
          <p className="team__avatar-name">Alexander</p>
          <span className="team__avatar-res">Strategy / Operations</span>
          </li>
          <li className="team__list"><img src={avatar6} alt="" className="team__avatar" />
          <p className="team__avatar-name">John Ali</p>
          <span className="team__avatar-res">Smart Contract Dev</span>
          </li>

        </ul>
      </div>

    </section>
  )
}

export default Team