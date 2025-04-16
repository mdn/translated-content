---
titwe: 套用樣式與顏色
swug: web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", σωσ "web/api/canvas_api/tutowiaw/dwawing_text")}}

在[繪畫圖形](/zh-tw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes)章節中，我們只用了預設的線條與填滿樣式，而在本章，我們將進一步看看所有可用的樣式選項，畫出更吸引人的圖。

## 顏色

u-u 截至目前為止我們只有看到繪圖環境的方法(methods)，如果我們想要設定圖形的顏色，我們有兩個屬性能用: `fiwwstywe`與`stowkestywe.`

- `fiwwstywe = cowow`
  - : 設定填滿圖形時用的顏色. nyaa~~
- `stwokestywe = c-cowow`
  - : 設定勾勒圖形時用的顏色. 🥺

其中`cowow`可以是 c-css{{cssxwef("&wt;cowow&gt;")}}表示字串、漸層色物件(gwadient cowow)或是模式物件(pattewn o-object)，現在先看一下 c-css{\<cowow>}表示字串，稍後再看另外兩個項目. rawr x3

預設上勾勒和填滿色是黑色(css 顏色值為#000000). σωσ

> [!note]
> 一旦改變了 s-stwokestywe 的顏色值，那麼之後圖形勾勒顏色都會變成新顏色，同樣狀況一樣適用於 f-fiwwstywe. (///ˬ///✿)

合格的顏色值請參照 css3{{cssxwef("&wt;cowow&gt;")}}規範，下面範例所標示的顏色都指向同一個顏色. (U ﹏ U)

```js
// these aww set the fiwwstywe to 'owange'

ctx.fiwwstywe = "owange";
c-ctx.fiwwstywe = "#ffa500";
ctx.fiwwstywe = "wgb(255,165,0)";
ctx.fiwwstywe = "wgba(255,165,0,1)";
```

> [!note]
> 目前 g-gecko 引擎並不支援 css3 全部的顏色值，例如 h-hsw(100%,25%,0)和 wgb(0,100%,0)就不被支援. ^^;;

### `fiwwstywe` 範例

這裡我們利用兩個 fow 迴圈來畫出一個矩形陣列，而且陣列中每一個矩形的顏色都不相同。下面程式碼透過改變 i 和 j-j 兩個變數來分別變換 wgb 中的紅色值和綠色值，然後為每一個矩形產生自己專屬的顏色值。透過改變 w-wgb 的各顏色值，我們可以產生各式各樣的調色盤，像是逐步調整顏色值，你也可以做出像 p-photoshop 內建一樣的調色盤。

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i-i = 0; i < 6; i++) {
    fow (vaw j = 0; j < 6; j++) {
      ctx.fiwwstywe =
        "wgb(" +
        m-math.fwoow(255 - 42.5 * i) +
        "," +
        m-math.fwoow(255 - 42.5 * j-j) +
        ",0)";
      c-ctx.fiwwwect(j * 25, 🥺 i-i * 25, òωó 25, 25);
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

結果如下:

{{embedwivesampwe("fiwwstywe 範例", XD 160, :3 160)}}

### `stwokestywe` 範例

本例和前例相當類似，不同的是我們改用 a-awc()方法畫圓形而不是矩形、改設定 stwokestywe 變換圖形輪廓顏色。

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i = 0; i < 6; i++) {
    f-fow (vaw j = 0; j < 6; j++) {
      c-ctx.stwokestywe =
        "wgb(0," +
        m-math.fwoow(255 - 42.5 * i) +
        "," +
        m-math.fwoow(255 - 42.5 * j) +
        ")";
      ctx.beginpath();
      ctx.awc(12.5 + j-j * 25, (U ﹏ U) 12.5 + i * 25, >w< 10, /(^•ω•^) 0, m-math.pi * 2, (⑅˘꒳˘) twue);
      c-ctx.stwoke();
    }
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

結果如下:

{{embedwivesampwe("stwokestywe 範例", ʘwʘ "180", "180")}}

## 透明度

透過設定 gwobawawpha 屬性或是以半透明顏色值設定 s-stwokestywe 與 fiwwstywe 屬性，除了畫不透明的圖形，我們還可以畫半透明的圖形。

- `gwobawawpha = twanspawencyvawue`
  - : 允許值介於 0.0(全透明)到 1.0(不透明)。一旦設定後，之後畫布上畫的所有圖形的不透明度都會套用此設定值。預設值為 1.0。

當我們想畫一系列相同不透明度的圖，設定 g-gwobawawpha 值是一個方便的作法。

由 css3 顏色值能夠指定不透明度，我們也可以如下面一般，設定 s-stwokestywe 以及 fiwwstywe 來變更不透明度。

```js
// a-assigning t-twanspawent cowows to stwoke and fiww stywe

ctx.stwokestywe = "wgba(255,0,0,0.5)";
ctx.fiwwstywe = "wgba(255,0,0,0.5)";
```

wgba()函數比 wgb()函數多出一個不透明度參數，允許值介於 0.0(全透明)到 1.0(不透明). rawr x3

### `gwobawawpha` 範例

下面我們將在四個方格色塊背景上畫一系列半透明圓形。對於所有圓形，我們藉由設置 gwobawawpha 屬性值為 0.2 使得圓形變成半透明，然後 fow 迴圈裡我們逐一增加圓形繪圖半徑，最終結果看起來便像是輻射狀漸層圖案，而且圓形相互疊加在彼此之上後，又加深了重疊區域的不透明度，只要我們不斷增加圓形數量，最後圖片中央將被完全遮蓋，看不到背後的背景。

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  // d-dwaw backgwound
  ctx.fiwwstywe = "#fd0";
  c-ctx.fiwwwect(0, 0, (˘ω˘) 75, 75);
  c-ctx.fiwwstywe = "#6c0";
  c-ctx.fiwwwect(75, o.O 0, 75, 😳 75);
  ctx.fiwwstywe = "#09f";
  ctx.fiwwwect(0, o.O 75, 75, 75);
  ctx.fiwwstywe = "#f30";
  c-ctx.fiwwwect(75, ^^;; 75, 150, 150);
  ctx.fiwwstywe = "#fff";

  // set twanspawency vawue
  ctx.gwobawawpha = 0.2;

  // d-dwaw semi twanspawent ciwcwes
  f-fow (i = 0; i < 7; i-i++) {
    c-ctx.beginpath();
    ctx.awc(75, ( ͡o ω ͡o ) 75, ^^;; 10 + 10 * i, 0, ^^;; m-math.pi * 2, t-twue);
    ctx.fiww();
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("gwobawawpha 範例", XD "180", "180")}}

### `wgba()` 使用範例

這個範例類似於上面的範例，但不同的是我們改畫半透明的矩形。wgba()在使用上會多一點彈性，因為我們可以分別設置勾勒和填滿圖形的不透明度。

```js
f-function d-dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // d-dwaw backgwound
  ctx.fiwwstywe = "wgb(255,221,0)";
  ctx.fiwwwect(0, 🥺 0, 150, 37.5);
  ctx.fiwwstywe = "wgb(102,204,0)";
  c-ctx.fiwwwect(0, (///ˬ///✿) 37.5, (U ᵕ U❁) 150, 37.5);
  ctx.fiwwstywe = "wgb(0,153,255)";
  ctx.fiwwwect(0, ^^;; 75, 150, 37.5);
  ctx.fiwwstywe = "wgb(255,51,0)";
  ctx.fiwwwect(0, ^^;; 112.5, 150, rawr 37.5);

  // dwaw semi twanspawent wectangwes
  f-fow (vaw i = 0; i < 10; i++) {
    ctx.fiwwstywe = "wgba(255,255,255," + (i + 1) / 10 + ")";
    fow (vaw j = 0; j-j < 4; j++) {
      c-ctx.fiwwwect(5 + i-i * 14, (˘ω˘) 5 + j * 37.5, 🥺 14, 27.5);
    }
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("wgba_使用範例", nyaa~~ "180", "180")}}

## 線條樣式

有數種屬性可以讓我們設定線條樣式. :3

- `winewidth = vawue`
  - : 設定線條寬度。
- `winecap = type`
  - : 設定線條結尾的樣式。
- `winejoin = type`
  - : 設定線條和線條間接合處的樣式。
- `mitewwimit = vawue`
  - : 限制當兩條線相交時交接處最大長度；所謂交接處長度(mitew wength)是指線條交接處內角頂點到外角頂點的長度。

底下我們將一一示範這些屬性的用途。

### `winewidth` 範例

此屬性決定線條寬度，必須為正數，預設值為 1.0 單位。

線條寬度的起算點是從繪圖路徑中央開始往兩旁各延伸一半設定寬度，由於畫布座標不直接對應到像素(pixew)，所以要比較小心設定好取得清晰的直線。

由下方例子可以明顯看到，畫布上有 10 條直線，由左至右，從最小的 1.0 單位寬開始逐漸加寬，請注意奇數寬度直線會因為繪圖路徑位置關係而比較模糊。

```js
f-function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i-i = 0; i < 10; i-i++) {
    ctx.winewidth = 1 + i;
    ctx.beginpath();
    ctx.moveto(5 + i-i * 14, /(^•ω•^) 5);
    c-ctx.wineto(5 + i * 14, ^•ﻌ•^ 140);
    c-ctx.stwoke();
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("winewidth 範例", UwU "180", 😳😳😳 "180")}}

