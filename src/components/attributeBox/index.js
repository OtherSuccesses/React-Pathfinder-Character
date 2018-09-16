import React from 'react';
import ReactDOM from 'react-dom';
import HoverBox from '../hoverBox';

class attributeBox extends React.Component{
	constructor(props){
		super(props)
		this.state={
			mouseHovering: false
		}
		this.handleMouseHover = this.handleMouseHover.bind(this)
	}

	handleMouseHover() {
		this.setState(this.toggleMouseHovering)
	}

	toggleMouseHovering(){
		return {
			mouseHovering: !this.state.mouseHovering
		}
	}

	render(){
		return(
			<td
				onMouseEnter={this.handleMouseHover}
				onMouseLeave={this.handleMouseHover}
				>{this.props.pcAtt.mods ?
					this.props.pcAtt.base+this.props.pcAtt.mods.fromRace:
					this.props.pcAtt.base
				}{this.state.mouseHovering &&
					<HoverBox attElem = {this.props.pcAtt}/>
				}
			</td>
		)
	}
}

// {this.props.pcAtt.mods.fromRace ?
// 					{this.props.pcAtt.base+this.props.pcAtt.mods.fromRace}:
// 					{this.props.pcAtt.base}
export default attributeBox