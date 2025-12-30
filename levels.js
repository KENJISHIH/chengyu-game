// 這裡只放題目資料
// 以後要新增關卡，直接複製格式往下加即可
const gameLevels = [
    // --- 第 1 關：初出茅廬 ---
    {
        id: 1,
        rows: 6,
        cols: 6,
        data: [
            {r:0, c:0, val:'一', fixed:true}, {r:0, c:1, val:'石', fixed:false}, {r:0, c:2, val:'二', fixed:true}, {r:0, c:3, val:'鳥', fixed:false},
            {r:0, c:3, val:'鳥', fixed:false}, {r:1, c:3, val:'笨', fixed:true}, {r:2, c:3, val:'先', fixed:false}, {r:3, c:3, val:'飛', fixed:true},
            {r:2, c:1, val:'捷', fixed:true}, {r:2, c:2, val:'足', fixed:false}, {r:2, c:3, val:'先', fixed:false}, {r:2, c:4, val:'登', fixed:true}
        ],
        options: ["石", "鳥", "先", "足", "飛", "大", "中", "人", "天", "手", "心", "力", "高", "水"]
    },
    // --- 第 2 關：山海之間 ---
    {
        id: 2,
        rows: 6,
        cols: 6,
        data: [
            {r:1, c:0, val:'人', fixed:true}, {r:1, c:1, val:'山', fixed:false}, {r:1, c:2, val:'人', fixed:true}, {r:1, c:3, val:'海', fixed:false},
            {r:2, c:3, val:'闊', fixed:true}, {r:3, c:3, val:'天', fixed:false}, {r:4, c:3, val:'空', fixed:true},
            {r:4, c:0, val:'坐', fixed:true}, {r:4, c:1, val:'吃', fixed:false}, {r:4, c:2, val:'山', fixed:false}, {r:4, c:3, val:'空', fixed:true}
        ],
        options: ["山", "海", "天", "吃", "闊", "空", "地", "日", "月", "星", "雲", "風", "雨", "雷"]
    },
    // --- 第 3 關：心情愉悅 ---
    {
        id: 3,
        rows: 6,
        cols: 6,
        data: [
            {r:1, c:0, val:'心', fixed:false}, {r:1, c:1, val:'直', fixed:true}, {r:1, c:2, val:'口', fixed:false}, {r:1, c:3, val:'快', fixed:true},
            {r:0, c:3, val:'大', fixed:false}, {r:2, c:3, val:'人', fixed:false}, {r:3, c:3, val:'心', fixed:true},
            {r:2, c:3, val:'人', fixed:false}, {r:2, c:4, val:'云', fixed:true}, {r:2, c:5, val:'亦', fixed:false}, {r:2, c:6, val:'云', fixed:true}
        ],
        options: ["心", "口", "大", "人", "亦", "云", "直", "言", "語", "信", "義", "理", "智", "仁"]
    },
    // --- 第 4 關：龍飛鳳舞 ---
    {
        id: 4,
        rows: 7,
        cols: 7,
        data: [
            {r:2, c:0, val:'車', fixed:true}, {r:2, c:1, val:'水', fixed:false}, {r:2, c:2, val:'馬', fixed:true}, {r:2, c:3, val:'龍', fixed:false},
            {r:3, c:3, val:'飛', fixed:true}, {r:4, c:3, val:'鳳', fixed:false}, {r:5, c:3, val:'舞', fixed:true},
            {r:3, c:2, val:'眉', fixed:false}, {r:3, c:3, val:'飛', fixed:true}, {r:3, c:4, val:'色', fixed:false}, {r:3, c:5, val:'舞', fixed:true}
        ],
        options: ["水", "龍", "鳳", "眉", "色", "馬", "車", "虎", "豹", "狼", "狗", "貓", "鳥", "魚"]
    },
    // --- 第 5 關：四面八方 ---
    {
        id: 5,
        rows: 7,
        cols: 7,
        data: [
            {r:2, c:0, val:'四', fixed:true}, {r:2, c:1, val:'面', fixed:false}, {r:2, c:2, val:'楚', fixed:false}, {r:2, c:3, val:'歌', fixed:true},
            {r:3, c:3, val:'舞', fixed:false}, {r:4, c:3, val:'昇', fixed:true}, {r:5, c:3, val:'平', fixed:false},
            {r:3, c:0, val:'海', fixed:false}, {r:4, c:0, val:'為', fixed:true}, {r:5, c:0, val:'家', fixed:false}
        ],
        options: ["面", "楚", "舞", "平", "海", "家", "歌", "昇", "上", "下", "左", "右", "東", "西"]
    },
    // --- 第 6 關：氣象萬千 ---
    {
        id: 6,
        rows: 6,
        cols: 7,
        data: [
            {r:1, c:0, val:'盲', fixed:true}, {r:1, c:1, val:'人', fixed:false}, {r:1, c:2, val:'摸', fixed:true}, {r:1, c:3, val:'象', fixed:false},
            {r:0, c:3, val:'氣', fixed:true}, {r:2, c:3, val:'萬', fixed:false}, {r:3, c:3, val:'千', fixed:true},
            {r:2, c:4, val:'眾', fixed:false}, {r:2, c:5, val:'一', fixed:true}, {r:2, c:6, val:'心', fixed:false}
        ],
        options: ["人", "象", "萬", "眾", "心", "氣", "千", "百", "十", "大", "小", "多", "少", "無"]
    },
    // --- 第 7 關：機智過人 ---
    {
        id: 7,
        rows: 7,
        cols: 7,
        data: [
            {r:2, c:0, val:'守', fixed:true}, {r:2, c:1, val:'株', fixed:false}, {r:2, c:2, val:'待', fixed:true}, {r:2, c:3, val:'兔', fixed:false},
            {r:3, c:3, val:'三', fixed:true}, {r:4, c:3, val:'窟', fixed:false}, {r:1, c:3, val:'狡', fixed:true},
            {r:3, c:4, val:'思', fixed:false}, {r:3, c:5, val:'而', fixed:true}, {r:3, c:6, val:'行', fixed:false}
        ],
        options: ["株", "兔", "窟", "思", "行", "守", "待", "三", "四", "五", "六", "七", "八", "九"]
    },
    // --- 第 8 關：口蜜腹劍 ---
    {
        id: 8,
        rows: 7,
        cols: 7,
        data: [
            {r:1, c:0, val:'破', fixed:true}, {r:1, c:1, val:'釜', fixed:false}, {r:1, c:2, val:'沉', fixed:true}, {r:1, c:3, val:'舟', fixed:false},
            {r:2, c:3, val:'求', fixed:true}, {r:3, c:3, val:'劍', fixed:false}, {r:0, c:3, val:'刻', fixed:true},
            {r:3, c:0, val:'口', fixed:true}, {r:3, c:1, val:'蜜', fixed:false}, {r:3, c:2, val:'腹', fixed:true}, {r:3, c:3, val:'劍', fixed:false}
        ],
        options: ["釜", "舟", "劍", "蜜", "求", "破", "口", "金", "木", "水", "火", "土", "兵", "將"]
    },
    // --- 第 9 關：求賢若渴 ---
    {
        id: 9,
        rows: 7,
        cols: 7,
        data: [
            {r:2, c:0, val:'望', fixed:true}, {r:2, c:1, val:'梅', fixed:false}, {r:2, c:2, val:'止', fixed:true}, {r:2, c:3, val:'渴', fixed:false},
            {r:0, c:3, val:'求', fixed:false}, {r:1, c:3, val:'賢', fixed:true}, {r:2, c:3, val:'渴', fixed:false}, {r:3, c:3, val: '若', fixed: false},
            {r:0, c:1, val:'緣', fixed:true}, {r:0, c:2, val:'木', fixed:false}, {r:0, c:3, val:'求', fixed:false}, {r:0, c:4, val:'魚', fixed:true}
        ],
        options: ["梅", "渴", "求", "若", "木", "望", "賢", "樹", "林", "森", "花", "草", "葉", "根"]
    },
    // --- 第 10 關：落花流水 ---
    {
        id: 10,
        rows: 7,
        cols: 7,
        data: [
            {r:1, c:0, val:'天', fixed:true}, {r:1, c:1, val:'花', fixed:false}, {r:1, c:2, val:'亂', fixed:true}, {r:1, c:3, val:'墜', fixed:false},
            {r:0, c:1, val:'落', fixed:true}, {r:2, c:1, val:'流', fixed:false}, {r:3, c:1, val:'水', fixed:true},
            {r:3, c:0, val:'細', fixed:false}, {r:3, c:1, val:'水', fixed:true}, {r:3, c:2, val:'長', fixed:false}, {r:3, c:3, val:'流', fixed:true}
        ],
        options: ["花", "墜", "流", "細", "長", "天", "落", "江", "河", "湖", "海", "洋", "波", "浪"]
    }
];