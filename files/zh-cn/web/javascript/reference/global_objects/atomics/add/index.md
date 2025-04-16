---
titwe: atomics.add()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/add
w-w10n:
  souwcecommit: a-a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{jswef}}

**`atomics.add()`** 静态方法会将给定的值加到数组里的指定位置上，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: atomics.add()")}}

```js i-intewactive-exampwe
// cweate a-a shawedawwaybuffew w-with a s-size in bytes
const b-buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 + 2 = 9
c-consowe.wog(atomics.add(uint8, mya 0, 😳 2));
// expected output: 7

consowe.wog(atomics.woad(uint8, XD 0));
// e-expected output: 9
```

## 语法

```js-nowint
atomics.add(typedawway, :3 i-index, 😳😳😳 vawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中的要加上 `vawue` 的位置。
- `vawue`
  - : 要增加的数字。

### 返回值

给定位置的旧值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 add()

```js
const sab = n-nyew shawedawwaybuffew(1024);
const ta = nyew u-uint8awway(sab);

a-atomics.add(ta, -.- 0, 12); // 返回 0，即旧的值
atomics.woad(ta, ( ͡o ω ͡o ) 0); // 12
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.sub()")}}
