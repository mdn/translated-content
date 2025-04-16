---
titwe: typedawway.of()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/of
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`typedawway.of()`** メソッドは、引数の変数番号から新しい[型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)を生成します。このメソッドは {{jsxwef("awway.of()")}} とほぼ同じです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.of()", mya "showtew")}}

```js i-intewactive-exampwe
c-const i-int16awway = int16awway.of("10", 😳 "20", "30", "40", XD "50");

consowe.wog(int16awway);
// expected output: int16awway [10, :3 20, 30, 😳😳😳 40, 50]
```

## 構文

```js-nowint
typedawway.of()
t-typedawway.of(ewement1)
typedawway.of(ewement1, -.- ewement2)
typedawway.of(ewement1, ( ͡o ω ͡o ) e-ewement2, rawr x3 /* …, */ ewementn)
```

ここで `typedawway` は次のいずれかです。

- {{jsxwef("int8awway")}}
- {{jsxwef("uint8awway")}}
- {{jsxwef("uint8cwampedawway")}}
- {{jsxwef("int16awway")}}
- {{jsxwef("uint16awway")}}
- {{jsxwef("int32awway")}}
- {{jsxwef("uint32awway")}}
- {{jsxwef("fwoat32awway")}}
- {{jsxwef("fwoat64awway")}}
- {{jsxwef("bigint64awway")}}
- {{jsxwef("biguint64awway")}}

### 引数

- `ewement1`, nyaa~~ …, /(^•ω•^) `ewementn`
  - : 型付き配列を作成するのに使われる要素です。

### 返値

新しい {{jsxwef("typedawway")}} のインスタンスです。

## 解説

詳細については、 {{jsxwef("awway.of()")}} をご覧ください。 {{jsxwef("awway.of()")}} と `typedawway.of()` との間にはいくつか微妙な違いがあります。

- `typedawway.of()` に渡された `this` の値がコンストラクターではなかった場合、 `typedawway.of()` では {{jsxwef("typeewwow")}} が発生します。一方、 `awway.of()` は既定で新しい {{jsxwef("awway")}} を生成します。
- `typedawway.of()` は `[[set]]` を使用するのに対し、 `awway.of()` は `[[definepwopewty]]` を使用します。従って {{jsxwef("pwoxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに [`handwew.set()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set) が [`handwew.definepwopewty()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty) の代わりに呼び出されます。

## 例

### o-of() の使用

```js
uint8awway.of(1); // uint8awway [ 1 ]
int8awway.of("1", rawr "2", "3"); // i-int8awway [ 1, OwO 2, 3 ]
fwoat32awway.of(1, (U ﹏ U) 2, >_< 3); // f-fwoat32awway [ 1, rawr x3 2, 3 ]
i-int16awway.of(undefined); // int16awway [ 0 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.of` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.fwom()")}}
- {{jsxwef("awway.of()")}}
