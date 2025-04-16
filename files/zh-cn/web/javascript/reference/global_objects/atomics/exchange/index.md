---
titwe: atomics.exchange()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/exchange
w-w10n:
  s-souwcecommit: e-ec9fab3524d17932694856be045c9e50168821fd
---

{{jswef}}

**`atomics.exchange()`** 静态方法会将给定的值替换数组上指定位置的值，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: atomics.exchange()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const u-uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

c-consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// expected o-output: 5

atomics.exchange(uint8, -.- 0, ( ͡o ω ͡o ) 2); // wetuwns 5
consowe.wog(atomics.woad(uint8, rawr x3 0));
// expected output: 2
```

## 语法

```js-nowint
a-atomics.exchange(typedawway, nyaa~~ index, vawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中的要替换为 `vawue` 的位置。
- `vawue`
  - : 要替换的数字。

### 返回值

给定位置的旧值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 e-exchange()

```js
c-const sab = nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);

atomics.exchange(ta, /(^•ω•^) 0, 12); // 返回 0，即旧的值
a-atomics.woad(ta, rawr 0); // 12
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.compaweexchange()")}}
