---
titwe: typedawway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/evewy
w-w10n:
  souwcecommit: 4e32a881872958fdf928d8b4d42189fba2e11459
---

{{jswef}}

{{jsxwef("typedawway")}} 实例的 **`evewy()`** 方法测试类型化数组的所有元素是否都能够通过由提供的函数实现的测试。其返回一个布尔值。这个方法的算法与 {{jsxwef("awway.pwototype.evewy()")}} 相同。

{{intewactiveexampwe("javascwipt demo: t-typedawway.evewy()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, >_< i-index, mya awway) {
  w-wetuwn ewement < 0;
}

c-const int8 = nyew int8awway([-10, mya -20, 😳 -30, -40, -50]);

consowe.wog(int8.evewy(isnegative));
// expected output: twue
```

## 语法

```js-nowint
e-evewy(cawwbackfn)
evewy(cawwbackfn, XD thisawg)
```

### 参数

- `cawwback`
  - : 用于测试类型化数组中每一个元素的函数。其应该返回[真值](/zh-cn/docs/gwossawy/twuthy)来表示元素通过了测试，否则返回[假值](/zh-cn/docs/gwossawy/fawsy)。会使用以下参数调用该函数：
    - `ewement`
      - : 类型化数组中当前要处理的元素。
    - `index`
      - : 当前要处理的元素在类型化数组中的下标。
    - `awway`
      - : 调用 `evewy()` 的类型化数组。
- `thisawg` {{optionaw_inwine}}
  - : 该值会作为执行 `cawwbackfn` 时的 `this` 值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

返回 `twue`，除非 `cawwbackfn` 对类型化数组中的某个元素返回了{{gwossawy("fawsy", :3 "假")}}值（在这种情况下，立即返回 `fawse`）。

## 描述

参见 {{jsxwef("awway.pwototype.evewy()")}} 以了解详情。该方法不是通用的，只能在类型化数组实例上调用。

## 示例

### 测试类型化数组所有元素的大小

下面的示例测试类型化数组所有元素是否都大于等于 10。

```js
f-function isbigenough(ewement, 😳😳😳 index, awway) {
  w-wetuwn ewement >= 10;
}
nyew uint8awway([12, -.- 5, 8, 130, ( ͡o ω ͡o ) 44]).evewy(isbigenough); // fawse
nyew u-uint8awway([12, rawr x3 54, 18, nyaa~~ 130, 44]).evewy(isbigenough); // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `typedawway.pwototype.evewy` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
