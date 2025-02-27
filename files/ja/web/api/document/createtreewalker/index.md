---
title: "Document: createTreeWalker() メソッド"
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
l10n:
  sourceCommit: cbfc561e5e577975a51acceadbd7d2fec9b8e45e
---

{{ApiRef("Document")}}

**`Document.createTreeWalker()`** 作成メソッドは、新しく作成された {{domxref("TreeWalker")}} オブジェクトを返します。

## 構文

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### 引数

- `root`

  - : {{domxref("Node")}} で、{{domxref("TreeWalker.currentNode")}} の初期値である`TreeWalker` オブジェクトのルートを表します。

- `whatToShow` {{optional_inline}}

  - : `unsigned long` で、[`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter) の定数プロパティを組み合わせて作成したビットマスクを表します。特定の型のノードをフィルタリングする便利な方法です。既定値は `0xFFFFFFFF` で、これは `NodeFilter.SHOW_ALL` 定数を表します。

    | 定数                                                     | 数値         | 説明                                                      |
    | -------------------------------------------------------- | ------------ | --------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF` | すべてのノードを出力します。                              |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`        | {{domxref("Attr")}} ノードを出力します。                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`        | {{domxref("CDATASection")}} ノードを出力します。          |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`       | {{domxref("Comment")}} ノードを出力します。               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`      | {{domxref("Document")}} ノードを出力します。              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`      | {{domxref("DocumentFragment")}} ノードを出力します。      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`      | {{domxref("DocumentType")}} ノードを出力します。          |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`        | {{domxref("Element")}} ノードを出力します。               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`       | 古いものであり、効果はありません。                        |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`       | 古いものであり、効果はありません。                        |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`      | 古いものであり、効果はありません。                        |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`       | {{domxref("ProcessingInstruction")}} ノードを出力します。 |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`        | {{domxref("Text")}} ノードを出力します。                  |

    > **メモ:** `Attr` ノードの親は常に `null` であるため、{{DOMXref("TreeWalker.nextNode()")}} や {{DOMXref("TreeWalker.previousNode()")}} が `Attr` ノードを返すことはありません。`Attr` ノードを走査するには、{{DOMXref("Element.attributes")}} を使用してください。

- `filter` {{optional_inline}}

  - : コールバック関数または `acceptNode()` メソッドを持つオブジェクトで、`NodeFilter.FILTER_ACCEPT`、`NodeFilter.FILTER_REJECT`、`NodeFilter.FILTER_SKIP` のいずれかを返します。この関数またはメソッドは、`whatToShow` フラグによって含まれるものとして受け入れられた `root` を基点とするサブツリーの各ノードに対して呼び出され、反復可能オブジェクトのリストに含めるかどうかを決定します。

    - 返値が `NodeFilter.FILTER_ACCEPT` の場合、このノードが含まれます。
    - 返値が `NodeFilter.FILTER_REJECT` の場合、このノードの配下のサブツリーにあるすべてのノードが含まれません。
    - 返値が `NodeFilter.FILTER_SKIP` の場合、このノードは含まれません。

### 返値

新しい {{domxref("TreeWalker")}} オブジェクトです。

## 例

### whatToShow の使用

この例では、`whatToShow` を使用してテキストコンテンツを大文字に変換しています。なお、`#root` 要素の子ノードではないにもかかわらず、`#root` 要素の子孫のテキストノードも走査されます。

#### HTML

```html
<div id="root">
  これはテキストノードです。
  <span>そして、これは <code>span</code> 要素です。</span>
</div>
```

#### CSS

```css
span {
  background-color: aqua;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.currentNode;
  node.data = node.data.toUpperCase();
}
```

#### 結果

{{EmbedLiveSample("using_whattoshow", "100%", 100)}}

### filter の使用

この例では `filter` を使用してテキストコンテンツをエスケープします。テキストノードが `.escape` 要素の子孫であり、かつ `.no-escape` 要素の子孫でない場合、そのコンテンツは {{JSXref("encodeURI()")}} を使用してエスケープされます。

#### HTML

```html
<div>
  <div>
    This is not escaped. <span class="escape">But this is escaped.</span>
  </div>
  <div class="escape">This is escaped.</div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="escape">
  <div>
    This is escaped. <span class="no-escape">But this is not escaped.</span>
  </div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="no-escape">
  <div>This is not escaped.</div>
  <div class="escape">This is not escaped.</div>
</div>
```

#### CSS

```css hidden
div {
  margin: 0.25em 0;
  padding: 0.25em;
}
span {
  display: inline-block;
}
```

```css
.escape {
  border: dashed;
}
.no-escape {
  border: solid;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
);

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // Exclude whitespace-only text nodes
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}
```

#### 結果

{{EmbedLiveSample("using_filter", "100%", 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TreeWalker")}}: 関連インターフェイス
