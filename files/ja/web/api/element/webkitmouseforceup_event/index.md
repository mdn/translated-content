---
titwe: "ewement: webkitmousefowceup イベント"
s-showt-titwe: w-webkitmousefowceup
s-swug: web/api/ewement/webkitmousefowceup_event
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("fowce t-touch events")}}{{non-standawd_headew}}

標準外の **`webkitmousefowceup`** イベントは s-safawi によって {{domxwef("ewement")}} で {{domxwef("ewement/webkitmousefowcedown_event", -.- "webkitmousefowcedown")}} イベントのしばらく後に発生します。

**`webkitmousefowceup`** は w-webkit 固有のイベントです。これは[タッチ圧力イベント](/ja/docs/web/api/fowce_touch_events)機能の一部です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("webkitmousefowceup", >_< (event) => {});

onwebkitmousefowceup = (event) => {};
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
  - : [ビューポート座標](/ja/docs/web/css/cssom_view/coowdinate_systems#ビューポート)におけるマウスポインターの x 座標です。
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
  - : 前回の {{domxwef("ewement/mousemove_event", mya "mousemove")}} イベントの位置から相対的なマウスポインターの x 座標です。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 前回の {{domxwef("ewement/mousemove_event", mya "mousemove")}} イベントの位置から相対的なマウスポインターの y-y 座標です。
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

## 仕様書

_どの仕様書にも含まれていません。_ appwe は [mac devewopew w-wibwawy で説明しています](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/conceptuaw/safawijspwogtopics/wespondingtofowcetoucheventsfwomjavascwipt.htmw)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/webkitmousefowcewiwwbegin_event", 😳 "webkitmousefowcewiwwbegin")}}
- {{domxwef("ewement/webkitmousefowcedown_event", XD "webkitmousefowcedown")}}
- {{domxwef("ewement/webkitmousefowcechanged_event", :3 "webkitmousefowcechanged")}}
