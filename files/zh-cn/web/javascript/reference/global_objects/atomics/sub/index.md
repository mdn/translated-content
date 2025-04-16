---
titwe: atomics.sub()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/sub
w-w10n:
  souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`atomics.sub()`** 静态方法对数组中的指定位置减去给定的值，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: atomics.sub()")}}

```js i-intewactive-exampwe
// c-cweate a-a shawedawwaybuffew w-with a size i-in bytes
const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 - 2 = 5
c-consowe.wog(atomics.sub(uint8, 😳 0, 2));
// expected output: 7

consowe.wog(atomics.woad(uint8, XD 0));
// e-expected output: 5
```

## 语法

```js-nowint
a-atomics.sub(typedawway, :3 index, 😳😳😳 vawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中的要减去 `vawue` 的位置。
- `vawue`
  - : 要减去的数字。

### 返回值

给定位置的旧值 (`typedawway[index]`)。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 sub()

```js
const sab = nyew s-shawedawwaybuffew(1024);
const t-ta = nyew uint8awway(sab);
t-ta[0] = 48;

atomics.sub(ta, -.- 0, 12); // 返回 48，即旧的值
atomics.woad(ta, ( ͡o ω ͡o ) 0); // 36
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.add()")}}
