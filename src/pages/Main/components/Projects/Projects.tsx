// styles
import styles from './Projects.module.css'

// constants
const data = [
  {
    date: '05/2023',
    name: 'My Portfolio',
    description: <>I've got some cool projects lined up that I'm super proud of. From sleek designs to coding adventures, it's all there. And wait, there's more! Dive into my writing samples and get a feel for who I am beyond the projects. It's like a backstage pass to my creative world. <a href='https://portfolio.dacovasan.dev/' target='_blank' rel='noreferrer'>Click!</a></>,
    link: 'https://portfolio.dacovasan.dev/'
  }
]

// -------------------------------------------------

const Projects = () => {
  return (
    <section className={styles.section}>
      <h2>Personal Projects</h2>
      <div>
        {
          data.map((item, index) => (
            <nav key={index}>
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className={styles.project}
              >
                <h5>{item.date}</h5>
                <h3>{item.name}</h3>
              </a>
              <p>{item.description}</p>
            </nav>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
