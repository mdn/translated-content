---
title: TouchEvent と MouseEvent の両方をサポートする
slug: conflicting/Web/API/Pointer_events
original_slug: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
---

{{DefaultAPISidebar("Touch Events")}}

{{domxref("Touch_events","touch")}} インターフェースは、タッチできるデバイス 上で高いユーザーエクスペリエンスを生み出すアプリケーションを可能にします。しかし、ウェブコンテンツの大部分がマウス入力でだけ操作できるように設計されている現実があります。したがって、ブラウザがタッチをサポートしていても、マウス入力のみを想定したコンテンツを直接修正することなく*従来通り*動作させるために、ブラウザはまだマウスイベントを*エミュレート*しなくてはなりません。

理想的には、タッチベースのアプリケーションは、明示的にマウスの入力に対処する必要はありません。しかし、ブラウザはマウスイベントをエミュレートしなければならないので、処理しなければならない相互問題がいくつかあります。以下は開発者のためのイベントの動作と予期しない問題についての詳細です。

## イベントの発火

タッチイベント標準は、タッチとマウスの動作に関するいくつかのブラウザ要件（詳細については [_Interaction with Mouse Events and click_](https://w3c.github.io/touch-events/#mouse-events) セクションを見てください）を定義しており、*ブラウザは同じユーザー入力のレスポンスでタッチイベントとマウスイベントの両方を発火できる*と記述しています。このセクションでは、アプリケーションに影響を与える可能性がある要件について説明します。

ひとつのユーザー入力でブラウザがタッチイベントとマウスイベントの両方を発火した場合、ブラウザは何らかのマウスイベントの前に {{event("touchstart")}} を発火させなくては _なりません_。したがって、アプリケーションで特定のタッチ {{domxref("Touch.target","target")}} 要素でマウスイベントが発火させたくない場合、要素のタッチイベントハンドラーで {{domxref("Event.preventDefault()","preventDefault()")}} を呼び出し追加のマウスイベントが送出されないようにしなければなりません。

{{event("touchmove")}} イベントハンドラーで `preventDefault()` を呼び出すコードスニペットです。

```js
// touchmove handler
function process_touchmove(ev) {
  // Call preventDefault() to prevent any further handling
  ev.preventDefault();
}
```

## イベント順

特定のタッチイベントとマウスイベントの順序は実装依存ですが、標準仕様ではひとつの入力に対して次の順序が*典型*であるとしています。

- `touchstart`
- 指の動作に応じて 0、または複数の `touchmove` イベント
- `touchend`
- `mousemove`
- `mousedown`
- `mouseup`
- `click`

{{event("touchstart")}} か {{event("touchmove")}}、{{event("touchend")}} が動作の間にキャンセルされた場合、mouse か click は発火されず、続くイベントは次のものだけになります：

- `touchstart`
- 指の動作に応じて 0、または複数の `touchmove` イベント
- `touchend`

## コミュニティー

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail list](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC channel](irc://irc.w3.org:6667/)

## 関連項目とリソース

- [Touch Events Overview](/Web/API/Touch_events)
- [Using Touch Events](/Web/API/Touch_events/Using_Touch_Events)
- [Touch and Mouse (Together Again for the First Time)](http://www.html5rocks.com/en/mobile/touchandmouse/)
