---
title: "Document: adoptNode() メソッド"
short-title: adoptNode()
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: 3d4f158c8ab2e1ee7141b59f020e8e5de911ac62
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** は、{{Glossary("node/dom", "ノード")}}を他の{{domxref("Document", "文書", "", "1")}}からメソッドの文書へ移譲します。
取り込まれたノードおよびそのサブツリーは（もしあれば）元の文書から削除され、 {{domxref("Node.ownerDocument", "ownerDocument")}} が現在の文書に変更されます。
その後、ノードを現在の文書に挿入することができます。

## 構文

```js-nolint
adoptNode(externalNode)
```

### 引数

- `externalNode`
  - : 他の文書から移譲されるノードです。

### 返値

インポートする文書のスコープ内にコピーされた `importedNode` です。

このメソッドを呼び出した後、 `importedNode` および `externalNode` は同じオブジェクトになります。

> **メモ:** `importedNode` の {{domxref("Node.parentNode")}} は、まだ文書ツリーに挿入されていないので `null` です。

## 例

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## メモ

外部の文書のノードを現在の文書に挿入できるようにするには、次のいずれかを実行してください。

- {{domXref("document.importNode()")}} を使用して複製する
- `document.adoptNode()` を使用して移譲する

{{domXref("Node.ownerDocument")}} の問題についての詳細は、[W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.importNode()")}}
