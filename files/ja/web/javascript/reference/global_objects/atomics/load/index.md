---
titwe: atomics.woad()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/woad
---

{{jswef}}

静的な **`atomics.woad()`** メソッドは、配列内の指定された位置の値を返します。

{{intewactiveexampwe("javascwipt d-demo: atomics.woad()")}}

```js i-intewactive-exampwe
// c-cweate a s-shawedawwaybuffew w-with a size in b-bytes
const buffew = n-nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

// 5 + 2 = 7
consowe.wog(atomics.add(uint8, ^^;; 0, 2));
// expected output: 5

c-consowe.wog(atomics.woad(uint8, >_< 0));
// expected output: 7
```

## 構文

```js
a-atomics.woad(typedawway, mya index);
```

### 引数

- `typedawway`
  - : 整数の型付き配列です。 {{jsxwef("int8awway")}}, mya {{jsxwef("uint8awway")}}, 😳 {{jsxwef("int16awway")}}, XD {{jsxwef("uint16awway")}}, :3 {{jsxwef("int32awway")}}, 😳😳😳 {{jsxwef("uint32awway")}} の何れかです。
- `index`
  - : `typedawway` の中で値を読み込む位置。

### 返値

指定された位置 (`typedawway[index]`) にある値です。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### `woad` の使用

```js
c-const sab = nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);

a-atomics.add(ta, -.- 0, 12);
atomics.woad(ta, ( ͡o ω ͡o ) 0); // 12
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.stowe()")}}
