---
title: TreeWalker
slug: Web/API/TreeWalker
---

{{ APIRef("DOM") }}

**`TreeWalker`** オブジェクトは、文書のサブツリーのノードおよびその位置を表します。

`TreeWalker` は [`document`](/ja/docs/Web/API/Document) オブジェクトの {{domxref("Document.createTreeWalker()")}} メソッドを使用して作成可能です。

## プロパティ

_このインターフェイスが継承するプロパティはありません。_

- {{domxref("TreeWalker.root")}} {{readonlyInline}}
  - : `TreeWalker` を作成したときに指定したルートノードを表す {{domxref("Node")}} を返します。
- {{domxref("TreeWalker.whatToShow")}} {{readonlyInline}}

  - : 提供しなければならない {{domxref("Node")}} の型を表す定数で構成されるビットマスクである `unsigned long` を返します。一致しないノードはスキップされますが、その子は関連があれば含まれます。使用できる値は以下のとおりです。

    | 定数                                                     | 数値                                    | 説明                                                                                                                                                                                                                                                                                                                                |
    | -------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (`unsigned long` の最大値) | すべてのノードを表示します。                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                     | 属性の {{domxref("Attr")}} ノードを表示します。これはルートとして {{domxref("Attr")}} を含む {{domxref("TreeWalker")}} を作成する場合に限り、意味があります。この場合は、反復処理や走査処理の最初の位置に属性ノードが現れることを意味します。属性はほかのノードの子ではありませんので、文書ツリーを走査処理するときは出現しません。 |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                     | {{ domxref("CDATASection") }} ノードを表示します。                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                   | {{domxref("Comment")}} ノードを表示します。                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                   | {{domxref("Document")}} ノードを表示します。                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                  | {{domxref("DocumentFragment")}} ノードを表示します。                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                   | {{domxref("DocumentType")}} ノードを表示します。                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                     | {{domxref("Element")}} ノードを表示します。                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                    | 旧式、もう使えません。                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                    | 旧式、もう使えません。                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                  | 旧式、もう使えません。                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                    | {{domxref("ProcessingInstruction")}} ノードを表示します。                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                     | {{domxref("Text")}} ノードを表示します。                                                                                                                                                                                                                                                                                            |

- {{domxref("TreeWalker.filter")}} {{readonlyInline}}
  - : 関連するノードを選択するために使用した {{domxref("NodeFilter")}} を返します。
- {{domxref("TreeWalker.currentNode")}}
  - : `TreeWalker` の現在の位置の {{domxref("Node")}} です。

## メソッド

_このインターフェイスが継承しているメソッドはありません。_

> **メモ:** `TreeWalker` のコンテキストでは、 `whatToShow` と `filter` 引数で決定される論理ビューにノードが存在する場合、ノードは*可視状態*となります。(ノードが画面上に表示されているかどうかは関係ありません)。

- {{domxref("TreeWalker.parentNode()")}}
  - : 現在の {{domxref("Node")}} を文書内の順序で最初の*可視状態*である祖先ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない、あるいはオブジェクト生成時に定義した*ルートノード*より前にある場合は、`null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.firstChild()")}}

  - : 現在の {{domxref("Node")}} を現在のノードで最初の*可視状態*である子に移動して、発見した子ノードを返します。また、現在のノードをこの子ノードに移動します。該当する子がない場合は、`null` を返して現在のノードは変更しません。なお、 `firstChild()` が返すノードは、 `TreeWalker` オブジェクトのインスタンス化時に設定された `whatToShow` の値に依存することに注意してください。次のような HTML ツリーを想定して、 `whatToShow` を `NodeFilter.SHOW_ALL` に設定して `firstChild()` を呼び出すと、`HTMLDivElement` オブジェクトではなく `Text` ノードが返されます。

    ```html
    <!DOCTYPE html>
    <html>
      <head><title>Demo</title>
      <body>
        <div id="container"></div>
      </body>
    </html>
    ```

    ```js
    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL);
    let node = walker.firstChild(); // nodeName: "#text"
    ```

    しかし、次のようにすることができます。

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    同じことが `nextSibling()`, `previousSibling()`, `firstChild()`, `lastChild()` でも言えます。

- {{domxref("TreeWalker.lastChild()")}}
  - : 現在の {{domxref("Node")}} を現在のノードで最後の*可視状態*である子に移動して、発見した子ノードを返します。また、現在のノードをこの子ノードに移動します。該当する子がない場合は、`null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.previousSibling()")}}
  - : 現在の {{domxref("Node")}} を前の兄弟に移動して、発見した兄弟ノードを返します。該当するノードがない場合は、 `null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.nextSibling()")}}
  - : 現在の {{domxref("Node")}} を次の兄弟に移動して、発見した兄弟ノードを返します。該当するノードがない場合は、 `null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.previousNode()")}}
  - : 現在の {{domxref("Node")}} を文書内の順序で前の<em>可視状態である</em>ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない、あるいはオブジェクト生成時に定義した<em>ルートノード</em>より前にある場合は、`null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.nextNode()")}}
  - : 現在の {{domxref("Node")}} を文書内の順序で次の<em>可視状態である</em>ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない場合は、`null` を返して現在のノードは変更しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 作成するメソッド: {{domxref("Document.createTreeWalker()")}}
- 関連インターフェイス: {{domxref("NodeFilter")}}, {{domxref("NodeIterator")}}
