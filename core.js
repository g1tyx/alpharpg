//1-- ADD ATTRIBUTES TO WEAPONS & MONSTERS (Water, Fire, Earth, Wind, Dark, Light)
//2-- ADD NEW LOOTABLE OBJECTS ( crafting materials, potions, bonus objects, weapons )
//3-- CREATE A CRAFTING FUNCTION, WITH THE ABILITY TO CHOOSE ELEMENT & MATERIAL
//4-- NEW STORY WITH CHARACTERS, REMOVE THE CONCEPT OF DIMENSION(not the prestige, i meant only in the story) TO FOCUS ON ONLY 1 CONTINENT WITH DIFFERENT KINGDOMS
//5-- GUILD PROMOTIONS : 2-3 ELITES & 1 BOSS (low chances to get a god) TO PROMOTE FROM RANK F>E>D>C>B>A>S which will increase rewards. (money/exp)

// Gems & Relics rewards MISSING in completed mission (even if still not used for now)
// add new classes, healer/wizard
// remove the healing function in the take cover button (you can still hide) but healing require potions (need to create the crafting function for them)
// HEALER : healer would be able to heal itself without potions
// prestige classes / upgraded classes after beating the game the 1st time

var url = window.location.href;
var version = "1.9"; //!\ ONLY 1.X /!\\
var loadState = 0;
var WelcomeData = [1, "Neo", "None"];
var codes = {};
var isTabActive = "Login";
var WeaponsPower = 10;
var SpecialPower = 20;
var Ranking = 0;
var PowerMult = 1;
var LifeMult = 1;
var lastCloudSave = 0;
var NewArmorID = 0;
var CoreLife = 100;
var CoreBaseLife = 100;
var Leader = 0;
var MaxLevel = 35;
var MaxScore = 350;
var TotalMissions = 0;
var LastMission = 0;
var ScoreModeEnabled = 0;
var LoggedIn = 0;
var Email = "none";
var Relicname = ["Ares Relic", "Yggdrasil Relic", "Vulcan Relic", "Recon Relic"];
var CoreNames = {
  Normal: ['Poor', 'Tiny', 'Cursed', 'Ruined', 'Damaged', 'Frozen', 'Rusty', 'Single'],
  Common: ['Cheap', 'Small', 'Lower', 'Minor', 'Weak', 'Used', 'Slow', 'Dual'],
  Uncommon: ['Acceptable', 'Big', 'Expensive', 'Strong', 'Higher', 'Clean', 'Quad', 'Fresh'],
  Rare: ['Lucky', 'Good', 'Premium', 'Shadow', 'Light', 'Fast', 'Hexa', 'Powerful'],
  Epic: ['Master', 'Expert', 'Guardian', 'OC', 'Defender', 'Avenger', 'Advanced', 'Octo'],
  Exotic: ['Exotic', 'Magic', 'Sacred', 'Blessed', 'Relic', 'Alpha', 'Destiny', 'Deca'],
  Divine: ['Unreal', 'Paradise', 'Future', 'Godly', 'Holy', 'Heaven', 'Fairy', 'Fantasm'],
};
var Backup = "Default";
var Game = {
  username: "Default",
  Armors: {
    //  STATUS, NAME, CLASS, ARMOR, LEVEL, GemS
    1: [true, "Basic Armor", "Normal", 100, 1, 0],
    2: [false, "Basic Armor", "Normal", 100, 1, 0],
    3: [false, "Basic Armor", "Normal", 100, 1, 0],
    4: [false, "Basic Armor", "Normal", 100, 1, 0],
  },
  Weapons: {
    Main: ["Training Sword", "Normal", 0, 1, 10], //NAME, CLASS, GemS, LEVEL, POWER
    Special: ["Training Dagger", "Normal", 0, 1, 10],
  },
  RLS: {//RELIC NAME, CLASS, TYPE, VALUE
    1: ["Normal", 0, 0],
    2: ["Normal", 0, 0],
    3: ["Normal", 0, 0],
    4: ["Normal", 0, 0],
  },
  ArmorUpgrades: [null, 0, 0, 0, 0],
  MaxUPC: [0, 0, 0, 0, 0, 0],
  xp: [0, 100, 1],
  Level: 1,
  Ennemy: [], //NAME, CLASS, LEVEL, POWER, LIFE, CURRENTLIFE
  Loses: 0,
  Wins: 0,
  Cash: 0,
  isInFight: 3,
  Emp: 0,
  Shards: 0,
  Defeated: [null, 0, 0, 0, 0, 0, 0, 0],
  inventory: [],
  MaxInv: 20,
  Theme: [],
  Upgrades: [0, 0, 0, 0],
  Simulation: 1,
  WTMult: [0, 0, 0, 1], //POWER, LIFE, XP, DIFFICULTY
  Avatar: random(1, 39),
  config: [1, 1, 0, 1, 1],
  LastEscape: 0,
  Sprite: 0,
  MissionsCompleted: [],
  Location: 0,
  PlayTime: 0,
  MissionStarted: [false, 0, 0, 0, 0], //TOGGLE, MISSION ID, PROGRESSION, OBTAINED REWARD, LOCK WIN
  DefeatedByLocation: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  FP: 0,
  AutoRemove: [0, 0, 0, 0, 0, 0],
  TotalMissions: 0,
  class: "none",
};
var Missions = {
  0: ["White Light", 'You woke up in an unknown world where a white light dazzles you..<br> this place seems weird, you want to leave it as quick as possible.', 1, 1, 10, 200, 0, "Normal", 0, -1],
  1: ["Lost Path", 'You discovered a little path hidden in the shadows<br> and decided to explore it in the hope of finding informations to return in your world.', 4, 1, 10, 250, 0, "Common", 1, 0],
  2: ["Shadow Forest", 'You arrive at the end of the path and now enter a dark forest..<br>There seems to be light in the distance.', 7, 1, 10, 500, 0, "Common", 2, 1],
  3: ["Galarius City", 'You reach a city with a lot of different races.<br>You can see humans, elves and even dwarves.<br>Maybe you will find help here or just someone that can explain you how to get back to your world.', 9, 1, 10, 750, 0, "Uncommon", 3, 2],
  4: ["Endless mountain", 'One of the locals advises you to go north and reach the royal capital through the mountains..<br> So here you are in the so called endless mountain.', 12, 1, 10, 1000, 0, "Uncommon", 4, 3],
  5: ["Dark Cave", 'You arrive at the entrance of a dark cave,<br> it seems narrow but it is much faster and less dangerous than the mountain.', 15, 1, 10, 1500, 0, "Rare", 5, 4],
  6: ["Empire Road", 'You finally reached the end of this cave, tired but in one piece,<br> you can already see a big city at the end of the road..', 19, 1, 10, 2500, 0, "Rare", 6, 5],
  7: ["Imperium City", 'You\'re now in the Capital, the king heard about your story and asked for an immediate hearing.', 22, 1, 10, 3000, 0, "Rare", 7, 6],
  8: ["Central V", 'You discuss with the king to find a way to return to your world..<br>He tells you that the only way is the Red Portal but suddenly..<br> The city is attacked by the demon army, you need to get out of here quick.', 25, 1, 10, 5000, 0, "Epic", 8, 7],
  9: ["The Red Portal", 'The red portal is near and it seems that the portal is really hot.. Burning like the hells gate. But you do not really have any other choice.', 27, 1, 10, 7500, 0, "Epic", 9, 8],
  10: ["Corrupted World", 'You have successfully passed the portal.. but where are you now ?', 29, 1, 10, 10000, 0, "Epic", 10, 9],
  11: ["Corrupted Fortress", 'You see a huge fortress with nothing good inside, you must clean this place.', 30, 2, 10, 0, 0, "Exotic", 11, 10],
  12: ["Corrupted Fortress - Basement", 'There is a door in the fortress which leads to another level, clean this place too.', 30, 2, 25, 0, 2, "Exotic", 11, 11],
  13: ["Corrupted Fortress - Core", 'This is the last floor, the core of the Fortress, where the corruption started.. Destroy it.', 30, 2, 50, 1, 0, "Exotic", 11, 12],
  14: ["The Black Portal", 'Just after you destroyed the fortress core, another portal appeared..<br><br> A new story begins.', 30, 1, 10, 15000, 0, "Exotic", 12, 11],
  15: ["The Black Portal 2", 'The passage becomes darker and darker, you keep moving forward and perceive a light in the distance..', 30, 1, 10, 20000, 0, "Exotic", 12, 14],
  16: ["Light of Elysia", 'You\'ve just landed in a new world, in the city of Elysia. This world seems really beautiful, and so you decide to explore it.', 31, 1, 10, 25000, 0, "Exotic", 13, 15],
  17: ["Red Moon at Elysia", 'The city really is lively and in this world there are only humans and so far peace reigns, you decide to visit a bit the city this night, after all ..<br> This city is really big. Suddenly you hear a cry, you go to that shout and in the shadow of an alley you see a man sucking the blood of a woman.. a vampire is right there.', 31, 1, 10, 50000, 0, "Exotic", 13, 16],
  18: ["Vampire Manor", 'One of the vampires to confess the location of a vampire hideout, you will surely find informations there.', 32, 1, 10, 75000, 0, "Exotic", 14, 17],
  19: ["Funeral Chamber of the Manor", 'It seems to be the right place, it\'s full of vampires and one of them emits a strong power.', 32, 1, 10, 100000, 0, "Exotic", 14, 18],
  20: ["The New World", 'The city is now in peace, you follow the Red River to continue the exploration of this new world.', 33, 1, 10, 125000, 0, "Exotic", 15, 19],
  21: ["The Red River", 'During your daily hunt you find a merchant who keeps saying that the vampire attack in the city was only the beginning.<br> He also tells you that a rumor says that the castle is hidden in the mountains.<br> You will investigate on the spot to finally lead a quiet life', 33, 1, 10, 150000, 0, "Exotic", 15, 20],
  22: ["The mountains", "After searching for 5 days in the mountains, you find a bridge filled with corpses ..<br>Without any hesitation you enter the territory of vampires.", 34, 1, 10, 175000, 0, "Exotic", 16, 21],
  23: ["The Immortal Bridge", "These vampires seems a more difficult to kill than the ones in the city but you keep fighting and see a huge castle at the end of the bridge.", 34, 1, 10, 175000, 0, "Exotic", 16, 22],
  24: ["Vampire Castle", 'This is it, the Vampire Castle.<br>Now that you have arrived here you take the opportunity to clean the castle.', 35, 2, 10, 0, 0, "Exotic", 17, 23],
  25: ["Vampire Castle - Tower", 'You discover that one of the tower of the castle held prisoners, you must go and save them all.', 35, 2, 25, 1, 2, "Divine", 17, 24],
  26: ["Vampire Castle - Core", 'You have reached the heart of the castle, by destroying the heart, the world will finally be at peace.<br> But before this happy end, you will need to kill the remaining vampires.', 35, 2, 50, 2, 0, "Divine", 17, 25],
  //NAME, DESC, LEVEL, TYPE, REQ KILLS, EXP, REWARD TYPE, QUALITY, LOCATION, REQ MISSION
};
var Ennemies = {
  0: ["Kind Soul", "Evil Soul"],
  1: ["Fire Fairy", "Water Fairy", "Grass Fairy"],
  2: ["Wolf", " White Wolf", "African Wolf"],
  3: ["Gray Rat", "Brown Rat"],
  4: ["Stone Golem", "Water Golem"],
  5: ["Blue Slime", "Black Slime", "Yellow Slime"],
  6: ["Black Spider", "Red Spider"],
  7: ["Fire Mage", "Water Mage"],
  8: ["Zombie", "Burning Zombie"],
  9: ["Ghost", "Crying Ghost"],
  10: ["White Knight", "Red Knight"],
  11: ["Minor Rank Demon", "Middle Rank Demon", "Higher Rank Demon"],
  12: ["Skeleton", "Decrepit Skeleton", "Burnt Skeleton"],
  13: ["Jack-o'-lantern", "Jack-o'-lantern"],
  14: ["Vampire"],
  15: ["Fish-Man", "Fish-Man", "Fish-Man"],
  16: ["Vampire Lord", "Vampire"],
  17: ["Vampire Lord", "Noble Vampire"],
};

var BossNames = [
  'Pure Soul', 'Fairy Queen', 'Alpha Wolf', 'Huge Rat',
  'Poison Golem', 'Pink Slime', 'Albino Spider', 'Black Mage',
  'Ghoul', 'Poltergeist', 'Knight Commander', 'Demon Lord', 'Powerful Skeleton',
  "Jack-o'-lantern", 'Vampire Lord', 'Big Fish-Man', 'Noble Vampire', 'Vampire King'];

var POS = {
  0: ["The White Light", 1, 4, 0, 0, { lootables: ["Truc", "Potion"], }], //NAME, MINLEVEL, MAXLEVEL, MAX DROP QUALITY, MISSION COMPLETE
  1: ["The Lost Path", 4, 7, 1, 1, { lootables: ["Truc", "Potion"], }],
  2: ["The Shadow Forest", 7, 9, 1, 2, { lootables: ["Truc", "Potion"], }],
  3: ["Galarius City", 9, 12, 2, 3, { lootables: ["Truc", "Potion"], }],
  4: ["The Endless Mountain", 12, 15, 2, 4, { lootables: ["Truc", "Potion"], }],
  5: ["The Dark Cave", 15, 19, 3, 5, { lootables: ["Truc", "Potion"], }],
  6: ["Empire Road", 19, 22, 3, 6, { lootables: ["Truc", "Potion"], }],
  7: ["Imperium City", 22, 25, 3, 7, { lootables: ["Truc", "Potion"], }],
  8: ["Central V", 25, 27, 4, 8, { lootables: ["Truc", "Potion"], }],
  9: ["The Red Portal", 27, 29, 4, 9, { lootables: ["Truc", "Potion"], }],
  10: ["The Corrupted World", 29, 30, 4, 10, { lootables: ["Truc", "Potion"], }],
  11: ["The Corrupted Fortress", 29, 30, 5, 10, { lootables: ["Truc", "Potion"], }],
  12: ["The Black Portal", 30, 31, 5, 14, { lootables: ["Truc", "Potion"], }],
  13: ["Elysia City", 31, 32, 5, 14, { lootables: ["Truc", "Potion"], }],
  14: ["Vampire Manor", 32, 33, 5, 20, { lootables: ["Truc", "Potion"], }],
  15: ["The Red River", 33, 34, 5, 20, { lootables: ["Truc", "Potion"], }],
  16: ["The Immortal Bridge", 34, 35, 5, 20, { lootables: ["Truc", "Potion"], }],
  17: ["Vampire Castle", 35, 35, 5, 20, { lootables: ["Truc", "Potion"], }],
};

function test() {
  return POS[Game.Location][5].lootables[Math.floor(Math.random() * POS[Game.Location][5].lootables.length)];
}

