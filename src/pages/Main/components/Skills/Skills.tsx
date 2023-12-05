// styles
import styles from './Skills.module.css'

// constants
const data = [
  'AWS',
  'Azure',
  'Unix',
  'NodeJS',
  'JavaScript',
  'TypeScript',
  'Python',
  'APIs Rest & GraphQL',
  'NoSQL',
  'SQL',
  'React',
  'Angular',
  'Git',
  'Unit Testing',
  'Integration Testing',
  'End-to-End Testing',
  'Security Testing',
  'Performance Testing'
]

const Skills = () => {
  return (
    <section className={styles.section}>
      <h2>Technical Skills</h2>
      <div>
        {
          data.map((item) => <span key={item} className={styles.skill}>{item}</span>)
        }
      </div>
    </section>
  )
}

export default Skills
