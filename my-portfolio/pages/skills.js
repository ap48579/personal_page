import Head from 'next/head';
import styles from '../styles/Skills.module.css';

const skills = {
  ai_ml: [
    "Deep Learning (CNN, RNN, Transformers)",
    "NLP (LLMs, BERT, GPT, RAG)",
    "Computer Vision",
    "Reinforcement Learning",
    "Transfer Learning",
    "Prompt Engineering",
    "Model Evaluation & Explainability",
    "Hyperparameter Tuning",
    "Model Deployment",
    "MLOps"
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3, SageMaker)",
    "Azure ML",
    "GCP (Vertex AI)",
    "CI/CD (GitHub Actions, Jenkins)",
    "Terraform",
    "MLflow",
    "DVC",
    "Linux/Unix"
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
    "TypeScript"
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
