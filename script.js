let rafaSkills = [
    // GREEN TREE START
    {
        name: "Handshake Deal",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Gun Damage</span> and <span class='keyword keyword--blue'>Melee Damage</span>.",
        bonuses: [
            {
                attribute: "Gun Damage",
                bonus: [3, 6, 9, 12, 15],
                type: "%",
                increment: 3,
                before: "+",
                after: ""
            },
            {
                attribute: "Melee Damage",
                bonus: [7, 14, 21, 28, 35],
                type: "%",
                increment: 7,
                before: "+",
                after: ""
            }
        ]
    },
    {
        name: "Midnight Oil",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa's</span> Action Skills deal <span class='keyword keyword--green'>Bonus Corrosive Damage</span>. The longer the <span class='keyword keyword--blue'>Skill</span> has been active, the greater the <span class='keyword keyword--blue'>Bonus Damage</span>.",
        bonuses: [
            {
                attribute: "Bonus Damage",
                bonus: [2, 4, 6, 8, 10],
                type: "%",
                increment: 2,
                before: "+",
                after: " per second"
            }
        ],
    },
    {
        name: "Expedite",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Overdrive</span> grants <span class='keyword keyword--orange'>Rafa</span> further increased <span class='keyword keyword--blue'>Move Speed</span>.",
        bonuses: [
            {
                attribute: "Move Speed",
                bonus: [5, 10, 15, 20, 25],
                type: "%",
                increment: 5,
                before: "+",
                after: ""
            }
        ],
    },
    {
        name: "Dial In",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> damages an enemy with a <span class='keyword keyword--blue'>Melee Attack</span>, his <span class='keyword keyword--blue'>Melee Attacks</span> gain <span class='keyword keyword--blue'>Critical Hit Chance</span>. This <span class='keyword keyword--blue'>Chance</span> stacks, and all Stacks are removed whenever <span class='keyword keyword--orange'>Rafa</span> <span class='keyword keyword--blue'>Critically Hits</span> an enemy.",
        bonuses: [
            {
                attribute: "Critical Hit Chance",
                bonus: [3, 6, 9, 12, 15],
                type: "%",
                increment: 3,
                before: "+",
                after: " per stack"
            }
        ],
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
        text: "A portion of <span class='keyword keyword--orange'>Rafa's</span> <span class='keyword keyword--blue'>Maximum Health Capacity</span> is converted into <span class='keyword keyword--blue'>Maximum Shield Capacity</span>.",
        bonuses: [
            {
                attribute: "Maximum Health Capacity",
                bonus: [10, 20, 30, 40, 50],
                type: "%",
                increment: 10,
                before: "+",
                after: ""
            },
            {
                attribute: "Maximuk Shield Capacity",
                bonus: [12, 24, 36, 48, 60],
                type: "%",
                increment: 12,
                before: "+",
                after: ""
            }
        ]
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
        text: "Dealing <span class='keyword keyword--blue'>Melee Damage</span> grants <span class='keyword keyword--orange'>Rafa</span> a stack of <span class='keyword keyword--orange'>Diamond Hands</span>. Gain increased <span class='keyword keyword--blue'>Gun Damage</span> for every Stack of <span class='keyword keyword--orange'>Diamond Hands</span>.<br><br>Once <span class='keyword keyword--orange'>Rafa</span> deals <span class='keyword keyword--blue'>Gun Damage</span>, Stacks begin to decay quickly until they run out.",
        bonuses: [
            {
                attribute: "Gun Damage",
                bonus: [2, 4, 6, 8, 10],
                type: "%",
                increment: 2,
                before: "+",
                after: " per stack"
            },
            {
                attribute: "Max Stacks",
                bonus: 100,
                type: "",
                increment: 2,
                before: "",
                after: "",
                single: true
            }
        ]
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
    },
    // GREEN TREE END
    // BLUE TREE START
    {
        name: "Rinse",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Reload Speed</span>.",
        bonusName: "Reload Speed",
        bonusNumber: "<span class='keyword keyword--green'>+4%</span>"
    },
    {
        name: "Las Jaras",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Rafa</span> <span class='keyword keyword--blue'>Regenerates Ammo</span> while <span class='keyword keyword--orange'>Overdrive</span> is active.",
        bonusName: "Ammo Regeneration",
        bonusNumber: "<span class='keyword keyword--green'>+0.5%</span>"
    },
    {
        name: "The Thrill",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Fire Rate</span>. Gain further increased <span class='keyword keyword--blue'>Fire Rate</span> while <span class='keyword keyword--orange'>Overdrive</span> is active."
    },
    {
        name: "Preparado",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> <span class='keyword keyword--blue'>Reloads</span> his current <span class='keyword keyword--blue'>Gun</span>, he gains increased <span class='keyword keyword--blue'>Action Skill Cooldown Rate</span>. This effect stacks."
    },
    {
        name: "Sangre por Sangre",
        type: "Augment",
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> consumes a <span class='keyword keyword--orange'>Charge</span>, he gains increased <span class='keyword keyword--blue'>Action Skill Cooldown Rate</span>. This bonus is increased for every <span class='keyword keyword--orange'>Charge</span> consumed.",
    },
    {
        name: "Pa' Dentro",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Activating an <span class='keyword keyword--blue'>Action Skill</span> grants <span class='keyword keyword--orange'>Rafa</span> <span class='keyword keyword--blue'>Health Regeneration</span>.",
    },
    {
        name: "Battery Subscription Service",
        type: "Augment",
        text: "<span class='keyword keyword--orange'>Apophis Lance</span> gains an <span class='keyword keyword--blue'>Additional Charge</span>.<br><br>Addtionally, whenever <span class='keyword keyword--orange'>Rafa</span> consumes 4 or more <span class='keyword keyword--blue'>Charges</span>, gain increased <span class='keyword keyword--blue'>Action Skill Potency</span>.",
        bonusName: "",
        bonusNumber: ""
    },
    {
        name: "Arriba",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--blue'>Kill Skill</span>. Whenever <span class='keyword keyword--orange'>Rafa</span> kills an enemy, he gains increased <span class='keyword keyword--blue'>Ordnance Cooldown Rate</span>.",
        bonusName: "",
        bonusNumber: ""
    },
    {
        name: "First Impression",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "The first shot fired from a fully loaded <span class='keyword keyword--blue'>Weapon Magazine</span> gains <span class='keyword keyword--blue'>Increased Damage</span>.",
        bonusName: "Gun Damage",
        bonusNumber: "<span class='keyword keyword--green'>+8%</span>"
    },
    {
        name: "Al Centro",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Rafa</span> gains increased <span class='keyword keyword--blue'>Weapon Handling</span> with all <span class='keyword keyword--blue'>Weapons</span> and <span class='keyword keyword--blue'>Action Skills</span> while <span class='keyword keyword--orange'>Overdrive</span> is active. The longer <span class='keyword keyword--orange'>Overdrive</span> has been active, the <span class='keyword keyword--blue'>greater</span> the bonus.",
        bonusName: "Weapon Handling",
        bonusNumber: "<span class='keyword keyword--green'>+1%</span> per second"
    },
    {
        name: "Metal Management",
        type: "Passive",
        filled: 0,
        max: 1,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> activates or retriggers an <span class='keyword keyword--blue'>Action Skill</span>, his <span class='keyword keyword--blue'>Gun</span> consumes no <span class='keyword keyword--blue'>Ammo</span>.",
        bonusName: "Duration",
        bonusNumber: "<span class='keyword keyword--green'>2</span> seconds"
    },
    {
        name: "Abajo",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "Whenever <span class='keyword keyword--orange'>Rafa</span> throws a <span class='keyword keyword--blue'>Grenade</span>, he gains increased <span class='keyword keyword--blue'>Action Skill Cooldown Rate</span>.",
        bonusName: "",
        bonusNumber: ""
    },
    {
        name: "Brain Dump",
        type: "Passive",
        filled: 0,
        max: 5,
        text: "<span class='keyword keyword--orange'>Overdrive Skill</span>. <span class='keyword keyword--orange'>Rafa</span> gains <span class='keyword keyword--blue'>Critical Hit Chance</span> with his guns while <span class='keyword keyword--orange'>Overdrive</span> is active.",
        bonusName: "Critical Hit Chance",
        bonusNumber: "<span class='keyword keyword--green'>+5%</span>"
    },
    {
        name: "",
        type: "",
        filled: 0,
        max: 5,
        text: "",
        bonusName: "",
        bonusNumber: ""
    },
    {
        name: "",
        type: "",
        filled: 0,
        max: 5,
        text: "",
        bonusName: "",
        bonusNumber: ""
    },
    {
        name: "",
        type: "",
        filled: 0,
        max: 5,
        text: "",
        bonusName: "",
        bonusNumber: ""
    },
    {
        name: "",
        type: "",
        filled: 0,
        max: 5,
        text: "",
        bonusName: "",
        bonusNumber: ""
    }
]

