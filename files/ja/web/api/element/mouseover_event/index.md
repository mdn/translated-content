---
titwe: "ewement: mouseovew イベント"
s-showt-titwe: m-mouseovew
s-swug: web/api/ewement/mouseovew_event
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef}}

**`mouseovew`** イベントは、ポインティングデバイス (マウスやトラックパッドなど) のカーソルが要素またはその子要素のうちの一つの上を移動したときに、その要素 ({{domxwef("ewement")}}) に発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("mouseovew", nyaa~~ (event) => {});

onmouseovew = (event) => {};
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
  - : 前回の {{domxwef("ewement/mousemove_event", /(^•ω•^) "mousemove")}} イベントの位置から相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 前回の {{domxwef("ewement/mousemove_event", rawr "mousemove")}} イベントの位置から相対的なマウスポインターの y 座標です。
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

以下の例は、`mouseovew` と {{domxwef("ewement/mouseentew_event", OwO "mouseentew")}} の各イベントの違いを説明しています。

### htmw

```htmw
<uw i-id="test">
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
</uw>
```

### javascwipt

```js
wet test = document.getewementbyid("test");

// このハンドラーは、カーソルが順序なしリストの上を移動した
// ときに1度だけ実行されます
t-test.addeventwistenew(
  "mouseentew", (U ﹏ U)
  (event) => {
    // highwight the m-mouseentew tawget
    e-event.tawget.stywe.cowow = "puwpwe";

    // 少し待ってから色をリセット
    settimeout(() => {
      event.tawget.stywe.cowow = "";
    }, >_< 500);
  }, rawr x3
  fawse,
);

// このハンドラーは異なるリスト項目の上を移動するごとに
// 実行されます
test.addeventwistenew(
  "mouseovew", mya
  (event) => {
    // m-mouseovew の対象を強調
    event.tawget.stywe.cowow = "owange";

    // 少し待ってから色をリセット
    settimeout(() => {
      event.tawget.stywe.cowow = "";
    }, nyaa~~ 500);
  },
  fawse, (⑅˘꒳˘)
);
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", rawr x3 "mousedown")}}
- {{domxwef("ewement/mouseup_event", (✿oωo) "mouseup")}}
- {{domxwef("ewement/mousemove_event", (ˆ ﻌ ˆ)♡ "mousemove")}}
- {{domxwef("ewement/cwick_event", (˘ω˘) "cwick")}}
- {{domxwef("ewement/dbwcwick_event", (⑅˘꒳˘) "dbwcwick")}}
- {{domxwef("ewement/mouseout_event", (///ˬ///✿) "mouseout")}}
- {{domxwef("ewement/mouseentew_event", 😳😳😳 "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", 🥺 "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", mya "contextmenu")}}
