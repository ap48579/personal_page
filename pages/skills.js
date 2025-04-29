import Head from 'next/head';
import styles from '../styles/Skills.module.css';

const skills = {
  ai_ml: [
    "Computer vision",
    "NLP",
    "LLM",
    "Prompt Engineering",
    "RAG",
    "Time series forecasting",
    "Model Evaluation & Explainability",
    "Hyperparameter Tuning"
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Azure ML",
    "Azure datalake",
    "Databricks",
    "MLflow"
  ],
  programming: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "FastAPI",
    "SQL",
    "JavaScript",
    "C"
  ]
};

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Akhilesh Paspureddi</title>
        <meta name="description" content="Akhilesh Paspureddi - Skills" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Skills</h1>
          <div className={styles.sectionsContainer}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>AI / ML Modeling</h2>
              <div className={styles.skillGrid}>
                {skills.ai_ml.map((skill, idx) => (
                  <div key={idx} className={styles.skillCard}>{skill}</div>
                ))}
              </div>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>DevOps</h2>
              <div className={styles.skillGrid}>
                {skills.devops.map((skill, idx) => (
                  <div key={idx} className={styles.skillCard}>{skill}</div>
                ))}
              </div>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Programming Languages & Packages</h2>
              <div className={styles.skillGrid}>
                {skills.programming.map((skill, idx) => (
                  <div key={idx} className={styles.skillCard}>{skill}</div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
