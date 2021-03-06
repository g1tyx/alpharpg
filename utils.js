// Save and load functions
var canSave = 1;

function save() {
  if (canSave == 1) {
    localStorage.setItem("Alpha", JSON.stringify(Game));
    localStorage.setItem("Alpha-Backup", JSON.stringify(Game.username));
  }
}

function BackupData() {
  localStorage.setItem("Alpha-Backup", JSON.stringify(Game.username));
}

function load() {
  let savegame = JSON.parse(localStorage.getItem("Alpha"));
  for (var property in savegame) {
    if (typeof savegame[property] !== "undefined")
      Game[property] = savegame[property];
  }
  loadBackup();
}

function loadBackup() {
  let Backup = JSON.parse(localStorage.getItem("Alpha-Backup"));
  Game.username = Backup;
}

function exportSave() {
  window.getSelection().removeAllRanges();
  NOTIFY("Save exported", "Your save is now copied in your clipboard.");
  $("#exportBody").html("<textarea id='saveCode'>" + btoa(JSON.stringify(Game)) + "</textarea>");
  var textField = document.getElementById("saveCode");
  textField.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  $("#exportBody").html("");
}

function exportTheme() {
  window.getSelection().removeAllRanges();
  NOTIFY("Theme exported", "This theme is now copied in your clipboard.");
  $("#exportBody").html("<textarea id='saveCode'>" + btoa(JSON.stringify(Game.Theme)) + "</textarea>");
  var textField = document.getElementById("saveCode");
  textField.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  $("#exportBody").html("");
}

function importTheme() {
  var save = prompt("在这里粘贴你的主题代码");
  if (save) {
    try {
      var decoded = atob(save);
      if (decoded) {
        Game.Theme = JSON.parse([decoded]);
        UpdateUI();
      } else {
        $("#codereturn").html("ERROR: Invalid Theme");
      }
    } catch (err) {
      $("#codereturn").html("ERROR: Invalid Theme");
    }
  }
}

function importSave() {
  var save = prompt("在这里粘贴你的存档代码");
  if (save) {
    restoreSave(save);
  }
}

function restoreSave(save) {
  try {
    var decoded = atob(save);
    JSON.parse(decoded);
    if (decoded) {
      localStorage.setItem("Alpha", decoded);
      canSave = 0;
      location.reload();
    } else {
      $("#codereturn").html("ERROR: Invalid Save Data");
    }
  } catch (err) {
    $("#codereturn").html("ERROR: Invalid Save Data");
  }
}

function Reset() {
  $("#modal-6").modal("show");
}

function confirmReset() {
  canSave = 0;
  localStorage.clear();
  location.reload();
}

//MISC FUNCTIONS

function fix(x, type) {
  if (type == 0) return numeral(x).format("0ib");
  if (type == 1)
    if (x == 0.5) {
      return "0.5B";
    } else return numeral(x).format("0.0ib");
  if (type == 2) return numeral(x).format("0.00ib");
  if (type == 3) return numeral(x).format("0,0");
  if (type == 4) return numeral(x).format("0");
  if (type == 5) {
    if (x < 1000) return numeral(x).format("0a");
    else
      return numeral(x).format("0.0a");
  }
  if (type == 6) {
    if (x <= 1000) return numeral(x).format("0a");
    if (x > 1000) return numeral(x).format("0.0a");
    if (x > 10000) return numeral(x).format("0.00a");
  }
  if (type == 7) return numeral(x).format("0.0a");
  if (type == 8) return numeral(x).format("0.00%");
  if (type == 9) return numeral(x).format("0%");
  if (type == 10) return numeral(x).format("0.0%");
}

function getDate() {
  var today = new Date();
  var date = today.toLocaleDateString();
  var time = today.toLocaleTimeString();
  CurrentDate = date + " at " + time;
  return CurrentDate;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toHHMMSS(id) {
  var sec_num = parseInt(id, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;
  var secondstext = 0;
  var minutestext = 0;
  var hourstext = 0;
  if (hours > 0) {
    hourstext = hours + " hours ";
  } else {
    hourstext = "";
  }
  if (minutes > 0) {
    minutestext = minutes + " minutes ";
  } else {
    minutestext = "";
  }
  if (seconds > 0) {
    secondstext = seconds + " seconds ";
  } else {
    if (minutes > 0) {
      secondstext = "";
    } else {
      secondstext = "0 seconds";
    }
  }
  if (hours == 1) {
    hourstext = hours + " hour ";
  }
  if (minutes == 1) {
    minutestext = minutes + " minute ";
  }
  if (seconds == 1) {
    secondstext = seconds + " second ";
  }
  var time = hourstext + minutestext + secondstext;
  return time;
}

var config = {
  apiKey: "AIzaSyAsKlY89gHACvQHywLv04xtxPBvhRGoNYo",
  authDomain: "matrix-731a7.firebaseapp.com",
  databaseURL: "https://matrix-731a7.firebaseio.com",
  projectId: "matrix-731a7",
  storageBucket: "matrix-731a7.appspot.com",
  messagingSenderId: "752237806136",
  appId: "1:752237806136:web:08da7c06397b384b201ccd",
  measurementId: "G-FK9048JSDP"
};

firebase.initializeApp(config);
firebase.analytics();
var provider = new firebase.auth.GoogleAuthProvider();

(function () {
  // Using a popup.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
})();

function login() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    var token = result.credential.accessToken;
    var user = result.user;
    APP.Email = user.email;
    $("#modal-5").modal("hide");
    Game.isInFight = 0;
  });
  APP.LoggedIn = 1;
  SendStats();
  UpdateGame();
}

var PAGE = 1;
var MAXVIEW = 10;
var MINVIEW = 1;
var LastId = 0;
var LeaderFilter = 0;

function filter(f) {
  LeaderFilter = f;
  UpdateGame();
  TOP10();
}

