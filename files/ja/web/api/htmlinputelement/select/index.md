---
title: "HTMLInputElement: select() メソッド"
short-title: select()
slug: Web/API/HTMLInputElement/select
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.select()`** メソッドは、{{HTMLElement("textarea")}} 要素またはテキストフィールドを含む {{HTMLElement("input")}} 要素内のすべてのテキストを選択します。

## 構文

```js-nolint
select()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例のボタンをクリックすると、 `<input>` 要素内のすべてのテキストが選択されます。

### HTML

```html
<input type="text" id="text-box" size="20" value="Hello world!" />
<button onclick="selectText()">テキストを選択</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## メモ

`element.select()` を呼び出しても、入力欄がフォーカスを得るとは限りませんので、よく {{domxref("HTMLElement.focus")}} と一緒に使われます。

これに対応していないブラウザーでは、 [HTMLInputElement.setSelectionRange()](/ja/docs/Web/API/HTMLInputElement/setSelectionRange) の引数に 0 と入力値の長さを指定して呼び出すことで置き換えることができます。

```html
<input onClick="this.select();" value="Sample Text" />
<!-- equivalent to -->
<input
  onClick="this.setSelectionRange(0, this.value.length);"
  value="Sample Text" />
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
