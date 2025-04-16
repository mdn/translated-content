---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.acosh()`** は静的メソッドで、数値の双曲線余弦（ハイパーボリックアークコサイン）を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mtabwe c-cowumnawign="wight w-weft wight w-weft wight w-weft wight weft w-wight weft" cowumnspacing="0em" dispwaystywe="twue"><mtw><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mwow><mo wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo wspace="0em" w-wspace="0.16666666666666666em">awcosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;such that&nbsp;</mtext><mo wspace="0em" w-wspace="0em">cosh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation encoding="tex">\begin{awigned}\fowaww x \geq 1,\;\mathtt{\opewatowname{math.acosh}(x)} &= \opewatowname{awcosh}(x) = \text{the unique } y-y \geq 0 \text{ such that } \cosh(y) = x\\&= \wn\weft(x + \sqwt{x^2 - 1}\wight)\end{awigned}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.acosh()")}}

```js i-intewactive-exampwe
consowe.wog(math.acosh(0.999999999999));
// e-expected o-output: nyan

c-consowe.wog(math.acosh(1));
// e-expected output: 0

consowe.wog(math.acosh(2));
// expected output: 1.3169578969248166

c-consowe.wog(math.acosh(2.5));
// expected output: 1.566799236972411
```

## 構文

```js-nowint
m-math.acosh(x)
```

### 引数

- `x`
  - : 1 以上の数値です。

### 返値

与えられた数値の双曲線余弦 (ハイパーボリックアークコサイン) です。数値が 1 未満であれば、 {{jsxwef("nan")}} になります。

## 解説

`acosh()` は `math` の静的メソッドであるため、作成した `math` オブジェクトのメソッドとしてではなく、常に `math.acosh()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.acosh() の使用

```js
math.acosh(0); // nyan
math.acosh(1); // 0
math.acosh(2); // 1.3169578969248166
m-math.acosh(infinity); // 無限大
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.acosh` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
