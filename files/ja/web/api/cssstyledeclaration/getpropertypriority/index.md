---
title: CSSStyleDeclaration.getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
---

{{ APIRef("CSSOM") }}

**CSSStyleDeclaration.getPropertyPriority()** メソッドインターフェイスは、 {{domxref('DOMString')}} でその CSS プロパティに明示的に設定されたすべての優先度を返します。

## 構文

```js
var priority = style.getPropertyPriority(property);
```

### 引数

- _`property`_ は {{domxref('DOMString')}} で、チェックするプロパティ名を表します。

### 返値

- `priority` は {{domxref('DOMString')}} で、存在する場合は優先度 (`"important"` など) を表します。存在しない場合は、空文字列を返します。

## 例

以下の JavaScript コードは、 `margin` が CSS セレクターの規則で important と記されているかどうかをチェックします。

```js
var declaration = document.styleSheets[0].cssRules[0].style;
var isImportant = declaration.getPropertyPriority('margin') === 'important';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
