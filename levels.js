// levels.js - 成語填字遊戲題庫
// 包含 15 個精選關卡，難度由淺入深

const gameLevels = [
    // --- 第 1 關：初試啼聲 ---
    // 成語：一石二鳥、笨鳥先飛
    {
        id: 1,
        rows: 5,
        cols: 5,
        data: [
            // 橫：一石二鳥
            {r:1, c:0, val:'一', fixed:true}, {r:1, c:1, val:'石', fixed:false}, {r:1, c:2, val:'二', fixed:true}, {r:1, c:3, val:'鳥', fixed:false},
            // 直：笨鳥先飛 (交錯於 鳥)
            {r:0, c:3, val:'笨', fixed:true}, {r:1, c:3, val:'鳥', fixed:false}, {r:2, c:3, val:'先', fixed:false}, {r:3, c:3, val:'飛', fixed:true}
        ],
        options: ["石", "鳥", "先", "飛", "大", "人", "天", "手", "心", "力"]
    },

    // --- 第 2 關：色彩繽紛 ---
    // 成語：五花八門、五顏六色
    {
        id: 2,
        rows: 6,
        cols: 6,
        data: [
            // 橫：五花八門
            {r:2, c:1, val:'五', fixed:true}, {r:2, c:2, val:'花', fixed:false}, {r:2, c:3, val:'八', fixed:false}, {r:2, c:4, val:'門', fixed:true},
            // 直：五顏六色 (交錯於 五)
            {r:2, c:1, val:'五', fixed:true}, {r:3, c:1, val:'顏', fixed:false}, {r:4, c:1, val:'六', fixed:true}, {r:5, c:1, val:'色', fixed:false}
        ],
        options: ["花", "八", "顏", "色", "七", "九", "紅", "綠", "青", "白"]
    },

    // --- 第 3 關：畫龍點睛 ---
    // 成語：畫蛇添足、畫龍點睛
    {
        id: 3,
        rows: 7,
        cols: 7,
        data: [
            // 橫：畫蛇添足
            {r:2, c:1, val:'畫', fixed:true}, {r:2, c:2, val:'蛇', fixed:false}, {r:2, c:3, val:'添', fixed:false}, {r:2, c:4, val:'足', fixed:true},
            // 直：畫龍點睛 (交錯於 畫)
            {r:2, c:1, val:'畫', fixed:true}, {r:3, c:1, val:'龍', fixed:false}, {r:4, c:1, val:'點', fixed:true}, {r:5, c:1, val:'睛', fixed:false}
        ],
        options: ["蛇", "添", "龍", "睛", "馬", "牛", "羊", "眼", "耳", "口"]
    },

    // --- 第 4 關：動物大觀 ---
    // 成語：守株待兔、狡兔三窟、三思而行
    {
        id: 4,
        rows: 7,
        cols: 7,
        data: [
            // 橫：守株待兔
            {r:2, c:0, val:'守', fixed:true}, {r:2, c:1, val:'株', fixed:false}, {r:2, c:2, val:'待', fixed:true}, {r:2, c:3, val:'兔', fixed:false},
            // 直：狡兔三窟 (交錯於 兔)
            {r:1, c:3, val:'狡', fixed:true}, {r:2, c:3, val:'兔', fixed:false}, {r:3, c:3, val:'三', fixed:true}, {r:4, c:3, val:'窟', fixed:false},
            // 橫：三思而行 (交錯於 三)
            {r:3, c:3, val:'三', fixed:true}, {r:3, c:4, val:'思', fixed:false}, {r:3, c:5, val:'而', fixed:true}, {r:3, c:6, val:'行', fixed:false}
        ],
        options: ["株", "兔", "窟", "思", "行", "守", "待", "走", "跑", "跳", "坐", "卧"]
    },

    // --- 第 5 關：人山人海 ---
    // 成語：人山人海、海闊天空、坐吃山空
    {
        id: 5,
        rows: 6,
        cols: 6,
        data: [
            // 橫：人山人海
            {r:1, c:0, val:'人', fixed:true}, {r:1, c:1, val:'山', fixed:false}, {r:1, c:2, val:'人', fixed:true}, {r:1, c:3, val:'海', fixed:false},
            // 直：海闊天空 (交錯於 海)
            {r:1, c:3, val:'海', fixed:false}, {r:2, c:3, val:'闊', fixed:true}, {r:3, c:3, val:'天', fixed:false}, {r:4, c:3, val:'空', fixed:true},
            // 橫：坐吃山空 (交錯於 空)
            {r:4, c:0, val:'坐', fixed:true}, {r:4, c:1, val:'吃', fixed:false}, {r:4, c:2, val:'山', fixed:false}, {r:4, c:3, val:'空', fixed:true}
        ],
        options: ["山", "海", "天", "吃", "闊", "空", "地", "日", "月", "雲", "風", "雨"]
    },

    // --- 第 6 關：千變萬化 (數字篇) ---
    // 成語：千方百計、百發百中、無中生有
    {
        id: 6,
        rows: 6,
        cols: 6,
        data: [
            // 橫：千方百計
            {r:1, c:0, val:'千', fixed:true}, {r:1, c:1, val:'方', fixed:false}, {r:1, c:2, val:'百', fixed:true}, {r:1, c:3, val:'計', fixed:false},
            // 直：百發百中 (交錯於 百)
            {r:1, c:2, val:'百', fixed:true}, {r:2, c:2, val:'發', fixed:false}, {r:3, c:2, val:'百', fixed:true}, {r:4, c:2, val:'中', fixed:false},
            // 橫：無中生有 (交錯於 中)
            {r:4, c:1, val:'無', fixed:true}, {r:4, c:2, val:'中', fixed:false}, {r:4, c:3, val:'生', fixed:true}, {r:4, c:4, val:'有', fixed:false}
        ],
        options: ["方", "計", "發", "中", "有", "萬", "一", "二", "三", "四", "五", "六"]
    },

    // --- 第 7 關：身體力行 ---
    // 成語：口是心非、提心吊膽、渾身是膽
    {
        id: 7,
        rows: 7,
        cols: 7,
        data: [
            // 橫：口是心非
            {r:2, c:0, val:'口', fixed:true}, {r:2, c:1, val:'是', fixed:false}, {r:2, c:2, val:'心', fixed:true}, {r:2, c:3, val:'非', fixed:false},
            // 直：提心吊膽 (交錯於 心)
            {r:1, c:2, val:'提', fixed:false}, {r:2, c:2, val:'心', fixed:true}, {r:3, c:2, val:'吊', fixed:false}, {r:4, c:2, val:'膽', fixed:true},
            // 橫：渾身是膽 (交錯於 膽)
            {r:4, c:0, val:'渾', fixed:true}, {r:4, c:1, val:'身', fixed:false}, {r:4, c:2, val:'膽', fixed:true}, {r:4, c:3, val:'是', fixed:false} // "是" 為干擾或重複? 這裡沒重複
        ],
        options: ["是", "非", "提", "吊", "身", "膽", "手", "腳", "頭", "眼", "耳", "鼻"]
    },

    // --- 第 8 關：風起雲湧 ---
    // 成語：空穴來風、乘風破浪、長風破浪
    {
        id: 8,
        rows: 7,
        cols: 7,
        data: [
            // 直：空穴來風
            {r:0, c:2, val:'空', fixed:true}, {r:1, c:2, val:'穴', fixed:false}, {r:2, c:2, val:'來', fixed:true}, {r:3, c:2, val:'風', fixed:false},
            // 橫：乘風破浪 (交錯於 風)
            {r:3, c:1, val:'乘', fixed:false}, {r:3, c:2, val:'風', fixed:false}, {r:3, c:3, val:'破', fixed:true}, {r:3, c:4, val:'浪', fixed:false}
        ],
        options: ["穴", "風", "乘", "浪", "雨", "雷", "電", "雲", "海", "洋", "水", "波"]
    },

    // --- 第 9 關：心情寫照 (參考圖片風格) ---
    // 成語：啞口無言、暢所欲言、裝聾作啞
    {
        id: 9,
        rows: 6,
        cols: 7,
        data: [
            // 橫：啞口無言
            {r:2, c:0, val:'啞', fixed:false}, {r:2, c:1, val:'口', fixed:true}, {r:2, c:2, val:'無', fixed:false}, {r:2, c:3, val:'言', fixed:true},
            // 直：暢所欲言 (交錯於 言)
            {r:0, c:3, val:'暢', fixed:false}, {r:1, c:3, val:'所', fixed:true}, {r:2, c:3, val:'言', fixed:true}, {r:3, c:3, val:'欲', fixed:false}, // 注意順序
             // 這裡修正順序：暢所欲言 -> 暢(0,3) 所(1,3) 欲(2,3) 言(3,3)? 不對，題目是言在2,3
             // 那應該是：暢(0,3) 所(1,3) 欲(??) 言(2,3) -> 暢所欲言 -> 暢(0,3) 所(1,3) 欲(2,3) 言(3,3)
             // 調整：讓"言"在最後。 橫向改為：啞口無言(2,0 -> 2,3)。 直向：暢所欲言(2,3 -> 5,3)
             // 直：暢所欲言 (交錯於 言 - 2,3)
            {r:2, c:3, val:'言', fixed:true}, {r:3, c:3, val:'暢', fixed:false}, {r:4, c:3, val:'欲', fixed:true}, {r:5, c:3, val:'所', fixed:false}, // 這不是成語順序，重做
        ],
        // 修正後的配置
        data: [
             // 橫：啞口無言
            {r:3, c:0, val:'啞', fixed:false}, {r:3, c:1, val:'口', fixed:true}, {r:3, c:2, val:'無', fixed:false}, {r:3, c:3, val:'言', fixed:true},
            // 直：暢所欲言 (言在最後) -> 暢(0,3), 所(1,3), 欲(2,3), 言(3,3)
            {r:0, c:3, val:'暢', fixed:true}, {r:1, c:3, val:'所', fixed:false}, {r:2, c:3, val:'欲', fixed:true}, {r:3, c:3, val:'言', fixed:true},
            // 直：裝聾作啞 (啞在最後) -> 裝(0,0), 聾(1,0), 作(2,0), 啞(3,0)
            {r:0, c:0, val:'裝', fixed:true}, {r:1, c:0, val:'聾', fixed:false}, {r:2, c:0, val:'作', fixed:true}, {r:3, c:0, val:'啞', fixed:false}
        ],
        options: ["啞", "無", "所", "聾", "暢", "欲", "聽", "看", "說", "讀", "寫", "唱"]
    },

    // --- 第 10 關：豐衣足食 (參考圖片 52 關風格) ---
    // 成語：豐衣足食、手足無措、措手不及
    {
        id: 10,
        rows: 7,
        cols: 7,
        data: [
            // 橫：豐衣足食
            {r:2, c:0, val:'豐', fixed:true}, {r:2, c:1, val:'衣', fixed:false}, {r:2, c:2, val:'足', fixed:true}, {r:2, c:3, val:'食', fixed:false},
            // 直：手足無措 (交錯於 足)
            {r:1, c:2, val:'手', fixed:false}, {r:2, c:2, val:'足', fixed:true}, {r:3, c:2, val:'無', fixed:false}, {r:4, c:2, val:'措', fixed:true},
            // 橫：措手不及 (交錯於 措)
            {r:4, c:2, val:'措', fixed:true}, {r:4, c:3, val:'手', fixed:false}, {r:4, c:4, val:'不', fixed:true}, {r:4, c:5, val:'及', fixed:false}
        ],
        options: ["衣", "食", "手", "無", "及", "布", "鞋", "襪", "帽", "頭", "臉", "口"]
    },

    // --- 第 11 關：龍飛鳳舞 ---
    // 成語：車水馬龍、龍飛鳳舞、眉飛色舞
    {
        id: 11,
        rows: 7,
        cols: 7,
        data: [
            // 橫：車水馬龍
            {r:2, c:0, val:'車', fixed:true}, {r:2, c:1, val:'水', fixed:false}, {r:2, c:2, val:'馬', fixed:true}, {r:2, c:3, val:'龍', fixed:false},
            // 直：龍飛鳳舞 (交錯於 龍)
            {r:2, c:3, val:'龍', fixed:false}, {r:3, c:3, val:'飛', fixed:true}, {r:4, c:3, val:'鳳', fixed:false}, {r:5, c:3, val:'舞', fixed:true},
            // 橫：眉飛色舞 (交錯於 飛)
            {r:3, c:2, val:'眉', fixed:false}, {r:3, c:3, val:'飛', fixed:true}, {r:3, c:4, val:'色', fixed:false}, {r:3, c:5, val:'舞', fixed:true}
        ],
        options: ["水", "龍", "鳳", "眉", "色", "虎", "豹", "獅", "象", "狼", "狗", "貓"]
    },

    // --- 第 12 關：四面八方 (密集十字) ---
    // 成語：四面楚歌、歌舞昇平、四海為家
    {
        id: 12,
        rows: 7,
        cols: 7,
        data: [
            // 橫：四面楚歌
            {r:2, c:0, val:'四', fixed:true}, {r:2, c:1, val:'面', fixed:false}, {r:2, c:2, val:'楚', fixed:false}, {r:2, c:3, val:'歌', fixed:true},
            // 直：歌舞昇平 (交錯於 歌)
            {r:2, c:3, val:'歌', fixed:true}, {r:3, c:3, val:'舞', fixed:false}, {r:4, c:3, val:'昇', fixed:true}, {r:5, c:3, val:'平', fixed:false},
            // 直：四海為家 (交錯於 四)
            {r:2, c:0, val:'四', fixed:true}, {r:3, c:0, val:'海', fixed:false}, {r:4, c:0, val:'為', fixed:true}, {r:5, c:0, val:'家', fixed:false}
        ],
        options: ["面", "楚", "舞", "平", "海", "家", "東", "南", "西", "北", "上", "下"]
    },

    // --- 第 13 關：求知若渴 ---
    // 成語：望梅止渴、求賢若渴、緣木求魚
    {
        id: 13,
        rows: 7,
        cols: 7,
        data: [
            // 橫：望梅止渴
            {r:2, c:0, val:'望', fixed:true}, {r:2, c:1, val:'梅', fixed:false}, {r:2, c:2, val:'止', fixed:true}, {r:2, c:3, val:'渴', fixed:false},
            // 直：求賢若渴 (交錯於 渴)
            {r:0, c:3, val:'求', fixed:false}, {r:1, c:3, val:'賢', fixed:true}, {r:2, c:3, val:'渴', fixed:false}, {r:3, c:3, val:'若', fixed:true}, // 注意這裡若在最後? 不對, 求賢若渴 -> 求(0)賢(1)若(2)渴(3)? 題目渴在2,3
            // 修正直：求(0,3) 賢(1,3) 若(??) 渴(2,3)? -> 求賢若渴
            // 調整：讓渴在最後。 直：求(?,3) 賢(?,3) 若(1,3) 渴(2,3)
            // 橫：緣木求魚 -> 求 在 0,3
            // 讓我們重新佈局
        ],
        data: [
             // 直：求賢若渴
            {r:0, c:3, val:'求', fixed:false}, {r:1, c:3, val:'賢', fixed:true}, {r:2, c:3, val:'若', fixed:false}, {r:3, c:3, val:'渴', fixed:true},
            // 橫：望梅止渴 (交錯於 渴)
            {r:3, c:0, val:'望', fixed:true}, {r:3, c:1, val:'梅', fixed:false}, {r:3, c:2, val:'止', fixed:true}, {r:3, c:3, val:'渴', fixed:true},
            // 橫：緣木求魚 (交錯於 求)
            {r:0, c:1, val:'緣', fixed:true}, {r:0, c:2, val:'木', fixed:false}, {r:0, c:3, val:'求', fixed:false}, {r:0, c:4, val:'魚', fixed:true}
        ],
        options: ["梅", "若", "求", "木", "賢", "望", "林", "樹", "花", "草", "葉", "根"]
    },

    // --- 第 14 關：流水落花 ---
    // 成語：天花亂墜、落花流水、細水長流
    {
        id: 14,
        rows: 7,
        cols: 7,
        data: [
            // 橫：天花亂墜
            {r:1, c:0, val:'天', fixed:true}, {r:1, c:1, val:'花', fixed:false}, {r:1, c:2, val:'亂', fixed:true}, {r:1, c:3, val:'墜', fixed:false},
            // 直：落花流水 (交錯於 花)
            {r:0, c:1, val:'落', fixed:true}, {r:1, c:1, val:'花', fixed:false}, {r:2, c:1, val:'流', fixed:false}, {r:3, c:1, val:'水', fixed:true},
            // 橫：細水長流 (交錯於 水)
            {r:3, c:0, val:'細', fixed:false}, {r:3, c:1, val:'水', fixed:true}, {r:3, c:2, val:'長', fixed:false}, {r:3, c:3, val:'流', fixed:true}
        ],
        options: ["花", "墜", "流", "細", "長", "落", "江", "河", "湖", "海", "洋", "溪"]
    },

    // --- 第 15 關：終極挑戰 (大雜燴) ---
    // 成語：天下太平、憤憤不平、人定勝天
    {
        id: 15,
        rows: 7,
        cols: 7,
        data: [
            // 橫：天下太平
            {r:2, c:1, val:'天', fixed:true}, {r:2, c:2, val:'下', fixed:false}, {r:2, c:3, val:'太', fixed:false}, {r:2, c:4, val:'平', fixed:true},
            // 直：憤憤不平 (交錯於 平)
            {r:0, c:4, val:'憤', fixed:true}, {r:1, c:4, val:'憤', fixed:false}, {r:2, c:4, val:'不', fixed:false}, {r:3, c:4, val:'平', fixed:true}, // 注意這裡 "平" 重複了? 題目 "不" 在 2,4? 
            // 修正：天下太平 -> 平(2,4)。 憤憤不平 -> 不(2,4) 不對。
            // 憤(0,4) 憤(1,4) 不(2,4) 平(3,4)。 所以 天下太平(橫) 和 憤憤不平(直) 在 (2,4) 交錯的字是... "不" 和 "平" 不一樣。
            // 讓我們改用 "人定勝天"
            // 直：人定勝天 (交錯於 天)
            {r:2, c:1, val:'天', fixed:true}, {r:3, c:1, val:'勝', fixed:false}, {r:4, c:1, val:'定', fixed:true}, {r:5, c:1, val:'人', fixed:false}, // 倒著寫? 人定勝天 -> 人(5,1) 定(4,1) 勝(3,1) 天(2,1) (由下往上? 不好)
            // 正常直寫：人(0,1) 定(1,1) 勝(2,1) 天(3,1)。
            // 那 橫寫 天下太平 必須在 (3,1) 開始。
        ],
        // 修正後的配置 15
        data: [
            // 直：人定勝天
            {r:0, c:1, val:'人', fixed:true}, {r:1, c:1, val:'定', fixed:false}, {r:2, c:1, val:'勝', fixed:true}, {r:3, c:1, val:'天', fixed:false},
            // 橫：天下太平 (交錯於 天)
            {r:3, c:1, val:'天', fixed:false}, {r:3, c:2, val:'下', fixed:true}, {r:3, c:3, val:'太', fixed:false}, {r:3, c:4, val:'平', fixed:true},
            // 直：憤憤不平 (交錯於 平)
            {r:0, c:4, val:'憤', fixed:false}, {r:1, c:4, val:'憤', fixed:true}, {r:2, c:4, val:'不', fixed:false}, {r:3, c:4, val:'平', fixed:true}
        ],
        options: ["定", "天", "下", "太", "憤", "不", "地", "高", "低", "左", "右", "中"]
    }
];