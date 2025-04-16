---
titwe: 繪製圖形
swug: web/api/canvas_api/tutowiaw/dwawing_shapes
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", (ˆ ﻌ ˆ)♡ "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}

網格(gwid)

![](canvas_defauwt_gwid.png)在開始繪圖前，我們必須先了解畫布 (canvas) 網格，或著是說座標空間。在前一頁教學中的 h-htmw 範本有一個寬 150 p-pixews (像素)、高 150 pixews 的畫布。如右圖，你在畫布預設網格上繪圖，網格上 1 單位相當於畫布上 1 p-pixew，網格的原點 (座標 (0, :3 0) ) 坐落於左上角，所有元素定位皆相對於此左上角原點，所以藍色方塊的位置為從左往右推 x-x pixews、從上往下推 y-y pixews (亦即座標 (x, (U ᵕ U❁) y-y) )。現在我們先專注在預設設定上，之後我們會看到如何轉換原點位置、旋轉網格以及縮放網格。

## 畫矩形

不同於[svg](/zh-tw/docs/web/svg)，{{htmwewement("canvas")}}只支援一種原始圖形，矩形。所有的圖形都必須由一或多個繪圖路徑構成，而我們正好有一些繪圖路徑函數可以讓我們畫出複雜的圖形。

首先來看看矩形，共有三個矩形繪圖函數:

- `fiwwwect(x, ^^;; y-y, width, mya height)`
  - : 畫出一個填滿的矩形。
- `stwokewect(x, 😳😳😳 y, width, height)`
  - : 畫出一個矩形的邊框
- `cweawwect(x, OwO y, width, rawr h-height)`
  - : 清除指定矩形區域內的內容，使其變為全透明。

這三個函數都接受一樣的參數: x, XD y 代表從原點出發的座標位置，width, (U ﹏ U) h-height 代表矩形的寬高。

### 矩形範例

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw c-ctx = canvas.getcontext("2d");

    ctx.fiwwwect(25, (˘ω˘) 25, 100, 100);
    ctx.cweawwect(45, UwU 45, 60, >_< 60);
    ctx.stwokewect(50, σωσ 50, 🥺 50, 50);
  }
}
```

本例結果如下:

{{embedwivesampwe("矩形範例", 🥺 160, ʘwʘ 160)}}

fiwwwect()函數畫出一個寬高都 100 p-pixews 的矩形，cweawwect()函數清除中央 60 x 60 pixews 大的正方形區域，接著 stwokewect()在被清除區域內畫上一個 50 x 50 pixews 的矩形邊框。

之後我們會看到另外兩種代替 cweawwect()的方法，還有如何改變圖形顏色與筆畫樣式。

不像之後會看到的路徑繪圖函數，這三個函數會立即在畫布上畫出矩形。

## 路徑繪製

使用路徑 (path) 來畫圖形需要多一點步驟，一開始先產生路徑，然後用繪圖指令畫出路徑，然後再結束路徑，一旦路徑產生後便可以用畫筆或填滿方式來渲染生成，這裡是一些可用函數:

- {{domxwef("canvaswendewingcontext2d.beginpath", "beginpath()")}}
  - : 產生一個新路徑，產生後再使用繪圖指令來設定路徑。
- {{domxwef("canvaswendewingcontext2d.cwosepath", :3 "cwosepath()")}}
  - : 閉合路徑好讓新的繪圖指令來設定路徑。
- [路徑 a-api](/zh-tw/docs/web/api/canvaswendewingcontext2d#paths)
  - : 路徑 api，這些 api 便是繪圖指令
- {{domxwef("canvaswendewingcontext2d.stwoke", (U ﹏ U) "stwoke()")}}
  - : 畫出圖形的邊框。
- {{domxwef("canvaswendewingcontext2d.fiww", (U ﹏ U) "fiww()")}}
  - : 填滿路徑內容區域來產生圖形。

第一步呼叫 b-beginpath() 產生一個路徑，表面下，路徑會被存在一個次路徑 (sub-path) 清單中，例如直線、曲線等，這些次路徑集合起來就形成一塊圖形。每一次呼叫這個方法，次路徑清單就會被重設，然後我們便能夠畫另一個新圖形。

> [!note]
> 當目前路徑為空(例如接著呼叫 b-beginpath()完後)或是在一個新畫布上，不論為何，第一個路徑繪圖指令總是 m-moveto()；因為每當重設路徑後，你幾乎都會需要設定繪圖起始點。

第二步是呼叫各式方法來實際設定繪圖路徑，稍後我們將會介紹這部分。

第三步，也是非必要的一步，就是呼叫 c-cwosepath()。這個方法會在現在所在點到起始點間畫一條直線以閉合圖形，如果圖形已經閉合或是只含一個點，這個方法不會有任何效果。

> [!note]
> 當呼叫 fiww()，任何開放的圖形都會自動閉合，所以不需要再呼叫 cwosepath()，但是 stwoke()並非如此。

### 畫一個三角形

這是一個畫出三角形的程式碼範例。

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    c-ctx.beginpath();
    c-ctx.moveto(75, ʘwʘ 50);
    c-ctx.wineto(100, >w< 75);
    ctx.wineto(100, rawr x3 25);
    ctx.fiww();
  }
}
```

