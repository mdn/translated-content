---
title: "DocumentType: replaceWith() メソッド"
slug: Web/API/DocumentType/replaceWith
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DocumentType.replaceWith()`** メソッドは、文書型宣言を指定されたノードで置き換えます。

## 構文

```js-nolint
replaceWith(node1)
replaceWith(node1, node2)
replaceWith(node1, node2, /* … ,*/ nodeN)
```

### 引数

- `node1`, …, `nodeN`
  - : この {{domxref("DocumentType")}} を置き換える一連のノードです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層内の指定された位置に挿入できない場合に発生します。

## 例

### `replaceWith()` の使用

```js
let svg_dt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);

document.doctype.replaceWith(svg_dt);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.replaceWith()")}}