function ResetLeaderBoard() {
  $("#LEADERBOARD").html("<thead><tr class='shadow'><th class='ui center aligned'></th><th class='ui center aligned'>Name</th><th class='ui center aligned'><a onclick='filter(1);'>Ranking</a></th><th class='ui center aligned'><a onclick='filter(0);'>Dimension</a></th><th class='ui center aligned'>Power</th><th class='ui center aligned'>Life</th><th class='ui center aligned'>Ratio (K/D)</th>");
}

function writeUserData() {
  if (location.href.match(/(goldenlys.github.io).*/) && Game.username != "Default" && Game.username != null && APP.LoggedIn == 1) {
    firebase.database().ref('users/' + Game.username).set({
      Name: Game.username,
      Email: APP.Email,
      Order: (-1 * APP.Ranking) - (100000 * Game.Simulation),
      Order2: -1 * APP.Ranking,
      Level: Game.Level,
      Ranking: APP.Ranking,
      WT: Game.Simulation,
      CorePower: APP.WeaponsPower,
      CoreLife: APP.CoreBaseLife,
      Kills: Game.Wins,
      Deaths: Game.Loses,
      Avatar: Game.Avatar,
      Defeated: Game.Defeated,
      Version: APP.VERSION,
      Theme: Game.Theme,
    });
  }
}

function NewUserData(old) {
  if (old != "Default" && old == Game.username) {
    firebase.database().ref('users/' + old).set(null);
    var newname = prompt("Please write a new name");

    Game.username = newname;
    Backup = newname;
  }
}

function ReadDB() {
  var ref = firebase.database().ref("users");
  var CXD = firebase.database().ref("codes");
  CXD.on("child_added", function () { });
  Leader = 0;
  id = 0;
  ResetLeaderBoard();
  if (LeaderFilter == 0) {
    ref.orderByChild("Order").limitToLast(100000).on("child_added", function (snapshot) {
      if (Game.config[4] == 0) {
        UpdateDB(snapshot);
      } else {
        if (snapshot.val().Version >= APP.VERSION) {
          UpdateDB(snapshot);
        }
      }
    });
  } else {
    ref.orderByChild("Order2").limitToLast(100000).on("child_added", function (snapshot) {
      if (snapshot.val().Version > 1.15) {
        if (Game.config[4] == 0) {
          UpdateDB(snapshot);
        } else {
          if (snapshot.val().Version >= APP.VERSION) {
            UpdateDB(snapshot);
          }
        }
      }
    });
  }
}

function UpdateDB(snapshot) {
  id++;
  var isPlayer = "";
  if (snapshot.key === Game.username + " " || snapshot.key === Game.username) {
    APP.Leader = id;
  }
  if (id >= MINVIEW && id <= MAXVIEW) {
    if (snapshot.val().Version > 1.09) {
      if (snapshot.val().Avatar == undefined) {
        Avatar = 1;
      } else {
        Avatar = snapshot.val().Avatar;
      }
      if (snapshot.val().Theme == undefined) {
        Theme = $("*").css("--white");
      } else {
        Theme = snapshot.val().Theme;
      }
      if (id == APP.Leader) { isPlayer = "fight"; }
      var DEATHS = snapshot.val().Deaths == 0 ? 1 : snapshot.val().Deaths;
      $("#LEADERBOARD").append("<tr id='leader-" + id + "' class='" + isPlayer + "'>" +
        "<td class='center aligned'>#" + id + "</td>" +
        "<td class='center aligned' style='color:" + Theme + ";'><img class='ui mini avatar image' src='DATA/avatars/avatar" + Avatar + ".jpg'>" + snapshot.key + "</td>" +
        "<td class='center aligned'><i class='fad fa-dice-d20'></i>" + fix(snapshot.val().Ranking, 4) + " (" + fix(snapshot.val().Level, 4) + ") " + "</td>" +
        "<td class='center aligned'>" + fix(snapshot.val().WT, 3) + "</td>" +
        "<td class='center aligned'>" + fix(snapshot.val().CorePower, 5) + "</td>" +
        "<td class='center aligned'>" + fix(snapshot.val().CoreLife, 5) + "</td>" +
        "<td class='center aligned'>" + fix(snapshot.val().Kills / DEATHS, 7) + "</td>" +
        "</tr>");
    } else {
      id--;
    }
  }
  LastId = id;
  if (Leader == 0) {
    APP.Leader = "Unranked";
  }
}

//UI FUNCTIONS
function hideMenuTabs() {
  for (var id = 0; id < 10; id++) {
    $("#CATEGORIE-" + id).hide();
    $("#C" + id).removeClass("active");
    $("#C" + id).addClass("");
  }
}

