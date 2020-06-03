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
    'NORMAL': '普通',
    'Normal': '普通',
    'Level': '等级',
    'Menu': '菜单',
    'No': '不',
    'Theme': '主题',
    'Username': '用户名',
    'Uncommon': '罕见',
    'Purple Wizard\n                                           ': '紫精灵',
    'Purple Wizard#': '紫精灵#',
    'Ranking': '排行榜',
    'Rare': '罕见',
    'Ratio (K/D': '比率 (K/D',
    'Red': '红色',
    'Refresh': '刷新',
    'Render': '',
    'renderer': '',
    'Reset\n                                                                Theme\n                                                           ': '重置主题',
    'Run Away': '逃跑',
    'Score Required': '需要分数',
    'Select an avatar\n                           ': '选择一个头像',
    'Set\n                                                                background\n                                                           ': '设置背景色',
    'Set\n                                                                secondary\n                                                                background': '设置第二背景色',
    'Set menus\n                                                           ': '设置菜单',
    'Set text\n                                                           ': '设置文字',
    'Set theme': '设置主题',
    'Settings': '设置',
    'Settings\n                                   ': '设置',
    'Skip Rewards': '跳过奖励',
    'slices': '碎片',
    'SPACE': '空间',
    'Special thanks to': '特别感谢',
    'Start': '开始',
    'Statistics\n                                   ': '统计',
    'Story completed': '已完成故事',
    'SUPERIOR': '高手',
    'svg': '',
    'Take cover': '掩护',
    'The Black Portal': '黑传送门',
    'The Corrupted Fortress': '腐败的堡垒',
    'The Corrupted World': '腐败的世界',
    'The Dark Cave': '黑暗洞穴',
    'The Endless Mountain': '',
    'The Immortal Bridge': '',
    'The Lost Path': '失落之路',
    'The Red Portal': '红传送门',
    'The Red River': '红河',
    'The Shadow Forest': '',
    'The story\n                                            will be\n                                            reset and the difficulty will raise by 5%.': '',
    'The White Light': '',
    'theme color': '主题颜色',
    'Time Played': '游戏时间',
    'Tiwaz': '',
    'Top': '顶部',
    'TOP': '顶部',
    'Total Deaths': '累计死亡',
    'Total Kills': '累计杀死',
    'Type "Neo" to generate a random name.\n               ': '键入“Neo”以生成随机名称。',
    'Vampire Castle': '吸血鬼城堡',
    'Vampire Manor': '吸血鬼庄园',
    'VETERAN': '老手',
    'webgl': '图形库',
    'width': '宽度',
    'xPos': '',
    'Kill': '杀死',
    'Keys\n                               ': '快捷键',
    '\n                                    Relics\n                               ': '圣遗物',
    '\n                                You\n                                can choose a custom color for your name,\n                                just change the': '',
    'ADVANCED': '高级',
    'AlphaRPG by Purple Wizard': '阿尔法RPG作者 Purple Wizard',
    'AlphaRPG Discord': '阿尔法RPG Discord',
    'AlphaRPG v': '阿尔法RPG v',
    'ambient': '环境',
    'Armor': '护甲',
    'Auto remove': '自动移除',
    'Auto-Start Missions': '自动开始任务',
    'Basic Armor': '基础护甲',
    'Black Spirit': '黑精灵',
    'Blue': '蓝色',
    'By passing through the dimensional rift you will lose your\n                                            current\n                                            equipment.': '',
    'canvas': '画布',
    'Central V': '',
    'Check code': '检查代码',
    'Close': '关闭',
    'Code': '代码',
    'Common': '常规',
    'Confirm change core': '确认更改核心',
    'Confirm change Relic': '确认更改圣遗物',
    'Confirm reset': '确认重置',
    'count': '数量',
    'Current Base Life': '当前基本生活',
    'Current Dimension': '当前维度',
    'Current Level': '当前等级',
    'Current light': '当前光',
    'Current Power': '当前力量',
    'Current Score': '当前分数',
    'Current value': '当前值',
    'Default': '默认',
    'Delete the save': '删除存档',
    'Destroy core confirmation': '破坏核心确认',
    'Difficulty': '难度',
    'diffuse': '扩散',
    'Dimension': '维度',
    'Dimension\n                                   ': '维度',
    'dimensional fragments available.': '维度碎片可用。',
    'Dimensional Rift': '维度裂缝',
    'Distance': '距离',
    'Do you really want to reset all your stats ?': '你真的想重置你的所有统计数据吗？',
    'ELITE': '精英',
    'Elysia City': '',
    'Empire Road': '',
    'Epic': '',
    'Exotic': '',
    'EXP Multiplier': '经验加成倍数',
    'Exploration': '探索',
    'Exploration\n                                   ': '探索',
    'Export': '导出',
    'export big': '导出大',
    'Export save': '导出存档',
    'Export theme': '导出主题',
    'export this': '导出这个',
    'F': '',
    'for\n                                                his\n                                                help.': '他的帮助',
    'For each dimension: +50 max tier score, 3% more EXP, +2 inventory slots\n                                       ': '',
    'Fortresses': '',
    'Fortresses defeated': '',
    'Fragments reward': '',
    'Galarius City': '',
    'Game Version': '',
    'General': '',
    'Git游戏': '',
    'GOD': '',
    'Hide older versions players': '',
    'Identification': '鉴定',
    'If you have a promotional code, write it here.': '如果您有促销代码，请在此处填写。',
    'Imperium City': '帝国城',
    'Import save': '导入存档',
    'Import theme': '导入主题',
    'in the settings.\n                           ': '在设置里。',
    'INFO\n                                   ': '信息',
    'Informations': '信息',
    'Inventory\n                                   ': '库存',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Name': '名称',
    'Missions\n                                   ': '任务',
    '\n                                                        Change\n                                                        avatar\n                                                   ': '修改头像',
    '\n                                                        Destroy': '摧毁',
    '\n                                                Upgrade\n                                           ': '升级',
    '\n                                            Killed\n                                       ': '杀死的',
    '\n                                    Equipped armors\n                               ': '已装备护甲',
    '\n                                    Armors\n                               ': '护甲',
    '\n                    Before entering to the world of AlphaRPG, We need to know your name (3-16 characters with only\n                    numbers and letters).\n                   ': '在进入AlphaRPG的世界之前，我们需要知道你的名字（3-16个字符，只能是数字和字母）。',
    '\n                    Welcome to AlphaRPG !': '欢迎来到阿尔法RPG！',

    //原样
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
    "\n                                    ": "",
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
    [/^(\d+) minute (\d+) seconds$/, '$1 分钟 $2 秒'],
    [/^(\d+) minute$/, '$1 分钟'],
    [/^\/(\d+) EXP$/, '\/$1 经验'],
    [/^(\d+) Defeated$/, '$1 打败'],
    [/^Armor (\d+) stats$/, '护甲 $1 属性'],
    [/^([\d\.]+) Fragments$/, '$1 片段'],
    [/^(\d+)\/(\d+) Missions completed.$/, '$1\/$2 任务已完成.'],

]);
