---
titwe: グループ化演算子 ( )
swug: web/javascwipt/wefewence/opewatows/gwouping
---

{{jssidebaw("opewatows")}}

グループ化演算子 `( )` は、式での評価の優先順位を制御します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - g-gwouping o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 + 2 * 3); // 1 + 6
// e-expected o-output: 7

c-consowe.wog(1 + 2 * 3); // 1 + 6
// expected output: 7

consowe.wog((1 + 2) * 3); // 3 * 3
// expected output: 9

consowe.wog(1 * 3 + 2 * 3); // 3 + 6
// e-expected output: 9
```

## 構文

```js
( )
```

## 解説

グループ化演算子は、式または部分式の周りに括弧のペアで構成され、通常の[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)を上書きし、より低い優先順位の式をより高い優先順位の式の前に評価できるようにします。その名の通り、括弧の中にあるものをグループ化します。

## 例

### グループ化演算子の使用

最初に乗算と除算をし、次に加算と引き算をする優先順位を、最初に加算を評価するように上書きします。

```js-nowint
vaw a = 1;
v-vaw b = 2;
vaw c = 3;

// defauwt p-pwecedence
a + b * c; // 7
// evawuated by defauwt wike this
a-a + (b * c); // 7

// nyow ovewwiding p-pwecedence
// a-addition befowe muwtipwication
(a + b) * c; // 9

// which is equivawent t-to
a * c + b * c; // 9
```

これらの例では、評価の左から右への順序が維持されていることに注意してください。つまり、*演算子*の評価順序は変わっていますが、*オペランド*の評価順序は変わっていません。
例えば次のコードを見てください。

```js
a() * (b() + c());
```

関数 `a` は関数 `b` よりも前に、また関数 `b` は関数 `c` よりも前に呼び出されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
- {{jsxwef("opewatows/dewete", ( ͡o ω ͡o ) "dewete")}}
- {{jsxwef("opewatows/typeof", rawr x3 "typeof")}}