function ClickEvents() {
  $("#menu").on("click", "div", function () {
    var id = $(this).data("id");
    hideMenuTabs();
    $("#CATEGORIE-" + id).show();
    $("#C" + id).addClass("active");
    $("#C" + id).removeClass("");
    TOP10();
  });
  $("#themeBTN1").on("click", function () {
    ThemeDefine();
  });
  $("#themeBTNR").on("click", function () {
    ResetTheme(1);
  });
  $("#attack-btn").on("click", function () {
    Attack();
  });
  $("#emp-btn").on("click", function () {
    LaunchEMP();
  });
  $("#cover-btn").on("click", function () {
    Protect();
  });
  $("#run-btn").on("click", function () {
    RunAway();
  });
  $("#WelcomeNext").on("click", function () {
    WelcomeNext();
  });
  $("#WelcomePrevious").on("click", function () {
    ChangeStep(0);
  });
  $("#closeMSG").on("click", function () {
    hideModals();
  });
  $("#WTBTN").on("click", function () {
    ChangeWT();
  });
  $("#CheckCode").on("click", function () {
    CheckCode();
  });
  $("#TOP10").on("click", function () {
    TOP10();
  });
  $("#TOPNEXT").on("click", function () {
    TOPNEXT();
  });
  $("#TOPPREVIOUS").on("click", function () {
    TOPPREVIOUS();
  });
  $("#ChangeAvatar").on("click", function () {
    ChangeAvatar();
  });
  $("#ChangeAvatarBegin").on("click", function () {
    ChangeAvatar();
  });
  $("#ChooseWarrior").on("click", function () {
    APP.WelcomeData[2] = "Warrior";
    $("#warrior").attr("class", "ui fluid custom card");
    $("#paladin").attr("class", "ui fluid card");
    $("#ninja").attr("class", "ui fluid card");
  });
  $("#ChoosePaladin").on("click", function () {
    APP.WelcomeData[2] = "Paladin";
    $("#warrior").attr("class", "ui fluid card");
    $("#paladin").attr("class", "ui fluid custom card");
    $("#ninja").attr("class", "ui fluid card");
  });
  $("#ChooseNinja").on("click", function () {
    APP.WelcomeData[2] = "Ninja";
    $("#warrior").attr("class", "ui fluid card");
    $("#paladin").attr("class", "ui fluid card");
    $("#ninja").attr("class", "ui fluid custom card");
  });
  $("#WB-BTN").on("click", function () {
    $("#DIV-COMBAT").show();
    $(".BUTTONS_ACTIONS").show();
    $("#modal-5").modal("hide");
    Game.isInFight = 0;
    APP.Email = "DoNotLogin";
    UpdateGame();
  });
  $("#LOGIN-BTN").on("click", function () {
    $("#modal-5").modal("hide");
    login();
  });
  $("#xpm-btn").on("click", function () {
    BuyXPMult();
  });
  $("#pm-btn").on("click", function () {
    BuyPowerMult();
  });
  $("#lpm-btn").on("click", function () {
    BuyLifeMult();
  });
  $("#invu-btn").on("click", function () {
    BuyInvSlot();
  });
  $("#reset-btn").on("click", function () {
    Reset();
  });
  $("#Reload").on("click", function () {
    location.reload();
  });
  $("#Dcore1").on("click", function () {
    ConfirmDestroy(1);
  });
  $("#Dcore2").on("click", function () {
    ConfirmDestroy(2);
  });
  $("#Dcore3").on("click", function () {
    ConfirmDestroy(3);
  });
  $("#Dcore4").on("click", function () {
    ConfirmDestroy(4);
  });
  $("#DWeapon1").on("click", function () {
    ConfirmDestroyWeapon("Main");
  });
  $("#DWeapon2").on("click", function () {
    ConfirmDestroyWeapon("Special");
  });
  $("#export-btn").on("click", function () {
    exportSave();
  });
  $("#import-btn").on("click", function () {
    importSave();
  });
  $("#exportt-btn").on("click", function () {
    exportTheme();
  });
  $("#importt-btn").on("click", function () {
    importTheme();
  });
  $("#missions-btn").on("click", function () {
    GenMissions();
    SelectTAB("MISSIONS");
  });
  $("#exploration-btn").on("click", function () {
    GenExplorationMenu();
    SelectTAB("EXPLORE");
  });
  $("#inventory-btn").on("click", function () {
    GenInventory();
    OPEN_MENU("INVENTORY");
  });
  $("#prestige-btn").on("click", function () {
    OPEN_MENU("PRESTIGE");
  });
  $("#stats-btn").on("click", function () {
    OPEN_MENU("STATS");
  });
  $("#leaderboard-btn").on("click", function () {
    OPEN_MENU("LEADERBOARD");
  });
  $("#settings-btn").on("click", function () {
    OPEN_MENU("SETTINGS");
  });
  $("#discord-btn").on("click", function () {
    window.open('https://discordapp.com/invite/SBuYeHh', '_blank');
  });
  $("#discord-btn2").on("click", function () {
    window.open('https://discordapp.com/invite/SBuYeHh', '_blank');
  });
  $("#AlertToggle").on("click", function () {
    if (Game.config[0] == 0) Game.config[0] = 1; else Game.config[0] = 0;
    UpdateGame();
  });
  $("#AlertToggle2").on("click", function () {
    if (Game.config[1] == 0) Game.config[1] = 1; else Game.config[1] = 0;
    UpdateGame();
  });
  $("#SkipRewards").on("click", function () {
    if (Game.config[2] == 0) Game.config[2] = 1; else Game.config[2] = 0;
    UpdateGame();
  });
  $("#AutoMissions").on("click", function () {
    if (Game.config[3] == 0) Game.config[3] = 1; else Game.config[3] = 0;
    UpdateGame();
  });
  $("#OnlyMyVersion").on("click", function () {
    if (Game.config[4] == 0) Game.config[4] = 1; else Game.config[4] = 0;
    ReadDB();
    UpdateGame();
  });
  $("#RM1").on("click", function () {
    if (Game.AutoRemove[0] == 0) Game.AutoRemove[0] = 1; else Game.AutoRemove[0] = 0;
    UpdateUI();
  });
  $("#RM2").on("click", function () {
    if (Game.AutoRemove[1] == 0) Game.AutoRemove[1] = 1; else Game.AutoRemove[1] = 0;
    UpdateUI();
  });
  $("#RM3").on("click", function () {
    if (Game.AutoRemove[2] == 0) Game.AutoRemove[2] = 1; else Game.AutoRemove[2] = 0;
    UpdateUI();
  });
  $("#RM4").on("click", function () {
    if (Game.AutoRemove[3] == 0) Game.AutoRemove[3] = 1; else Game.AutoRemove[3] = 0;
    UpdateUI();
  });
  $("#RM5").on("click", function () {
    if (Game.AutoRemove[4] == 0) Game.AutoRemove[4] = 1; else Game.AutoRemove[4] = 0;
    UpdateUI();
  });
  $("#RM6").on("click", function () {
    if (Game.AutoRemove[5] == 0) Game.AutoRemove[5] = 1; else Game.AutoRemove[5] = 0;
    UpdateUI();
  });
  $("#redNum").change(function () {
    if ($("#redNum").val() < 0) {
      $("#redNum").val("0");
    }
    $("#red").val($("#redNum").val());
    document.documentElement.style.setProperty('--temp1', "rgb(" + $("#redNum").val() + ", 0, 0)");
  });
  $("#red").change(function () {
    $("#redNum").val($("#red").val());
    document.documentElement.style.setProperty('--temp1', "rgb(" + $("#red").val() + ", 0, 0)");
  });
  $("#greenNum").change(function () {
    if ($("#greenNum").val() < 0) {
      $("#greenNum").val("0");
    }
    $("#green").val($("#greenNum").val());
    document.documentElement.style.setProperty('--temp2', "rgb(0, " + $("#greenNum").val() + ", 0)");

  });
  $("#green").change(function () {
    $("#greenNum").val($("#green").val());
    document.documentElement.style.setProperty('--temp2', "rgb(0, " + $("#green").val() + ", 0)");
  });
  $("#blueNum").change(function () {
    if ($("blueNum").val() < 0) {
      $("#blueNum").val("0");
    }
    $("#blue").val($("#blueNum").val());
    document.documentElement.style.setProperty('--temp3', "rgb(0, 0, " + $("#blueNum").val() + ")");
  });
  $("#blue").change(function () {
    $("#blueNum").val($("#blue").val());
    document.documentElement.style.setProperty('--temp3', "rgb(0, 0, " + $("#blue").val() + ")");
  });
}

