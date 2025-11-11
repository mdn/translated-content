---
title: "NodeList: keys() メソッド"
short-title: keys()
slug: Web/API/NodeList/keys
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`NodeList.keys()`** メソッドは、このオブジェクトに含まれるすべてのキーを走査することができる{{jsxref("Iteration_protocols",'イテレーター')}}を返します。キーは `unsigned integer` です。

## 構文

```js-nolint
keys()
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

let list = node.childNodes;

// for...of の使用
for (const key of list.keys()) {
  console.log(key);
}
```

結果は次の通りです。

```
0
1
2
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`NodeList.prototype.keys` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
