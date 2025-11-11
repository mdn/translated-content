---
title: String.prototype.sub()
short-title: sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`sub()`** は {{jsxref("String")}} 値のメソッドで、文字列を {{HTMLElement("sub")}} 要素に埋め込んだ文字列 (`<sub>str</sub>`) を生成し、文字列が下付き文字として表示されるようにします。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
sub()
```

### 引数

なし。

### 返値

開始タグ `<sub>` で始まり、テキスト `str` が来て、終了タグ `</sub>` が来る文字列です。

## 例

### sub() の使用

以下のコードは、HTML 文字列を生成し、その文字列で文書の本体を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
```

これにより、次の HTML が生成されます。

```html
<sub>Hello, world</sub>
```

`sub()` を使用して HTML テキストを直接作成する代わりに、[document.createElement()](/ja/docs/Web/API/Document/createElement) などの DOM API を使用しましょう。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("sub");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.sub` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.sub` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("sub")}}
