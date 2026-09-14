---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{ APIRef("DOM") }}

**`TreeWalker`** オブジェクトは、文書のサブツリーのノードおよびその位置を表します。

`TreeWalker` は [`document`](/ja/docs/Web/API/Document) オブジェクトの {{domxref("Document.createTreeWalker()")}} メソッドを使用して作成可能です。

## インスタンスプロパティ

_このインターフェイスが継承するプロパティはありません。_

- {{domxref("TreeWalker.root")}} {{ReadOnlyInline}}
  - : `TreeWalker` を作成したときに指定したルートノードを表す {{domxref("Node")}} を返します。
- {{domxref("TreeWalker.whatToShow")}} {{ReadOnlyInline}}
  - : 示す必要がある {{domxref("Node")}} の型を表す定数で構成されるビットマスクである `unsigned long` を返します。一致しないノードはスキップされますが、その子は関連があれば含まれます。
- {{domxref("TreeWalker.filter")}} {{ReadOnlyInline}}
  - : 関連するノードを選択するために使用する、この `TreeWalker` に関連付けられた `NodeFilter` を返します。
- {{domxref("TreeWalker.currentNode")}}
  - : `TreeWalker` の現在の位置の {{domxref("Node")}} です。

## インスタンスメソッド

_このインターフェイスが継承しているメソッドはありません。_

> [!NOTE]
> `TreeWalker` のコンテキストでは、 `whatToShow` と `filter` 引数で決定される論理ビューにノードが存在する場合、ノードは*可視状態*となります。（ノードが画面上に表示されているかどうかは関係ありません。）

- {{domxref("TreeWalker.parentNode()")}}
  - : 現在の {{domxref("Node")}} を文書内の順序で最初の*可視状態*である祖先ノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない、あるいはオブジェクト生成時に定義した*ルートノード*より前にある場合は、`null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.firstChild()")}}
  - : 現在の {{domxref("Node")}} を現在のノードで最初の*可視状態*である子に移動して、発見した子ノードを返します。また、現在のノードをこの子ノードに移動します。該当する子がない場合は、`null` を返して現在のノードは変更しません。なお、 `firstChild()` が返すノードは、 `TreeWalker` オブジェクトのインスタンス化時に設定された `whatToShow` の値に依存することに注意してください。次のような HTML ツリーを想定して、 `whatToShow` を `NodeFilter.SHOW_ALL` に設定して `firstChild()` を呼び出すと、`HTMLDivElement` オブジェクトではなく `Text` ノードが返されます。

    ```html
    <!doctype html>
    <html lang="ja">
      <head>
        <title>デモ</title>
      </head>
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
  - : 現在の {{domxref("Node")}} を文書内の順序で前の可視状態であるノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない、あるいはオブジェクト生成時に定義したルートノードより前にある場合は、`null` を返して現在のノードは変更しません。
- {{domxref("TreeWalker.nextNode()")}}
  - : 現在の {{domxref("Node")}} を文書内の順序で次の可視状態であるノードに移動して、発見したノードを返します。また、現在のノードをこの位置に移動します。該当するノードがない場合は、`null` を返して現在のノードは変更しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 作成するメソッド: {{domxref("Document.createTreeWalker()")}}
- 関連インターフェイス: {{domxref("NodeIterator")}}
