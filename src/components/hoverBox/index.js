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
					<p>Base: {this.props.attElem.base}</p> 
					{this.props.attElem.mods.fromRace ? 
						<p>From Race: {this.props.attElem.mods.fromRace}</p>:null}
				</div>
			</div>
		)
	}
}

export default hoverBox;