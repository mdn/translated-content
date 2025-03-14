---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

**`big()`** は {{jsxref("String")}} 値のメソッドで、ｋの文字列を {{HTMLElement("big")}} 要素の中に埋め込み (`<big>str</big>`)、この文字列が大きなフォントで表示されるようにします。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。`<big>` 要素自体は HTML 仕様書から削除されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js-nolint
big()
```

### 引数

なし。

### 返値

`<big>` 開始タグで始まり、`str` のテキストが来て、 `</big>` 終了タグが来る文字列です。

## 例

### big() の使用

下記のコードは HTML 文字列を作成し、文書内の本体を文字列で置き換えています。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

これで次の HTML が作成されます。

```html
<big>Hello, world</big>
```

> **警告:** `big` は有効な要素ではなくなっているので、このマークアップは無効です。

`big()` を使用して直接 HTML テキストを作成する代わりに、 CSS を使用してフォントを操作しましょう。例えば、 {{domxref("HTMLElement/style", "element.style")}} 属性を通して {{cssxref("font-size")}} を操作することができます。

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.big` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("big")}}
