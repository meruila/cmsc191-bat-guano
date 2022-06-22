import {fData} from './data_format'
import React from 'react';
import Plot from 'react-plotly.js';


class LevelDist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: fData,
          layout: {
          title: { text:'Comparison of the phylum level distribution of bat guano samples: C1 and C2' },
          legend: {
            title: {
              text: "<b>Taxon</b>"
            }
          },
          height: 800,
          width: 900,
          colorway : [ '#182844', '#182844', '#3d3b72', '#6f4d96', '#a262a9', '#cd7eaf', '#e7a4b6', '#f3cec9'],
          xaxis: {
            title: {
              text: 'Chamber'
            }
          },
          yaxis: {
            title: {
              text: 'Relative Abundance Value'
            }
          },
          barmode: 'stack'}, frames: [], config: {}};
      }
    
      render() {
        return (
          <div className='text-center'>
            <br></br>
            <Plot
            data={this.state.data}
            layout={this.state.layout}
            frames={this.state.frames}
            config={this.state.config}
            onInitialized={(figure) => this.setState(figure)}
            onUpdate={(figure) => this.setState(figure)}
          />
          </div>
          
        );
      }
}
 
export default LevelDist;