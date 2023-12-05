/* eslint-disable react/jsx-closing-tag-location */
import { AiFillGithub } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdContactPage } from 'react-icons/md'

// styles
import styles from './Contact.module.css'

// constants
const data = [
  {
    icon: <BsPhone color='#5EBBAA' size={24} />,
    text: '+52 55 1005 7272',
    link: null
  },
  {
    icon: <GrMail color='#5EBBAA' size={24} />,
    text: 'dacovasan00@gmail.com',
    link: null
  },
  {
    icon: <IoLocationSharp color='#5EBBAA' size={24} />,
    text: 'Mexico State, Mexico',
    link: null
  },
  {
    icon: <AiFillGithub color='#5EBBAA' size={24} />,
    text: 'github.com/Cova-ops',
    link: 'https://github.com/Cova-ops'
  },
  {
    icon: <FaLinkedinIn color='#5EBBAA' size={24} />,
    text: 'linkedin.com/daniel-covarrubias-sanchez',
    link: 'https://www.linkedin.com/in/daniel-covarrubias-a5b2b7191/'
  },
  {
    icon: <MdContactPage color='#5EBBAA' size={24} />,
    text: 'My Portfolio',
    link: 'https://portfolio.dacovasan.dev/'
  }
]

const Contact = () => {
  return (
    <section className={styles.section}>
      {
        data.map((item, index) => item.link
          ? <a
              key={index}
              href={item.link}
              target='_blank'
              rel='noreferrer'
              className={styles.contact}
            >
            {item.icon}
            <span className={styles.text}>{item.text}</span>
          </a>
          : <div
              key={index}
              className={styles.contact}
            >
            {item.icon}
            <span className={styles.text}>{item.text}</span>
          </div>

        )
      }
    </section>
  )
}

export default Contact
