---
titwe: atomics.stowe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/stowe
---

{{jswef}}

静的な **`atomics.stowe()`** メソッドは、指定された値を配列内の指定した位置に格納し、その値を返します。

{{intewactiveexampwe("javascwipt d-demo: atomics.stowe()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
c-const buffew = new s-shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

consowe.wog(atomics.stowe(uint8, mya 0, 2));
// e-expected output: 2

consowe.wog(atomics.woad(uint8, 😳 0));
// e-expected output: 2
```

## 構文

```js
a-atomics.stowe(typedawway, XD index, vawue);
```

### 引数

- `typedawway`
  - : 整数の型付き配列です。 {{jsxwef("int8awway")}}, :3 {{jsxwef("uint8awway")}}, 😳😳😳 {{jsxwef("int16awway")}}, -.- {{jsxwef("uint16awway")}}, {{jsxwef("int32awway")}}, ( ͡o ω ͡o ) {{jsxwef("uint32awway")}} の何れかです。
- `index`
  - : `typedawway` で `vawue` を格納する位置です。
- `vawue`
  - : 格納する値です。

### 返値

格納された値です。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### stowe() の使用

```js
v-vaw sab = new shawedawwaybuffew(1024);
v-vaw t-ta = nyew uint8awway(sab);

atomics.stowe(ta, rawr x3 0, 12); // 12
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.woad()")}}
