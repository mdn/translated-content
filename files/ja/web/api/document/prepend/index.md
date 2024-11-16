---
title: "Document: prepend() メソッド"
short-title: prepend()
slug: Web/API/Document/prepend
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("DOM")}}

**`Document.prepend()`** メソッドは、一連の {{domxref("Node")}} オブジェクトまたは文字列オブジェクトを文書の最初の子の前に挿入します。文字列オブジェクトは等価な {{domxref("Text")}} ノードとして挿入されます。

このメソッドは子要素を `Document` に前置します。ツリー内の任意の要素に前置するには {{domxref("Element.prepend()")}} を参照してください。

## 構文

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 挿入する一連の {{domxref("Node")}} または文字列オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層内の指定した点に挿入できなかった場合に発生します。

## 例

### 文書にルート要素を前置

既存の HTML 文書に要素を追加しようとすると、{{HTMLElement("html")}} 要素が既に存在する場合は `HierarchyRequestError' {{domxref("DOMException")}} が発生するかもしれません。

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

既存の要素のない新しい文書を作成する場合、ルート HTML 要素（またはルート SVG 要素）を前置することができます。

```js
let doc = new Document();
let html = document.createElement("html");
doc.prepend(html);

doc.children; // HTMLCollection [<html>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.append()")}}
- {{domxref("Element.prepend()")}}
