let rafaSkills = [
    {
        name: "Handshake Deal",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Gun Damage</span> and <span class='keyword keyword--blue'>Melee Damage</span>.",
    },
    {
        name: "Midnight Oil",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa's</span> Action Skills deal <span class='keyword keyword--green'>Bonus Corrosive Damage</span>. The longer the <span class='keyword keyword--blue'>Skill</span> has been active, the greater the <span class='keyword keyword--blue'>Bonus Damage</span>.",
        bonusName: "Bonus Damage",
        bonusNumber: "+2%",
    },
    {
        name: "Expedite",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Overdrive</span> grants <span class='keyword keyword--orange'>Rafa</span> further increased <span class='keyword keyword--blue'>Move Speed</span>.",
        bonusName: "Move Speed",
        bonusNumber: "+5%",
    },
    {
        name: "Dial In",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> damages an enemy with a <span class='keyword keyword--blue'>Melee Attack</span>, his <span class='keyword keyword--blue'>Melee Attacks</span> gain <span class='keyword keyword--blue'>Critical Hit Chance</span>. This <span class='keyword keyword--blue'>Chance</span> stacks, and all Stacks are removed whenever <span class='keyword keyword--orange'>Rafa</span> <span class='keyword keyword--blue'>Critically Hits</span> an enemy.",
        bonusName: "Critical Hit Chance",
        bonusNumber: "3% per Stack"
    },
    {
        name: "Altered Cabron",
        type: "Augment",
        chosen: false,
        text: "<span class='keyword keyword--orange'>Rafa</span> kills an enemy while <span class='keyword keyword--orange'>Arc-Knives</span> is active, restore a portion of his <span class='keyword keyword--blue'>Maximum Health Capacity</span>.<br><br>Whenever <span class='keyword keyword--orange'>Rafa</span> gains <span class='keyword keyword--blue'>Health</span>, deal <span class='keyword keyword--green'>Bonus Corrosive Damage</span> with all attacks, and gain increased <span class='keyword keyword--blue'>Movement Speed</span>. This effect stacks."
    },
    {
        name: "El Corazon",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "A portion of <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Maximum Health Capacity</span> is converted into <span class='keyword keyword--blue'>Maximum Shield Capacity</span>."
    },
    {
        name: "Dead Man Walking",
        type: "Augment",
        chosen: false,
        text: "<span class='keyword keyword--orange'>Arc-Knives</span> does not end when its <span class='keyword keyword--blue'>Duration</span> runs out. Instead, it only ends if <span class='keyword keyword--orange'>Rafa</span> enters <span class='keyword keyword--blue'>Fight For Your Life</span> or activates <span class='keyword keyword--orange'>Blade Fury</span>. While <span class='keyword keyword--orange'>Arc-Knives'</span> Duration is depleted, <span class='keyword keyword--orange'>Rafa</span> loses <span class='keyword keyword--blue'>Health</span> instead.<br><br>Whenever <span class='keyword keyword--orange'>Rafa</span> damages an enemy, he gains <span class='keyword keyword--blue'>Overshield</span>.",
        flavorText: "With great power yada yada yada let's go."
    },
    {
        name: "Diamond Hands",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Dealing <span class='keyword keyword--blue'>Melee Damage</span> grants <span class='keyword keyword--orange'>Rafa</span> a stack of <span class='keyword keyword--orange'>Diamond Hands</span>. Gain increased <span class='keyword keyword--blue'>Gun Damage</span> for every Stack of <span class='keyword keyword--orange'>Diamond Hands</span>.<br><br>Once <span class='keyword keyword--orange'>Rafa</span> deals <span class='keyword keyword--blue'>Gun Damage</span>, Stacks begin to decay quickly until they run out."
    },
    {
        name: "Saldar",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Melee Critical Hits</span> gain <span class='keyword keyword--blue'>Life Steal</span>.",
        bonusName: "Melee Lifesteal",
        bonusNumber: "+5%"
    },
    {
        name: "In the Zone",
        type: "Passive",
        filled: 0,
        max: 3,
        text: "<span class='keyword keyword--blue'>Kill Skill</span>. Killing an enemy <span class='keyword keyword--blue'>freezes</span> <span class='keyword keyword--orange'>Overdrive's Duration</span>.",
        bonusName: "Duration",
        bonusNumber: "+2 seconds"
    },
    {
        name: "To the Last",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Gun Damage</span> and increased <span class='keyword keyword--blue'>Skill Damage</span>. The lower his <span class='keyword keyword--blue'>Health</span>, the greater the bonuses."
    },
    {
        name: "Hard Sell",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Shields</span> break, he instantly gains a portion of his <span class='keyword keyword--blue'>Shield Maximum Capacity</span> as <span class='keyword keyword--blue'>Overshield</span>. This <span class='keyword keyword--blue'>Skill</span> cannot be used again until <span class='keyword keyword--orange'>Rafa</span> activates his <span class='keyword keyword--blue'>Action Skill</span>.",
        bonusName: "Overshield",
        bonusNumber: "<span class='keyword keyword--green'>+9%</span> of <span class='keyword keyword--blue'>Maximum Shield Capacity</span>"
    },
    {
        name: "Blowout",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> applies a <span class='keyword keyword--orange'>Heavy Arms Mark</span> or <span class='keyword keyword--blue'>Critically Hits</span> an enemy with his <span class='keyword keyword--orange'>Action Skill</span>, they explode in <span class='keyword keyword--green'>Corrosive Lobbed Projectiles</span>. The longer <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Action Skill</span> has been active, the more <span class='keyword keyword--green'>Corrosive Projectiles</span> are spawned."
    },
    {
        name: "Thundercutter",
        type: "Augment",
        text: "<span class='keyword keyword--orange'>Arc-Knives</span> attacks deal <span class='keyword keyword--dark-blue'>Shock Melee Splash Damage</span>. <span class='keyword keyword--orange'>Rafa</span> deals increased <span class='keyword keyword--blue'>Splash Damage</span>."
    },
    {
        name: "El Paraguas",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Splash Damage</span> and increased <span class='keyword keyword--blue'>Splash Damage Critical Hit Chance</span>."
    },
    {
        name: "Protecto-Pulse",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Pressing M2 while <span class='keyword keyword--orange'>Arc-Knives</span> are active or <span class='keyword keyword--orange'>Rafa</span> retriggers his <span class='keyword keyword--blue'>Action Skill</span> drains a portion of <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Shields</span>, and deals that much <span class='keyword keyword--dark-blue'>Shock Damage</span> to nearby enemies.",
        bonusName: "Shields Drained",
        bonusNumber: "up to <span class='keyword keyword--green'>+20%</span> of Max <span class='keyword keyword--blue'>Shields</span>"
    },
    {
        name: "Shock Market",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> deals <span class='keyword keyword--blue'>Splash Damage</span>, deal <span class='keyword keyword--dark-blue'>Bonus Shock Damage</span> based on the <span class='keyword keyword--blue'>Damage Dealt</span>.",
        bonusName: "Bonus Damage",
        bonusNumber: "<span class='keyword keyword--green'>+10%</span> of Damage Dealt"
    },
    {
        name: "Liquidation",
        type: "Passive",
        filled: 0,
        max: 1,
        text: "<span class='keyword keyword--orange'>Marked</span> enemies killed by <span class='keyword keyword--orange'>Rafa</span> leave behind a <span class='keyword keyword--green'>Corrosive Hazard</span>."
    },
    {
        name: "Huracan Especial",
        type: "Capstone",
        text: "Activating <span class='keyword keyword--orange'>Blade Fury</span> causes <span class='keyword keyword--orange'>Rafa</span> to spin his blades, creating a <span class='keyword keyword--blue'>Singularity</span> that draws in all <span class='keyword keyword--orange'>Marked</span> enemies and other nearby enemies while dealing continuous <span class='keyword keyword--dark-blue'>Shock Damage</span>. Whenever this attack kills an enemy, <span class='keyword keyword--orange'>Overdrive</span> grants increased <span class='keyword keyword--blue'>Action Skill Cooldown Rate</span>.",
        bonusName: "Damage",
        bonusNumber: "X per second"
    },
    {
        name: "Artilleria",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Ordnance Cooldown Rate</span>.",
        bonusName: "Ordnance Cooldown Rate",
        bonusNumber: "<span class='keyword keyword--green'>+11%</span>"
    },
    {
        name: "Parting Gift",
        type: "Augment",
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> activates his <span class='keyword keyword--orange'>Dash Attack</span>, he leaves behind a <span class='keyword keyword--blue'>Grenade</span>. If he has a <span class='keyword keyword--blue'>Grenade</span> equipped, use that <span class='keyword keyword--blue'>Grenade</span> instead. Enemies damaged by these <span class='keyword keyword--blue'>Grenades</span> become <span class='keyword keyword--orange'>Marked</span><br><br>Whenever <span class='keyword keyword--orange'>Rafa</span> applies a <span class='keyword keyword--orange'>Mark</span> to an enemy, apply an additional <span class='keyword keyword--orange'>Mark</span>.",
        bonusName: "Default Grenade Damage",
        bonusNumber: "X"
    },
    {
        name: "Collaborate Ignition",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Rafa</span> deals <span class='keyword keyword--blue'>Bonus Damage</span> of his <span class='keyword keyword--blue'>Weapon's Element</span> with all <span class='keyword keyword--blue'>Skills</span> and <span class='keyword keyword--blue'>Ordnances</span> while <span class='keyword keyword--orange'>Overdrive</span> is active.",
        bonusName: "Bonus Damage",
        bonusNumber: "<span class='keyword keyword--green'>+12%</span> of Weapons Damage"
    },
    {
        name: "Booming Business",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> <span class='keyword keyword--blue'>Critically Hits</span> an enemy, he gains a chance to spawn a <span class='keyword keyword--blue'>Free Grenade</span>. If <span class='keyword keyword--orange'>Rafa</span> has a <span class='keyword keyword--blue'>Grenade</span> equipped, spawn a <span class='keyword keyword--blue'>Grenade</span> based on that."
    },
    {
        name: "Sinergia",
        type: "Passive",
        filled: 0,
        max: 3,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> deals <span class='keyword keyword--blue'>Ordnance Damage</span>, he also deals increased <span class='keyword keyword--blue'>Gun Damage</span> and <span class='keyword keyword--blue'>Melee Damage</span>. This effect stacks."
    },
    {
        name: "Hemolitions",
        type: "Passive",
        filled: 0,
        max: 1,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. While <span class='keyword keyword--orange'>Overdrive</span> is active, <span class='keyword keyword--orange'>Rafa</span> may use <span class='keyword keyword--orange'>Grenades</span> while cooling down - at the cost of <span class='keyword keyword--blue'>Health</span>. Every time a <span class='keyword keyword--blue'>Grenade</span> is used this way, it costs more <span class='keyword keyword--blue'>Health</span> until <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Grenade</span> fully cools down.",
        bonusName: "Health Cost",
        bonusNumber: "10% of current Health"
    },
    {
        name: "Inferno Protocol",
        type: "Capstone",
        text: "While <span class='keyword keyword--orange'>Arc-Knives</span> are active, <span class='keyword keyword--orange'>Rafa's Exo-Suit</span> stores all <span class='keyword keyword--blue'>Damage Dealt</span> to him. The <span class='keyword keyword--orange'>Exo-Suit</span> then heats up and constantly deals a small amount of <span class='keyword keyword--red'>Fire Damage</span> to him. Additionally, <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Melee Attacks</span> deal <span class='keyword keyword--red'>Bonus Fire Damage</span>. A portion of all <span class='keyword keyword--blue'>Damage</span> dealt to <span class='keyword keyword--orange'>Rafa</span> is also dealt to enemies he has <span class='keyword keyword--orange'>Marked</span><br><br>Using <span class='keyword keyword--orange'>Blade Fury</span> causes <span class='keyword keyword--orange'>Rafa</span> to consume all stored <span class='keyword keyword--blue'>Damage</span>, and deals <span class='keyword keyword--red'>Bonus Fire Damage</span> based on stored <span class='keyword keyword--blue'>Damage</span>. A portion of all <span class='keyword keyword--blue'>Damage</span> dealt this way is returned to <span class='keyword keyword--orange'>Rafa</span> as <span class='keyword keyword--blue'>Health</span>."
    },
    {
        name: "El Diablito",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "A portion of all <span class='keyword keyword--red'>Fire Damage</span> <span class='keyword keyword--orange'>Rafa</span> deals also deals <span class='keyword keyword--red'>Bonus Fire Ordnance Damage</span>.",
        bonusName: "Bonus Damage",
        bonusNumber: "<span class='keyword keyword--green'>+10%</span> of Damage Dealt"
    },
    {
        name: "El Borracho",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> deals increased <span class='keyword keyword--green'>Corrosive Damage</span> while his <span class='keyword keyword--blue'>Action Skill</span> is active. The longer it has been active, the <span class='keyword keyword--blue'>greater</span> the bonus.",
        bonusName: "Corrosive Damage",
        bonusNumber: "<span class='keyword keyword--green'>+1%</span> per second"
    },
    {
        name: "Acid Drop",
        type: "Augment",
        text: "<span class='keyword keyword--orange'>Arc-Knives' Dash Attack</span> is replaced by <span class='keyword keyword--orange'>Caustic Leap</span>. Pressing M2 causes <span class='keyword keyword--orange'>Rafa</span> to <span class='keyword keyword--blue'>leap forward</span> and create a <span class='keyword keyword--green'>Caustic Hazard</span> wherever he lands.<br><br>Whenever a <span class='keyword keyword--orange'>Mark</span> is removed from an enemy, it explodes in a <span class='keyword keyword--green'>Corrosive Nova</span>."
    },
    {
        name: "Empuje",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Action Skill Duration</span>.",
        bonusName: "Action Skill Duration",
        bonusNumber: "<span class='keyword keyword--green'>+7%</span>"
    },
    {
        name: "Sustainable Energy",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Rafa</span> gains <span class='keyword keyword--blue'>Health Regeneration</span> based on how much <span class='keyword keyword--orange'>Overdrive</span> time is remaining.",
        bonusName: "Health Regen",
        bonusNumber: "Up to <span class='keyword keyword--green'>+0.8%</span> Max <span class='keyword keyword--blue'>Health</span> per second"
    },
    {
        name: "Motivar",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Pressing M2 during <span class='keyword keyword--orange'>Arc-Knives</span> grants increased <span class='keyword keyword--orange'>Overdrive Duration</span>. This bonus is reset whenever <span class='keyword keyword--orange'>Rafa</span> activates an <span class='keyword keyword--blue'>Action Skill</span>.",
        bonusName: "Duration",
        bonusNumber: "<span class='keyword keyword--green'>+5%</span>"
    },
    {
        name: "Galvanic Panic",
        type: "Capstone",
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> performs a <span class='keyword keyword--blue'>Melee Attack</span> while <span class='keyword keyword--orange'>Arc-Knives</span> is active, fire an <span class='keyword keyword--orange'>Acid STRM Glider</span> at an enemy in his view. <span class='keyword keyword--orange'>Acid STRM Gliders</span> deal <span class='keyword keyword--green'>Corrosive Splash Damage</span> based on the number of total <span class='keyword keyword--orange'>Marked</span> enemies. Additionally, killing an enemy while <span class='keyword keyword--orange'>Arc-Knives</span> is active restores <span class='keyword keyword--blue'>Action Skill Duration</span>.<br><br>Activating <span class='keyword keyword--orange'>Blade Fury</span> causes <span class='keyword keyword--orange'>Rafa</span> to fire a volley of <span class='keyword keyword--orange'>Acid STRM Gliders</span> in front of him and end <span class='keyword keyword--orange'>Arc-Knives</span>."
    },
    {
        name: "Cruel Accrual",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Skill Damage</span> with all Skills. The longer his <span class='keyword keyword--blue'>Action Skill</span> has been active, the <span class='keyword keyword--blue'>greater</span> the bonus.",
        bonusName: "Skill Damage",
        bonusNumber: "<span class='keyword keyword--green'>+2%</span> per second"
    }
]

