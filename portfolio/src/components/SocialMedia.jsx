import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.linkedin.com/in/kritgrover/' rel='noreferrer' target='_blank'><div><BsLinkedin /></div></a>
        <a href='https://www.instagram.com/_krizgrover_/' rel='noreferrer' target='_blank'><div><BsInstagram /></div></a>
        <a href='https://www.github.com/kritgrover/' rel='noreferrer' target='_blank'><div><BsGithub /></div></a>
    </div>
  )
}

export default SocialMedia