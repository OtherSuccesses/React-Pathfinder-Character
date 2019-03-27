import React from 'react';
import './index.css';
import AttributeBox from '../attributeBox';
import AttributeMod from '../attributeMod';

class attributes extends React.Component{
	constructor(props){
		super(props)
		this.state={
			mouseHovering: false
		}
		this.handleMouseHover = this.handleMouseHover.bind(this)
	}

	handleMouseHover() {
		this.setState(this.toggleMouseHovering)
		console.log('Console logging this on enter...:',this)
	}

	toggleMouseHovering(){
		return {
			mouseHovering: !this.state.mouseHovering
		}
	}


	render(){
		return(
		<div>
			<div className='core-attributes'>
				<table id='att-table'>
					<tr>
						<td className='labels'>Ability Name</td>
						<td className='labels'>Ability Score</td>
						<td className='labels'>Ability Modifer</td>
						<td className='labels'>Temp Adjustment</td>
						<td className='labels'>Temp Modifier</td>
					</tr>
					<tr className='att-row'>
						<th>STR
						<p className="labels">Strength</p>
						</th>
						<AttributeBox pcAtt={this.props.player.scores.strength} attribute="strength"/>
						<AttributeMod attMod={this.props.player.scores.strength.modifier}/>
						<td></td>
						<td></td>
					</tr>
					<tr className='att-row'>
						<th>DEX
						<p className="labels">Dexterity</p>
						</th>
						<AttributeBox pcAtt={this.props.player.scores.dexterity} attribute="dexterity"/>
						<AttributeMod attMod={this.props.player.scores.dexterity.modifier}/>
						<td></td>
						<td></td>
					</tr>
					<tr className='att-row'>
						<th>CON
						<p className="labels">Constitution</p>
						</th>
						<AttributeBox pcAtt={this.props.player.scores.constitution} attribute="constitution"/>
						<AttributeMod attMod={this.props.player.scores.constitution.modifier}/>
						<td></td>
						<td></td>
					</tr>
					<tr className='att-row'>
						<th>INT
						<p className="labels">Intelligence</p>
						</th>
						<AttributeBox pcAtt={this.props.player.scores.intelligence} attribute="intelligence"/>
						<AttributeMod attMod={this.props.player.scores.intelligence.modifier}/>
						<td></td>
						<td></td>
					</tr>
					<tr className='att-row'>
						<th>WIS
						<p className="labels">Wisdom</p>
						</th>
						<AttributeBox pcAtt={this.props.player.scores.wisdom} attribute="wisdom"/>
						<AttributeMod attMod={this.props.player.scores.wisdom.modifier}/>
						<td></td>
						<td></td>
					</tr>
					<tr className='att-row'>
						<th>CHA
						<p className="labels">Charisma</p>
						</th>
						<AttributeBox pcAtt={this.props.player.scores.charisma} attribute="charisma"/>
						<AttributeMod attMod={this.props.player.scores.charisma.modifier}/>
						<td></td>
						<td></td>
					</tr>
				</table>
				<div className='hp-initiative'>
					<div className='hp-row'>
						<div className='hp-label'>
							HP
							<p className='labels'>Hit Points</p>
						</div>
						<div className='hp-total'>
							<div className='hp-total-label'>
								Total
							</div>
							{this.props.player.hp}
						</div>
						<div className='dr-box'>
							<div className='dr-box-label'>
								DR
							</div>
						</div>
					</div>
					<div className='wound-block'>
						<p className='labels'>Wounds/Current HP</p>
						<div className='wound-box'>
						</div>
					</div>
					<div className='nonlethal-block'>
						<p className='labels'>Nonlethal Damage</p>
						<div className='nonlethal-box'>
						</div>
					</div>
					<div className='initiative-row'>
						<div className='init-label'>
							Initiative
							<p className='labels'>Modifier</p>
						</div>
						<div className='init-total'>
							<div className='hp-total-label'>
								Total
							</div>
						</div>
						=
						<div className='init-dex'>
							<div className='dr-box-label'>
								Dex Modifier
							</div>
						</div>
						+
						<div className='init-misc'>
							<div className='dr-box-label'>
								Misc Modifier
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='AC-section'>
				<div className='base-AC'>

				</div>
				<div className='other-AC'>

				</div>
			</div>
		</div>
		)
	}
}

export default attributes