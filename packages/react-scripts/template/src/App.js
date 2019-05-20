import React from 'react';
import './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Paragraph = styled('p')({
  backgroundColor: '#999',
});

const SvgStyles = css({
  backgroundColor: '#000',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg css={SvgStyles}>
          <use xlinkHref={`/app/sprite.svg#sprite-logo`} />
        </svg>
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
