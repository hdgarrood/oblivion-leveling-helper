(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),l=n(6),i=n(4),c=n(7),u=n(0),s=n.n(u),o=n(5),m=n.n(o),d=(n(13),["Strength","Intelligence","Willpower","Agility","Speed","Endurance","Personality","Luck"]),h=[{name:"Blade",attr:"Strength"},{name:"Blunt",attr:"Strength"},{name:"Hand-to-Hand",attr:"Strength"},{name:"Alchemy",attr:"Intelligence"},{name:"Mysticism",attr:"Intelligence"},{name:"Conjuration",attr:"Intelligence"},{name:"Alteration",attr:"Willpower"},{name:"Destruction",attr:"Willpower"},{name:"Restoration",attr:"Willpower"},{name:"Marksman",attr:"Agility"},{name:"Security",attr:"Agility"},{name:"Sneak",attr:"Agility"},{name:"Acrobatics",attr:"Speed"},{name:"Athletics",attr:"Speed"},{name:"Light Armor",attr:"Speed"},{name:"Armorer",attr:"Endurance"},{name:"Block",attr:"Endurance"},{name:"Heavy Armor",attr:"Endurance"},{name:"Mercantile",attr:"Personality"},{name:"Speechcraft",attr:"Personality"},{name:"Illusion",attr:"Personality"}],f=h.map(function(e){return e.name});function p(e){return h.filter(function(t){return t.attr===e}).map(function(e){return e.name})}var v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state=function(){var e={};return f.forEach(function(t){e[t]=0}),e}(),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){this.setState(function(e,t){var n=Object.assign({},e);return n[t]=e[t]+1,n}(this.state,e))}},{key:"renderSkill",value:function(e){var t=this,n=this.state[e],a=0===n?"0":"+"+n;return s.a.createElement("li",{key:e},s.a.createElement("span",{className:"skill-name"},e),s.a.createElement("span",{className:"skill-levels"},a),s.a.createElement("button",{onClick:function(){return t.handleClick(e)}},"Advance"))}},{key:"getBonusFor",value:function(e){return function(e,t){var n,a=0;return p(t).forEach(function(t){a+=e[t]}),{total:a,bonus:(n=a,n<=0?1:n<=4?2:n<=7?3:n<=9?4:5)}}(this.state,e)}},{key:"renderAttribute",value:function(e){var t=this,n=this.getBonusFor(e);return"Luck"===e?void 0:s.a.createElement("li",{key:"attr-"+e,className:"attr"},s.a.createElement("div",{className:"attr-header"},s.a.createElement("span",{className:"attr-name"},e),s.a.createElement("span",{className:"attr-bonus"},"+",n.bonus)),s.a.createElement("div",{className:"attr-body"},s.a.createElement("ul",{className:"skills"},p(e).map(function(e){return t.renderSkill(e)}))))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",null,"Oblivion leveling helper"),s.a.createElement("ul",{className:"attributes"},d.map(function(t){return e.renderAttribute(t)})))}}]),t}(s.a.Component);m.a.render(s.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.5445ef08.chunk.js.map