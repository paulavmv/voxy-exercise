import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Result } from '@/components/result'
import { useState } from 'react'


export default function Home() {

  const [inputText, setInputText] = useState(null);

  const checkWordCount = (event) => {

    event.preventDefault()

    const textInput = event.target.textInput.value;

    setInputText(textInput);
  }



  return (
    <>
      <Head>
      <title>Voxy - Exercise</title>
        <meta name="description" content="Page that contains a word counter" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
            <h1>Word Counter Page</h1>
            <form onSubmit={checkWordCount} className={styles.form}>
                <label htmlFor="mainInput">Input your text here</label>
                <textarea id="textInput" name="textInput" className={styles.textarea} required></textarea>
                <input type="submit" className={styles.submitButton} value="Count the words!"></input>  
            </form>          
            <Result input={inputText}/>
      </main>
    </>
  )
}
