---
title: ArrayBuffer() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
---

{{JSRef}}

**`ArrayBuffer()`** コンストラクターは {{jsxref("ArrayBuffer")}} オブジェクトを生成するために使用されます。

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html","shorter")}}

## 構文

```
new ArrayBuffer(length)
```

### 引数

- `length`
  - : 作成する配列バッファーのサイズをバイト単位で指定します。

### 返値

指定されたサイズの新しい `ArrayBuffer` オブジェクト。その内容は 0 に初期化されます。

### 例外

{{jsxref("RangeError")}}: `length` が {{jsxref("Number.MAX_SAFE_INTEGER")}} よりも大きい (>= 2 \*\* 53) か、負の値であった場合。

## 互換性の注意

ECMAScript 2015 から、`ArrayBuffer` のコンストラクターは構築に {{jsxref("Operators/new", "new")}} 演算子が必要になりました。 `new` を指定せずに関数として `ArrayBuffer` コンストラクターを呼び出すと、 {{jsxref("TypeError")}} が発生するようになりました。

```js example-bad
var dv = ArrayBuffer(10);
// TypeError: calling a builtin ArrayBuffer constructor
// without new is forbidden
```

```js example-good
var dv = new ArrayBuffer(10);
```

## 例

### ArrayBuffer の作成

この例では、バッファーを参照する {{jsxref("Global_Objects/Int32Array", "Int32Array")}} ビューを持つ 8 バイトのバッファーを作成しています。

```js
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-arraybuffer-constructor', 'ArrayBuffer')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.ArrayBuffer.ArrayBuffer")}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