let maxSkillPoints = 30;
let currentSkillPoints = 0;

document.querySelector(".js_reset").addEventListener('click', function() {
    let allSkillNumbers = document.querySelectorAll(".skill-tree__number");
    allSkillNumbers.forEach(function(skill, index) {
        skill.textContent = 0;
        currentSkillPoints = 0;
        updateGradient();
        displaySkillPoints();
    });
});

displaySkillPoints();
function displaySkillPoints() {
    document.querySelector(".skill-points__used").textContent = currentSkillPoints;
    document.querySelector(".skill-points__max").textContent = maxSkillPoints;
}

let skills = document.querySelectorAll(".skill-tree__skill, .skill-tree__augment, .skill-tree__capstone");

skills.forEach((skill, index) => {
    skill.addEventListener('mouseenter', () => {
        let skillName = skill.dataset.name;

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                displayToolTip(skill);
            }
        }
    });

    skill.addEventListener('mouseleave', () => {
        hideToolTip();
    });

    skill.addEventListener('click', function() {
        let clickedElement = this;
        let childElement = clickedElement.getElementsByClassName('skill-tree__number');
        childElement = childElement[0];

        let skillName = skill.dataset.name;

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                addSkillPoint(skill, childElement);
            }
        }

    });

    skill.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        let clickedElement = this;
        let childElement = clickedElement.getElementsByClassName('skill-tree__number');
        childElement = childElement[0];

        let skillName = skill.dataset.name;

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                subtractSkillPoint(skill, childElement);
            }
        }

    });
});

