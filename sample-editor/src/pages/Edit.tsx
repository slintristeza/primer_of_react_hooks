import React from 'react';

const Edit = () => {
  const [text, setText] = React.useState('');
  return (
    <textarea value={text} onChange={e => setText(e.target.value)} />
  );
};

export default Edit;
