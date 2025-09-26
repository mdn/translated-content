---
title: "XPathResult: resultType プロパティ"
short-title: resultType
slug: Web/API/XPathResult/resultType
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`resultType`** は {{domxref("XPathResult")}} インターフェイスの読み取り専用プロパティで、定義した結果の型を型定数で表します。

{{AvailableInWorkers}}

## 値

結果の型を表す整数で、型定数で定義されたものです。

## 定数

<table class="no-markdown">
  <thead>
    <tr>
      <th>結果の定義済みの型定数</th>
      <th>値</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        式を評価した結果として自然に得られる型を格納した結果集合です。結果がノード集合の場合、 <code>UNORDERED_NODE_ITERATOR_TYPE</code> が常に結果として得られる型であることに注意してください。
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        単一の数値を格納した結果です。この例は、例えば <code>count()</code> 関数を使用した XPath 式の中で有益です。
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td><code>2</code></td>
      <td>単一の文字列を格納した結果です。</td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td><code>3</code></td>
      <td>
        1 つの論理値を格納した結果です。これは例えば、<code>not()</code>関数を使用した XPath 式の中で有益なものです。
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        式に一致するすべてのノードを格納した結果ノード集合です。ノードは必ずしも文書内の順序とは限りません。
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        式に一致するすべてのノードを格納した結果ノード集合です。結果セットのノードは、文書内のノードと同じ順序で現れます。
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        式に一致するすべてのノードのスナップショットを含む結果ノード集合です。ノードは必ずしも文書内の順序とは限りません。
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        式に一致するすべてのノードのスナップショットを含む結果ノード集合です。結果セットのノードは、文書内のノードと同じ順序で現れます。
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        式に一致する単一のノードを格納した結果ノード集合です。このノードは、必ずしも文書内の式に一致する最初のノードであるとは限りません。
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        式に一致する文書内の最初のノードを格納した結果ノード集合です。
      </td>
    </tr>
  </tbody>
</table>

## 例

次の例では `resultType` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<div>Is XPath result a node set: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
document.querySelector("output").textContent =
  result.resultType >= XPathResult.UNORDERED_NODE_ITERATOR_TYPE &&
  result.resultType <= XPathResult.FIRST_ORDERED_NODE_TYPE;
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
