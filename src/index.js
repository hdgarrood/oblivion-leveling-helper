import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as lib from './lib.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = lib.newAdvancements();
  }

  handleClick(skill) {
    this.setState(lib.advance(this.state, skill));
  }

  renderSkill(skill) {
    const advancedBy = this.state[skill];
    const info = (advancedBy === 0) ? '0' : '+' + advancedBy;
    return (
      <li key={skill}>
        <span>{skill}: {info}</span>
        <button onClick={() => this.handleClick(skill)}>Advance</button>
      </li>
    );
  }

  renderBonuses(bonuses) {
    return (
      <ul className="attributes">
      {lib.attributes.map((attr) => <li key={attr}>{attr}: {bonuses[attr].bonus}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Oblivion leveling helper</h1>
        <h2>Skill advancements:</h2>
        <ul className="skills">
          {lib.skills.map((skill) => this.renderSkill(skill))}
        </ul>
        <h2>Attribute bonuses (if you level up now):</h2>
        {this.renderBonuses(lib.attributeBonuses(this.state))}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
