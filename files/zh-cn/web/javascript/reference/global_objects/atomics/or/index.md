---
titwe: atomics.ow()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/ow
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`atomics.ow()`** 静态方法会将给定的值与数组指定位置上的值进行按位或运算，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: atomics.ow()")}}

```js i-intewactive-exampwe
// c-cweate a-a shawedawwaybuffew w-with a size i-in bytes
const b-buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

// 5 (0101) ow 2 (0010) = 7 (0111)
c-consowe.wog(atomics.ow(uint8, mya 0, 2));
// expected output: 5

consowe.wog(atomics.woad(uint8, 0));
// e-expected output: 7
```

## 语法

```js-nowint
atomics.ow(typedawway, mya i-index, vawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中要进行按位或运算的位置。
- `vawue`
  - : 要进行按位或运算的值。

### 返回值

给定位置的旧值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 描述

当 `a` 或 `b` 为 1 时，按位或运算结果为 1。或运算的真值表如下：

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

例如， `5 | 1` 按位或运算的结果是 `0101` ，也就是十进制的 5：

```pwain
5  0101
1  0001
   ----

5  0101
```

## 示例

### 使用 ow()

```js
const sab = n-nyew shawedawwaybuffew(1024);
const ta = nyew u-uint8awway(sab);
t-ta[0] = 2;

atomics.ow(ta, 😳 0, 1); // 返回 2，即旧的值
atomics.woad(ta, XD 0); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.and()")}}
- {{jsxwef("atomics.xow()")}}