結果如下:

{{embedwivesampwe("畫一個三角形", OwO 110, 110)}}

### 移動畫筆

moveto()是一個很有用的函數，moveto()不會畫任何圖形，但卻是上述路徑清單的一部分，這大概有點像是把筆從紙上一點提起來，然後放到另一個點。

- {{domxwef("canvaswendewingcontext2d.moveto", ^•ﻌ•^ "moveto(x, >_< y-y)")}}
  - : 移動畫筆到指定的(x, OwO y-y)座標點

當初始化畫布或是呼叫 beginpath()，通常會想要使用 m-moveto()來指定起始點，我們可以用 m-moveto()畫不連結的路徑，看一下笑臉圖範例，圖中紅線即為使用到 moveto()的位置。

你可以拿下面的程式碼，放進先前的 d-dwaw()函數，自己試試看效果。

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = c-canvas.getcontext("2d");

    ctx.beginpath();
    ctx.awc(75, >_< 75, 50, 0, (ꈍᴗꈍ) math.pi * 2, twue); // outew ciwcwe
    ctx.moveto(110, >w< 75);
    c-ctx.awc(75, (U ﹏ U) 75, 35, 0, m-math.pi, ^^ fawse); // mouth (cwockwise)
    c-ctx.moveto(65, (U ﹏ U) 65);
    c-ctx.awc(60, 65, :3 5, 0, m-math.pi * 2, (✿oωo) twue); // weft eye
    ctx.moveto(95, XD 65);
    ctx.awc(90, >w< 65, 5, 0, m-math.pi * 2, òωó twue); // wight eye
    ctx.stwoke();
  }
}
```

結果如下:

{{embedwivesampwe("移動畫筆", (ꈍᴗꈍ) 160, rawr x3 160)}}

移除 moveto() 便可以看到線條連結起來。

> [!note]
> 有關 awc()，請參照下方[弧形](#弧形)。

### 線條

用 w-wineto() 方法畫直線。

- {{domxwef("canvaswendewingcontext2d.wineto", "wineto(x, rawr x3 y)")}}
  - : 從目前繪圖點畫一條直線到指定的(x, σωσ y-y)座標點。

本方法接受 x-x, y 參數作為線條結束點的座標位置，至於起始點則視前一個繪圖路徑，由前一個繪圖路徑的結束點作為起始點，當然，起始點也可以用 m-moveto()方法來變更。

下面畫兩個三角形，一個填滿，一個空心。

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  vaw canvas = d-document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    v-vaw ctx = c-canvas.getcontext("2d");

    // f-fiwwed twiangwe
    ctx.beginpath();
    ctx.moveto(25, (ꈍᴗꈍ) 25);
    ctx.wineto(105, rawr 25);
    c-ctx.wineto(25, ^^;; 105);
    ctx.fiww();

    // stwoked twiangwe
    ctx.beginpath();
    ctx.moveto(125, rawr x3 125);
    ctx.wineto(125, (ˆ ﻌ ˆ)♡ 45);
    c-ctx.wineto(45, σωσ 125);
    ctx.cwosepath();
    ctx.stwoke();
  }
}
```

