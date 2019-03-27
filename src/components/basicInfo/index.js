import React from 'react';
import '../../index.css';


class basicInfo extends React.Component{
	constructor(props){
		super(props)
	}

componentDidMount(){
	console.log('Props in basic info: ', this.props);
}

	render(){
		return(	
		<div className='basic-info'>
            <div className='basic-left'>
              <div className='basic-row'>
                <div className='basic-data-cell' id="name-cell">
                  <div className='basic-data-line' id="name-line">
                  </div>
                  <div className='basic-label'>
                    Name
                  </div>
                </div>
                <div className='basic-data-cell' id="alignment-cell">
                  <div className='basic-data-line' id="alignment-line">
                  {this.props.player.alignment}
                  </div>
                  <div className='basic-label'>
                    Alignment
                  </div>
                </div>
              </div>
              <div className='basic-row'>
                <div className='basic-data-cell' id='class-cell'>
                  <div className='basic-data-line' id='class-line'>
                  {this.props.player.pcClass}
                  </div>
                  <div className='basic-label'>
                    Class and Level
                  </div>
                </div>
              </div>
              <div className='basic-row'>
                <div className='basic-data-cell' id='race-cell'>
                  <div className='basic-data-line' id='race-line'>
                  {this.props.player.race}
                  </div>
                  <div className='basic-label'>
                    Race
                  </div>
                </div>
                <div className='basic-data-cell' id='size-cell'>
                  <div className='basic-data-line' id='size-line'>
                  {this.props.player.size}
                  </div>
                  <div className='basic-label'>
                    Size
                  </div>
                </div>
                <div className='basic-data-cell' id='gender-cell'>
                  <div className='basic-data-line' id='gender-line'>
                  {this.props.player.gender}
                  </div>
                  <div className='basic-label'>
                    Gender
                  </div>
                </div>
                <div className='basic-data-cell' id='age-cell'>
                  <div className='basic-data-line' id='age-line'>
                  {this.props.player.age}
                  </div>
                  <div className='basic-label'>
                    Age
                  </div>
                </div>
              </div>   
            </div>
            <div className='basic-right'>
              <div className='basic-row'>
                <div className='basic-data-cell' id='player-cell'>
                  <div className='basic-data-line' id='player-line'>
                  </div>
                  <div className='basic-label'>
                    Player
                  </div>
                </div>
              </div>
              <div className='basic-row'>
                <div className='basic-data-cell' id="deity-cell">
                  <div className='basic-data-line' id="deity-line">
                  </div>
                  <div className='basic-label'>
                    Deity
                  </div>
                </div>
                <div className='basic-data-cell' id="homeland-cell">
                  <div className='basic-data-line' id="homeland-line">
                  </div>
                  <div className='basic-label'>
                    Homeland
                  </div>
                </div>
              </div>
              <div className='basic-row'>
                <div className='basic-data-cell' id='height-cell'>
                  <div className='basic-data-line' id='height-line'>
                  {this.props.player.physical.height}
                  </div>
                  <div className='basic-label'>
                    Height
                  </div>
                </div>
                <div className='basic-data-cell' id='weight-cell'>
                  <div className='basic-data-line' id='weight-line'>
                  {this.props.player.physical.weight}
                  </div>
                  <div className='basic-label'>
                    Weight
                  </div>
                </div>
                <div className='basic-data-cell' id='hair-cell'>
                  <div className='basic-data-line' id='hair-line'>
                  </div>
                  <div className='basic-label'>
                    Hair
                  </div>
                </div>
                <div className='basic-data-cell' id='eyes-cell'>
                  <div className='basic-data-line' id='eyes-line'>
                  </div>
                  <div className='basic-label'>
                    Eyes
                  </div>
                </div>
              </div>
            </div>
        </div>
       )}}

export default basicInfo;