import React from 'react';
import './style/App.css';
import './style/fonts.css';

function App() {
  return (
    <div className="app-wrapper font-jura lg light bg fg-white">
      <main className="app-content bg box-shadow">
        <div className="scrollable">
          <div className="segment">
            <div className="username">
              <h1 className="xxl bolder fg-yellow">@drazulay</h1>
            </div>
            <p className="xl bold fg-pink">Hello,</p>
            <p>My name is <span className="emphasis">Daniel Azulay.</span></p>
            <p>Identity is mysterious. What does it mean to be? Maybe we are defined by what we produce and consume.</p>
            <p>Writing code is my passion but I have many other interests.</p>
            <div className="links">
              <span className="link-container"><div>📧</div><a href="mailto://daniel.reubin.azulay@pm.me" className="button">pm.me</a></span>
              <span className="link-container"><div>🔑</div><a href="https://keybase.io/drazulay" className="button">A5BC C43C 82B0 9754</a></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
