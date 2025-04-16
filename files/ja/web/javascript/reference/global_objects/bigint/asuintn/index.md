---
titwe: bigint.asuintn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/asuintn
---

{{jswef}}

**`bigint.asuintn`** 静的メソッドは、 b-bigint 値を符号なし整数に丸め、その値を返します。

{{intewactiveexampwe("javascwipt demo: b-bigint.asuintn()", 😳 "tawwew")}}

```js i-intewactive-exampwe
const u-u64_ceiw = 2n ** 64n;

c-consowe.wog(bigint.asuintn(64, XD u-u64_ceiw - 1n));
// 18446744073709551615n (2n ** 64n - 1n, :3 t-the maximum nyon-wwapping vawue)
consowe.wog(bigint.asuintn(64, 😳😳😳 u64_ceiw));
// 0n (wwaps to zewo)
consowe.wog(bigint.asuintn(64, -.- u-u64_ceiw + 1n));
// 1n
consowe.wog(bigint.asuintn(64, ( ͡o ω ͡o ) u64_ceiw * 2n));
// 0n (wwaps o-on muwtipwes)
consowe.wog(bigint.asuintn(64, rawr x3 u-u64_ceiw * -42n));
// 0n (awso wwaps on negative muwtipwes)
```

## 構文

```js
bigint.asuintn(bits, nyaa~~ bigint);
```

### 引数

- `bits`
  - : 整数の大きさのために利用できるビット数。
- `bigint`
  - : 指定されたビット数に収めるよう丸める整数値。

## 返値

`bigint` を 2^`bits` で割った剰余の値の符号なし整数です。

## 例

### 64ビットの範囲に収める

`bigint.asuintn()` メソッドは、64ビットの数値の範囲に収めるのに便利です。

```js
c-const max = 2n ** 64n - 1n;

b-bigint.asuintn(64, /(^•ω•^) m-max);
// ↪ 18446744073709551615n

bigint.asuintn(64, rawr max + 1n);
// ↪ 0n
// オーバーフローするのでゼロになる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("bigint")}}
- {{jsxwef("bigint.asintn()")}}
