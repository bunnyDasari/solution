// Write your JS code here
import {Link} from 'react-router-dom'
const BlogItem = props => {
  const {dataArrayDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = dataArrayDetails
  return (
    <Link to={`/blogs/${id}`}>
      <div>
        <img src={imageUrl} alt={`item${id}`} />
        <p>{topic}</p>
        <h1>{title}</h1>
        <img src={avatarUrl} alt={`avatar${id}`} />
        <p>{author}</p>
      </div>
    </Link>
  )
}

export default BlogItem
