---
title: XPathResult
slug: Web/API/XPathResult
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef}}

**`XPathResult`** インターフェイスは、指定されたノードのコンテキスト内で XPath 式を評価して発生した結果を表します。

XPath 式はさまざまな結果型を発生させる可能性があるため、このインターフェイスを使用すると、結果の型と値を決定して処理することが可能になります。

## インスタンスプロパティ

- {{domxref("XPathResult.booleanValue")}} {{ReadOnlyInline}}
  - : 論理値で、 `resultType` が `BOOLEAN_TYPE` の場合に、結果の値を表します。
- {{domxref("XPathResult.invalidIteratorState")}} {{ReadOnlyInline}}
  - : イテレーターが無効になったことを示します。 `resultType` が `UNORDERED_NODE_ITERATOR_TYPE` または `ORDERED_NODE_ITERATOR_TYPE` で、この結果を返してから文書が変更された場合は `true` となります。
- {{domxref("XPathResult.numberValue")}} {{ReadOnlyInline}}
  - : 数値で、 `resultType` が `NUMBER_TYPE` の場合に、結果の値を表します。
- {{domxref("XPathResult.resultType")}} {{ReadOnlyInline}}
  - : 型定数を定義した、結果の型を表す数値のコードです。
- {{domxref("XPathResult.singleNodeValue")}} {{ReadOnlyInline}}
  - : 単一ノードの結果の値を表す {{domxref("Node")}} です。 `null` になることもあります。
- {{domxref("XPathResult.snapshotLength")}} {{ReadOnlyInline}}
  - : 結果スナップショットのノード数です。
- {{domxref("XPathResult.stringValue")}} {{ReadOnlyInline}}
  - : 文字列で、 `resultType` が `STRING_TYPE` の場合に、結果の値を表します。

## インスタンスメソッド

- {{domxref("XPathResult.iterateNext()")}}
  - : 結果がノード集合の場合、このメソッドはそれを反復処理し、次のノードを返すか、ノードがない場合は `null` を返します。
- {{domxref("XPathResult.snapshotItem()")}}
  - : スナップショット集合のアイテムを返すか、インデックスがノードの範囲にない場合は `null` を返します。イテレーターの結果とは異なり、スナップショットは無効にはなりませんが、変化した場合には現在の文書に対応しなくなる可能性があります。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.evaluate()")}}
- {{domxref("XPathExpression")}}
- [Dottoro Web Reference - XPathResult object](http://help.dottoro.com/ljagksjc.php)
