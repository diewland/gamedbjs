// title is require field
var data = [
    // Draco
    {
        title:      'Draco Deathcrown',
        code:       'DRC_DCW',
        role:       'Tank',
        clazz:      'Warrior',
        na:         '-ATK',
        na_desc:    "Reduces the enemy's ATK when using a normal attack.",
        as_1:       'Single DMG',
        as_1_desc:  "Inflicts 748% damage on the enemy and stuns for 13 sec.",
        as_1_cd:    22.9,
        as_2:       'Single DMG',
        as_2_desc:  "Inflicts 822% damage and focuses the party's attack for 12 sec. The Emblem of Demise disregards all taunts.",
        as_2_cd:    20.8,
        as_3:       'Self Buff',
        as_3_desc:  "Becomes invulnerable for 10 sec and taunts at a set chance.",
        as_3_cd:    39,
        ps_1:       'Self Buff + Party Buff',
        ps_1_desc:  "Decreases damage received by 16% and increases a party member's STA by 9%.",
        ps_1_cd:    null,
        ps_2:       'AOE DMG',
        ps_2_desc:  "When attacked, inflicts 412% damage on all enemies (15% chance) and shoots a breath that decreases ATK by 33% for 16 sec.",
        ps_2_dc:    9.1,
    },
    {
        title:      'Draco Deathcrown [KR]',
        code:       'DRC_DCW',
        role:       'Tank',
        clazz:      'Warrior',
        na:         '-ATK',
        na_desc:    "Reduces the enemy's ATK when using a normal attack.",
        as_1:       'Single DMG',
        as_1_desc:  "Inflicts 960% damage on the enemy and stuns for 14 sec.",
        as_1_cd:    22.9,
        as_2:       'Single DMG',
        as_2_desc:  "Inflicts 1097% damage with 100% accuracy and clears buffs. Also focuses the party's attack for 14 sec. The 'Emblem of Demise' disregards all taunts.",
        as_2_cd:    20.8,
        as_3:       'Self Buff',
        as_3_desc:  "Becomes invulnerable for 14 sec and taunts at a set chance.",
        as_3_cd:    39,
        ps_1:       'Self Buff + Party Buff',
        ps_1_desc:  "Decreases damage received by 16% and increases a party member's STA by 9%.",
        ps_1_cd:    null,
        ps_2:       'AOE DMG',
        ps_2_desc:  "When attacked, inflicts 506% damage on all enemies (15% chance) and shoots a breath that decreases ATK by 35% for 18 sec and removes all positive buffs (including invincibility) from the entire enemy party.",
        ps_2_dc:    9.1,
    },
    {
        title:      'Draco Brightspark',
        code:       'DRC_BSP',
        role:       'DPS',
        clazz:      'Mage',
        na:         'AOE DMG',
        na_desc:    'Inflicts damage over the area and casts the Emblem of Demise for her normal attack. (Boosts damage by 40%)',
        as_1:       'Single DMG',
        as_1_desc:  "Inflicts 1044% damage.",
        as_1_cd:    17.3,
        as_2:       'AOE DMG',
        as_2_desc:  "Inflicts 384% damage on all enemies and 25% additional damage (immune to dispel) for 6 sec.",
        as_2_cd:    22.2,
        as_3:       'AOE DMG',
        as_3_desc:  "Inflicts 150% damage and steals HP from all enemies for 4 sec and becomes invulnerable.Enemies will be stunned at a set chance.",
        as_3_cd:    25.9,
        ps_1:       'Self Buff',
        ps_1_desc:  "Increases Critical Rate by 14 and Accuracy by 19.",
        ps_1_cd:    null,
        ps_2:       'Self Buff',
        ps_2_desc:  "Increases DEF Penetration by 23.",
        ps_2_cd:    null,
    },
    {
        title:      'Draco Bloodwind',
        code:       'DRC_BWD',
        role:       'DPS',
        clazz:      'Archer',
        na:         'AOE DMG',
        na_desc:    'Unleashes an explorive attack when using a normal attack. (his normal attack does AOE splash damage)',
        as_1:       'Single DMG',
        as_1_desc:  "Inflicts 648% damage and decreases the enemy's DEF by 53%.",
        as_1_cd:    18.2,
        as_2:       'AOE DMG',
        as_2_desc:  "Inflicts 243% damage on all enemies and 25% additional damage (immune to dispel) for 8 sec.",
        as_2_cd:    25.5,
        as_3:       'Party Buff',
        as_3_desc:  "Increases entire party's Critical Damage by 47 for 31 sec.",
        as_3_cd:    66.2,
        ps_1:       'Self Buff',
        ps_1_desc:  "Increases DEX by 16%.",
        ps_1_cd:    null,
        ps_2:       'Party Buff',
        ps_2_desc:  "Increases entire party's Critical Rate by 6.",
        ps_2_cd:    null,
    },
    {
        title:      'Draco Greysoul',
        code:       'DRC_GRS',
        role:       'DPS',
        clazz:      'Rogue',
        na:         '-Buff',
        na_desc:    'Removes 1 positive buff from the enemy when using a normal attack.',
        as_1:       'Single DMG',
        as_1_desc:  "Inflicts 797% damage and instantly kills (20% chance).",
        as_1_cd:    17.3,
        as_2:       'Single DMG',
        as_2_desc:  "Inflicts 1065% damage to a single enemy.",
        as_2_cd:    13.6,
        as_3:       'Summon',
        as_3_desc:  "Greysoul creates a clone using one of the five Surge Swords to punish enemies. The clone manifests for 19,2 sec.",
        as_3_cd:    39.6,
        ps_1:       'Self Buff',
        ps_1_desc:  "Whenever Greysoul delivers an enemy to his/her death, Critical Rate increases by 79 and Critical Damage increases by 212 for 22 sec. Enemies killed by Greysoul cannot be revived.",
        ps_1_cd:     null,
        ps_2:       'Self Buff',
        ps_2_desc:   "Increases ACC by 21.",
        ps_2_cd:     null,
    },
    {
        title:      'Draco Greysoul [KR]',
        code:       'DRC_GRS',
        role:       'DPS',
        clazz:      'Rogue',
        na:         '-Buff',
        na_desc:    'Removes 1 positive buff from the enemy when using a normal attack.',
        as_1:       'Single DMG',
        as_1_desc:  "Inflicts 953% damage (with 100% accuracy) and instantly kills (40% chance).",
        as_1_cd:    17.3,
        as_2:       'Single DMG',
        as_2_desc:  "Inflicts 1271% damage to a single enemy.",
        as_2_cd:    13.6,
        as_3:       'Summon',
        as_3_desc:  "Greysoul creates a clone using one of the five Surge Swords to punish enemies. The clone manifests for 19,2 sec.",
        as_3_cd:    39.6,
        ps_1:       'Self Buff',
        ps_1_desc:  "Whenever Greysoul delivers an enemy to his/her death, he increases his DEX by 117% for 20 sec. He also resets ALL of his Cooldowns if he kills an enemy. Enemies killed by Greysoul cannot be revived.",
        ps_1_cd:     null,
        ps_2:       'Self Buff',
        ps_2_desc:  "Increases ACC by 21 and recovers 15% HP of the damage he deals to an enemy (compareable with the Rogue skill Bloodthirst).",
        ps_2_cd:    null,
    },
    {
        title:      'Draco Blackaria',
        code:       'DRC_BCR',
        role:       'Healer',
        clazz:      'Priest',
        na:         'Single Heal',
        na_desc:    'Recovers the HP of allies when using a normal attack.',
        as_1:       'AOE Heal',
        as_1_desc:  "Recovers 270% HP for all party members.", 
        as_1_cd:    7.5,
        as_2:       'Single Buff',
        as_2_desc:  "Increases ATK of 1 party member by 84% for 16 sec, grants Immunity, and increases ATK Speed by 45%.",
        as_2_dc:    52,
        as_3:       'Single Revive',
        as_3_desc:  "Revive 1 party member and grand them invulnerability.",
        as_3_cd:    62.4,
        ps_1:       'Party Buff',
        ps_1_desc:  "When Blackaria is unable to fight (means when she dies), she makes all party members invincible for 8 sec.",
        ps_1_cd:    43.7,
        ps_2:       'Party Buff',
        ps_2_desc:  "Increases entire party's DEF by 14%.",
        ps_2_cd:    null,
    },
];