function hideModals() {
  for (var id = 1; id < 10; id++) {
    ReadDB();
    $("#modal-" + id).modal("hide");
  }
}

function NOTIFY(title, message) {
  $("#message-title").html(title);
  $("#message-text").html(message);
  $("#modal-1").modal("setting", "closable", false).modal("show");
}

function GetEnemyHPPercent() {
  var value = (100 / Game.Enemy[4]) * Game.Enemy[5];
  if (value < 1) value = 1;
  if (value > 100) value = 100;
  return value;
}

function GetPlayerHPPercent() {
  var value = (100 / APP.CoreBaseLife) * APP.CoreLife;
  if (value < 1) value = 1;
  if (value > 100) value = 100;
  return value;
}

function GetEXPPercent() {
  value = (100 * (Game.xp[0] - CalcEXP(Game.Level - 1))) / (CalcEXP(Game.Level) - CalcEXP(Game.Level - 1));
  if (value < 1) value = 1;
  if (value > 100) value = 100;
  if (value > 99 && Game.xp[0] < Game.xp[1]) value = 99;
  return value;
}

//THEME FUNCTIONS

function ResetTheme(code) {
  if (code != 2) Game.Theme = "#00ffff";
  document.documentElement.style.setProperty('--green', Game.Theme);
  if (code == 1) save();
}

function ThemeDefine(id) {
  Game.Theme = "#" + fullColorHex($(red).val(), $(green).val(), $(blue).val());
  document.documentElement.style.setProperty('--green', Game.Theme);
  UpdateGame();
}

//GAME FUNCTIONS

function ChangeAvatar() {
  if (Game.Avatar < 39) Game.Avatar++; else Game.Avatar = 1;
  UpdateUI();
}

function CheckCode(debug) {
  CXD = firebase.database().ref("codes");
  CXD.on("child_added", function (code) {
    APP.codes[code.key] = code.val();
  });
  var code = $("#promocode").val();
  if (code != null) {
    if (code === APP.codes[1] || code === APP.codes[2] || code === APP.codes[3] || code === APP.codes[4] || code === APP.codes[5] || code === APP.codes[6] || code === APP.codes[7] || code === APP.codes[8] || code === APP.codes[9] || code === APP.codes[10]) {
      if (code === APP.codes[1]) {
        $("#codereturn").html("Code Accepted, name change.");
        NewUserData(Game.username);
      }
      if (code === APP.codes[2]) {
        $("#codereturn").html("Code Accepted, raising all Armor slots by 1.");
        for (var UPC = 0; UPC < 4; UPC++) {
          Game.MaxUPC[UPC]++;
        }
      }
      if (code === APP.codes[3]) {
        $("#codereturn").html("Code Accepted, you are now at max level.");
        Game.Level = APP.MaxLevel;
      }
      if (code === APP.codes[4]) {
        $("#codereturn").html("Code Accepted, you just advanced to </i> <i class='globe icon'></i>" + (Game.Simulation + 1));
        Game.Level = APP.MaxLevel;
        Game.Armors[1][4] = APP.MaxScore;
        Game.Armors[2][4] = APP.MaxScore;
        Game.Armors[3][4] = APP.MaxScore;
        Game.Armors[4][4] = APP.MaxScore;
        Game.Weapons.Main[3] = APP.MaxScore;
        Game.Weapons.Special[3] = APP.MaxScore;
        ChangeWT();
      }
      if (code === APP.codes[5]) {
        if (Game.Simulation > 1) {
          $("#codereturn").html("Code Accepted, you just lowered to <i class='globe icon'></i> " + (Game.Simulation - 1));
          Game.Simulation--;
        } else {
          invalidCode(3);
        }
      }
      if (code === APP.codes[6]) {
        $("#codereturn").html("Code Accepted, save exported to your clipboard.");
        exportSave();
      }
      if (code === APP.codes[7]) {
        $("#codereturn").html("Code Accepted, external save imported to your current save.");
        importSave();
      }
      if (code === APP.codes[8]) {
        $("#codereturn").html("Code Accepted, cloud save done.");
        writeUserData();
        APP.lastCloudSave = 0;
      }
      if (code === APP.codes[9]) {
        $("#codereturn").html("Code Accepted, Finished the story.");
        Game.Level = APP.MaxLevel;
        Game.Armors[1][4] = APP.MaxScore;
        Game.Armors[2][4] = APP.MaxScore;
        Game.Armors[3][4] = APP.MaxScore;
        Game.Armors[4][4] = APP.MaxScore;
        Game.Weapons.Main[3] = APP.MaxScore;
        Game.Weapons.Special[3] = APP.MaxScore;
        Game.MissionStarted = [false, 0, 0, 0];
        for (var Mission in Missions) { Game.MissionsCompleted[Mission] = 1; }
      }
      if (code === APP.codes[10]) {
        $("#codereturn").html("Code Accepted, Reset save.");
        Game.username = "Default";
        Backup = "Default";
        save();
        confirmReset();
      }
    } else {
      if (debug != 1) {
        CheckCode(1);
      }
      invalidCode(1);
    }
  } else {
    invalidCode(2);
  }
  APP.codes = [];
  UpdateGame();
}

