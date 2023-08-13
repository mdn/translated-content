---
title: "NodeList: item() メソッド"
short-title: item()
slug: Web/API/NodeList/item
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

[`NodeList`](/ja/docs/Web/API/NodeList) からインデックスでノードを返します。このメソッドは引数を提供する限り例外を発生しません。インデックスが範囲外の場合は `null` という値が返され、引数が指定されなかった場合は {{jsxref("TypeError")}} が発生します。

## 構文

```js-nolint
item(index)
```

JavaScript では、NodeList からインデックスでアイテムを取得するのに配列風の括弧構文も提供しています。

```js
nodeItem = nodeList[index];
```

### 引数

- `index` はノードを読み取るインデックスです。インデックスはゼロ基点です。

### 返値

`item` メソッドが返す `nodeList` 内の `index` 番目のノード。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が提供されなかった場合に発生します。

## 例

```js
const tables = document.getElementsByTagName("table");
const firstTable = tables.item(1); // または tables[1] - DOM 内の 2 番目の表を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
