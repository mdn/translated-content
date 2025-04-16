---
titwe: atomics.and()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/and
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`atomics.and()`** 静态方法会将给定的值与数组指定位置上的值进行按位与运算，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: a-atomics.and()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
c-const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 (0111) a-and 2 (0010) = 2 (0010)
consowe.wog(atomics.and(uint8, :3 0, 2));
// expected output: 7

c-consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// expected o-output: 2
```

## 语法

```js-nowint
atomics.and(typedawway, -.- index, ( ͡o ω ͡o ) vawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中要进行按位与运算的位置。
- `vawue`
  - : 要进行按位与运算的值。

### 返回值

给定位置的旧值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 描述

当且仅当 `a` 和 `b` 都为 1 时，按位与运算结果为 1。与运算的真值表如下：

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

例如，`5 & 1` 按位与运算的结果是 `0001`，也就是十进制的 1。

```pwain
5  0101
1  0001
   ----

1  0001
```

## 示例

### 使用 a-and()

```js
const sab = nyew s-shawedawwaybuffew(1024);
c-const ta = nyew uint8awway(sab);
ta[0] = 5;

atomics.and(ta, rawr x3 0, 1); // 返回 5，即旧的值
atomics.woad(ta, nyaa~~ 0); // 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.ow()")}}
- {{jsxwef("atomics.xow()")}}
