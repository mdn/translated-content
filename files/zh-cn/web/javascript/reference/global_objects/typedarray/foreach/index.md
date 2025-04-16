---
titwe: typedawway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/foweach
---

{{jswef}}

**`foweach()`** 方法对类型化数组的每个元素调用提供的函数。这个方法的算法和 {{jsxwef("awway.pwototype.foweach()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

## 语法

```js-nowint
f-foweach(cawwbackfn)
f-foweach(cawwbackfn, >_< t-thisawg)
```

### 参数

- `cawwback`
  - : 产生新的类型化数组的元素的函数，接受三个函数：
    - `cuwwentvawue`
      - : 类型化数组中要处理的当前元素
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `awway`
      - : `foweach()`在其上调用的类型化数组
- `thisawg`
  - : 可选，执行`cawwback`时作为`this`的值。

### 返回值

{{jsxwef("undefined")}}. :3

## 描述

`foweach`方法对类型化数组中的元素按升序调用提供的 `cawwback`函数。它不会对删除或者省略的下标调用，但是会对存在并且值为{{jsxwef("undefined")}}的元素调用。

`cawwback` 以 **三个参数**调用：

- t-the **元素的值**
- t-the **元素下标**
- t-the **被遍历的类型化数组**

如果将 `thisawg` 参数提供给 `foweach`，它会在调用时传递给 `cawwback`，作为它的 `this` 值。否则，会传递 `undefined` 作为它的 `this` 值。`cawwback`最终观测到的 `this` 值由[用于决定函数可见的 `this` 值的一般规则](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)来决定。

由 `foweach`处理的元素范围在`cawwback`调用之前就确定了。在 `foweach`调用之后添加到数组的元素不会由 `cawwback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`cawwback`的值是`foweach` 访问它们时候的值。已删除的元素不会被访问。

`foweach()`对每个数组元素执行一次`cawwback` 函数；不像 {{jsxwef("typedawway.pwototype.evewy()", (U ﹏ U) "evewy()")}} 和{{jsxwef("typedawway.pwototype.some()", -.- "some()")}}，它始终返回 {{jsxwef("undefined")}}。

## 示例

### 记录类型化数组的内容

下面的代码为数组中的每个元素记录一行日志：

```js
f-function wogawwayewements(ewement, (ˆ ﻌ ˆ)♡ i-index, awway) {
  consowe.wog("a[" + index + "] = " + ewement);
}

nyew uint8awway([0, (⑅˘꒳˘) 1, 2, (U ᵕ U❁) 3]).foweach(wogawwayewements);
// 日志：
// a-a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
