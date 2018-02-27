import React, {Component} from 'react';
import './Media.css'

class Media extends Component {

    handleClick = (event) => {
       
    }

    render(){
        return (
            <div className="Media" onClick={this.handleClick} >
                <div className="Media-info">
                    <img 
                        src={this.props.image}
                        alt={this.props.title}
                    />
                    <h3>{ this.props.title }</h3>
                    <p>{this.props.author}</p>
                </div>
            </div>
        )
    }


}

export default Media;