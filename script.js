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
    }
]

let skills = document.querySelectorAll(".skill-tree__skill");

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
        let skillName = skill.dataset.name;

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                addSkill(skill);
            }
        }

    });

    skill.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        let skillName = skill.dataset.name;

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                subtractSkill(skill);
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

function addSkill(skill) {
    let filled = skill.filled;
    let max = skill.max;

    if (filled === max) return;

    skill.filled++;
    displayToolTip(skill);
}

function subtractSkill(skill) {
    let filled = skill.filled;

    if (filled === 0) return;

    skill.filled--;
    displayToolTip(skill);
}