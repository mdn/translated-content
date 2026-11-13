---
title: Math.clz32()
short-title: clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Math.clz32()`** は静的メソッドで、引数として与えられた数値の 32 ビットバイナリー表現での先頭の 0 の個数を返します。

{{InteractiveExample("JavaScript デモ: Math.clz32()")}}

```js interactive-example
// 00000000000000000000000000000001
console.log(Math.clz32(1));
// 予想される結果: 31

// 00000000000000000000000000000100
console.log(Math.clz32(4));
// 予想される結果: 29

// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// 予想される結果: 22
```

## 構文

```js-nolint
Math.clz32(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の 32 ビットバイナリー表現での先頭の 0 の個数。

## 解説

`clz32` は **C**ount**L**eading**Z**eros**32** の省略形です。

`x` が数値でない場合、まず数値に変換され、32 ビット符号なし整数値に変換されます。

変換された 32 ビット符号なし整数が `0` の場合、 `32` が返されます。これは、すべてのビットが `0` であるためです。最上位ビットが `1` の場合（すなわち、数値が 2<sup>31</sup> 以上の数値である場合）、 `0` が返されます。

この関数は [Emscripten](https://emscripten.org/) のような、JS にコンパイルするシステムで特に役立ちます。

## 例

### Math.clz32() の使用

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

const stuff = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  false,
  null,
  undefined,
  "foo",
  {},
  [],
];
stuff.every((n) => Math.clz32(n) === 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

### 先頭の 1 を数える関数などの実装

現在のところ、"Count Leading Ones" を表す `Math.clon` はありません（"clo" ではなく "clon" という名前なのは、特に英語を話さない人にとって "clo" と "clz" が似すぎているためです）。ただし、数値のビットを反転して、その結果を `Math.clz32` に渡せば、`clon` 関数を簡単に作成できます。ビット反転では 1 が 0 に、0 が 1 になります。そのため、ビットを反転すると、`Math.clz32` が数える 0 の数が、元の数値の先頭にある 1 の数になります。

以下の 32 ビットワード値を想定してみます。

```js
const a = 32776; // 00000000000000001000000000001000 (先頭のゼロは 16 個)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 のビット反転、先頭のゼロは 0 個)
Math.clz32(b); // 0 (これは a にある先頭の 1 の数に等しい)
```

この論理を使用すると、 `clon` 関数は次のように作成することができます。

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

さらに、この手法を拡張すると、以下のような分岐を使わない "Count Trailing Zeros" 関数も作成できます。`ctrz` 関数は、整数とその 2 の補数とのビット単位 AND を計算します。これにより、最下位の 1 ビットだけが残ります。そのビットより下位のビットは 0 なので、`31 - clz(integer)` によって末尾の 0 の数を求められます。

```js
function ctrz(integer) {
  integer >>>= 0; // Uint32 へ変換
  if (integer === 0) {
    // このステップを飛ばすと -1 を返すことになる
    return 32;
  }
  integer &= -integer; // `int = int & (~int + 1)` と同等
  return 31 - clz(integer);
}
```

次に、 "Count Trailing Ones" 関数を次のように定義します。

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

これらのヘルパー関数は、パフォーマンスの向上を目的として、 [asm.js](/ja/docs/Games/Tools/asm.js) モジュールにすることができます。

```js
const countTrailsMethods = (function (stdlib, foreign, heap) {
  "use asm";
  const clz = stdlib.Math.clz32;

  // 末尾のゼロを数える
  function ctrz(integer) {
    integer = integer | 0; // 整数に変換
    if ((integer | 0) == 0) {
      // このステップを飛ばすと -1 を返すことになる
      return 32;
    }
    // メモ: asm.js には &= のような複合代入演算子がない
    integer = integer & -integer; // `int = int & (~int + 1)` と同等
    return (31 - clz(integer)) | 0;
  }

  // 末尾の 1 を数える
  function ctron(integer) {
    integer = integer | 0; // 整数に変換
    return ctrz(~integer) | 0;
  }

  // asm.js はプレーンオブジェクトを必要とする
  return { ctrz: ctrz, ctron: ctron };
})(window, null, null);

const { ctrz, ctron } = countTrailsMethods;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.clz32` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/math)
- [es-shims による `Math.clz32` のポリフィル](https://www.npmjs.com/package/math.clz32)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
