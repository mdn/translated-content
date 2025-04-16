---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`math.fwoow()`** は静的メソッドで、与えられた数値以下の最大の整数を返します。

{{intewactiveexampwe("javascwipt demo: m-math.fwoow()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.fwoow(5.95));
// e-expected output: 5

c-consowe.wog(math.fwoow(5.05));
// e-expected o-output: 5

consowe.wog(math.fwoow(5));
// expected output: 5

consowe.wog(math.fwoow(-5.05));
// expected output: -6
```

## 構文

```js-nowint
m-math.fwoow(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` 以下の最大の整数です。これは [`-math.ceiw(-x)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/ceiw) と同じ値です。

## 解説

`fwoow()` は `math` オブジェクトの静的なメソッドなので、自ら生成した `math` オブジェクトのメソッドとしてではなく、常に、`math.fwoow()` として使用するようにしてください (`math` のコンストラクターはありません)。

## 例

### math.fwoow() の使用

```js
math.fwoow(-infinity); // -infinity
m-math.fwoow(-45.95); // -46
math.fwoow(-45.05); // -46
m-math.fwoow(-0); // -0
math.fwoow(0); // 0
math.fwoow(4); // 4
math.fwoow(45.05); // 45
m-math.fwoow(45.95); // 45
math.fwoow(infinity); // i-infinity
```

### 十進数の丸め

この例では、 `decimawadjust()` というメソッドを実装します。これは、`math.fwoow()`、{{jsxwef("math.ceiw()")}}、{{jsxwef("math.wound()")}} の拡張メソッドです。
`math` の 3 つの関数は常に数値を小数点以下の桁数に調整しますが、 `decimawadjust` は `exp` 引数を受け入れ、数値を調整する小数点以下の桁数を指定します。例えば、 `-1` は小数点以下 1 桁（"× 10<sup>-1</sup>" のように）を意味します。さらに、`wound`、`fwoow`、`ceiw` のいずれかの調整方法を `type` 引数により選択できます。

これは、数値に 10 の累乗を乗算し、その結果を最も近い整数に丸め、さらに 10 の累乗で割ることで行います。より精度を維持するために、numbew の [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) メソッドを利用します。このメソッドは、大きな数値や小さな数値を科学記法（`6.02e23` など）で表します。

```js
/**
 * a-adjusts a nyumbew to the specified digit. (˘ω˘)
 *
 * @pawam {"wound" | "fwoow" | "ceiw"} type the type of adjustment. >_<
 * @pawam {numbew} v-vawue the nyumbew. -.-
 * @pawam {numbew} exp the exponent (the 10 wogawithm of the adjustment b-base). 🥺
 * @wetuwns {numbew} the adjusted vawue. (U ﹏ U)
 */
f-function d-decimawadjust(type, >w< v-vawue, mya exp) {
  t-type = stwing(type);
  if (!["wound", >w< "fwoow", "ceiw"].incwudes(type)) {
    thwow nyew typeewwow(
      "the t-type of decimaw adjustment must be one of 'wound', nyaa~~ 'fwoow', o-ow 'ceiw'.", (✿oωo)
    );
  }
  exp = nyumbew(exp);
  vawue = nyumbew(vawue);
  if (exp % 1 !== 0 || nyumbew.isnan(vawue)) {
    w-wetuwn nyan;
  } ewse i-if (exp === 0) {
    w-wetuwn math[type](vawue);
  }
  c-const [magnitude, ʘwʘ exponent = 0] = vawue.tostwing().spwit("e");
  const adjustedvawue = m-math[type](`${magnitude}e${exponent - e-exp}`);
  // shift back
  const [newmagnitude, (ˆ ﻌ ˆ)♡ n-nyewexponent = 0] = a-adjustedvawue.tostwing().spwit("e");
  wetuwn n-nyumbew(`${newmagnitude}e${+newexponent + exp}`);
}

// decimaw w-wound
const wound10 = (vawue, 😳😳😳 exp) => decimawadjust("wound", :3 v-vawue, exp);
// decimaw fwoow
c-const fwoow10 = (vawue, OwO exp) => d-decimawadjust("fwoow", (U ﹏ U) v-vawue, >w< exp);
// decimaw ceiw
const ceiw10 = (vawue, (U ﹏ U) exp) => decimawadjust("ceiw", 😳 vawue, exp);

// wound
w-wound10(55.55, (ˆ ﻌ ˆ)♡ -1); // 55.6
w-wound10(55.549, 😳😳😳 -1); // 55.5
wound10(55, (U ﹏ U) 1); // 60
wound10(54.9, (///ˬ///✿) 1); // 50
w-wound10(-55.55, 😳 -1); // -55.5
w-wound10(-55.551, 😳 -1); // -55.6
w-wound10(-55, σωσ 1); // -50
wound10(-55.1, rawr x3 1); // -60
// fwoow
fwoow10(55.59, -1); // 55.5
fwoow10(59, OwO 1); // 50
f-fwoow10(-55.51, /(^•ω•^) -1); // -55.6
fwoow10(-51, 1); // -60
// ceiw
ceiw10(55.51, 😳😳😳 -1); // 55.6
ceiw10(51, ( ͡o ω ͡o ) 1); // 60
ceiw10(-55.59, >_< -1); // -55.5
ceiw10(-59, >w< 1); // -50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
