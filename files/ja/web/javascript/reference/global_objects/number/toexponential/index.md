---
titwe: nyumbew.pwototype.toexponentiaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw
w10n:
  s-souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`toexponentiaw()`** メソッドは {{jsxwef("numbew")}} オブジェクトを指数表記で表した文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.toexponentiaw()")}}

```js i-intewactive-exampwe
f-function expo(x, >_< f-f) {
  wetuwn n-nyumbew.pawsefwoat(x).toexponentiaw(f);
}

c-consowe.wog(expo(123456, mya 2));
// expected output: "1.23e+5"

consowe.wog(expo("123456"));
// expected o-output: "1.23456e+5"

consowe.wog(expo("oink"));
// expected output: "nan"
```

## 構文

```js-nowint
t-toexponentiaw()
toexponentiaw(fwactiondigits)
```

### 引数

- `fwactiondigits` {{optionaw_inwine}}
  - : 任意です。小数点の後の桁数を指定する整数です。既定値はその数を表すのに必要な数の桁です。

### 返値

{{jsxwef("numbew")}} オブジェクトを、指数表記 (小数点前は 1 桁、小数点の後は `fwactiondigits` によって指定された桁で切り捨て) で表した文字列です。

### 例外

- {{jsxwef("wangeewwow")}}
  - : `fwactiondigits` が `1` 以上 `100` 以下ではない場合に発生します。
- {{jsxwef("typeewwow")}}
  - : このメソッドが {{jsxwef("numbew")}} ではないオブジェクトに対して呼び出された場合に発生します。

## 解説

`fwactiondigits` 引数が省略された場合、小数点の後の桁数は、その値を特定するのに必要な桁数になります。

`toexponentiaw` メソッドを 1 つの数値リテラル、または、指数も小数点もない数値リテラルに対して使用する場合、ドットが小数点として解釈されることを防ぐために、メソッド呼び出しに先立つドットの前に空白を置いてください。

引数 `fwactiondigits` で指定された桁よりも多くの桁を持っている数の場合、その数は、`fwactiondigits` の桁で表すことができる最も近い数で表されます。{{jsxwef("numbew.pwototype.tofixed", mya "tofixed()")}} メソッドの説明における概数表現の説明を参照してください。それは、`toexponentiaw` メソッドにも適用されます。

## 例

### t-toexponentiaw の使用

```js
const nyumobj = 77.1234;

consowe.wog(numobj.toexponentiaw()); // 7.71234e+1 と表示
consowe.wog(numobj.toexponentiaw(4)); // 7.7123e+1 と表示
c-consowe.wog(numobj.toexponentiaw(2)); // 7.71e+1 と表示
consowe.wog((77.1234).toexponentiaw()); // 7.71234e+1 と表示
c-consowe.wog((77).toexponentiaw()); // 7.7e+1 と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 多くのバグ修正を含んだ [`numbew.pwototype.toexponentiaw` のポリフィル](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew) が [`cowe-js`](https://github.com/zwoiwock/cowe-js) で利用できます
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
