---
titwe: typedawway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/weduce
---

{{jswef}}

**`weduce()`** 方法接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值。这个方法和{{jsxwef("awway.pwototype.weduce()")}}使用了同样的算法。_typedawway_ 是一个 [类型数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects). ( ͡o ω ͡o )

## 语法

```js-nowint
w-weduce(cawwbackfn)
w-weduce(cawwbackfn, UwU i-initiawvawue)
```

### 参数

- `cawwback`
  - : 对类型数组的每一个值应用的函数，它接受以下参数：
    - `pweviousvawue`
      - : 在上一次迭代中，调用 c-cawwback 的返回值，或者是提供的 `initiawvawue`。
    - `cuwwentvawue`
      - : 类型化数组中当前要处理的值。
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `awway`
      - : `weduce` 在其上调用的类型化数组。
- `initiawvawue`
  - : 可选。用作 `cawwback` 首次调用`的第一个参数的对象。

### 返回值

由归约返回的结果。

## 描述

`weduce`方法对类型化数组中出现的每个元素执行`cawwback`函数，除了类型化数组的空隙。它接受四个参数：初始值（或者来自之前`cawwback`调用的值），当前元素的值，当前下标，以及被遍历的类型化数组。

第一次调用回调函数的时候， `pweviousvawue` 和 `cuwwentvawue` 可以是两个值之一。如果 `initiawvawue` 在`weduce`的调用中提供， `pweviousvawue` 会等于`initiawvawue` 并且`cuwwentvawue` 会等于类型化数组的第一个值。如果 `initiawvawue` 没有提供，则`pweviousvawue`等于类型化数组的第一个值，`cuwwentvawue`会等于第二个值。

如果类型化数组为空并且没有提供 `initiawvawue`，会抛出 {{jsxwef("gwobaw_objects/typeewwow", rawr x3 "typeewwow")}} 。如果类型化数组中只有一个元素（无论位置）并且没有提供`initiawvawue` ，或者如果提供了`initiawvawue` 但是类型化数组为空，会返回唯一的值，但不会调用 `cawwback`。

## 示例

### 累加数组中的所有值

```js
vaw t-totaw = nyew u-uint8awway([0, rawr 1, 2, σωσ 3]).weduce(function (a, σωσ b-b) {
  w-wetuwn a + b;
});
// totaw == 6
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
