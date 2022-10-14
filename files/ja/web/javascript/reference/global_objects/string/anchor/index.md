---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef}} {{deprecated_header}}

**`anchor()`** メソッドは、 `<a name="...">` 開始タグで始まり、いくらかのテキストが続き、 `</a>` 終了タグで終わる文字列を生成します。

> **警告:** このメソッドを使用しないでください。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) を使用してください。また、 HTML 仕様書では {{HTMLElement("a")}} 要素に `name` 属性を設定することを許容しなくなりましたので、このメソッドが生成するものは妥当なマークアップにもなりません。

## 構文

```
str.anchor(name)
```

### 引数

- `name`
  - : `name` 値を表す文字列で、 `<a name="...">` 開始タグに入れられます。

### 返値

`<a name="name">` 開始タグで始まり、 _str_ のテキストが続き、 `</a>` 終了タグで終わる文字列です。

## 解説

このメソッドを使用しないでください。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) を使用してください。また、 HTML 仕様書では {{HTMLElement("a")}} 要素に `name` 属性を設定することを許容しなくなりましたので、このメソッドが生成するものは妥当なマークアップにもなりません。

## 例

### anchor() の使用

```js
var myString = 'Table of Contents';

document.body.innerHTML = myString.anchor('contents_anchor');
```

以下の HTML が生成されます。

```html
<a name="contents_anchor">Table of Contents</a>
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.anchor', 'String.prototype.anchor')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.anchor")}}

## 関連情報

- {{jsxref("String.prototype.link()")}}
