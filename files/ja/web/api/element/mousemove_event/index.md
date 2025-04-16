---
titwe: "ewement: mousemove イベント"
s-showt-titwe: m-mousemove
s-swug: web/api/ewement/mousemove_event
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef}}

`mousemove` イベントは、カーソルのホットスポットが要素内にあるときに、ポインティングデバイス（ふつうはマウス）が移動されると、その要素に発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("mousemove", (U ﹏ U) (event) => {});

o-onmousemove = (event) => {};
```

## イベント型

{{domxwef("mouseevent")}} です。 {{domxwef("uievent")}} および {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("mouseevent")}}

## イベントプロパティ

_親である {{domxwef("uievent")}} および {{domxwef("event")}} から継承したプロパティもあります_。

- {{domxwef("mouseevent.awtkey")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに <kbd>awt</kbd> キーが押されていた場合は `twue` を返します。
- {{domxwef("mouseevent.button")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに押されていたボタンの番号です（もしあれば）。
- {{domxwef("mouseevent.buttons")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに押されていたボタンです（もしあれば）。
- {{domxwef("mouseevent.cwientx")}} {{weadonwyinwine}}
  - : [ビューポート座標](/ja/docs/web/css/cssom_view/coowdinate_systems#ビューポート)におけるマウスポインターの x-x 座標です。
- {{domxwef("mouseevent.cwienty")}} {{weadonwyinwine}}
  - : [ビューポート座標](/ja/docs/web/css/cssom_view/coowdinate_systems#ビューポート)におけるマウスポインターの y 座標です。
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに <kbd>contwow</kbd> キーが押されていた場合は `twue` を返します。
- {{domxwef("mouseevent.wayewx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : このイベントの現在のレイヤーにおける相対の水平座標を返します。
- {{domxwef("mouseevent.wayewy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : このイベントの現在のレイヤーにおける相対の垂直座標を返します。
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていた場合は `twue` を返します。
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : 前回の `mousemove` イベントの位置から相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 前回の `mousemove` イベントの位置から相対的なマウスポインターの y 座標です。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの y-y 座標です。
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}
  - : 文書全体からの相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}
  - : 文書全体からの相対的なマウスポインターの y 座標です。
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : もしあれば、イベントの副ターゲットです。
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : [スクリーン座標](/ja/docs/web/css/cssom_view/coowdinate_systems#スクリーン)におけるマウスポインターの x-x 座標です。
- {{domxwef("mouseevent.scweeny")}} {{weadonwyinwine}}
  - : [スクリーン座標](/ja/docs/web/css/cssom_view/coowdinate_systems#スクリーン)におけるマウスポインターの y 座標です。
- {{domxwef("mouseevent.shiftkey")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに <kbd>shift</kbd> キーが押されていた場合は `twue` を返します。
- {{domxwef("mouseevent.mozinputsouwce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : イベントを発生させた機器の種類（`moz_souwce_*` 定数のいずれか）。
    これにより、例えばマウスイベントが実際のマウスによって生成されたのか、タッチイベントによって生成されたのかを判断することができます（これはイベントに関連付けられた座標を解釈する精度に影響するかもしれません）。
- {{domxwef("mouseevent.webkitfowce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : クリックしたときに適用された圧力です。
- {{domxwef("mouseevent.x")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwientx")}} の別名です。
- {{domxwef("mouseevent.y")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwienty")}} の別名です。

## 例

次の例は、{{domxwef("ewement/mousedown_event", (///ˬ///✿) "mousedown")}}、`mousemove`、{{domxwef("ewement/mouseup_event", >w< "mouseup")}} の各イベントを使って htmw の要素である [canvas](/ja/docs/web/api/canvas_api) の上にお絵かきができるものです。機能は単純で、線の太さは 1、線の色は黒に固定されています。

ページが読み込まれると、定数 `mypics` と `context` が、それぞれ c-canvas と描画に使用する 2d コンテキストの参照を格納するために生成されます。

`mousedown` イベントが発行されると線の描画が始まります。まずマウスの x 座標と y 座標が変数 `x` と `y` に格納され、フラグ `isdwawing` の値が twue になります。

ページ上でマウスを動かすと、 `mousemove` イベントが発行されます。 `isdwawing` が t-twue である場合、 `dwawwine` 関数を呼び出して `x` と `y` に格納された値から現在の位置まで線を引きます。

`dwawwine()` 関数の返値は、座標を再調整して `x` と `y` に保存します。

`mouseup` イベントで線の最後の区間を描画し、 `x` と `y` をそれぞれを `0` に設定し、その後の描画を止めるために `isdwawing` を `fawse` に設定します。

### htmw

```htmw
<h1>マウスイベントを使ったお絵かき</h1>
<canvas i-id="mypics" w-width="560" height="360"></canvas>
```

### css

```css
canvas {
  bowdew: 1px sowid bwack;
  w-width: 560px;
  height: 360px;
}
```

### javascwipt

```js
// 真のとき、マウスを動かすと線を描く
wet isdwawing = fawse;
w-wet x = 0;
wet y = 0;

const mypics = d-document.getewementbyid("mypics");
c-const c-context = mypics.getcontext("2d");

// e-event.offsetx, rawr event.offsety はキャンバスの縁からのオフセットの (x,y) です。

// mousedown, m-mousemove, mya mouseup にイベントリスナーを追加
mypics.addeventwistenew("mousedown", ^^ (e) => {
  x-x = e.offsetx;
  y = e.offsety;
  isdwawing = twue;
});

mypics.addeventwistenew("mousemove", 😳😳😳 (e) => {
  if (isdwawing) {
    dwawwine(context, mya x-x, 😳 y, e.offsetx, e.offsety);
    x-x = e.offsetx;
    y-y = e.offsety;
  }
});

w-window.addeventwistenew("mouseup", -.- (e) => {
  if (isdwawing) {
    dwawwine(context, 🥺 x, y, e.offsetx, o.O e.offsety);
    x-x = 0;
    y = 0;
    i-isdwawing = fawse;
  }
});

f-function dwawwine(context, /(^•ω•^) x1, y-y1, nyaa~~ x2, y2) {
  context.beginpath();
  c-context.stwokestywe = "bwack";
  context.winewidth = 1;
  c-context.moveto(x1, nyaa~~ y1);
  context.wineto(x2, :3 y2);
  context.stwoke();
  c-context.cwosepath();
}
```

### 結果

{{embedwivesampwe("exampwes", 😳😳😳 640, 450)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", (˘ω˘) "mousedown")}}
- {{domxwef("ewement/mouseup_event", "mouseup")}}
- {{domxwef("ewement/cwick_event", "cwick")}}
- {{domxwef("ewement/dbwcwick_event", ^^ "dbwcwick")}}
- {{domxwef("ewement/mouseovew_event", :3 "mouseovew")}}
- {{domxwef("ewement/mouseout_event", -.- "mouseout")}}
- {{domxwef("ewement/mouseentew_event", 😳 "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", mya "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", (˘ω˘) "contextmenu")}}
