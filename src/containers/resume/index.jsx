import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {  
  VerticalTimeline ,
  VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {data} from './utils';
import './style.scss'

const Resume =()=> {
  return (
    <div id='resume' className='resume'>
    <PageHeaderContent 
    headerText ='My Resume'
    icon={<BsInfoCircleFill size={40}/>}/>
    <div className="timeline">
            <div className="timeline__education">
            <h3 className="timeline__education__header-text">
              Education
              </h3>
              <VerticalTimeline lineColor='var(--black-theme-main-color)'>
                {
                  data.education.map((item,i)=>{
                    return(
                 <VerticalTimelineElement key={i} className='timeline__education__vertical-timeline-element'iconStyle={{ background: 'rgb(0,0,0)', color:'var(--black-theme-sub-text-color' }} icon={<BsFillBriefcaseFill/>} >
                 <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p className='para'>
                    {item.description}

                  </p>
                 </div>
                 </VerticalTimelineElement>)
                  })
                }
       </VerticalTimeline>
</div>
  </div>    
      </div>
  )
}
export default Resume;