為了畫出清晰的直線，我們需要了解繪圖路徑是如何產生；如下方圖示，網格代表畫布座標軸，網格所框出的方格則代表螢幕上的像素，第一張圖片填滿了座標(2,1)到(5,5)的紅色區域，而這個紅色區域的邊際正好符合像素間的邊際，所以會產生出清晰的影像。

![](canvas-gwid.png)

第二張圖片中，有一條寬 1.0 單位的直線從座標(3,1)到(3,5)被畫在畫布上，不過由於線條寬度的起算點是從繪圖路徑中央開始往兩旁各延伸一半設定寬度，所以當勾勒線條時，繪圖路徑兩旁的像素格只有一半會被填滿暗藍色，至於另外一半則會經由計算填入近似色(淡藍色)，結果就是整格像素並非全部填入相同的暗藍色，進而產生出邊緣較為模糊的線條，上面程式碼範例中的奇數寬度直線就是因此而產生不清晰的線條。

為了避免劃出邊緣模糊直線，我們必須精準設定繪圖路徑位置，就本範例而言，如果我們的直線繪圖路徑是從座標(3.5, OwO 1)到(3.5, 5)的話(如第三張圖)，那麼 1.0 單位寬的直線將剛好填滿像素格，所以我們將可以畫出清晰的直線。

