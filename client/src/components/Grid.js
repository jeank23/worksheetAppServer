import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';


const columns = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cols = [];

    [...alphabet].forEach((letter, index) => {
        cols[index] = {key: letter.toLowerCase(), name: letter};
    });

    return cols;
};


const rows = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rows = [];
    for(let i=0; i < 1000; i++){
        rows[i] = {id: i};
    }

    return rows;
};
// const rows = [
//     {id: 0, title: 'row1', count: 20}, 
//     {id: 1, title: 'row2', count: 40}, 
//     {id: 2, title: 'row3', count: 60}
// ];

class Grid extends Component {
    render(){
        console.log(columns());
        return (
            <ReactDataGrid
            columns={columns()}
            rowGetter={i => rows()[i]}
            rowsCount={100} />
        );
    }
}

export default Grid;