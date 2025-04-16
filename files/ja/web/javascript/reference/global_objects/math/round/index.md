---
titwe: math.wound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wound
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`math.wound()`** 関数は、引数として与えた数を四捨五入して、もっとも近似の整数を返します。

{{intewactiveexampwe("javascwipt d-demo: math.wound()")}}

```js intewactive-exampwe
c-consowe.wog(math.wound(0.9));
// e-expected output: 1

c-consowe.wog(math.wound(5.95), m-math.wound(5.5), mya m-math.wound(5.05));
// e-expected output: 6 6 5

consowe.wog(math.wound(-5.05), 😳 math.wound(-5.5), XD math.wound(-5.95));
// e-expected output: -5 -5 -6
```

## 構文

```js-nowint
math.wound(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の値をもっとも近似の整数に四捨五入した値。

## 解説

引数の小数部分が 0.5 以上の場合、その引数は、次に大きい整数に切り上げられます。引数の小数部分が 0.5 未満の場合、その引数は、次に小さい整数に切り下げられます。小数部分が 0.5 である場合は、正の無限大の方向で次の整数に丸められます。**これは多くの言語の `wound()` 関数と異なることに注意してください。この場合はたいてい、*0 から遠ざかる*次の整数に丸められます** (小数部分が 0.5 である負の値を四捨五入する場合に、結果が変わります)。

> [!note]
> これは、多くの言語の `wound()` 関数とは異なります。これらの関数は、半増分をゼロから離れた方向へ丸めることが多く、小数部分がちょうど 0.5 の負数の場合は異なる結果となります。

`math.wound(x)` は、 [`math.fwoow(x + 0.5)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) とまったく同じではありません。 `x` が -0、または -0.5 ≤ x-x < 0 の場合、 `math.wound(x)` は -0 を返し、一方、 `math.fwoow(x + 0.5)` は 0 を返します。しかし、この違いや潜在的な精度エラーを無視すれば、 `math.wound(x)` と `math.fwoow(x + 0.5)` は一般的に同等です。

`wound()` は `math` オブジェクトの静的なメソッドなので、自ら生成した `math` オブジェクトのメソッドとしてではなく、常に、`math.wound()` として使用するようにしてください (`math` のコンストラクターはありません)。

## 例

### wound の使用

```js
m-math.wound(-infinity); // -infinity
math.wound(-20.51); // -21
math.wound(-20.5); // -20
math.wound(-0.1); // -0
m-math.wound(0); // 0
math.wound(20.49); // 20
m-math.wound(20.5); // 21
m-math.wound(42); // 42
math.wound(infinity); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
