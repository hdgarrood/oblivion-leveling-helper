
export const attributes =
  [ 'Strength',
    'Intelligence',
    'Willpower',
    'Agility',
    'Speed',
    'Endurance',
    'Personality',
    'Luck' ]

const skillAttributes =
  [ { name: 'Blade', attr: 'Strength' },
    { name: 'Blunt', attr: 'Strength' },
    { name: 'Hand-to-Hand', attr: 'Strength' },
    { name: 'Alchemy', attr: 'Intelligence' },
    { name: 'Mysticism', attr: 'Intelligence' },
    { name: 'Conjuration', attr: 'Intelligence' },
    { name: 'Alteration', attr: 'Willpower' },
    { name: 'Destruction', attr: 'Willpower' },
    { name: 'Restoration', attr: 'Willpower' },
    { name: 'Marksman', attr: 'Agility' },
    { name: 'Security', attr: 'Agility' },
    { name: 'Sneak', attr: 'Agility' },
    { name: 'Acrobatics', attr: 'Speed' },
    { name: 'Athletics', attr: 'Speed' },
    { name: 'Light Armor', attr: 'Speed' },
    { name: 'Armorer', attr: 'Endurance' },
    { name: 'Block', attr: 'Endurance' },
    { name: 'Heavy Armor', attr: 'Endurance' },
    { name: 'Mercantile', attr: 'Personality' },
    { name: 'Speechcraft', attr: 'Personality' },
    { name: 'Illusion', attr: 'Personality' } ]

export const skills = skillAttributes.map((x) => x.name);

export function getGoverningAttribute(name) {
  const skill = skillAttributes.find((x) => x.name === name);
  return skill ? skill.attr : null;
}

export function newAdvancements() {
  const advancements = {};
  skills.forEach((skill) => {
    advancements[skill] = 0;
  });
  return advancements;
}

/* return a new Advancements object with the given skill advanced by 1 */
export function advance(advancements, skill) {
  const newAdvancements = Object.assign({}, advancements)
  newAdvancements[skill] = advancements[skill] + 1;
  return newAdvancements;
}

export function attributeBonus(x) {
  if (x <= 0) {
    return 1;
  } else if (x <= 4) {
    return 2;
  } else if (x <= 7) {
    return 3;
  } else if (x <= 9) {
    return 4;
  } else {
    return 5;
  }
}

export function attributeBonuses(advancements) {
  const bonuses = {};
  attributes.forEach((attr) => {
    const governedSkills =
      skillAttributes
        .filter((skill) => skill.attr === attr)
        .map((skill) => skill.name);
    let totalAdvancements = 0;
    governedSkills.forEach((skill) => {
      totalAdvancements += advancements[skill];
    });
    bonuses[attr] = {
      total: totalAdvancements,
      bonus: attributeBonus(totalAdvancements),
    };
  });
  return bonuses;
}