function invalidCode(error) {
  $("#codereturn").html("Invalid code ! (error " + error + ")");
}

function TOP10() {
  MAXVIEW = 10;
  MINVIEW = 1;
  PAGE = 1;
  UpdateUI();
  ReadDB();
}

function TOPPREVIOUS() {
  if (MAXVIEW > 10) {
    MAXVIEW -= 10;
    MINVIEW -= 10;
    PAGE--;
    UpdateUI();
    ReadDB();
  }
}

function TOPNEXT() {
  if (MAXVIEW + 1 <= LastId) {
    if (MAXVIEW < 10000) {
      MAXVIEW += 10;
      MINVIEW += 10;
      PAGE++;
      UpdateUI();
      ReadDB();
    }
  } else {
    UpdateUI();
  }
}

function helpScore() {
  NOTIFY("Score Tutorial", "1) It's worked out from the Armors you have, so try to pick the Armors that gets you the highest score possible. That way you'll progress through the Dimensions much faster, even if you take a slight hit on your stats. <br><br>2) Your total armor dictates the score for the loot that drops.<br><br>3) Your score is limited by your actual dimension and the maximum score can be seen in the statistics.");
}

function DCancel() {
  $('#modal-2').modal('hide');
}

function hideMenus() {
  $("#DIV-COMBAT").hide();
  $("#DIV-PRESTIGE").hide();
  $("#DIV-STATS").hide();
  $("#DIV-LEADERBOARD").hide();
  $("#DIV-SETTINGS").hide();
  $(".BUTTONS_ACTIONS").hide();
}

function SelectTAB(TAB) {
  let TABS = [["EXPLORE", "exploration-btn"], ["MISSIONS", "missions-btn"]];
  for (let T in TABS) {
    if (TABS[T][0] != TAB) { $("#DIV-" + TABS[T][0]).hide(); $("#" + TABS[T][1]).removeClass("active"); }
    else { $("#DIV-" + TABS[T][0]).show(); $("#" + TABS[T][1]).addClass("active"); }
  }
}

function OPEN_MENU(MENU) {
  let MENUS = ["INVENTORY", "PRESTIGE", "STATS", "LEADERBOARD", "SETTINGS"];
  let BUTTONS = ["inventory-btn", "prestige-btn", "stats-btn", "leaderboard-btn", "settings-btn"];

  for (let M in MENUS) {
    if (MENUS[M] != MENU) {
      $("#DIV-" + MENUS[M]).hide();
      $("#" + BUTTONS[M]).removeClass("active");
    } else {
      if ($("#DIV-" + MENU).is(":visible")) {
        $("#DIV-" + MENU).hide();
        $("#" + BUTTONS[M]).removeClass("active");
        $("#DIV-COMBAT").show();
        $(".BUTTONS_ACTIONS").show();
      } else {
        $("#DIV-" + MENU).show();
        $("#" + BUTTONS[M]).addClass("active");
        $("#DIV-COMBAT").hide();
        $(".BUTTONS_ACTIONS").hide();
      }
    }
  }
  TOP10();
  UpdateGame();
}

function CLOSE_MENUS() {
  let MENUS = ["INVENTORY", "PRESTIGE", "STATS", "LEADERBOARD", "SETTINGS"];
  let BUTTONS = ["inventory-btn", "prestige-btn", "stats-btn", "leaderboard-btn", "settings-btn"];
  for (let M in MENUS) {
    $("#DIV-" + MENUS[M]).hide();
    $("#" + BUTTONS[M]).removeClass("active");
  }
  $("#DIV-COMBAT").show();
  $(".BUTTONS_ACTIONS").show();
}

function GenExplorationMenu() {
  $("#DIV-EXPLORE").html("");
  let QUALITIES = ["Normal", "Common", "Uncommon", "Rare", "Epic", "Exotic", "Divine"];
  let BTN = "";
  let LEVEL = "";
  for (var E in POS) {
    let QUALITY = QUALITIES[POS[E][3]];
    var MINLEVEL = Game.Level >= POS[E][1] ? "<span class='green'>" + POS[E][1] + "</span>" : "<span class='rouge'>" + POS[E][1] + "</span>";
    var MAXLEVEL = Game.Level >= POS[E][2] ? "<span class='green'>" + POS[E][2] + "</span>" : "<span class='rouge'>" + POS[E][2] + "</span>";
    var UNLOCKED = Game.Level >= POS[E][1] ? "bold" : "rouge bold";
    if (Game.MissionsCompleted[POS[E][4]] == 0) UNLOCKED = "rouge bold";
    var UNLOCKTEXT = Game.MissionsCompleted[POS[E][4]] == 1 ? "<span class='green'>" + Missions[POS[E][4]][0] + " - Finished</span>" : "<span class='rouge'>" + Missions[POS[E][4]][0] + " - Unfinished</span>";


    if (APP.ScoreModeEnabled == 0) {
      LEVEL = MINLEVEL + "-" + MAXLEVEL;
    } else {
      LEVEL = "<span class='green'>" + APP.MaxLevel + "</span>";
      QUALITY = "Divine";
    }
    if (Game.MissionsCompleted[POS[E][4]] == 1) BTN = "<div class='fluid ui right floated icon rainbow button' onclick='explore(" + E + ");' >Travel <i class='" + UNLOCKED + " right arrow icon'></i></div>"; else BTN = "";
    if (Game.MissionStarted[0] || Game.Location == E) BTN = "";

    if (POS[E][1] < Game.Level + 1 && E != 11 && E != 17) {

      let CONTENT = ("<div class='ui grid modified'><div class='sixteen wide column'><h3 class='ui left floated header text2'><span class='" + UNLOCKED + "'>" + POS[E][0] + "</span> - Lv. " + LEVEL + "</h3></div>\
<div class='eight wide column'><i class='fas fa-ballot-check icon'></i> " + UNLOCKTEXT + "<br>\
<i class='fas fa-sack icon'></i> <span class='" + QUALITY + "'>" + QUALITY + "</span>\
</div><div class='eight wide column'>" + BTN + "</div></div></div>");

      $("#DIV-EXPLORE").append(CONTENT);
    }
  }
}

