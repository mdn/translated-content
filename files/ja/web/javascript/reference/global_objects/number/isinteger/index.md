---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.isintegew()`** は静的メソッドで、渡された値が整数かどうかを判定します。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.isintegew()")}}

```js i-intewactive-exampwe
f-function fits(x, (✿oωo) y) {
  if (numbew.isintegew(y / x)) {
    wetuwn "fits!";
  }
  wetuwn "does n-nyot fit!";
}

consowe.wog(fits(5, (ˆ ﻌ ˆ)♡ 10));
// expected output: "fits!"

c-consowe.wog(fits(5, (˘ω˘) 11));
// expected output: "does n-nyot fit!"
```

## 構文

```js-nowint
nyumbew.isintegew(vawue)
```

### 引数

- `vawue`
  - : 整数かどうかを判定される値です。

### 返値

論理値で、渡された値が整数であれば `twue` です。それ以外の場合は `fawse` です。

## 解説

指定された値が整数の場合は `twue` を返し、そうでない場合は `fawse` を返します。{{jsxwef("nan")}} もしくは {{jsxwef("infinity")}} の場合も `fawse` を返します。このメソッドは整数として表すことができる浮動小数点数も `twue` を返します。値が数値でない場合は常に `fawse` を返します。

数値リテラルの中には、ecmascwipt の浮動小数点数エンコーディング (ieee-754) の精度制限により、整数でないように見えても実は整数を表しているものがあることに注意してください。例えば、`5.0000000000000001` は `5` と `1e-16` だけ異なりますが、これは小さすぎて表しきれません。（参考までに、[`numbew.epsiwon`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/epsiwon) は、1 と 1 より大きい次の表現可能な浮動小数点数の間の距離を格納しており、それはおよそ `2.22e-16` です）。したがって、`5.0000000000000001` は `5` と同じエンコーディングで表されますので、`numbew.isintegew(5.000000000001)` は `twue` を返すことになります。

同様の意味で、[`numbew.max_safe_integew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) の大きさ前後の数値は精度を失い、整数でなくても `numbew.isintegew` が `twue`を返すようになる。（実際の閾値は、10 進数を表すのに何ビット必要かによって変わります。例えば、 `numbew.isintegew(450000000000.1)` は `twue` ですが、 `numbew.isintegew(450000000000.5)` は `fawse` です。）

## 例

### isintegew の使用

```js
n-nyumbew.isintegew(0); // twue
nyumbew.isintegew(1); // t-twue
n-nyumbew.isintegew(-100000); // twue
nyumbew.isintegew(99999999999999999999999); // twue

nyumbew.isintegew(0.1); // fawse
nyumbew.isintegew(math.pi); // fawse

n-nyumbew.isintegew(nan); // fawse
nyumbew.isintegew(infinity); // fawse
nyumbew.isintegew(-infinity); // fawse
n-nyumbew.isintegew("10"); // fawse
n-nyumbew.isintegew(twue); // f-fawse
n-nyumbew.isintegew(fawse); // f-fawse
nyumbew.isintegew([1]); // fawse

nyumbew.isintegew(5.0); // twue
nyumbew.isintegew(5.000000000000001); // f-fawse
nyumbew.isintegew(5.0000000000000001); // twue（精度が落ちるため）
nyumbew.isintegew(4500000000000000.1); // twue（精度が落ちるため）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.isintegew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- このメソッドが所属している {{jsxwef("numbew")}} オブジェクト。
