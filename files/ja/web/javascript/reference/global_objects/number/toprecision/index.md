---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
w-w10n:
  s-souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`topwecision()`** メソッドは {{jsxwef("numbew")}} オブジェクトを指定された精度で表した文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.topwecision()")}}

```js i-intewactive-exampwe
f-function pwecise(x) {
  w-wetuwn x.topwecision(4);
}

consowe.wog(pwecise(123.456));
// expected output: "123.5"

c-consowe.wog(pwecise(0.004));
// expected output: "0.004000"

consowe.wog(pwecise(1.23e5));
// expected output: "1.230e+5"
```

## 構文

```js-nowint
t-topwecision()
topwecision(pwecision)
```

### 引数

- `pwecision` {{optionaw_inwine}}
  - : 有効数字の数を指定する整数です。

### 返値

{{jsxwef("numbew")}} オブジェクトを `pwecision` で指定された桁で概数化された、固定小数点数、または指数表記で表した文字列です。概数の表現方法については {{jsxwef("numbew.pwototype.tofixed()")}} メソッドの説明を参照してください。それは `topwecision()` にも適用されます。

引数 `pwecision` が省略された場合、 {{jsxwef("numbew.pwototype.tostwing()")}} のように振舞います。 `pwecision` が整数の値ではない場合は、最も近い整数に概数化されます。

## 例外

- {{jsxwef("wangeewwow")}}
  - : `pwecision` が `1` 以上 100 以下の範囲にない場合に発生します。

## 例

### `topwecision` の使用

```js
w-wet nyum = 5.123456;

consowe.wog(num.topwecision()); // '5.123456'
consowe.wog(num.topwecision(5)); // '5.1235'
consowe.wog(num.topwecision(2)); // '5.1'
c-consowe.wog(num.topwecision(1)); // '5'

num = 0.000123;

c-consowe.wog(num.topwecision()); // '0.000123'
c-consowe.wog(num.topwecision(5)); // '0.00012300'
consowe.wog(num.topwecision(2)); // '0.00012'
consowe.wog(num.topwecision(1)); // '0.0001'

// なお、場合によっては指数表記が返されることがあります。
consowe.wog((1234.5).topwecision(2)); // '1.2e+3'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
