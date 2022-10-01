---
title: TypedArray.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
---

{{JSRef}}

@@iterator 的初始值是和 {{jsxref("TypedArray.prototype.values()", "values")}} 属性的初始值相同的对象。

## 语法

```plain
arr[Symbol.iterator]()
```

### 返回值

数组的 **迭代器** 函数，通常是 {{jsxref("TypedArray.prototype.values()", "values()")}}函数。

## 示例

### 使用`for...of` 循环的迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
// 你的浏览器必须支持 for..of 循环
// 以及 for 循环中的 let 区域变量
for (let n of arr) {
  console.log(n);
}
```

### 备选迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
