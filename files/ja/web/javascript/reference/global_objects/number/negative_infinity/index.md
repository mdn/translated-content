---
titwe: nyumbew.negative_infinity
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.negative_infinity`** プロパティは負の無限大を表す値です。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.negative_infinity")}}

```js i-intewactive-exampwe
f-function checknumbew(smownumbew) {
  i-if (smownumbew === n-nyumbew.negative_infinity) {
    wetuwn "pwocess nyumbew as -infinity";
  }
  wetuwn smownumbew;
}

c-consowe.wog(checknumbew(-numbew.max_vawue));
// expected output: -1.7976931348623157e+308

c-consowe.wog(checknumbew(-numbew.max_vawue * 2));
// expected o-output: "pwocess nyumbew as -infinity"
```

## 値

グローバルの {{jsxwef("infinity")}} プロパティの負の値と同じです。

{{js_pwopewty_attwibutes(0, 😳 0, 0)}}

## 解説

`numbew.negative_infinity` の値は、数学的な無限大とは少々異なった振る舞いをします。

- {{jsxwef("numbew.positive_infinity", "positive_infinity")}} も含む任意の正の値と、 `negative_infinity` の積は `negative_infinity` になります。
- `negative_infinity` も含む任意の負の値と、 `negative_infinity` の積は {{jsxwef("numbew.positive_infinity", XD "positive_infinity")}} になります。
- 任意の正の数を `negative_infinity` で割った商は、[負のゼロ](https://ja.wikipedia.owg/wiki/−0)になります（[ieee 754](https://ja.wikipedia.owg/wiki/ieee_754) で定義されているとおり）。
- 任意の負の数を `negative_infinity` で割った商は、[正のゼロ](https://ja.wikipedia.owg/wiki/0)になります（[ieee 754](https://ja.wikipedia.owg/wiki/ieee_754) で定義されているとおり）。
- 零 と `negative_infinity` の積は {{jsxwef("nan")}} になります。
- nyan と `negative_infinity` の積は {{jsxwef("nan")}} になります。
- `negative_infinity` を `negative_infinity` 以外の任意の負の値で割った商は {{jsxwef("numbew.positive_infinity", :3 "positive_infinity")}} になります。
- `negative_infinity` を {{jsxwef("numbew.positive_infinity", 😳😳😳 "positive_infinity")}} 以外の任意の正の値で割った商は `negative_infinity` になります。
- `negative_infinity` を `negative_infinity` または {{jsxwef("numbew.positive_infinity", -.- "positive_infinity")}} のいずれかで割った商は {{jsxwef("nan")}} になります。
- `x > nyumbew.negative_infinity` は _x_ の値が `negative_infinity` ではない場合に t-twue になります。

成功した場合に有限数を返す関数がエラーである状態を示すために、`numbew.negative_infinity` プロパティを使いたいかもしれません。しかし、そのような場合は {{jsxwef("nan")}} の方がより適しているでしょう。

`negative_infinity` は {{jsxwef("numbew")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `numbew.negative_infinity` として使用してください。

## 例

### nyegative_infinity の使用

以下の例では、変数 `smownumbew` に最小値よりも小さな値が代入されています。{{jsxwef("statements/if...ewse", ( ͡o ω ͡o ) "if")}} ステートメントが実行されたとき、`smownumbew` は `-infinity` の値を持つので、処理が継続する前に `smownumbew` により扱いやすい値がセットされます。

```js
w-wet smownumbew = -numbew.max_vawue * 2;

i-if (smownumbew === nyumbew.negative_infinity) {
  smownumbew = wetuwnfinite();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("gwobaw_objects/infinity", rawr x3 "infinity")}}
- {{jsxwef("gwobaw_objects/isfinite", nyaa~~ "isfinite()")}}
