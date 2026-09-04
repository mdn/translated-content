---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---

静态方法 **`Reflect.apply()`** 通过指定的参数列表发起对目标 (target) 函数的调用。

{{InteractiveExample("JavaScript Demo: Reflect.apply()")}}

```js interactive-example
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// Expected output: 1

console.log(
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]),
);
// Expected output: "hello"

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index,
);
// Expected output: 4

console.log(Reflect.apply("".charAt, "ponies", [3]));
// Expected output: "i"
```

## 语法

```plain
Reflect.apply(target, thisArgument, argumentsList)
```

### 参数

- target
  - : 目标函数。
- thisArgument
  - : target 函数调用时绑定的 this 对象。
- argumentsList
  - : target 函数调用时传入的实参列表，该参数应该是一个类数组的对象。

### 返回值

返回值是调用完带着指定参数和 `this` 值的给定的函数后返回的结果。

### 异常

如果 `target` 对象不可调用，抛出 {{jsxref("TypeError")}}。

## 描述

该方法与 ES5 中{{jsxref("Function.prototype.apply()")}}方法类似：调用一个方法并且显式地指定 `this` 变量和参数列表 (arguments) ，参数列表可以是数组，或类似数组的对象。

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

使用 `Reflect.apply` 方法会使代码更加简洁易懂。

## 使用示例

### `Reflect.apply()`

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关连接

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
