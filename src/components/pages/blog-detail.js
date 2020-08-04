import React, {Component} from 'react' 
import axios from 'axios'

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: this.props.match.params.slug
        }
    }

    getBlogItem() {
        axios.get(`https://blakeallred.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
        .then(res => {
            
            this.setState({
                blogitem: res.data.portfolio_blog
            })
            
        }).catch(console.error)
    }

    componentDidMount() {
        this.getBlogItem();
    }

render() {
    console.log('currentId', this.state.currentId)
        return (
            <div className = ''>
                <h1>blog detail component</h1>
            </div>
        )
    }
}