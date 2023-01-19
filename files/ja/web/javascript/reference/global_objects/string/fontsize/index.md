---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

{{JSRef}} {{deprecated_header}}

**`fontsize()`** メソッドは、文字列を指定された大きさで表示させる HTML の {{HTMLElement("font")}} 要素を生成します。

> **メモ:** \<font> 要素は [HTML5](/ja/docs/Glossary/HTML5) で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js
fontsize(size)
```

### 引数

- `size`
  - : 1 ～ 7 の整数、 1 ～ 7 の符号付き整数を表す文字列です。

### 返値

HTML の {{HTMLElement("font")}} 要素を含む文字列です。

## 解説

大きさを整数で指定した場合は、 `str` のフォントの大きさを 7 つの定義済みの大きさで設定します。 `size` を "-2" のような文字列で指定すると、 `str` のフォントの大きさを {{HTMLElement("basefont")}} 要素からの相対的な大きさを設定します。

## 例

### fontsize() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById('yourElemId').style.fontSize = '0.7em';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `String.prototype.fontsize` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます
- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
