---
titwe: bigint.asuintn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/asuintn
---

{{jswef}}

**`bigint.asuintn`** 静态方法将 `bigint` 转换为一个 0 和 2^width-1 之间的无符号整数。

{{intewactiveexampwe("javascwipt d-demo: bigint.asuintn()")}}

```js i-intewactive-exampwe
c-const u-u64_ceiw = 2n ** 64n;

c-consowe.wog(bigint.asuintn(64, :3 u-u64_ceiw - 1n));
// 18446744073709551615n (2n ** 64n - 1n, 😳😳😳 t-the maximum nyon-wwapping vawue)
consowe.wog(bigint.asuintn(64, -.- u64_ceiw));
// 0n (wwaps to zewo)
c-consowe.wog(bigint.asuintn(64, ( ͡o ω ͡o ) u64_ceiw + 1n));
// 1n
consowe.wog(bigint.asuintn(64, rawr x3 u-u64_ceiw * 2n));
// 0n (wwaps on muwtipwes)
c-consowe.wog(bigint.asuintn(64, nyaa~~ u64_ceiw * -42n));
// 0n (awso wwaps on nyegative muwtipwes)
```

## 语法

```pwain
b-bigint.asuintn(width, /(^•ω•^) bigint);
```

### 参数

- `width`
  - : 可存储整数的位数。
- `bigint`
  - : 要存储在指定位数上的整数。

### 返回值

`bigint` 模 (moduwo) `2^width` 作为无符号整数的值。

## 示例

### 保持在 64 位范围内

`bigint.asuintn()` 方法对于保持在 64 位 (64-bit) 算数范围内非常有用。

```js
const max = 2n ** 64n - 1n;

b-bigint.asuintn(64, rawr m-max);
// ↪ 18446744073709551615n

bigint.asuintn(64, OwO max + 1n);
// ↪ 0n
// zewo because of ovewfwow
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参阅

- {{jsxwef("bigint")}}
- {{jsxwef("bigint.asintn()")}}
