import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'
import BlogItem from '../blogs/blog-item'

export default class Blog  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
    }

    getBlogItems () {
        axios.get('https://blakeallred.devcamp.space/portfolio/portfolio_blogs', {withCredentials: true
    }).then(response => {
        this.setState({
            blogItems: response.data.portfolio_blogs
        })
    }).catch(error => {
        console.log('error with getblogfetch', error)
    })
    }

    componentDidMount() {
        this.getBlogItems();
    }

render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
        return <BlogItem key={blogItem.id} blogItem = {blogItem} />
    })
        return (
            <div className = ''>
                <h2>blog</h2>
            <div>
                <Link to='/about-me'>read more about me</Link>
                {blogRecords}
            </div>
                
            </div>
        )
    }
}