var dashboard = document.getElementById('dashboard');
var dbz = new gameDB(
    'DBZ Skill Compare',    // title
    data,           // data
    dashboard       // dashboard
);
dbz.search = function(data, q){
    var result = [];
    var search_fields = [
        'title',
        'clazz',
        'na',   'na_desc',
        'as_1', 'as_1_desc',
        'as_2', 'as_2_desc',
        'as_3', 'as_3_desc',
        'ps_1', 'ps_1_desc',
        'ps_2', 'ps_2_desc',
    ];
    for(var i=0; i<data.length; i++){
        var cur = data[i];
        for(var j in search_fields){
            var field = search_fields[j];
            if(cur[field].toLowerCase().indexOf(q.toLowerCase()) >= 0){
                result.push(cur);
                break;
            }
        }
    }
    return result;
}
dbz.draw_table = function(data){
    var skill_list = [ 'na', 'as_1', 'as_2', 'as_3', 'ps_1', 'ps_2' ];
    var html = "<table border='1' cellspacing='0' cellpadding='5'>"
             + "<tr>"
             + "<th><input class='cbx_all' type='checkbox' /></th>"
             + "<th align='left'>Unit</th>"
             + "<th align='left'>Class</th>"
             + "<th align='left'>Normal Attack</th>"
             + "<th align='left'>Active 1</th>"
             + "<th align='left'>Active 2</th>"
             + "<th align='left'>Active 3</th>"
             + "<th align='left'>Passive 1</th>"
             + "<th align='left'>Passive 2</th>"
             + "</tr>";
    for(var i=0; i<data.length; i++){
        var cur = data[i];
        html += "<tr>"
             + "<td><input class='cbx' type='checkbox' /></td>"
             + "<td><img src='img/" + cur.code + ".png'>"
             + "<br />" + cur.title
             + "</td>"
             + "<td>" + cur.clazz + "</td>"
            for(var j=0; j<skill_list.length; j++){
                var skill = skill_list[j];
                var cd    = cur[skill+'_cd'];
                html += "<td title=\"" + cur[skill+'_desc'];
                if(cd){
                    html += " ( CD " + cd + "s )";
                }
                html += "\">" + cur[skill] + "</td>";

            }
        html += "</tr>";
    }
    html += "<tr>"
         + "<th><input class='cbx_all' type='checkbox' /></th>"
         + "<th align='left'>Unit</th>"
         + "<th align='left'>Class</th>"
         + "<th align='left'>Normal Attack</th>"
         + "<th align='left'>Active 1</th>"
         + "<th align='left'>Active 2</th>"
         + "<th align='left'>Active 3</th>"
         + "<th align='left'>Passive 1</th>"
         + "<th align='left'>Passive 2</th>"
         + "</tr>";
    html += "</table>";
    return html;
}
dbz.choose = function(items){
    if(items.length == 0){
        alert('No item(s) selected.');
        return;
    }
    var topics = [
        [ 'na_desc',    'Normal Attack' ],
        [ 'as_1_desc',  'Active Skill 1' ],
        [ 'as_2_desc',  'Active Skill 2' ],
        [ 'as_3_desc',  'Active Skill 3' ],
        [ 'ps_1_desc',  'Passive Skill 1' ],
        [ 'ps_2_desc',  'Passive Skill 2' ],
    ];

    // create table
    var html = '<title>' + dbz.title + '</title>'
             + "<style type='text/css'> tr:hover { background-color: #FED; } </style>"
             + "<input type='button' value='Close' onclick='window.close();' />"
             + "<br />"
             + "<br />";
    html += "<table border='1' cellspacing='0' cellpadding='5'>";

    // fist row, unit
    html += '<tr><td></td>';
    for(var j in items){
        var item = items[j];
        html += "<td valign='top'>"
             +  "<img src='img/" + item.code + ".png' />"
             +  '<br />' + item.title
             +  '</td>';
    }
    html += '</tr>';

    // next rows, skills
    for(var i in topics){
        var topic = topics[i];
        html += '<tr><th>' + topic[1] + '</th>';
        for(var j in items){
            var item = items[j];
            var sdsc = item[topic[0].replace('_desc', '')];
            var cd   = item[topic[0].replace('_desc', '_cd')];
            html += "<td valign='top'>";
            html += "<div style='color: blue;'>" + sdsc
            if(cd){ html += " ( " + cd + "s )"; }
            html += "</div>";
            html += item[topic[0]];
            html += '</td>';
        }
        html += '</tr>';
    }

    // end table
    html += '</table>';
    html += "<br />"
         +  "<input type='button' value='Close' onclick='window.close();' />";

    // render new page
    var win = open('', 'dbz');
    win.document.body.innerHTML = '';
    win.document.write(html);
}
dbz.make();
