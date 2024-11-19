import './index.css'
import {formatDistanceToNow} from 'date-fns'

function CommentItem({comment, toggleLike, deleteComment}) {
  const {id, username, commentText, isLiked, createdAt, bgColorClass} = comment
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const timeAgo = formatDistanceToNow(createdAt)

  return (
    <li className="commenting-section">
      <div className="comment-header">
        <div className={`initial-container ${bgColorClass}`}>
          <p className="initial">{username.charAt(0).toUpperCase()}</p>
        </div>
        <h1 className="username">{username}</h1>
        <p className="time">{timeAgo} ago</p>
      </div>
      <div className="comment-details">
        <p className="comment">{commentText}</p>
        <div className="actions">
          <div
            className="like-section"
            role="button"
            tabIndex={0}
            onClick={() => toggleLike(id)}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') toggleLike(id)
            }}
          >
            <img src={likeImgUrl} alt="like" className="like-image" />
            <span>Like</span>
          </div>
          <button
            className="delete-button"
            data-testid="delete"
            onClick={() => deleteComment(id)}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
