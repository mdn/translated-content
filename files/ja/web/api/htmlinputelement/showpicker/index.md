---
title: HTMLInputElement.showPicker()
slug: Web/API/HTMLInputElement/showPicker
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - NeedsCompatTable
  - リファレンス
browser-compat: api.HTMLInputElement.showPicker
translation_of: Web/API/HTMLInputElement/showPicker
---
{{ APIRef("HTML DOM") }}

**`HTMLInputElement.showPicker()`** メソッドは、ブラウザーのピッカーをユーザーに表示します。

ブラウザーのピッカーは、その要素が `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"`, `"file"` の型のうちの何れかである場合に表示されます。これは {{htmlelement("datalist")}} 要素や [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性からの項目を表示することもできます。

### 返値

{{jsxref("undefined")}} です。

### 例外

- `NotAllowedError` の {{domxref("DOMException")}}
  - : タッチジェスチャーやマウスクリックなどのユーザージェスチャーに応答して呼び出されなかった場合に発生します。
- `SecurityError` の {{domxref("DOMException")}}
  - : 別オリジンの iframe の中で呼び出した場合に発生します。

## 構文

```js
element.showPicker();
```

## 例

この例のボタンをクリックすると、ブラウザーの日付ピッカーが表示されます。

### HTML

```html
<input type="date">
<button>日付ピッカーを表示</button>
```

### JavaScript

```js
const button = document.querySelector("button");
const dateInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    dateInput.showPicker();
    // 日付ピッカーが表示されます。
  } catch (error) {
    window.alert(error);
    // 失敗した場合は外部ライブラリーを使用してください。
  }
});
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ HTMLElement("input") }}
- {{ domxref("HTMLInputElement") }}
