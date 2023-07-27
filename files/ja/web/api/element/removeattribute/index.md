---
title: "Element: removeAttribute() メソッド"
short-title: removeAttribute()
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

{{domxref("Element")}} の **`removeAttribute()`** メソッドは、指定された名前の属性を要素から削除します。

## 構文

```js-nolint
removeAttribute(attrName)
```

### 引数

- `attrName`
  - : 文字列で、要素から削除する属性名を指定します。指定した属性が存在しなかった場合、`removeAttribute()` はエラーを発生させずに戻ります。

### 返値

なし ({{jsxref("undefined")}})。

## 使用上のメモ

属性の値を直接、または {{domxref("Element.setAttribute", "setAttribute()")}} を使用して `null` に設定するのではなく、 `removeAttribute()` を使用してください。多くの属性は `null` に設定しても、期待通りの動作をしません。

{{ DOMAttributeMethods() }}

## 例

```js
// Given: <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// Now: <div id="div1" width="200px">
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
