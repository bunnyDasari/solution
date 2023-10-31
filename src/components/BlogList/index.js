// Write your JS code here

import {Component} from 'raect'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
class BlogList extends Component {
  state = {dataArray: {}, isLoading: true}

  componentDidMount() {
    this.updateInfo()
  }

  updateInfo = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatedData = data.map(prevData => ({
      id: prevData.id,
      title: prevData.title,
      imageUrl: prevData.image_url,
      avatarUrl: prevData.avatar_url,
      author: prevData.author,
      topic: prevData.topic,
    }))
    this.setState({dataArray: formatedData, isLoading: false})
  }

  render() {
    const {dataArray, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <ul>
            {dataArray.map(eachItem => (
              <BlogItem dataArrayDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
