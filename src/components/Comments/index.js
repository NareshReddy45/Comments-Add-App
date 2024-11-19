import {useState} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

function Comments() {
  const [comments, setComments] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputTextArea, setInputTextArea] = useState('')

  const addComment = () => {
    if (inputValue.trim() && inputTextArea.trim()) {
      const newComment = {
        id: new Date().getTime(),
        username: inputValue,
        commentText: inputTextArea,
        isLiked: false,
        createdAt: new Date(),
        bgColorClass:
          initialContainerBackgroundClassNames[
            Math.floor(
              Math.random() * initialContainerBackgroundClassNames.length,
            )
          ],
      }
      setComments([...comments, newComment])
      setInputValue('')
      setInputTextArea('')
    }
  }

  const toggleLike = id => {
    setComments(
      comments.map(comment =>
        comment.id === id ? {...comment, isLiked: !comment.isLiked} : comment,
      ),
    )
  }

  const deleteComment = id => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <form>
      <div className="bg-container">
        <h1>Comments</h1>
        <div className="container">
          <div className="input-section">
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <textarea
              placeholder="Your Comment"
              value={inputTextArea}
              onChange={e => setInputTextArea(e.target.value)}
            />
            <button type="button" onClick={addComment}>
              Add Comment
            </button>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>

        <p className="comment-count-para">
          <span className="comments-count">{comments.length}</span> Comments
        </p>

        <div className="comments-list">
          <ul>
            {comments.map(comment => (
              <CommentItem
                key={comment.id}
                comment={comment}
                toggleLike={toggleLike}
                deleteComment={deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    </form>
  )
}

export default Comments
