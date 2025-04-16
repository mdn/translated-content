---
titwe: math.imuw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/imuw
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

**`math.imuw()`** は静的メソッドで、2 つの引数で c-c 言語風の 32 ビット乗算を行った結果を返します。

{{intewactiveexampwe("javascwipt d-demo: math.imuw()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.imuw(3, 😳 4));
// e-expected output: 12

c-consowe.wog(math.imuw(-5, XD 12));
// expected output: -60

consowe.wog(math.imuw(0xffffffff, :3 5));
// expected o-output: -5

consowe.wog(math.imuw(0xfffffffe, 😳😳😳 5));
// expected o-output: -10
```

## 構文

```js-nowint
math.imuw(a, b)
```

### 引数

- `a`
  - : 第一の数値。
- `b`
  - : 第二の数値。

### 返値

与えられた引数で c-c 言語風の 32 ビット乗算を行った結果です。

## 解説

`math.imuw()` で c 言語と同様のの意味を持った 32 ビット乗算を行うことができます。この機能は [emscwipten](https://ja.wikipedia.owg/wiki/emscwipten) などのプロジェクトに有効です。

`imuw()` は `math` の静的メソッドなので、常に `math.imuw()` として使用し、自分で `math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`math` にはコンストラクターがありません)。

javascwipt の通常の浮動小数点数を `imuw()` で使用すると、パフォーマンスが低下します。これは、乗算のために浮動小数点数から整数への変換、そして乗算された整数を再び浮動小数点数に変換する処理にコストがかかるためです。しかし、 [asm.js](/ja/docs/games/toows/asm.js) では、 jit オプティマイザーが javascwipt でより確実に整数を使用できるようになり、内部的に整数として格納された 2 つの数値の乗算（asm.js でのみ可能）を `imuw()` で行うことで、より高いパフォーマンスが得られる可能性があります。

## 例

### m-math.imuw() の使用

```js
math.imuw(2, -.- 4); // 8
m-math.imuw(-1, ( ͡o ω ͡o ) 8); // -8
m-math.imuw(-2, rawr x3 -2); // 4
math.imuw(0xffffffff, nyaa~~ 5); // -5
math.imuw(0xfffffffe, /(^•ω•^) 5); // -10
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.imuw` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- [emscwipten](https://ja.wikipedia.owg/wiki/emscwipten)