function GenMissions() {
  $("#MissionsList").html("");
  $("#MissionsList2").html("");
  $("#MissionsCPL").html("");
  let TYPE = "";
  let LEVEL = "";
  let BTN = "";
  let Status = Game.MissionsCompleted[M] == 1 ? "<span class='green'>Complete</span>" : "<span class='rouge'>Incomplete</span>";
  for (var M in Missions) {
    if (Missions[M][6] == 0) { TYPE = "Armor or Weapon"; LEVEL = ""; }
    if (Missions[M][6] == 1) { TYPE = "Gem"; LEVEL = ""; }
    if (Missions[M][6] == 2) { TYPE = "Relic"; }
    let QUALITY = "1 <span class='" + Missions[M][7] + "'>" + Missions[M][7] + "</span>";
    var UNLOCKED = Game.Level >= Missions[M][2] ? "green" : "red";
    if (Game.MissionStarted[0] == true) {
      BTN = "";
      if (Game.MissionStarted[1] == M) {
        Status = "<span class='green'>In Progress</span>";
        BTN = "";
      }
    }
    else { BTN = "<br><div class='fluid ui icon rainbow button' onclick='mission(" + M + ");' >Launch <i class='" + UNLOCKED + " right arrow icon'></i></div>"; }
    if (Game.MissionStarted[0] == true && Game.MissionStarted[1] == M && Game.MissionsCompleted[M] == 0) {
      Status = "<span class='jaune'>In Progress</span>";
      BTN = "<br><div class='fluid ui icon rainbow button' onclick='ResetMission();' >Cancel mission <i class='green right arrow icon'></i></div>";
    }
    if (Game.MissionStarted[0] == true && Game.MissionsCompleted[M] == 1 && Missions[M][3] != 2) {
      BTN = "<br><div class='fluid ui icon rainbow button' onclick='MissionStory(" + M + ");' >Story <i class='green right arrow icon'></i></div>";
    }
    var REQLEVEL = Game.Level >= Missions[M][2] ? "<span class='green'>" + Missions[M][2] + "</span>" : "<span class='rouge'>" + Missions[M][2] + "</span>";

    if (Missions[M][3] != 2) {
      if (Game.MissionsCompleted[Missions[M][9]] == 1 || Missions[M][9] == -1) {
        var DESCRIPTION = Game.MissionsCompleted[M] == 0 ? "<div class='ui segment'>" + "Level Required : " + REQLEVEL + "<br><div class='ui green label'><span class='jaune'>" + fix(Missions[M][5], 3) + "</span> EXP<br>" + QUALITY + " " + TYPE + LEVEL + "</div></div>" : "<div class='ui segment'>Level : " + REQLEVEL + "</div>";
        let CONTENT =
          "<div class='ui grid modified'><div class='sixteen wide column'><h3 class='ui left floated header text2 " + UNLOCKED + "'>" + Missions[M][0] + "</h3></div>\
          <div class='eight wide column'>" + DESCRIPTION + "</div>\
          <div class='eight wide column'>Status : " + Status + BTN + "</div></div>";

        if (Game.MissionsCompleted[M] == 0) $("#MissionsList").append(CONTENT);
        if (Game.MissionsCompleted[M] == 1) $("#MissionsCPL").append(CONTENT);
      }
    }

    if (Missions[M][2] <= Game.Level && Missions[M][3] == 2) {
      let FRG = Missions[M][5] > 0 ? "<br> - <i class='bleu dna icon'></i>" + fix(Missions[M][5], 3) + " Fragments" : "";
      if (Game.MissionsCompleted[Missions[M][9]] == 1 || Missions[M][9] == -1) {
        let CONTENT = "<div class='ui grid modified'><div class='sixteen wide column'><h3 class='ui left floated header text2 " + UNLOCKED + "'>" + Missions[M][0] + "</h3></div>\
          <div class='eight wide column'>Level Required : " + REQLEVEL + "<br><div class='ui green label'> " + FRG + " <br> - " + QUALITY + " " + TYPE + LEVEL + "</div></div>\
          <div class='eight wide column'>" + BTN + "</div></div>";

        $("#MissionsList2").append(CONTENT);
      }
    }
  }
}

function ResetMission() {
  if (Game.MissionStarted[0] == true) {
    Game.MissionStarted = [false, 0, 0, 0, 0];
    $("#DIV-COMBAT").show();
    Game.config[3] = 0;
    $("#AutoMissions").checkbox("uncheck");
    NOTIFY("Mission Canceled", "You can restart this mission in the 'mission' menu.<br>- Auto start mission <span class='rouge'>disabled</span>.");
    if (Game.Location > 0) Game.Location--;
    UpdateGame();
    GenMissions();
  }
}

function MissionStory(id) {
  NOTIFY("Mission Story", Missions[id][1]);
}

