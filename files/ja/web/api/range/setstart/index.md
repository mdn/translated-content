---
title: "Range: setStart() メソッド"
short-title: setStart()
slug: Web/API/Range/setStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setStart()`** メソッドは、 {{ domxref("Range") }} の開始位置を設定します。

`startNode` の {{domxref("Node")}} の型が {{domxref("Text")}}, {{domxref("Comment")}}, {{domxref("CDataSection")}} のいずれかであるとき、 `startOffset` は `startNode` の開始位置からの文字数です。その他の `Node` 型の場合、 `startOffset` は `startNode` からの子ノード数です。

始点を終点より下（文書の下層側）に設定すると、始点と終点の両方が指定された開始位置に設定され、折りたたまれた範囲となります。

## 構文

```js-nolint
setStart(startNode, startOffset)
```

### 引数

- `startNode`
  - : {{ domxref("Range") }} を開始する {{ domxref("Node") }}。
- `startOffset`
  - : `startNode` の始点からの {{ domxref("Range") }} のオフセットを表す 0 以上の整数。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 要素の一部を強調表示

この例では、 `Range.setStart()` と {{domxref("Range.setEnd()")}} メソッドを使用して、住所の一部を範囲に追加しています。そして、選択された範囲は {{domxref("Range.surroundContents()")}} を使用して強調表示します。

住所は、 5 つのテキストノードと、 4 つの {{htmlElement("br")}} 要素の合計 9 つのノードを含んでいます。

#### HTML

```html
<p id="address">
  Wyatt Earp<br />
  101 E. Main St.<br />
  Dodge City, KS<br />
  67801<br />
  USA
</p>

<hr />
<p>Nodes in the original address:</p>
<ol id="log"></ol>
```

#### JavaScript

```js
const address = document.getElementById("address");
const log = document.getElementById("log");

// Log info
address.childNodes.forEach((node) => {
  const li = document.createElement("li");
  li.textContent = `${node.nodeName}, ${node.nodeValue}`;
  log.appendChild(li);
});

// Highlight the street and city
const startOffset = 2; // Start at third node: 101 E. Main St.
const endOffset = 5; // End at fifth node: Dodge City, KS
const range = document.createRange();
range.setStart(address, startOffset);
range.setEnd(address, endOffset);

const mark = document.createElement("mark");
range.surroundContents(mark);
```

#### 結果

{{EmbedLiveSample("Highlight_part_of_an_element", 700, 400)}}

### テキストノードから文字を取得する

この例では、`Range.setStart()` と {{domxref("Range.setEnd()")}} メソッドを使用して、範囲の内容を定義しています。結果として得られる範囲は、テキストノード内の 1 文字目から 5 文字目を含んでいます。

#### HTML

```html
<p id="content">0123456789</p>
<p id="log"></p>
```

#### JavaScript

```js
const element = document.getElementById("content");
const textNode = element.childNodes[0];
const range = document.createRange();
range.setStart(textNode, 0); // Start at first character
range.setEnd(textNode, 5); // End at fifth character
document.getElementById("log").textContent = range;
```

#### 結果

{{EmbedLiveSample("Get_characters_from_a_text_node", 700, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
