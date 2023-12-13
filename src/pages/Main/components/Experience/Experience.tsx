// assets
import LogoXira from '../../../../assets/logo_xira.png'

// styles
import styles from './Experience.module.css'

// constants
const data = [{
  company: 'Xira, Mexico City, Mexico',
  companyImage: LogoXira,
  dateStarted: '2022-12-31T12:00:00.000Z',
  dateEnded: null,
  isCurrentlyWorkingHere: true,
  jobTitle: 'Development Manager',
  points: [
    'Act as a solutions architect whenever a new implementation is required for a client or for internal purposes. Currently overseeing two flagship products within the company.',
    'Explore ways to shorten development times by automating internal processes, enabling the implementation of new solutions in less than 1 week.',
    'Establish best programming practices for enhanced maintenance and more effective development.',
    'Keep project completion dates in mind to consistently meet client-established deadlines.'
  ],
  keyAchivement: 'Collaborate with another developer to design the current flagship product of the company, pioneering the use of this architecture in Mexico.',
  technologies: []
}, {
  company: 'Xira, Mexico City, Mexico',
  companyImage: LogoXira,
  dateStarted: '2021-12-02T12:00:00.000Z',
  dateEnded: '2022-12-31T12:00:00.000Z',
  isCurrentlyWorkingHere: false,
  jobTitle: 'Software Engineer Jr.',
  points: [
    "Development of Chatbots using the company's proprietary technology, with API integrations and connections to databases.",
    'Implementation of RPAs for the automation of processes on various websites.',
    'Being the only one in the company to meet its KPIs at the end of each quarter of the year.'
  ],
  keyAchivement: 'Creation of a new Voicebot architecture within the company to be implemented in one of the largest telecommunications companies in Mexico.',
  technologies: []
}]

// -------------------------------------------------

const Experience = () => {
  const makeDate = (text: string) => {
    const date = new Date(text)
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <section className={styles.section}>
      <h2>Work Experience</h2>
      {
        data.map((item, index) => (
          <div
            key={index}
            className={styles.job}
          >
            <aside>
              <h5>{makeDate(item.dateStarted)} {' - '} {item.isCurrentlyWorkingHere ? 'Present' : makeDate(item.dateEnded || '')}</h5>
              <img src={item.companyImage} alt={item.company} />
            </aside>
            <main>
              <h3>{item.jobTitle}</h3>
              <h4>{item.company}</h4>
              <ul>
                {
                  item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))
                }
              </ul>
              <p><strong>Key Achievement:</strong> {item.keyAchivement}</p>
            </main>
          </div>
        ))
      }
    </section>
  )
}

export default Experience
