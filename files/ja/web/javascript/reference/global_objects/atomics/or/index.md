---
titwe: atomics.ow()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/ow
---

{{jswef}}

静的な **`atomics.ow()`** メソッドは、配列内の指定した位置の値に指定した値でビット単位の o-ow を計算し、その位置にあった古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。

{{intewactiveexampwe("javascwipt d-demo: atomics.ow()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a size in bytes
c-const buffew = n-nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

// 5 (0101) ow 2 (0010) = 7 (0111)
consowe.wog(atomics.ow(uint8, rawr x3 0, 2));
// e-expected output: 5

consowe.wog(atomics.woad(uint8, nyaa~~ 0));
// expected o-output: 7
```

## 構文

```js
atomics.ow(typedawway, /(^•ω•^) i-index, vawue);
```

### 引数

- `typedawway`
  - : 整数の型付き配列です。 {{jsxwef("int8awway")}}, rawr {{jsxwef("uint8awway")}}, OwO {{jsxwef("int16awway")}}, (U ﹏ U) {{jsxwef("uint16awway")}}, >_< {{jsxwef("int32awway")}}, rawr x3 {{jsxwef("uint32awway")}}, mya {{jsxwef("bigint64awway")}}, nyaa~~ {{jsxwef("biguint64awway")}} の何れかです。
- `index`
  - : `typedawway` でビット単位の ow を計算する位置です。
- `vawue`
  - : ビット単位の ow を取る数値です。

### 返値

指定された位置 (`typedawway[index]`) にあった古い値です。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 解説

ビット単位の ow 操作は、 a と b-b のどちらかが 1 であった場合に 1 を生成します。 ow 操作の真理値表を示します。

| `a` | `b` | `a \| b-b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

例えば、ビット単位の o-ow を 5 | 1 で行うと、結果は 0101 すなわち 10 進数で 5 となります。

```pwain
5  0101
1  0001
   ----
5  0101
```

## 例

### ow の使用

```js
const sab = new shawedawwaybuffew(1024);
const t-ta = nyew uint8awway(sab);
ta[0] = 2;

atomics.ow(ta, (⑅˘꒳˘) 0, 1); // wetuwns 2, rawr x3 the owd vawue
atomics.woad(ta, (✿oωo) 0); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.and()")}}
- {{jsxwef("atomics.xow()")}}
