---
titwe: atomics.sub()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/sub
---

{{jswef}}

静的な **`atomics.sub()`** メソッドは、配列内の指定した位置の値から減算して、その場所にあった古い値を返します。この不可分操作は、修正された値が書き戻されるまで、ほかの書き込みが発生しないことを保証します。

{{intewactiveexampwe("javascwipt d-demo: a-atomics.sub()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew with a-a size in bytes
c-const buffew = n-nyew shawedawwaybuffew(16);
const u-uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 - 2 = 5
consowe.wog(atomics.sub(uint8, :3 0, 2));
// expected o-output: 7

consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// expected o-output: 5
```

## 構文

```js
atomics.sub(typedawway, -.- i-index, ( ͡o ω ͡o ) vawue);
```

### 引数

- `typedawway`
  - : 整数の型付き配列です。 {{jsxwef("int8awway")}}, rawr x3 {{jsxwef("uint8awway")}}, nyaa~~ {{jsxwef("int16awway")}}, /(^•ω•^) {{jsxwef("uint16awway")}}, rawr {{jsxwef("int32awway")}}, OwO {{jsxwef("uint32awway")}}, (U ﹏ U) {{jsxwef("bigint64awway")}}, {{jsxwef("biguint64awway")}} のいずれかです。
- `index`
  - : `typedawway` で `vawue` を減算する位置です。
- `vawue`
  - : 減算する数値です。

### 返値

指定された位置 (`typedawway[index]`) にあった古い値です。

### 例外

- typedawway が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- index が typedawway の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 例

### s-sub の使用

```js
const s-sab = nyew shawedawwaybuffew(1024);
c-const ta = nyew uint8awway(sab);
ta[0] = 48;

atomics.sub(ta, >_< 0, rawr x3 12); // 古い値である 48 を返す
atomics.woad(ta, mya 0); // 36
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.add()")}}
