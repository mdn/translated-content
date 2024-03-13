---
title: "DocumentFragment: prepend() メソッド"
short-title: prepend()
slug: Web/API/DocumentFragment/prepend
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DocumentFragment.prepend()`** メソッドは、一連の {{domxref("Node")}} オブジェクトまたは文字列を、この文書フラグメントにおける最初の子の前に挿入します。文字列は同等の {{domxref("Text")}} ノードとして挿入されます。

このメソッドは、`DocumentFragment` の先頭に子要素を挿入します。ツリー内の任意の要素に挿入する場合は、 {{domxref("Element.prepend()")}} を参照してください。

## 構文

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 挿入する一連の {{domxref("Node")}} または文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 階層内の指定された位置にノードが挿入できなかった場合に発生します。

## 例

### Prepending an element to a document fragment

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [<div>, <p>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentFragment.append()")}}
- {{domxref("Element.prepend()")}}