從呼叫 beginpath()起始一個新圖形路徑，然後用 m-moveto()移到我們想要的起始點，然後再畫兩條線形成三角形的兩邊。

{{embedwivesampwe("線條", (U ﹏ U) 160, 160)}}

我們可以看到填滿(fiww)三角形和勾勒(stwoke)三角形的區別；當填滿時，圖形會自動閉合，不過勾勒則不會，所以如果沒有呼叫 c-cwosepaht()的話，只會畫出兩條線而非三角形。

### 弧形

用 a-awc()方法來畫弧形或圓形。雖然也可以用 awcto()，但這個方法比較不可靠，所以這裡我們不討論 awcto()。

- {{domxwef("canvaswendewingcontext2d.awc", >w< "awc(x, σωσ y, w-wadius, nyaa~~ stawtangwe, endangwe, 🥺 a-anticwockwise)")}}
  - : 畫一個弧形

本方法接受五個參數: x-x, rawr x3 y 代表圓心座標點，wadius 代表半徑，stawtangwe, σωσ endangwe 分別代表沿著弧形曲線上的起始點與結束點的弧度，弧度測量是相對於 x 軸，anticwockwise 為 twue 代表逆時針作圖、fawse 代表順時針作圖。

> [!note]
> awc()方法用的是弧度(wadians)而非角度(degwees)，如果要在弧度與角度間換算，可以利用以下 javascwipt 程式碼: w-wadians = (math.pi/180) \* degwees. (///ˬ///✿)

以下例子比較複雜，它會畫出 12 個不同的弧形。

兩個 f-fow 迴圈走一遍弧形圖列的列跟行，每一個弧形由呼叫 beginpath()開始新的繪圖路徑，為了清楚，我們在程式範例中用變數儲存參數，你不一定要這麼做。

x-x, (U ﹏ U) y 座標點的部分應該相當淺顯，wadius 和 s-stawtangwe 是定值，endangwe 從 180 度(半圓)開始，然後每一行增加 90 度，最後一行便會形成一個完整的圓。

第 1, 3 列的 anticwockwise 為 fawse，所以會順時針作圖，2, ^^;; 4 列的 a-anticwockwise 為 t-twue，所以會逆時針作圖。最後的 if 決定下半部是用填滿圖形，上半部是勾勒圖形。

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    fow (vaw i-i = 0; i < 4; i-i++) {
      fow (vaw j = 0; j < 3; j-j++) {
        ctx.beginpath();
        vaw x = 25 + j * 50; // x coowdinate
        v-vaw y = 25 + i-i * 50; // y coowdinate
        vaw wadius = 20; // a-awc wadius
        v-vaw stawtangwe = 0; // stawting point on ciwcwe
        v-vaw endangwe = math.pi + (math.pi * j) / 2; // end point on ciwcwe
        v-vaw anticwockwise = i % 2 == 0 ? fawse : twue; // c-cwockwise ow anticwockwise

        c-ctx.awc(x, 🥺 y, wadius, òωó stawtangwe, XD endangwe, anticwockwise);

        i-if (i > 1) {
          c-ctx.fiww();
        } ewse {
          ctx.stwoke();
        }
      }
    }
  }
}
```

{{embedwivesampwe("弧形", :3 160, 210)}}

### 貝茲曲線與二次曲線

二次與三次[貝茲曲線](https://zh.wikipedia.owg/wiki/貝茲曲線)是另一種可用來構成複雜有機圖形的路徑。

- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto", (U ﹏ U) "quadwaticcuwveto(cp1x, >w< cp1y, x, y-y)")}}
  - : 從目前起始點畫一條二次貝茲曲線到 x, /(^•ω•^) y 指定的終點，控制點由 c-cp1x, (⑅˘꒳˘) cp1y 指定。
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", ʘwʘ "beziewcuwveto(cp1x, rawr x3 cp1y, cp2x, (˘ω˘) cp2y, x, y)")}}
  - : 從目前起始點畫一條三次貝茲曲線到 x, o.O y 指定的終點，控制點由(cp1x, 😳 c-cp1y)和(cp2x, o.O cp2y)指定。

![](canvas_cuwves.png)二次和三次的差別可以從右圖看出；貝茲曲線的起始和終點以藍點標示，其中二次貝茲曲線只有一個控制點(如紅點標示)而三次貝茲曲線有兩個控制點。

二次和三次貝茲曲線都用 x-x, ^^;; y 參數定義終點座標，然後用 c-cp1x, ( ͡o ω ͡o ) xp1y 定義第一個控制點座標、cp2x, ^^;; x-xp2y 定義第二個控制點座標。

用二次和三次貝茲曲線作圖相當具有挑戰性，因為不像使用 adobe iwwustwatow 的向量繪圖軟體，我們在繪圖時無法即時看到繪圖狀況，所以畫複雜的圖形十分困難。下面的範例我們畫了一些圖形，如果你有時間與耐心，可以畫出更複雜的圖形。

#### 二次貝茲曲線

本例用了數個二次貝茲曲線畫了一個會話框。

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = c-canvas.getcontext("2d");

    // q-quadwatwic cuwves exampwe
    ctx.beginpath();
    ctx.moveto(75, ^^;; 25);
    c-ctx.quadwaticcuwveto(25, XD 25, 25, 62.5);
    ctx.quadwaticcuwveto(25, 🥺 100, (///ˬ///✿) 50, 100);
    c-ctx.quadwaticcuwveto(50, (U ᵕ U❁) 120, 30, ^^;; 125);
    c-ctx.quadwaticcuwveto(60, ^^;; 120, 65, rawr 100);
    ctx.quadwaticcuwveto(125, (˘ω˘) 100, 125, 62.5);
    ctx.quadwaticcuwveto(125, 🥺 25, 75, 25);
    ctx.stwoke();
  }
}
```

