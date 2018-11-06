import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as lib from './lib.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.readStateFromLocalStorage() || lib.newAdvancements();
  }

  handleClick(skill) {
    this.setState((state, props) => lib.advance(state, skill));
  }

  handleReset() {
    this.setState(lib.newAdvancements());
  }

  readStateFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem('advancements'));
  }

  saveStateToLocalStorage() {
    window.localStorage.setItem('advancements', JSON.stringify(this.state));
  }

  componentDidUpdate() {
    this.saveStateToLocalStorage();
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
        <div className="extra-controls">
          <button onClick={() => this.handleReset()}>Reset</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
