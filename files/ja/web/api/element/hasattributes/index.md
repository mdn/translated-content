---
title: "Element: hasAttributes() メソッド"
short-title: hasAttributes()
slug: Web/API/Element/hasAttributes
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ApiRef("DOM")}}

**`hasAttributes()`** は {{domxref("Element")}} インターフェイスのメソッドで、現在の要素が属性を持っているか否かを論理値で返します。

## 構文

```js-nolint
hasAttributes()
```

### 引数

なし。

### 返値

論理値です。

## 例

```js
let foo = document.getElementById("foo");
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