function displayToolTip(skill) {
    document.querySelector(".skill-box__name").innerHTML = skill.name;
    document.querySelector(".skill-box__type").innerHTML = skill.type;

    if (typeof skill.filled === 'number' && typeof skill.max === 'number') {
        document.querySelector(".skill-box__stat-box").style.display = "block";
        document.querySelector(".skill-box__filled").innerHTML = skill.filled;
        document.querySelector(".skill-box__max").innerHTML = skill.max;
    } else {
        document.querySelector(".skill-box__stat-box").style.display = "none";
    }

    document.querySelector(".skill-box__text").innerHTML = skill.text;

    if (skill.bonusName && skill.bonusNumber) {
        document.querySelector(".skill-box__bonus-box").style.display = "block";
        document.querySelector(".skill-box__bonus-name").innerHTML = skill.bonusName;
        document.querySelector(".skill-box__bonus-number").innerHTML = skill.bonusNumber;
    } else {
        document.querySelector(".skill-box__bonus-box").style.display = "none";
    }

    if (skill.flavorText) {
        document.querySelector(".skill-box__flavor-text").style.display = "block";
        document.querySelector(".skill-box__flavor-text").innerHTML = skill.flavorText;
    } else {
        document.querySelector(".skill-box__flavor-text").style.display = "none";
    }

    document.querySelector(".skill-box").style.visibility = "visible";
}

function hideToolTip() {
    document.querySelector(".skill-box").style.visibility = "hidden";
}

function addSkillPoint(skill, childElement) {
    let filled = skill.filled;
    let max = skill.max;

    if (filled === max || currentSkillPoints === maxSkillPoints) return;

    skill.filled++;
    childElement.textContent = skill.filled;
    displayToolTip(skill);
    currentSkillPoints++;
    displaySkillPoints();
    updateGradient();
}

function subtractSkillPoint(skill, childElement) {
    let filled = skill.filled;

    if (filled === 0 || currentSkillPoints === 0) return;

    skill.filled--;
    childElement.textContent = skill.filled;
    displayToolTip(skill);
    currentSkillPoints--;
    displaySkillPoints();
    updateGradient();
}

function updateGradient() {
    let max = parseInt(document.querySelector(".skill-tree__section--top").dataset.max);
    let percent = (currentSkillPoints / max) * 100;
    if (percent > 100) {
        percent = 100;
    }
    document.querySelector(".skill-tree__section--top").style.background = `linear-gradient(180deg,rgba(0, 0, 0, 0) ${percent/10}%, rgba(87, 199, 133, .5) ${percent}%, transparent ${percent}%)`;
}