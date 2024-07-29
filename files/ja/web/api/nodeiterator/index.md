---
title: NodeIterator
slug: Web/API/NodeIterator
---

{{APIRef("DOM")}}

**`NodeIterator`** インターフェイスは、DOM のサブツリー内に存在するノードのリストのメンバーに対するイテレーターを表します。ノードは文書内に現れる順番で返されます。

## 構文

`NodeIterator` は、以下のように {{domxref("Document.createNodeIterator()")}} メソッドを用いて作成することができます。

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## プロパティ

_このインターフェイスが継承するプロパティはありません。_

- {{domxref("NodeIterator.root")}} {{readonlyInline}}
  - : `NodeIterator` を作成したときに指定したルートノードを表す {{domxref("Node")}} を返します。
- {{domxref("NodeIterator.whatToShow")}} {{readonlyInline}}

  - : 提供しなければならない {{domxref("Node")}} の型を表す定数で構成されるビットマスクである `unsigned long` を返します。一致しないノードはスキップされますが、その子は関連があれば含まれます。

    使用できる値は以下のとおりです。

    | 定数                                                     | 数値                                               | 説明                                                                                                                                                                                                                                                                                                                          |
    | -------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` （すなわち `unsigned long` の最大値） | すべてのノードを表示します。                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                | 属性の {{domxref("Attr")}} ノードを表示します。これはルートとして {{domxref("Attr")}} を含む {{domxref("NodeIterator")}} を作成する場合に限り、意味があります。この場合は、反復処理や走査の最初の位置に属性ノードが現れることを意味します。属性はほかのノードの子ではありませんので、文書ツリーを走査するときは出現しません。 |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                | {{domxref("CDATASection")}} ノードを表示します。                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                              | {{domxref("Comment")}} ノードを表示します。                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                              | {{domxref("Document")}} ノードを表示します。                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                             | {{domxref("DocumentFragment")}} ノードを表示します。                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                              | {{domxref("DocumentType")}} ノードを表示します。                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                | {{domxref("Element")}} ノードを表示します。                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                               | 古いもので、もう使用されません。                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                               | 古いもので、もう使用されません。                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                             | 古いもので、もう使用されません。                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                               | {{domxref("ProcessingInstruction")}} ノードを表示します。                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                | {{domxref("Text")}} ノードを表示します。                                                                                                                                                                                                                                                                                      |

- {{domxref("NodeIterator.filter")}} {{readonlyInline}}
  - : 関連するノードを選択するために使用した {{domxref("NodeFilter")}} を返します。
- {{domxref("NodeIterator.referenceNode")}} {{readonlyInline}}
  {{experimental_inline() }}
  - : イテレーターが結び付けられている {{domxref("Node")}} を返します。
- {{domxref("NodeIterator.pointerBeforeReferenceNode")}} {{readonlyInline}} {{
  experimental_inline() }}
  - : 論理値のフラグで、 {{domxref("NodeIterator")}} が前に固定されるかどうかを示します。前に固定される場合は `true`、後に固定される場合は `false` になります。

## メソッド

_このインターフェイスが継承するメソッドはありません。_

- {{domxref("NodeIterator.detach()")}} {{deprecated_inline}}
  - : これは無操作です。です。これは何も行いません。以前は `NodeIterator` を使用しなくなったことをエンジンに伝えていましたが、現在は不要です。
- {{domxref("NodeIterator.previousNode()")}}
  - : 文書内で前の {{domxref("Node")}} を返します。ノードがない場合は `null` を返します。
- {{domxref("NodeIterator.nextNode()")}}
  - : 文書内で次の {{domxref("Node")}} を返します。ノードがない場合は `null` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 作成するメソッド: {{domxref("Document.createNodeIterator()")}}
- 関連インターフェイス

  - {{domxref("NodeFilter")}}
  - {{domxref("TreeWalker")}}
