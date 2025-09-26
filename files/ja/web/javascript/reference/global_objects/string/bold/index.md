---
title: String.prototype.bold()
short-title: bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`bold()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("b")}} 要素に埋め込んだ文字列 (`<b>str</b>`) を生成し、この文字列が太字で表示されるようにします。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
bold()
```

### 引数

なし。

### 返値

`<b>` 開始タグで始まり、`str` のテキストが来て、 `</b>` 終了タグが来る文字列です。

## 例

### bold() の使用

次の例では、非推奨の文字列メソッドを使用して文字列の書式を変更しています。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

これにより、次の HTML が生成されます。

```html
<b>Hello, world</b>
```

`bold()` を使用して HTML テキストを直接作成する代わりに、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) などの DOM API を使用しましょう。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.bold` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.bold` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("b")}}
