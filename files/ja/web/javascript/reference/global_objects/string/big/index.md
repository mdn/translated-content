---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef}} {{deprecated_header}}

**`big()`** メソッドは、文字列が大きなフォントで表示されるように HTML の {{HTMLElement("big")}} 要素を生成します。

> **メモ:** \<big> 要素は [HTML5](/ja/docs/Glossary/HTML5) で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js
big()
```

### 返値

HTML の {{HTMLElement("big")}} 要素を含む文字列です。

## 解説

`big()` メソッドは、文字列を `<big>` 要素の中に、 "`<big>str</big>`" のように埋め込みます。

## 例

### big() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Hello, world</fontsize>
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById('yourElemId').style.fontSize = '2em';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `String.prototype.big` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) から利用できます
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
