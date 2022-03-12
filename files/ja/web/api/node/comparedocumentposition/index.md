---
title: Node.compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
tags:
  - メソッド
  - リファレンス
browser-compat: api.Node.compareDocumentPosition
translation_of: Web/API/Node/compareDocumentPosition
---
{{APIRef("DOM")}}

**`compareDocumentPosition()`** は {{domxref("Node")}} インターフェイスのメソッドで、引数のノードの位置を、呼び出されたノードからの相対位置で報告します。

## 構文

```js
compareDocumentPosition(otherNode);
```

### 引数

- `otherNode`
  - : {{domxref("Node")}} で、このノードとの相対位置を報告するノードを指定します。

### 返値

整数値で、 `otherNode` の `node` から見た相対位置を、以下の {{domxref("Node")}} の定数プロパティを組み合わせた[ビットマスク](<https://ja.wikipedia.org/wiki/マスク_(情報工学)>)で表します。

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : 両方のノードが、異なる文書、または同じ文書の異なるツリーにあります。
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` はこのノードより、両者を含むツリーの[前順深さ優先走査](https://ja.wikipedia.org/wiki/木構造_(データ構造)#深さ優先探索)で前にある（祖先ノード、前にある兄弟ノード、前にある兄弟ノードの子孫ノード、祖先ノードの前にある兄弟ノードなど）か、（接続されていないのであれば）任意だが一貫した順序で、そのノードよりも前に位置します。
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` はこのノードより、両者を含むツリーの[前順深さ優先走査](https://ja.wikipedia.org/wiki/木構造_(データ構造)#深さ優先探索)で後にある（子孫ノード、後にある兄弟ノード、後にある兄弟ノードの子孫ノード、祖先ノードの後にある兄弟ノードなど）か、（接続されていないのであれば）任意だが一貫した順序で、そのノードよりも後に位置します。
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` はこのノードの祖先ノードです。
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` はこのノードの子孫ノードです。
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : その結果は、任意や実装固有の動作に依存し、移植性は保証されません。

複数の条件に適合する場合、複数のビットが設定されることがあります。例えば、 `otherNode` が文書中でより先にあり、**_かつ_** `compareDocumentPosition()` が呼び出されたノードを含んでいれば、 `DOCUMENT_POSITION_CONTAINS` と `DOCUMENT_POSITION_PRECEDING` の両ビットが設定され、 `10` (`0x0A`) という値になります。

## 例

```js
const head = document.head;
const body = document.body;

if (head.compareDocumentPosition(body) & Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log('正しい形式の文書です');
} else {
  console.error('<head> が <body> の前にありません');
}
```

> **Note:** `compareDocumentPosition()` の返値はビットマスクですので、意味のある結果を得るには[ビット AND 演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)を使用する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Node.contains()")}}
