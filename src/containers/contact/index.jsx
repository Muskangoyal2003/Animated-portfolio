import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs'
const Contact =()=> {
  return (
    <div id='contact' className='contact'>
      <PageHeaderContent 
      headerText ='Contact Me'
      icon={<BsInfoCircleFill size={40}/>}/>
    </div>
  )
}
export default Contact;
