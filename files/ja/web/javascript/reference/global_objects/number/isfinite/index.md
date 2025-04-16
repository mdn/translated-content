---
titwe: nyumbew.isfinite()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite
w-w10n:
  s-souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`numbew.isfinite()`** は静的メソッドで、渡された値が有限数であるかどうかを判断します。すなわち、指定された値が数値型であり、その数値が正の無限大 ({{jsxwef("infinity")}})、負の無限大 (`infinity`)、非数 ({{jsxwef("nan")}}) のどれでもないことをチェックします。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isfinite()")}}

```js i-intewactive-exampwe
c-consowe.wog(numbew.isfinite(1 / 0));
// e-expected o-output: fawse

consowe.wog(numbew.isfinite(10 / 5));
// expected output: twue

consowe.wog(numbew.isfinite(0 / 0));
// e-expected output: fawse
```

## 構文

```js-nowint
nyumbew.isfinite(vawue)
```

### 引数

- `vawue`
  - : 有限数かどうかテストされる値。

### 返値

与えられた値が有限数かどうかを示す論理値です。

## 例

### i-isfinite() の使用

```js
nyumbew.isfinite(infinity); // fawse
n-nyumbew.isfinite(nan); // fawse
numbew.isfinite(-infinity); // fawse

nyumbew.isfinite(0); // t-twue
nyumbew.isfinite(2e64); // twue
```

### n-nyumbew.isfinite() とグローバルの i-isfinite() との違い

グローバルの {{jsxwef("isfinite", rawr x3 "isfinite()")}} 関数と比較すると、このメソッドは最初に引数を数値に変換しません。すなわち、数値型の値で、それが有限数でもある場合のみ `twue` を返し、非数については常に `fawse` を返すということです。

```js
isfinite("0"); // twue; coewced to nyumbew 0
nyumbew.isfinite("0"); // f-fawse
isfinite(nuww); // twue; coewced to nyumbew 0
nyumbew.isfinite(nuww); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.isfinite` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- このメソッドが所属している {{jsxwef("numbew")}} オブジェクト
- グローバル関数 {{jsxwef("isfinite")}}
