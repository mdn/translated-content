---
title: String.prototype.strike()
short-title: strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`strike()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("strike")}} 要素に埋め込んだ文字列 (`<strike>str</strike>`) を生成し、この文字列が取り消されたテキストとして表示されるようにします。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。`strike(` の場合、`<strike>` 要素自体が HTML 仕様から除去されたため、使用すべきではありません。ウェブ開発者は、削除されたコンテンツには {{HTMLElement("del")}}、正確でなくなった、または関連性がなくなったコンテンツには {{HTMLElement("s")}} を使用しましょう。

## 構文

```js-nolint
strike()
```

### 引数

なし。

### 返値

開始タグ `<strike>` で始まり、テキスト `str` が来て、終了タグ `</strike>` が来る文字列です。

## 例

### strike() の使用

以下のコードは、HTML 文字列を生成し、それで文書の本文を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

これにより、次の HTML が生成されます。

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> このマークアップは不正です。`strike` は有効な要素でなくなったためです。

`strike()` を使用して HTML テキストを直接生成する代わりに、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) などの DOM API を使用すべきです。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("s");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.strike` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