(function () {
  if (location.href.match(/(goldenlys.github.io).*/)) window.oncontextmenu = (e) => { e.preventDefault(); };
  ResetTheme(0);
  if (localStorage.getItem("Alpha") != null) { load(); }
  if (localStorage.getItem("Alpha-Backup") != null) {
    loadBackup();
  }
  if (Game.username != "Default") {
    $("#menu").show();
    $('.ui.sidebar').sidebar({ dimPage: false, mobileTransition: 'scale down', transition: 'scale down' }).sidebar('hide');
    $("#sidebar-btn").on("click", function () { $('.ui.sidebar').sidebar('toggle'); $("#guild-btn").hide(); $(".brand-logo").hide(); });
    $("#CATEGORIE-1").show();
    $("#begin").hide();
    $(".footer").show();
    UpdateGame();
  }
  setInterval(UpdateEngine, 1000);
  UpdateLoadingText();
  ClickEvents();
  filter(0);
  $('.ui.accordion').accordion();
  $('.ui.checkbox').checkbox();
  if (Game.config[0] == 1) {
    $("#AlertToggle").checkbox("check");
  } else {
    $("#AlertToggle").checkbox("uncheck");
  }
  if (Game.config[1] == 1) {
    $("#AlertToggle2").checkbox("check");
  } else {
    $("#AlertToggle2").checkbox("uncheck");
  }
  if (Game.AutoRemove[0] == 1) {
    $("#RM1").checkbox("check");
  } else {
    $("#RM1").checkbox("uncheck");
  }
  if (Game.AutoRemove[1] == 1) {
    $("#RM2").checkbox("check");
  } else {
    $("#RM2").checkbox("uncheck");
  }
  if (Game.AutoRemove[2] == 1) {
    $("#RM3").checkbox("check");
  } else {
    $("#RM3").checkbox("uncheck");
  }
  if (Game.AutoRemove[3] == 1) {
    $("#RM4").checkbox("check");
  } else {
    $("#RM4").checkbox("uncheck");
  }
  if (Game.AutoRemove[4] == 1) {
    $("#RM5").checkbox("check");
  } else {
    $("#RM5").checkbox("uncheck");
  }
  if (Game.AutoRemove[5] == 1) {
    $("#RM6").checkbox("check");
  } else {
    $("#RM6").checkbox("uncheck");
  }
  if (Game.config[2] == 1) {
    $("#SkipRewards").checkbox("check");
  } else {
    $("#SkipRewards").checkbox("uncheck");
  }
  if (Game.config[3] == 1) {
    $("#AutoMissions").checkbox("check");
  } else {
    $("#AutoMissions").checkbox("uncheck");
  }
  if (Game.config[4] == 1) {
    $("#OnlyMyVersion").checkbox("check");
  } else {
    $("#OnlyMyVersion").checkbox("uncheck");
  }
  $("#redNum").val("0");
  $("#greenNum").val("0");
  $("#blueNum").val("0");
  $("#vloader").html("AlphaRPG v" + version);
  ResetLeaderBoard();
  UpdateEngine();
  UpdateUI();
})();

function GetWBcontent(reason) {
  if (reason == "retour") {
    $("#wb-title").html("AlphaRPG");
    $("#wb-texttitle").html("Welcome back to <span class='glow'>AlphaRPG</span>, " + Game.username);
    $("#wb-text").html("Would you like to login ?");
    $("#modal-5").modal("show");
  } else {
    $("#wb-title").html("AlphaRPG");
    $("#wb-texttitle").html("Hello " + Game.username + " !");
    $("#wb-text").html("It's your first time playing AlphaRPG, would you like to login ?");
    $("#modal-5").modal("show");
  }
}

function UpdateEngine() {
  if (loadState < 4) {
    loadState++;
    $("#loading").show();
    $("#main").hide();
    $("#q").hide();
  }
  if (loadState == 4) {
    $("#loading").hide();
    $("#main").show();
    $("#q").show();
    if (Game.username != "Default") GetWBcontent("retour");
    loadState++;
    UpdateGame();
  }
  if (loadState == 5) {
    Game.PlayTime++;
    if (Game.Level >= MaxLevel && LastMission >= TotalMissions) { ScoreModeEnabled = 1; } else { ScoreModeEnabled = 0; }
    if (Game.Level == 1 && Game.MissionStarted[0] == false && Game.MissionsCompleted[0] == 0 && isTabActive == "None" && Game.config[3] == 1) {
      mission(0);
    }
    if (Game.isInFight == 1) $("#EnnemySprite").html("<img class='ui circular middle aligned medium image' src='DATA/Monsters/" + Game.Location + "-" + Game.Ennemy[0] + ".png'>");
    $("#color-display").css("background-color", "rgb(" + $(red).val() + ", " + $(green).val() + ", " + $(blue).val() + ")");
    if (CoreLife > CoreBaseLife) {
      CoreLife = CoreBaseLife;
      UpdateUI();
    }
    if (Game.isInFight != 2 && CoreLife == null || Game.Ennemy[5] == null || Game.Ennemy[5] == 0) {
      Game.isInFight = 0;
      UpdateGame();
    }
    if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] != 2 && Game.Level > POS[Missions[Game.MissionStarted[1]][8]][2]) {
      Game.Level = POS[Missions[Game.MissionStarted[1]][8]][2];
      UpdateGame();
    }
    if (lastCloudSave < 180) { lastCloudSave++; }
    else { SendStats(); }
    if (Game.LastEscape > 0) { Game.LastEscape--; $("#NextRetreat").html("Next retreat in " + toHHMMSS(Game.LastEscape) + "."); }
    else { $("#NextRetreat").html(""); }
    $("#CloudTimer").html("Last cloud save " + toHHMMSS(lastCloudSave) + " ago, as <span class='vert'>" + Game.username + "</span>.");
    if (Game.xp[0] < 0) { Game.xp[0] = 0; }
    for (UPC = 0; UPC < 4; UPC++) {
      if (Game.MaxUPC[UPC] == undefined) { Game.MaxUPC[UPC] = 0; }
    }
    if (Game.username == null || Game.username == "" || Game.username == " " || Game.username == "_" || Game.username.length < 3) {
      localStorage.clear();
      Backup = "Default";
      Game.username = Backup;
    }
    else { Game.username = Game.username.replace(/[^a-zA-Z0-9]/g, '_'); }
    if (Backup != "Default" && canSave == 1 && Backup != Game.username) { Game.username = Backup; }
    if (Game.xp[2] == undefined) { Game.xp[2] = 1; }
    var LEVEL = "";
    if (ScoreModeEnabled == 0) {
      LEVEL = "Level " + fix(Game.Level, 4);
      SCORE = "Level " + fix(Ranking / 10, 4);
    } else {
      LEVEL = "Score <i class='fad fa-dice-d20'></i> " + fix(Ranking, 4);
      SCORE = "Score <i class='fad fa-dice-d20'></i>" + fix(Ranking, 4);
    }
    if (Game.Level < 1) {
      Game.Level = 1;
      Game.xp[0] = 0;
    }
    if (ScoreModeEnabled == 0 && Game.xp[0] >= Game.xp[1] && Game.Level < MaxLevel) {
      Game.Level++;
      Game.xp[1] = CalcEXP(Game.Level);
    }
    if (Game.Level > MaxLevel) {
      Game.Level = MaxLevel;
      if (ScoreModeEnabled == 0 && Game.Level > Missions[LastMission][2]) {
        Game.Level = Missions[LastMission][2];
        if (Game.Level > POS[Game.Location][2]) Game.Level = POS[Game.Location][2];
      }
    }
    if (Game.Emp > 50) Game.Emp = 50;
    Game.Shards = Math.round(Game.Shards);
    var ONLINEICON = "";
    if (Game.username != "Default" && location.href.match(/(goldenlys.github.io).*/) && Game.username != "Default" && Game.username != null && LoggedIn == 1 && Email != "none") { ONLINEICON = "<i class='vert fas fa-circle'></i>"; } else { ONLINEICON = "<i class='rouge far fa-circle'></i>"; }

    if (url.match(/mobile/gi)) {
      $("#PlayerID").html("<div class='vert text2'>" + ONLINEICON + "<span style='color:" + Game.Theme[0] + ";'>" + Game.username + "<br><div class='ui horizontal label'>" + LEVEL + "</div></span></div><img class='ui circular middle aligned medium image' src='DATA/avatars/avatar" + Game.Avatar + ".jpg' style='background-color: var(--darkgrey);z-index: 19;'>");
      $("#Equipment-Title").html("Equipment " + SCORE);
      $("#avatar2").html("<img class='' src='DATA/avatars/avatar" + Game.Avatar + ".jpg'>");
      $("#avatar3").html("<img class='' src='DATA/avatars/avatar" + Game.Avatar + ".jpg'>");
    } else {
      $("#Equipment-Title").html("Equipment " + SCORE);
      $("#PlayerID").html("<div class='vert text2'>" + ONLINEICON + "<span style='color:" + Game.Theme[0] + ";'>" + Game.username + "<br><div class='ui horizontal label'>" + LEVEL + "</div></span></div><img class='ui circular middle aligned medium image' src='DATA/avatars/avatar" + Game.Avatar + ".jpg' style='background-color: var(--darkgrey);z-index: 19;'>");
      $("#avatar2").html("<img class='' src='DATA/avatars/avatar" + Game.Avatar + ".jpg'>");
      $("#avatar3").html("<img class='' src='DATA/avatars/avatar" + Game.Avatar + ".jpg'>");
    }

    if ($('#combat').is(":visible") && Game.isInFight == 1) {
      $("#btn-CRW").hide();
      $("#btn-ACT").show();
    }
    if ($('#rewards').is(":visible")) {
      Game.isInFight = 2;
      $("#btn-CRW").show();
      $("#btn-ACT").hide();
    }
    if (Game.isInFight == 1 && CoreLife <= 0) LoseFight(); else if (Game.isInFight == 1 && Game.Ennemy[5] <= 0) WinFight();
    for (var I in Game.inventory) {
      if (I > Game.MaxInv) {
        Game.inventory.splice(I, 1);
      } else {
        if (ScoreModeEnabled == 0) {
          if (Game.inventory[I].level > Game.Level) { Game.inventory.splice(I, 1); }
        }
      }
      for (var IV2 in Game.inventory) {
        if (Game.inventory[I].id == 1 || Game.inventory[I].id == 3) {
          if (Game.inventory[I].life == Game.inventory[IV2].life && Game.inventory[I].power == Game.inventory[IV2].power && IV2 != I && Game.inventory[I].name == Game.inventory[IV2].name && Game.inventory[I].id != 3) {
            Game.inventory.splice(I, 1);
          }
        }
      }
    }
  }
}

function UpdateGame() {
  var counter = 0;
  if (isTabActive == "Login") Game.isInFight = 3;
  for (var M in Missions) { if (Missions[M][3] != 2) counter++; }
  TotalMissions = counter;
  if (Game.Simulation > 50) { Game.Simulation = 50; }
  var divisor = 0;
  MaxLevel = 35;
  MaxScore = (MaxLevel + (Game.Simulation * 5) - 5);
  for (var D = 1; D < 7; D++) {
    if (Game.Defeated[D] == null) { Game.Defeated[D] = 0; }
  }
  Game.WTMult[0] = 0;
  Game.WTMult[1] = 0;
  for (var R = 1; R < 5; R++) {
    if (Game.RLS[R][1] == 1) { Game.WTMult[0] += Game.RLS[R][2]; }
    else { Game.WTMult[0] += 0; }
    if (Game.RLS[R][1] == 2) { Game.WTMult[1] += Game.RLS[R][2]; }
    else { Game.WTMult[1] += 0; }
    if (Game.RLS[R][1] == 3) { MaxScore += (Game.RLS[R][2] / 10); }
  }
  if (Game.isInFight == 1 && Game.class == "none") {
    Game.username = "Default";
    Backup = "Default";
    ResetTheme(1);
    save();
  }
  Game.WTMult[2] = (Game.Simulation * 0.03) - 0.03; //EXPMULT
  Game.WTMult[3] = (Game.Simulation * 0.05) + 0.95; //DIFFICULTYMULT
  Backup = Game.username;
  Game.xp[2] = Game.Upgrades[0] * 0.01 + 1;
  PowerMult = Game.Upgrades[1] * 0.01 + 1;
  LifeMult = Game.Upgrades[2] * 0.01 + 1;
  Game.MaxInv = (Game.Simulation * 2) + 18 + (Game.Upgrades[3] * 1);
  if (Game.MissionStarted[4] == undefined) Game.MissionStarted[4] = 0;
  if (Game.isInFight == 0) { CoreLife = CoreBaseLife; GenEnnemy(); }
  if (loadState == 5 && isTabActive != "Login") {
    if (ScoreModeEnabled == 0) {
      Game.xp[1] = CalcEXP(Game.Level);
      if (Game.xp[0] > Game.xp[1] && Game.Level == POS[Game.Location][2]) { Game.xp[0] = CalcEXP(Game.Level - 1); }
      if (Game.xp[0] < CalcEXP(Game.Level - 1) && Game.Level > 1) { Game.xp[0] = CalcEXP(Game.Level - 1); }
      if (Game.Armors[1][4] > Game.Level) { ErrorArmor(1); }
      if (Game.Armors[2][4] > Game.Level) { ErrorArmor(2); }
      if (Game.Armors[3][4] > Game.Level) { ErrorArmor(3); }
      if (Game.Armors[4][4] > Game.Level) { ErrorArmor(4); }
      if (Game.Weapons.Main[3] > Game.Level) { ErrorArmor(5); }
      if (Game.Weapons.Special[3] > Game.Level) { ErrorArmor(6); }
    } else {
      if (Game.Armors[1][4] > MaxScore) { ErrorArmor(1); }
      if (Game.Armors[2][4] > MaxScore) { ErrorArmor(2); }
      if (Game.Armors[3][4] > MaxScore) { ErrorArmor(3); }
      if (Game.Armors[4][4] > MaxScore) { ErrorArmor(4); }
      if (Game.Weapons.Main[3] > MaxScore) { ErrorArmor(5); }
      if (Game.Weapons.Special[3] > MaxScore) { ErrorArmor(6); }
    }
  }
  if (Game.Level >= 10) { Game.Armors[2][0] = true; }
  else { Game.Armors[2][0] = false; }
  if (Game.Level >= 20) { Game.Armors[3][0] = true; }
  else { Game.Armors[3][0] = false; }
  if (Game.Level >= 30) { Game.Armors[4][0] = true; }
  else { Game.Armors[4][0] = false; }
  CoreBaseLife = 0;
  Ranking = 0;
  Ranking += Game.Weapons.Main[3];
  Ranking += Game.Weapons.Special[3];
  divisor = 2;
  for (core = 1; core < 5; core++) {
    if (Game.Armors[core][0] == true) {
      CoreBaseLife += Game.Armors[core][3];
      Ranking += Game.Armors[core][4];
      divisor++;
      if (Game.Armors[core][5] == undefined) Game.Armors[core][5] = 0;
    }
  }
  if (ScoreModeEnabled == 0 && Game.MissionStarted[0] == false && Game.config[3] == 1 && Game.Level == POS[Game.Location][2] && Game.username != "Default" && loadState > 4 && Game.isInFight == 1) {
    for (M in Missions) {
      if (Game.MissionsCompleted[M] == 0 && Game.MissionsCompleted[Missions[M][9]] == 1 && Missions[M][3] != 2 && Game.Level >= Missions[M][2]) { mission(M); }
    }
  }
  CoreBaseLife = Math.round(CoreBaseLife * (LifeMult + Game.WTMult[1]));
  WeaponsPower = Math.round(Game.Weapons.Main[4] * (PowerMult + Game.WTMult[0]));
  SpecialPower = Math.round((Game.Weapons.Main[4] + Game.Weapons.Special[4]) * (PowerMult + Game.WTMult[0]));
  Ranking = Math.floor((Ranking / divisor) * 10);
  for (var M2 in Missions) { if (Game.MissionsCompleted[M2] == null) Game.MissionsCompleted[M2] = 0; }
  if (Game.MissionStarted[0] == true) { Game.Location = Missions[Game.MissionStarted[1]][8]; }
  if (Game.isInFight == 1 && Game.MissionStarted[0] == true) { CompleteMission(); }
  for (var IV in Game.inventory) {
    if (Game.Level < 10 && Game.inventory[IV].class == 'Uncommon') { RemoveItem(IV); }
    if (Game.Level < 15 && Game.inventory[IV].class == 'Rare') { RemoveItem(IV); }
    if (Game.Level < 20 && Game.inventory[IV].class == 'Epic') { RemoveItem(IV); }
    if (Game.Level < 30 && Game.inventory[IV].class == 'Exotic' || Game.inventory[IV].class == 'Divine') { RemoveItem(IV); }
    if (Game.inventory[IV].id == 0) RemoveItem(IV);
    if (IV >= Game.MaxInv) RemoveItem(IV);
    if (Game.inventory[IV] != undefined) {
      if (Game.AutoRemove[0] == 1 && Game.inventory[IV].class == "Normal") RemoveItem(IV);
      if (Game.AutoRemove[1] == 1 && Game.inventory[IV].class == "Common") RemoveItem(IV);
      if (Game.AutoRemove[2] == 1 && Game.inventory[IV].class == "Uncommon") RemoveItem(IV);
      if (Game.AutoRemove[3] == 1 && Game.inventory[IV].class == "Rare") RemoveItem(IV);
      if (Game.AutoRemove[4] == 1 && Game.inventory[IV].class == "Epic") RemoveItem(IV);
      if (Game.AutoRemove[5] == 1 && Game.inventory[IV].class == "Exotic") RemoveItem(IV);
    }
  }
  if (Game.MissionStarted[0] == false) {
    if (Game.Location == 11 || Game.Location == 17) { Game.Location--; }
  }
  if (loadState < 4) {
    Game.Ennemy[5] = Game.Ennemy[4];
    CoreLife = CoreBaseLife;
  }
  UpdateUI();
  save();
}

