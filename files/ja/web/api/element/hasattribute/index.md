---
title: "Element: hasAttribute() メソッド"
short-title: hasAttribute()
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.hasAttribute()`** メソッドは、指定した要素が指定した属性を持つかどうかを示す**論理値**を返します。

## 構文

```js-nolint
hasAttribute(name)
```

### 引数

- `name`
  - : 属性の名前を示す文字列です。

### 引数

論理値です。

## 例

```js
const foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // do something
}
```

## メモ

{{DOMAttributeMethods}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