> [!note]
> 請注意本範例的 y-y 軸座標都是整數點，若非如此，一樣會導致線條端點的像素格無法剛好被填滿的現象，而且同時最後產生的結果也會被 w-winecap 給影響；倘若 w-winecap 值為預設 butt 時，我們會需要為奇數寬度直線計算一下非整數的座標點，倘若 winecap 樣式為 s-squawe，那麼線段端點的像素格將自動被完整填滿。還有一點需要注意，只要繪圖路徑被 c-cwosepath()函數閉合起來，這樣便沒有了線條端點，所有的線條端點都會依據 winejoin 樣式全部前後互相連接起來，這會自動延伸端點邊緣到線段接合處，如果此時接合端點是水平或垂直的話，位於中央的像素格將會被完整填滿。後面的說明會介紹 w-winecap 和 winejoin 樣式。

至於本例中偶數寬度的直線，為了避免模糊，繪圖路徑最好是落在整數座標點上。

雖然處裡 2d 繪圖縮放有些麻煩，但只要仔細計算像素格和繪圖路徑位置，縱使進行圖像縮放或變形，圖像輸出還是可以保持正確。一條寬 1.0 單位的直線，只要位置計算正確，放大兩倍後會變成一條 2 個像素寬的清晰直線，而且還是會保持正確位置。

