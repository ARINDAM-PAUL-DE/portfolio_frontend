import React from 'react'

import { SocialIcon } from 'react-social-icons'

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <SocialIcon url="https://www.linkedin.com/in/arindam-paul-9bb196203/" target='_blank' rel='noopener noreferrer'/>
    </div>
    <div>
    <SocialIcon url="https://twitter.com/Arindam04806544" target='_blank' rel='noopener noreferrer'/>
    </div>
    <div>
    <SocialIcon url="https://github.com/ARINDAM-PAUL-DE" target='_blank' rel='noopener noreferrer'/>
    </div>
    </div>
  )
}

export default SocialMedia;