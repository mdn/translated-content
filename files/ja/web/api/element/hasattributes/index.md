---
title: Element.hasAttributes()
slug: Web/API/Element/hasAttributes
---

{{ApiRef("DOM")}}

**`hasAttributes()`** は {{domxref("Element")}} インターフェイスのメソッドで、現在の要素が属性を持っているか否かを {{jsxref("Boolean")}} で返します。

## 構文

```
var result = element.hasAttributes();
```

### 返値

- `result`
  - : 返値を `true` または `false` で保持します。

## 例

```js
let foo = document.getElementById('foo');
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## ポリフィル

```js
;(function(prototype) {
  prototype.hasAttributes = prototype.hasAttributes || function() {
    return (this.attributes.length > 0);
  }
})(Element.prototype);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
