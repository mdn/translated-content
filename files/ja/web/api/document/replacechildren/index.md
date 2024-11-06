---
title: "Document: replaceChildren() メソッド"
short-title: replaceChildren()
slug: Web/API/Document/replaceChildren
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("DOM")}}

**`Document.replaceChildren()`** メソッドは `Document` の既存の子を指定した新しい子で置き換えます。

## 構文

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 一連の {{domxref("Node")}} または文字列オブジェクトで、これが `Document` の既存の子ノードを置き換えます。置き換えるオブジェクトを指定しなかった場合は、 `Document` からすべての子ノードを削除します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : [ノードツリーの制約](https://dom.spec.whatwg.org/#concept-node-tree)に違反した場合に発生します。

## 例

### 文書を空にする

replaceChildren()`は、文書の子要素をすべて空にするとても便利なメカニズムを提供します。引数を指定しないで、文書に対して呼び出すのです。

```js
document.replaceChildren();
document.children; // HTMLCollection []
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.prepend()")}}
- {{domxref("Document.append()")}}
