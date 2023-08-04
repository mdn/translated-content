---
title: Document.createNodeIterator()
slug: Web/API/Document/createNodeIterator
---

{{APIRef("DOM")}}

新しい {{domxref("NodeIterator")}} オブジェクトを返します。

## 構文

```
const nodeIterator = document.createNodeIterator(root[, whatToShow[, filter]]);
```

### 値

- `root`
  - : {{ domxref("NodeIterator") }} の探索の開始地点になるルートノードです。
- `whatToShow` {{ optional_inline() }}

  - : オプションの `unsigned long` 値で、 [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter) の定数プロパティを組み合わせて作られたビットマスクを表します。これは特定の種類のノードを絞り込みするのに便利な方法です。. 既定値は `0xFFFFFFFF` で、 `SHOW_ALL` 定数を表します。

    | 定数                                                     | 数値                                     | 説明                                                                                                                                                                                                                                                                                                                                          |
    | -------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `-1` (すなわち `unsigned long` の最大値) | すべてのノードを表します。                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                      | 属性 {{ domxref("Attr") }} ノードを表します。これは、 {{ domxref("Attr") }} ノードをルートとして {{ domxref("NodeIterator") }} を作成した場合にのみ意味を持ちます。この場合、その属性ノードが反復や探索の最初の位置に現れることを意味します。属性は他のノードの子ではないので、文書ツリーを探索しても現れません。                             |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                      | {{ domxref("CDATASection") }} ノードを表します。                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                    | {{ domxref("Comment") }} ノードを表します。                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                    | {{ domxref("Document") }} ノードを表します。                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                   | {{ domxref("DocumentFragment") }} ノードを表します。                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                    | {{ domxref("DocumentType") }} ノードを表します。                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                      | {{ domxref("Element") }} ノードを表します。                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                     | {{ domxref("Entity") }} ノードを表示します。これは、 {{ domxref("Entity") }} ノードをルートとして {{ domxref("NodeIterator") }} を作成した場合にのみ意味を持ちます。この場合、 {{ domxref("Entity") }} ノードが探索の最初の位置に現れることを意味します。エンティティは文書ツリーの一部ではないので、文書ツリーを探索しても表されません。     |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                     | {{ domxref("EntityReference") }} ノードを表します。                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                   | {{ domxref("Notation") }} ノードを表示します。これは、 {{ domxref("Notation") }} ノードをルートとして {{ domxref("NodeIterator") }} を作成した場合にのみ意味を持ちます。この場合、 {{ domxref("Notation") }} ノードが探索の最初の位置に現れることを意味します。 Notation は文書ツリーの一部ではないので、文書ツリーを探索しても表されません。 |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                     | Shows {{ domxref("ProcessingInstruction") }} nodes.                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                      | {{ domxref("Text") }} ノードを表します。                                                                                                                                                                                                                                                                                                      |

- `filter` {{ optional_inline() }}
  - : NodeFilter インターフェースを実装したオブジェクト。その acceptNode() メソッドは、反復可能なノードのリストに含めるかどうかを決定するために、 whatToShow フラグによって含まれていると受け入れられたルートを基準としたサブツリーの各ノードに対して呼び出されます (代わりに単純なコールバック関数を使用することもできます)。このメソッドは `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT`, or `NodeFilter.FILTER_SKIP` のいずれかを返します。[例](#example)を参照してください。

> **メモ:** Gecko 12.0 (Firefox 12.0 / Thunderbird 12.0 / SeaMonkey 2.9) より前の版では、このメソッドは DOM4 仕様の一部ではないオプションの 4 番目の引数 (entityReferenceExpansion) を受け入れていました。この引数は、エンティティ参照ノードの子がイテレーターから見えるかどうかを示していました。このようなノードはブラウザーでは作成されないので、この引数は何の効果もありませんでした。

## 例

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  function (node) {
    return node.nodeName.toLowerCase() === "p"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT;
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