function mission(id) {
  if (!Game.MissionStarted[0] && Game.Level >= Missions[id][2]) {
    Game.MissionStarted = [true, id, 0, 0, 0];
    Game.isInFight = 0;
    CLOSE_MENUS();
    GenMissions();
    NOTIFY("Mission Story", Missions[id][1]);
    UpdateGame();
  }
}
let TSK = 0;
function CompleteMission() {
  var TIER = "";
  var TIERRANK = "";
  var LEVELUP = "";
  let LOOTS = "";
  if (Game.MissionStarted[0] == true && Game.isInFight == 1) {
    if (Missions[Game.MissionStarted[1]][3] == 1 || Missions[Game.MissionStarted[1]][3] == 2) {
      if (Game.MissionStarted[2] >= Missions[Game.MissionStarted[1]][4]) {
        Game.isInFight = 2;
        Game.MissionStarted[4] = 1;
        TSK = 1;

        if (Game.Level < APP.MaxLevel) {
          Game.xp[0] += Missions[Game.MissionStarted[1]][5];
          if (Game.xp[0] >= Game.xp[1]) {
            Game.xp[0] -= Game.xp[1];
            Game.Level++;
            UpdateUI();
            LEVELUP = "<font class='bleu'>LEVEL UP ! (<span class='blanc'>" + Game.Level + "</span>)</font><br>";
          }
        }

        if (Missions[Game.MissionStarted[1]][6] == 0) {//CORE REWARD
          if (Game.MissionStarted[3] == 0) {
            if (Game.MissionStarted[0] == true) {
              newItem(0, APP.Ranking, Missions[Game.MissionStarted[1]][7]);
              Game.MissionStarted[3] = 1;
            } else {
              newItem(0, Game.Level, Missions[Game.MissionStarted[1]][7]);
              Game.MissionStarted[3] = 1;
            }
          }
          if (APP.ScoreModeEnabled == 0) {
            TIER = "Level";
            TIERRANK = Game.inventory[Game.inventory.length - 1].level;
          } else {
            TIER = "Score";
            TIERRANK = "<i class='fad fa-dice-d20'></i>" + Math.floor(Game.inventory[Game.inventory.length - 1].level * 10);
          }
          let UPS = Game.inventory[Game.inventory.length - 1].ups > 0 ? "" + Game.inventory[Game.inventory.length - 1].ups + "<i class='orange fad fa-gem'></i>" : "";
          let LOOTCONTENT = Game.inventory[Game.inventory.length - 1].id == 4 ? "<i class='bleu fas fa-sword revertmargin'></i>" + fix(Game.inventory[Game.inventory.length - 1].power, 5) : "<i class='rouge fas fa-heart revertmargin'></i>" + fix(Game.inventory[Game.inventory.length - 1].life, 5);
          LOOTS = "<div class='ui comments'><div class='comment " + Game.inventory[Game.inventory.length - 1].class + "-Core'><div class='Bar-" + Game.inventory[Game.inventory.length - 1].class + "'></div><div class='statistic GS'><div class='value'>" + TIER + "</div><div class='label'> " + TIERRANK + "</div></div>" + Game.inventory[Game.inventory.length - 1].name + "<span class='" + Game.inventory[Game.inventory.length - 1].class + "'> " + UPS + "</span><br><span class='" + Game.inventory[Game.inventory.length - 1].class + "'> " + Game.inventory[Game.inventory.length - 1].class + " </span><br>" + LOOTCONTENT + "</div></div>";
        }
        if (Missions[Game.MissionStarted[1]][6] == 2) {//RELIC REWARD 
          if (Game.MissionStarted[3] == 0) {
            if (Game.MissionStarted[0] == true && Missions[Game.MissionStarted[1]][3] == 2) {
              newItem("Relic", null, Missions[Game.MissionStarted[1]][7]);
              Game.MissionStarted[3] = 1;
            } else {
              newItem("Relic", null, Missions[Game.MissionStarted[1]][7]);
              Game.MissionStarted[3] = 1;
            }
          }
        }

        let TITLE = Missions[Game.MissionStarted[1]][3] == 2 ? "<span class='vert'>Fortress cleared !</span>" : "<span class='vert'>Successfully completed the mission !</span>";
        let FRAGMENTS_REWARDS = Missions[Game.MissionStarted[1]][5] > 0 ? "+<i class='bleu dna icon'></i><span class='bleu bold'>" + fix(Missions[Game.MissionStarted[1]][5], 3) + "</span> Fragments " : "";
        let DESCRIPTION = Missions[Game.MissionStarted[1]][3] == 2 ? LEVELUP + FRAGMENTS_REWARDS : LEVELUP + "+<span class='vert bold'>" + fix(Math.floor(Missions[Game.MissionStarted[1]][5]), 5) + "</span> EXP ";

        if (Missions[Game.MissionStarted[1]][6] == 2) {
          let ITEMID = Game.inventory.length - 1;
          let DESCRIPTIONS = ["-", "Power bonus of " + fix(Game.inventory[ITEMID].bonus, 9), "Life bonus of " + fix(Game.inventory[ITEMID].bonus, 9), "Max Score +" + fix(Game.inventory[ITEMID].bonus, 3), "Minimal drop quality <span class='" + Game.inventory[ITEMID].bonus + "'>" + Game.inventory[ITEMID].bonus + "</span>"];
          LOOTS = "<div class='ui comments'><div class='comment " + Game.inventory[ITEMID].class + "-Core'><div class='Bar-" + Game.inventory[ITEMID].class + "'></div>" + Game.inventory[ITEMID].name + "<br><span class='" + (Game.inventory[ITEMID].class) + "' id='" + ITEMID + "'> " + (Game.inventory[ITEMID].class) + "</span><br>" + DESCRIPTIONS[Game.inventory[ITEMID].object] + "</div></div>";
        }

        NOTIFY(TITLE, DESCRIPTION + LOOTS);
        hideMissionRewards();

      }
    }
  }
}

function hideMissionRewards() {
  if (Game.config[0] == 1) $("#modal-4").modal("hide");
  if (TSK == 1) {
    Game.MissionsCompleted[Game.MissionStarted[1]] = 1;
    if (Missions[Game.MissionStarted[1]][3] == 2) { Game.FP++; Game.Shards += Missions[Game.MissionStarted[1]][5]; }
    Game.MissionStarted = [false, 0, 0, 0, 0];
    TSK = 0;
  }
  Game.isInFight = 0;
  UpdateGame();
}

