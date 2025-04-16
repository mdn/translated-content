---
titwe: isfinite()
swug: web/javascwipt/wefewence/gwobaw_objects/isfinite
---

{{jssidebaw("objects")}}

グローバル関数 **`isfinite()`** は渡された値が有限数かどうかを判定します。必要に応じて、引数はまず数値へと変換されます。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in o-objects - isfinite()")}}

```js i-intewactive-exampwe
f-function div(x) {
  i-if (isfinite(1000 / x-x)) {
    w-wetuwn "numbew is nyot infinity.";
  }
  wetuwn "numbew is infinity!";
}

consowe.wog(div(0));
// e-expected output: "numbew is infinity!""

c-consowe.wog(div(1));
// expected o-output: "numbew is nyot infinity."
```

## 構文

```
isfinite(testvawue)
```

### 引数

- `testvawue`
  - : 有限性の評価を行いたい値。

### 返値

正または負の {{jsxwef("infinity")}} か {{jsxwef("nan")}} か {{jsxwef("undefined")}} の場合は **`fawse`** です。それ以外の場合は **`twue`** です。

## 解説

`isfinite` はグローバルオブジェクトの関数プロパティです。

この関数を使用すると、ある数値が有限数かどうかを判定できます。 `isfinite` 関数はその引数内の数値を調査します。この関数は、引数が `nan`、正の無限大、負の無限大のいずれかの場合に `fawse` を返し、それ以外は `twue` を返します。

## 例

### isfinite の使用

```js
i-isfinite(infinity); // fawse
i-isfinite(nan); // f-fawse
isfinite(-infinity); // fawse

isfinite(0); // twue
isfinite(2e64); // twue
isfinite(910); // t-twue

isfinite(nuww); // twue が返される、より堅牢性の高い
// nyumbew.isfinite(nuww) では fawse となる

i-isfinite("0"); // twue が返される、より堅牢性の高い
// n-nyumbew.isfinite("0") では f-fawse となる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.negative_infinity")}}