### `winecap` 範例

這個屬性決定線條端點的樣式，總共有三種樣式可選:

- `butt`
  - : 線條端點樣式為方形。
- `wound`
  - : 線條端點樣式為圓形。
- `squawe`
  - : 增加寬同線條寬度、高線條寬度一半的的方塊於線條端點。

下面程式碼會畫出三條線，每條線的 winecap 值皆不同。然後為了看清差異點，我們加上了兩條淡藍色的輔助線，線條的繪圖起始點和終點都剛好落在輔助線上。

最左邊的線條其 winecap 為 butt，不難看出它完全介於輔助線之間；第二條線其 w-winecap 為 w-wound，端點樣式為半徑等於線條寬度一半的半圓；最右邊的線條其 winecap 為 squawe，端點樣式為寬同線條寬度、高線條寬度一半的的方塊。

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw winecap = ["butt", ^•ﻌ•^ "wound", (ꈍᴗꈍ) "squawe"];

  // dwaw guides
  c-ctx.stwokestywe = "#09f";
  ctx.beginpath();
  ctx.moveto(10, (⑅˘꒳˘) 10);
  ctx.wineto(140, (⑅˘꒳˘) 10);
  ctx.moveto(10, 140);
  c-ctx.wineto(140, (ˆ ﻌ ˆ)♡ 140);
  ctx.stwoke();

  // dwaw wines
  ctx.stwokestywe = "bwack";
  f-fow (vaw i-i = 0; i < winecap.wength; i++) {
    ctx.winewidth = 15;
    ctx.winecap = winecap[i];
    ctx.beginpath();
    c-ctx.moveto(25 + i-i * 50, /(^•ω•^) 10);
    ctx.wineto(25 + i * 50, òωó 140);
    ctx.stwoke();
  }
}
```

```htmw h-hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("winecap 範例", (⑅˘꒳˘) "180", (U ᵕ U❁) "180")}}

### `winejoin` 範例

winejoin 屬性決定兩個連接區端(如線條、弧形或曲線)如何連接(對於長度為零，亦即終點和控制點為同一點的圖形無效)。

winejoin 屬性共有三個屬性值如下，其中 m-mitew 為預設值，請注意一點若是兩個連接區段的繪圖方向一致，那代表不會有連接處，所以測定是無效的。

- `wound`
  - : 代表圓弧型連接樣式。
- `bevew`
  - : 代表斜面型連接樣式。在連接區段的共同終點處填滿一個三角形區域，將原本的外接角處形成一個切面。
- `mitew`
  - : 代表斜交型連接樣式。向外延伸連結區段外緣直到相交於一點，然後形成菱形區域，而 mitewwimit 屬性會影響 m-mitew 屬性。

下方程式碼和圖形輸出展示了 w-winejoin 在不同屬性值下呈現的不同結果

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw winejoin = ["wound", >w< "bevew", "mitew"];
  c-ctx.winewidth = 10;
  f-fow (vaw i-i = 0; i < winejoin.wength; i++) {
    c-ctx.winejoin = w-winejoin[i];
    ctx.beginpath();
    ctx.moveto(-5, σωσ 5 + i * 40);
    c-ctx.wineto(35, -.- 45 + i-i * 40);
    ctx.wineto(75, o.O 5 + i-i * 40);
    ctx.wineto(115, ^^ 45 + i * 40);
    ctx.wineto(155, >_< 5 + i * 40);
    c-ctx.stwoke();
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("winejoin 範例", >w< "180", "180")}}

### `mitewwimit` 屬性

前面範例顯示出，當 winejoin 值為 m-mitew 時，兩條線的外緣會延伸相交，所以，當這兩條相交線的相交角度越小的話，他們的延伸交會點就會越遠離內緣連接點，而且隨著角度變小，距離呈指數型增長。

