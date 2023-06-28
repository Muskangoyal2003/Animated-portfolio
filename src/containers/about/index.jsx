import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from 'react-simple-animate';
import {DiApple,DiAndroid}from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa';
import './style.scss';
const personalDetails = [
  {
   label:'Name',
   value:'Muskan',
  },
  {
    label:'Email',
    value:'itsmuskangoyal2003@gmail.com'
  },
  {
   label:'Contact No',
   value:'7206046420'
  },
  {
   label: 'Address',
   value: 'Bhiwani (Haryana), India',
  },
]

const summary ='A self-built, enthusiastic, sincere & passionate learner always wants to explore new things and learn more to enhance skills to grow. Some of my interests in technology as well as extra-curricular activities include problem solving (Data Structures and Algorithms), web development, creative writing, management, public speaking, listening music, playing chess, dancing, media reporting and travelling.  ';
const About =()=> {
  return (
    <div id='about' className='about'>
      <PageHeaderContent 
      headerText ='About Me'
      icon={<BsInfoCircleFill size={40}/>}/>
      <div className="about__content">
        <div className="about__content__personalWrapper">
        <Animate
    play
    duration ={1.5}
    delay={1}
    start={{
      transform:"translateX(-900px)",
    }}
    end={
      {
        transform:"translatex(0px)",
      }
    }
    >
        <p>{summary}</p>
        </Animate>
        <Animate
    play
    duration ={1.5}
    delay={1}
    start={{
      transform:"translateX(500px)",
    }}
    end={
      {
        transform:"translatex(0px)",
      }
    }
    >
        <h3>Personal Information</h3>
        <ul>
          {
            personalDetails.map((item,i)=>(
              <li key ={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate>
        </div>
      <div className="about__content__serviceWrapper">
      <Animate
    play
    duration ={1.5}
    delay={1}
    start={{
      transform:"translateX(650px)",
    }}
    end={
      {
        transform:"translatex(0px)",
      }
    }>
        <div className="about__content__serviceWrapper__innerContent">
        <div>
        <FaDev size={60} color='var(--black-theme-main-color)'/>
      </div>
      <div>
        <FaDatabase size={60} color='var(--black-theme-main-color)'/>
      </div>
      <div>
        <DiApple size={60} color='var(--black-theme-main-color)'/>
      </div>
      <div>
        <DiAndroid size={60} color='var(--black-theme-main-color)'/>
      </div>
       </div>
      </Animate>
      </div>
      </div>
    </div>
  );
};
export default About;
