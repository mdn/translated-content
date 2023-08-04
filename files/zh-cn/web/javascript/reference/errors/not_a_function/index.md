---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
---

{{jsSidebar("Errors")}}JavaScript 异常"is not a function"会在试图去调用一个像函数一样的值，但是该值实际上不是函数时被抛出。

## 信息

```plain
TypeError: Object doesn't support property or method {x} (Edge)
TypeError: "x" is not a function
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

问题出在你试图去调用一个像函数一样的值，但是该值实际上不是函数，有时候你的代码需要调用一些函数，但是那种值并不能当作函数来被调用。

也许函数名称上有错别字？也许你正在调用 Object 对象没有这个方法？例如，在 JavaScript 中单纯的对象 (Object) 没有**map**函数，但是 JavaScript 数组 (Array) 对象却有这个函数。

再比如，在 JavaScript 中很多原生对象的内置方法需要你提供一个（回调）函数。所以你必须提供一个函数，以使这些方法正常工作：

- 当你在使用 {{jsxref("Array")}} 或 {{jsxref("TypedArray")}} 对象时：

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- 当你在使用 {{jsxref("Map")}} 和 {{jsxref("Set")}} 对象时：

  - {{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}}

## 示例

### 函数的名称错误

函数的名称拼写错误，这种情况是经常发生的：

```js example-bad
var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

正确的方法名应该是 `getElementById：`

```js example-good
var x = document.getElementById("foo");
```

### 调用 Object 类型中不存在的方法

对于某些特殊的方法，它只属于某些特定的原生对象中，你必须提供一个回调函数才能正常运行。例如：这里调用了一个 {{jsxref("Array.prototype.map()")}} 方法，但是这方法只能被 {{jsxref("Array")}} 对象所调用。

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

正确的做法，使用一个数组来代替：

```js example-good
var numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
```

### 函数与已有属性重名

当您在创建类时，可能会存在某个属性和某个方法的名称相同，当您在调用该函数时，编译器会认为该函数不存在。

```js example-bad
var Dog = function () {
  this.age = 11;
  this.color = "black";
  this.name = "Ralph";
  return this;
};

Dog.prototype.name = function (name) {
  this.name = name;
  return this;
};

var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
```

正确的做法是使用不同的变量名。

```js example-good
var Dog = function () {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; //Using this.dogName instead of .name
  return this;
};

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

### 使用括号进行乘法运算

在数学中，您可以将 2 × (3 + 5) 写为 2\*(3 + 5) 或者省略为 2(3 + 5).

使用后者时将会抛出错误：

```js example-bad
const sixteen = 2(3 + 5);
alert("2 x (3 + 5) is " + String(sixteen));
//Uncaught TypeError: 2 is not a function
```

您可以添加乘法运算符 `*` 来改正代码：

```js example-good
const sixteen = 2 * (3 + 5);
alert("2 x (3 + 5) is " + String(sixteen));
//2 x (3 + 5) is 16
```

### 正确地导入和导出模块

确保正确导入模块。

以下为一个示例模块 (`helpers.js`)

```plain
let helpers = function () { };

helpers.groupBy = function (objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  },
{});
}

export default helpers;
```

在 `App.js`中正确导入该模块：

```plain
import helpers from './helpers'
```

## 相关

- [Functions](/zh-CN/docs/Web/JavaScript/Reference/Functions)
