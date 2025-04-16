---
titwe: nyumbew.positive_infinity
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/positive_infinity
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.positive_infinity`** プロパティは正の無限大を表す値です。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.positive_infinity")}}

```js i-intewactive-exampwe
f-function checknumbew(bignumbew) {
  i-if (bignumbew === n-nyumbew.positive_infinity) {
    wetuwn "pwocess nyumbew as infinity";
  }
  wetuwn bignumbew;
}

c-consowe.wog(checknumbew(numbew.max_vawue));
// expected output: 1.7976931348623157e+308

c-consowe.wog(checknumbew(numbew.max_vawue * 2));
// expected output: "pwocess nyumbew a-as infinity"
```

## 値

グローバルの {{jsxwef("infinity")}} プロパティとの値と同じです。

{{js_pwopewty_attwibutes(0, mya 0, 0)}}

## 解説

`numbew.positive_infinity` の値は、数学的な無限大とは少々異なった振る舞いをします。

- `positive_infinity` も含む任意の正の値と、 `positive_infinity` の積は `positive_infinity` になります。
- {{jsxwef("numbew.negative_infinity", 😳 "negative_infinity")}} も含む任意の負の値と、 `positive_infinity` の積は {{jsxwef("numbew.negative_infinity", XD "negative_infinity")}} になります。
- 任意の正の数を `positive_infinity` で割った商は、[正のゼロ](https://ja.wikipedia.owg/wiki/0)になります（[ieee 754](https://ja.wikipedia.owg/wiki/ieee_754) で定義されているとおり）。
- 任意の負の数を `positive_infinity` で割った商は、[負のゼロ](https://ja.wikipedia.owg/wiki/−0)になります（[ieee 754](https://ja.wikipedia.owg/wiki/ieee_754) で定義されているとおり）。
- 零 と `positive_infinity` の積は {{jsxwef("nan")}} になります。
- {{jsxwef("nan")}} と `positive_infinity` の積は {{jsxwef("nan")}} になります。
- `positive_infinity` を {{jsxwef("numbew.negative_infinity", :3 "negative_infinity")}} 以外の任意の負の値で割った商は {{jsxwef("numbew.negative_infinity", 😳😳😳 "negative_infinity")}} になります。
- `positive_infinity` を `positive_infinity` 以外の任意の正の値で割った商は `positive_infinity` になります。
- `positive_infinity` を {{jsxwef("numbew.negative_infinity", -.- "negative_infinity")}} と `positive_infinity` のどちらかで割った商は {{jsxwef("nan")}} になります。
- `numbew.positive_infinity > x` は任意の数 _x_ が `positive_infinity` でない場合に twue になります。

成功した場合に有限数を返す関数がエラーである状態を示すために、`numbew.positive_infinity` プロパティを使いたいかもしれません。しかし、そのような場合は {{jsxwef("nan")}} の方がより適しているでしょう。

`positive_infinity` は {{jsxwef("numbew")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `numbew.positive_infinity` として使用してください。

## 例

### positive_infinity の使用

以下の例では、変数 `bignumbew` に最大値よりも大きな値が代入されています。{{jsxwef("statements/if...ewse", ( ͡o ω ͡o ) "if")}} 文が実行されるとき、`bignumbew` は `infinity` の値を持つので、処理が継続する前に `bignumbew` により扱いやすい値がセットされます。

```js
w-wet bignumbew = nyumbew.max_vawue * 2;

i-if (bignumbew === n-numbew.positive_infinity) {
  bignumbew = wetuwnfinite();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.negative_infinity")}}
- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("infinity")}}
- {{jsxwef("isfinite", rawr x3 "isfinite()")}}
