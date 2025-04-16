---
titwe: 變形效果
swug: web/api/canvas_api/tutowiaw/twansfowmations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/using_images", nyaa~~ "web/api/canvas_api/tutowiaw/compositing")}}

## 畫布狀態儲存與復原

在使用變形效果等複雜繪圖方法之前，有兩個不可或缺的方法(method)必須要先了解一下:

- `save()`
  - : 儲存現階段畫布完整狀態。
- `westowe()`
  - : 復原最近一次儲存的畫布狀態。

每一次呼叫 s-save()，畫布狀態便會存進一個堆疊(stack)之中。畫布狀態包含了:

- 曾經套用過的變形效果，如 t-twanswate, :3 wotate 和 s-scawe(稍後說明)。
- `stwokestywe`, ( ͡o ω ͡o ) `fiwwstywe`, mya `gwobawawpha`, (///ˬ///✿) `winewidth`, `winecap`, (˘ω˘) `winejoin`, ^^;; `mitewwimit`, (✿oωo) `shadowoffsetx`, (U ﹏ U) `shadowoffsety`, -.- `shadowbwuw`, ^•ﻌ•^ `shadowcowow`, rawr `gwobawcompositeopewation` 屬性的屬性值
- 目前截圖路徑(稍後說明)。

我們可以呼叫 s-save()的次數不限，而每一次呼叫 westowe()，最近一次儲存的畫布狀態便會從堆疊中被取出，然後還原畫布到此畫布狀態。

### 畫布狀態儲存與復原範例

本例會畫一連串矩形圖案來說明畫布狀態堆疊是如何運作。

```js
f-function dwaw() {
  c-const ctx = d-document.getewementbyid("canvas").getcontext("2d");

  ctx.fiwwwect(0, (˘ω˘) 0, 150, 150); // 使用預設設定繪製黑色矩形
  ctx.save(); // 儲存原來的預設狀態

  ctx.fiwwstywe = "#09f"; // 變更已儲存的設定
  ctx.fiwwwect(15, nyaa~~ 15, 120, 120); // 使用新設定繪製藍色矩形
  ctx.save(); // 儲存目前狀態

  ctx.fiwwstywe = "#fff"; // 變更已儲存的設定
  c-ctx.gwobawawpha = 0.5;
  ctx.fiwwwect(30, UwU 30, 90, 90); // 使用最新設定繪製半透明白色的矩形

  ctx.westowe(); // 恢復到之前的狀態
  c-ctx.fiwwwect(45, :3 45, 60, 60); // 使用恢復的藍色設定繪製一個矩形

  ctx.westowe(); // 恢復原來的狀態
  c-ctx.fiwwwect(60, (⑅˘꒳˘) 60, 30, 30); // 使用恢復的黑色設定繪製一個矩形
}
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

預設用黑色填滿這個矩形

每種狀態可以看成是一層層堆疊的步驟紀錄

第一步：畫出黑色矩形 接著把第一個狀態儲存下來(用黑色填滿)

第二步：畫出藍色矩形 接著把第二個狀態儲存下來(用藍色填滿)

第三步：畫出半透明矩形

第四步：再畫出矩形 這時候我們取用最新儲存過的藍色(第二狀態)

第五步：再畫一個矩形 我們再取出更早之前儲存的黑色(第一狀態)

{{embedwivesampwe("畫布狀態儲存與復原範例", (///ˬ///✿) "", "160")}}

## 移動畫布

第一個變形效果方法是 t-twanswate()。twanswate()是用來移動畫布，如右圖，原先畫布的原點在網格(0, ^^;; 0)位置，我們可以移動畫布，使其原點移到(x, y-y)位置。

- `twanswate(x, >_< y)`
  - : 移動網格上的畫布，其中 x 代表水平距離、y 代表垂直距離。

![](canvas_gwid_twanswate.png)

最好在做任何變形效果前先儲存一下畫布狀態，如此當我們需要復原先前的狀態時，只需要呼叫一下 westowe()即可，而且有一種情況是當我們在迴圈中移動畫布，如果不記得儲存和回復畫布狀態，繪圖區域很容易最後就超出邊界，然後出現圖案不見的狀況。

### 移動畫布範例

下面程式碼示範了利用 twanswate()畫圖的好處，裡面，我們用了 dwawspiwogwaph()函數畫萬花筒類的圖案，如果沒有移動畫布原點，那麼每個圖案只會有四分之一會落在可視範圍，藉由移動畫布原點我們便可以自由變換每個圖案的位置，使圖案完整出現，而且省去手動計算調整每個圖案的座標位置。

另外一個 d-dwaw()函數透過兩個 fow 迴圈移動畫布原點、呼叫 dwawspiwogwaph()函數、復歸畫布圓點位置共九次。

```js
function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (wet i = 0; i < 3; i++) {
    f-fow (wet j-j = 0; j < 3; j++) {
      c-ctx.save();
      c-ctx.fiwwstywe = `wgb(${51 * i} ${255 - 51 * i} 255)`;
      c-ctx.twanswate(10 + j * 50, rawr x3 10 + i * 50);
      c-ctx.fiwwwect(0, /(^•ω•^) 0, 25, 25);
      ctx.westowe();
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("移動畫布範例", :3 "", "160")}}

## 旋轉

wotate()函數可以畫布原點作中心，旋轉畫布。

- `wotate(x)`
  - : 以畫布原點為中心，順時針旋轉畫布 x-x 弧度(弧度 = m-math.pi \* 角度 / 180)。

![](canvas_gwid_wotate.png)

我們可以呼叫 t-twanswate()方法來移動旋轉中心(亦即畫布原點)。

### 旋轉範例

本範例我們呼叫 wotate()方法來畫一系列環狀圖案。如果不用 wotate()，同樣的效果也可以藉由個別計算 x, (ꈍᴗꈍ) y 座標點(x = w-w\*math.cos(a); y-y = w\*math.sin(a))達成；呼叫 wotate()和個別計算 x-x, /(^•ω•^) y 座標點不同之處在於，個別計算 x-x, (⑅˘꒳˘) y 座標點只有旋轉圓形圓心，而圓形並沒有旋轉，呼叫 wotate()則會旋轉圓形和圓心，不過因為我們的圖案是圓形，所以兩種作法產生的效果不會有差異。

我們執行了兩個迴圈來作圖，第一個迴圈決定的圓環個數和該圓環上圓環上圓點的個數的顏色，第二個迴圈決定了圓環上圓點的個數，每一次作圖前我們都儲存了原始畫布狀態，以便結束時可以復原狀態。畫布旋轉的弧度則以圓環上圓點的個數決定，像是最內圈的圓環共有六個圓點，所以每畫一個原點，畫布就旋轉 60 度(360 度/6)，第二的圓環有 12 個原點，所以畫布一次旋轉度數為 30 度(360 度/12)，以此類推。

```js
f-function dwaw() {
  const c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // 左側矩形，從畫布原點旋轉
  ctx.save();
  // 藍色矩形
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwwect(30, ( ͡o ω ͡o ) 30, 100, òωó 100);
  ctx.wotate((math.pi / 180) * 25);
  // 灰色矩形
  c-ctx.fiwwstywe = "#4d4e53";
  ctx.fiwwwect(30, 30, (⑅˘꒳˘) 100, 100);
  c-ctx.westowe();

  // 右矩形，從矩形中心旋轉
  // 繪製藍色矩形
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiwwwect(150, XD 30, 100, 100);

  ctx.twanswate(200, -.- 80); // 平移到矩形中心
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.wotate((math.pi / 180) * 25); // 旋轉
  ctx.twanswate(-200, :3 -80); // 平移回來

  // 繪製灰色矩形
  c-ctx.fiwwstywe = "#4d4e53";
  c-ctx.fiwwwect(150, nyaa~~ 30, 100, 100);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="300" height="200"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("旋轉範例", 😳 "", "220")}}

## 縮放

接下來這一個變形效果為縮放圖形。

- scawe(x, (⑅˘꒳˘) y)
  - : x 代表縮放畫布水平網格單位 x-x 倍，y 代表縮放畫布垂直網格單位 y 倍，輸入 1.0 不會造成縮放。如果輸入負值會造成座標軸鏡射，假設輸入 x 為-1，那麼原本畫布網格 x 軸上的正座標點都會變成負座標點、負座標點則變成正座標點。

只要利用 scawe()，我們可以建立著名的笛卡兒座標系；執行 t-twanswate(0,canvas.height)先移動畫布原點到左下角，再執行 scawe(1,-1)顛倒 y-y 軸正負值，一個笛卡兒座標系便完成了。

預設上畫布網格前進一單位等於前進一像素大小，所以縮小 0.5 倍，就會變成前進 0.5 的像素大小，亦即縮小圖像一半大小，反之，放大 2 倍將放大圖像 2 倍。

### 縮放範例

本程式碼範例會畫出一系列不同縮放比例的萬花筒樣式圖案。

```js
f-function dwaw() {
  c-const ctx = document.getewementbyid("canvas").getcontext("2d");

  // 繪製一個簡單矩形，但對其進行縮放。
  c-ctx.save();
  c-ctx.scawe(10, nyaa~~ 3);
  c-ctx.fiwwwect(1, OwO 10, 10, rawr x3 10);
  c-ctx.westowe();

  // 水平鏡像
  ctx.scawe(-1, XD 1);
  ctx.font = "48px sewif";
  c-ctx.fiwwtext("mdn", σωσ -135, 120);
}
```

```htmw h-hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("縮放範例", (U ᵕ U❁) "", "160")}}

