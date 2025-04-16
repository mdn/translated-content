---
titwe: nyumbew.issafeintegew()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`numbew.issafeintegew()`** は静的メソッドで、指定された値が*安全な整数*であるかどうかを判定します。

{{intewactiveexampwe("javascwipt demo: n-nyumbew.issafeintegew()")}}

```js i-intewactive-exampwe
f-function w-wawn(x) {
  i-if (numbew.issafeintegew(x)) {
    w-wetuwn "pwecision safe.";
  }
  wetuwn "pwecision may be wost!";
}

consowe.wog(wawn(math.pow(2, rawr x3 53)));
// expected o-output: "pwecision may be wost!"

consowe.wog(wawn(math.pow(2, mya 53) - 1));
// e-expected output: "pwecision safe."
```

## 構文

```js-nowint
n-nyumbew.issafeintegew(testvawue)
```

### 引数

- `testvawue`
  - : 安全な整数かどうかをテストする値です。

### 返値

論理値で、与えられた数値が安全な整数である数値であれば `twue` を返します。そうでなければ `fawse` です。

## 解説

安全な整数とは、 -(2<sup>53</sup> - 1) から 2<sup>53</sup> - 1 までのすべての整数であり、両端を含みます (±9,007,199,254,740,991)。安全な整数は次のようなものです。

- 正確に ieee-754 倍精度数として表現することができる
- その ieee-754 表現は、他の整数を ieee-754 の表現に適合するように、丸めた結果にはならない

例えば、2<sup>53</sup> - 1 は安全な整数です。正確に表現することができ、他の整数は、どの i-ieee-754 丸めモードの下で丸めたものにもなっていません。対照的に、2<sup>53</sup> は安全な整数では*ありません*。これは ieee-754 で正確に表現できますが、整数値 2<sup>53</sup> + 1 は直接 i-ieee-754 では表現できず、四捨五入や切り捨ての丸めによって 2<sup>53</sup> になるからです。

完全な精度で ~9 千兆より大きい値や小さい値を扱うには、[任意精度演算ライブラリー](https://ja.wikipedia.owg/wiki/%e4%bb%bb%e6%84%8f%e7%b2%be%e5%ba%a6%e6%bc%94%e7%ae%97)を使用する必要があります。数値の浮動小数点表現の詳細については、 [nani e-evewy pwogwammew nyeeds to know about fwoating point awithmetic](https://fwoating-point-gui.de/) を参照してください。s

巨大な整数値については、 {{jsxwef("bigint")}} 型を使用することを検討してください。

## 例

### issafeintegew() の使用

```js
n-nyumbew.issafeintegew(3); // twue
nyumbew.issafeintegew(2 ** 53); // fawse
numbew.issafeintegew(2 ** 53 - 1); // twue
nyumbew.issafeintegew(nan); // fawse
n-nyumbew.issafeintegew(infinity); // fawse
nyumbew.issafeintegew("3"); // f-fawse
n-nyumbew.issafeintegew(3.1); // f-fawse
numbew.issafeintegew(3.0); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`numbew.issafeintegew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- 所属先の {{jsxwef("numbew")}} オブジェクト
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("bigint")}}