function UpdateUI() {
  document.title = "AlphaRPG";
  if (((Game.xp[2] + Game.WTMult[2]) - Math.floor(Game.xp[2] + Game.WTMult[2])) < 1) $("#XPMULTVAL").html("+" + Game.Upgrades[0] + "%"); else $("#XPMULTVAL").html("+" + Game.Upgrades[0] + "%");
  if (((PowerMult + Game.WTMult[0]) - Math.floor(PowerMult + Game.WTMult[0])) < 1) $("#POWERMULTVAL").html("+" + Game.Upgrades[1] + "%"); else $("#POWERMULTVAL").html("+" + Game.Upgrades[1] + "%");
  if (((LifeMult + Game.WTMult[1]) - Math.floor(LifeMult + Game.WTMult[1])) < 1) $("#LIFEMULTVAL").html("+" + Game.Upgrades[2] + "%"); else $("#LIFEMULTVAL").html("+" + Game.Upgrades[2] + "%");
  $("#INVUPGVAL").html(Game.MaxInv);
  $("#ShardsNumber").html("<i class='bleu dna icon'></i>" + fix(Game.Shards, 6) + "</span> Dimensional Fragments");
  if (Game.username == "Default") {
    $("#menu").hide();
    $("#CATEGORIE-1").hide();
    $("#begin").show();
    $(".footer").hide();
    Game.isInFight = 3;
  }
  $("#PlayerXP").progress({ percent: GetEXPPercent() });
  $("#EXPProgress").html(fix(GetEXPPercent(), 7) + "%");
  if (Game.Simulation > 1) {
    WTText = "Dimension <i class='globe icon'></i> " + Game.Simulation + "<br>";
  } else { WTText = ""; }
  $("#SHARDSRW").html(fix(Game.Shards, 6));
  if (ScoreModeEnabled == 0) {
    $("#DimensionID").html(WTText);
    $("#PlayerXP").show();
    $("#capacity").html("<span class='vert bold'>" + fix(Game.xp[0], 6) + "</span>/" + fix(Game.xp[1], 6) + " EXP");
  } else $("#DimensionID").html(WTText);
  if (Game.Level >= MaxLevel) {
    $("#PlayerXP").hide();
    $("#capacity").html("Max Level");
  }
  if (Game.Level >= MaxLevel && Ranking >= (((30 + (Game.Simulation * 5)) * 10) - 5) && LastMission >= TotalMissions) {
    $("#WTBTN").show();
    $("#WTUNLOCK").html("<span class='ShadowReset vert'>Dimensional Rift <i class='globe icon'></i>" + (Game.Simulation + 1) + " is opened.");
  } else {
    $("#WTBTN").hide();
    $("#WTUNLOCK").html("");
  }
  var XPMCOL = GetMultPrice(0) > Game.Shards ? "rouge" : "green";
  var POWMCOL = GetMultPrice(1) > Game.Shards ? "rouge" : "green";
  var LIFEMCOL = GetMultPrice(2) > Game.Shards ? "rouge" : "green";
  var INVCOL = GetMultPrice(3) > Game.Shards ? "rouge" : "green";
  $("#XPMULTPRICE").html("<span class='" + XPMCOL + "'><i class='dna icon'></i>" + GetMultPrice(0) + "</span>");
  $("#POWERMULTPRICE").html("<span class='" + POWMCOL + "'><i class='dna icon'></i>" + GetMultPrice(1) + "</span>");
  $("#LIFEMULTPRICE").html("<span class='" + LIFEMCOL + "'><i class='dna icon'></i>" + GetMultPrice(2) + "</span>");
  $("#INVUPGPRICE").html("<span class='" + INVCOL + "'><i class='dna icon'></i>" + GetMultPrice(3) + "</span>");
  for (var i = 0; i < 4; i++) {
    if (GetMultPrice(i) == 999999999) {
      if (i == 0) { XPMCOL = "rouge"; $("#XPMULTPRICE").html("<span class='" + XPMCOL + "'>Maximum reached</span>"); }
      if (i == 1) { POWMCOL = "rouge"; $("#POWERMULTPRICE").html("<span class='" + POWMCOL + "'>Maximum reached</span>"); }
      if (i == 2) { LIFEMCOL = "rouge"; $("#LIFEMULTPRICE").html("<span class='" + LIFEMCOL + "'>Maximum reached</span>"); }
      if (i == 3) { INVCOL = "rouge"; $("#INVUPGPRICE").html("<span class='" + INVCOL + "'>Maximum reached</span>"); }
    }
  }
  var shards = Game.Level < MaxLevel ? "0" : Math.round(Ranking / 10 / 5 - 6);
  var completedstory = LastMission == TotalMissions ? "<span class='vert'>Yes</span>" : "<span class='rouge'>No</span>";
  $("#WTShards").html("Score Required : <span class='vert'><i class='fad fa-dice-d20'></i>" + (((30 + (Game.Simulation * 5)) * 10) - 5) + "</span><br>Story completed : " + completedstory + "<br>Fragments reward : <span class='vert'>" + shards + "<i class='dna icon'></i></span>");
  $("#CurrWT").html("Current Dimension : <span class='vert'><i class='globe icon'></i>" + Game.Simulation + "</span>");
  for (var D in Game.Defeated) { if (D != 0) { $("#Defeat" + D).html(fix(Game.Defeated[D], 5)); } }
  $("#TOPNEXT").html("PAGE " + (PAGE + 1) + " <i class='large arrow alternate circle right outline icon'></i>");
  $("#TOP10").html("TOP 10");
  $("#TOPPREVIOUS").html("<i class='large arrow alternate circle left outline icon'></i> PAGE " + (PAGE - 1) + "");
  if (MAXVIEW + 1 <= LastId) $("#TOPNEXT").attr('class', 'ui rainbow5 button'); else $("#TOPNEXT").attr('class', 'ui rainbow5 button dis');
  if (PAGE == 1) $("#TOPPREVIOUS").attr('class', 'ui rainbow5 button dis'); else $("#TOPPREVIOUS").attr('class', 'ui rainbow5 button');
  $("#namestat").html("<img class='ui avatar image' src='DATA/avatars/avatar" + Game.Avatar + ".jpg'><span style='color:" + Game.Theme[0] + ";'>" + Game.username + "</span>");
  $("#playtimestat").html(toHHMMSS(Game.PlayTime));
  $("#Killstat").html(Game.Wins);
  $("#Deathstat").html(Game.Loses);
  $("#Levelstat").html("<span class='vert'>" + fix(Game.Level, 4) + "</span>/" + MaxLevel);
  $("#Classstat").html(Game.class);
  $("#Scorestat").html("<span class='vert'><i class='fad fa-dice-d20'></i>" + fix(Ranking, 4) + "</span>/" + (MaxScore * 10));
  $("#Difficultystat").html(fix(Game.WTMult[3], 9));
  $("#Rankstat").html(Leader + "/" + LastId);
  var DEATHS = Game.Loses == 0 ? 1 : Game.Loses;
  $("#Ratiostat").html(fix(Game.Wins / DEATHS, 7));
  $("#Versionstat").html("v" + version);
  $("#fortressstat").html(Game.FP);
  $("#lifestat").html("<i class='rouge fas fa-heart'></i>" + fix(Math.round(CoreBaseLife / (LifeMult + Game.WTMult[1])), 3) + " (+" + fix(CoreBaseLife - Math.round(CoreBaseLife / (LifeMult + Game.WTMult[1])), 3) + ")");
  $("#powerstat").html("<i class='bleu fas fa-sword'></i>" + fix(Math.round(WeaponsPower / (PowerMult + Game.WTMult[0])), 3) + " (+" + fix(WeaponsPower - Math.round(WeaponsPower / (PowerMult + Game.WTMult[0])), 3) + ")");
  $("#core1stat").html("<i class='rouge fas fa-heart revertmargin'></i>" + (Game.Armors[1][3] - Game.ArmorUpgrades[1]) + "(+" + Game.ArmorUpgrades[1] + ")");
  if (Game.Armors[2][0] == true) $("#core2stat").html("<i class='rouge fas fa-heart revertmargin'></i>" + (Game.Armors[2][3] - Game.ArmorUpgrades[2]) + "(+" + Game.ArmorUpgrades[2] + ")");
  if (Game.Armors[3][0] == true) $("#core3stat").html("<i class='rouge fas fa-heart revertmargin'></i>" + (Game.Armors[3][3] - Game.ArmorUpgrades[3]) + "(+" + Game.ArmorUpgrades[3] + ")");
  if (Game.Armors[4][0] == true) $("#core4stat").html("<i class='rouge fas fa-heart revertmargin'></i>" + (Game.Armors[4][3] - Game.ArmorUpgrades[4]) + "(+" + Game.ArmorUpgrades[4] + ")");
  if (((Game.Level - 5) * 10) >= Ranking) $("#LowScore").html("Using low level armor, upgrade your equipment."); else $("#LowScore").html("");
  var CompletedMissions = 0;
  for (var M in Missions) if (Missions[M][3] != 2 && Game.MissionsCompleted[M] == 1) CompletedMissions++;
  if (Game.isInFight != 2 || Game.isInFight != 3) LastMission = CompletedMissions;
  var hori = "horizontal";
  if (url.match(/mobile/gi)) hori = "";
  if (Game.MissionStarted[0] == true) {
    if (Missions[Game.MissionStarted[1]][3] == 1) $("#MDTL").html("<div class='detail'>Mission</div>Defeat <span class='vert'>" + (Missions[Game.MissionStarted[1]][4] - Game.MissionStarted[2]) + "</span> enemies in <span class='vert'>" + POS[Missions[Game.MissionStarted[1]][8]][0] + "</span>.");
    if (Missions[Game.MissionStarted[1]][3] == 2) $("#MDTL").html("<div class='detail'>Fortress</div>Clear <span class='vert'>" + POS[Missions[Game.MissionStarted[1]][8]][0] + "</span> (" + (Missions[Game.MissionStarted[1]][4] - Game.MissionStarted[2]) + " left).");
  } else {
    $("#MDTL").html("<div class='detail'>Exploration</div><span class='vert'>" + POS[Game.Location][0] + "</span>");
  }
  if ($('#combat').is(":visible")) $("#rewards").hide();
  $("#islots").html("<i class='fas fa-sack'></i>" + (Game.inventory.length) + "/" + Game.MaxInv);
  $("#cash").html(fix(Game.Cash, 3));
  $("#mcount").html("<i class='dropdown icon'></i> " + "Missions completed (" + CompletedMissions + "/" + TotalMissions + ")");
  if (Game.Level >= POS[Game.Location][2] && ScoreModeEnabled == 0 && Game.MissionStarted[0] == false) $("#MaxPOSLVL").html("You\'ve reached the maximum level in this area, check the available missions."); else $("#MaxPOSLVL").html("");
  for (var L in POS) $("#defeatloc" + L).html("<div class='ui " + hori + " segments'><div class='ui segment left aligned'>" + POS[L][0] + "</div><div class='ui segment right aligned'>" + fix(Game.DefeatedByLocation[L], 3) + " Defeated</div></div><div class='ui fitted inverted divider'></div>");
  if ($('#inventory').is(":visible")) {
    $("#rewards").hide();
    $("#combat").hide();
  }
  if (Game.isInFight == 1) {
    $("#btn-CRW").hide();
    $("#btn-ACT").show();
    UpdateCombat();
  }
  GenArmors();
  GenWeapons();
  GenInventory();
  ResetTheme(2);
}

function GenInventory() {
  $("#inv1").html("");
  $("#inv2").html("");
  $("#inv3").html("");
  $("#inv4").html("");

  for (var IV in Game.inventory) {
    var TIER = ScoreModeEnabled == 0 ? "Level " : "Score <i class='fad fa-dice-d20'></i>";
    var TIERRANK = ScoreModeEnabled == 0 ? Game.inventory[IV].level : "<i class='fad fa-dice-d20'></i>" + Math.floor(Game.inventory[IV].level * 10);
    var BTN = url.match(/mobile/gi) ? "<div class='ui right floated vertical buttons'><div onclick='EquipItem(" + IV + ", " + Game.inventory[IV].id + ")' class='green ui button'>Equip</div><div onclick='RemoveItem(" + IV + ")' class='red ui button'>Remove</div></div>" : "<div class='ui right floated buttons'><div onclick='EquipItem(" + IV + ", " + Game.inventory[IV].id + ")' class='green ui button'>Equip</div><div onclick='RemoveItem(" + IV + ")' class='red ui button'>Remove</div></div>";
    var BR = url.match(/mobile/gi) ? " " : "<br>";
    var UPS = Game.inventory[IV].ups > 0 ? " " + (Game.inventory[IV].ups) + "<i class='orange fad fa-gem'></i>" : "";
    if (Game.inventory[IV].id == 1) { //SHOW ARMOR IN INVENTORY
      $("#inv1").append("<div class='ui gren segment'>" + BTN + "<div class='invL'>" + TIER + BR + TIERRANK + "</div><span class='" + (Game.inventory[IV].class) + "' id='" + IV + "'> " + (Game.inventory[IV].class) + "</span> " + Game.inventory[IV].name + UPS + "<br><i class='rouge fas fa-heart revertmargin'></i>" + (Game.inventory[IV].life) + "</div>");
    }

    if (Game.inventory[IV].id == 4) { //SHOW WEAPONS IN INVENTORY
      $("#inv4").append("<div class='ui gren segment'>" + BTN + "<div class='invL'>" + TIER + BR + TIERRANK + "</div><span class='" + (Game.inventory[IV].class) + "' id='" + IV + "'> " + (Game.inventory[IV].class) + "</span> " + Game.inventory[IV].name + UPS + "<br><i class='bleu fas fa-sword revertmargin'></i>" + (Game.inventory[IV].power) + "</div>");
    }

    if (Game.inventory[IV].id == 2 || Game.inventory[IV].id == 5) { //SHOW Gem IN INVENTORY 
      var BONUS = Game.inventory[IV].object == 1 ? "<i class='rouge fas fa-heart'></i>" + Game.inventory[IV].life : "<i class='bleu fas fa-sword'></i>" + Game.inventory[IV].power;
      $("#inv2").append("<div class='ui gren segment'>" + BTN + "<span class='" + (Game.inventory[IV].class) + "' id='" + IV + "'> " + (Game.inventory[IV].class) + "</span> " + Game.inventory[IV].name + "<br>" + BONUS + "</div>");
    }

    if (Game.inventory[IV].id == 3) { //SHOW RELIC IN INVENTORY
      if (Game.inventory[IV].object == 0) DESC = "-";
      if (Game.inventory[IV].object == 1) DESC = "Power bonus of " + fix(Game.inventory[IV].bonus, 9);
      if (Game.inventory[IV].object == 2) DESC = "Life bonus of " + fix(Game.inventory[IV].bonus, 9);
      if (Game.inventory[IV].object == 3) DESC = "Max Score +" + fix(Game.inventory[IV].bonus, 3);
      if (Game.inventory[IV].object == 4) DESC = "Minimal drop quality <span class='" + Game.inventory[IV].bonus + "'>" + Game.inventory[IV].bonus + "</span>";
      $("#inv3").append("<div class='ui gren segment'><span class='" + (Game.inventory[IV].class) + "' id='" + IV + "'> " + (Game.inventory[IV].class) + "</span> " + BTN + Game.inventory[IV].name + "<br>" + DESC + "</div>");
    }
  }
}

