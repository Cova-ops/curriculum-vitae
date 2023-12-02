import { useState } from 'react'

// components
import Page from '../../components/Page/Page'

// assets
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'

// styles
import styles from './Main.module.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <Page title='Vite' className={styles.container}>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className={styles.logo} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className={styles.logo__react} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.read__the__docs}>
        Click on the Vite and React logos to learn more
      </p>
    </Page>
  )
}

export default App
