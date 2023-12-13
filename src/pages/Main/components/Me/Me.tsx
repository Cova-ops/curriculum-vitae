// assets
import imgMe from '../../../../assets/img_me.jpg'

// styles
import styles from './Me.module.css'

// constants
const data = {
  image: imgMe,
  name: 'Daniel Covarrubias Sanchez',
  title: 'Full-Stack Software Engineer',
  description: <><mark>Results-oriented</mark> Fullstack JavaScript Developer with a <mark>proven track record</mark> of designing, developing, and implementing complex web applications. Proficient in both frontend and backend technologies, with expertise in popular frameworks such as <mark>React and Node.js</mark>. Adept at <mark>collaborating with cross-functional teams</mark> to deliver high-quality software solutions within specified timelines. <mark>Strong analytical and problem-solving skills</mark>, coupled with a commitment to staying abreast of emerging trends in web development.</>
}

// -------------------------------------------------

const Me = () => {
  return (
    <section className={styles.section}>
      <img src={data.image} alt={data.name} />
      <div>
        <h1>{data.name}</h1>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </section>
  )
}

export default Me
