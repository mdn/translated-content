---
title: "NodeList: values() メソッド"
short-title: values()
slug: Web/API/NodeList/values
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`NodeList.values()`** メソッドは、このオブジェクトに含まれるすべての値を走査することができる{{jsxref("Iteration_protocols",'イテレーター')}}を返します。値は {{domxref("Node")}} です。

## 構文

```js-nolint
values()
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

// for...of の使用
for (const value of list.values()) {
  console.log(value);
}
```

結果は次の通りです。

```plain
<p>
#text "hey"
<span>
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `NodeList.prototype.values` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
