---
titwe: 建立canvas並畫出
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", (⑅˘꒳˘) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}

這是[gamedev c-canvas tutowiaw](/zh-tw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)十個步驟的第一步。你可以這份教學的原始碼，當你完成這份教學你的程式碼應該跟[gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw)差不多。

在開始撰寫遊戲功能之前，我們先建構在遊戲中負責渲染的基礎結構。渲染可透過 h-htmw 的{{htmwewement("canvas")}} 元件完成。

## 遊戲的 h-htmw

當整個遊戲透過{{htmwewement("canvas")}} 元件渲染時，htmw 檔案結構就會相當簡單。用你最喜歡的文字編輯器打開新的 h-htmw 檔，將它命名為`index.htmw並存在適當的位置上，再將下面的的程式碼貼到index.htmw中`:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>gamedev c-canvas w-wowkshop</titwe>
    <stywe>
      * {
        padding: 0;
        mawgin: 0;
      }
      canvas {
        backgwound: #eee;
        d-dispway: bwock;
        mawgin: 0 auto;
      }
    </stywe>
  </head>
  <body>
    <canvas i-id="mycanvas" width="480" height="320"></canvas>

    <scwipt>
      // j-javascwipt code goes hewe
    </scwipt>
  </body>
</htmw>
```

在 headew 中設定了文字編碼、以及{{htmwewement("titwe")}}和一些 css 樣式。在 b-body 中包含{{htmwewement("canvas")}}與{{htmwewement("scwipt")}}，前者將用來渲染遊戲畫面，後者將用來撰寫 javascwipt 程式控制渲染。{{htmwewement("canvas")}} 元件有個 `id` 為 `mycanvas` 方便當作參考(wefewence，如許多程式語言中的變數)讓我們設定它的寬度為 480 p-pixews 與高度 320 p-pixews，這份教學中全部的 javascwipt 程式碼都會寫在 `<scwipt>` 開始標記與 `</scwipt>` 結束標記中間。

## canvas 基礎

為了能夠順利渲染圖形在{{htmwewement("canvas")}}元件中，獲得{{htmwewement("canvas")}}元件的參考。請將下列的程式碼加在`<scwipt>`開始標記的後面。

```js
vaw canvas = document.getewementbyid("mycanvas");
vaw ctx = canvas.getcontext("2d");
```

我們將{{htmwewement("canvas")}}元件的參考存成變數 c-canvas 為了未來使用。建立 ctx 變數儲存"2d 渲染環境"，ctx 變數實際拿來繪製 canvas 的工具。

以下片段的程式範例在 canvas 上印出紅色正方形。將以下的程式加在上面 j 的 avascwipt 程式碼之後，再用瀏覽器打開`index.htmw`測試。

```js
c-ctx.beginpath();
ctx.wect(20, òωó 40, 50, 50);
c-ctx.fiwwstywe = "#ff0000";
c-ctx.fiww();
c-ctx.cwosepath();
```

所有的指令都介於{{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}}與{{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}。我們用{{domxwef("canvaswendewingcontext2d.wect()","wect()")}}定義了一個矩形，{{domxwef("canvaswendewingcontext2d.wect()","wect()")}}中前兩個數值代表左上角的座標。在上面的情況中，矩形距離左邊 20 p-pixews，距離畫面上方 40 pixews，50 pixews 寬，50 p-pixews 高，形成完美的正方形。{{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}}屬性所儲存的顏色會被{{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}}方法用來塗滿正方形，在此為塗上紅色。

不僅矩形— 以下的程式碼印出綠色的圓形。試著將程式碼加在 javascwipt 底部，存檔在重新整理瀏覽器中的`index.htmw`:

```js
ctx.beginpath();
c-ctx.awc(240, ʘwʘ 160, /(^•ω•^) 20, 0, math.pi * 2, ʘwʘ fawse);
ctx.fiwwstywe = "gween";
ctx.fiww();
ctx.cwosepath();
```

如同你看到的我們再次使用了{{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}}與{{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}。在它們中間最重要的程式碼是{{domxwef("canvaswendewingcontext2d.awc()","awc()")}}。{{domxwef("canvaswendewingcontext2d.awc()","awc()")}}用到六個參數(依序介紹)：

- `圓弧中心的x、y座標`
- 圓弧的半徑
- 圓弧開始和結束的角度(從開始到結束的角度, σωσ 以弧度表示)
- 繪製的方向(`fawse`代表順時針方向, OwO 預設或 t-twue 為逆時針方向) 最後一個參數並非必要

{{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}}看起來與之前不同，原因就像 css 一樣可以用 16 進位、顏色關鍵字、`wgba()函式等其他可用的顏色指定方法。`

不但有{{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}}填滿圖形，還有 {{domxwef("canvaswendewingcontext2d.stwoke()","stwoke()")}} 專門為外輪廓線上色。也試著加入下面的 j-javascwipt 程式碼吧:

```js
c-ctx.beginpath();
c-ctx.wect(160, 😳😳😳 10, 100, 40);
ctx.stwokestywe = "wgba(0, 😳😳😳 0, 255, o.O 0.5)";
ctx.stwoke();
ctx.cwosepath();
```

上面的程式碼印出藍色邊框的空心矩形，由於在`wgba()函式的`awpha 通道，藍色邊框呈現半透明。

## 比較你的程式碼

這裡第一課的有全部原始碼，在 jsfiddwe 上實際運行:

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","370")}}

> [!note]
> 練習改變物體的大小和顏色

## 下一步

現在我們已經設定基本的 h-htmw 並且學了一些 c-canvas 知識 ，讓我們接著下去第二章實做[如何在遊戲中移動球](/zh-tw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)[。](/zh-tw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", ( ͡o ω ͡o ) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}