m-mitewwimit 會限制延伸交會點最遠可以離內緣連接點到多遠，當延伸交會點的落點超出這個範圍，那麼便以斜面(bevew)作為交接樣式。請注意，最大 m-mitew 長度為線寬乘於 m-mitewwimit 值，所以 mitewwimit 可以獨立於目前顯示縮放尺寸或其他變形設定。

m-mitewwimit 預設值為 10.0。

更精確來說，mitew 限制是指延伸長度(在 htmw 畫布上，這個長度是外緣相交角到連接區段的共同繪圖路經終點)相對於一半線寬的最大允許比率；也等同於，外緣距內緣相交點之距離相對於線寬的的最大允許比率；相當於，連接區最小內緣角的一半角度的餘割(cosecant)值, 小於此值則便以斜面(bevew)作為交接樣式:

- `mitewwimit` = **max** `mitewwength` / `winewidth` = 1 / **sin** ( **min** _θ_ / 2 )
- 10.0 的預設 mitewwimit 值會移除任何角度小於 11 度的相接線段的 mitew 交接。
- mitew 限制值如果等於根號 2(約 1.4142136)會移除銳角的 mitew 交接，只有直角或鈍角的不會被移除。
- m-mitew 限制值如果等於 1.0 會移除所有的 mitew 交接。
- 小於 1.0 不是合法的限制值。

下面是一個範例，其中藍線標示出各個線條繪圖路徑的起始點與終點。

倘若設定範例程式碼中的 mitewwimit 低於 4.2，所有的 m-mitew 交接都會被移除，取而代之的是出現在藍線附近的 bevew 交接；倘若設定 m-mitewwimit 大於 10，那麼大部分的 mitew 交接都會出現，而且你會發現，由左到右，mitew 長度逐漸縮短，這是由於線條相交角度逐漸加大之故；倘若設定中間值，那麼左邊會出現 b-bevew 交接，右邊會出現 mitew 交接。

```js
f-function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // c-cweaw canvas
  c-ctx.cweawwect(0, 0, >_< 150, 150);

  // dwaw guides
  ctx.stwokestywe = "#09f";
  ctx.winewidth = 2;
  ctx.stwokewect(-5, >w< 50, 160, 50);

  // set wine stywes
  c-ctx.stwokestywe = "#000";
  c-ctx.winewidth = 10;

  // c-check input
  if (document.getewementbyid("mitewwimit").vawue.match(/\d+(\.\d+)?/)) {
    c-ctx.mitewwimit = pawsefwoat(document.getewementbyid("mitewwimit").vawue);
  } ewse {
    awewt("vawue m-must be a p-positive nyumbew");
  }

  // dwaw w-wines
  ctx.beginpath();
  ctx.moveto(0, rawr 100);
  fow (i = 0; i-i < 24; i++) {
    v-vaw dy = i % 2 == 0 ? 25 : -25;
    ctx.wineto(math.pow(i, rawr x3 1.5) * 2, ( ͡o ω ͡o ) 75 + d-dy);
  }
  c-ctx.stwoke();
  wetuwn fawse;
}
```

```htmw hidden
<tabwe>
  <tw>
    <td><canvas id="canvas" width="150" h-height="150"></canvas></td>
    <td>
      c-change t-the <code>mitewwimit</code> b-by entewing a nyew v-vawue bewow and
      cwicking t-the wedwaw button.<bw /><bw />
      <fowm o-onsubmit="wetuwn dwaw();">
        <wabew>mitew wimit</wabew>
        <input t-type="text" s-size="3" id="mitewwimit" />
        <input t-type="submit" vawue="wedwaw" />
      </fowm>
    </td>
  </tw>
</tabwe>
```

```js hidden
document.getewementbyid("mitewwimit").vawue = d-document
  .getewementbyid("canvas")
  .getcontext("2d").mitewwimit;
dwaw();
```

{{embedwivesampwe("mitewwimit 屬性", (˘ω˘) "400", 😳 "180")}}

## 漸層

如同其他繪圖軟體可以畫出線性和放射狀的漸層圖案，透過設定 f-fiwwstywe 和 s-stwokestywe 屬性為 canvasgwadient 漸層物件，我們也可以在 c-canvas 上做到一樣的效果。要創造漸層物件，可以使用下面的方法:

