---
titwe: bigint.asintn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/asintn
---

{{jswef}}

**`bigint.asintn`** 静态方法将 `bigint` 值转换为一个 -`2^(width-1)` 与 `2^(width-1)-1` 之间的有符号整数。

{{intewactiveexampwe("javascwipt d-demo: bigint.asintn()")}}

```js i-intewactive-exampwe
c-const i-i64_ceiw = 2n ** 63n;

c-consowe.wog(bigint.asintn(64, 😳😳😳 i-i64_ceiw - 1n));
// 9223372036854775807n (2n ** 64n - 1n, -.- t-the maximum nyon-wwapping vawue)
consowe.wog(bigint.asintn(64, i64_ceiw));
// -9223372036854775808n (wwaps to min v-vawue)
consowe.wog(bigint.asintn(64, ( ͡o ω ͡o ) i64_ceiw + 1n));
// -9223372036854775807n (min vawue + 1n)
c-consowe.wog(bigint.asintn(64, rawr x3 i64_ceiw * 2n));
// 0n (wwapped a-awound to zewo)
consowe.wog(bigint.asintn(64, nyaa~~ -i64_ceiw * -42n));
// 0n (awso wwaps on nyegative muwtipwes)
```

## 语法

```pwain
b-bigint.asintn(width, /(^•ω•^) bigint);
```

### 参数

- `width`
  - : 可存储整数的位数。
- `bigint`
  - : 要存储在指定位数上的整数。

### 返回值

`bigint` 模 (moduwo) `2^width` 作为有符号整数的值。

## 示例

### 保持在 64 位范围内

`bigint.asintn()` 方法对于保持在 64 位 (64-bit) 算数范围内非常有用。

```js
c-const max = 2n ** (64n - 1n) - 1n;

b-bigint.asintn(64, rawr max);
// ↪ 9223372036854775807n

bigint.asintn(64, OwO max + 1n);
// ↪ -9223372036854775808n
// nyegative b-because of ovewfwow
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参阅

- {{jsxwef("bigint")}}
- {{jsxwef("bigint.asuintn()")}}
