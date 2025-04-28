import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akhilesh's ML Portfolio</title>
        <meta name="description" content="Akhilesh Paspureddi ML Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/profile_pic.png" alt="Akhilesh Profile Picture" className={styles.avatar} />
        <h1>👋 Hello! I'm <strong>Akhilesh</strong></h1>
        <p>I am a Machine learning engineer experienced in building cutting-edge AI/ML & Gen AI products.</p>

        <nav className={styles.navbar} aria-label="Primary">
          <ul>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Get in Touch</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}