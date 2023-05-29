---
title: NodeList.item
slug: Web/API/NodeList/item
---

{{ApiRef}}

## 概要

[`NodeList`](/ja/docs/DOM/NodeList) 中の、引数に指定するインデックスの位置にあるノードを取得します。

## 構文

```
nodeItem = nodeList.item(index)
```

- `nodeList` : `NodeList` 。これは [childNodes](/ja/docs/DOM/Node.childNodes) などの DOM プロパティやメソッドで取得可能。
- `index` : 取得するノードのインデックス。最初のノードの _index_ は 0 となる。
- `nodeItem` : `nodeList` 中の、`item` メソッドに指定した _index_ の位置にあるノード。

JavaScript にはノードリスト中のアイテムの取得に以下のような構文を用いる事も可能です。

```
nodeItem = nodeList[index]
```

## 例

```js
var tables = document.getElementsByTagName("table"); // DOM 中に含まれるすべての table 要素のノードリストを取得
var secondTable = tables.item(1); // DOM 中の 2 番目の table 要素


// tables[1] でも取得可能。即ちアイテムが存在した場合、以下は true となる
alert( tables.item(1) === tables[1] );
```

## 注記

指定した _index_ が範囲外の場合、このメソッドは例外をスローするのではなく、`null` を返します。

`item()` メソッドは {{domxref("Element")}} や {{domxref("Node")}} のメソッドではなく、 {{domxref("NodeList")}} のメソッドです。

## 仕様書

- [DOM Level 1 Core: NodeList.item()](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-item)
- [DOM Level 2 Core: NodeList.item()](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-844377136)
