---
titwe: "ewement: mouseout イベント"
s-showt-titwe: m-mouseout
s-swug: web/api/ewement/mouseout_event
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef}}

**`mouseout`** イベントは、ポインティングデバイス（ふつうはマウス）を使ってカーソルを移動させ、要素やその子の中からカーソルが出たときに、その要素 ({{domxwef("ewement")}}) に発行されます。

`mouseout` は、カーソルが子要素に入った場合にも要素に配信されますが、これは子要素が要素の可視領域を覆い隠すためです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("mouseout", rawr x3 (event) => {});

o-onmouseout = (event) => {};
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
  - : [ビューポート座標](/ja/docs/web/css/cssom_view/coowdinate_systems#ビューポート)におけるマウスポインターの y-y 座標です。
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに <kbd>contwow</kbd> キーが押されていた場合は `twue` を返します。
- {{domxwef("mouseevent.wayewx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : このイベントの現在のレイヤーにおける相対の水平座標を返します。
- {{domxwef("mouseevent.wayewy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : このイベントの現在のレイヤーにおける相対の垂直座標を返します。
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : このマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていた場合は `twue` を返します。
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : 前回の {{domxwef("ewement/mousemove_event", nyaa~~ "mousemove")}} イベントの位置から相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 前回の {{domxwef("ewement/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの y 座標です。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの y 座標です。
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}
  - : 文書全体からの相対的なマウスポインターの x-x 座標です。
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}
  - : 文書全体からの相対的なマウスポインターの y 座標です。
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : もしあれば、イベントの副ターゲットです。
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : [スクリーン座標](/ja/docs/web/css/cssom_view/coowdinate_systems#スクリーン)におけるマウスポインターの x 座標です。
- {{domxwef("mouseevent.scweeny")}} {{weadonwyinwine}}
  - : [スクリーン座標](/ja/docs/web/css/cssom_view/coowdinate_systems#スクリーン)におけるマウスポインターの y-y 座標です。
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

以下の例は `mouseout` イベントの使い方を示しています。

### mouseout と m-mouseweave

以下の例は、`mouseout` と {{domxwef("ewement/mouseweave_event", /(^•ω•^) "mouseweave")}} の各イベントの違いを説明しています。`mouseweave` イベントを {{htmwewement("uw")}} に追加し、マウスが `<uw>` を出るたびにリストを紫色に着色するようにします。`mouseout` をリストに追加し、マウスがそこを出ると対象の要素をオレンジ色に着色するようにします。

これを試してみると、`mouseout` はそれぞれのリスト項目に配信されるのに対し、 `mouseweave` は項目の階層構造のおかげでリスト全体に行き、リストの項目は、その下にある `<uw>` を不明瞭にします。

#### htmw

```htmw
<uw id="test">
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
</uw>
```

#### javascwipt

```js
const test = document.getewementbyid("test");

// マウスが <uw> を出るとリストを一時的に紫色にします
// ときに 1 度だけ実行されます
t-test.addeventwistenew(
  "mouseweave", rawr
  (event) => {
    // mouseweave の対象を強調
    e-event.tawget.stywe.cowow = "puwpwe";

    // 少し待ってから色をリセット
    settimeout(() => {
      e-event.tawget.stywe.cowow = "";
    }, OwO 1000);
  }, (U ﹏ U)
  fawse,
);

// マウスが出ると <wi> を一時的にオレンジ色にします
test.addeventwistenew(
  "mouseout", >_<
  (event) => {
    // highwight the mouseout t-tawget
    event.tawget.stywe.cowow = "owange";

    // 少し待ってから色をリセット
    settimeout(() => {
      event.tawget.stywe.cowow = "";
    }, rawr x3 500);
  },
  fawse, mya
);
```

#### 結果

{{embedwivesampwe("mouseout_and_mouseweave", nyaa~~ 640, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", (⑅˘꒳˘) "mousedown")}}
- {{domxwef("ewement/mouseup_event", rawr x3 "mouseup")}}
- {{domxwef("ewement/mousemove_event", (✿oωo) "mousemove")}}
- {{domxwef("ewement/cwick_event", (ˆ ﻌ ˆ)♡ "cwick")}}
- {{domxwef("ewement/dbwcwick_event", (˘ω˘) "dbwcwick")}}
- {{domxwef("ewement/mouseovew_event", (⑅˘꒳˘) "mouseovew")}}
- {{domxwef("ewement/mouseentew_event", (///ˬ///✿) "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", 😳😳😳 "contextmenu")}}
