import React from "react";
import './ScoreTable.css';

function ScoreTable({ categories }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.name}>
              <td>{category.name}</td>
              <td>{category.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ScoreTable;
  