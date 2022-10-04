---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
---

{{JSRef}} {{deprecated_header}}

**`fontcolor()`** メソッドは、文字列を指定された色で表示させる HTML の {{HTMLElement("font")}} 要素を生成します。

> **メモ:** \<font> 要素は [HTML5](/ja/docs/Glossary/HTML5) で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js
fontcolor(color)
```

### 引数

- `color`
  - : 16 進数の RGB 値または文字列リテラルで色を表す文字列です。 [CSS 色リファレンス](/ja/docs/Web/CSS/color_value)に、色名の文字列リテラルの一覧があります。

### 返値

HTML の {{HTMLElement("font")}} 要素を含む文字列です。

## 解説

色を 16 進数の RGB 値で表現する場合は、 `rrggbb` の書式を使用する必要があります。例えば、サーモン色は red=FA, green=80, blue=72 であるため、サーモン色の RGB 値は "`FA8072`" です。

## 例

### fontcolor() の使用

以下の例は `fontcolor()` メソッドを使用して、 HTML の `<font>` 要素を伴う文字列を生成することで文字列の色を変更しています。

```js
var worldString = 'Hello, world';

console.log(worldString.fontcolor('red') +  ' is red in this line');
// '<font color="red">Hello, world</font> is red in this line'

console.log(worldString.fontcolor('FF00') + ' is red in hexadecimal in this line');
// '<font color="FF00">Hello, world</font> is red in hexadecimal in this line'
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById('yourElemId').style.color = 'red';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `String.prototype.fontcolor` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます。
- {{jsxref("String.prototype.fontsize()")}}
