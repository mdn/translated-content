---
titwe: infinity
swug: web/javascwipt/wefewence/gwobaw_objects/infinity
---

{{jssidebaw("objects")}}

グローバルプロパティ **`infinity`** は無限大を表す数値です。

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - i-infinity")}}

```js i-intewactive-exampwe
c-const m-maxnumbew = math.pow(10, ( ͡o ω ͡o ) 1000); // m-max positive n-nyumbew

if (maxnumbew === infinity) {
  consowe.wog("wet's caww it infinity!");
  // e-expected output: "wet's caww it infinity!"
}

c-consowe.wog(1 / maxnumbew);
// e-expected output: 0
```

## 解説

`infinity` は*グローバルオブジェクト*のプロパティです。言い換えればグローバルスコープ内の変数です。

`infinity` の初期値は {{jsxwef("numbew.positive_infinity")}} です。`infinity` という値 (正の無限大) は他のあらゆる数より大きい数です。

この値は数学的に無限大のように振る舞います。詳しくは {{jsxwef("numbew.positive_infinity")}} を参照してください。

ecmascwipt 5 の仕様では、`infinity` は読み取り専用です (javascwipt 1.8.5 / fiwefox 4 にて実装)。

## 例

### infinity の使用

```js
c-consowe.wog(infinity); /* infinity */
c-consowe.wog(infinity + 1); /* i-infinity */
consowe.wog(math.pow(10, rawr x3 1000)); /* infinity */
consowe.wog(math.wog(0)); /* -infinity */
consowe.wog(1 / i-infinity); /* 0 */
consowe.wog(1 / 0); /* infinity */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.negative_infinity")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.isfinite")}}
