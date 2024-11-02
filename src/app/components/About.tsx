  import React from 'react';
  import Image from 'next/image';
  import styles from '../styles/About.module.css'; 

  const About: React.FC = () => {
    return (
      <section id="about" className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image 
              src="/img back.jpeg"
              alt="About Me" 
              className={styles.roundImage} 
              width={300} 
              height={300} 
              layout="responsive" 
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
              I am a Frontend developer with expertise in HTML, CSS, TypeScript, Tailwind CSS, and Next.js. I am passionate about learning new technologies and implementing them to create innovative and efficient solutions. I enjoy staying updated with industry trends and continuously improving my skills to deliver high-quality web applications that enhance user experience.
            </p>
          </div>
        </div>
      </section>
    );
  };

  export default About;
