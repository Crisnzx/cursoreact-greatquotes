import { useState } from 'react';
import { Prompt } from 'react-router';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredText, setEnteredText] = useState('');

  function submitFormHandler(event) {
    event.preventDefault();


    // optional: Could validate here
    if(enteredAuthor === '' || enteredText === '') {
      alert('You must enter all data');
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function focusFormHandler(e) {
  }
  const notShowMessage = (enteredAuthor.length === 0 && enteredText.length === 0) || hasSubmitted === true;
  return (
    <>
      <Prompt when={!notShowMessage} message={(location) => {
        console.log(location);
        return `Are you sure you wanna go to ${location.pathname} and lost all your entered data?`;
      }
      }
      />
      <Card>
        <form onFocus={focusFormHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input onChange={(e) => setEnteredAuthor(e.target.value)} type="text" id="author" />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea onChange={(e) => setEnteredText(e.target.value)} id="text" rows="5" ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setHasSubmitted(true)} className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </>

  );
};

export default QuoteForm;
