---
title: "TypeError: invalid arguments"
slug: orphaned/Web/JavaScript/Reference/Errors/Typed_array_invalid_arguments
---

{{jsSidebar("Errors")}}

## メッセージ

```
TypeError: invalid arguments (Firefox)
```

## エラーの種類

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

新しい typed array を生成するために、[Typed array](/ja/docs/Web/JavaScript/Typed_arrays) コンストラクターに以下のいずれかの値を渡す必要があります。

- 長さ
- ほかの typed array
- 配列状オブジェクト
- 反復可能オブジェクト
- {{jsxref("ArrayBuffer")}} オブジェクト

そのほかのコンストラクター引数では、有効な typed array を生成できません。

## 例

Typed array、たとえば {{jsxref("Uint8Array")}} は文字列から構成できません。事実、文字列はまったく typed array にすることはできません。

```js example-bad
var ta = new Uint8Array("nope");
// TypeError: invalid arguments
```

有効な {{jsxref("Uint8Array")}} を生成するほかの方法:

```js example-good
// From a length
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Uint8Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var uint8 = new Uint8Array(iterable);
// Uint8Array[1, 2, 3]
```

## 関連項目

- [Typed array](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