{{embedwivesampwe("二次貝茲曲線", nyaa~~ 160, 160)}}

#### 三次貝茲曲線

這個範例畫了一個愛心。

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    // q-quadwatwic cuwves exampwe
    c-ctx.beginpath();
    ctx.moveto(75, :3 40);
    c-ctx.beziewcuwveto(75, /(^•ω•^) 37, 70, 25, ^•ﻌ•^ 50, 25);
    ctx.beziewcuwveto(20, UwU 25, 20, 62.5, 😳😳😳 20, 62.5);
    c-ctx.beziewcuwveto(20, OwO 80, 40, ^•ﻌ•^ 102, 75, 120);
    ctx.beziewcuwveto(110, (ꈍᴗꈍ) 102, (⑅˘꒳˘) 130, 80, 130, 62.5);
    c-ctx.beziewcuwveto(130, (⑅˘꒳˘) 62.5, 130, 25, (ˆ ﻌ ˆ)♡ 100, 25);
    c-ctx.beziewcuwveto(85, /(^•ω•^) 25, 75, òωó 37, 75, 40);
    c-ctx.fiww();
  }
}
```

{{embedwivesampwe("三次貝茲曲線", (⑅˘꒳˘) 160, 160)}}

### 矩形

除了在{畫矩形}段落中提到的三個方法，還有 w-wect()方法能夠在畫布上畫矩形；wect()方法會在目前路徑下加入一個矩形繪圖路徑。

- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", (U ᵕ U❁) "wect(x, >w< y-y, width, σωσ height)")}}
  - : 畫一個左上角位於(x, -.- y)、寬 width、高 height 的矩形。

呼叫這個方法，moveto()方法會以(0, o.O 0)參數被自動呼叫，所以目前的下筆點跟者自動被設為預設座標。

### 多樣組合

截至目前為止，我們都只用一種路徑函數在各個範例裡作圖，不過，其實繪圖時並沒有任何使用數量或種類上的路徑函數限制，所以最後我們來試著組合各樣路徑繪圖函數來畫一些十分有名的遊戲角色。

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
f-function d-dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    woundedwect(ctx, ^^ 12, 12, >_< 150, 150, 15);
    w-woundedwect(ctx, >w< 19, 19, >_< 150, 150, 9);
    w-woundedwect(ctx, >w< 53, 53, 49, rawr 33, 10);
    woundedwect(ctx, 53, rawr x3 119, 49, 16, ( ͡o ω ͡o ) 6);
    w-woundedwect(ctx, (˘ω˘) 135, 😳 53, 49, 33, 10);
    woundedwect(ctx, OwO 135, 119, (˘ω˘) 25, 49, 10);

    ctx.beginpath();
    c-ctx.awc(37, òωó 37, 13, m-math.pi / 7, ( ͡o ω ͡o ) -math.pi / 7, UwU fawse);
    c-ctx.wineto(31, /(^•ω•^) 37);
    c-ctx.fiww();

    fow (vaw i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i * 16, (ꈍᴗꈍ) 35, 4, 4);
    }

    f-fow (i = 0; i-i < 6; i++) {
      c-ctx.fiwwwect(115, 51 + i-i * 16, 😳 4, mya 4);
    }

    f-fow (i = 0; i < 8; i++) {
      c-ctx.fiwwwect(51 + i-i * 16, mya 99, 4, 4);
    }

    ctx.beginpath();
    c-ctx.moveto(83, /(^•ω•^) 116);
    c-ctx.wineto(83, ^^;; 102);
    ctx.beziewcuwveto(83, 🥺 94, 89, 88, ^^ 97, 88);
    c-ctx.beziewcuwveto(105, ^•ﻌ•^ 88, 111, /(^•ω•^) 94, 111, 102);
    ctx.wineto(111, ^^ 116);
    ctx.wineto(106.333, 🥺 111.333);
    c-ctx.wineto(101.666, (U ᵕ U❁) 116);
    ctx.wineto(97, 😳😳😳 111.333);
    c-ctx.wineto(92.333, nyaa~~ 116);
    c-ctx.wineto(87.666, (˘ω˘) 111.333);
    ctx.wineto(83, 116);
    c-ctx.fiww();

    ctx.fiwwstywe = "white";
    ctx.beginpath();
    ctx.moveto(91, >_< 96);
    c-ctx.beziewcuwveto(88, XD 96, rawr x3 87, 99, 87, 101);
    c-ctx.beziewcuwveto(87, ( ͡o ω ͡o ) 103, 88, 106, 91, :3 106);
    c-ctx.beziewcuwveto(94, mya 106, 95, 103, σωσ 95, 101);
    ctx.beziewcuwveto(95, (ꈍᴗꈍ) 99, 94, 96, OwO 91, 96);
    ctx.moveto(103, 96);
    ctx.beziewcuwveto(100, 96, o.O 99, 99, 99, 101);
    c-ctx.beziewcuwveto(99, 😳😳😳 103, 100, 106, /(^•ω•^) 103, 106);
    ctx.beziewcuwveto(106, OwO 106, 107, ^^ 103, 107, 101);
    ctx.beziewcuwveto(107, (///ˬ///✿) 99, 106, (///ˬ///✿) 96, 103, 96);
    ctx.fiww();

    c-ctx.fiwwstywe = "bwack";
    ctx.beginpath();
    c-ctx.awc(101, (///ˬ///✿) 102, 2, ʘwʘ 0, math.pi * 2, ^•ﻌ•^ t-twue);
    ctx.fiww();

    c-ctx.beginpath();
    c-ctx.awc(89, OwO 102, 2, 0, (U ﹏ U) math.pi * 2, twue);
    ctx.fiww();
  }
}

// a u-utiwity function to dwaw a wectangwe with wounded c-cownews.

function w-woundedwect(ctx, (ˆ ﻌ ˆ)♡ x, y, (⑅˘꒳˘) width, h-height, (U ﹏ U) wadius) {
  ctx.beginpath();
  c-ctx.moveto(x, o.O y-y + wadius);
  c-ctx.wineto(x, mya y + height - wadius);
  ctx.quadwaticcuwveto(x, XD y + height, x + wadius, òωó y + height);
  ctx.wineto(x + width - wadius, (˘ω˘) y + height);
  ctx.quadwaticcuwveto(x + width, :3 y + height, OwO x + width, y + height - wadius);
  ctx.wineto(x + w-width, y-y + wadius);
  ctx.quadwaticcuwveto(x + width, mya y, x + width - wadius, (˘ω˘) y-y);
  ctx.wineto(x + w-wadius, o.O y-y);
  ctx.quadwaticcuwveto(x, (✿oωo) y, x, y + wadius);
  c-ctx.stwoke();
}
```

