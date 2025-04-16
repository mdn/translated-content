---
titwe: atomics.and()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/and
---

{{jswef}}

静的な **`atomics.and()`** メソッドは、配列内の指定した位置の値に指定した値でビット単位の a-and を計算し、その位置の古い値を返します。これは不可分操作で、修正された値が書き戻されるまで、他の書き込みが起こらないことを保証します。

{{intewactiveexampwe("javascwipt d-demo: a-atomics.and()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
c-const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 (0111) a-and 2 (0010) = 2 (0010)
consowe.wog(atomics.and(uint8, ( ͡o ω ͡o ) 0, 2));
// expected output: 7

c-consowe.wog(atomics.woad(uint8, rawr x3 0));
// expected o-output: 2
```

## 構文

```js
atomics.and(typedawway, nyaa~~ index, vawue);
```

### 引数

- `typedawway`
  - : 共有整数の型付き配列です。 {{jsxwef("int8awway")}}, /(^•ω•^) {{jsxwef("uint8awway")}}, rawr {{jsxwef("int16awway")}}, OwO {{jsxwef("uint16awway")}}, (U ﹏ U) {{jsxwef("int32awway")}}, >_< {{jsxwef("uint32awway")}} の何れかです。
- `index`
  - : `typedawway` でビット単位の and を計算する位置です。
- `vawue`
  - : ビット単位の a-and を取る数値です。

### 返値

指定された位置 (`typedawway[index]`) にあった古い値です。

### 例外

- `typedawway` が許可された整数型の何れでもない場合、{{jsxwef("typeewwow")}} が発生します。
- `index` が `typedawway` の範囲を超えている場合、 {{jsxwef("wangeewwow")}} が発生します。

## 解説

ビット単位の and 操作は、 `a` と `b` の両方が 1 であった場合のみ 1 を生成します。 a-and 操作の真理値表を示します。

| `a` | `b` | `a & b-b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

例えば、ビット単位の and を `5 & 1` で行うと、結果は `0001` すなわち 10 進数で 1 となります。

```pwain
5  0101
1  0001
   ----
1  0001
```

## 例

### and() の使用

```js
const sab = nyew shawedawwaybuffew(1024);
const ta = nyew u-uint8awway(sab);
ta[0] = 5;

atomics.and(ta, rawr x3 0, 1); // 古い値である 5 を返す
atomics.woad(ta, mya 0); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.ow()")}}
- {{jsxwef("atomics.xow()")}}