function EquipItem(id, type) {
  if (type == 1) {
    var CoreButton1 = Game.Armors[1][0] == true ? "<div onClick='NewCore(1, " + id + ");' class='ui rainbow button'>Use as Helmet</div>" : "";
    var CoreButton2 = Game.Armors[2][0] == true ? "<div onClick='NewCore(2, " + id + ");' class='ui rainbow button'>Use as Armor</div>" : "";
    var CoreButton3 = Game.Armors[3][0] == true ? "<div onClick='NewCore(3, " + id + ");' class='ui rainbow button'>Use as Shield</div>" : "";
    var CoreButton4 = Game.Armors[4][0] == true ? "<div onClick='NewCore(4, " + id + ");' class='ui rainbow button'>Use as Boots</div>" : "";
    showmessage("Select an Armor Slot", "<div class='fluid vertical ui buttons'>" + CoreButton1 + CoreButton2 + CoreButton3 + CoreButton4 + "</div>");
  }

  if (type == 4) {
    var WButton1 = "<div onClick='NewWeapon(1, " + id + ");' class='ui rainbow button'>Use as Main weapon</div>";
    var WButton2 = "<div onClick='NewWeapon(2, " + id + ");' class='ui rainbow button'>Use as Special weapon</div>";
    showmessage("Select a Weapon Slot", "<div class='fluid vertical ui buttons'>" + WButton1 + WButton2 + "</div>");
  }

  if (type == 2) {
    var CB1B = Game.Armors[1][0] == true ? "<div onClick='UPCore(1, " + Game.inventory[id].object + ", " + id + ");' class='ui rainbow button'>Upgrade Helmet</div>" : "";
    var CB2B = Game.Armors[2][0] == true ? "<div onClick='UPCore(2, " + Game.inventory[id].object + ", " + id + ");' class='ui rainbow button'>Upgrade Armor</div>" : "";
    var CB3B = Game.Armors[3][0] == true ? "<div onClick='UPCore(3, " + Game.inventory[id].object + ", " + id + ");' class='ui rainbow button'>Upgrade Shield</div>" : "";
    var CB4B = Game.Armors[4][0] == true ? "<div onClick='UPCore(4, " + Game.inventory[id].object + ", " + id + ");' class='ui rainbow button'>Upgrade Boots</div>" : "";
    if (Game.Armors[1][5] >= Game.MaxUPC[0] && Game.Armors[1][0] == true) CB1B = "<div class='ui disabled button'>No Helmet gem slots left.</div>";
    if (Game.Armors[2][5] >= Game.MaxUPC[1] && Game.Armors[2][0] == true) CB2B = "<div class='ui disabled button'>No Armor gem slots left.</div>";
    if (Game.Armors[3][5] >= Game.MaxUPC[2] && Game.Armors[3][0] == true) CB3B = "<div class='ui disabled button'>No Shield gem slots left.</div>";
    if (Game.Armors[4][5] >= Game.MaxUPC[3] && Game.Armors[4][0] == true) CB4B = "<div class='ui disabled button'>No Boots gem slots left.</div>";
    showmessage("Select an Armor Slot", "<div class='fluid vertical ui buttons'>" + CB1B + CB2B + CB3B + CB4B + "</div>");
  }

  if (type == 5) {
    var MainUPBTN = Game.Armors[1][0] == true ? "<div onClick='UPWeapon(1, " + id + ");' class='ui rainbow button'>Upgrade Main Weapon</div>" : "";
    var SpecialUPBTN = Game.Armors[2][0] == true ? "<div onClick='UPWeapon(2, " + id + ");' class='ui rainbow button'>Upgrade Special Weapon</div>" : "";
    if (Game.Weapons.Main[2] >= Game.MaxUPC[4]) MainUPBTN = "<div class='ui disabled button'>No Main Weapon gem slots left.</div>";
    if (Game.Weapons.Special[2] >= Game.MaxUPC[5]) SpecialUPBTN = "<div class='ui disabled button'>No Secondary Weapon gem slots left.</div>";
    showmessage("Select a Weapon", "<div class='fluid vertical ui buttons'>" + MainUPBTN + SpecialUPBTN + "</div>");
  }

  if (type == 3) {
    var RLCB1 = Game.Armors[1][0] == true ? "<div onClick='ConfirmRelic(1, " + id + ");' class='ui rainbow button'>Apply on Helmet</div>" : "";
    var RLCB2 = Game.Armors[2][0] == true ? "<div onClick='ConfirmRelic(2, " + id + ");' class='ui rainbow button'>Apply on Armor</div>" : "";
    var RLCB3 = Game.Armors[3][0] == true ? "<div onClick='ConfirmRelic(3, " + id + ");' class='ui rainbow button'>Apply on Shield</div>" : "";
    var RLCB4 = Game.Armors[4][0] == true ? "<div onClick='ConfirmRelic(4, " + id + ");' class='ui rainbow button'>Apply on Boots</div>" : "";
    showmessage("Select a relic slot", "<div class='fluid vertical ui buttons'>" + RLCB1 + RLCB2 + RLCB3 + RLCB4 + "</div>");
  }
  Game.isInFight = 0;
  UpdateGame();
}

function RemoveItem(id) {
  if (id < Game.MaxInv) {
    Game.inventory[id].id = 0;
    if (id >= Game.inventory.length) Game.inventory.splice(id - 1, 1); else Game.inventory.splice(id, 1);
  } else Game.inventory.splice(id, 1);
  UpdateGame();
}

function SendStats() {
  save();
  if (LoggedIn == 1) writeUserData();
  lastCloudSave = 0;
}

function GetLevelRequired() {
  if (Game.Level >= 1 && Game.Level < 10) value = 10;
  if (Game.Level >= 10 && Game.Level < 20) value = 20;
  if (Game.Level >= 20 && Game.Level < 30) value = 30;
  if (Game.Level >= 30) value = 0;
  return value;
}

function GenWeapons() {
  var TYPE = "";
  for (var T = 1; T < 3; T++) {
    var Names = ["", "Sword", "Dagger"];
    if (T == 1) { TYPE = "Main"; } else { TYPE = "Special"; }
    Game.Weapons[TYPE][0] = Game.Weapons[TYPE][0].replace(/Weapon/gi, Names[T]);
    var Class = 0;
    if (Game.Weapons[TYPE][1] == "Common") Class = "1";
    if (Game.Weapons[TYPE][1] == "Uncommon") Class = "2";
    if (Game.Weapons[TYPE][1] == "Rare") Class = "3";
    if (Game.Weapons[TYPE][1] == "Epic") Class = "4";
    if (Game.Weapons[TYPE][1] == "Exotic") Class = "5";
    if (Game.Weapons[TYPE][1] == "Divine") Class = "6";
    if (Game.Weapons[TYPE][1] == "Error") Class = "E";
    $("#" + TYPE + "Weapon").attr("class", "ui card customcard CoreShadow" + Class);
    var LEVELTEXT = ScoreModeEnabled == 0 ? "Level " + fix(Math.floor(Game.Weapons[TYPE][3]), 4) : "Score <i class='fad fa-dice-d20'></i>" + fix(Math.floor(Game.Weapons[TYPE][3] * 10), 4);
    var UPWSELECTOR = T == 1 ? 4 : 5;
    var WEAPONUPC = Game.Weapons[TYPE][2] == Game.MaxUPC[UPWSELECTOR] ? "" : "green";
    var UPWTEXT = Game.MaxUPC[UPWSELECTOR] > 0 ? "<i class='orange fad fa-gem'></i><span class='" + WEAPONUPC + "'>" + Game.Weapons[TYPE][2] + "</span>/" + Game.MaxUPC[UPWSELECTOR] + " Gems incrusted" : "";
    $("#" + TYPE + "WeaponGems").html(UPWTEXT);
    $("#" + TYPE + "WeaponSprite").html("<img class='ui middle aligned tiny circular image' style='height: 100px; width: auto;' src='DATA/Weapons/" + TYPE + "-" + Class + ".png'></img>");
    $("#" + TYPE + "WeaponLevel").html(LEVELTEXT);
    $("#" + TYPE + "WeaponText").html(Game.Weapons[TYPE][4]);
    $("#" + TYPE + "WeaponTitle").html("<span class='" + Game.Weapons[TYPE][1] + "'>" + Game.Weapons[TYPE][1] + "</span> " + Game.Weapons[TYPE][0]);
    $("#" + TYPE + "nWeaponText").html(Game.Weapons[TYPE][4]);
  }
}

function GenArmors() {
  var Class = 0;
  var RLSTXT = "";
  var Names = ["", "Helmet", "Armor", "Shield", "Boots"];
  for (var UPC = 1; UPC < 5; UPC++) {
    var core = "core" + UPC;
    Game.Armors[UPC][1] = Game.Armors[UPC][1].replace(/Armor/gi, Names[UPC]);
    if (Game.Armors[UPC][2] == "Common") Class = "1";
    if (Game.Armors[UPC][2] == "Uncommon") Class = "2";
    if (Game.Armors[UPC][2] == "Rare") Class = "3";
    if (Game.Armors[UPC][2] == "Epic") Class = "4";
    if (Game.Armors[UPC][2] == "Exotic") Class = "5";
    if (Game.Armors[UPC][2] == "Divine") Class = "6";
    if (Game.Armors[UPC][2] == "Error") Class = "E";

    $("#" + core).attr("class", "ui card customcard CoreShadow" + Class);
    $("#" + core + "-icon").attr("class", "classBar" + Class);
    $("#" + core + "-title").attr("class", "author text");

    if (Game.RLS[UPC][1] == 1) RLSTXT = "Power bonus of " + fix(Game.RLS[UPC][2], 9);
    if (Game.RLS[UPC][1] == 2) RLSTXT = "Life bonus of " + fix(Game.RLS[UPC][2], 9);
    if (Game.RLS[UPC][1] == 3) RLSTXT = "Max Score +" + fix(Game.RLS[UPC][2], 3);
    if (Game.RLS[UPC][1] == 4) RLSTXT = "Minimal drop quality <span class='" + Game.RLS[UPC][2] + "'>" + Game.RLS[UPC][2] + "</span>";
    if (Game.RLS[UPC][1] != 0) RLSTXT = "<i class='jaune fas fa-stars'></i>" + RLSTXT;

    var LEVELICON = ScoreModeEnabled == 0 ? "Level" : "Score";
    var LEVELTEXT = ScoreModeEnabled == 0 ? fix(Math.floor(Game.Armors[UPC][4]), 4) : "<i class='fad fa-dice-d20'></i>" + fix(Math.floor(Game.Armors[UPC][4] * 10), 4);
    $("#core" + UPC + "-level").html(LEVELICON + " " + LEVELTEXT);
    var COREUPC = Game.Armors[UPC][5] == Game.MaxUPC[UPC - 1] ? "" : "green";
    var UPCTEXT = Game.MaxUPC[UPC - 1] > 0 ? "<i class='orange fad fa-gem'></i><span class='" + COREUPC + "'>" + Game.Armors[UPC][5] + "</span>/" + Game.MaxUPC[UPC - 1] + " Gems incrusted" : "";
    $("#" + core + "-upc").html("");
    $("#" + core + "-life").html(fix(Game.Armors[UPC][3], 3));
    $("#" + core + "-rarity").html(RLSTXT);
    $("#" + core + "-keys").html(UPCTEXT);
    $("#" + core + "-image").html("<img class='ui middle aligned tiny circular image' style='height: 100px; width: auto;' src='DATA/Armors/" + core + "-" + Class + ".png'></img>");

    $("#" + core + "-title").html("<span class='" + Game.Armors[UPC][2] + "'>" + Game.Armors[UPC][2] + "</span> " + Game.Armors[UPC][1]);
    if (Game.Armors[UPC][0] == false) {
      $("#" + core).hide();
      $("#" + core).attr("class", "");
    } else {
      $("#" + core).show();
      $("#" + core).attr("class", "ui card customcard CoreShadow" + Class);
    }
  }
  if (Game.Level < 30) {
    for (var L = 1; L < 5; L++) {
      if (Game.Armors[L][0] == false) {
        $("#core5").attr("class", "author text locked");
        $("#core5").html("Next armor unlocked at Lv. " + GetLevelRequired());
      }
    }
  } else $("#core5").html("");
}

//FIGHT ACTIONS

function Protect() {
  if (Game.isInFight != 1) Game.isInFight = 1;
  HealText = "";
  if (CoreLife < CoreBaseLife) {
    var luck = random(1, 100);
    if (luck <= 15) { MINMULT = 65; MAXMULT = 85; }
    else { MINMULT = 40; MAXMULT = 65; }
    if (luck >= 85) { MINMULT = 0; MAXMULT = 0; }
    var rRandPlayerHeal = random((WeaponsPower * MINMULT), (WeaponsPower * MAXMULT)) / 100;
    CoreLife = Math.round(CoreLife + rRandPlayerHeal);
    HealText = "+" + fix(rRandPlayerHeal, 4) + "<i class='rouge fas fa-heart'></i>";
    if (rRandPlayerHeal < 1) HealText = "MISSED";
  }
  var luck2 = random(1, 100);
  if (luck2 >= 75) { MINMULT2 = 0; MAXMULT2 = 10; }
  else { MINMULT2 = 35; MAXMULT2 = 50; }
  var rEnnemyPower = random((Game.Ennemy[3] * MINMULT2), (Game.Ennemy[3] * MAXMULT2)) / 100;
  if (rEnnemyPower < 1) DamagesText = "MISSED";
  if (CoreLife >= CoreBaseLife * 0.99) rEnnemyPower = 0;
  CoreLife -= rEnnemyPower;
  if (CoreLife > CoreBaseLife) CoreLife = CoreBaseLife;
  $("#EnnemyDamage").html("");
  $("#PlayerDamage").html(HealText);
  if (Game.isInFight == 1 && CoreLife <= 0) LoseFight(); else if (Game.isInFight == 1 && Game.Ennemy[5] <= 0) WinFight();
  UpdateGame();
}

function Attack() {
  if (Game.isInFight != 1) Game.isInFight = 1;
  var luck = random(1, 100);
  var rPlayerPower = random((WeaponsPower * 85), WeaponsPower * 100) / 100;
  if (luck <= random(6, 10)) rPlayerPower = WeaponsPower * 1.15;
  var EDamage = "-" + fix(Math.round(rPlayerPower), 3) + "<i class='rouge fas fa-heart'></i>";
  Game.Ennemy[5] = Math.floor(Game.Ennemy[5] - rPlayerPower);
  var rEnnemyPower = random((Game.Ennemy[3] * 65), Game.Ennemy[3] * 100) / 100;
  if (luck >= 90) rEnnemyPower = 0;
  var DAMAGES = rEnnemyPower > 0 ? "-" + fix(Math.round(rEnnemyPower), 3) + "<i class='rouge fas fa-heart'></i>" : "MISSED";
  CoreLife -= rEnnemyPower;
  $("#EnnemyDamage").html(EDamage);
  $("#PlayerDamage").html(DAMAGES);
  if (Game.isInFight == 1 && CoreLife <= 0) LoseFight(); else if (Game.isInFight == 1 && Game.Ennemy[5] <= 0) WinFight();
  UpdateGame();
}

function LaunchEMP() {
  if (Game.isInFight != 1) Game.isInFight = 1;
  if (Game.Emp > 0) {
    Game.Emp--;
    var luck = random(0, 100);
    var POWERRANGES = [0.75, 1];
    if (luck <= 10) POWERRANGES = [1, 1.5];
    var rPlayerPower = random(SpecialPower * POWERRANGES[0], SpecialPower * POWERRANGES[1]);
    Game.Ennemy[5] = Math.floor(Game.Ennemy[5] - rPlayerPower);
    var rEnnemyPower = random(0, Game.Ennemy[3]);
    CoreLife -= rEnnemyPower;
    $("#EnnemyDamage").html("-" + fix(Math.round(rPlayerPower), 6) + "<i class='rouge fas fa-heart'></i>");
    $("#PlayerDamage").html("-" + fix(Math.round(rEnnemyPower), 6) + "<i class='rouge fas fa-heart'></i>");
  }
  if (Game.isInFight == 1 && CoreLife <= 0) LoseFight(); else if (Game.isInFight == 1 && Game.Ennemy[5] <= 0) WinFight();
  UpdateGame();
}

