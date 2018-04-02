import React from 'react';

function Tag({ label }) {
  return (
    <li>
      <a>{label}</a>
    </li>
  );
}

function Tags({ labels }) {
  return (
    <ul className="tags">
      {labels.map((label, index) => {
        return <Tag key={index} label={label} />;
      })};
    </ul>
  );
}

function Colleftside({ data }) {
  return (
    <div className="tags-container">
      <Tags labels={data} />
    </div>
  );
}

export default Colleftside;
