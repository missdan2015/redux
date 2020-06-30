import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postAction } from './actions/post';

class Index extends Component {
   
    componentDidMount() {
        this.props.dispatch(postAction)
    }
    render() {
        console.log(this.props.post,'sssss')
        const { list=[] } = this.props.post;
        return (
            <div>
                test3,测试react-redux
                <ul>
                    {
                        list.map((item,index) => {
                            return (
                            <li key={index}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapPropsState = (state, ownProps) => {
    return {
        post: state.post
    }
}
export default connect(mapPropsState)(Index)
