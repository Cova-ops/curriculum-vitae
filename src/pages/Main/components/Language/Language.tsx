// styles
import styles from './Language.module.css'

// constants
const data = [
  {
    language: 'Spanish',
    progress: 100
  },
  {
    language: 'English',
    progress: 80
  }
]

// -------------------------------------------------

const Language = () => {
  return (
    <section className={styles.section}>
      <h2>Languages</h2>
      <div>
        {
          data.map((item, index) => (
            <nav key={index} className={styles.language}>
              <h3><span>{item.language}</span> <span>{item.progress}%</span></h3>
              <progress value={item.progress} max='100' />
            </nav>
          ))
        }
      </div>
    </section>
  )
}

export default Language
