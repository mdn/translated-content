---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
---

{{JSRef}}

**`Symbol.isConcatSpreadable`** は、{{jsxref("Array.prototype.concat()")}} メソッドを使用してオブジェクトを配列の要素に平坦化する場合の設定として使用されます。

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## 説明

`@@isConcatSpreadable` シンボル（`Symbol.isConcatSpreadable`）は直接、または継承されたプロパティとして定義でき、その値は boolean です。これは、配列や配列状のオブジェクトの振る舞いを制御します：

- 配列オブジェクトにとって、既定の動作は要素の展開（平坦化）です。`Symbol.isConcatSpreadable` はこれらの場合に平坦化を避けます。
- 配列状のオブジェクトにとって、既定の動作は展開や平坦化を行いません。`Symbol.isConcatSpreadable` はこれらの場合に平坦化を強制します。

{{js_property_attributes(0,0,0)}}

## 例

### 配列

既定で、{{jsxref("Array.prototype.concat()")}} は配列を次の結果のように展開（平坦化）します：

```js
let alpha = ['a', 'b', 'c'],
let numeric = [1, 2, 3]

let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)  // Result: ['a', 'b', 'c', 1, 2, 3]
```

`Symbol.isConcatSpreadable` を `false` に設定した場合、既定の動作を使用できなくなります：

```js
let alpha = ['a', 'b', 'c'],
let numeric = [1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false
let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)  // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### 配列状のオブジェクト

配列状のオブジェクトは、既定で展開しません。`Symbol.isConcatSpreadable` 平坦化した配列を取得するには、`true` に設定する必要があります：

```js
let x = [1, 2, 3];

let fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

> **メモ:** `length` プロパティは、追加するオブジェクトプロパティの数を制御するために使用されます。上記の例では、`length:2` は 2 つのプロパティを追加する必要があることを示しています。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.builtins.Symbol.isConcatSpreadable")}}

## 関連情報

- {{jsxref("Array.prototype.concat()")}}
