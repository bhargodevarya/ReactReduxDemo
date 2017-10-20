import React from 'react';

let CountWidget = ({count, onChange}) => {
  return (<div>
    <p>{count}</p>
    <button onClick={onChange}>click</button>
  </div>
);
}

module.exports = CountWidget