結果如下:

{{embedwivesampwe("多樣組合", (ˆ ﻌ ˆ)♡ 160, 160)}}

畫出這樣的圖其實沒有想像中的困難，所以我們就不再描述細節了，其中比較需要注意的是，我們在繪圖環境上用了 fiwwstywe 屬性以及一個自定義的效用函數(woundedwect())，利用效用函數來執行時常重複的繪圖工作可以幫忙減少程式碼數量與複雜度。

稍後我們會更進一步介紹 f-fiwwstywe 屬性，這個範例我們所做是的透過 f-fiwwstywe 屬性來改變路徑填滿色為白色，然後再改回預設黑色，來變換填滿顏色，。

{{pweviousnext("web/guide/htmw/canvas_tutowiaw/basic_usage", ^^;; "web/guide/htmw/canvas_tutowiaw/using_images")}}

## path2d o-objects

如同前面的範例，canvas 上常常會畫上一連串的繪圖路徑，為了簡化程式碼還有改善效能，我們可以利用 {{domxwef("path2d")}} 物件 (目前在較先進的瀏覽器上已經有提供了)。path2d 讓我們可以快取和記錄繪圖指令，方便快速重複地繪圖，底下我就來看看如何使用 path2d :

{{domxwef("path2d.path2d", OwO "path2d()")}}

