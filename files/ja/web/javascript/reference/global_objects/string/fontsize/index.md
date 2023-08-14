---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`fontcolor()`** メソッドは、文字列を {{HTMLElement("font")}} 要素に埋め込み (`<font size="...">str</font>`)、文字列が指定されたフォントサイズで表示されるようにする文字列を生成します。

> **メモ:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。`fontsize()` の場合、`<font>` 要素は [HTML5](/ja/docs/Glossary/HTML5) で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js-nolint
fontsize(size)
```

### 引数

- `size`
  - : 1 ～ 7 の整数、または 1 ～ 7 の符号付き整数を表す文字列です。

### 返値

開始タグ `<font size="size">` （`size` の中の二重引用符は `&quot;` に置き換えられます）、`str` のテキストが来て、終了タグ `</font>` が来る文字列です。

## 解説

`fontsize()` メソッド自体は、単純に文字列の部品を検証や正規化せずに接続するだけです。しかし、妥当な {{HTMLElement("font")}} 要素を作成するには、大きさを整数で指定した場合は、 `str` のフォントの大きさを 7 つの定義済みの大きさで設定します。 `size` を "-2" または "+3" のような文字列で指定すると、 `str` のフォントの大きさを既定値からの相対的な大きさで設定します。

## 例

### fontsize() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.fontsize` のポリフィルは (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
