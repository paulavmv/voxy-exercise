import styles from './result.module.css';


export function Result({ input }) {

    
    const result = () => {
        if (input) {
           return countWords(input); 
        }
        
    }

    const countWords = (textInput) => {

        const trimmedText = textInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                                    .replace(/\s{2,}/g, ' ')
                                    .trim()
        if(trimmedText.length === 0) {
            return 0;
        } else {
            return trimmedText.split(" ").length;
        }
                                
    }

    return (<>
    <section  className={styles.resultSection}>
          <h2 className={styles.resultTitle}>Result</h2>
          <div className={styles.result}>
            <h3 className={styles.wordCount}>Total word count: <b data-testid="result">{result()}</b></h3> 
            <p className={styles.inputText}>{input}</p>          
          </div>

    </section>
    </>
   );
  }

  