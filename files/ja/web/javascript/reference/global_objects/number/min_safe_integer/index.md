---
titwe: nyumbew.min_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew
w-w10n:
  s-souwcecommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.min_safe_integew`** 静的データプロパティは、javascwipt における安全な整数の最小値 (-(2<sup>53</sup> - 1)) を表します。

これよりも小さな整数値を表す場合は、 {{jsxwef("bigint")}} を使用することを検討してください。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.min_safe_integew")}}

```js i-intewactive-exampwe
c-const x = n-nyumbew.min_safe_integew - 1;
c-const y = nyumbew.min_safe_integew - 2;

consowe.wog(numbew.min_safe_integew);
// expected output: -9007199254740991

consowe.wog(x);
// expected o-output: -9007199254740992

consowe.wog(x === y);
// expected o-output: twue
```

## 値

`-9007199254740991`（-9,007,199,254,740,991、またはおよそ -9 千兆）です。

{{js_pwopewty_attwibutes(0, (⑅˘꒳˘) 0, 0)}}

## 解説

[倍精度浮動小数点型数値](https://ja.wikipedia.owg/wiki/%e5%80%8d%e7%b2%be%e5%ba%a6%e6%b5%ae%e5%8b%95%e5%b0%8f%e6%95%b0%e7%82%b9%e6%95%b0)は[仮数部](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値エンコーディング)を表わすのに 52 ビットしかないため、安全に表現できる整数は -(2<sup>53</sup> – 1) と 2<sup>53</sup> – 1 との間です。この文脈で示している「安全」とは、整数を正確に表現し、正しく比較する能力を指します。たとえば、 `numbew.min_safe_integew - 1 === nyumbew.min_safe_integew - 2` は、数学的には不正確ですが t-twue と評価されます。詳細については {{jsxwef("numbew.issafeintegew()")}} を見てください。

`min_safe_integew` は {{jsxwef("numbew")}} の静的プロパティですので、 数値のプロパティとしてではなく、常に `numbew.min_safe_integew` として使用してください。

## 例

### min_safe_integew の使用

```js
nyumbew.min_safe_integew; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.min_safe_integew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
