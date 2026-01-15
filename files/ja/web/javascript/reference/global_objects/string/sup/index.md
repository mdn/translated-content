---
title: String.prototype.sup()
short-title: sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`sup()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("sup")}} 要素に埋め込んだ文字列 (`<sup>str</sup>`) を生成し、この文字列が上付き文字として表示されるようにします。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
sup()
```

### 引数

なし。

### 返値

開始タグ `<sup>` で始まり、テキスト `str` が来て、終了タグ `</sup>` が来る文字列です。

## 例

### sup() の使用

以下のコードは、HTML 文字列を生成し、その文字列で文書の本体を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
```

これにより、次の HTML が生成されます。

```html
<sup>Hello, world</sup>
```

`sup()` を使用して HTML テキストを直接作成する代わりに、[document.createElement()](/ja/docs/Web/API/Document/createElement) などの DOM API を使用しましょう。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("sup");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.sup` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.sup` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("sup")}}
