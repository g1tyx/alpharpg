/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Green': '绿色',
    'height': '高度',
    'Action': '动作',
    //    'AlphaRPG': '阿尔法RPG',
    'Attack': '攻击',
    'Mission': '任务',
    'Missions': '任务',
    'Missions Completed': '完成的任务',
    'Normal': '普通',
    'Level': '等级',
    'Menu': '菜单',
    'No': '不',
    'Theme': '主题',
    'Username': '用户名',
    'Uncommon': '稀有',
    'Purple Wizard#': '紫精灵#',
    'Ranking': '排行榜',
    'Rare': '罕见',
    'Ratio (K/D': '比率 (K/D',
    'Red': '红色',
    'Refresh': '刷新',
    'Render': '渲染',
    'renderer': '渲染器',
    'Run Away': '逃跑',
    'Score Required': '需要评分',
    'Select an avatar': '选择一个头像',
    'Set menus': '设置菜单',
    'Set text': '设置文字',
    'Set theme': '设置主题',
    'Settings': '设置',
    'Settings': '设置',
    'Skip Rewards': '跳过奖励',
    'slices': '碎片',
    'SPACE': '空间',
    'Special thanks to': '特别感谢',
    'Start': '开始',
    'Statistics': '统计',
    'Story completed': '已完成故事',
    'Take cover': '掩护',
    'The Black Portal': '黑传送门',
    'The Corrupted Fortress': '腐败的堡垒',
    'The Corrupted World': '腐败的世界',
    'The Dark Cave': '黑暗洞穴',
    'The Endless Mountain': '无尽的山脉',
    'The Immortal Bridge': '仙桥',
    'The Lost Path': '失落之路',
    'The Red Portal': '红传送门',
    'The Red River': '红河',
    'The Shadow Forest': '森林阴影','The White Light': '白光',
    'theme color': '主题颜色',
    'Time Played': '游戏时间',
    'Tiwaz': '提瓦兹',
    'Top': '顶部',
    'TOP': '顶部',
    'Total Deaths': '累计死亡',
    'Total Kills': '累计杀死',
    'Type "Neo" to generate a random name.': '键入“Neo”以生成随机名称。',
    'Vampire Castle': '吸血鬼城堡',
    'Vampire Manor': '吸血鬼庄园',
    'webgl': '图形库',
    'width': '宽度',
    'Kill': '杀死',
    'Keys': '快捷键',
    'Relics': '圣遗物',
    'AlphaRPG by Purple Wizard': '阿尔法RPG作者 Purple Wizard',
    'AlphaRPG Discord': '阿尔法RPG Discord',
    'AlphaRPG v': '阿尔法RPG v',
    'ambient': '环境',
    'Armor': '护甲',
    'Auto remove': '自动移除',
    'Auto-Start Missions': '自动开始任务',
    'Black Spirit': '黑精灵',
    'Blue': '蓝色',
    'canvas': '画布',
    'Central V': '中央山谷',
    'Check code': '检查代码',
    'Close': '关闭',
    'Code': '代码',
    'Common': '一般',
    'Confirm change core': '确认更改核心',
    'Confirm change Relic': '确认更改圣遗物',
    'Confirm reset': '确认重置',
    'count': '数量',
    ' Life': '生命',
    ' Weapon': '武器',
    ' Helmet': '头盔',
    ' Armor': '盔甲',
    ' Sword': '剑',
    'Current Dimension': '当前维度',
    'Current Level': '当前等级',
    'Current light': '当前光',
    'Current Power': '当前力量',
    'Current Score': '当前评分',
    'Current value': '当前值',
    'Default': '默认',
    'Delete the save': '删除存档',
    'Destroy core confirmation': '破坏核心确认',
    'Difficulty': '难度',
    'diffuse': '扩散',
    'Dimension': '维度',
    'Dimension': '维度',
    'dimensional fragments available.': '维度碎片可用。',
    'Dimensional Rift': '维度裂缝',
    'Distance': '距离',
    'Do you really want to reset all your stats ?': '你真的想重置你的所有统计数据吗？',
    'Elysia City': '爱丽舍城',
    'Empire Road': '帝国之路',
    'Epic': '史诗',
    'Exotic': '传说',
    'Divine': '神圣',
    'EXP Multiplier': '经验加成倍数',
    'Exploration': '探索',
    'Exploration': '探索',
    'Export': '导出',
    'export big': '导出大',
    'Export save': '导出存档',
    'Export theme': '导出主题',
    'export this': '导出这个',
    'For each dimension: +50 max tier score, 3% more EXP, +2 inventory slots': '每个维度:+50个最高等级，3%的经验，+2个仓库位',
    'Fortresses': '堡垒',
    'Fortresses defeated': '堡垒被击溃',
    'Fragments reward': '碎片奖励',
    'Galarius City': '加拉留斯城',
    'Game Version': '游戏版本',
    'General': '常规',
    'GOD': '上帝',
    'Hide older versions players': '隐藏旧版播放器',
    'Identification': '鉴定',
    'If you have a promotional code, write it here.': '如果您有促销代码，请在此处填写。',
    'Imperium City': '帝国城',
    'Import save': '导入存档',
    'Import theme': '导入主题',
    'in the settings.': '在设置里。',
    'INFO': '信息',
    'Informations': '信息',
    'Inventory': '仓库',
    '(+5% Armor)': '(+5% 装甲)',
    '(+5% Damages)': '(+5% 伤害)',
    'Yes': '是的',
    'Welcome': '欢迎',
    'Weapons': '武器',
    'Throw': '扔',
    'Shield': '盾牌',
    'Shield stats': '盾牌属性',
    'Set theme color': '设置主题颜色',
    'Promotional Codes': '促销代码',
    'Price': '价格',
    'there are also powerful monsters named': '也有强大的怪物被命名',
    'Warriors are the frontlines in a fight, they deal the most damages': '战士是战斗的前线，他们造成的伤害最大',
    'Destroy': '摧毁',
    'Upgrade': '升级',
    'Killed': '杀死的',
    'Equipped armors': '已装备护甲',
    'Armors': '护甲',
    'Name': '名称',
    'Missions': '任务',
    'so you need to fight wisely to deal with them.': '所以你需要明智地对抗它们。',
    'Special Weapon': '特殊武器',
    'The main goal of this game is to fight enemies and progress through the story to gain': '这款游戏的主要目标是通过对抗敌人和通过故事取得进展',
    'You will discover a new world named Alpha, with cities & monsters, but be careful,': '你会发现一个名为阿尔法的新世界，里面有城市和怪物，但是要小心，',
    'You will lose this item.': '你将失去这个物品。',
    'You will lose your current equipment.': '你会失去你目前的装备。',
    'Huge thanks to': '非常感谢',
    'EXPERIENCE': '经验',
    'EQUIPMENTS': '装备',
    'Equipment Level': '装备等级',
    'Do you really want to go inside the rift ?': '你真的想走进裂谷吗？',
    'Defeat': '打败',
    'Current Damages': '当前伤害',
    'Current Base Armor': '当前基础护甲',
    'Main Weapon': '主武器',
    'Message': '消息',
    'Misc': '杂项',
    'New': '新',
    'Next': '下一个',
    'none': '无',
    'Old': '旧',
    'Previous': '上一个',
    'Avatar': '头像',
    'Avatar Selection': '头像选择',
    'Boots': '靴子',
    'Boots stats': '靴子属性',
    'Change avatar': '更换头像',
    'Choosing a class': '选择一个职业',
    'Choosing a username': '选择一个用户名',
    'Choosing an avatar': '选择一个头像',
    'Also, if you have any question, don\'t hesitate to join our': '另外，如果您有任何疑问，请随时加入我们',
    'Armor Multiplier': '护甲加成',
    'Armor stats': '护甲属性',
    'and': '和',
    'Class Selection': '职业选项',
    'Gems': '宝石',
    'Kills': '杀死',
    'Locations': '位置',
    'Name Selection': '名称选择',
    'Choose this class': '选择职业',
    'Helmet stats': '头盔属性',
    'Hi': '嗨',
    'Introduction': '介绍',
    'Not Yet': '暂无',
    'PAGE': '页',
    'Power': '力量',
    'Paladin': '圣骑士',
    'Ninja': '忍者',
    'Warrior': '战士',
    'Paladins are fighting for justice, they protect the weaks with their shield.': '圣骑士为正义而战，他们用盾牌保护弱者。',
    ', a game made by Purple Wizard.': '，由Purple Wizard创建的游戏。',
    'Class': '职业',
    'Okay, now we need to know who your character is..': '好的，现在我们需要知道您的角色是谁。',
    'First, we need to know your name (3-16 alphanumerical characters).': '首先，我们需要知道您的名字（3-16个字母数字字符）。',
    'Confirm change Armor/Weapon': '确认更改装甲/武器',
    'Confirm your choice': '确认您的选择',
    'Confirmation': '确认',
    'Damage Multiplier': '伤害加成',
    'Dimensional Fragments': '维度碎片',
    'Dimensional Upgrades': '维度升级',
    'enemies in': '敌人在',
    'for their help.': '他们的帮助。',
    'Helmet': '头盔',
    'Inventory slots': '仓库插槽',
    'Money': '钱',
    'New armor confirmation': '新装甲确认',
    'New Relic confirmation': '新圣遗物确认',
    'Next armor unlocked at Lv.': '下一个装甲解锁会在等级.',
    'Ninjas are the elite fighters in terms of skills, they learn & act fast': '忍者是团队中技能的精锐战士，他们学习和行动迅速',
    'You need to write a username !': '您需要写一个用户名！',
    'Leaderboard': '排行榜',
    'Class : Paladin': '职业：圣骑士',
    'Class : Paladin': '职业：圣骑士',
    'Class : Paladin': '职业：圣骑士',
    'It\'s your first time playing AlphaRPG, would you like to login ?': '这是您第一次玩AlphaRPG，您要登录吗？',
    'Evil Soul': '邪恶之魂',
    'Life': '生命',
    'Main Attack': '主攻击',
    'EXP': '经验',
    'MISSED': '未命中',
    'Special Attack': '特殊攻击',
    'You have defeated': '你打败了←',
    'Kind Soul': '善良的灵魂',
    'LEVEL UP ! (': '升级了 ! (',
    'Pure Soul': '纯净的灵魂',
    'Remove': '移除',
    'Successfully completed the mission !': '成功完成任务！',
    'Finish': '完成',
    'Equip': '装备',
    'and decided to explore it in the hope of finding informations to return in your world.': '并决定对其进行探索，以期找到返回您的世界的信息。',
    'Armor or Weapon': '装甲或武器',
    'Cancel': '取消',
    'Cancel mission': '取消任务',
    'Complete': '完成',
    'Ennemy level': '敌人等级',
    'Fire Fairy': '火精灵',
    'Highest loot quality': '最高战利品质量',
    'In Progress': '进行中',
    'Level Required': '所需级别',
    'Lost Path': '迷失的道路',
    'Mission required': '任务要求',
    'Mission Story': '任务故事',
    'Relic Slots': '圣遗物插槽',
    'Replace Main Weapon': '替换主武器',
    'Select a Weapon Slot': '选择一个武器槽',
    'Status': '状态',
    'Story': '故事',
    'Use a new weapon': '使用新武器',
    'Use as Main weapon': '用作主要武器',
    'Use as Special weapon': '作为特殊武器使用',
    'Water Fairy': '水精灵',
    'White Light': '白光',
    'You discovered a little path hidden in the shadows': '你发现了一条隐藏在阴影中的小路',
    'Grass Fairy': '草精灵',
    'Current Ratio': '当前几率',
    'Respawn': '重生',
    'You lose all your EXP.': '你失去了所有经验。',
    'Apply on Helmet': '适用于头盔',
    'Ares Relic': '战神圣遗物',
    'Power bonus of': '力量奖励',
    'Replace Relic': '替换圣遗物',
    'Select a relic slot': '选择一个圣遗物插槽',
    'Fairy Queen': '精灵女王',
    'Save exported': '存档已复制',
    'Your save is now copied in your clipboard.': '现在，您的存档已复制到剪贴板中。',
    'Life bonus of': '生命值加成',
    'Replace Armor': '替换护甲',
    'Select an Armor Slot': '选择一个护甲插槽',
    'Use a new armor': '使用新装甲',
    'Use as Helmet': '用作头盔',
    'Yggdrasil Relic': '伊格德拉西尔圣遗物',
    'Nothing was dropped.': '什么都没有掉落。',
    'White Wolf': '白狼',
    ' White Wolf': '白狼',
    'African Wolf': '非洲狼',
    'There seems to be light in the distance.': '远处似乎有光。',
    'Wolf': '狼',
    'You arrive at the end of the path and now enter a dark forest..': '您到达路径的尽头，然后进入一个黑暗的森林。',
    'Shadow Forest': '暗影森林',
    'Alpha Wolf': '阿尔法狼',
    'Weak Armor': '轻薄的护甲',
    'Weak Helmet': '轻薄的头盔',
    'Maybe you will find help here or just someone that can explain you how to get back to your world.': '也许你会在这里找到帮助，或者有人能告诉你如何回到你的世界。',
    'Brown Rat': '褐鼠',
    'You can see humans, elves and even dwarves.': '你可以看到人类，精灵，甚至矮人。',
    'You reach a city with a lot of different races.': '你到达一个有很多不同种族的城市。',
    'Gray Rat': '灰鼠',
    'Using low level armor, upgrade your equipment.': '使用低等级装备，升级你的装备。',
    'Huge Rat': '巨大的老鼠',
    'Replace Special Weapon': '替换特殊武器',
    'Travel': '旅行',
    'Use as Armor': '用作盔甲',
    'Incomplete': '不完整的',
    'Endless mountain': '无垠之山',
    'Apply on Armor': '适用于护甲',
    'Launch': '启动',
    'Life Gem': '生命宝石',
    'Upgrade Armor': '升级护甲',
    'Upgrade Helmet': '升级头盔',
    'So here you are in the so called endless mountain.': '你在这所谓的无垠的山中。',
    'Water Golem': '水傀儡',
    'Recon Relic': '侦察圣遗物',
    'One of the locals advises you to go north and reach the royal capital through the mountains..': '其中一位当地人建议您向北走，并通过山区到达皇家首都。',
    'Minimal drop quality': '最低掉落品质',
    'Stone Golem': '石魔像',
    'No Helmet gem slots left.': '头盔没有宝石插槽了。',
    'Poison Golem': '毒傀儡',
    'Power Gem': '力量宝石',
    'Yellow Slime': '黄色史来姆',
    'You arrive at the entrance of a dark cave,': '你到达一个黑暗洞穴的入口，',
    'it seems narrow but it is much faster and less dangerous than the mountain.': '它看起来很窄，但比那座山要快得多，危险也小得多。',
    'Black Slime': '黑色史莱姆',
    'Blue Slime': '蓝色史莱姆',
    'Select a Weapon': '选择一个武器',
    'Upgrade Main Weapon': '升级主武器',
    'Upgrade Special Weapon': '升级特殊武器',
    'No Armor gem slots left.': '没有剩余的护甲宝石插槽。',
    'Dark Cave': '黑暗洞穴',
    ' Dagger': '匕首',
    ' Weapon': '武器',
    ' Armor': '护甲',
    ' Helmet': '头盔',
    ' Boots': '靴子',
    ' Helmet': '头盔',
    ' Shield': '盾牌',
    'this place seems weird, you want to leave it as quick as possible.': '这个地方似乎很奇怪，您想尽快离开它。',
    'You wake up in an unknown world where a white light dazzles you..': '您在一个未知的世界中醒来，白光使您眼花缭乱..',
    'You need to select a class !': '您需要选择一个职业！',
    'NORMAL': '普通',
    'ADVANCED': '熟练',
    'SUPERIOR': '精英',
    'VETERAN': '老兵',
    'ELITE': '精锐',
    'BOSS': '领主',
    'GOD': '神',
    'You will discover a new world named Alpha with various kingdoms & monsters.': '',
    'But be careful there are also powerful monsters named': '但请注意，还有一些强大的怪物被命名为',
    'Destroy armor confirmation': '丢弃装备确认',
    'You finally reached the end of this cave, tired but in one piece,': '你终于到达了洞穴的尽头，虽然累了，但安然无恙，',
    'you can already see a big city at the end of the road..': '您已经在路的尽头看到了一个大城市。',
    'Black Spider': '黑蜘蛛',
    'Red Spider': '黑蜘蛛',
    'Inventory full, you can\'t recover any new item.': '仓库已满，你无法装入任何新物品。',
    'Clear': '清除',
    'Fortress': '要塞',
    'Minor': '初',
    'Middle': '中',
    'Corrupted World': '腐败的世界',
    'Corrupted Fortress': '腐蚀的堡垒',
    'Light of Elysia': '爱丽西亚之光',
    'Demon Lord': '恶魔领主',
    'Enemy level': '敌人等级',
    'Gem': '宝石',
    'Weapon': '武器',
    'The mountains': '山脉',
    'Red Moon at Elysia': '爱丽西亚的红月亮',
    'Score': '评分',
    'The New World': '新世界',
    'Vampire Castle - Tower': '吸血鬼城堡-塔',
    'Max Score +': '最高分 +',
    'Max Level': '最大等级',
    'Equipment Score': '装备评分',
    'Red Knight': '红骑士',
    'You failed to clear the fortress, now returning outside of it.': '你没能清除要塞，现在返回堡垒外面。',
    'White Knight': '白骑士',
    'MISSION FAILED': '任务失败',
    'Vampire': '吸血鬼',
    'Vampire Lord': '吸血鬼领主',
    'You discover that one of the tower of the castle held prisoners, you must go and save them all.': '你发现城堡的塔楼里有一个俘虏，你必须去把他们都救出来。',
    'You\'ve reached the maximum level in this area, check the available missions.': '你已经达到了这个区域的最高等级，检查一下可用的任务。',
    'Noble Vampire': '高贵的吸血鬼',
    'Use as Boots': '用作靴子',
    'Use as Shield': '用作盾牌',
    'No Shield gem slots left.': '没有盾牌宝石槽留下。',
    'Upgrade Boots': '升级靴子',
    'Error': '错误',
    'Funeral Chamber of the Manor': '庄园的殡仪馆',
    'Welcome back to': '欢迎回到',
    'Would you like to login ?': '您想登录吗?（关掉即可）',
    'enemies.': '敌人.',
    "Armor Base Life": "护甲基础生命",
    "Auto Remove": "自动移除",
    "Automatically enable mind control when AFK": "AFK时自动启用精神控制",
    "Automatically start available missions.": "自动启动可用任务。",
    "Benefits for each new dimension": "每个新维度的好处",
    "Boots Base Life": "靴子基础寿命",
    "Breastplate": "胸甲",
    "But beware: there are also powerful monsters that you will need to fight wisely; it's up to you to\n            find your own way to do so! 😉": "但请注意：还有一些强大的怪物需要您明智地战斗；这取决于你\n找到你自己的方式来做到这一点！ 😉",
    "By passing through the dimensional rift you will lose your current equipment and mission\n                        progress.": "通过维度裂缝，您将失去当前的装备和任务\n进度。",
    "Choose a class": "选择一个班级",
    "Choose a username": "选择一个用户名",
    "Choose an avatar": "选择头像",
    "Cloud sync disabled.": "云同步已禁用。",
    "Confirm your choices": "确认您的选择",
    "Confirmation for changing Relics.": "确认更改遗物。",
    "Confirmation for changing Weapons or Armor.": "确认更换武器或盔甲。",
    "Credits": "鸣谢",
    "Current bonus": "当前奖金",
    "Delete save": "删除保存",
    "Dimensional Bonuses": "维度奖金",
    "Dimensional Diffculty": "维度难度",
    "Dimensional Difficulty": "维度难度",
    "Discord": "Discord",
    "discord server": "Discord服务器",
    "Do you wish to start the game with these choices?": "你想用这些选择开始游戏吗？",
    "English": "英语",
    "Enter your desired username for your character (3-16 alphanumerical characters).": "输入您想要的角色用户名（3-16 个字母数字字符）。",
    "Equipment": "装备",
    "EQUIPMENT": "装备",
    "equipment ": "装备",
    "Experience Multiplier": "经验乘数",
    "for their help !": "为他们的帮助！",
    "Fortresses Defeated": "堡垒被击败",
    "Français": "法语",
    "Helmet Base Life": "头盔基础寿命",
    "Hide players from older versions": "隐藏旧版本的播放器",
    "If you have a promotional code enter it here.": "如果您有促销代码，请在此处输入。",
    "If you have any question don't hesitate to join our": "如果您有任何问题，请不要犹豫加入我们",
    "in the Settings.": "在设置中。",
    "Information": "信息",
    "Inventory Capacity": "仓库能力",
    "Language": "语言",
    "Launch mission": "启动任务",
    "LEGEND": "传奇",
    "Life Gems": "生命宝石",
    "made with 💖 by": "用💖制作",
    "Main attack": "主攻击",
    "Main Attack Damage": "主要攻击伤害",
    "Main Weapon Damage": "主武器伤害",
    "MASTER": "掌握",
    "Maximum Life": "最长寿命",
    "Next armor piece unlocked at level 10.": "下一个盔甲在 10 级解锁。",
    "NINJA": "忍者",
    "Ninjas are elite fighters, planning and plotting before the fight.": "忍者是精锐战士，在战斗前计划和策划。",
    "Not Started": "没有开始",
    "of The White Light": "白光之光",
    "Okay, so now we need to know who your character will be...": "好的，所以现在我们需要知道你的角色将是谁......",
    "PALADIN": "圣骑士",
    "Paladins fight for justice. They protect the weak with their strong shield.": "圣骑士为正义而战。他们用坚固的盾牌保护弱者。",
    "Power Gems": "能量宝石",
    "Purchase": "购买",
    "Rank": "段位",
    "Reliques": "遗物",
    "Reset Theme": "重置主题",
    "Run away": "逃跑",
    "Shield Base Life": "护盾基础生命",
    "Skip monster rewards.": "跳过怪物奖励。",
    "Source Code": "源代码",
    "Special attack": "特殊攻击",
    "Special Weapon Damage": "特殊武器伤害",
    "Take Cover": "掩护",
    "The story will be reset and the difficulty will increase by 5%.": "故事将被重置，难度将增加5%。",
    "They can learn the basics faster than anyone.": "他们可以比任何人更快地学习基础知识。",
    "Throw away": "丢弃",
    "Throw Away": "丢弃",
    "Total Damage Dealt": "造成的总伤害",
    "Total Maximum Life": "总最大生命值",
    "u/Aizen": "u/蓝染",
    "Unlocking of the Mind Control (idle mode": "解锁心灵控制（放置模式",
    "Validation": "验证",
    "WARRIOR": "战士",
    "Warriors form the frontline of any fight. They deal the most damage.": "战士是任何战斗的前线。 他们造成的伤害最大。",
    "White Light - Lv.": "白光 - Lv.",
    "Write \"Neo\" to generate a random name.": "输入 \"Neo\" 以生成随机名称。",
    "You can also choose your avatar; it will be shown during any fight.": "你也可以选择你的头像； 它会在任何战斗中显示。",
    "You can change the\n                        color\n                        of your name by changing the": "您可以更改\n 名字颜色\n通过",
    "You now require a class, which will define your basic skills.": "您现在需要一个课程，它将定义您的基本技能。",
    "You will eventually be able to gain the bonuses granted by each class.": "您最终将能够获得每个班级授予的奖金。",
    "You'll discover & explore a new world called Alpha filled with many cities & monsters!": "您将发现并探索一个名为 Alpha 的新世界，其中充满了许多城市和怪物！",
    "(+5% Bonus Experience)": "(+5% 经验奖励)",
    "3% more experience": "3% 经验提升",
    "5% Bonus Experience": "5% 经验奖励",
    "50 maximum score": "50 最高分",
    "2 inventory slots": "2 仓库插槽",
    " Breastplate": "胸甲",
    "A white light dazzles you but you quickly understand that this place is not the Earth, no walls, no sky...": "白光让你眼花缭乱，但你很快就会明白，这个地方不是地球，没有墙壁，没有天空……",
    "ADVANCED Evil Soul": "高级邪恶灵魂",
    "The Vampire Castle": "吸血鬼城堡",
    "White Light": "白光",
    "NORMAL Kind Soul": "普通善良的灵魂",
    "Defeat 10 enemies in The White Light": "在白光中击败 10 名敌人",
    "Not yet unlocked.": "还未解锁。",
    "ADVANCED Kind Soul": "高级善良的灵魂",
    "SUPERIOR Evil Soul": "精英邪恶灵魂",
    "SUPERIOR Kind Soul": "精英的善良灵魂",
    "Your save has been imported.": "您的存档已导入。",
    "Save imported": "存档已导入",
    "NORMAL Evil Soul": "普通的邪恶灵魂",
    "ELITE Kind Soul": "精锐善良的灵魂",
    "Lost Path": "迷失之路",
    "NORMAL African Wolf": "普通非洲狼",
    "Shadow Forest": "暗影森林",
    "SUPERIOR Wolf": "精英狼",
    "VETERAN Kind Soul": "老兵善良的灵魂",
    "Ares Relic ": "战神遗物",
    "Battered Helmet": "破损的头盔",
    "Broken Sword": "破损的剑",
    "Cheap Sword": "便宜的剑",
    "Chipped Helmet": "缺口头盔",
    "Damaged Helmet": "损坏的头盔",
    "Fragile Helmet": "易碎头盔",
    "NORMAL  White Wolf": "普通白狼",
    "Weak Dagger": "弱匕首",
    "Weak Sword": "弱剑",
    "Worn Helmet": "旧头盔",
    "Yggdrasil Relic ": "世界树遗物",
    "But blinding lights all around you.": "但是你周围的灯光令人眼花缭乱。",
    "It's time to wake up !": "该起床了 ！",
    "SUPERIOR  White Wolf": "精英白狼",
    "ADVANCED  White Wolf": "高级白狼",
    "ADVANCED Wolf": "高级狼",
    "Auto start mission": "自动启动任务",
    "disabled": "禁用",
    "menu.": "菜单。",
    "Mission Canceled": "任务取消",
    "Mumfler": "Mumfler",
    "NORMAL Water Fairy": "普通水仙子",
    "NORMAL Wolf": "普通狼",
    "of The Shadow Forest": "暗影森林",
    "Parker": "Parker",
    "There seems to be a light in the distance and perhaps finally some answers.": "远处似乎有一盏灯，也许终于有答案了。",
    "Vous décidez de vite partir de là, at the risk of losing your life.": "Vous décidez de vite partir de là，冒着失去生命的风险。",
    "You are now in an unknown forest... A dark and creepy forest with one in sight.": "你现在在一个未知的森林里......一个黑暗而令人毛骨悚然的森林，一个在眼前。",
    "You arrive at the end of the forest and discover a little path hidden behind a big tree.": "您到达森林的尽头，发现隐藏在一棵大树后面的小路。",
    "You can restart this mission in the": "您可以在",
    "You've reached the maximum level for this area, please check the next available missions.": "您已达到该区域的最高等级，请查看下一个可用任务。",
    "Do you really want to equip this weapon as your Main weapon ?": "你真的想装备这把武器作为你的主武器吗？",
    "Level ": "等级 ",
    "Replace the Main Weapon": "更换主武器",
    "SUPERIOR African Wolf": "精英非洲狼",
    "Recovering... (": "恢复中……（",
    "VETERAN Evil Soul": "老兵邪恶灵魂",
    "Tiny Helmet": "小头盔",
    "Defeat the": "打败",
    "LEVEL UP (": "升级了（",
    "MASTER Pure Soul": "大师纯粹灵魂",
    "Mission Completed": "任务已完成",
    "No Relic": "无遗物",
    "Select a Relic Slot": "选择一个遗物槽",
    "Do you really want to equip this new Helmet ?": "你真的想装备这个新头盔吗？",
    "ELITE Evil Soul": "精锐邪恶之魂",
    "Replace the Helmet": "更换头盔",
    "Cursed Helmet": "诅咒头盔",
    "Cursed Sword": "诅咒之剑",
    "Ruined Helmet": "损坏的头盔",
    "Unusable Helmet": "无法使用的头盔",
    "ADVANCED Grass Fairy": "高级草仙子",
    "ADVANCED Water Fairy": "高级水仙",
    "ELITE Fire Fairy": "精锐火仙子",
    "SUPERIOR Fire Fairy": "精英火仙子",
    "Tiny Sword": "小剑",
    "You lost a part of your EXP.": "你失去了一部分经验。",
    "You were defeated by the": "你被打败了",
    "ADVANCED Fire Fairy": "高级火精灵",
    "ELITE Grass Fairy": "精锐草仙子",
    "MASTER Fairy Queen": "大师妖精女王",
    "NORMAL Fire Fairy": "普通火精灵",
    "NORMAL Grass Fairy": "普通草仙子",
    "SUPERIOR Grass Fairy": "精英草仙子",
    "SUPERIOR Water Fairy": "精英水仙子",
    "VETERAN Fire Fairy": "老兵火仙子",
    "Weakened Helmet": "削弱头盔",
    "VETERAN Water Fairy": "老兵水仙子",
    "Broken Helmet": "破损的头盔",
    "Cheap Helmet": "廉价头盔",
    "- Lv.": "- 等级",
    "Travel here": "前往这里",
    "Damaged Sword": "受损的剑",
    "ADVANCED African Wolf": "高级非洲狼",
    "Chipped Sword": "破碎之剑",
    "ELITE Wolf": "精锐狼",
    "Unusable Sword": "无法使用的剑",
    "VETERAN  White Wolf": "老兵白狼",
    "VETERAN Grass Fairy": "老兵草仙子",
    "Weakened Dagger": "削弱匕首",
    "Cheap Dagger": "廉价匕首",
    "Do you really want to equip this weapon as your Special weapon ?": "你真的想装备这把武器作为你的特殊武器吗？",
    "ELITE  White Wolf": "精英白狼",
    "Fragile Dagger": "脆弱的匕首",
    "MASTER Alpha Wolf": "大师阿尔法狼",
    "MASTER undefined": "大师未定义",
    "of The Lost Path": "迷失的道路",
    "Replace the Special Weapon": "更换特殊武器",
    "VETERAN African Wolf": "老兵非洲狼",
    "VETERAN Wolf": "老兵狼",
    "Worn Dagger": "磨损的匕首",
    "Worn Sword": "磨损的剑",
    "ADVANCED Brown Rat": "高级棕鼠",
    "ADVANCED Grey Rat": "高级灰鼠",
    "ELITE African Wolf": "精锐非洲狼",
    "ELITE Brown Rat": "精锐棕鼠",
    "Fragile Sword": "易碎剑",
    "It seems like you might be able to find some help here... or maybe just someone who can tell you how to get back to your world.": "似乎您可以在这里找到一些帮助......或者也许只是一个可以告诉您如何回到您的世界的人。",
    "MASTER Huge Rat": "大老鼠大师",
    "NORMAL Brown Rat": "正常棕鼠",
    "NORMAL Grey Rat": "普通灰鼠",
    "of Galarius City": "加拉里乌斯城",
    "SUPERIOR Brown Rat": "精英棕鼠",
    "SUPERIOR Grey Rat": "精英灰鼠",
    "Tiny Dagger": "小匕首",
    "Weakened Sword": "弱化剑",
    "You reach a city with many people from a variety of different races: humans, dwarves and even elves.": "你到达一个城市，那里有许多来自不同种族的人：人类、矮人甚至精灵。",
    "ELITE Grey Rat": "精锐灰鼠",
    "Expensive Breastplate": "昂贵的胸甲",
    "Life Gem ": "生命宝石",
    "Next armor piece unlocked at level 20.": "下一个盔甲在 20 级解锁。",
    "Undamaged Helmet": "完好无损的头盔",
    "VETERAN Brown Rat": "老兵棕鼠",
    "VETERAN Grey Rat": "老兵灰鼠",
    "Battered Dagger": "重创匕首",
    "Chipped Breastplate": "碎裂胸甲",
    "Chipped Dagger": "碎匕首",
    "Luminous Helmet": "发光头盔",
    "Luminous Sword": "夜光剑",
    "No gem slots left for the Breastplate.": "胸甲没有宝石槽了。",
    "No gem slots left for the Helmet.": "头盔没有宝石槽了。",
    "No gem slots left for the Main weapon.": "主武器没有宝石槽。",
    "No gem slots left for the Special weapon.": "没有为特殊武器留下的宝石槽。",
    "Power Gem ": "能量宝石",
    "Unusable Breastplate": "无法使用的胸甲",
    "Battered Breastplate": "破损胸甲",
    "Clean Breastplate": "干净的胸甲",
    "Cursed Breastplate": "诅咒胸甲",
    "Expensive Helmet": "昂贵的头盔",
    "Luminous Dagger": "夜光匕首",
    "Ruined Dagger": "毁坏匕首",
    "Undamaged Breastplate": "完好无损的胸甲",
    "ADVANCED Stone Golem": "高级石傀儡",
    "ADVANCED Water Golem": "高级水傀儡",
    "Apply on Breastplate": "适用于胸甲",
    "Big Helmet": "大头盔",
    "Big Sword": "大剑",
    "Clean Dagger": "干净的匕首",
    "Clean Sword": "干净的剑",
    "ELITE Stone Golem": "精锐石傀儡",
    "ELITE Water Golem": "精锐水傀儡",
    "Expensive Helmet": "昂贵的头盔",
    "Expensive Sword": "昂贵的剑",
    "Hermes Relic ": "爱马仕遗物",
    "Luminous Dagger": "夜光匕首",
    "MASTER Poison Golem": "大师毒傀儡",
    "NORMAL Stone Golem": "普通石傀儡",
    "NORMAL Water Golem": "普通水傀儡",
    "of The Endless Mountain": "无尽之山",
    "One of the locals advises you to go north and reach the royal capital through the mountains...": "一位当地人建议您向北走，穿过山脉到达王都......",
    "So here you are in the so-called \"endless\" mountains.": "所以在这里你是在所谓的“无尽”的山脉中。",
    "SUPERIOR Stone Golem": "精英石傀儡",
    "SUPERIOR Water Golem": "精英水傀儡",
    "Undamaged Dagger": "未损坏的匕首",
    "Undamaged Sword": "未损坏的剑",
    "Weakened Breastplate": "弱化胸甲",
    "Clean Helmet": "干净的头盔",
    "Expensive Dagger": "昂贵的匕首",
    "VETERAN Water Golem": "老兵水傀儡",
    "ADVANCED Noble Vampire": "高级贵族吸血鬼",
    "Breastplate of Legend": "传奇胸甲",
    "Celestial Breastplate": "天界胸甲",
    "Celestial Helmet": "天界头盔",
    "Fairy Breastplate": "妖精胸甲",
    "Helmet of Destiny": "命运头盔",
    "Helmet of Legend": "传奇头盔",
    "Holy Boots": "圣靴",
    "Holy Helmet": "圣盔",
    "Holy Shield": "圣盾",
    "Immortal Bridge": "不朽之桥",
    "Incredible Sword": "不可思议的剑",
    "Legendary": "传奇",
    "MAXED OUT": "超出",
    "of The Immortal Bridge": "不朽之桥",
    "Red River": "红河",
    "relic ": "遗迹",
    "Shield of Angels": "天使之盾",
    "Shield of Destiny": "命运之盾",
    "The Black Portal II": "黑色传送门 II",
    "The Mountains": "群山",
    "Unreal Boots": "虚幻的靴子",
    "Unreal Helmet": "虚幻头盔",
    "ADVANCED Vampire": "高级吸血鬼",
    "SUPERIOR Noble Vampire": "高级贵族吸血鬼",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //原样
    'Purple Wizard': 'Purple Wizard',
    "Pedter": "Pedter",
    "Creepermeat": "Creepermeat",
    "Kebab": "Kebab",
    "Lex": "Lex",
    "MaccasLover": "MaccasLover",
    "aleksander": "aleksander",
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'RPG': 'RPG',
    'RPG v3.3 BETA': 'RPG v3.3 BETA',
    'v3.3 BETA': 'v3.3 BETA',
    's': 's',
    't': 't',
    'x': 'x',
    '': '',
    'W_D__Gaster': 'W_D__Gaster',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "(+": "(+",
    "\n": "",
    "                                ": "",
    "                               ": "",
    "                              ": "",
    "                             ": "",
    "                            ": "",
    "                           ": "",
    "                          ": "",
    "                         ": "",
    "                        ": "",
    "                       ": "",
    "                      ": "",
    "                     ": "",
    "                    ": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Welcome to AlphaRPG": "欢迎来到 阿尔法RPG",
    "Training": "训练",
    'Poor': '劣质',
    'Lower': '低级',
    'Used': '二手',
    'Single': '单手',
    'Higher': '高等',
    'Lucky': '幸运',
    'Premium': '优质',
    'Slow': '减速',
    'Powerful': '强大的',
    'Acceptable': '可接受的',
    'Fresh': '鲜',
    'Dual': '双手',
    'Small': '迷你',
    'Rusty': '生锈的',
    'Hexa': '六',
    'Fast': '快速',
    'Good': '不错的',
    'Basic': '基础',
    'Expert': '专家',
    'Blessed': '祝福',
    'Destiny': '命运',
    'Guardian': '守护',
    'Avenger': '复仇者',
    'Alpha': '阿尔法',
    'Deca': '全能',
    'Sacred': '神圣',
    'Magic': '魔法',
    'Relic': '圣遗物',
    'Exotic': '传说',
    'Current Base': '当前基础',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                           ": "",
    "                          ": "",
    "                         ": "",
    "                        ": "",
    "                       ": "",
    "                      ": "",
    "                     ": "",
    "                    ": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    ")": ")",
    " defeated !": " 被击败了！",
    " has killed you !": " 杀死了你！",
    " - Finished": " - 已完成",
    " - Unfinished": " - 未完成",
    " - Basement": " - 地下室",
    " - Lv.": " - 等级",
    " - Core": " - 核心",
    " - Incomplete": " - 进行中",
    " - Complete": " - 已完成",
    " Rank Demon": "级恶魔",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Last cloud save (\d+) minute (\d+) seconds  ago, as$/, '上次云存储在$1分$2秒前，为'],
    [/^(\d+) hours (\d+) minutes$/, '$1 小时 $2 分钟'],
    [/^(\d+) hour  (\d+) seconds$/, '$1 小时 $2 秒'],
    [/^(\d+) hours (\d+) seconds$/, '$1 小时 $2 秒'],
    [/^(\d+) minute (\d+) seconds$/, '$1 分钟 $2 秒'],
    [/^(.+) Dimensional Fragments$/, '$1 维度碎片'],
    [/^Next cover in(.+)second.$/, '下一次掩护还需 $1 秒。'],
    [/^Respawning in(.+)second.$/, '重生还需 $1 秒。'],
    [/^Respawning in(.+)second$/, '重生还需 $1 秒'],
    [/^Respawning in(.+)seconds.$/, '重生还需 $1 秒。'],
    [/^Next cover in(.+)seconds.$/, '下一次掩护还需 $1 秒。'],
    [/^Next retreat in(.+)second.$/, '下一次撤退还需 $1 秒。'],
    [/^Next retreat in(.+)seconds.$/, '下一次撤退还需 $1 秒。'],
    [/^(.+)Special(.+)Attack$/, '$1 特殊攻击'],
    [/^(.+)Special(.+)Attacks$/, '$1 特殊攻击'],
    [/^(.+)Special(.+)attack$/, '$1 特殊攻击'],
    [/^(.+)Specials(.+)Attacks$/, '$1 特殊攻击'],
    [/^(.+)Specials(.+)attacks$/, '$1 特殊攻击'],
    [/^Defeat (\d+) enemies in The Endless Mountain$/, '在无尽之山中击败 $1 个敌人'],
    [/^Defeat (\d+) enemies in Galarius City$/, '在加拉留斯城中击败 $1 个敌人'],
    [/^Defeat (\d+) enemies in The Shadow Forest$/, '在暗影森林中击败 $1 个敌人'],
    [/^Defeat (\d+) enemies in The Lost Path$/, '在迷失之路中击败 $1 个敌人'],
    [/^Defeat (\d+) enemies in The White Light$/, '在白光中击败 $1 个敌人'],
    [/^(\d+) minute$/, '$1 分钟'],
    [/^\((.+) left\).$/, '\(剩余 $1\).'],
    [/^(\d+) Fragment$/, '$1 碎片'],
    [/^(\d+) EXP$/, '$1 经验'],
    [/^(\d+) Special attack$/, '$1 特殊攻击'],
    [/^(\d+) second$/, '$1 秒'],
    [/^(\d+) seconds$/, '$1 秒'],
    [/^\/(.+) EXP$/, '\/$1 经验'],
    [/^\/(.+) Gems incrusted$/, '\/$1 宝石镶嵌'],
    [/^(\d+) minutes (\d+) seconds$/, '$1 分钟 $2 秒'],
    [/^(\d+) hour (\d+) minute (\d+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hour (\d+) minutes (\d+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hour (\d+) minutes (\d+) second$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hours (\d+) minutes (\d+) second$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hours (\d+) minute (\d+) second$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hours (\d+) minute (\d+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hours (\d+) minutes (\d+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^(\d+) hours (\d+) minutes (\d+) second$/, '$1 小时 $2 分钟 $3 秒'],
    [/^Next retreat in (\d+) seconds.$/, '$1秒后撤退。'],
    [/^Next retreat in (\d+) seconds .$/, '$1秒后撤退。'],
    [/^Next retreat in (\d+) second .$/, '$1秒后撤退。'],
    [/^\/(\d+) EXP$/, '\/$1 经验'],
    [/^(\d+) Defeated$/, '$1 打败'],
    [/^Armor (\d+) stats$/, '护甲 $1 属性'],
    [/^([\d\.]+) Fragments$/, '$1 片段'],
    [/^(\d+)\/(\d+) Missions completed.$/, '$1\/$2 任务已完成.'],
    [/^Inventory\n(.+)slots$/, '仓库插槽'],
    [/^for\n(.+)his\n(.+)help.$/, '他的帮助'],
    [/^Before entering to the world of AlphaRPG, We need to know your name \(3-16 characters with only(.+)numbers and letters\).$/, '在进入AlphaRPG的世界之前，我们需要知道你的名字（3-16个字符，只能是数字和字母）。'],
    [/^Last cloud save (\d+) seconds ago, as$/, '上次云储存在 $1 秒前，像'],
    [/^Last cloud save (\d+) second  ago, as$/, '上 次云储存在 $1 秒前，像'],
    [/^Last cloud save (\d+) seconds  ago, as$/, '上 次云储存在 $1 秒前，像'],
    [/^Last cloud save (\d+) minutes  ago, as$/, '上 次云储存在 $1 分钟前，像'],
    [/^Last cloud save (\d+) minute  ago, as$/, '上 次云储存在 $1 分钟前，像'],
    [/^Last cloud save (\d+) minute (\d+) second  ago, as$/, '上 次云储存在 $1 分钟 $2 秒前，像'],
    [/^Last cloud save (\d+) minutes (\d+) seconds  ago, as$/, '上 次云储存在 $1 分钟 $2 秒前，像'],
    [/^Missions completed \((.+)\/$/, '任务完成 \($1\/'],
    [/^Change\n(.+)avatar$/, '更换头像'],
    [/^Current\n(.+)version$/, '当前版本'],
    [/^You can choose a custom color for\n(.+)your\n(.+)name, just change the$/, '你可以为你的名字选择一个自定义颜色，更改'],
    [/^You\n(.+)can choose a custom color for your name,\n(.+)just change the$/, '你可以为你的名字选择一个自定义颜色，更改'],
    [/^Set\n(.+)secondary\n(.+)background$/, '设置第二背景色'],
    [/^Set\n(.+)background$/, '设置背景色'],
    [/^Reset\n(.+)Theme$/, '重置主题'],
    [/^Hello (.+) !$/, '你好 $1 !'],
    [/^Set 2nd\n(.+)layer\n(.+)background$/, '设置第2层背景'],
    [/^Set 3rd\n(.+)layer\n(.+)background$/, '设置第3层背景'],
    [/^Set\n(.+)menus$/, '设置菜单'],
    [/^Current\n(.+)Score$/, '当前评分'],
    [/^By passing through the dimensional rift you will lose your\n(.+)current\n(.+)equipment.$/, '过穿过维裂缝，你将失去你目前的装备。'],
    [/^Before entering to the world of AlphaRPG, We need to know your name \(3-16 characters with only\n(.+)numbers and letters\).$/, '在进入阿尔法RPG世界之前，我们需要知道您的名字（3-16个字符，仅包含↵数字和字母）。'],
    [/^For each dimension: \+50 max tier score, 3% more EXP, \+2\n(.+)inventory\n(.+)slots$/, '每个维度：\+50的最高等级得分，3％的额外经验，\+2仓库插槽'],
    [/^For each dimension: \+50 max tier score, 3% more EXP, \+2 inventory\n(.+)slots$/, '每个维度：\+50的最高等级得分，3％的额外经验，\+2仓库插槽'],
    [/^5%\n(.+)Experience multiplier$/, '5% 经验加成'],
    [/^5%\n(.+)Experience multiplier$/, '5% 经验加成'],
    [/^5%\n(.+)Experience multiplier\)$/, '5% 经验加成\)'],
    [/^5%\n(.+)Experience\)$/, '5% 经验\)'],
    [/^5%\n(.+)Experience\)$/, '5% 经验\)'],
    [/^The story\n(.+)will be\n(.+)reset and the difficulty will raise by 5%.$/, '故事会重置并且难度降低5%'],
    [/^Move the slider to change\n(.+)color or\n(.+)enter a number between 0-255 in the number\n(.+)field$/, '移动滑块以更改颜色或在数字字段中输入0-255之间的数字'],
    [/^If you have a promotional code, write it\n(.+)here.$/, '如果您有促销代码，请在此处写下。'],
    [/^By passing through the dimensional rift you will lose\n(.+)your\n(.+)current\n(.+)equipment.$/, '通过穿过维裂缝，你将失去你目前的装备。'],

]);
