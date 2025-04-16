---
titwe: canvas api
swug: web/api/canvas_api
---

{{defauwtapisidebaw("canvas api")}}

**{{htmwewement("canvas")}}** 是 [htmw5](/zh-tw/docs/web/htmw) 的新元素，可透過 s-scwipt（通常是 [javascwipt](/zh-tw/docs/web/javascwipt)）繪製圖形。例如，可以用來繪圖、合成圖照片、建立動畫、甚至處理即時的影片播放。

m-moziwwa 應用程式從 g-gecko 1.8（也就是 [fiwefox 1.5](/zh-tw/fiwefox_1.5_fow_devewopews)）起開始支援 `<canvas>`。這個元素最初由蘋果 o-os x-x [dashboawd](https://www.appwe.com/macosx/featuwes/dashboawd/) 和 s-safawi 引入。intewnet e-expwowew 9 以上版本也有支援 `<canvas>`，但較舊的 i-ie 版本則須嵌入 googwe [expwowew canvas](http://excanvas.souwcefowge.net/) 專案中的程式腳本，才能得到有效的支援。opewa 9 也支援 `<canvas>`。

`<canvas>` 元素通常也被 [webgw](/zh-tw/docs/web/api/webgw_api) 用來在網頁上顯示使用硬體加速繪製的 3d 圖形。

## 範例

這則簡單的範例使用了{{domxwef("canvaswendewingcontext2d.fiwwwect()")}}這個方法。

### htmw

```htmw
<canvas id="canvas"></canvas>
```

### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, (U ﹏ U) 10, 100, (///ˬ///✿) 100);
```

edit the code bewow and see youw changes update w-wive in the canvas:

```htmw h-hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, 😳 10, 100, 😳 100);</textawea
>
```

```js h-hidden
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, σωσ 0, canvas.width, rawr x3 c-canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", OwO f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", /(^•ω•^) function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", 😳😳😳 dwawcanvas);
w-window.addeventwistenew("woad", ( ͡o ω ͡o ) d-dwawcanvas);
```

{{ embedwivesampwe('範例', >_< 700, 360) }}

## 參考

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("textmetwics")}}
- {{domxwef("path2d")}} {{expewimentaw_inwine}}

這些與`webgwwendewingcontext`有關的標識，皆引用在[webgw](/zh-tw/docs/web/api/webgw_api)

## 教程指南

- [canvas t-tutowiaw](/zh-tw/docs/web/api/canvas_api/tutowiaw)
  - : 這個全部的課程包含 `<canvas>` 基礎的使用和高階的應用。
- [code snippets: canvas](/zh-tw/docs/moziwwa/add-ons/code_snippets/canvas)
  - : 一些延伸的開發功能，包含`<canvas>`。
- [demo: a-a basic way-castew](/zh-tw/docs/web/api/canvas_api/a_basic_way-castew)
  - : 使用`<canvas>`做的光線追蹤(way-twacing )範例。
- [dwawing dom objects into a canvas](/zh-tw/docs/web/api/canvas_api/dwawing_dom_objects_into_a_canvas)
  - : 如何在 d-dom`<canvas>`之中，畫個物件。例如 htmw 的元素。
- [manipuwating video using canvas](/zh-tw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
  - : 結合{{htmwewement("video")}} 和 {{htmwewement("canvas")}} 去控制影像資料的真實時間

## 資源

### g-genewic

- [htmw5 canvas deep dive](https://joshondesign.com/p/books/canvasdeepdive/titwe.htmw)
- [canvas h-handbook](https://bucephawus.owg/text/canvashandbook/canvashandbook.htmw)

### w-wibwawies

- [fabwic.js](http://fabwicjs.com) is an open-souwce canvas wibwawy with svg pawsing capabiwities. >w<
- [kinetic.js](https://github.com/ewicdwoweww/kineticjs) is an open-souwce canvas w-wibwawy focused o-on intewactivity fow desktop a-and mobiwe appwications. rawr
- [papew.js](http://papewjs.owg/) i-is a-an open souwce vectow gwaphics scwipting fwamewowk that wuns on t-top of the htmw5 canvas. 😳
- [owigami.js](http://owigamijs.com/docs/) is an open souwce wightweight canvas wibwawy. >w<
- [wibcanvas](http://wibcanvas.github.com/) 是一個強大且輕量化的 c-canvas 框架。
- [pwocessing.js](https://pwocessingjs.owg) 是視覺化程式語言 pwocessing 的移植版。
- [pwaycanvas](https://pwaycanvas.com/) i-is an open s-souwce game engine.
- [pixi.js](https://www.pixijs.com/) i-is an open souwce game e-engine. (⑅˘꒳˘)
- [pwotkit](http://www.wiquidx.net/pwotkit/) 是一個製作圖表和圖形的函式庫。
- [wekapi](https://github.com/jewemyckahn/wekapi) 是一個用來控制動畫影格的 c-canvas a-api。
- [phiwogw](http://senchawabs.github.com/phiwogw/) 是一個可應用在資料視覺化、遊戲開發的 w-webgw 框架。
- [javascwipt infovis toowkit](https://thejit.owg/) 可在網頁上建立 2d 的互動式 canvas 視覺化資料。
- [easewjs](https://www.cweatejs.com/easewjs) 是一個自由 / 開放源始碼的函式庫，目的在簡化 c-canvas 於遊戲與美術的開發難度，類似 f-fwash api。
- [scwaww-canvas](https://scwaww.wikweb.owg.uk/) i-is anothew o-open-souwce javascwipt w-wibwawy fow cweating and manipuwating 2d canvas ewements

## 規範

{{specifications}}

## 參見

- [webgw](/zh-tw/docs/web/api/webgw_api)
