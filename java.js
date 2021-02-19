let base=500;
let medium=125;
let permaBoost=64;

const ivFloor={
    lucky:12,
    raid:10,
    research:10,
    hatch:10,
    bestFriend:5,
    weatherBoost:4,
    ultraFriend:3,
    greatFriend:2,
    goodFriend:1,
    wild:0
}
const wbSwitchValue={
    on:false
}
function switchChange(){
    if (wbSwitchValue.on===false){
        wbSwitchValue.on=true;
    }else{
        wbSwitchValue.on=false;
    }
}
class Pokemon{
    constructor(name,shinyrate){
        this.name=name;
        this.shinyrate=shinyrate;
    }
}

const characters={
    bulbasaur:new Pokemon('Bulbasaur',base),
    caterpie:new Pokemon('Caterpie',base),
    pidgey: new Pokemon('Pidgey',base),
    ekans:new Pokemon('Ekans',base),
    nidoranF:new Pokemon('Nidoran (F)',base),
    nidoranM:new Pokemon('Nidoran (M)',base),
    jigglypuff:new Pokemon('Jigglypuff',base),
    zubat:new Pokemon('Zubat',base),
    oddish:new Pokemon('Oddish',base),
    venonat:new Pokemon('Venonat',base),
    growlithe:new Pokemon('Growlithe',base),
    abra:new Pokemon('Abra',base),
    machop:new Pokemon('Machop',base),
    bellsprout:new Pokemon('Bellsprout',base),
    tentacool:new Pokemon('Tentacool',base),
    geodude:new Pokemon('Geodude',base),
    magnemite:new Pokemon('Magnemite',base),
    seel:new Pokemon('Seel',base),
    grimer:new Pokemon('Grimer',base),
    shellder:new Pokemon('Shellder',base),
    gastly:new Pokemon('Gastly',base),
    drowzee:new Pokemon('Drowzee',base),
    krabby:new Pokemon('Krabby',base),
    voltorb:new Pokemon('Voltorb',base),
    exeggcute:new Pokemon('Exeggcute',base),
    koffing:new Pokemon('Koffing',base),
    rhyhorn:new Pokemon('Rhyhorn',base),
    tangela:new Pokemon('Tangela',base),
    tauros:new Pokemon('Tauros',base),
    magikarp:new Pokemon('Magikarp',base),
    eevee:new Pokemon('Eevee',base),
    omanyte:new Pokemon('Omanyte',base),
    dratini:new Pokemon('Dratini',base),
    chikorita:new Pokemon('Chikorita',base),
    cyndaquil:new Pokemon('Cyndaquil',base),
    totodile:new Pokemon('Totodile',base),
    sentret:new Pokemon('Sentret',base),
    chinchou:new Pokemon('Chinchou',base),
    mareep:new Pokemon('Mareep',base),
    sudowoodo:new Pokemon('Sudowoodo',base),
    aipom:new Pokemon('Aipom',base),
    sunkern:new Pokemon('Sunkern',base),
    yanma:new Pokemon('Yanma',base),
    murkrow:new Pokemon('Murkrow',base),
    misdreavus:new Pokemon('Misdreavus',base),
    dunsparce:new Pokemon('Dunsparce',base),
    shuckle:new Pokemon('Shuckle',base),
    teddiursa:new Pokemon('Teddiursa',base),
    swinub:new Pokemon('Swinub',base),
    houndour:new Pokemon('Houndour',base),
    larvitar:new Pokemon('Larvitar',base),
    treecko:new Pokemon('Treecko',base),
    mudkip:new Pokemon('Mudkip',base),
    poochyena:new Pokemon('Poochyena',base),
    zigzagoon:new Pokemon('Zigzagoon',base),
    wurmple:new Pokemon('Wurmple',base),
    seedot:new Pokemon('Seedot',base),
    taillow:new Pokemon('Taillow',base),
    makuhita:new Pokemon('Makuhita',base),
    skitty:new Pokemon('Skitty',base),
    roselia:new Pokemon('Roselia',base),
    spoink:new Pokemon('Spoink',base),
    lunatone:new Pokemon('Lunatone',base),
    barboach:new Pokemon('Barboach',base),
    baltoy:new Pokemon('Baltoy',base),
    shuppet:new Pokemon('Shuppet',base),
    duskull:new Pokemon('Duskull',base),
    snorunt:new Pokemon('Snorunt',base),
    luvdisc:new Pokemon('Luvdisc',base),
    beldum:new Pokemon('Beldum',base),
    turtwig:new Pokemon('Turtwig',base),
    chimchar:new Pokemon('Chimchar',base),
    piplup:new Pokemon('Piplup',base),
    drifloon:new Pokemon('Drifloon',base),
    buneary:new Pokemon('Buneary',base),
    hippopotas:new Pokemon('Hippopotas',base),
    skorupi:new Pokemon('Skorupi',base),
    croagunk:new Pokemon('Croagunk',base),
    snover:new Pokemon('Snover',base),
    patrat:new Pokemon('Patrat',base),
    pidove:new Pokemon('Pidove',base),
    roggenrola:new Pokemon('Roggenrola',base),
    woobat:new Pokemon('Woobat',base),
    dwebble:new Pokemon('Dwebble',base),
    minccino:new Pokemon('Minccino',base),
    delibird:new Pokemon('Delibird',base),
    snivy:new Pokemon('Snivy',base),
    miltank:new Pokemon('Miltank',base),
    gible:new Pokemon('Gible',medium),
    aVulpix:new Pokemon('Alolan Vulpix',permaBoost),
    aSandshrew:new Pokemon('Alolan Sandshrew',permaBoost),
    onix:new Pokemon('Onix',permaBoost),
    chansey:new Pokemon('Chansey',permaBoost),
    aerodactyl:new Pokemon('Aerodactyl',permaBoost),
    pineco:new Pokemon('Pineco',permaBoost),
    sneasel:new Pokemon('Sneasel',permaBoost),
    skarmory:new Pokemon('Skarmory',permaBoost),
    nincada:new Pokemon('Nincada',permaBoost),
    feebas:new Pokemon('Feebas',permaBoost),
    alomomola:new Pokemon('Alomomola',permaBoost)
}




