---
title: "NodeList: entries() メソッド"
short-title: entries()
slug: Web/API/NodeList/entries
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`NodeList.entries()`** メソッドは、オブジェクト内にあるすべてのキーと値のペアを走査することができる{{jsxref("Iteration_protocols",'イテレーター')}}を返します。値は {{domxref("Node")}} オブジェクトです。

## 構文

```js-nolint
entries()
```

## 返値

{{jsxref("Iteration_protocols","イテレーター")}}を返します。

## 例

```js
const node = document.createElement("div");
const kid1 = document.createElement("p");
const kid2 = document.createTextNode("hey");
const kid3 = document.createElement("span");
node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

const list = node.childNodes;

// for...of を使用
for (const entry of list.entries()) {
  console.log(entry);
}
```

結果は次のようになります。

```plain
Array [ 0, <p> ]
Array [ 1, #text "hey" ]
Array [ 2, <span> ]
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`NodeList.prototype.entries` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
