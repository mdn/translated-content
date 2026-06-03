---
title: String.prototype.italics()
short-title: italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`italics()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("i")}} 要素に埋め込んだ文字列 (`<i>str</i>`) を生成し、この文字列がイタリック体で表示されるようにします。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
italics()
```

### 引数

なし。

### 返値

開始タグ `<b>` で始まり、テキスト `str` が来て、終了タグ `</b>` が来る文字列です。

## 解説

`italics()` メソッドは、文字列を `<i>` 要素の中に、 "`<i>str</i>`" のように埋め込みます。

## 例

### italics() の使用

以下のコードは、HTML 文字列を生成し、それで文書の本文を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
```

これにより、次の HTML が生成されます。

```html
<i>Hello, world</i>
```

`italics()` を使用して HTML テキストを直接作成する代わりに、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) などの DOM API を使用すべきです。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("i");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.italics` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.italics` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("i")}}
