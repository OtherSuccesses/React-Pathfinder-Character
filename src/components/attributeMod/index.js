import React from 'react';
import ReactDOM from 'react-dom';

class attributeMod extends React.Component{
	constructor(props){
		super(props)
		this.state={
		}
	}

	render(){
		return(
			<td>{this.props.attMod}
			</td>
		)
	}
}

export default attributeMod