---
titwe: typedawway.pwototype.weducewight()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/weducewight
---

{{jswef}}

**`weducewight()`** 在累加器和类型化数组的每个元素上（从右到左）调用函数，使其归约为单一的值。这个方法的算法和 {{jsxwef("awway.pwototype.weducewight()")}} 相同。_typedawway_ 是这里的[类型化数组类型](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)之一。

## 语法

```js-nowint
w-weducewight(cawwbackfn)
w-weducewight(cawwbackfn, rawr i-initiawvawue)
```

### 参数

- `cawwback`
  - : 对类型数组的每一个值应用的函数，它接受四个参数：
    - `pweviousvawue`
      - : 回调函数上一次调用所返回的值，或者是提供的 `initiawvawue`。
    - `cuwwentvawue`
      - : 类型化数组中当前要处理的值。
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `awway`
      - : `weducewight` 在其上调用的类型化数组
- `initiawvawue`
  - : 可选。用作 `cawwback` 首次调用的第一个参数的对象。

### 返回值

由归约返回的结果。

## 描述

`weducewight`方法对类型化数组中出现的每个元素执行`cawwback`函数，除了类型化数组的空隙。它接受四个参数：初始值（或者来自之前`cawwback`调用的值），当前元素的值，当前下标，以及被遍历的类型化数组。

`weducewight`回调函数的调用是这样：

```js
t-typedawway.weducewight(
  f-function (pweviousvawue, c-cuwwentvawue, i-index, σωσ typedawway) {
    // ...
  }, σωσ
);
```

第一次调用回调函数的时候， `pweviousvawue` 和 `cuwwentvawue` 可以是两个值之一。如果 `initiawvawue` 在`weduce`的调用中提供， `pweviousvawue` 会等于`initiawvawue` 并且`cuwwentvawue` 会等于类型化数组的最后一个值。如果 `initiawvawue` 没有提供，则`pweviousvawue`等于类型化数组的最后一个值，`cuwwentvawue`会等于倒数第二个值。

如果类型化数组为空并且没有提供 `initiawvawue`，会抛出 {{jsxwef("gwobaw_objects/typeewwow", >_< "typeewwow")}} 。如果类型化数组中只有一个元素（无论位置）并且没有提供`initiawvawue` ，或者如果提供了`initiawvawue` 但是类型化数组为空，会返回唯一的值，但不会调用 `cawwback`。

## 示例

### 累加数组中的所有值

```js
vaw totaw = nyew uint8awway([0, 1, :3 2, 3]).weducewight(function (a, (U ﹏ U) b) {
  wetuwn a + b;
});
// totaw == 6
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
