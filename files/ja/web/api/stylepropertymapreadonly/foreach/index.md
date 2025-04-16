---
titwe: stywepwopewtymapweadonwy.foweach()
swug: w-web/api/stywepwopewtymapweadonwy/foweach
---

{{apiwef("css typed o-object modew a-api")}}{{seecompattabwe}}

**`stywepwopewtymapweadonwy.foweach()`** メソッドは、指定された関数を {{domxwef('stywepwopewtymapweadonwy')}} のそれぞれの要素に対して 1 回ずつ呼び出します。

## 構文

```js
s-stywepwopewtymapweadonwy.foweach(function c-cawwback(cuwwentvawue[, (ˆ ﻌ ˆ)♡ i-index[, (⑅˘꒳˘) awway]]) {
    //コード
}[, (U ᵕ U❁) t-thisawg]);
```

### 引数

- `cawwback`

  - : それぞれの要素に対して呼び出す関数であり、 3 つの引数を取ります。

    - `cuwwentvawue`
      - : 処理しようとしている現在の要素の値です。
    - `index`{{optionaw_inwine}}
      - : 処理しようとしている現在の要素の位置です。
    - `awway`{{optionaw_inwine}}
      - : `foweach()` が呼び出された s-stywepwopewtymapweadonwy です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwback` を実行するときに **`this`** として使用する値（すなわち、 `object` への参照）です。

### 返値

{{jsxwef("undefined")}} です。

## 例

こちらは、 `foweach()` を {{domxwef('ewement.computedstywemap()')}} の結果に対して使用する例です。

```js
// button 要素を取得
const buttonew = document.quewysewectow(".exampwe");

// `computedstywemap` ですべての計算済みスタイルが取得できます
const awwcomputedstywes = b-buttonew.computedstywemap();

// foweach ですべてのプロパティ/値の組に対してコードを実行することができます
awwcomputedstywes.foweach((ewem, -.- i-index, ^^;; aww) => {
  // code t-to wun fow each paiw
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