let maxSkillPoints = 50;
let currentSkillPoints = 0;
let topTreePoints = 0;
let bottomTreeOnePoints = 0;
let bottomTreeTwoPoints = 0;
let bottomTreeThreePoints = 0;

checkAvailability();

document.querySelector(".js_reset").addEventListener('click', function() {
    let allSkillNumbers = document.querySelectorAll(".skill-tree__number");
    allSkillNumbers.forEach(function(skill, index) {
        skill.textContent = 0;
        currentSkillPoints = 0;
    });

    let allSkillTreeSections = document.querySelectorAll(".skill-tree__section");
    allSkillTreeSections.forEach(function(section, index) {
        section.dataset.skillNumber = 0;
        section.style.background = `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(87, 199, 133, .5) 0%, transparent 0%)`;
    });

    displaySkillPoints();
    checkAvailability();
});

displaySkillPoints();
function displaySkillPoints() {
    document.querySelector(".skill-points__used").textContent = currentSkillPoints;
    document.querySelector(".skill-points__max").textContent = maxSkillPoints;
}

let skills = document.querySelectorAll(".skill-tree__skill, .skill-tree__augment, .skill-tree__capstone");

skills.forEach((skill, index) => {
    skill.addEventListener('mouseenter', (e) => {
        let skillName = skill.dataset.name;

    //     let hoveredElement = e.target;
    //     let newElement = document.createElement('div');
    //     newElement.innerHTML = `<div class="skill-box">
    //     <h2 class="skill-box__name"></h2>
    //     <p class="skill-box__type"></p>
    //     <p class="skill-box__stat-box"><span class="skill-box__filled"></span> / <span class="skill-box__max"></span></p>
    //     <hr>
    //     <p class="skill-box__text"></p>
    //     <p class="skill-box__bonus-box"><span class="skill-box__bonus-name"></span>: <span class="skill-box__bonus-number"></span></p>
    //     <p class="skill-box__flavor-text"></p>
    // </div>`;
    //     hoveredElement.append(newElement);
    //     newElement.style.position = "absolute";
    //     newElement.style.top = "0";
    //     newElement.style.left = "120%";
    //     newElement.style.width = "400px";
    //     newElement.style.zIndex = "100";

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                displayToolTip(skill, e);
            }
        }
    });

    skill.addEventListener('mouseleave', () => {
        hideToolTip();
    });

    skill.addEventListener('click', function(e) {
        let clickedElement = this;
        let childElement = clickedElement.getElementsByClassName('skill-tree__number');
        childElement = childElement[0];

        let skillName = skill.dataset.name;

        for (let i = 0; i < rafaSkills.length; i++) {
            let skill = rafaSkills[i];

            if (skill.name === skillName) {
                addSkillPoint(skill, childElement, e);
            }
        }

        checkAvailability();
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
                subtractSkillPoint(skill, childElement, e);
            }
        }

        checkAvailability();
    });
});

