import React from 'react';

import Hero from "../components/Hero"

class SoundPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLoadDone: false
        }
    }

    handleImageLoading() {
        this.setState({
            imageLoadDone: true
        })
    }

    render(){
        return(
        <div>
        <Hero title={this.props.title} subTitle={this.props.subTitle} className="mb-0"/>
        </div>
    )
    }
} 

export default SoundPage;