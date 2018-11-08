import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as lib from './lib.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.readStateFromLocalStorage() || this.initialState();
  }

  initialState() {
    const tabs = lib.attributes
      .filter((attr) => attr !== 'Luck')
      .map((attr) => ({ name: attr, open: true }));

    return {
      advancements: lib.newAdvancements(),
      tabs: tabs
    };
  }

  handleAdvance(skill) {
    this.setState((state, props) =>
      ({ advancements: lib.advance(state.advancements, skill) }));
  }

  toggleTab(attr) {
    this.setState((state, props) =>
      ({ tabs: state.tabs.map((tab) =>
        tab.name === attr ?
          { name: attr, open: !tab.open } :
          tab)}))
  }

  handleReset() {
    this.setState({ advancements: lib.newAdvancements() });
  }

  readStateFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem('ui-state'));
  }

  saveStateToLocalStorage() {
    window.localStorage.setItem('ui-state', JSON.stringify(this.state));
  }

  componentDidUpdate() {
    this.saveStateToLocalStorage();
  }

  renderSkill(skill) {
    const advancedBy = this.state.advancements[skill];
    const info = (advancedBy === 0) ? '0' : '+' + advancedBy;
    return (
      <li key={skill}>
        <span className="skill-name">{skill}</span>
        <span className="skill-levels">{info}</span>
        <button onClick={() => this.handleAdvance(skill)}>Advance</button>
      </li>
    );
  }

  getBonusFor(attr) {
    return lib.attributeBonus(this.state.advancements, attr);
  }

  renderAttributeTab(tab) {
    const attr = tab.name;
    const bonus = this.getBonusFor(attr);
    return (
      <li key={"attr-" + attr} className={'attr tab-' + (tab.open ? 'open' : 'closed')}>
        <div className="attr-header" onClick={() => this.toggleTab(tab.name)}>
          <span className="attr-name">{attr}</span>
          { tab.open ? <span className="attr-bonus">+{bonus.bonus}</span> : null}
          <span className="expand-arrow">{ tab.open ? '△' : '▽' }</span>
        </div>
        { tab.open ?
          <div className="attr-body">
            <ul className="skills">
              {lib.skillsGovernedBy(attr).map((skill) => this.renderSkill(skill))}
            </ul>
          </div> :
          null
        }
      </li>
    );
  }

  render() {
    return (
      <div>
        <h1>Oblivion leveling helper</h1>
        <ul className="attributes">
          {this.state.tabs.map((tab) => this.renderAttributeTab(tab))}
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