function RunAway() {
  if (Game.LastEscape == 0) {
    Game.LastEscape = 45;
    if (Game.Level <= 25) Game.LastEscape = 35;
    if (Game.Level <= 20) Game.LastEscape = 30;
    if (Game.Level <= 15) Game.LastEscape = 25;
    if (Game.Level <= 10) Game.LastEscape = 20;
    if (Game.Level <= 5) Game.LastEscape = 15;
    CoreLife = CoreBaseLife;
    Game.isInFight = 0;
    if (Game.isInFight == 1 && CoreLife <= 0) LoseFight(); else if (Game.isInFight == 1 && Game.Ennemy[5] <= 0) WinFight();
    UpdateGame();
  }
}

//ENNEMY GENERATION FUNCTION

function GenEnnemy() {
  var EnnemyLevel = 1;
  var EnnemyLifeMult = 1;
  var EnnemyPowerMult = 1;
  var BasePower = WeaponsPower / (PowerMult + Game.WTMult[0]);
  var LifeMult = [1.5, 2, 2.5, 3.5, 5, 6, 6.5];
  var EPowerMult = [0.95, 1, 1, 1, 1, 1, 1];
  var MaxPowerMult = [1.1, 1.25, 1.35, 1.5, 1.75, 2, 2.5];
  if (ScoreModeEnabled == 0) {
    if (Game.Level < 30) {
      LifeMult = [1.5, 2, 2.5, 3.5, 5, 6, 6.5];
      EPowerMult = [0.75, 0.85, 1, 1, 1, 1, 1];
      MaxPowerMult = [0.85, 1, 1, 1.10, 1.15, 1.15, 1.15];
    }
    if (Missions[Game.MissionStarted[1]][3] == 2) {
      LifeMult = [0, 0, 6, 7, 8, 15, random(15, 20)];
      EPowerMult = [1, 1, 1, 1, 1, 1, 1];
      MaxPowerMult = [1, 1, 1.1, 1.15, 1.2, 1.25, 1.5];
    }
  } else {
    LifeMult = [2, 2.75, 3.5, 4, 6, 10, 15];
    EPowerMult = [1, 1, 1, 1, 1, 1, 1];
    MaxPowerMult = [1, 1, 1.10, 1.15, 1.20, 1.25, 1.5];
  }

  TIER = Ranking;
  EChance = random(0, 700);
  if (ScoreModeEnabled == 1) EChance = random(300, 700);
  if (Missions[Game.MissionStarted[1]][3] == 2 && EChance < 600) EChance = 600;
  if (Game.isInFight == 0) {
    CoreLife = CoreBaseLife;
    $("#EnnemyDesc").html("<br><br>");

    //CLASS NORMAL
    if (EChance >= 0 && EChance < 300) {
      Game.Ennemy[1] = 1;
      EnnemyLifeMult = LifeMult[0];
      EnnemyPowerMult = EPowerMult[0];
      EnnemyPowerMultMax = MaxPowerMult[0];
      if (Ranking > 0) EnnemyLevel = random((Ranking * 0.85), Ranking);
      if (ScoreModeEnabled == 1) EnnemyLevel = random(TIER - 5, TIER);
    }

    //CLASS ADVANCED
    if (EChance >= 300 && EChance < 450) {
      Game.Ennemy[1] = 2;
      EnnemyLifeMult = LifeMult[1];
      EnnemyPowerMult = EPowerMult[1];
      EnnemyPowerMultMax = MaxPowerMult[1];
      if (Ranking > 0) EnnemyLevel = Ranking;
      if (Ranking > 1) EnnemyLevel = random((Ranking * 0.95), Ranking);
      if (ScoreModeEnabled == 1) EnnemyLevel = random(TIER - 2, TIER + 5);
    }

    //CLASS SUPERIOR
    if (EChance >= 450 && EChance < 600) {
      Game.Ennemy[1] = 3;
      EnnemyLifeMult = LifeMult[2];
      EnnemyPowerMult = EPowerMult[2];
      EnnemyPowerMultMax = MaxPowerMult[2];
      if (Ranking > 0) EnnemyLevel = Ranking;
      if (Ranking > 1) EnnemyLevel = random(Ranking, Ranking + 1);
      if (ScoreModeEnabled == 1) EnnemyLevel = random(TIER - 1, TIER + 10);
    }

    //CLASS VETERAN
    if (EChance >= 600 && EChance < 650) {
      Game.Ennemy[1] = 4;
      EnnemyLifeMult = LifeMult[3];
      EnnemyPowerMult = EPowerMult[3];
      EnnemyPowerMultMax = MaxPowerMult[3];
      if (Ranking > 0) EnnemyLevel = Ranking;
      if (Ranking > 1) EnnemyLevel = random(Ranking + 1, Ranking + 2);
      if (ScoreModeEnabled == 1) EnnemyLevel = random(TIER + 5, TIER + 15);
      if (Game.Level < 10) EnnemyPowerMult = EPowerMult[2];
    }

    //CLASS ELITE
    if (EChance >= 650) {
      Game.Ennemy[1] = 5;
      EnnemyLifeMult = LifeMult[4];
      EnnemyPowerMult = EPowerMult[4];
      EnnemyPowerMultMax = MaxPowerMult[4];
      if (Ranking > 0) EnnemyLevel = Ranking;
      if (Ranking > 1) EnnemyLevel = random(Ranking + 2, Ranking + 4);
      if (ScoreModeEnabled == 1) EnnemyLevel = random(TIER + 15, TIER + 30);
      if (Game.Level < 10) EnnemyPowerMult = EPowerMult[2];
    }

    if (Game.MissionStarted[2] == Missions[Game.MissionStarted[1]][4] - 1) EChance = 700;

    //CLASS BOSS OR 1:4 GOD
    if (EChance >= 685 && EChance <= 700 && Game.MissionStarted[0] == true) {
      if (Missions[Game.MissionStarted[1]][3] == 2 || Game.MissionStarted[2] > Missions[Game.MissionStarted[1]][4] - 2) {
        Game.Ennemy[1] = 6;
        EnnemyLifeMult = LifeMult[5];
        EnnemyPowerMult = EPowerMult[5];
        EnnemyPowerMultMax = MaxPowerMult[5];
        if (Ranking > 0) EnnemyLevel = Ranking + 1;
        if (Ranking > 1) EnnemyLevel = random(Ranking + 4, Ranking + 6);
        if (Game.Level < 10) EnnemyPowerMult = EPowerMult[2];
        if (ScoreModeEnabled == 1) {
          EnnemyLevel = random(TIER + 20, TIER + 40);
          randomluck = random(1, 5);
          if (randomluck >= 4) {
            Game.Ennemy[1] = 7;
            EnnemyLifeMult = LifeMult[6];
            EnnemyPowerMult = EPowerMult[6];
            EnnemyPowerMultMax = MaxPowerMult[6];
          }
        }
      }
    }
    if (EnnemyLevel < 1) EnnemyLevel = 1;
    if (ScoreModeEnabled == 1) {
      EnnemyLevel = EnnemyLevel / 10;
      if (EnnemyLevel > Game.Level + 20) EnnemyLevel = Game.Level + 20;
    } else {
      EnnemyLevel = EnnemyLevel / 10;
      if (EnnemyLevel < POS[Game.Location][1]) EnnemyLevel = POS[Game.Location][1];
      if (EnnemyLevel > POS[Game.Location][2]) EnnemyLevel = POS[Game.Location][2];
    }
    Game.Ennemy[2] = EnnemyLevel;
    Game.isInFight = 1;
    Game.Ennemy[3] = 0;
    Game.Ennemy[4] = 0;
    if (Game.Armors[1][0] == 1) Game.Ennemy[4] += Math.floor(random((EnnemyLevel * 10) * (EnnemyLifeMult * 0.5) + 100, (EnnemyLevel * 10) * (EnnemyLifeMult * 1) + 100));
    if (Game.Armors[2][0] == 1 && EnnemyLevel > 9) Game.Ennemy[4] += Math.floor(random((EnnemyLevel * 10) * (EnnemyLifeMult * 0.5) + 100, (EnnemyLevel * 10) * (EnnemyLifeMult * 1) + 100));
    if (Game.Armors[3][0] == 1 && EnnemyLevel > 19) Game.Ennemy[4] += Math.floor(random((EnnemyLevel * 10) * (EnnemyLifeMult * 0.5) + 100, (EnnemyLevel * 10) * (EnnemyLifeMult * 1) + 100));
    if (Game.Armors[4][0] == 1 && EnnemyLevel > 29) Game.Ennemy[4] += Math.floor(random((EnnemyLevel * 10) * (EnnemyLifeMult * 0.5) + 100, (EnnemyLevel * 10) * (EnnemyLifeMult * 1) + 100));
    Game.Ennemy[3] = random(BasePower * EnnemyPowerMult, BasePower * EnnemyPowerMultMax);
    Game.Ennemy[4] *= Game.WTMult[3];
    Game.Ennemy[5] = Game.Ennemy[4];
    if (Game.Ennemy[1] >= 6) Game.Ennemy[0] = "boss"; else Game.Ennemy[0] = Math.floor(Math.random() * Ennemies[Game.Location].length);
    if (Ennemies[Game.Location][Game.Ennemy[0]] == undefined) Game.Ennemy[0] = 0;
    $("#EnnemyDamage").html("");
    $("#PlayerDamage").html("");
    UpdateGame();
  }
}
//WIN OR LOSE FIGHT
function WinFight() {
  if (Game.MissionStarted[4] == 0 && Game.isInFight == 1) {
    var CORELOOT = 50;
    var RELICLOOT = 15;
    var KEYLOOT = 45;
    var EMP = "";
    var LEVELUP = "";
    var descos = "";
    var THEREISLOOT = 0;
    $("#rewards-loot").html("");
    if (Game.MissionStarted[0] == false) {
      expGain = (Game.Ennemy[1] * Game.Ennemy[2]) * 10 + (Game.Level * 2.5) * Game.xp[2];
      expGain = random(expGain * 0.85, expGain);
    } else {
      expGain = Game.Ennemy[2] + Game.Level * 15 * Game.xp[2];
      if (Missions[Game.MissionStarted[1]][3] == 2) { expGain = random(expGain * 0.9, expGain * 1.2); }
      else expGain = random(expGain * 0.9, expGain);
    }
    if (Game.MissionStarted[0] == true && Game.Level >= POS[Missions[Game.MissionStarted[1]][8]][2]) { expGain = 0; }
    Game.Wins++;
    Game.Defeated[Game.Ennemy[1]]++;
    Game.DefeatedByLocation[Game.Location]++;
    if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] == 1) {
      Game.MissionStarted[2]++;
      CORELOOT = 0; RELICLOOT = 10; KEYLOOT = 10;
    } else if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] == 2) {
      Game.MissionStarted[2]++;
      CORELOOT = 40; RELICLOOT = 20; KEYLOOT = 30;
    }
    Game.xp[0] += Math.round(expGain);
    if (Game.Level < MaxLevel) {
      Game.xp[0] += Math.round(expGain);
      if (Game.xp[0] >= Game.xp[1]) {
        Game.Level++;
        LEVELUP = "<br><font class='bleu'>LEVEL UP ! (<span class='blanc'>" + Game.Level + "</span>)</font><br>";
      }
      UpdateGame();
    }
    var REWARDTEXT = Game.MissionStarted[0] == true ? "" : "Nothing was dropped.";
    //EMP LOOT CHANCE
    var ELOOTCHANCE = random(1, 100);
    EMPCount = random(1, 3);
    if (ELOOTCHANCE <= 25 && Game.Emp < 50) { Game.Emp += EMPCount; EMP = "<br>+<span class='orange'>" + EMPCount + "</span><i class='orange bolt icon'></i>Special Attack"; }

    if (Game.Ennemy[1] >= 6 && Game.MissionStarted[0] == false) CORELOOT = 1;
    //CORE LOOT CHANCE
    var LOOTCHANCE1 = random(1, 100);
    if (LOOTCHANCE1 > 0 && LOOTCHANCE1 <= CORELOOT && Game.isInFight != 2) {
      THEREISLOOT++;
      if (ScoreModeEnabled == 0) {
        if (Game.Level >= Ranking) {
          if (Game.Ennemy[1] == 1) newItem(0, random(Game.Level - 5, Game.Level + 1), "Normal");
          if (Game.Ennemy[1] == 2) newItem(0, random(Game.Level - 4, Game.Level + 2), "Common");
          if (Game.Ennemy[1] == 3) newItem(0, random(Game.Level - 3, Game.Level + 3), "Uncommon");
          if (Game.Ennemy[1] == 4) newItem(0, random(Game.Level - 2, Game.Level + 4), "Rare");
          if (Game.Ennemy[1] == 5) newItem(0, random(Game.Level - 1, Game.Level + 5), "Epic");
          if (Game.Ennemy[1] == 6) newItem(0, Game.Level, "Exotic");
          if (Game.Ennemy[1] == 7) newItem(0, Game.Level, "Divine");
        }
        else newItem(0, random(Ranking, Ranking + 2), "Normal");
      } else {
        if (Missions[Game.MissionStarted[1]][3] == 2) {
          if (Game.Ennemy[1] >= 1) {
            if (Game.Ennemy[1] == 7) newItem(0, random((Ranking - 10) + Game.Ennemy[1], (Ranking + 5) + Game.Ennemy[1]), "Divine");
            else newItem(0, random((Ranking - 10) + Game.Ennemy[1], (Ranking + 5) + Game.Ennemy[1]), "Exotic");
          }
        } else {
          if (Game.Ennemy[1] == 1 || Game.Ennemy[1] == 2 || Game.Ennemy[1] == 3 || Game.Ennemy[1] == 4) newItem(0, random((Ranking - 10) + Game.Ennemy[1], (Ranking + 5) + Game.Ennemy[1]), "Rare");
          if (Game.Ennemy[1] == 5) newItem(0, random((Ranking - 10) + Game.Ennemy[1], (Ranking + 5) + Game.Ennemy[1]), "Epic");
          if (Game.Ennemy[1] == 6) newItem(0, random((Ranking - 10) + Game.Ennemy[1], (Ranking + 5) + Game.Ennemy[1]), "Exotic");
          if (Game.Ennemy[1] == 7) newItem(0, random((Ranking - 10) + Game.Ennemy[1], (Ranking + 5) + Game.Ennemy[1]), "Divine");
        }
      }
      var IF2 = (Game.inventory.length - 1) < Game.MaxInv ? (Game.inventory.length - 1) : Game.MaxInv;
      var TIER = ScoreModeEnabled == 0 ? "Level" : "Score";
      var TIERRANK = ScoreModeEnabled == 0 ? Game.inventory[IF2].level : "<i class='fad fa-dice-d20'></i>" + Math.floor(Game.inventory[IF2].level * 10);

      var UPS = Game.inventory[IF2].ups > 0 ? "" + Game.inventory[IF2].ups + "<i class='orange fad fa-gem revertmargin'></i>" : "";
      var LOOTCONTENT = Game.inventory[IF2].id == 4 ? "<i class='bleu fas fa-sword revertmargin'></i>" + fix(Game.inventory[IF2].power, 5) : "<i class='rouge fas fa-heart revertmargin'></i>" + fix(Game.inventory[IF2].life, 5);
      if (IF2 < Game.MaxInv) $("#rewards-loot").append("<div class='ui comments'><div class='comment CoreClass" + Game.inventory[IF2].type + "'><div class='classBar" + Game.inventory[IF2].type + "'></div><div class='statistic GS'><div class='value'>" + TIER + "</div><div class='label'> " + TIERRANK + "</div></div>" + Game.inventory[IF2].name + "<span class='" + Game.inventory[IF2].class + "'> " + UPS + "</span><br><span class='" + Game.inventory[IF2].class + "'> " + Game.inventory[IF2].class + " </span><br>" + LOOTCONTENT + "</div></div>");
    }
    //RELIC LOOT CHANCE
    var LOOTCHANCE2 = random(0, 100);
    if (LOOTCHANCE2 > 0 && LOOTCHANCE2 <= RELICLOOT && Game.isInFight != 2) {
      THEREISLOOT++;
      if (ScoreModeEnabled == 0) {
        if (Game.Level > Ranking) {
          if (Game.Ennemy[1] == 1) newItem("Relic", null, "Normal");
          if (Game.Ennemy[1] == 2) newItem("Relic", null, "Common");
          if (Game.Ennemy[1] == 3) newItem("Relic", null, "Uncommon");
          if (Game.Ennemy[1] == 4) newItem("Relic", null, "Rare");
          if (Game.Ennemy[1] == 5) newItem("Relic", null, "Epic");
          if (Game.Ennemy[1] == 6) newItem("Relic", null, "Exotic");
          if (Game.Ennemy[1] == 7) newItem("Relic", null, "Divine");
        } else newItem("Relic", null, "Normal");
      } else {
        if (Missions[Game.MissionStarted[1]][3] == 2) {
          if (Game.Ennemy[1] >= 1) {
            if (Game.Ennemy[1] == 7) newItem("Relic", null, "Divine");
            else newItem("Relic", null, "Exotic");
          }
        } else {
          if (Game.Ennemy[1] == 1 || Game.Ennemy[1] == 2 || Game.Ennemy[1] == 3 || Game.Ennemy[1] == 4) { newItem("Relic", null, "Rare"); }
          if (Game.Ennemy[1] == 5) newItem("Relic", null, "Epic");
          if (Game.Ennemy[1] == 6) newItem("Relic", null, "Exotic");
          if (Game.Ennemy[1] == 7) newItem("Relic", null, "Divine");
        }
      }
      var IF = (Game.inventory.length - 1) < Game.MaxInv ? (Game.inventory.length - 1) : Game.MaxInv;
      if (Game.inventory[IF].object == 1) descos = "Power bonus of " + fix(Game.inventory[IF].bonus, 9);
      if (Game.inventory[IF].object == 2) descos = "Life bonus of " + fix(Game.inventory[IF].bonus, 9);
      if (Game.inventory[IF].object == 3) descos = "Max Score +" + fix(Game.inventory[IF].bonus, 3);
      if (Game.inventory[IF].object == 4) descos = "Minimal drop quality <span class='" + Game.inventory[IF].bonus + "'>" + Game.inventory[IF].bonus + "</span>";
      if (IF < Game.MaxInv) $("#rewards-loot").append("<div class='ui comments'><div class='comment CoreClass" + Game.inventory[IF].type + "'><div class='classBar" + Game.inventory[IF].type + "'></div>" + Game.inventory[IF].name + "<br><span class='" + Game.inventory[IF].class + "'>" + Game.inventory[IF].class + "</span><br>" + descos + "</div></div>");
    }
    //KEY LOOT CHANCE
    var LOOTCHANCE3 = random(0, 100);
    if (LOOTCHANCE3 > 0 && LOOTCHANCE3 <= KEYLOOT && Game.Level >= 10 && Game.isInFight != 2) {
      THEREISLOOT++;
      if (ScoreModeEnabled == 0) {
        if (Game.Ennemy[1] == 1) newItem("Gem", null, "Normal");
        if (Game.Ennemy[1] == 2) newItem("Gem", null, "Common");
        if (Game.Ennemy[1] == 3) newItem("Gem", null, "Uncommon");
        if (Game.Ennemy[1] == 4) newItem("Gem", null, "Rare");
        if (Game.Ennemy[1] == 5) newItem("Gem", null, "Epic");
        if (Game.Ennemy[1] == 6) newItem("Gem", null, "Exotic");
        if (Game.Ennemy[1] == 7) newItem("Gem", null, "Divine");
      } else {
        if (Missions[Game.MissionStarted[1]][3] == 2) {
          if (Game.Ennemy[1] >= 1) {
            if (Game.Ennemy[1] == 7) newItem("Gem", null, "Divine");
            else newItem("Gem", null, "Exotic");
          }
        } else {
          if (Game.Ennemy[1] == 1 || Game.Ennemy[1] == 2 || Game.Ennemy[1] == 3) newItem("Gem", null, "Uncommon");
          if (Game.Ennemy[1] == 4) newItem("Gem", null, "Rare");
          if (Game.Ennemy[1] == 5) newItem("Gem", null, "Epic");
          if (Game.Ennemy[1] == 6) newItem("Gem", null, "Exotic");
          if (Game.Ennemy[1] == 7) newItem("Gem", null, "Divine");
        }
      }
      var IF3 = (Game.inventory.length - 1) < Game.MaxInv ? (Game.inventory.length - 1) : Game.MaxInv;
      if (Game.Armors[1][5] >= Game.MaxUPC[0] && Game.Armors[1][0] == true) CoreButton1B = "<div class='ui disabled button'>No Helmet gem slots left.</div>";
      if (Game.Armors[2][5] >= Game.MaxUPC[1] && Game.Armors[2][0] == true) CoreButton2B = "<div class='ui disabled button'>No Armor gem slots left.</div>";
      if (Game.Armors[3][5] >= Game.MaxUPC[2] && Game.Armors[3][0] == true) CoreButton3B = "<div class='ui disabled button'>No Shield gem slots left.</div>";
      if (Game.Armors[4][5] >= Game.MaxUPC[3] && Game.Armors[4][0] == true) CoreButton4B = "<div class='ui disabled button'>No Boots gem slots left.</div>";
      if (Game.inventory[IF3].object > 0 && Game.inventory[IF3].object < 3) {
        if (Game.inventory[IF3].object == 1) descitem = "+<i class='rouge fas fa-heart nomargin'></i>" + fix(Game.inventory[IF3].life, 5) + "<br>";
        if (Game.inventory[IF3].object == 2) descitem = "+<i class='bleu fas fa-sword nomargin'></i>" + fix(Game.inventory[IF3].power, 5) + "<br>";
        if (IF3 < Game.MaxInv) { $("#rewards-loot").append("<div class='ui comments'><div class='comment CoreClass" + Game.inventory[IF3].type + "'><div class='classBar" + Game.inventory[IF3].type + "'></div>" + Game.inventory[IF3].name + "<br><span class='" + Game.inventory[IF3].class + "'>" + Game.inventory[IF3].class + "</span><br>" + descitem + "</div></div>"); }
      }
    }
    var INVENTORYFULL = (Game.inventory.length - 1) < Game.MaxInv ? "" : "Inventory full, you can\'t recover any new item.";
    $("#rewards-loot").append(INVENTORYFULL);
    if (THEREISLOOT == 0) $("#rewards-loot").html(REWARDTEXT + "<br>" + INVENTORYFULL);
    Game.isInFight = 2;
    var ToAddCash = Math.floor(random(1 * (Game.Ennemy[2] - 5), Game.Ennemy[1] * Game.Ennemy[2]));
    if (ToAddCash < 1) ToAddCash = 1;
    Game.Cash += ToAddCash;

    if (Game.Ennemy[1] == 1) { Class = "Ennemy1"; ThreatLevel = "NORMAL"; }
    if (Game.Ennemy[1] == 2) { Class = "Ennemy2"; ThreatLevel = "ADVANCED"; }
    if (Game.Ennemy[1] == 3) { Class = "Ennemy3"; ThreatLevel = "SUPERIOR"; }
    if (Game.Ennemy[1] == 4) { Class = "Ennemy4"; ThreatLevel = "VETERAN"; }
    if (Game.Ennemy[1] == 5) { Class = "Ennemy5"; ThreatLevel = "ELITE"; }
    if (Game.Ennemy[1] == 6) { Class = "Ennemy6"; ThreatLevel = "BOSS"; }
    if (Game.Ennemy[1] == 7) { Class = "Ennemy7"; ThreatLevel = "GOD"; }
    $("#EnnemyDesc").html("<br><br>");
    var btncntnt = url.match(/mobile/gi) ? "<i class='times icon'></i>Close" : "<i class='times icon'></i>Close";
    $("#btn-CRW").html("<div onclick='hideRewards();' class='fluid ui closing button'>" + btncntnt + "</div>");
    $("#btn-CRW").show();
    $("#btn-ACT").hide();
    $("#rewards-title").html("<span class='vert'> " + Ennemies[Game.Location][Game.Ennemy[0]] + " defeated !</span>");
    $("#rewards-desc").html("<br>You have defeated " + fix(Game.Defeated[Game.Ennemy[1]], 3) + " <div class='ui small " + Class + " basic label'><span class='" + Class + "'>" + ThreatLevel + "</span></div><br> " + LEVELUP + "+<i class='green dollar icon'></i>" + ToAddCash);
    if (ScoreModeEnabled == 0) {
      $("#rewards-text").html("+<span class='vert bold'>" + fix(Math.floor(expGain), 5) + "</span> EXP " + EMP);
      if (Game.Level >= POS[Game.Location][2]) $("#rewards-text").html("<span class='rouge'>No more EXP in this area, start the next mission.</span>" + EMP);
      if (Game.MissionStarted[0] == true && Game.Level >= POS[Missions[Game.MissionStarted[1]][8]][2]) $("#rewards-text").html(EMP);
    }
    else { $("#rewards-text").html(EMP); }
    $("#rewards").show();
    $("#combat").hide();
    if (Game.config[2] == 1) { hideRewards(); }
  }
}

