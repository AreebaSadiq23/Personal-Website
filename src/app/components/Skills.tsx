import React from 'react';
import styles from '../styles/Skills.module.css';

interface Skill {
    name: string;
    description: string;
}

const skillsData: Skill[] = [
    { name: 'HTML', description: 'Experienced in structuring web pages' },
    { name: 'CSS', description: 'Proficient in styling and layouts' },
    { name: 'JavaScript', description: 'Skilled in building dynamic web applications' },
    { name: 'TypeScript', description: 'Strong understanding of typed JavaScript' },
    { name: 'TailwindCSS', description: 'Building interactive UIs' },
    { name: 'Next.js', description: 'Developing server-side rendered applications' },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2>My Skills</h2>
            <div className={styles.skillsContainer}>
                {skillsData.map((skill) => (
                    <div key={skill.name} className={styles.card}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <h3>{skill.name}</h3> 
                            </div>
                            <div className={styles.cardBack}>
                                <p>{skill.description}</p> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