// function shundoWild(){
//     let nam=document.getElementById("list").value;
//     let mon=characters[nam];
//     let nowb=mon.shinyrate*ivCombinations(ivFloor.wild);
//     let wb=mon.shinyrate*ivCombinations(ivFloor.weatherBoost);
//     console.log(mon.name);
//     document.getElementById("print").innerHTML=("The chance to get a SHUNDO "+mon.name+" wild catch is ~1/"+wb+" when weather boosted, or ~1/"+nowb+" when not weather boosted.")
// }
function shundoWild(){
    let nam=document.getElementById("list").value;
    let mon=characters[nam];
    let nowb=mon.shinyrate*ivCombinations(ivFloor.wild);
    let wb=mon.shinyrate*ivCombinations(ivFloor.weatherBoost);
    if(wbSwitchValue.on===true){
        document.getElementById("print").innerHTML=("The chance to get a SHUNDO "+mon.name+" wild catch is ~1/"+wb+" when weather boosted.")
    }else{
        document.getElementById("print").innerHTML=("The chance to get a SHUNDO "+mon.name+" wild catch is ~1/"+nowb+" when not weather boosted.")
    }
}






// function shundoRaid(){
//     let chance=216*20;
//     return "The chance to recieve a SHUNDO legendary is ~1/"+chance+", assuming the legendary is shiny eligible."
// }
// function shundoRaidNL(){
//     let chance=216*64;
//     return "The chance to recieve a SHUNDO Alolan Raichu/Alolan Marowak/Mawile/Shinx/Timburr/Alolan Sandshrew/Alolan Vulpix/Absol from a raid is ~1/"+chance+"."
// }

function hundoTrade(){
    let friendsL=document.getElementById("friendshiplist").value;
    console.log(friendsL);
    let friendshipLevel=ivFloor[friendsL];
    console.log(friendshipLevel);
    let regular=(0.95*(1/ivCombinations(friendshipLevel)));
    let lucky=(0.05*(1/ivCombinations(ivFloor.lucky)));
    let total=regular+lucky;
    total=Math.round(total*1000000)/10000
    document.getElementById("printTwo").innerHTML=("The chance to recieve a hundo when trading is ~"+total+"%.")
}
function ivCombinations(floor){
    let potential=16-floor;
    let total=potential*potential*potential;
    return total;
}



