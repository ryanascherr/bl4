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
        text: "<span class='keyword keyword--orange'>Arc-Knives</span> does not end when its <span class='keyword keyword--blue'>Duration</span> runs out. Instead, it only ends if <span class='keyword keyword--orange'>Rafa</span> enters <span class='keyword keyword--blue'>Fight For Your Life</span> or activates <span class='keyword keyword--orange'>Blade Fury</span>. While <span class='keyword keyword--orange'>Arc-Knives'</span> Duration is depleted, <span class='keyword keyword--orange'>Rafa</span> loses <span class='keyword keyword--blue'>Health</span> instead.<br><br>Whenever <span class='keyword keyword--orange'>Rafa</span> damages an enemy, he gains <span class='keyword keyword--blue'>Overhsield</span>.",
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
    }
]

let maxSkillPoints = 30;
let currentSkillPoints = 0;

displaySkillPoints();
function displaySkillPoints() {
    document.querySelector(".skill-points__used").textContent = currentSkillPoints;
    document.querySelector(".skill-points__max").textContent = maxSkillPoints;
}

let skills = document.querySelectorAll(".skill-tree__skill, .skill-tree__augment");

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
    document.querySelector(".skill-box__filled").innerHTML = skill.filled;
    document.querySelector(".skill-box__max").innerHTML = skill.max;
    document.querySelector(".skill-box__text").innerHTML = skill.text;
    document.querySelector(".skill-box__bonus-name").innerHTML = skill.bonusName;
    document.querySelector(".skill-box__bonus-number").innerHTML = skill.bonusNumber;

    document.querySelector(".skill-box").style.display = "block";
}

function hideToolTip() {
    document.querySelector(".skill-box").style.display = "none";
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
    document.querySelector(".skill-tree__section--top").style.background = `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(87, 199, 133, 1) ${percent}%, rgba(255, 255, 255, 1) ${percent}%)`;
}