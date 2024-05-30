import * as React from "react";
import './template3.scss'

interface SkillProps {
    skill: string;
}

interface ExpertiseProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => (
    <div className="skill">
        <div className="skill-icon" />
        <div className="skill-name">{skill}</div>
    </div>
);

const Expertise: React.FC<ExpertiseProps> = ({ name }) => (
    <div className="expertise-item">{name}</div>
);

const skills: string[] = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"];

const expertises: string[] = ["Area of Expertise 1", "Area of Expertise 2", "Area of Expertise 3", "Area of Expertise 4", "Nintendo 64"];

const Template3: React.FC = () => (
    <>

        <div className="template3-main-container">
            <section className="content-column">
                <section className="statement-section">
                    <div className="statement-content">
                        <h1 className="statement-header">Statement: what makes me worth hiring?</h1>
                        <p className="statement-description">
                            Set the scene, define the problem. How can this be fixed? Summary or teaser for the details below of how I can help solve this.
                        </p>
                        <h2 className="experience-header">Experience</h2>
                        <div className="expertise-grid">
                            {expertises.map((expertise, index) => (
                                <Expertise key={index} name={expertise} />
                            ))}
                        </div>
                        <h2 className="skills-header">Skills</h2>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <Skill key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="level-experience-section">
                    <div className="level-experience-column">
                        <div className="level-experience-content">
                            <h2 className="level-experience-title">Level of experience & what that means for the hiring manager</h2>
                            <p className="level-experience-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </p>
                        </div>
                    </div>
                    <div className="process-image" />
                </section>
                <section className="process-section">
                    <div className="process-column">
                        <div className="process-content">
                            <h2 className="process-title">What I do. My process as a headline</h2>
                            <p className="process-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </p>
                        </div>
                    </div>
                    <div className="process-image" />
                </section>
                <section className="benefits-section">
                    <div className="benefits-column">
                        <div className="benefits-content">
                            <h2 className="benefits-title">How my work will help my employer</h2>
                            <p className="benefits-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                            </p>
                        </div>
                    </div>
                    <div className="benefits-image" />
                </section>
                <div className="cta-section">
                    <div className="cta-button">Get in touch</div>
                </div>
            </section>
        </div>
    </>
);

export default Template3;