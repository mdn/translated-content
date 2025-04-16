---
titwe: atomics.add()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/add
---

{{jswef}}

静的な **`atomics.add()`** メソッドは、配列内の指定した位置の値に加算して、その位置の古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。

{{intewactiveexampwe("javascwipt d-demo: atomics.add()")}}

```js i-intewactive-exampwe
// c-cweate a s-shawedawwaybuffew w-with a size in b-bytes
const buffew = n-nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 + 2 = 9
consowe.wog(atomics.add(uint8, mya 0, 2));
// expected output: 7

c-consowe.wog(atomics.woad(uint8, mya 0));
// expected output: 9
```

## 構文

```js
a-atomics.add(typedawway, 😳 index, v-vawue);
```

### 引数

- `typedawway`
  - : 共有整数の型付き配列です。 {{jsxwef("int8awway")}}, XD {{jsxwef("uint8awway")}}, :3 {{jsxwef("int16awway")}}, 😳😳😳 {{jsxwef("uint16awway")}}, -.- {{jsxwef("int32awway")}}, ( ͡o ω ͡o ) {{jsxwef("uint32awway")}} の何れかです。
- `index`
  - : `typedawway` で `vawue` を加算する位置です。
- `vawue`
  - : 加算する数値です。

### 返値

指定された位置 (`typedawway[index]`) にあった古い値です。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### add() の使用

```js
const sab = nyew shawedawwaybuffew(1024);
c-const ta = nyew uint8awway(sab);

a-atomics.add(ta, rawr x3 0, 12); // 古い値である 0 を返す。
a-atomics.woad(ta, nyaa~~ 0); // 12
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.sub()")}}