function displayToolTip(skill, e) {

    document.querySelector(".skill-box__name").innerHTML = skill.name;
    document.querySelector(".skill-box__type").innerHTML = skill.type;

    if (skill.type === "Passive") {
        document.querySelector(".skill-box__stat-box").style.display = "block";
        document.querySelector(".skill-box__filled").innerHTML = skill.filled;
        document.querySelector(".skill-box__max").innerHTML = skill.max;
    } else {
        document.querySelector(".skill-box__stat-box").style.display = "none";
    }

    document.querySelector(".skill-box__text").innerHTML = skill.text;

    if (skill.bonuses) {
        let html = "";
        skill.bonuses.forEach(function(bonus, index) {
            if (bonus.single === true) {
                html += "<div><span class='keyword keyword--blue'>" + bonus.attribute + ":</span> " + bonus.before + bonus.bonus + bonus.after + "</div>";
            } else {
                if (skill.filled === 0) {
                    html += "<div><span class='keyword keyword--blue'>" + bonus.attribute + ":</span> <span class='keyword keyword--green'>" + bonus.before + bonus.bonus[0] + bonus.type + "</span>" + bonus.after + "</div>";
                } else if (skill.filled !== skill.max) {
                    html += "<div><span class='keyword keyword--blue'>" + bonus.attribute + ":</span> " + bonus.before + bonus.bonus[skill.filled - 1] + bonus.type + " <span class='keyword keyword--green'>" + bonus.before + bonus.increment + bonus.type + "</span>" + bonus.after + "</div>";
                } else {
                    html += "<div><span class='keyword keyword--blue'>" + bonus.attribute + ":</span> " + bonus.before + bonus.bonus[skill.filled - 1] + bonus.type + bonus.after + "</div>";
                }
            }
        });

        document.querySelector(".skill-box__bonus-box").innerHTML = html;
    }

    // if (skill.bonusName && skill.bonusNumber) {
    //     document.querySelector(".skill-box__bonus-box").style.display = "block";
    //     document.querySelector(".skill-box__bonus-name").innerHTML = skill.bonusName;
    //     document.querySelector(".skill-box__bonus-number").innerHTML = skill.bonusNumber;
    // } else {
    //     document.querySelector(".skill-box__bonus-box").style.display = "none";
    // }

    if (skill.flavorText) {
        document.querySelector(".skill-box__flavor-text").style.display = "block";
        document.querySelector(".skill-box__flavor-text").innerHTML = skill.flavorText;
    } else {
        document.querySelector(".skill-box__flavor-text").style.display = "none";
    }

    let bottomOfSkill = e.target.getBoundingClientRect().bottom;
    document.querySelector(".skill-box").style.top = bottomOfSkill + "px";
    document.querySelector(".skill-box").style.visibility = "visible";

}

