// styles
import styles from './Education.module.css'

// constants
const data = [
  {
    school: 'Superior School of Computing - IPN, MX',
    degree: 'Bachelor of Computer Systems Engineering',
    start: '08/2018',
    end: '06/2022',
    current: false,
    description: "I worked on a graduation project focused on detecting negative emotions through the analysis of brain waves using machine learning. I implemented a mobile application supported by a server on Azure for efficient data processing, prioritizing security and accuracy. This innovative approach provides a practical solution for assessing users' emotional states."
  }
]

// -------------------------------------------------

const Education = () => {
  return (
    <section className={styles.section}>
      <h2>Education</h2>
      <div>
        {
          data.map((item, index) => (
            <nav key={index} className={styles.study}>
              <div>
                <h2>{item.degree}</h2>
                <h3>{item.school}</h3>
                <h4>{item.start} - {item.current ? 'present' : item.end}</h4>
              </div>
              <p>{item.description}</p>
            </nav>
          ))
        }
      </div>
    </section>
  )
}

export default Education