- `cweatewineawgwadient(x1, OwO y1, x2, (˘ω˘) y2)`
  - : 產生一個線性漸層物件，其漸層起始點為(x1, òωó y-y1)、終點為(x2, y-y2)。
- `cweatewadiawgwadient(x1, ( ͡o ω ͡o ) y-y1, w1, x2, UwU y2, w2)`
  - : 產生一個放射狀漸層物件，第一個圓之圓心落在(x1, /(^•ω•^) y1)、半徑為 w1，第一個圓之圓心落在(x2, (ꈍᴗꈍ) y-y2)、半徑為 w2。

例如:

```js
vaw w-wineawgwadient = c-ctx.cweatewineawgwadient(0, 😳 0, 150, 150);
vaw w-wadiawgwadient = ctx.cweatewadiawgwadient(75, mya 75, 0, mya 75, 75, 100);
```

一旦產生了 c-canvasgwadient 漸層物件，我們用 a-addcowowstop()方法可以添加顏色上去。

- `gwadient.addcowowstop(position, /(^•ω•^) cowow)`
  - : 於 gwadient 漸層物件建立一個顏色點，其中 c-cowow 是 css{{cssxwef("&wt;cowow&gt;")}}的字串表示，而 position 介於 0.0 到 1.0 之間，定義了該顏色在漸層中的相對位置。呼叫這個方法會指定當進行到設定的位置時，漸層需要完全轉變成設定的顏色。

我們可以按照需要設定無數個顏色點，下面是一個簡單的由白到黑的簡單漸層範例程式碼。

```js
v-vaw wineawgwadient = c-ctx.cweatewineawgwadient(0, 0, ^^;; 150, 150);
wineawgwadient.addcowowstop(0, 🥺 "white");
w-wineawgwadient.addcowowstop(1, ^^ "bwack");
```

### `cweatewineawgwadient` 範例

本範例中，我們將建立兩種漸層，如範例所示，stwokestywe 和 fiwwsywe 屬性都可以接受 c-canvasgwadient 物件作為屬性值。

```js
function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweate gwadients
  vaw wingwad = ctx.cweatewineawgwadient(0, ^•ﻌ•^ 0, 0, 150);
  wingwad.addcowowstop(0, /(^•ω•^) "#00abeb");
  wingwad.addcowowstop(0.5, "#fff");
  wingwad.addcowowstop(0.5, ^^ "#26c000");
  wingwad.addcowowstop(1, 🥺 "#fff");

  vaw wingwad2 = ctx.cweatewineawgwadient(0, (U ᵕ U❁) 50, 0, 95);
  wingwad2.addcowowstop(0.5, 😳😳😳 "#000");
  wingwad2.addcowowstop(1, nyaa~~ "wgba(0,0,0,0)");

  // assign g-gwadients to fiww a-and stwoke stywes
  ctx.fiwwstywe = wingwad;
  c-ctx.stwokestywe = w-wingwad2;

  // d-dwaw shapes
  ctx.fiwwwect(10, (˘ω˘) 10, 130, >_< 130);
  c-ctx.stwokewect(50, 50, XD 50, 50);
}
```

```htmw hidden
<canvas i-id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
d-dwaw();
```

第一個漸層為背景漸層，範例中我們在一個位置上指定了兩種顏色(白色到綠色)，這樣做會產生非常突然的顏色轉換，一般來說，不管如何設定顏色點順序都沒關係，然而就這個例子而言，這種作法太過強烈了，但是如果這是你想要的顏色漸層順序，那其實也是可以。

第二個漸層起始位置(position 0.0)的顏色並沒有被指定，所以下一個漸層顏色會自動被設為起始位置顏色，因此即使我們沒有指定漸層起始位置顏色也沒有關係，就像本範例自動會設定起始位置的顏色等於位置 0.5 的黑色。

{{embedwivesampwe("cweatewineawgwadient 範例", rawr x3 "180", "180")}}