function hideToolTip() {
    document.querySelector(".skill-box").style.visibility = "hidden";
}

function updateSkillPoints(skill, childElement, number) {
    let filled = skill.filled;
    let max = skill.max;
    let isAllowed = true;

    let section = childElement.closest(".skill-tree__section");
    let skillsInTree = parseInt(section.dataset.skillNumber);

    let isTopTree = childElement.closest(".js_top-tree") ? true : false;
    let rowParent = childElement.closest(".js_row");
    let skillRequirement = parseInt(rowParent.dataset.required);

    if (skillsInTree < skillRequirement) {
        isAllowed = false;
    }
}

function addSkillPoint(skill, childElement, e) {
    let filled = skill.filled;
    let max = skill.max;
    let isAllowed = true;

    let section = childElement.closest(".skill-tree__section");
    let skillsInTree = parseInt(section.dataset.skillNumber);

    let rowParent = childElement.closest(".js_row");
    let skillRequirement = parseInt(rowParent.dataset.required);

    let isFirstRow = rowParent.dataset.firstRow == "true" ? true : false;

    if (skillsInTree < skillRequirement) {
        isAllowed = false;
    }

    if (isFirstRow && currentSkillPoints < 15) {
        isAllowed = false;
    }   

    if (filled === max || currentSkillPoints === maxSkillPoints || !isAllowed) return;

    skillsInTree++;
    section.dataset.skillNumber = skillsInTree;

    skill.filled++;
    childElement.textContent = skill.filled;
    displayToolTip(skill, e);
    currentSkillPoints++;
    displaySkillPoints();
    updateGradient(section);
}

function subtractSkillPoint(skill, childElement, e) {
    let filled = skill.filled;

    let section = childElement.closest(".skill-tree__section");
    let skillsInTree = parseInt(section.dataset.skillNumber);

    let rowParent = childElement.closest(".js_row");
    let skillRequirement = parseInt(rowParent.dataset.required);

    let isFirstRow = rowParent.dataset.firstRow == "true" ? true : false;

    if (skillsInTree < skillRequirement) {
        isAllowed = false;
    }

    if (isFirstRow && currentSkillPoints < 15) {
        isAllowed = false;
    }   

    if (filled === 0 || currentSkillPoints === 0) return;

    skillsInTree--;
    section.dataset.skillNumber = skillsInTree;

    skill.filled--;
    childElement.textContent = skill.filled;
    displayToolTip(skill, e);
    currentSkillPoints--;
    displaySkillPoints();
    updateGradient(section);
}

function updateGradient(section) {
    let max = parseInt(section.dataset.max);
    let current = parseInt(section.dataset.skillNumber);
    let percent = (current / max) * 100;
    if (percent > 100) {
        percent = 100;
    }
    section.style.background = `linear-gradient(180deg,rgba(0, 0, 0, 0) ${percent/10}%, rgba(87, 199, 133, .5) ${percent}%, transparent ${percent}%)`;
}

function checkAvailability() {
    let skillImages = document.querySelectorAll(".skill-tree__skill-img");

    skillImages.forEach((image) => {
        let section = image.closest(".skill-tree__section");
        let skillsInTree = parseInt(section.dataset.skillNumber);
        let rowParent = image.closest(".js_row");
        let skillRequirement = parseInt(rowParent.dataset.required);
        let canColor = true;
        let isFirstRow = rowParent.dataset.firstRow == "true" ? true : false;
        if (isFirstRow && currentSkillPoints < 15) {
            canColor = false;
        }

        if (skillsInTree >= skillRequirement && canColor) {
            image.classList.add("skill-tree__skill-img--colored");
        } else {
            image.classList.remove("skill-tree__skill-img--colored");
        }
    });
}