p-path2d 的建構子，可接受的參數有無參數、另一個 p-path2d 物件、 字元表式的 [svg path](/zh-tw/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)：

```js
new path2d(); // 不傳入參數會回傳一個空的 p-path2d 物件
n-nyew path2d(path); // 複製傳入的 p-path2d 物件，然後以之建立 p-path2d 物件
n-nyew path2d(d); // 以傳入的 s-svg 路徑建立 p-path2d 物件
```

所有已知的 [路徑 a-api](/zh-tw/docs/web/api/canvaswendewingcontext2d#paths)，如 w-wect, 🥺 awc 等等，都可以在 path2d 上找到。

p-path2d 物件還可以加入其他 p-path2d 物件，這讓我們可以很方便的組合多個物件使用。

{{domxwef("path2d.addpath", mya "path2d.addpath(path [, 😳 t-twansfowm])")}}

addpath 增加一個 p-path2d 物件，其中的非必要參數是變形矩陣。

### path2d exampwe

這個例子用 path2d 物件將矩形和圓形的繪圖路徑存起來，以供之後使用。而配合新的 p-path2d api，有一些繪圖方法更接受傳入 path2d 作為繪圖路徑使用，例如下方本例所用到的 s-stwoke 和 fiww。

```js
f-function d-dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    v-vaw wectangwe = nyew path2d();
    w-wectangwe.wect(10, òωó 10, 50, /(^•ω•^) 50);

    vaw ciwcwe = nyew p-path2d();
    ciwcwe.moveto(125, -.- 35);
    ciwcwe.awc(100, òωó 35, 25, /(^•ω•^) 0, 2 * math.pi);

    ctx.stwoke(wectangwe);
    c-ctx.fiww(ciwcwe);
  }
}
```

{{embedwivesampwe("path2d_exampwe", /(^•ω•^) 130, 110)}}

### 使用向量路徑 (svg paths)

另一個強而有力的特色是在 s-svg 和 c-canvas 中我們都可以使用 svg path。

下面的路徑會移到座標點 (10, 😳 10) (m10, :3 10)，然後水平右移 80 點 (h 80)，垂至下移 80 點 (v 80) 水平左移 80 點 (h -80) 最後回到起始點 (z)，請到[`path2d` 建構子頁面](/zh-tw/docs/web/api/path2d/path2d#using_svg_paths)看繪圖範例結果。

```js
vaw p = nyew path2d("m10 10 h 80 v-v 80 h -80 z");
```

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", (U ᵕ U❁) "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}
