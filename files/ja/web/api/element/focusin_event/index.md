---
title: 'Element: focusin イベント'
slug: Web/API/Element/focusin_event
tags:
  - API
  - DOM
  - Element
  - イベント
  - FocusEvent
  - リファレンス
  - focusin
browser-compat: api.Element.focusin_event
translation_of: Web/API/Element/focusin_event
---
{{APIRef}}

**`focusin`** イベントは、要素がフォーカスを受け取ろうとしているときに発生します。このイベントと {{domxref("Element/focus_event", "focus")}} との主な違いは、 `focusin` がバブリングを行うのに対し `focus` は行わないことです。

`focusin` の反対は {{domxref("Element/focusout_event", "focusout")}} です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
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
        {{domxref("GlobalEventHandlers/onfocusin", "onfocusin")}}
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

### ライブデモ

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

form.addEventListener('focusin', (event) => {
  event.target.style.background = 'pink';
});

form.addEventListener('focusout', (event) => {
  event.target.style.background = '';
});
```

#### 結果

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusout_event", "focusout")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)

