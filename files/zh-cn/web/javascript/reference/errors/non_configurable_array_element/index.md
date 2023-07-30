---
title: "TypeError: can't delete non-configurable array element"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Cannot delete property '2' of [object Array] (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

这个错误提示发生于当试图[缩短一个数组的长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length#Shortening_an_array)的时候，其中有元素是不可配置的（[non-configurable](/zh-CN/docs/Web/JavaScript/Data_structures#属性)）。正常情况下，缩短数组的长度，则超出限度的元素会被删除，而这里指的是这种操作失效的情况。

`configurable` 特性控制着属性是否可以从对象中删除，以及它的特性（除了 writable 之外）是否可以发生改变。

通常，使用[数组初始化语句](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Syntax)创建的对象是可配置的，而通过 {{jsxref("Object.defineProperty()")}} 创建的属性，默认则是不可配置的。

## 示例

### `通过 Object.defineProperty 创建的不可配置属性`

使用 {{jsxref("Object.defineProperty()")}} 且在没有明确将属性设定为可配置的情况下，默认可以创建不可配置属性。

```js example-bad
var arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

如果想要缩短数组长度的话，需要将其中的元素设置为可配置的。

```js example-good
var arr = [];
Object.defineProperty(arr, 0, { value: 0, configurable: true });
Object.defineProperty(arr, 1, { value: "1", configurable: true });

arr.length = 1;
```

### `密封的数组`

{{jsxref("Object.seal()")}} 函数会将数组中现存的所有元素标记为不可配置。

```js example-bad
var arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

（为了解决上述问题，）或者是移除 {{jsxref("Object.seal()")}} 调用，或者将数组拷贝一份。在拷贝数组的情况下，缩短备份数组的长度并不会修改原始数组的长度。

```js example-good
var arr = [1, 2, 3];
Object.seal(arr);

// Copy the initial array to shorten the copy
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
```

## 参见

- [\[\[Configurable\]\]](/zh-CN/docs/Web/JavaScript/Data_structures#属性)
- {{jsxref("Array.length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
