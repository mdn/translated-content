---
title: CSSStyleDeclaration.getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyValue()** メソッドインターフェイスは、指定された CSS プロパティの値を含む {{domxref('DOMString')}} を返します。

## 構文

```js
var value = style.getPropertyValue(property);
```

### 引数

- _`property`_ は、チェックされるプロパティ名 (ハイフン区切り) を表す {{domxref('DOMString')}} です。

### 返値

- `value` は、プロパティの値を含む {{domxref('DOMString')}} です。設定されていない場合、空文字列を返します。

## 例

次の JavaScript コードは、 CSS セレクター規則の `margin` プロパティの値を問い合わせます。

```js
var declaration = document.styleSheets[0].cssRules[0].style;
var value = declaration.getPropertyValue('margin'); // "1px 2px"
```

## Specifications

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