function hideRewards() {
  if (Game.config[0] == 1) $("#modal-4").modal("hide");
  Game.isInFight = 0;
  UpdateGame();
  CompleteMission();
}

function explore(loc) {
  if (POS[loc][1] <= Game.Level && !Game.MissionStarted[0]) {
    if (Game.MissionsCompleted[POS[loc][4]] == 1) {
      Game.Location = loc;
      Game.isInFight = 0;
      Game.LastEscape = 30;
      GenExplorationMenu();
      UpdateGame();
    }
  }
}

function UpdatePage() {
  location.reload();
}

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) hex = "0" + hex;
  if (hex == 0) hex = "00";
  return hex;
}

function fullColorHex(r, g, b) {
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red + green + blue;
}

function CalcEXP(level) {
  let exp = (level * 25) + (500 * (level / 3.5));
  for (T = 0; T < (level + 1); T++) {
    if (T < 30) exp += exp * (15 / 100); else exp += exp * (25 / 100);
  }
  if (level <= 0) exp = 0;
  if (level == 1) exp = 100;
  return Math.round(exp);
}

function ErrorArmor(ARM) {
  if (ARM < 5) {
    Game.Armors[ARM] = [true, "Error", "Error", 100, 1, 0];
    Game.ArmorUpgrades[ARM] = 0;
    Game.MaxUPC[ARM - 1] = 0;
  } else {
    if (ARM == 5) Game.Weapons.Main = ["Error", "Error", 0, 1, 10];
    if (ARM == 6) Game.Weapons.Special = ["Error", "Error", 0, 1, 10];
  }
  UpdateGame();
}

function ChangeStep(type) {
  //0 = BACK & 1 = NEXT
  if (type == 0 && APP.WelcomeData[0] > 1) APP.WelcomeData[0]--;
  if (type == 1) APP.WelcomeData[0]++;

  for (var L = 1; L < 6; L++) {
    $("#step" + L).attr("class", "step");
    $("#tutorial-" + L).hide();
  }

  for (var L2 = 1; L2 < APP.WelcomeData[0] + 1; L2++) {
    $("#step" + L2).attr("class", "completed step");
  }
  $("#step" + APP.WelcomeData[0]).attr("class", "active step");
  $("#tutorial-" + APP.WelcomeData[0]).show();
  if (APP.WelcomeData[0] > 1) { $("#WelcomePrevious").show(); } else { $("#WelcomePrevious").hide(); }
}

function WelcomeNext() {

  if (APP.WelcomeData[0] == 5) {
    $("#GAME").show();
    $("#STARTING-DIV").hide();
    $(".footer").show();
    if (Game.username == "Default") Game.username = APP.WelcomeData[1];
    Game.isInFight = 0;
    GetWBcontent("firstlogin");
    save();
  }

  if (APP.WelcomeData[0] == 4) {
    if (APP.WelcomeData[2] == "Warrior") Game.Upgrades = [0, 5, 0];
    if (APP.WelcomeData[2] == "Paladin") Game.Upgrades = [0, 0, 5];
    if (APP.WelcomeData[2] == "Ninja") Game.Upgrades = [5, 0, 0];
    if (APP.WelcomeData[2] != "Warrior" && APP.WelcomeData[2] != "Paladin" && APP.WelcomeData[2] != "Ninja") { $("#namehelp").html("You need to select a class !"); } else {
      ChangeStep(1);
      Game.class = APP.WelcomeData[2];
      $("#namehelp").html("");
      $("#WelcomeName").html(APP.WelcomeData[1]);
      $("#WelcomeName").html("<img class='ui avatar image' src='DATA/avatars/avatar" + Game.Avatar + ".jpg'><span>" + APP.WelcomeData[1] + "<div class='ui horizontal label'>Level 1</div></span>");
      $("#WelcomeClass").html("Class : " + APP.WelcomeData[2]);
      $("#WelcomeNext").html("Start <i class='right arrow icon'></i>");
    }
  }

  if (APP.WelcomeData[0] == 3) ChangeStep(1);

  if (APP.WelcomeData[0] == 2) {
    NICKNAME = $("#PlayerName").val();
    if (NICKNAME != null) {
      if (NICKNAME == null || NICKNAME == "" || NICKNAME == " " || NICKNAME == "_" || NICKNAME.length < 3 || NICKNAME == "null") {
        ErrorName();
      } else {
        NICKNAME = NICKNAME.replace(/[^a-zA-Z0-9]/g, '_');
        if (NICKNAME == "Neo" || NICKNAME == "NEO" || NICKNAME == "neo" || NICKNAME == "GoldenLys" || NICKNAME == "Purpy" || NICKNAME == "Purple" || NICKNAME == "Purple_Wizard") NICKNAME = "Adventurer" + random(10000, 999999);
        Backup = APP.WelcomeData[1] = NICKNAME;
        ChangeStep(1);
        $("#namehelp").html("");
      }
    } else {
      ErrorName();
    }
  }
  if (APP.WelcomeData[0] == 1) ChangeStep(1);
}

function ErrorName() {
  $("#namehelp").html("You need to write a username !");
}

function GetLevelRequired() {
  if (Game.Level >= 1 && Game.Level < 10) value = 10;
  if (Game.Level >= 10 && Game.Level < 20) value = 20;
  if (Game.Level >= 20 && Game.Level < 30) value = 30;
  if (Game.Level >= 30) value = 0;
  return value;
}

function RemoveItem(id) {
  if (id < Game.MaxInv) {
    Game.inventory[id].id = 0;
    if (id >= Game.inventory.length) Game.inventory.splice(id - 1, 1); else Game.inventory.splice(id, 1);
  } else Game.inventory.splice(id, 1);
  GenInventory();
  UpdateGame();
}

function SendStats() {
  save();
  if (APP.LoggedIn == 1) writeUserData();
  APP.lastCloudSave = 0;
}