function LoseFight() {
  Game.isInFight = 2;
  Game.Loses++;
  $("#EnnemyDesc").html("<br><br>");
  if (Game.Ennemy[1] == 1) ThreatLevel = "NORMAL";
  if (Game.Ennemy[1] == 2) ThreatLevel = "ADVANCED";
  if (Game.Ennemy[1] == 3) ThreatLevel = "SUPERIOR";
  if (Game.Ennemy[1] == 4) ThreatLevel = "VETERAN";
  if (Game.Ennemy[1] == 5) ThreatLevel = "ELITE";
  if (Game.Ennemy[1] == 6) ThreatLevel = "BOSS";
  if (Game.Ennemy[1] == 7) ThreatLevel = "GOD";
  var TLC = "<span class='Ennemy" + Game.Ennemy[1] + "'>";
  var TC = "Ennemy" + Game.Ennemy[1];
  $("#rewards-title").html("<div class='ui " + TC + " basic label'>" + TLC + ThreatLevel + "</div> " + Ennemies[Game.Location][Game.Ennemy[0]] + " has killed you !");
  $("#rewards-desc").html("");
  var DEATHS = Game.Loses == 0 ? 1 : Game.Loses;
  if (ScoreModeEnabled == 0) {
    $("#rewards-text").html("You lose all your EXP.<br>Current Ratio <span class='rouge'>" + fix(Game.Wins / DEATHS, 7));
    $("#btn-CRW").html("<div onclick='hideRewards();' id='btn-hide' class='fluid ui rainbow button'><i class='green recycle icon'></i> Respawn</div>");
  } else {
    $("#rewards-text").html("Current Ratio <span class='rouge'>" + fix(Game.Wins / DEATHS, 7) + "</span>");
    $("#btn-CRW").html("<div onclick='hideRewards();' id='btn-hide' class='fluid ui rainbow button'><i class='green recycle icon'></i> Respawn</div>");
  }
  $("#rewards-loot").html("");
  $("#rewards").show();
  $("#combat").hide();
  $("#btn-ACT").hide();
  $("#btn-CRW").show();
  Game.xp[0] = 0;
  if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] == 2) {
    Game.MissionStarted = [false, 0, 0, 0, 0];
    showmessage("<span class='rouge'>MISSION FAILED</span>", "You failed to clear the fortress, now returning outside of it.");
    Game.Location = 10;
    hideRewards();
  }
}

function UpdateCombat() {
  var ThreatLevel = "NORMAL";
  var lifetext = CoreLife <= Game.Ennemy[3] ? " rouge" : " ";
  var EnnemyText = Game.Ennemy[5] < Game.Ennemy[4] / 2 ? " rouge" : " ";
  if (Game.Ennemy[1] == 2) ThreatLevel = "ADVANCED";
  if (Game.Ennemy[1] == 3) ThreatLevel = "SUPERIOR";
  if (Game.Ennemy[1] == 4) ThreatLevel = "VETERAN";
  if (Game.Ennemy[1] == 5) ThreatLevel = "ELITE";
  if (Game.Ennemy[1] == 6) ThreatLevel = "BOSS";
  if (Game.Ennemy[1] == 7) ThreatLevel = "GOD";
  var TLC = "<span class='Ennemy" + Game.Ennemy[1] + "'>";
  var TC = "Ennemy" + Game.Ennemy[1];
  var LVLTEXT = ScoreModeEnabled == 0 ? " Level " : " Score <i class='fad fa-dice-d20'></i>";
  var TIERTEXT = ScoreModeEnabled == 0 ? Math.round(Game.Ennemy[2]) : Math.floor(Game.Ennemy[2] * 10);
  var EnnemyName = Game.Ennemy[1] > 5 ? BossNames[Game.Location] : Ennemies[Game.Location][Game.Ennemy[0]];
  $("#EnnemyTitle").html("<div class='ui " + TC + " basic label'>" + TLC + ThreatLevel + "</span></div><br>" + TLC + EnnemyName + "<div class='ui horizontal label'>" + LVLTEXT + fix(TIERTEXT, 4) + "</div></span>");
  $("#EnnemyPower").html("<i class='bleu fas fa-sword'></i>" + fix(Game.Ennemy[3], 5));
  $("#EnnemyLife").html("<i class='rouge fas fa-heart'></i><span class='" + EnnemyText + "'>" + fix(Game.Ennemy[5], 5) + "</span>");
  $("#PlayerLife").html("<i class='rouge fas fa-heart'></i><span class='" + lifetext + "'>" + fix(CoreLife, 5) + "</span>/" + fix(CoreBaseLife, 5) + " ");
  $("#PlayerPower").html("<i class='bleu fas fa-sword'></i>" + fix(WeaponsPower, 6) + "<br><i class='orange fas fa-swords'></i>" + fix(SpecialPower, 6));
  $("#EnnemyHP").progress({ className: { active: "", error: "", success: "", warning: "" } });
  if (Game.Emp > 0) {
    $("#emp-btn").show();
    $("#emp-btn").html("<i class='fas fa-swords'></i>" + fix(Game.Emp, 4) + " Special Attack");
    if (url.match(/mobile/gi)) $("#emp-btn").attr("class", "ui big orange button alphaSDW"); else $("#emp-btn").attr("class", "ui huge orange button alphaSDW");
  } else {
    $("#emp-btn").hide();
    $("#emp-btn").attr("class", "");
  }
  if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] == 2) {
    $("#emp-btn").hide();
    $("#emp-btn").attr("class", "");
  }
  $("#attack-btn").html("<i class='fas fa-sword'></i></i>Main Attack");
  $("#cover-btn").html("<i class='fas fa-shield'></i>Take cover");
  $("#run-btn").html("<i class='fas fa-running'></i> Run Away");
  $("#EnnemyHP").progress({ percent: GetEnnemyHPPercent() });
  $("#PlayerHP").progress({ percent: GetPlayerHPPercent() });
}

//EQUIPMENT & STATS UPGRADES FUNCTIONS

