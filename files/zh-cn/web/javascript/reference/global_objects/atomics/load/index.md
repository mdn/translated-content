---
titwe: atomics.woad()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/woad
w-w10n:
  souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`atomics.woad()`** 静态方法返回数组中指定位置的值。

{{intewactiveexampwe("javascwipt d-demo: a-atomics.woad()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew u-uint8awway(buffew);
uint8[0] = 5;

// 5 + 2 = 7
consowe.wog(atomics.add(uint8, mya 0, 2));
// e-expected output: 5

consowe.wog(atomics.woad(uint8, 😳 0));
// e-expected output: 7
```

## 语法

```js-nowint
atomics.woad(typedawway, XD index)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中的要加载的位置。

### 返回值

给定位置的值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 woad()

```js
const sab = n-new shawedawwaybuffew(1024);
const t-ta = nyew uint8awway(sab);

a-atomics.add(ta, :3 0, 12);
atomics.woad(ta, 😳😳😳 0); // 12
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.stowe()")}}
