---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
---

{{JSRef}}

**`map()`** 方法对类型化数组的每个元素调用提供的函数，并使用结果来创建新的类型化数组。这个方法的算法和 {{jsxref("Array.prototype.map()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 产生新的类型化数组的元素的函数，接受三个函数：
    - `currentValue`
      - : 类型化数组中要处理的当前元素
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `array`
      - : `map`在其上调用的类型化数组
- `thisArg`
  - : 可选，执行`callback`时作为`this`的值。

### 返回值

新的类型化数组

## 描述

`map`方法对类型化数组中的元素调用提供的 `callback`函数，按照顺序，并且会从结果构造新的类型化数组。 `callback` 只对拥有值的类型化数组下标调用。它不会对未定义的，被删除的或者没有赋值的下标调用。

`callback` 以三个参数调用：元素的值，元素下标，和被遍历的类型化数组。

如果将`thisArg`参数提供给`map`，它会在调用时传递给`callback`，作为它的 `this`值。否则，会传递`undefined` 作为它的`this` 值。 `callback`最终观测到的`this`值由 [用于决定函数可见的`this`值的一般规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)来决定。

`map` 不改变在其上调用的类型化数组（虽然如果调用了`callback`可能会这样做）。

由 `map`处理的元素范围在`callback`调用之前就确定了。在 `map`调用之后添加到数组的元素不会由 `callback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`callback`的值是`map` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 将类型数组映射被平方根的类型数组

下面的代码接受一个类型数组，并创建一个新的类型数组，含有第一个类型数组中元素的平方根。

```js
var numbers = new Uint8Array([1, 4, 9]);
var roots = numbers.map(Math.sqrt);
// roots is now: Uint8Array [1, 2, 3],
// numbers is still Uint8Array [1, 4, 9]
```

### 使用含有参数的函数来映射类型数组

下面的代码展示了，当使用需要一个参数的函数时，`map`的工作方式。在`map`遍历原始数组的过程中，参数会自动赋值为类型化数组的每个元素。

```js
var numbers = new Uint8Array([1, 4, 9]);
var doubles = numbers.map(function (num) {
  return num * 2;
});
// doubles is now Uint8Array [2, 8, 18]
// numbers is still Uint8Array [1, 4, 9]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("Array.prototype.map()")}}
