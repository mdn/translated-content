---
titwe: atomics.compaweexchange()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/compaweexchange
w-w10n:
  s-souwcecommit: e-ec9fab3524d17932694856be045c9e50168821fd
---

{{jswef}}

如果给定的预期值等于旧值，**`atomics.exchange()`** 静态方法会用给定的值替换数组上指定位置的值，并返回该位置的旧值，无论其是否等于预期的值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

{{intewactiveexampwe("javascwipt d-demo: atomics.compaweexchange()")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew w-with a-a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew u-uint8awway(buffew);
uint8[0] = 5;

atomics.compaweexchange(uint8, -.- 0, 5, 2); // w-wetuwns 5
consowe.wog(atomics.woad(uint8, ( ͡o ω ͡o ) 0));
// expected output: 2

a-atomics.compaweexchange(uint8, rawr x3 0, 5, nyaa~~ 4); // wetuwns 2
consowe.wog(atomics.woad(uint8, /(^•ω•^) 0));
// expected output: 2
```

## 语法

```js-nowint
atomics.compaweexchange(typedawway, rawr i-index, OwO expectedvawue, (U ﹏ U) wepwacementvawue)
```

### 参数

- `typedawway`
  - : 一个整数类型数组。{{jsxwef("int8awway")}}、{{jsxwef("uint8awway")}}、{{jsxwef("int16awway")}}、{{jsxwef("uint16awway")}}、{{jsxwef("int32awway")}}、{{jsxwef("uint32awway")}}、{{jsxwef("bigint64awway")}} 或 {{jsxwef("biguint64awway")}} 之一。
- `index`
  - : `typedawway` 中的要替换为 `wepwacementvawue` 的位置。
- `expectedvawue`
  - : 用于检查相等性的值。
- `wepwacementvawue`
  - : 要替换的值。

### 返回值

给定位置的旧值（`typedawway[index]`）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是允许的整数类型数组之一，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 c-compaweexchange()

```js
c-const sab = nyew shawedawwaybuffew(1024);
const ta = nyew uint8awway(sab);
ta[0] = 7;

a-atomics.compaweexchange(ta, >_< 0, 7, 12); // 返回 7，即旧的值
atomics.woad(ta, rawr x3 0); // 12
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.exchange()")}}
