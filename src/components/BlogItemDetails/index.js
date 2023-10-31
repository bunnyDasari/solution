// Write your JS code here

import {Component} from 'raect'
import Loader from 'react-loader-spinner'
class BlogItemDetails extends Component {
  state = {dataArrayUpdate: {}, isLoadingUpdate: true}

  componentDidMount() {
    this.getFormedData()
  }

  getFormedData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const dataNew = await response.json()
    const updatedData = {
      title: dataNew.title,
      imageUrl: dataNew.image_url,
      avatarUrl: dataNew.avatar_url,
      author: dataNew.author,
      topic: dataNew.topic,
      content: dataNew.content,
    }
    this.setState({dataArrayUpdate: updatedData, isLoadingUpdate: false})
  }

  renderBlogItemDetails = () => {
    const {dataArrayUpdate} = this.state
    const {title, imageUrl, content, avatarUrl, author} = dataArrayUpdate

    return (
      <div>
        <h2>{title}</h2>
        <div>
          <img src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoadingUpdate} = this.state

    return (
      <div className="blog-container">
        {isLoadingUpdate ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
