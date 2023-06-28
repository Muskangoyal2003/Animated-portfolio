import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate';
import './style.scss';
const Home =()=> {
  const navigate = useNavigate();
  console.log(navigate);
 const handleNavigateToContactPage=()=>{
  navigate('/contact');
 }
  

  return (
    <section className='home' id='home'>
    <div className='home__text-wrapper'> 
      <h1>
      &nbsp;&nbsp;&nbsp;Hi there!
        <br/> I'm Muskan 
      </h1>
    </div>
    <Animate
    play
    duration ={1.5}
    delay={1}
    start={{
      transform:"translateY(550px)",
    }}
    end={
      {
        transform:"translatex(0px)",
      }
    }
    >
    <div className ='home__contact'>
      <button onClick={handleNavigateToContactPage}>LET'S TALK</button>
    </div>
    </Animate>
    </section>
  )
}
export default Home;
