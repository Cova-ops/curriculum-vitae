import { Fragment } from 'react'

// styles
import styles from './Projects.module.css'

// constants
const data = [
  {
    name: 'My Portfolio',
    description: "I've got some cool projects lined up that I'm super proud of. From sleek designs to coding adventures, it's all there. And wait, there's more! Dive into my writing samples and get a feel for who I am beyond the projects. It's like a backstage pass to my creative world.",
    link: 'https://portfolio.dacovasan.dev/'
  }
]

const Projects = () => {
  return (
    <section className={styles.section}>
      <h2>Personal Projects</h2>
      <div>
        {
          data.map((item, index) => (
            <Fragment key={index}>
              <a
                key={index}
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className={styles.project}
              >
                {item.name}
              </a>
              <p>{item.description}</p>
            </Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
