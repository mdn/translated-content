---
title: Document.importNode()
slug: Web/API/Document/importNode
tags:
  - API
  - DOM
  - Document
  - メソッド
  - ノード
  - リファレンス
  - コピー
  - importNode
browser-compat: api.Document.importNode
translation_of: Web/API/Document/importNode
---
{{APIRef("DOM")}}

{{domxref("Document")}} オブジェクトの **`importNode()`** メソッドは、後で現在の文書に挿入するために、他の文書から {{domxref("Node")}} または {{domxref("DocumentFragment")}} の複製を作成します。

インポートされたノードは、まだ文書ツリーには含まれません。これを含めるには、 {{domxref("Node.appendChild", "appendChild()")}} や {{domxref("Node.insertBefore", "insertBefore()")}} のような挿入メソッドを、現在の文書ツリーに*存在する*ノードに対して呼び出す必要があります。

{{domxref("document.adoptNode()")}} とは異なり、元の文書から元のノードは削除されません。インポートされたノードは元のノードの複製です。

## 構文

```js
importNode(externalNode)
importNode(externalNode, deep)
```

### 引数

- `externalNode`
  - : 現在の文書にインポートする、外部の {{domxref("Node")}} または {{domxref("DocumentFragment")}} です。
- `deep` {{optional_inline}}

  - : 論理値のフラグで、既定値は `false` であり、`externalNode` の DOM サブツリー全体をインポートするかどうかを制御します。

    - `deep` が `true` に設定された場合、 `externalNode` およびその子孫全てが複製されます。
    - `deep` が `false` に設定された場合、 `externalNode` のみがインポートされます — 新しいノードには子ノードはない状態になります。

### 返値

インポートする側の文書のスコープにコピーされた `importedNode` です。

> **Note:** `importedNode` の {{domxref("Node.parentNode")}} は `null` になります。まだ文書ツリーに挿入されていないからです。

## 例

```js
const iframe  = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## メモ

外部文書からのノードは、現在の文書に挿入する前に、次のいずれかの状態にしなければなりません。

- {{domXref("document.importNode()")}} でクローンする、または
- {{domXref("document.adoptNode()")}} で移行する

> **Note:** Firefox は今のところこのルールを強制していませんが、将来の互換性を改善するために、このルールに従うことを強く推奨します。

{{domXref("Node.ownerDocument")}} の問題に関して詳しくは、W3C DOM FAQ を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.adoptNode()")}} このメソッドととても似た動作を行う
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
