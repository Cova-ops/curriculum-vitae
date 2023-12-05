// components
import { Page } from '../../components'
import { Contact, Experience, Me, Projects, Skills } from './components'

// styles
import styles from './Main.module.css'

function App () {
  return (
    <Page title='CV' className={styles.container}>

      <Me />

      <Contact />

      <Experience />

      <Skills />

      <Projects />

    </Page>
  )
}

export default App
