// Soldier
class Soldier {
  constructor(health,strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
  this.health -= theDamage;
  }
 } 

// Viking
class Viking extends Soldier {
constructor(name,health,strength) {
super(health,strength);
this.name = name;
}

attack() {
  return super.attack();
  
}

receiveDamage(theDamage) {
   super.receiveDamage(theDamage);
  if (this.health > 0) {
    return `${this.name} has received ${theDamage} points of damage`
  }
  else {
    return `${this.name} has died in act of combat`
  }
}

battleCry() {
  return "Odin Owns You All!"
}

}

// Saxon
class Saxon extends Soldier{
  attack() {
    return super.attack()
  }
  receiveDamage(theDamage) {
super.receiveDamage(theDamage);
if (this.health > 0) {
  return `A Saxon has received ${theDamage} points of damage`;
}
else {
  return `A Saxon has died in combat`
}
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let random1 = Math.floor(Math.random()*(this.saxonArmy.length));
    let random2 = Math.floor(Math.random()*(this.vikingArmy.length));
    let saxon = this.saxonArmy[random1];
    let viking = this.vikingArmy[random2];
    let result = saxon.receiveDamage(viking.attack());
    if (saxon.health<=0) {
      this.saxonArmy.splice(random1,1);
    }
    return result
  }

  saxonAttack() {
    let random1 = Math.floor(Math.random()*(this.vikingArmy.length));
    let random2 = Math.floor(Math.random()*(this.saxonArmy.length));
    let viking = this.vikingArmy[random1];
    let saxon = this.saxonArmy[random2];
    let result = viking.receiveDamage(saxon.attack());
    if (viking.health<= 0) {
      this.vikingArmy.splice(random1,1);
    }
    return result
}

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    }
    else if (this.vikingArmy.length <=0) {
      return `Saxons have fought for their lives and survived another day...`
    }
    else if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
