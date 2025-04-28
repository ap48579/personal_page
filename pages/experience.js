import Head from 'next/head';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    title: 'Senior data scientist',
    org: 'Dell technologies',
    date: '2023 – Present',
    description: [
      'Leading a team building advanced AI solutions for medical imaging.',
      'Architected scalable ML pipelines and deployed models in production.',
      'Worked with cross-functional teams to deliver AI-driven MedTech products.'
    ]
  },
  {
    title: 'Data science intern',
    org: 'Dell technologies',
    date: '2022 – 2023',
    description: [
      'Developed deep learning models for brain imaging analysis.',
      'Optimized model performance and reliability for clinical use.'
    ]
  },
  {
    title: 'Graduate researcher',
    org: 'UT Austin',
    date: '2021 – 2022',
    description: [
      'Built and maintained ML infrastructure for data processing.',
      'Collaborated with researchers to translate ideas into products.'
    ]
  },
  {
    title: 'Product manager',
    org: 'DCKAP',
    date: '2020 – 2021',
    description: [
      'Implemented AI features for enterprise software solutions.',
      'Worked on NLP and computer vision projects.'
    ]
  },
  {
    title: 'B.Tech - Chemical engineering',
    org: 'IIT Madras, India',
    date: '2015 – 2019',
    description: []
  }
];

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Akhilesh Paspureddi</title>
        <meta name="description" content="Akhilesh Paspureddi - Experience" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Experience</h1>
          <div className={styles.timeline}>
            {experiences.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h2 className={styles.title}>{exp.title}</h2>
                  <div className={styles.meta}>
                    <span className={styles.org}>{exp.org}</span>
                    <span className={styles.date}>{exp.date}</span>
                  </div>
                  {exp.description.length > 0 && (
                    <ul className={styles.descList}>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {idx !== experiences.length - 1 && <div className={styles.divider}></div>}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