function NewCore(id, n) {
  var OldCore = [];
  Game.isInFight = 6;
  NewArmorID = id;
  OldCore = Game.Armors[id];

  if (Game.config[0] == 1) {
    var olevelcolor = Game.inventory[n].level <= OldCore[4] ? "ShadowReset green" : "ShadowReset rouge";
    var oupscolor = Game.inventory[n].ups <= (Game.MaxUPC[id - 1] - OldCore[5]) ? "green" : "rouge";
    var olifecolor = Game.inventory[n].life <= OldCore[3] ? "green" : "rouge";
    var levelcolor = Game.inventory[n].level >= OldCore[4] ? "ShadowReset green" : "ShadowReset rouge";
    var upscolor = Game.inventory[n].ups >= (Game.MaxUPC[id - 1] - OldCore[5]) ? "green" : "rouge";
    var lifecolor = Game.inventory[n].life >= OldCore[3] ? "green" : "rouge";
    if (Game.inventory[n].level == Math.floor(OldCore[4])) olevelcolor = ""; levelcolor = "";
    if (Game.inventory[n].ups == (Game.MaxUPC[id - 1] - OldCore[5])) upscolor = ""; oupscolor = "";
    if (Game.inventory[n].life == OldCore[2]) olifecolor = ""; lifecolor = "";

    if (ScoreModeEnabled == 0) {
      TIER = "Level ";
      TIERRANK = Math.round(Game.inventory[n].level);
      OLDTIERRANK = OldCore[4];
    } else {
      TIER = "Score <i class='fad fa-dice-d20'></i>";
      TIERRANK = Math.floor(Game.inventory[n].level * 10);
      OLDTIERRANK = Math.floor(OldCore[4] * 10);
    }

    if (url.match(/mobile/gi)) BR = " "; else BR = "<br>";

    $("#OldCore-text").html("<span class='" + OldCore[2] + "'>" + OldCore[1] + BR + "<span class='" + olevelcolor + "'>" + TIER + OLDTIERRANK + "</span></span><br>" +
      "<span class='desc'>Relic Slots : " + "<span class='" + oupscolor + "'>" + (Game.MaxUPC[id - 1] - OldCore[5]) + "<i class='jaune fas fa-stars'></i></span></span><br>" +
      "<i class='rouge fas fa-heart'></i><span class='" + olifecolor + "'>" + OldCore[3] + "</span>");

    $("#NewCore-text").html("<span class='" + Game.inventory[n].class + "'>" + Game.inventory[n].name + BR + "<span class='" + levelcolor + "'>" + TIER + TIERRANK + "</span></span><br>" +
      "<span class='desc'>Relic Slots : <span class='" + upscolor + "'>" + Game.inventory[n].ups + "<i class='jaune fas fa-stars'></i></span></span><br>" +
      "<i class='rouge fas fa-heart'></i><span class='" + lifecolor + "'>" + Game.inventory[n].life + "</span>");

    if (url.match(/mobile/gi)) $("#confirm-btn").html("<div onclick='Cancelconfirm();' class='ui rainbow button'><i class='red remove icon'></i></div><div class='alphadivider'></div><div id='replace-btn' onclick='DefineCore(" + id + ", " + n + ");' class='ui rainbow button'><i class='green check icon'></i></div>");
    else $("#confirm-btn").html("<div onclick='Cancelconfirm();' class='ui rainbow button'><i class='red remove icon'></i> Cancel<span class='vert'> (N)</span></div><div class='alphadivider'></div><div id='replace-btn' onclick='DefineCore(" + id + ", " + n + ");' class='ui rainbow button'><i class='green check icon'></i> Replace Armor " + id + " <span class='vert'>(Y)</span></div>");
    $("#modal-4").modal("show");
    $("#confirm3-title").html("Use a new armor");
  } else {
    if (id == 1) DefineCore(1, n);
    if (id == 2) DefineCore(2, n);
    if (id == 3) DefineCore(3, n);
    if (id == 4) DefineCore(4, n);
  }
}

function NewWeapon(id, n) {
  var OldCore = [];
  var type = "";
  Game.isInFight = 6;
  NewArmorID = id;
  if (id == 1) { type = "Main"; } else { type = "Special"; }
  OldCore = Game.Weapons[type];

  if (Game.config[0] == 1) {
    var olevelcolor = Game.inventory[n].level <= OldCore[3] ? "ShadowReset green" : "ShadowReset rouge";
    var oupscolor = Game.inventory[n].ups <= (Game.MaxUPC[id - 1] - OldCore[2]) ? "green" : "rouge";
    var opowercolor = Game.inventory[n].power <= OldCore[4] ? "green" : "rouge";
    var levelcolor = Game.inventory[n].level >= OldCore[3] ? "ShadowReset green" : "ShadowReset rouge";
    var upscolor = Game.inventory[n].ups >= (Game.MaxUPC[id - 1] - OldCore[2]) ? "green" : "rouge";
    var powercolor = Game.inventory[n].power >= OldCore[4] ? "green" : "rouge";

    if (Game.inventory[n].level == Math.floor(OldCore[4])) { olevelcolor = ""; levelcolor = ""; }
    if (Game.inventory[n].ups == (Game.MaxUPC[id - 1] - OldCore[5])) { upscolor = ""; oupscolor = ""; }
    if (Game.inventory[n].power == OldCore[3]) { opowercolor = ""; powercolor = ""; }

    if (ScoreModeEnabled == 0) {
      TIER = "Level ";
      TIERRANK = Math.round(Game.inventory[n].level);
      OLDTIERRANK = OldCore[3];
    } else {
      TIER = "Score <i class='fad fa-dice-d20'></i>";
      TIERRANK = Math.floor(Game.inventory[n].level * 10);
      OLDTIERRANK = Math.floor(OldCore[3] * 10);
    }

    if (url.match(/mobile/gi)) BR = " "; else BR = "<br>";

    $("#OldCore-text").html("<span class='" + OldCore[1] + "'>" + OldCore[0] + BR + "<span class='" + olevelcolor + "'>" + TIER + OLDTIERRANK + "</span></span><br>" +
      "<span class='desc'>Relic Slots : " + "<span class='" + oupscolor + "'>" + (Game.MaxUPC[id - 1] - OldCore[2]) + "<i class='jaune fas fa-stars'></i></span></span><br>" +
      "<i class='bleu fas fa-sword'></i><span class='" + opowercolor + "'>" + OldCore[4] + "</span>");

    $("#NewCore-text").html("<span class='" + Game.inventory[n].class + "'>" + Game.inventory[n].name + BR + "<span class='" + levelcolor + "'>" + TIER + TIERRANK + "</span></span><br>" +
      "<span class='desc'>Relic Slots: <span class='" + upscolor + "'>" + Game.inventory[n].ups + "<i class='jaune fas fa-stars'></i></span></span><br>" +
      "<i class='bleu fas fa-sword'></i><span class='" + powercolor + "'>" + Game.inventory[n].power + "</span>");

    if (url.match(/mobile/gi)) $("#confirm-btn").html("<div onclick='Cancelconfirm();' class='ui rainbow button'><i class='red remove icon'></i></div><div class='alphadivider'></div><div id='replace-btn' onclick='DefineWeapon(" + id + "," + n + ");' class='ui rainbow button'><i class='green check icon'></i></div>");
    else $("#confirm-btn").html("<div onclick='Cancelconfirm();' class='ui rainbow button'><i class='red remove icon'></i> Cancel<span class='vert'> (N)</span></div><div class='alphadivider'></div><div id='replace-btn' onclick='DefineWeapon(" + id + "," + n + ");' class='ui rainbow button'><i class='green check icon'></i> Replace " + type + " Weapon <span class='vert'>(Y)</span></div>");
    $("#modal-4").modal("show");
    $("#confirm3-title").html("Use a new weapon");
  } else DefineWeapon(id, n);
}

function ConfirmRelic(R, id) {
  Game.isInFight = 8;
  var IRCOLOR = "rouge";
  var IRCOLOR2 = "rouge";
  if (Game.RLS[R][1] == Game.inventory[id].object && Game.RLS[R][2] > Game.inventory[id].bonus) IRCOLOR = "green";
  if (Game.RLS[R][1] == 0) { IRCOLOR = "green"; IRCOLOR2 = "green"; }
  if (Game.RLS[R][1] == 0) CDESC = "-";
  if (Game.RLS[R][1] == 1) CDESC = "Power bonus of <span class='" + IRCOLOR + "'>" + fix(Game.RLS[R][2], 9) + "</span>";
  if (Game.RLS[R][1] == 2) CDESC = "Life bonus of <span class='" + IRCOLOR + "'>" + fix(Game.RLS[R][2], 9) + "</span>";
  if (Game.RLS[R][1] == 3) CDESC = "Max Score +<span class='" + IRCOLOR + "'>" + fix(Game.RLS[R][2], 3) + "</span>";
  if (Game.RLS[R][1] == 4) CDESC = "Minimal drop quality <span class='" + Game.RLS[R][2] + "'>" + Game.RLS[R][2] + "</span>";
  if (Game.RLS[R][1] == Game.inventory[id].object && Game.RLS[R][2] < Game.inventory[id].bonus) IRCOLOR2 = "green";
  if (Game.inventory[id].object == 0) { CDESC2 = "-"; }
  if (Game.inventory[id].object == 1) { CDESC2 = "Power bonus of <span class='" + IRCOLOR2 + "'>" + fix(Game.inventory[id].bonus, 9) + "</span>"; }
  if (Game.inventory[id].object == 2) { CDESC2 = "Life bonus of <span class='" + IRCOLOR2 + "'>" + fix(Game.inventory[id].bonus, 9) + "</span>"; }
  if (Game.inventory[id].object == 3) { CDESC2 = "Max Score +<span class='" + IRCOLOR2 + "'>" + fix(Game.inventory[id].bonus, 3) + "</span>"; }
  if (Game.inventory[id].object == 4) { CDESC2 = "Minimal drop quality <span class='" + Game.inventory[id].bonus + "'>" + Game.inventory[id].bonus + "</span>"; }

  if (Game.config[1] == 1) {
    if (url.match(/mobile/gi)) BR = " "; else BR = "<br>";
    $("#OldRelic-text").html("<span class='" + Game.RLS[R][0] + "'>" + Game.RLS[R][0] + "</span><br>" + CDESC);
    $("#NewRelic-text").html(Game.inventory[id].name + "<br><span class='" + Game.inventory[id].class + "'>" + Game.inventory[id].class + "</span><br>" + CDESC2);
    if (url.match(/mobile/gi)) $("#confirm2-btn").html("<div onclick='Cancelconfirm();' class='ui rainbow button'><i class='red remove icon'></i> Cancel<span class='vert'> (N)</span></div><div id='replace-btn' onclick='InstallRelic(" + R + ", " + id + ");' class='ui rainbow button'><i class='green check icon'></i> Replace Relic <span class='vert'>(Y)</span></div>");
    else $("#confirm2-btn").html("<div onclick='Cancelconfirm();' class='ui rainbow button'> Cancel</div><div id='replace-btn' onclick='InstallRelic(" + R + ", " + id + ");' class='ui rainbow button'> Replace Relic </div>");
    $("#modal-3").modal("show");
  }
  else InstallRelic(R, id);
}

function InstallRelic(R, id) {
  Game.RLS[R] = [Game.inventory[id].class, Game.inventory[id].object, Game.inventory[id].bonus];
  if (id <= Game.MaxInv) RemoveItem(id);
  if ($('#inventory').is(":visible")) hideModals(); else hideRewards();
  if (Game.config[1] == 1) $('#modal-3').modal('hide');
}

function ConfirmDestroy(core) {
  DCore = Game.Armors[core];
  var TIER = ScoreModeEnabled == 0 ? "Level " : "Score <i class='fad fa-dice-d20'></i>";
  var DTIERRANK = ScoreModeEnabled == 0 ? Math.round(DCore[4]) : Math.floor(DCore[4] * 10);
  var Names = ["", "Helmet", "Armor", "Shield", "Boots"];
  $("#Destroy-Title").html("Throw your current " + Names[core] + " ?");
  $("#Destroy-text").html("<span class='" + DCore[2] + "'>" + DCore[2] + " " + DCore[1] + "<div class='ui horizontal label'>" + TIER + "" + DTIERRANK + "</div></span><br>" +
    "<span class='desc'>Available slots : " + "" + (Game.MaxUPC[core - 1] - DCore[5]) + "<i class='orange fad fa-gem'></i></span><br>" +
    "<i class='rouge fas fa-heart'></i>" + DCore[3] + "<br>");
  if (url.match(/mobile/gi)) {
    $("#DBTN").html("<div class='ui icon cu2 button' onclick='DestroyCore(" + core + ");'><i class='rouge trash icon'></i></div><div onclick='DCancel();' class='ui icon cu button'><i class='green times icon'></i></div>");
  } else {
    $("#DBTN").html("<div class='ui cu2 button' onclick='DestroyCore(" + core + ");'><i class='rouge trash icon'></i> Confirm</div><div onclick='DCancel();' class='ui cu button'><i class='green times icon'></i><span class='blanc'>Cancel</span></div>");
  }
  $("#modal-2").modal("show");
}

function ConfirmDestroyWeapon(weapon) {
  WeaponToDelete = Game.Weapons[weapon];
  var TIER = ScoreModeEnabled == 0 ? "Level " : "Score <i class='fad fa-dice-d20'></i>";
  var DTIERRANK = ScoreModeEnabled == 0 ? Math.round(WeaponToDelete[4]) : Math.floor(WeaponToDelete[4] * 10);
  $("#Destroy-Title").html("Throw your current " + weapon + " weapon ?");
  $("#Destroy-text").html("<span class='" + WeaponToDelete[1] + "'>" + WeaponToDelete[1] + " " + WeaponToDelete[0] + "<div class='ui horizontal label'>" + TIER + "" + DTIERRANK + "</div></span><br>" +
    "<i class='bleu fas fa-sword'></i>" + WeaponToDelete[4] + "<br>");
  if (weapon == "Main") weapon = 1; else weapon = 2;
  if (url.match(/mobile/gi)) {
    $("#DBTN").html("<div class='ui icon cu2 button' onclick=\'DestroyWeapon(" + weapon + ");'><i class='rouge trash icon'></i></div><div onclick='DCancel();' class='ui icon cu button'><i class='green times icon'></i></div>");
  } else {
    $("#DBTN").html("<div class='ui cu2 button' onclick=\'DestroyWeapon(" + weapon + ");'><i class='rouge trash icon'></i> Confirm</div><div onclick='DCancel();' class='ui cu button'><i class='green times icon'></i><span class='blanc'>Cancel</span></div>");
  }
  $("#modal-2").modal("show");
}

function DestroyWeapon(type) {
  if (type == 1) Game.Weapons.Main = ["Training Sword", "Normal", 0, 1, 10 + (Game.Simulation * 1)];
  else Game.Weapons.Special = ["Training Dagger", "Normal", 0, 1, 10 + (Game.Simulation * 1)];
  $('#modal-2').modal('hide');
  UpdateGame();
}

function DestroyCore(core) {
  Game.Armors[core] = [true, "Basic Armor", "Normal", 100, 1, 0];
  Game.MaxUPC[core - 1] = 0;
  Game.ArmorUpgrades[core] = 0;
  $('#modal-2').modal('hide');
  UpdateGame();
}

function Cancelconfirm() {
  Game.isInFight = 2;
  $('#modal-3').modal('hide');
  $('#modal-4').modal('hide');
}

function DefineCore(core, selected) {
  if (Game.config[0] == 1) $("#modal-4").modal("hide");
  if (Game.inventory[selected].life !== undefined) {
    Game.Armors[core] = [true, Game.inventory[selected].name, Game.inventory[selected].class, Game.inventory[selected].life, Game.inventory[selected].level, 0];
    Game.MaxUPC[core - 1] = Game.inventory[selected].ups;
    Game.ArmorUpgrades[core] = 0;
  }
  if (selected <= Game.MaxInv) RemoveItem(selected);
  if ($('#inventory').is(":visible")) hideModals(); else hideRewards();
  Game.isInFight = 0;
  UpdateGame();
}

function DefineWeapon(type, selected) {
  var weapon = "Main";
  if (type == 2) weapon = "Special";
  if (Game.config[0] == 1) $("#modal-4").modal("hide");
  if (Game.inventory[selected].power !== undefined) {
    Game.Weapons[weapon] = [Game.inventory[selected].name, Game.inventory[selected].class, 0, Game.inventory[selected].level, Game.inventory[selected].power];
    Game.MaxUPC[type + 3] = Game.inventory[selected].ups;
    //Game.WeaponUpgrades[weapon] = [0, 0];
  }
  if (selected <= Game.MaxInv) RemoveItem(selected);
  if ($('#inventory').is(":visible")) hideModals(); else hideRewards();
  Game.isInFight = 0;
  UpdateGame();
}

