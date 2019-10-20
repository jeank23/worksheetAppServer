import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import './Grid.css';

//set the number(26) of columns at first load
const columns = () => {
    let alphabet = '-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cols = [];

    [...alphabet].forEach((letter, index) => {
        cols[index] = {key: letter.toLowerCase(), name: letter, editable: true};
        if(index === 0){
            cols[index].width = 50; 
        }
    });

    return cols;
};

//set number(1000) of rows at first load
const rows = () => {
    let rows = [];
    for(let i=1; i < 1000; i++){
        rows[i] = {'id': i, '-': i}; 
    }

    return rows;
};

class Grid extends Component {

    state = { rows: rows() };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        console.log(this.state.rows);
        console.log(Array.isArray(this.state.rows));
        this.setState(state => {
          const rows = state.rows.slice();
          for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
          }

          return { rows };
        });
    };

    render(){
        return (
            <div>
                <ReactDataGrid  
                columns={columns()} 
                rowGetter={i => this.state.rows[i]} 
                rowsCount={rows().length} 
                headerRowHeight={30}
                rowHeight={20}
                minHeight={window.visualViewport.height - 56}
                enableCellSelect={true}
                onGridRowsUpdated={this.onGridRowsUpdated}
                  />
            </div>
        );
    }
}

export default Grid;