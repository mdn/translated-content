---
title: "Element: hasAttributeNS() メソッド"
short-title: hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

`hasAttributeNS` は、現在の要素が指定された属性を持っているかどうかを示す論理値を返します。

## 構文

```js-nolint
hasAttributeNS(namespace,localName)
```

### 引数

- `namespace` は属性の名前空間を特定する文字列です。
- `localName` は属性の名前です。

### 返値

論理値です。

### 例

```js
// 値をセットする前に属性が存在しているか検証します。
const d = document.getElementById("div1");
if (
  d.hasAttributeNS("http://www.mozilla.org/ns/specialspace/", "special-align")
) {
  d.setAttribute("align", "center");
}
```

## メモ

{{ DOMAttributeMethods() }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
