---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{JSRef}}

**`Math.clz32()`** は静的メソッドで、引数として与えられた数値の 32 ビットバイナリー表現での先頭の 0 の個数を返します。

{{EmbedInteractiveExample("pages/js/math-clz32.html")}}

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

この関数は [Emscripten](https://emscripten.org/) のような JS にコンパイルするシステムに対して特に役に立ちます。

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

### 先頭の 1 を数える

現在のところ、 "Count Leading Ones" を表す `Math.clon` はありません ("clo" ではなく "clon" と名付けられています、なぜなら "clo" と "clz" は特に英語を話さない人にとっては似すぎているからです)。しかし、 `clon` 関数は、数値のビットを逆数にして、その結果を `Math.clz32` に渡すことで簡単に作ることができます。 1 の逆数は 0 であり、その逆も同様です。このように、ビットを逆数にすると、測定された 0 の量が (`Math.clz32` からの) 逆数になり、 `Math.clz32` はゼロの数を数えるのではなく、1 の数を数えるようになります。

以下の 32 ビットワード値を想定してみます。

```js
const a = 32776; // 00000000000000001000000000001000 （先頭のゼロは 16 個）
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 （32776 の逆、先頭のゼロは 0 個）
Math.clz32(b); // 0 （これは、 a にある先頭の 1 の数に等しい）
```

この論理を使用すると、 `clon` 関数は次のように作成することができます。

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

さらに、このテクニックを拡張して、下記のようなジャンプのない "Count Trailing Zeros" 関数を作成することもできます。 `ctrz` 関数は、 2 の補数を持つ整数のビット単位の AND 演算を行います。 2 の補数にすることで、すべての末尾のゼロが 1 に変換され、 1 を加算すると、最初の 0 （元々は 1）に達するまで引き継がれます。それより上位のビットはすべてそのまま維持され、元の整数のビットの逆数となります。したがって、元の整数とビット単位の論理積を計算すると、上位のビットはすべて 0 となり、 `clz` でカウントできます。末尾のゼロの数に最初の 1 ビット、 `clz` でカウントされた上位ビットを足した合計は 32 です。

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

  // 先頭のゼロを数える
  function ctrz(integer) {
    integer = integer | 0; // 整数に変換
    if ((integer | 0) == 0) {
      // このステップを飛ばすと -1 を返すことになる
      return 32;
    }
    // メモ: asm.js には &= のような複合代入演算子がない
    integer = integer & -integer; // equivalent to `int = int & (~int + 1)`
    return (31 - clz(integer)) | 0;
  }

  // 最後の 1 を数える
  function ctron(integer) {
    integer = integer | 0; // 整数に変換
    return ctrz(~integer) | 0;
  }

  // asm.js はプレーンオブジェクトを要求する
  return { ctrz: ctrz, ctron: ctron };
})(window, null, null);

const { ctrz, ctron } = countTrailsMethods;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.clz32` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