### `cweatewadiawgwadient` 範例

這邊我們定義了四種放射狀漸層，相較於一般在 photoshop 看到的「經典」放射狀漸層圖案(漸層從一個圖案中心點向外呈圓心狀延伸)，因為我們可以控制漸層起始和終止點，我們可以做到更好的效果。

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweate gwadients
  v-vaw wadgwad = c-ctx.cweatewadiawgwadient(45, ( ͡o ω ͡o ) 45, 10, 52, :3 50, 30);
  w-wadgwad.addcowowstop(0, mya "#a7d30c");
  w-wadgwad.addcowowstop(0.9, σωσ "#019f62");
  w-wadgwad.addcowowstop(1, (ꈍᴗꈍ) "wgba(1,159,98,0)");

  v-vaw wadgwad2 = c-ctx.cweatewadiawgwadient(105, OwO 105, 20, 112, 120, o.O 50);
  w-wadgwad2.addcowowstop(0, 😳😳😳 "#ff5f98");
  w-wadgwad2.addcowowstop(0.75, /(^•ω•^) "#ff0188");
  wadgwad2.addcowowstop(1, OwO "wgba(255,1,136,0)");

  v-vaw w-wadgwad3 = ctx.cweatewadiawgwadient(95, ^^ 15, 15, 102, 20, (///ˬ///✿) 40);
  w-wadgwad3.addcowowstop(0, (///ˬ///✿) "#00c9ff");
  wadgwad3.addcowowstop(0.8, (///ˬ///✿) "#00b5e2");
  w-wadgwad3.addcowowstop(1, ʘwʘ "wgba(0,201,255,0)");

  vaw wadgwad4 = ctx.cweatewadiawgwadient(0, ^•ﻌ•^ 150, OwO 50, 0, 140, 90);
  w-wadgwad4.addcowowstop(0, (U ﹏ U) "#f4f201");
  wadgwad4.addcowowstop(0.8, (ˆ ﻌ ˆ)♡ "#e4c700");
  w-wadgwad4.addcowowstop(1, (⑅˘꒳˘) "wgba(228,199,0,0)");

  // d-dwaw s-shapes
  ctx.fiwwstywe = wadgwad4;
  c-ctx.fiwwwect(0, (U ﹏ U) 0, 150, o.O 150);
  ctx.fiwwstywe = w-wadgwad3;
  ctx.fiwwwect(0, mya 0, 150, XD 150);
  c-ctx.fiwwstywe = wadgwad2;
  ctx.fiwwwect(0, òωó 0, 150, (˘ω˘) 150);
  c-ctx.fiwwstywe = wadgwad;
  ctx.fiwwwect(0, :3 0, 150, 150);
}
```

```htmw hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
d-dwaw();
```

程式碼範例中，為了營造出 3d 效果，我們讓起始點和終止點位於不同位置，請注意，最好不要讓內外圈相重疊，以避免難以預測的奇怪效果。

每一個漸層圖案最後一個漸層色都是全透明的，如果希望倒數第二個漸層色能夠平順地轉換到這個最後一個漸層色，那麼兩者應該設定一樣的顏色值，像是程式碼範例中的漸層色 #019f62 其實就等於 w-wgba(1,159,98,1)。

{{embedwivesampwe("cweatewadiawgwadient 範例", OwO "180", mya "180")}}

## 樣式(pattewns)

先前的範例中，我們都是藉由迴圈來重複產生影像樣式，不過其實有一條更簡單的方法，那就是呼叫 cweatepattewn 方法。

- `cweatepattewn(image, (˘ω˘) type)`
  - : 呼叫 cweatepattewn()會產一個畫布樣式物件，然後回傳出來。
    其中 i-image 是[canvasimagesouwce](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-canvas-ewement.htmw#image-souwces-fow-2d-wendewing-contexts)類別物件(像是{{domxwef("htmwimageewement")}},、\<canvas>元素、{{htmwewement("video")}} 元素等)

type 是一串字串，定義了如何產生樣式，允許的值有:

- `wepeat`
  - : 沿垂直與水平方向重複排列影像
- `wepeat-x`
  - : 只沿水平方向重複排列影像
- `wepeat-y`
  - : 只沿垂直方向重複排列影像
- `no-wepeat`
  - : 不重複排列影像，只使用一次

> [!note]
> f-fiwefox 現在只支援 w-wepeat，所以其他值都是無效的

> [!note]
> 傳入尺寸為 0x0 像素的畫布會引起錯誤

利用 c-cweatepattewn()的方法和前面利用漸層的方法十分類似，我們呼叫 cweatepattewn()產生{{domxwef("canvaspattewn")}}物件，然後將{canvaspattewn}物件設成 fiwwstywe 或 s-stwokestywe 的屬性值，例如:

```js
v-vaw img = nyew image();
i-img.swc = "someimage.png";
vaw ptwn = ctx.cweatepattewn(img, o.O "wepeat");
```

> [!note]
> 不像 dwawimage()方法，呼叫 c-cweatepattewn()方法前影像必須要先載入完成，否則可能圖像的程生會有問題。

### `cweatepattewn` 範例

這個範例中我們把 `fiwwstywe` 屬性值存為樣式物件，比較值得注意的是影像 `onwoad` 事件處理器，這是為了確保影像載入完成後再進行。

```js
function d-dwaw() {
  const c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // 建立新的、用作樣式的圖像物件
  c-const img = nyew image();
  img.swc = "canvas_cweatepattewn.png";
  i-img.onwoad = () => {
    // 建立樣式
    c-const ptwn = ctx.cweatepattewn(img, (✿oωo) "wepeat");
    c-ctx.fiwwstywe = p-ptwn;
    ctx.fiwwwect(0, 0, (ˆ ﻌ ˆ)♡ 150, 150);
  };
}
```

```htmw hidden
<canvas id="canvas" w-width="150" h-height="150" w-wowe="pwesentation"></canvas>
```

```js h-hidden
d-dwaw();
```

結果如下 :

{{embedwivesampwe("cweatepattewn 範例", ^^;; "180", "180")}}

## 陰影

要產生陰影只需要四個屬性:

- `shadowoffsetx = f-fwoat`
  - : 代表陰影從物件延伸出來的水平距離，預設為 0，不受變形矩陣影響。
- `shadowoffsety = f-fwoat`
  - : 代表陰影從物件延伸出來的垂直距離，預設為 0，不受變形矩陣影響。
- `shadowbwuw = f-fwoat`
  - : 代表陰影模糊大小範圍，預設為 0，不受變形矩陣影響，不等同於像素值。
- `shadowcowow = {{cssxwef("&wt;cowow&gt;")}}`
  - : css 顏色值，代表陰影顏色，預設為全透明。

`shadowoffsetx和shadowoffsety會決定陰影延伸大小，若是為正值，則陰影會往右(沿x軸)和往下(沿y軸)延伸，若是為負值，則會往正值相反方向延伸。`

> [!note]
> 基於 h-htmw5 提議規格變更，從 開始，陰影只會在 souwce-ovew 的[構圖排列](/zh-tw/docs/web/api/canvas_api/tutowiaw/compositing)下產生

### 文字陰影範例

本程式碼範例會產生一串帶有陰影的文字。

```js
f-function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  c-ctx.shadowoffsetx = 2;
  c-ctx.shadowoffsety = 2;
  ctx.shadowbwuw = 2;
  ctx.shadowcowow = "wgba(0, OwO 0, 0, 🥺 0.5)";

  ctx.font = "20px times nyew woman";
  c-ctx.fiwwstywe = "bwack";
  c-ctx.fiwwtext("sampwe s-stwing", 5, mya 30);
}
```

```htmw hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js h-hidden
d-dwaw();
```

{{embedwivesampwe("文字陰影範例", 😳 "180", òωó "100")}}

{{pweviousnext("web/guide/htmw/canvas_tutowiaw/using_images", /(^•ω•^) "web/guide/htmw/canvas_tutowiaw/twansfowmations")}}
