import Head from 'next/head';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Agentic coding assistant',
    tools:'[ Langgraph, codellama, ollama, and streamlit ]',
    description: 'Chatbot that helps debug a code, and develop unit tests for a given user code.',
    mediumUrl: '#',
    githubUrl: 'https://github.com/ap48579/ML_portfolio/tree/dev/chatbot/coding_assistant'
  },
  {
    title: 'Cricket match win probability',
    description: 'Real time win probability during an ipl match',
    mediumUrl: '#',
    githubUrl: 'https://github.com/ap48579/ML_portfolio/tree/dev/chatbot/ipl_predictions'
  },
  {
    title: 'Get nutrition content from food labels',
    description: 'Multimodal agent to interact with food labels',
    mediumUrl: '#',
    githubUrl: '#'
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Akhilesh Paspureddi</title>
        <meta name="description" content="Akhilesh Paspureddi - Projects" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Projects</h1>
          <div className={styles.scrollContainer}>
            <div className={styles.projectsGrid}>
              {projects.map((project, idx) => (
                <div key={idx} className={styles.projectCard}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectTools}>{project.tools}</p>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <div className={styles.links}>
                      {project.mediumUrl && (
                        <a
                          href={project.mediumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mediumLink}
                        >
                          <MediumIcon />
                          Article
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.githubLink}
                        >
                          <GitHubIcon />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// SVG Icons
const MediumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0v24h24v-24h-24zm19.938 5.686l-2.148 2.609c.15.456.15.753.15 1.147v8.465c0 .394 0 .692-.15 1.148l2.139 2.606v.597h-6.619v-.597l2.148-2.606c.15-.456.15-.753.15-1.148v-6.667l-5.947 15.063h-.806l-6.938-15.063v10.599c-.044.456.006.913.144 1.348l2.737 3.327v.597h-7.35v-.597l2.737-3.327c.135-.435.187-.892.144-1.348v-9.667c-.043-.581-.01-1.167.098-1.739l3.05 3.784v.522l-4.688 5.853-4.188-5.853v-.522l3.206-3.855c.088-.581.088-1.14 0-1.656l-3.206-3.855v-.597h4.992l3.892 8.885 3.406-8.885h4.774v.597z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
