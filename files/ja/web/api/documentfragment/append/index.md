---
title: "DocumentFragment: append() メソッド"
short-title: append()
slug: Web/API/DocumentFragment/append
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DocumentFragment.append()`** メソッドは、この文書フラグメントの最後の子の後に、一連の {{domxref("Node")}} オブジェクトまたは文字列を挿入します。文字列は同等の {{domxref("Text")}} ノードとして挿入されます。

このメソッドは、`DocumentFragment` に子を追加します。ツリー内の任意の要素に追加する場合は、{{domxref("Element.append()")}} を参照してください。

## 構文

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)
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

### 文書フラグメントに要素を追加

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
fragment.append(div);

fragment.children; // HTMLCollection [<div>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentFragment.prepend()")}}
- {{domxref("Element.append()")}}
