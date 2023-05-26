import Loader from'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Component } from 'react'
import BlogItem from '../BlogItem'
import './index.css'

/*const BlogData=[
  { 
    id:1,
    title:"talluro",
    imageUrl:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png",
    avatarUrl:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png",
    author:"manoj",
    topic:"reacj.ks"
  },
  { 
    id:2,
    title:"talluro",
    imageUrl:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png",
    avatarUrl:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png",
    author:"manoj",
    topic:"reacj.ks"
  }
]
*/

class BlogsList extends Component{
  state={BlogData:[],isLoading:true}
  componentDidMount(){
    this.getBlogData()
  }
  getBlogData = async()=>{
    const response =await fetch("https://apis.ccbp.in/blogs")
    const data=await response.json()  
    console.log(data)
    const UpdateData = data.map(eachItem =>({//converting snack case to camelcase
      id:eachItem.id,
      title:eachItem.title,
      imageUrl:eachItem.image_url,
      avatarUrl:eachItem.avatar_url,
      author:eachItem.author,
      topic:eachItem.topic,
    } ))
    //console.log(UpdateDate)
    this.setState({BlogData:UpdateData,isLoading:false})
  }
 
  render(){
    const {BlogData}=this.state
    const{isLoading}=this.state
  return(
    <div className='Lader'>
      {isLoading?(<Loader type="TailSpin" color='#00BFFF' height={50} width={50}/> ): (BlogData.map(items=>
        <BlogItem BlogData={items} key={items.id}/>
      ))}
    </div>
  )}
}
export default BlogsList