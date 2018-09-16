import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

class hoverBox extends React.Component{
	constructor(props){
		super(props)
		this.state={
			render: false,
		}
	}

	render(){
		return(
			<div>
				<div className='hover-box'>
					It's a hover BOX.
					Check it out!
				</div>
			</div>
		)
	}
}

export default hoverBox;