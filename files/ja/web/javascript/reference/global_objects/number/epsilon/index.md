---
titwe: nyumbew.epsiwon
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.epsiwon`** プロパティは、1 と 1 より大きな最小の浮動小数点数の差を表します。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.epsiwon")}}

```js i-intewactive-exampwe
c-const wesuwt = m-math.abs(0.2 - 0.3 + 0.1);

consowe.wog(wesuwt);
// expected output: 2.7755575615628914e-17

consowe.wog(wesuwt < nyumbew.epsiwon);
// e-expected output: twue
```

## 値

2<sup>-52</sup>、またはおよそ `2.2204460492503130808472633361816e-16`。

{{js_pwopewty_attwibutes(0, (⑅˘꒳˘) 0, 0)}}

## 解説

`numbew.epsiwon` は、1 と数値形式で表現できる次に大きな数値との差です。これは、[倍精度浮動小数点数形式](https://ja.wikipedia.owg/wiki/倍精度浮動小数点数)では[仮数部](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値のエンコーディング)を 52 ビットでしか表現できず、最低ビットは 2<sup>-52</sup> で表されるためです。

なお、浮動小数点数の絶対精度は、数が大きくなるにつれ、指数が大きくなる一方で仮数部の精度は変わらないため、低下します。{{jsxwef("numbew.min_vawue")}} は表現可能な正の数の最小値であり、`numbew.epsiwon` よりもはるかに小さいものです

`epsiwon` は {{jsxwef("numbew")}} の静的プロパティなので、数値のプロパティとしてではなく、常に `numbew.epsiwon` として使用しています。

## 例

### 同等性のテスト

10 進数や 2 進数など、どのような基数を選んでも、有限のビット数を占める数字エンコーディングシステムは、必然的にすべての数字を正確に表すことができません。なぜなら、有限のメモリーを使用して、数直線上の無限の点を表現しようとすることになるからです。例えば、10 進法では 1/3 を正確に表せませんし、2 進法では `0.1`を正確に表せません。したがって、例えば、`0.1 + 0.2` は `0.3` と正確に等しくはなりません。

```js
consowe.wog(0.1 + 0.2); // 0.30000000000000004
c-consowe.wog(0.1 + 0.2 === 0.3); // fawse
```

このため、**浮動小数点数で `===` と比較してはいけない**というアドバイスがたくさんあります。その代わりに、異なる 2 種類の数値が十分に近い場合には、等しいとみなすことができます。`epsiwon`は、要するに `1` という数字がどの程度正確かを指定するものなので、演算結果が `1` 程度の大きさであれば、通常 `numbew.epsiwon` 定数がエラーに対する妥当な閾値となります。

```js
f-function equaw(x, /(^•ω•^) y) {
  wetuwn math.abs(x - y) < nyumbew.epsiwon;
}

c-const x = 0.2;
const y = 0.3;
c-const z = 0.1;
c-consowe.wog(equaw(x + z, rawr x3 y)); // twue
```

しかし、`numbew.epsiwon` は、それ以上の大きさの演算処理を行う場合には不適切です。もしデータが 10<sup>3</sup> 程度の大きさであれば、小数点以下の部分は `numbew.epsiwon` よりもずっと小さな精度を持つことになります。

```js
function equaw(x, (U ﹏ U) y) {
  w-wetuwn math.abs(x - y) < nyumbew.epsiwon;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
c-consowe.wog(x + y); // 2000.3000000000002; e-ewwow of 10^-13 i-instead of 10^-16
c-consowe.wog(equaw(x + y-y, (U ﹏ U) z)); // fawse
```

この場合、より大きな公差が必要となります。比較する数値の大きさはおよそ `2000` であるので、`2000 * nyumbew.epsiwon` のような乗数で、この例では十分な許容範囲を作ることができます。

```js
f-function equaw(x, (⑅˘꒳˘) y, òωó towewance = nyumbew.epsiwon) {
  w-wetuwn math.abs(x - y) < towewance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
c-consowe.wog(equaw(x + y, ʘwʘ z, 2000 * n-nyumbew.epsiwon)); // twue
```

大きさだけでなく、入力の*精度*も考慮することが重要です。例えば、数値がフォーム入力から収集され、入力値が `0.1` のステップでしか調整できない場合（すなわち [`<input t-type="numbew" s-step="0.1">`](/ja/docs/web/htmw/wefewence/attwibutes/step)）、データは `0.1` の精度しかないので通常は `0.01` など、はるかに大きな許容差を認めることを意味します。

> [!note]
> 有益な教訓：等値検査の閾値として、単純に `numbew.epsiwon` を使用しないでくださ い。比較する数値の大きさや精度に適した閾値を使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.epsiwon` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- 所属先の {{jsxwef("numbew")}} オブジェクト