function GetMaxLevel(type) {
  if (ScoreModeEnabled == 0) {
    if (type == "Normal") return 0;
    if (type == "Common") return random(0, 1);
    if (type == "Uncommon") return random(1, 2);
    if (type == "Rare") return 2;
    if (type == "Epic") return random(2, 3);
    if (type == "Exotic") return random(3, 4);
    if (type == "Divine") return random(4, 5);
  } else {
    if (type == "Normal") return random(0, 1);
    if (type == "Common") return random(0, 2);
    if (type == "Uncommon") return random(1, 2);
    if (type == "Rare") return random(2, 3);
    if (type == "Epic") return random(3, 4);
    if (type == "Exotic") return random(3, 5);
    if (type == "Divine") return random(5, 6);
  }
}

function UPCore(core, type, nb) {
  if (Game.Armors[core][5] < Game.MaxUPC[core]) {
    if (type == 1) Game.Armors[core][3] += Game.inventory[nb].life;
    Game.Armors[core][5]++;
    if (ScoreModeEnabled == 1 && Game.Armors[core][4] + (Game.inventory[nb].type / 10) <= MaxScore) { Game.Armors[core][4] += (Game.inventory[nb].type / 10); } else { Game.Armors[core][4] = MaxScore; }
    Game.ArmorUpgrades[core] += Game.inventory[nb].life;
    if (nb < Game.MaxInv) RemoveItem(nb);
  }
  if ($('#inventory').is(":visible")) { hideModals(); } else { hideRewards(); }
  UpdateGame();
}

function UPWeapon(core, nb) {
  var weapon = "Main";
  if (core == 2) weapon = "Special";
  if (Game.Weapons[weapon][2] < Game.MaxUPC[core + 3]) {
    Game.Weapons[weapon][4] += Game.inventory[nb].power;
    Game.Weapons[weapon][2]++;
    if (ScoreModeEnabled == 1 && Game.Weapons[weapon][3] + (Game.inventory[nb].type / 10) <= MaxScore) Game.Weapons[weapon][3] += (Game.inventory[nb].type / 10); else Game.Weapons[weapon][3] = MaxScore;
    if (nb < Game.MaxInv) RemoveItem(nb);
  }
  if ($('#inventory').is(":visible")) { hideModals(); } else { hideRewards(); }
  UpdateGame();
}

function BuyXPMult() {
  var price = GetMultPrice(0);
  if (Game.Shards >= price && price <= 999999999) {
    Game.Shards -= price;
    Game.Upgrades[0]++;
  }
  UpdateGame();
}

function BuyPowerMult() {
  var price = GetMultPrice(1);
  if (Game.Shards >= price && price <= 999999999) {
    Game.Shards -= price;
    Game.Upgrades[1]++;
  }
  UpdateGame();
}

function BuyLifeMult() {
  var price = GetMultPrice(2);
  if (Game.Shards >= price && price <= 999999999) {
    Game.Shards -= price;
    Game.Upgrades[2]++;
  }
  UpdateGame();
}

function BuyInvSlot() {
  var price = GetMultPrice(3);
  if (Game.Shards >= price && price <= 999999999) {
    Game.Shards -= price;
    Game.Upgrades[3]++;
  }
  UpdateGame();
}

function GetMultPrice(id) {
  if (Game.Upgrades[id] == null) Game.Upgrades[id] = 0;
  var price = 2;
  if (Game.Upgrades[id] >= 10) price = 3;
  if (Game.Upgrades[id] >= 20) price = 4;
  if (Game.Upgrades[id] >= 30) price = 5;
  if (Game.Upgrades[id] >= 40) price = 6;
  if (Game.Upgrades[id] >= 50) price = 8;
  if (Game.Upgrades[id] >= 60) price = 10;
  if (Game.Upgrades[id] >= 70) price = 12;
  if (Game.Upgrades[id] >= 80) price = 15;
  if (Game.Upgrades[id] >= 90) rice = 25;
  if (id == 0 && Game.Upgrades[id] >= 200) price = 999999999;
  if (id == 1 && Game.Upgrades[id] >= 100) price = 999999999;
  if (id == 2 && Game.Upgrades[id] >= 100) price = 999999999;
  if (id == 3 && Game.Upgrades[id] >= 50) price = 999999999;
  return price;
}

function ChangeWT() { $("#modal-7").modal("show"); }

function ConfirmWT() {
  if (Game.Level >= MaxLevel && Ranking >= (((30 + (Game.Simulation * 5)) * 10) - 5) && LastMission >= TotalMissions) {
    Game.Simulation++;
    Game.xp = [0, 0, 0];
    Game.Level = 1;
    Game.Shards += Math.round(Ranking / 10 / 5 - 6);
    LifeMult = 1;
    PowerMult = 1;
    Game.Emp = 0;
    Game.inventory = [];
    Game.MaxUPC = [0, 0, 0, 0, 0, 0];
    Game.Armors[1] = [true, "Basic Armor", "Normal", 100, 1];
    Game.Armors[2] = [false, "Basic Armor", "Normal", 100, 1];
    Game.Armors[3] = [false, "Basic Armor", "Normal", 100, 1];
    Game.Armors[4] = [false, "Basic Armor", "Normal", 100, 1];
    Game.ArmorUpgrades = [null, 0, 0, 0, 0];
    Game.RLS[1] = ["Normal", 0, 0];
    Game.RLS[2] = ["Normal", 0, 0];
    Game.RLS[3] = ["Normal", 0, 0];
    Game.RLS[4] = ["Normal", 0, 0];
    Game.Weapons.Main = ["Training Sword", "Normal", 0, 1, 10 + (Game.Simulation * 1)];
    Game.Weapons.Special = ["Training Dagger", "Normal", 0, 1, 10 + (Game.Simulation * 1)];
    Game.isInFight = 0;
    Game.MissionsCompleted = [];
    Game.Location = 0;
    Game.MissionStarted = [false, 0, 0, 0, 0];
    Game.AutoRemove[0] = 0;
    Game.AutoRemove[1] = 0;
    Game.AutoRemove[2] = 0;
    Game.AutoRemove[3] = 0;
    Game.AutoRemove[4] = 0;
    Game.AutoRemove[5] = 0;
    $("#RM1").checkbox("uncheck");
    $("#RM2").checkbox("uncheck");
    $("#RM3").checkbox("uncheck");
    $("#RM4").checkbox("uncheck");
    $("#RM5").checkbox("uncheck");
    $("#RM6").checkbox("uncheck");
    hideRewards();
    hideMenus();
    hideModals();
    mission(0);
  }
}

//ITEM GENERATION FUNCTION
function newItem(type, level, rarity) {
  var item = {};
  var luck = 0;
  var Mult = [random(100, 105) / 100, random(115, 120) / 100, random(125, 130) / 100, random(135, 140) / 100, random(150, 160) / 100, random(175, 185) / 100, random(195, 210) / 100];
  var Rarities = ["Normal", "Common", "Uncommon", "Rare", "Epic", "Exotic", "Divine"];
  if (level < 1) { level = 1; }
  if (type == 0) { var AHJ = random(0, 100); if (AHJ > 45) type = "Weapon"; else type = "Armor"; }

  if (rarity == "Normal") luck = 1;
  if (rarity == "Common") luck = 2000;
  if (rarity == "Uncommon") luck = 5000;
  if (rarity == "Rare") luck = 7000;
  if (rarity == "Epic") luck = 8500;
  if (rarity == "Exotic") luck = 9500;
  if (rarity == "Divine") luck = 9850;

  //IF PLAYER HAVE A MINIMAL RARITY RELIC THEN USE IT HERE
  for (var R in Game.RLS) {
    if (Game.RLS[R][1] == 4) {
      if (Game.RLS[R][2] == "Normal" && 1 > luck) luck = 1;
      if (Game.RLS[R][2] == "Common" && 2000 > luck) luck = 2000;
      if (Game.RLS[R][2] == "Uncommon" && 5000 > luck) luck = 5000;
      if (Game.RLS[R][2] == "Rare" && 7000 > luck) luck = 7000;
      if (Game.RLS[R][2] == "Epic" && 8500 > luck) luck = 8500;
      if (Game.RLS[R][2] == "Exotic" && 9500 > luck) luck = 9500;
      if (Game.RLS[R][2] == "Divine" && 9850 > luck) luck = 9850;
    }
  }

  //IF IN SCORE MODE REPLACE ALL LOW CLASS ITEMS WITH HIGH CLASS ONES
  if (ScoreModeEnabled == 1) {
    if (Game.Ennemy[1] <= 4 && luck < 7000) { luck = 7000; }
    if (Game.Ennemy[1] == 5 && luck < 8500) { luck = 8500; }
    if (Game.Ennemy[1] == 6 && luck < 9500) { luck = 9500; }
    if (Game.Ennemy[1] == 7 && luck < 9850) { luck = 9850; }
    //REPLACE LEVEL BY SCORE
    level = level / 10;
    if (level > MaxScore) { level = MaxScore; }
  } else { //DETECT IF RARITY OR LEVEL IS HIGHER THAN THE ACTUAL MAXIMUM
    if (item.type > POS[Game.Location][3]) { item.type = POS[Game.Location][3]; item.class = Rarities[POS[Game.Location][3]]; }
    if (level > Game.Level) level = Game.Level;
    if (level > POS[Game.Location][2]) level = POS[Game.Location][2];
  }

  var chance = random(luck, 10000);

  //DEFINE THE ITEM RARITY
  if (chance > 0) {
    item.class = 'Normal';
    item.type = 0;
  }
  if (chance >= 2000 && chance < 5000) {
    item.class = 'Common';
    item.type = 1;
  }
  if (chance >= 5000 && chance < 7000) {
    item.class = 'Uncommon';
    item.type = 2;
  }
  if (chance >= 7000 && chance < 8500) {
    item.class = 'Rare';
    item.type = 3;
  }
  if (chance >= 8500 && chance < 9500) {
    item.class = 'Epic';
    item.type = 4;
  }
  if (chance >= 9500 && chance < 10000) {
    item.class = 'Exotic';
    item.type = 5;
  }
  if (chance >= 9850 && chance < 10000) {
    item.class = 'Divine';
    item.type = 6;
  }

  //IF THE PLAYER IS IN A FORTRESS THEN GENERATE AN EXOTIC OR BETTER ITEM
  if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] == 2) {
    if (Game.Ennemy[1] >= 1 && item.type != 6) { item.class = 'Exotic'; item.type = 5; }
    if (Game.Ennemy[1] == 7) { item.class = 'Divine'; item.type = 6; }
  }

  //IF PLAYER DOESN'T HAVE THE REQUIRED LEVEL REPLACE THE ITEM RARITY
  if (Game.Level < 5) {
    item.class = 'Normal';
    item.type = 0;
  }
  if (Game.Level < 10) {
    if (item.class == 'Uncommon' || item.class == 'Rare' || item.class == 'Epic' || item.class == 'Exotic' || item.class == 'Divine') {
      item.class = 'Common';
      item.type = 1;
    }
  }
  if (Game.Level < 15) {
    if (item.class == 'Rare' || item.class == 'Epic' || item.class == 'Exotic' || item.class == 'Divine') {
      item.class = 'Uncommon';
      item.type = 2;
    }
  }
  if (Game.Level < 20) {
    if (item.class == 'Epic' || item.class == 'Exotic' || item.class == 'Divine') {
      item.class = 'Rare';
      item.type = 3;
    }
  }
  if (Game.Level < 30) {
    if (item.class == 'Exotic' || item.class == 'Divine') {
      item.class = 'Epic';
      item.type = 4;
    }
  }

  if (type == "Armor") { //GENERATE AN ARMOR
    item.name = CoreNames[[item.class]][Math.floor(Math.random() * CoreNames[item.class].length)] + " Armor";
    if (level > MaxScore) level = MaxScore;
    item.level = level;
    item.object = 0;
    item.ups = GetMaxLevel(item.class);
    if (ScoreModeEnabled == 1) item.life = Math.floor(random((level * 10) * (Mult[item.type] * 0.75) + 100, (level * 10) * Mult[item.type] + 100)); else item.life = Math.floor(random((level * 10) * (Mult[item.type] * 0.9) + 100, (level * 10) * Mult[item.type] + 100));
    item.id = 1; //SET AS ARMOR

  }

  if (type == "Weapon") { //GENERATE A WEAPON
    item.name = CoreNames[[item.class]][Math.floor(Math.random() * CoreNames[item.class].length)] + " Weapon";
    if (level > MaxScore) level = MaxScore;
    item.level = level;
    item.object = 0;
    item.ups = GetMaxLevel(item.class);
    if (ScoreModeEnabled == 1) item.power = Math.floor(random((level * 3) * (Mult[item.type] * 0.75), (level * 3) * Mult[item.type] + 5)); else item.power = Math.floor(random((level * 3) * (Mult[item.type] * 0.9), (level * 3) * Mult[item.type] + 5));
    item.id = 4; //SET AS WEAPON
  }

  if (type == "Gem") { //GENERATE A Gem
    var baseluck = 1;
    if (item.class == "Normal") luck = 3000;
    if (item.class == "Common") luck = 7500;
    if (item.class == "Uncommon") luck = 15000;
    if (item.class == "Rare") { baseluck = 15000; luck = 19500; }
    if (item.class == "Epic") { baseluck = 19500; luck = 22500; }
    if (item.class == "Exotic") { baseluck = 22500; luck = 24000; }
    if (item.class == "Divine") { baseluck = 24000; luck = 30000; }

    var multiplier = random(baseluck, luck); //Random number between 0.1% - 2.5%
    var type2 = random(1, 100);
    if (type2 > 0 && type2 <= 35) { //GENERATE A POWER GEM
      item.power = Math.floor((multiplier / 10000) * ((WeaponsPower / (PowerMult + Game.WTMult[0])) * 0.01) + item.type);
      if (item.power < 1) item.power = 1;
      item.life = 0;
      item.name = "Power Gem";
      item.level = item.type;
      item.object = 2;
      item.id = 5; //SET AS POWER GEM
    }
    if (type2 > 35 && type2 <= 100) { //GENERATE A LIFE GEM
      item.life = Math.floor((multiplier / 10000) * ((CoreBaseLife / (LifeMult + Game.WTMult[1])) * 0.01) + item.type);
      if (item.life < 1) item.life = 1;
      item.power = 0;
      item.name = "Life Gem";
      item.level = item.type;
      item.object = 1;
      item.id = 2; //SET AS LIFE GEM
    }
  }

  if (type == "Relic") {
    var RelicMult = [random(1, 3) / 100, random(3, 5) / 100, random(5, 9) / 100, random(10, 14) / 100, random(15, 19) / 100, random(20, 24) / 100, random(25, 30) / 100];
    var MultScore = [random(1, 5), random(1, 10), random(5, 14), random(5, 19), random(10, 24), random(15, 49), random(20, 100)];
    var MultDrop = ["Normal", "Common", "Uncommon", "Rare", "Epic", "Exotic", "Divine"];

    var RelicType = random(1, 2);
    if (Game.Level > 10) RelicType = random(1, 3);
    if (ScoreModeEnabled == 1) RelicType = random(1, 4);

    if (RelicType == 1) {
      item.name = Relicname[0];
      item.object = 1;
      item.bonus = RelicMult[item.type];
    }
    if (RelicType == 2) {
      item.name = Relicname[1];
      item.object = 2;
      item.bonus = RelicMult[item.type];
    }
    if (RelicType == 3) {
      item.name = Relicname[3];
      item.object = 4;
      item.bonus = MultDrop[random(0, item.type)];
      if (item.type > 1) item.bonus = MultDrop[random(item.type - 2, item.type)];
      if (item.type > 2) item.bonus = MultDrop[random(item.type - 3, item.type)];

    }
    if (RelicType == 4) {
      item.name = Relicname[2];
      item.object = 3;
      item.bonus = MultScore[item.type];
    }
    item.id = 3; //SET AS RELIC
  }

  //PLACE IN INVENTORY
  if ((Game.inventory.length - 1) < Game.MaxInv && item != Game.inventory[Game.inventory.length - 1]) Game.inventory[Game.inventory.length] = item;
}