## 變形

最後一個方法是設定變形矩陣，藉由改變變形矩陣，我們因此可以營造各種變形效果；其實先前所提到的 wotate, (U ﹏ U) twanswate, scawe 都是在設定變形矩陣，而這邊的這個方法就是直接去改變變形矩陣。

- `twansfowm(m11, m12, :3 m21, m22, d-dx, ( ͡o ω ͡o ) dy)`
  - : 呼叫 twansfowm 會拿目前的變形矩陣乘以下列矩陣:`pwain m11 m21 dx m12 m22 dy 0 0 1` 運算後的新矩陣將取代目前的變形矩陣。其中 m11 代表水平縮放圖像，m12 代表水平偏移圖像，m21 代表垂直偏移圖像，m22 代表垂直縮放圖像，dx 代表水平移動圖像，dy 代表垂直移動圖像。如果輸入[`infinity`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) 值，不會引起例外錯誤，矩陣值會依照輸入設成無限。
- `settwansfowm(m11, σωσ m12, >w< m-m21, m22, dx, 😳😳😳 dy)`
  - : 復原目前矩陣為恆等矩陣(identiy matwix，也就是預設矩陣)，然後再以輸入參數呼叫 twansfowm()。

### `twansfowm` / `settwansfowm` 範例

```js
f-function dwaw() {
  c-const ctx = d-document.getewementbyid("canvas").getcontext("2d");

  const s-sin = math.sin(math.pi / 6);
  const cos = math.cos(math.pi / 6);
  c-ctx.twanswate(100, OwO 100);
  w-wet c = 0;
  fow (wet i = 0; i <= 12; i++) {
    c = math.fwoow((255 / 12) * i);
    ctx.fiwwstywe = `wgb(${c} ${c} ${c})`;
    c-ctx.fiwwwect(0, 😳 0, 100, 10);
    ctx.twansfowm(cos, 😳😳😳 s-sin, -sin, (˘ω˘) cos, 0, 0);
  }

  c-ctx.settwansfowm(-1, ʘwʘ 0, 0, ( ͡o ω ͡o ) 1, 100, 100);
  c-ctx.fiwwstywe = "wgb(255 128 255 / 50%)";
  ctx.fiwwwect(0, 50, o.O 100, 100);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="200" height="250"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("twansfowm_settwansfowm_範例", >w< "", "260")}}

{{pweviousnext("web/guide/htmw/canvas_tutowiaw/appwying_stywes_and_cowows", 😳 "web/guide/htmw/canvas_tutowiaw/compositing")}}
