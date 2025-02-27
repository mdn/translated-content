---
title: "Document: append() メソッド"
short-title: append()
slug: Web/API/Document/append
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("DOM")}}

**`Document.append()`** メソッドは、一連の {{domxref("Node")}} オブジェクトまたは文字列オブジェクトを、この文書の最後の子の後に挿入します。文字列オブジェクトは等価な {{domxref("Text")}} ノードとして挿入されます。

このメソッドは `Document` に子要素を追加します。ツリー内の任意の要素に追加するには {{domxref("Element.append()")}} を参照してください。

## 構文

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 挿入する一連の {{domxref("Node")}} オブジェクトまたは文字列オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : ノードが階層内の指定した点に挿入できない場合に発生します。

## 例

### ルート要素を文書に追加

既存の HTML 文書に要素を追加しようとすると、{{HTMLElement("html")}} 要素が既に存在する場合は `HierarchyRequestError` {{domxref("DOMException")}} が発生するかもしれません。

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

既存の要素のない新しい文書を作成した場合、ルート HTML 要素（またはルート SVG 要素）を追加することができます。

```js
let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.prepend()")}}
- {{domxref("Element.append()")}}
