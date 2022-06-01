---
title: 'Element: focus イベント'
slug: Web/API/Element/focus_event
tags:
  - API
  - DOM
  - Element
  - イベント
  - Focus
  - FocusEvent
  - リファレンス
browser-compat: api.Element.focus_event
translation_of: Web/API/Element/focus_event
---
{{APIRef}}

**`focus`** イベントは、要素がフォーカスを受け取ったときに発生します。このイベントと {{domxref("Element/focusin_event", "focusin")}} との違いは、 `focusin` がバブリングするのに対し `focus` はしないことです。

`focus` の反対は {{domxref("Element/blur_event", "blur")}} です。

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
        {{domxref("GlobalEventHandlers/onfocus", "onfocus")}}
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

このイベントのイベント委譲を実装する方法は二つあります。 {{domxref("Element/focusin_event", "focusin")}} イベントを使用するか、 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} の `useCapture` 引数に `true` を設定するかです。

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

## 関連情報

- 関連イベント: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- `Window` を対象としたこのイベント: {{domxref("Window/focus_event", "focus")}} イベント
- [Focusing: focus/blur](https://javascript.info/focus-blur)
