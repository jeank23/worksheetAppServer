import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import './Grid.css';


const columns = () => {
    let alphabet = '-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cols = [];

    [...alphabet].forEach((letter, index) => {
        cols[index] = {key: letter.toLowerCase(), name: letter};
        if(index === 0){
            cols[index].width = 50; 
        }
    });

    return cols;
};

const rows = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rows = [];
    for(let i=0; i < 1000; i++){
        rows[i] = {id: i, '-': i}; 
    }

    return rows;
};

class Grid extends Component {
    render(){
        console.log(columns());
        return (
            <div>
                <ReactDataGrid  
                columns={columns()} 
                rowGetter={i => rows()[i]} 
                rowsCount={1000} 
                headerRowHeight={30}
                rowHeight={20}
                minHeight={window.visualViewport.height - 56}
                  />
            </div>
        );
    }
}

export default Grid;