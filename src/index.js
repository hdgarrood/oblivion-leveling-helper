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
        <span className="skill-name">{skill}</span>
        <span className="skill-levels">{info}</span>
        <button onClick={() => this.handleClick(skill)}>Advance</button>
      </li>
    );
  }

  getBonusFor(attr) {
    return lib.attributeBonus(this.state, attr);
  }

  renderAttribute(attr) {
    const bonus = this.getBonusFor(attr);
    if (attr === 'Luck') {
      return;
    } else {
      return (
        <li key={"attr-" + attr} className="attr">
          <div className="attr-header">
            <span className="attr-name">{attr}</span>
            <span className="attr-bonus">+{bonus.bonus}</span>
          </div>
          <div className="attr-body">
            <ul className="skills">
              {lib.skillsGovernedBy(attr).map((skill) => this.renderSkill(skill))}
            </ul>
          </div>
        </li>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Oblivion leveling helper</h1>
        <ul className="attributes">
          {lib.attributes.map((attr) => this.renderAttribute(attr))}
        </ul>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
