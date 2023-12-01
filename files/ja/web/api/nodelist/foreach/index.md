---
title: "NodeList: forEach() メソッド"
short-title: forEach()
slug: Web/API/NodeList/forEach
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`forEach()`** は {{domxref("NodeList")}} インターフェイスのメソッドで、引数に渡されたコールバックを、リストのそれぞれの値のペアに対して 1 度ずつ挿入順に呼び出します。

## 構文

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### 引数

- `callback`

  - : `someNodeList` の各要素に対して実行する関数です。3 つの引数を受け付けます。

    - `currentValue`
      - : 現在 `someNodeList` で処理されている要素です。
    - `currentIndex` {{Optional_inline}}
      - : 現在 `someNodeList` で処理されている `currentValue` のインデックスです。
    - `listObj` {{Optional_inline}}
      - : `forEach()` を適用しようとしている `someNodeList` です。

- `thisArg` {{Optional_inline}}
  - : `callback` 内で [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) として使う値です。

### 返値

{{jsxref('undefined')}}.

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

list.forEach(function (currentValue, currentIndex, listObj) {
  console.log(`${currentValue}, ${currentIndex}, ${this}`);
}, "myThisArg");
```

上記のコードの結果は以下のようになります。

```plain
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`NodeList.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
