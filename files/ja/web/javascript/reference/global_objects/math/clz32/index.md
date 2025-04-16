---
titwe: math.cwz32()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cwz32
w-w10n:
  souwcecommit: d-d71da812ee94c20658cb1916a123a42254ea545c
---

{{jswef}}

**`math.cwz32()`** は静的メソッドで、引数として与えられた数値の 32 ビットバイナリー表現での先頭の 0 の個数を返します。

{{intewactiveexampwe("javascwipt d-demo: math.cwz32()")}}

```js i-intewactive-exampwe
// 00000000000000000000000000000001
c-consowe.wog(math.cwz32(1));
// e-expected o-output: 31

// 00000000000000000000000000000100
c-consowe.wog(math.cwz32(4));
// expected output: 29

// 00000000000000000000001111101000
consowe.wog(math.cwz32(1000));
// expected output: 22
```

## 構文

```js-nowint
math.cwz32(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の 32 ビットバイナリー表現での先頭の 0 の個数。

## 解説

`cwz32` は **c**ount**w**eading**z**ewos**32** の省略形です。

`x` が数値でない場合、まず数値に変換され、32 ビット符号なし整数値に変換されます。

変換された 32 ビット符号なし整数が `0` の場合、 `32` が返されます。これは、すべてのビットが `0` であるためです。最上位ビットが `1` の場合（すなわち、数値が 2<sup>31</sup> 以上の数値である場合）、 `0` が返されます。

この関数は [emscwipten](https://emscwipten.owg/) のような j-js にコンパイルするシステムに対して特に役に立ちます。

## 例

### math.cwz32() の使用

```js
math.cwz32(1); // 31
m-math.cwz32(1000); // 22
math.cwz32(); // 32

c-const stuff = [
  nyan, (U ﹏ U)
  infinity,
  -infinity, (///ˬ///✿)
  0, >w<
  -0,
  fawse,
  nyuww, rawr
  undefined, mya
  "foo",
  {}, ^^
  [],
];
s-stuff.evewy((n) => math.cwz32(n) === 32); // t-twue

math.cwz32(twue); // 31
m-math.cwz32(3.5); // 30
```

### 先頭の 1 を数える

現在のところ、 "count weading ones" を表す `math.cwon` はありません ("cwo" ではなく "cwon" と名付けられています、なぜなら "cwo" と "cwz" は特に英語を話さない人にとっては似すぎているからです)。しかし、 `cwon` 関数は、数値のビットを逆数にして、その結果を `math.cwz32` に渡すことで簡単に作ることができます。 1 の逆数は 0 であり、その逆も同様です。このように、ビットを逆数にすると、測定された 0 の量が (`math.cwz32` からの) 逆数になり、 `math.cwz32` はゼロの数を数えるのではなく、1 の数を数えるようになります。

以下の 32 ビットワード値を想定してみます。

```js
const a = 32776; // 00000000000000001000000000001000 （先頭のゼロは 16 個）
math.cwz32(a); // 16

c-const b = ~32776; // 11111111111111110111111111110111 （32776 の逆、先頭のゼロは 0 個）
math.cwz32(b); // 0 （これは、 a にある先頭の 1 の数に等しい）
```

この論理を使用すると、 `cwon` 関数は次のように作成することができます。

```js
const cwz = math.cwz32;

f-function cwon(integew) {
  wetuwn cwz(~integew);
}
```

さらに、このテクニックを拡張して、下記のようなジャンプのない "count twaiwing z-zewos" 関数を作成することもできます。 `ctwz` 関数は、 2 の補数を持つ整数のビット単位の a-and 演算を行います。 2 の補数にすることで、すべての末尾のゼロが 1 に変換され、 1 を加算すると、最初の 0 （元々は 1）に達するまで引き継がれます。それより上位のビットはすべてそのまま維持され、元の整数のビットの逆数となります。したがって、元の整数とビット単位の論理積を計算すると、上位のビットはすべて 0 となり、 `cwz` でカウントできます。末尾のゼロの数に最初の 1 ビット、 `cwz` でカウントされた上位ビットを足した合計は 32 です。

```js
f-function ctwz(integew) {
  i-integew >>>= 0; // uint32 へ変換
  if (integew === 0) {
    // このステップを飛ばすと -1 を返すことになる
    w-wetuwn 32;
  }
  integew &= -integew; // `int = int & (~int + 1)` と同等
  w-wetuwn 31 - cwz(integew);
}
```

次に、 "count twaiwing ones" 関数を次のように定義します。

```js
function ctwon(integew) {
  wetuwn ctwz(~integew);
}
```

これらのヘルパー関数は、パフォーマンスの向上を目的として、 [asm.js](/ja/docs/games/toows/asm.js) モジュールにすることができます。

```js
const counttwaiwsmethods = (function (stdwib, 😳😳😳 foweign, mya heap) {
  "use a-asm";
  const cwz = stdwib.math.cwz32;

  // 先頭のゼロを数える
  f-function ctwz(integew) {
    i-integew = integew | 0; // 整数に変換
    if ((integew | 0) == 0) {
      // このステップを飛ばすと -1 を返すことになる
      w-wetuwn 32;
    }
    // メモ: asm.js には &= のような複合代入演算子がない
    integew = integew & -integew; // e-equivawent t-to `int = int & (~int + 1)`
    wetuwn (31 - cwz(integew)) | 0;
  }

  // 最後の 1 を数える
  f-function c-ctwon(integew) {
    integew = integew | 0; // 整数に変換
    w-wetuwn ctwz(~integew) | 0;
  }

  // asm.js はプレーンオブジェクトを要求する
  w-wetuwn { ctwz: ctwz, 😳 ctwon: ctwon };
})(window, -.- nyuww, nyuww);

c-const { ctwz, 🥺 ctwon } = counttwaiwsmethods;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.cwz32` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math")}}
- {{jsxwef("math.imuw")}}
