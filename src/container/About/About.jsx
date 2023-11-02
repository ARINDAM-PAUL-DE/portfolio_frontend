import React from 'react';
import "./About.scss";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

// const abouts = [
//   { title: 'web Development', description: 'I am a Good Web Developer', imgUrl: images.about01 },
//   { title: 'Frontend Development', description: 'I am a Good Frontend Dev', imgUrl: images.about02 },
//   { title: 'UI/UX', description: 'I am Good at UI/UX Design', imgUrl: images.about03 },
//   { title: 'Full Stack Developer', description: 'I am a Full Stack Web Developer', imgUrl: images.about04 }
// ];




const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);


  return (
    <div>
      <h2 className='head-text'>I Know that <span> Good Design </span><br /> means <span> Good Business </span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(
 MotionWrap(About, 'app__about'),
 'about',
 'app__whitebg'
  );