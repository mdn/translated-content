---
title: "Document: createNodeIterator() メソッド"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Document.createNodeIterator()`** メソッドは、新しい [`NodeIterator`](/ja/docs/Web/API/NodeIterator) オブジェクトを返します。

## 構文

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### 引数

- `root`

  - : {{ domxref("NodeIterator") }} の探索の開始地点になるルートノードです。

- `whatToShow` {{optional_inline}}

  - : オプションの `unsigned long` 値で、 [`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter) の定数プロパティを組み合わせて作られたビットマスクを表します。
    これは特定の種類のノードを絞り込みするのに便利な方法です。既定値は `0xFFFFFFFF` で、 `SHOW_ALL` 定数を表します。

    | 定数                                                     | 数値                                             | 説明                                                                                                                                                                                                                                                                                                              |
    | -------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (すなわち `unsigned long` の最大値) | すべてのノードを表します。                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                              | 属性 {{ domxref("Attr") }} ノードを表します。これは、 {{ domxref("Attr") }} ノードをルートとして {{ domxref("NodeIterator") }} を作成した場合にのみ意味を持ちます。この場合、その属性ノードが反復や探索の最初の位置に現れることを意味します。属性は他のノードの子ではないので、文書ツリーを探索しても現れません。 |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                              | {{ domxref("CDATASection") }} ノードを表します。                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                            | {{ domxref("Comment") }} ノードを表します。                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                            | {{ domxref("Document") }} ノードを表します。                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                           | {{ domxref("DocumentFragment") }} ノードを表します。                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                            | {{ domxref("DocumentType") }} ノードを表します。                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                              | {{ domxref("Element") }} ノードを表します。                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                             | 古い値で、もう使用できません。                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                             | 古い値で、もう使用できません。                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                           | 古い値で、もう使用できません。                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                             | Shows {{ domxref("ProcessingInstruction") }} nodes.                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                              | {{ domxref("Text") }} ノードを表します。                                                                                                                                                                                                                                                                          |

- `filter` {{optional_inline}}
  - : コールバック関数または `acceptNode()` メソッドを持つオブジェクトです。この関数またはメソッドは、この関数またはメソッドは、サブツリー内の各ノードのうち whatToShow フラグで含まれると受け入れられたノードに対して呼び出され、反復可能オブジェクトのリストに記載するかどうかを決定します。このメソッドは `NodeFilter.FILTER_ACCEPT`、`NodeFilter.FILTER_REJECT`、`NodeFilter.FILTER_SKIP` のいずれかを返す必要があります。[例](#例)を参照してください。

### 返値

新しい [`NodeIterator`](/ja/docs/Web/API/NodeIterator) オブジェクトです。

## 例

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.nodeName.toLowerCase() === "p"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT,
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

同じ動作ですが、`acceptNode()` メソッドを持つオブジェクトを使用しています。

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return node.nodeName.toLowerCase() === "p"
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  },
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
