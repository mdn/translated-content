---
title: 'Element: blur イベント'
slug: Web/API/Element/blur_event
tags:
  - API
  - DOM
  - Element
  - イベント
  - FocusEvent
  - リファレンス
  - blur
  - onblur
browser-compat: api.Element.blur_event
translation_of: Web/API/Element/blur_event
---
{{APIRef}}

**`blur`** イベントは、要素がフォーカスを失ったときに発生します。このイベントと {{domxref("Element/focusout_event", "focusout")}} との違いは、 `focusout` が[バブリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)するのに対し、 `blur` はしないことです。

`blur` の反対は {{domxref("Element/focus_event", "focus")}} です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("FocusEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers/onblur", "onblur")}}
      </td>
    </tr>
    <tr>
      <th scope="row">同期 / 非同期</th>
      <td>同期</td>
    </tr>
    <tr>
      <th scope="row">Composed</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 例

### 簡単な例

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input">
  <input type="password" placeholder="password">
</form>
```

#### JavaScript

```js
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});
```

#### 結果

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### イベント委譲

このイベントのイベント委譲を実装する方法は 2 つあります。 {{domxref("Element/focusout_event", "focusout")}} イベントを使用するか、 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} の `useCapture` 引数に `true` を設定するかです。

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input">
  <input type="password" placeholder="password">
</form>
```

#### JavaScript

```js
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);
```

#### 結果

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

このイベントが処理されている間、 {{DOMxRef("Document.activeElement")}} の値はブラウザーによって異なります ({{bug(452307)}})。 IE10 はフォーカスが移動する先の要素を設定しますが、 Firefox と Chrome ではふつう、文書の `body` を設定します。

## 関連情報

- 関連イベント: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- `Window` を対象としたこのイベント: {{domxref("Window/blur_event", "blur")}} イベント
