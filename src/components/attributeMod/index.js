import React from 'react';

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