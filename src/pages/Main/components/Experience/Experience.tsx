// assets
import logoXira from '../../../../assets/logo_xira.png'

// styles
import styles from './Experience.module.css'

// constants
const data = [{
  company: 'Xira, Mexico City, Mexico',
  companyImage: logoXira,
  dateStarted: '2022-12-31T12:00:00.000Z',
  dateEnded: null,
  isCurrentlyWorkingHere: true,
  jobTitle: 'Development Manager',
  points: [
    'Manage the time of the development team with all the current projects of the company, such as estimating times for future projects in the company, as well as validating scope and requirements.',
    'Organize the development team to do a restore to the code base that is used for most of the new implementations, so as not to have obsolete code.',
    'Being responsible for completing current projects on time, such as resolving any questions or issues that have arisen during development time.',
    'Be in constant search of new technologies and tools to improve or create new products for sale in the company.'
  ],
  keyAchivement: 'Being the only one in the company to meet the KPIs assigned at the beginning of each quarter.',
  technologies: []
}, {
  company: 'Xira, Mexico City, Mexico',
  companyImage: logoXira,
  dateStarted: '2021-12-02T12:00:00.000Z',
  dateEnded: '2022-12-31T12:00:00.000Z',
  isCurrentlyWorkingHere: false,
  jobTitle: 'Software Engineer Jr.',
  points: [
    'Chatbots creations for the interaction of international users with the different services of the companies using APIs, RPAs, and DB to carry out automated transactional actions.',
    'Development of new technology to implement a virtual voice assistant to one of the most important telecommunication companies in Mexico.',
    'Being the only one in the company to meet the KPIs assigned at the beginning of each quarter.'
  ],
  keyAchivement: 'Being the only one in the company to meet the KPIs assigned at the beginning of each quarter.',
  technologies: []
}]

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
