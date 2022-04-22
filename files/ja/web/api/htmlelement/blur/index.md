---
title: HTMLElement.blur()
slug: Web/API/HTMLElement/blur
tags:
  - API
  - HTML DOM
  - HTMLElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLElement.blur
translation_of: Web/API/HTMLElement/blur
---
{{APIRef("HTML DOM")}}

**`HTMLElement.blur()`** メソッドは、現在の要素からキーボードフォーカスを取り除きます。

## 構文

```js
element.blur();
```

## 例

### テキスト入力からフォーカスを取り除く

#### HTML

```html
<input type="text" id="myText" value="サンプルテキスト">
<br><br>
<button type="button" onclick="focusInput()">クリックするとフォーカスを得ます</button>
<button type="button" onclick="blurInput()">クリックするとフォーカスを失います</button>
```

#### JavaScript

```js
function focusInput() {
  document.getElementById('myText').focus();
}
function blurInput() {
  document.getElementById('myText').blur();
}
```

#### 結果

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.focus")}}
