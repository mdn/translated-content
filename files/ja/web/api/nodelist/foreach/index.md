---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
---

{{APIRef("DOM")}}

{{domxref("NodeList")}} インターフェースにおける **`forEach()`** メソッドは、引数に渡されたコールバックをリストの各値のペアに対して 1 度ずつ挿入順で呼び出します。

## 構文

```
someNodeList.forEach(callback[, thisArg]);
```

### パラメーター

- `callback`

  - : `someNodeList` の各要素に対して実行する関数で、3 つの引数を受け付けます。

    - `currentValue`
      - : 現在 `someNodeList` で処理されている要素です。
    - `currentIndex` {{Optional_inline}}
      - : 現在 `someNodeList`\_ \_で処理されている `currentValue` の添字です。
    - `listObj` {{Optional_inline}}
      - : `forEach()` を適用しようとしている `someNodeList`\_ \_です。

- `thisArg` {{Optional_inline}}
  - : `callback` 内で [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) として使う値です。

### 戻り値

{{jsxref('undefined')}}.

## 例

```js
let node = document.createElement("div");
let kid1 = document.createElement("p");
let kid2 = document.createTextNode("hey");
let kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

let list = node.childNodes;

list.forEach(
  function(currentValue, currentIndex, listObj) {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'myThisArg'
);
```

上記のコードの結果は以下のようになります。

```
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## ポリフィル

以下の {{Glossary("Polyfill","polyfill")}} を追加することで、 [ES5](https://caniuse.com/#search=es5) をサポートする全てのブラウザで使用することができるようになります。

```js
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
```

または

```js
if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = Array.prototype.forEach;
}
```

多くのブラウザでは、実は上記のような方法で `NodeList.prototype.forEach()` を実装しています。(例えば、Chrome)

## 仕様

| 仕様書                                                           | 策定状況                 | コメント                            |
| ---------------------------------------------------------------- | ------------------------ | ----------------------------------- |
| {{SpecName("WebIDL", "#es-forEach", "forEach")}} | {{Spec2("WebIDL")}} | `iterable` 宣言で`forEach` を定義。 |

## ブラウザーの互換性

{{Compat("api.NodeList.forEach")}}

## 関連情報

- {{domxref("Node")}}
- {{domxref("NodeList")}}
