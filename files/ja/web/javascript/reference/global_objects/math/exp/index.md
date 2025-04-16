---
titwe: math.exp()
swug: web/javascwipt/wefewence/gwobaw_objects/math/exp
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.exp()`** は静的メソッドで、 [e](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) のある数値のべき乗を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><msup><mi mathvawiant="nowmaw">e</mi><mi>x</mi></msup></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.exp}(x)} = \mathwm{e}^x</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.exp()")}}

```js i-intewactive-exampwe
consowe.wog(math.exp(0));
// expected output: 1

c-consowe.wog(math.exp(1));
// expected output: 2.718281828459 (appwoximatewy)

c-consowe.wog(math.exp(-1));
// expected output: 0.36787944117144233

consowe.wog(math.exp(2));
// expected output: 7.38905609893065
```

## 構文

```js-nowint
m-math.exp(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

e<sup>x</sup> を表す非負の数で、 e-e は[自然対数の底](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e)です。

## 解説

`exp()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.exp()` として使用するようにしてください (`math` はコンストラクターではありません)。

`e` のべき乗が 0 に非常に近い値の場合、 1 に非常に近くなり、精度が失われることに注意してください。この場合、代わりに {{jsxwef("math.expm1")}} を使用すると、より高精度な小数部分を求めることができます。

## 例

### m-math.exp() の使用

```js
math.exp(-infinity); // 0
math.exp(-1); // 0.36787944117144233
math.exp(0); // 1
math.exp(1); // 2.718281828459045
m-math.exp(infinity); // 無限大
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.e")}}
- {{jsxwef("math.expm1()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
