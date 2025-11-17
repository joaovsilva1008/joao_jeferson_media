import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [n3, setN3] = useState()
  const [n4, setN4] = useState()
  const [n5, setN5] = useState()
  const [n6, setN6] = useState()
  const [resp, setResp] = useState()

  const [error, setError] = useState('')

  useEffect(() => {
    if (n1 !== undefined && n2 !== undefined && n3 !== undefined && n4 !== undefined && n5 !== undefined && n6 !== undefined && !isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4) && !isNaN(n5) && !isNaN(n6)) {
      setResp(parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5) + parseFloat(n6) / 6)


      setError('')
    } else {
      setError('Digite valores númericos para calcular a Media')
    }
  }, [n1, n2, n3, n4, n5, n6])
  return (
    <>
      <h1 className={styles.title}>Média</h1>
      <p>{error}</p>
      <div className={styles.wrap}>
        <input type="number" onChange={(e) => setN1(e.target.value)} value={n1} placeholder='Insira um número' />
        <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder='Insira o 2 número' />
        <input type="number" onChange={(e) => setN3(e.target.value)} value={n3} placeholder='Insira o 3 número' />
        <input type="number" onChange={(e) => setN4(e.target.value)} value={n4} placeholder='Insira o 4 número' />
        <input type="number" onChange={(e) => setN5(e.target.value)} value={n5} placeholder='Insira o 5 número' />
        <input type="number" onChange={(e) => setN6(e.target.value)} value={n6} placeholder='Insira o 6 número' />

      </div>

      <div className={styles.wrapResps}>
        <h2>Resultado da Média</h2>
        <h3>{resp?.toFixed(2)}</h3>
      </div>
    </>
  )
}

export default App