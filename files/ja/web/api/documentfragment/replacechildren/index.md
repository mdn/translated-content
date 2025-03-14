---
title: "DocumentFragment: replaceChildren() メソッド"
short-title: replaceChildren()
slug: Web/API/DocumentFragment/replaceChildren
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DocumentFragment.replaceChildren()`** メソッドは、`DocumentFragment` の既存の子を指定された新しい子の集合で置き換えます。これらは文字列または {{domxref("Node")}} オブジェクトです。

## 構文

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* … ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 一連の {{domxref("Node")}} または文字列で、これで `DocumentFragment` の既存の子を置き換えます。置換するオブジェクトが指定されなかった場合、`DocumentFragment` は子ノードがすべて空になります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : [ノードツリーの制約](https://dom.spec.whatwg.org/#concept-node-tree)に違反していた場合に発生します。

## 例

### 文書フラグメントを空にする

`replaceChildren()` は文書フラグメントの子ノードをすべて空にする、とても便利な方法を提供します。引数を指定せずに呼び出せばよいのです。

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [<div>, <p>]

fragment.replaceChildren();

fragment.children; // HTMLCollection []
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentFragment.prepend()")}}
- {{domxref("DocumentFragment.append()")}}
