---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - メソッド
  - NeedsCompatTable
  - リファレンス
browser-compat: api.HTMLInputElement.select
translation_of: Web/API/HTMLInputElement/select
---
{{ APIRef("HTML DOM") }}

**`HTMLInputElement.select()`** メソッドは、{{HTMLElement("textarea")}} 要素またはテキストフィールドを含む {{HTMLElement("input")}} 要素内のすべてのテキストを選択します。

## 構文

```js
element.select();
```

## 例

この例のボタンをクリックすると、 `<input>` 要素内のすべてのテキストが選択されます。

### HTML

```html
<input type="text" id="text-box" size="20" value="Hello world!">
<button onclick="selectText()">テキストを選択</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}
```

### 結果

{{EmbedLiveSample("Example")}}

## メモ

`element.select()` を呼び出しても、入力欄がフォーカスを得るとは限りませんので、よく {{domxref("HTMLElement.focus")}} と一緒に使われます。

これに対応していないブラウザーでは、 [HTMLInputElement.setSelectionRange()](/ja/docs/Web/API/HTMLInputElement/setSelectionRange) の引数に 0 と入力値の長さを指定して呼び出すことで置き換えることができます。

```html
<input onClick="this.select();" value="Sample Text" />
<!-- equivalent to -->
<input onClick="this.setSelectionRange(0, this.value.length);" value="Sample Text" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
