---
title: CSSStyleDeclaration.removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
---

{{ APIRef("CSSOM") }}

**`CSSStyleDeclaration.removeProperty()`** メソッドインターフェイスは、 CSS スタイル宣言オブジェクトからプロパティを削除します。

## 構文

```js
var oldValue = style.removeProperty(property);
```

### 引数

- _`property`_ は {{domxref('DOMString')}} で、削除するプロパティ名を表します。なお、複数語からなるプロパティ名はハイフン区切りであって、キャメルケースではありません。

### 返値

- `oldValue` は {{domxref('DOMString')}} で、削除される前の CSS プロパティの値と等しいものです。

### 例外

- {{domxref('DOMException')}} NO_MODIFICATION_ALLOWED_ERR: プロパティまたは宣言ブロックが読取専用の場合。

## 例

次の JavaScript コードは、 CSS の `background-color` プロパティをセレクター規則から削除します。

```js
var declaration = document.styleSheets[0].rules[0].style;
var oldValue = declaration.removeProperty('background-color');
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
