---
title: String.prototype.blink()
short-title: blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`blink()`** は {{jsxref("String")}} 値のメソッドで、この文字列を `<blink>` の中に埋め込んだ文字列 (`<blink>str</blink>`) を生成し、古いブラウザーにおいて文字列を点滅させるために使用します。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。 `blink()` の場合、`<blink>` 要素自体が現代のブラウザーから削除されており、テキストを点滅させることは、複数のアクセシビリティ標準で忌避されています。この要素を使用することは避けてください。

## 構文

```js-nolint
blink()
```

### 引数

なし。

### 返値

`<blink>` 開始タグで始まり、`str` のテキストが来て、 `</blink>` 終了タグが来る文字列です。

## 例

### blink() の使用

以下の例では文字列のメソッドを使用して、文字列の整形方法を変化させています。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

これにより、次の HTML が生成されます。

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> このマークアップは、`blink` が有効な要素でなくなったため、不正です。

要素の点滅は完全に避けるべきです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.blink` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.blink` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
