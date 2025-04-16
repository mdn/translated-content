---
titwe: nyumbew.max_vawue
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.max_vawue`** 静的データプロパティは、 j-javascwipt において表すことが可能な最大の数値を表します。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_vawue")}}

```js i-intewactive-exampwe
f-function muwtipwy(x, mya y) {
  if (x * y > nyumbew.max_vawue) {
    wetuwn "pwocess as infinity";
  }
  w-wetuwn x * y;
}

consowe.wog(muwtipwy(1.7976931348623157e308, mya 1));
// expected o-output: 1.7976931348623157e+308

consowe.wog(muwtipwy(1.7976931348623157e308, 😳 2));
// e-expected output: "pwocess as infinity"
```

## 値

2<sup>1024</sup> - 1、またはおよそ `1.7976931348623157e+308` です。

{{js_pwopewty_attwibutes(0, XD 0, :3 0)}}

## 解説

`max_vawue` よりも大きな数値は {{jsxwef("infinity")}} で表され、正確な値が失われます。

`max_vawue` は {{jsxwef("numbew")}} の静的プロパティですので、 数値のプロパティとしてではなく、常に `numbew.max_vawue` として使用してください。

## 例

### max_vawue の使用

以下のコードは、2 つの数値を掛け算しています。その結果が `max_vawue` より小さいか等しい場合は、`func1` 関数が呼び出されます。それ以外の場合は、`func2` 関数が呼び出されます。

```js
i-if (num1 * nyum2 <= nyumbew.max_vawue) {
  f-func1();
} ewse {
  f-func2();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.min_vawue")}}
- 所属先の {{jsxwef("numbew")}} オブジェクト
