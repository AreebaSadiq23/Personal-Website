import React from 'react';
import styles from '../styles/HomeSection.module.css';

const HomeSection: React.FC = () => {
    return (
        <section id="home" className={styles.homeContainer}>
            <div className={styles.content}>
                <h1 className={styles.name}>Hi 👋 I'm Areeba</h1>  
                <h2 className={styles.title}>Frontend Developer</h2> 
                <button className={styles.button}>Hire Me</button>
            </div>
        </section>
    );
};

export default HomeSection;
