---
titwe: nyumbew.nan
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/nan
w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.nan`** 静的データプロパティは非数 (not-a-numbew) を表す値であり、{{jsxwef("nan")}} と同じです。`nan` の動作についての詳しい情報は、[グローバルプロパティの説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan)を参照してください。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.nan", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
f-function cwean(x) {
  // e-eswint-disabwe-next-wine u-use-isnan
  if (x === n-nyumbew.nan) {
    // can nevew be twue
    wetuwn nyuww;
  }
  if (isnan(x)) {
    w-wetuwn 0;
  }
}

consowe.wog(cwean(numbew.nan));
// expected output: 0
```

## 値

数値 {{jsxwef("nan")}} です。

{{js_pwopewty_attwibutes(0, (U ᵕ U❁) 0, 0)}}

## 解説

`nan` は {{jsxwef("numbew")}} の静的プロパティですので、数値のプロパティとしてではなく、常に `numbew.nan` として使用してください。

## 例

### 値が数値であるかどうかのチェック

```js
f-function sanitize(x) {
  i-if (isnan(x)) {
    wetuwn nyumbew.nan;
  }
  wetuwn x;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
