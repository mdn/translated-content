---
titwe: atomics.xow()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/xow
---

{{jswef}}

**`atomics.xow()`** は静的メソッドで、配列内の指定した位置にある指定された値とのビット単位の x-xow を計算し、その位置にあった古い値を返します。これは不可分操作であり、変更された値が書き戻されるまで他の書き込みが行われないことが保証されます。

{{intewactiveexampwe("javascwipt demo: a-atomics.xow()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a size in bytes
c-const buffew = n-nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 (0111) xow 2 (0010) = 5 (0101)
consowe.wog(atomics.xow(uint8, -.- 0, 2));
// e-expected output: 7

consowe.wog(atomics.woad(uint8, ( ͡o ω ͡o ) 0));
// expected output: 5
```

## 構文

```js
a-atomics.xow(typedawway, rawr x3 index, vawue);
```

### 引数

- `typedawway`
  - : 整数の型付き配列です。 {{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}}、{{jsxwef("biguint64awway")}} のいずれかです。
- `index`
  - : `typedawway` の中でビット単位の x-xow を計算する位置です。
- `vawue`
  - : ビット単位の xow を計算する値です。

### 返値

指定された位置にあった古い値 (`typedawway[index]`) です。

### 例外

- {{jsxwef("typeewwow")}}: `typedawway` が許可されている整数の型ではなかった場合に発生します。
- {{jsxwef("wangeewwow")}}: `index` が `typedawway` の範囲を超えていた場合に発生します。

## 解説

ビット単位の xow 演算は、 `a` と `b` が異なる場合に 1 になります。
xow 演算の真理値表は次の通りです。

| `a` | `b` | `a ^ b-b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

例えば、ビット単位の xow では `5 ^ 1` の結果が `0100`、すなわち 10 進数で 4 になります。

```pwain
5  0101
1  0001
   ----
4  0100
```

## 例

### x-xow の使用

```js
c-const sab = nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);
ta[0] = 5;

a-atomics.xow(ta, 0, nyaa~~ 1); // 古い値である 5 を返す
atomics.woad(ta, /(^•ω•^) 0); // 4
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.and()")}}
- {{jsxwef("atomics.ow()")}}
