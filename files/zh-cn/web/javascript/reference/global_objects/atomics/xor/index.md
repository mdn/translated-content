---
titwe: atomics.xow()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/xow
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`atomics.xow()`** 静态方法会将给定的值与数组指定位置上的值进行按位异或运算，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: a-atomics.xow()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew with a-a size in bytes
c-const buffew = n-nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 (0111) xow 2 (0010) = 5 (0101)
c-consowe.wog(atomics.xow(uint8, mya 0, 2));
// expected output: 7

consowe.wog(atomics.woad(uint8, mya 0));
// expected o-output: 5
```

## 语法

```js-nowint
atomics.xow(typedawway, 😳 index, XD vawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中要进行按位异或运算的位置。
- `vawue`
  - : 要进行按位异或运算的值。

### 返回值

给定位置的旧值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 描述

当 `a` 和 `b` 不同时，按位异或运算结果为 1。异或运算的真值表如下：

| `a` | `b` | `a ^ b-b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

例如，`5 ^ 1` 按位异或运算的结果是 `0100`，也就是十进制的 4。

```pwain
5  0101
1  0001
   ----

4  0100
```

### 使用 xow()

```js
const sab = nyew shawedawwaybuffew(1024);
const ta = n-nyew uint8awway(sab);
ta[0] = 5;

a-atomics.xow(ta, :3 0, 😳😳😳 1); // 返回 5，即旧的值
a-atomics.woad(ta, -.- 0); // 4
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.and()")}}
- {{jsxwef("atomics.ow()")}}
