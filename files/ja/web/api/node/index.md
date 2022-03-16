---
title: Node
slug: Web/API/Node
tags:
  - インターフェイス
  - リファレンス
browser-compat: api.Node
translation_of: Web/API/Node
---
{{APIRef("DOM")}}

{{Glossary("DOM")}} の **`Node`** インターフェイスは、他の多くの DOM API オブジェクトのベースとなる抽象的な基底クラスです。したがって、これらのオブジェクト型と類似しており、しばしば交換して使用することができます。抽象クラスであるため、単なる `Node` オブジェクトというものは存在しません。 `Node` の機能を実装しているオブジェクトはすべて、何れかのサブクラスに基づいています。最も注目すべきものは、 {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}} です。

それに加えて、あらゆる種類の DOM ノードが `Node` を基底とするインターフェイスで表現されます。これには、 {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}} ({{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, {{DOMxRef("CDATASection")}},  {{DOMxRef("ProcessingInstruction")}} がすべて基底とするもの), {{DOMxRef("DocumentType")}} があります。

場合によっては、ベースとなる `Node` インターフェイスの特定の機能が子インターフェイスに適用されないことがあります。この場合、継承するノードは状況に応じて `null` を返したり、例外を投げたりします。例えば、子を持てないノード型に子を追加しようとすると、例外が発生します。

{{InheritanceDiagram}}

## プロパティ

_以下のプロパティに加え、 `Node` は親である {{DOMxRef("EventTarget")}} からプロパティを継承しています_。

- {{DOMxRef("Node.baseURI")}}{{ReadOnlyInline}}
  - : この `Node` を持つ文書のベース URL を表す文字列を返します。
- {{DOMxRef("Node.childNodes")}}{{ReadOnlyInline}}
  - : このノードのすべての子孫（要素、テキスト、コメント）を持つ、生きた {{DOMxRef("NodeList")}} を返します。 {{DOMxRef("NodeList")}} が生きているとは、`Node` の子が変化すれば自動的に {{DOMxRef("NodeList")}} オブジェクトが更新されることを意味します。
- {{DOMxRef("Node.firstChild")}}{{ReadOnlyInline}}
  - : ノードの直下の最初の子ノードを表す `Node` を返します。子が存在しなければ `null` を返します。
- {{DOMxRef("Node.isConnected")}}{{ReadOnlyInline}}
  - : 論理値で、ノードが (直接/間接的に) コンテキストオブジェクト、例えば、通常の DOM の場合は {{DOMxRef("Document")}} オブジェクト、あるいはシャドウ DOM の場合は {{DOMxRef("ShadowRoot")}} に接続されているかどうかを示します。
- {{DOMxRef("Node.lastChild")}}{{ReadOnlyInline}}
  - : ノードの直下の最後の子ノードを表す `Node` を返します。子が存在しなければ `null` を返します。
- {{DOMxRef("Node.nextSibling")}}{{ReadOnlyInline}}
  - : ツリー構造で次のノードを表す `Node` を返します。該当するノードがない場合は `null` を返します。
- {{DOMxRef("Node.nodeName")}}{{ReadOnlyInline}}
  - : `Node` の名前を持つ文字列を返します。名前の構造は、ノードの型によって異なります。例えば、{{DOMxRef("HTMLElement")}} は {{DOMxRef("HTMLAudioElement")}} に対して `'audio'` というように対応するタグの名前、 {{DOMxRef("Text")}} ノードは `'#text'` という文字列、 {{DOMxRef("Document")}} ノードは `'#document'` という文字列になります。
- {{DOMxRef("Node.nodeType")}}{{ReadOnlyInline}}
  - : ノードの型を表す `unsigned short` を返します。使用できる値は次の通りです。

    | 名前                                                 | 値 |
    | ---------------------------------------------------- | ----- |
    | `ELEMENT_NODE`                                       | `1`   |
    | `ATTRIBUTE_NODE`                                     | `2`   |
    | `TEXT_NODE`                                          | `3`   |
    | `CDATA_SECTION_NODE`                                 | `4`   |
    | `PROCESSING_INSTRUCTION_NODE`                        | `7`   |
    | `COMMENT_NODE`                                       | `8`   |
    | `DOCUMENT_NODE`                                      | `9`   |
    | `DOCUMENT_TYPE_NODE`                                 | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`                             | `11`  |

- {{DOMxRef("Node.nodeValue")}}
  - : 現在のノードの値を取得または設定します。
- {{DOMxRef("Node.ownerDocument")}}{{ReadOnlyInline}}
  - : ノードが所属する文書を {{DOMxRef("Document")}} で返します。ノードが文書自身の場合は、`null` を返します。
- {{DOMxRef("Node.parentNode")}}{{ReadOnlyInline}}
  - : このノードの親の `Node` を返します。ノードがツリーの最上位である、あるいはツリーに加わっていないなど、親が存在しない場合は `null` を返します。
- {{DOMxRef("Node.parentElement")}}{{ReadOnlyInline}}
  - : このノードの親の要素を {{DOMxRef("Element")}} で返します。ノードに親が存在しない、あるいは親が {{DOMxRef("Element")}} ではない場合は、`null` を返します。
- {{DOMxRef("Node.previousSibling")}}{{ReadOnlyInline}}
  - : ツリー構造で前のノードを表す `Node` を返します。該当するノードがない場合は `null` を返します。
- {{DOMxRef("Node.textContent")}}
  - : 要素や要素のすべての子孫のテキストコンテンツを取得または設定します。

## メソッド

_以下のプロパティに加えて、親である {{DOMxRef("EventTarget")}} からメソッドを継承しています。_

- {{DOMxRef("Node.appendChild()")}}
  - : 指定された `childNode` 引数を、現在のノードの最後の子として追加します。
    引数が DOM ツリー上の既存のノードを参照している場合は、ノードが現在の位置から外されて新しい位置に追加されます。
- {{DOMxRef("Node.cloneNode()")}}
  - : `Node` を複製します。また、すべての内容物を複製することもできます。既定で、ノードの内容物を複製します。
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : 現在のノードの位置を、他の文書内の別のノードと比較します。
- {{DOMxRef("Node.contains()")}}
  - : ノードが指定したノードの子孫であるか否かを `true` または `false` の値で返します。
- {{DOMxRef("Node.getRootNode()")}}
  - : コンテキストオブジェクトのルートを返します。任意で、シャドウルートが使用可能である場合にそれを含めることができます。
- {{DOMxRef("Node.hasChildNodes()")}}
  - : 要素が子ノードを持っているか否かを示す論理値を返します。
- {{DOMxRef("Node.insertBefore()")}}
  - : 現在のノードの子として、参照先ノードの前に `Node` を挿入します。
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : 引数として名前空間の URI を受け入れて、名前空間が指定したノードの既定の名前空間であれば `true`、そうでない場合は `false` である論理値を返します。
- {{DOMxRef("Node.isEqualNode()")}}
  - : 2 つのノードが同じ型であり、定義されているすべてのデータポイントが一致するか否かを表す 論理値を返します。
- {{DOMxRef("Node.isSameNode()")}}
  - : 2 つのノードが同じである（すなわち、同じオブジェクトを参照している）か否かを示す論理値を返します。
- {{DOMxRef("Node.lookupPrefix()")}}
  - : 指定した名前空間 URI の接頭辞があれば、その接頭辞を含む {{DOMxRef("DOMString")}} を返します。接頭辞がない場合は `null` を返します。複数の接頭辞があった場合の結果は実装依存です。
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : 接頭辞を受け入れて、指定したノードで接頭辞が関連付けられた名前空間が見つかった場合は名前空間の URI を返します (見つからない場合は `null` を返します)。接頭辞として `null` を与えると、既定の名前空間を返します。
- {{DOMxRef("Node.normalize()")}}
  - : 要素内のすべてのテキストノードをクリーンアップ（隣接ノードを統合し、空のノードを削除）します。
- {{DOMxRef("Node.removeChild()")}}
  - : 現在の要素から子ノードを削除します。現在の要素は現在のノードの子であることが必要です。
- {{DOMxRef("Node.replaceChild()")}}
  - : 現在のノードの子 `Node` のひとつを、引数で指定した別のノードで置き換えます。

### 廃止されたメソッド

- {{DOMxRef("Node.isSupported()")}} {{deprecated_inline}}
  - : DOM 実装が特定の機能を実装しており、またその機能が指定したノードで対応しているかを確認して、その結果を `true` または `false` で返します。

## 例

### ノード内にあるすべての子を削除

この関数は、ある要素の最初の子を、一つも残らなくなるまで削除します。

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
```

この関数の使用は単一の呼び出しです。こちらでは、文書の本文を空にします。

```js
removeAllChildren(document.body)
```

他の方法として、 textContent に空文字列を設定すること (`document.body.textContent = ""`) も可能です。

### すべての子ノードの走査

次の関数は、ルートノードに含まれる（ルートノード自身も含めた）すべてのノードに対してコールバック関数を再帰的に呼び出します。

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = []
    eachNode(rootNode, function(node) {
      nodes.push(node)
    })
    return nodes
  }

  if (false === callback(rootNode)) {
    return false
  }

  if (rootNode.hasChildNodes()) {
    const nodes = rootNode.childNodes
    for (let i = 0, l = nodes.length; i < l; ++i) {
      if (false === eachNode(nodes[i], callback)) {
        return
      }
    }
  }
}
```

この関数は、 `rootNode` のそれぞれの子孫ノードに対して（ルート自身も含め）再帰的に関数を呼び出します。

`callback` が省略された場合、この関数は代わりに {{jsxref("Array")}} を返し、そこには `rootNode` とその中に含まれるすべてのノードが含まれます。

`callback` が提供され、 `false` を返した場合、現在の再帰レベルは中止され、関数は最後の親のレベルから実行を再開します。これは、（特定の文字列を含むテキストノードを検索するなどして）ノードが見つかった時点でループを中止するために利用できます。

この関数には 2 つの引数があります。

- `rootNode`
  - : 再帰的に子孫の走査を行う `Node` オブジェクトです。
- `callback` {{optional_inline}}
  - : 省略可能なコールバック[関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)で、単一の `Node` を引数として受け取るものです。省略された場合、 `eachNode` は {{jsxref("Array")}} で、 `rootNode` の中に含まれる (ルート自身も含む) ノードの一覧を返します。

次の例は `eachNode()` 関数の現実世界での使用方法として、ウェブページ上のテキストの検索を示します。

検索には  `grep` というラッパー関数を使用しています。

```js
function grep(parentNode, pattern) {
  const matches = []
  let endScan = false

  eachNode(parentNode, function(node){
    if (endScan) {
      return false
    }

    // Ignore anything which isn't a text node
    if (node.nodeType !== Node.TEXT_NODE) {
      return
    }

    if (typeof pattern === "string") {
      if (-1 !== node.textContent.indexOf(pattern)) {
        matches.push(node)
      }
    }
    else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true
        matches = node
      }
      else {
        matches.push(node)
      }
    }
  })

  return matches
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
