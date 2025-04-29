import Head from 'next/head';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    title: 'Senior data scientist',
    org: 'Dell technologies',
    date: '2023 – Present',
    description: [
      'Building multimodal AI agents to assist with hardware repair',
      'Developed a Gen business intelligence chatbot to answer questions on structured data (SQL, csv, or excel)',
      'Expert at developing supply chain forecasting models to support demand planning, and inventory management.'
    ]
  },
  {
    title: 'Data science intern/co-op',
    org: 'Dell technologies',
    date: '2022 – 2023',
    description: [
      'Developed an XGboost model to forecast DFS parts return.',
      'Developed a tool to map each customer address to nearest.'
    ]
  },
  {
    title: 'Graduate researcher',
    org: 'UT Austin',
    date: '2018 – 2023',
    description: [
      'Built statistical models to better understand ion transport in polymeric melts.'
    ]
  },
  {
    title: 'Product manager',
    org: 'ICICI Bank',
    date: '2017 – 2018',
    description: [
      'Co-owner of strategy, roadmap, and customer experience for payment modules in the mobile banking app of ICICI bank.'
    ]
  },
  {
    title: 'B.Tech - Chemical engineering',
    org: 'IIT Madras, India',
    date: '2013 – 2017',
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
