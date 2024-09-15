import React from "react";

function ResultItem({ result }) {
  return (
    <li className="result-item">
      <h2>{result.title}</h2>
      <p>{result.description}</p>
    </li>
  );
}

export default ResultItem;
