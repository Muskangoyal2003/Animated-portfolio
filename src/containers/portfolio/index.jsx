import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs'
const Portfolio=()=> {
  return (
    <div id='portfolio' className='portfolio'>
      <PageHeaderContent 
      headerText ='My Portfolio'
      icon={<BsInfoCircleFill size={40}/>}/>
    </div>
  )
}
export default Portfolio;
