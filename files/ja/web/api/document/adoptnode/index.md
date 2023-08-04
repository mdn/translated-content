---
title: Document.adoptNode()
slug: Web/API/Document/adoptNode
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** は、{{Glossary("node/dom", "ノード")}}を他の{{domxref("Document", "文書", "", "1")}}からメソッドの文書へ移動します。取り込まれたノードおよびそのサブツリーは (もしあれば) 元の文書から削除され、 {{domxref("Node.ownerDocument", "ownerDocument")}} が現在の文書に変更されます。その後、ノードを現在の文書に挿入することができます。

## 構文

```
const importedNode = document.adoptNode(externalNode);
```

### 引数

- `externalNode`
  - : 他の文書から取り込まれるノードです。

### 返値

インポートする文書のスコープ内にコピーされた `importedNode`。

このメソッドを呼び出した後、 `importedNode` および `externalNode` は同じオブジェクトになります。

> **メモ:** `importedNode` の {{domxref("Node.parentNode")}} は、まだ文書ツリーに挿入されていないので `null` です。

## 例

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach(function (imgEl) {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## 注

外部の文書から取り込まれるノードは、現在の文書に挿入する前に、次のいずれかを実行してください。

- {{domXref("document.importNode()")}} を使用して複製する
- {{domXref("document.adoptNode()")}} を使用して取り込む

> **メモ:** **ベストプラクティス:** Firefox は現在はこの規則を強制しませんが、将来の互換性を向上するためにこの規則に従うことを強くお勧めします。

{{domXref("Node.ownerDocument")}} の問題についての詳細は、 W3C DOM FAQ を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.importNode()")}}
