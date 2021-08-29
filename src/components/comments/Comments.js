import { useCallback, useEffect, useState } from 'react';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import { useParams } from 'react-router';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let commentsJsx;

  if (status === 'pending') {
    commentsJsx = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    console.log(loadedComments);
    commentsJsx = <CommentsList comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    commentsJsx = <p className="centered">No comments added yet.</p>;
  }

  const addedCommentHandler = useCallback(() => {
    sendRequest(id);
    setIsAddingComment(false);
  }, [sendRequest, id]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddedComment={addedCommentHandler} />
      )}
      {commentsJsx}
    </section>
  );
};

export default Comments;
