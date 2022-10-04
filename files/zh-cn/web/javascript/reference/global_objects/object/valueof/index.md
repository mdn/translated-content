---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回指定对象的原始值。

## 语法

```plain
object.valueOf()
```

### 返回值

返回值为该对象的原始值。

## 描述

JavaScript 调用 `valueOf` 方法将对象转换为原始值。你很少需要自己调用 `valueOf` 方法；当遇到要预期的原始值的对象时，JavaScript 会自动调用它。

默认情况下，`valueOf` 方法由 {{jsxref("Object")}} 后面的每个对象继承。每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值，则 `valueOf` 将返回对象本身。

JavaScript 的许多内置对象都重写了该函数，以实现更适合自身的功能需要。因此，不同类型对象的 valueOf() 方法的返回值和返回值类型均可能不同。

| **对象** | **返回值**                                               |
| -------- | -------------------------------------------------------- |
| Array    | 返回数组对象本身。                                       |
| Boolean  | 布尔值。                                                 |
| Date     | 存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。 |
| Function | 函数本身。                                               |
| Number   | 数字值。                                                 |
| Object   | 对象本身。这是默认情况。                                 |
| String   | 字符串值。                                               |
|          | Math 和 Error 对象没有 valueOf 方法。                    |

你可以在自己的代码中使用 `valueOf` 将内置对象转换为原始值。创建自定义对象时，可以覆盖 `Object.prototype.valueOf()` 来调用自定义方法，而不是默认 {{jsxref("Object")}} 方法。

### 覆盖自定义对象的 `valueOf` 方法

你可以创建一个取代 `valueOf` 方法的函数，你的方法必须不能传入参数。

假设你有个对象叫 `MyNumberType` 而你想为它创建一个 `valueOf` 方法。下面的代码为 `valueOf` 方法赋予了一个自定义函数：

```js
MyNumberType.prototype.valueOf = function() { return customPrimitiveValue; };
```

有了这样的一个方法，下一次每当 `MyNumberType` 要被转换为原始类型值时，JavaScript 在此之前会自动调用自定义的 `valueOf` 方法。

`valueOf` 方法一般都会被 JavaScript 自动调用，但你也可以像下面代码那样自己调用：

```js
myNumberType.valueOf()
```

> **备注：** 字符串上下文中的对象通过 {{jsxref("Object.toString", "toString()")}}方法转换，这与使用`valueOf`转换为原始字符串的 {{jsxref("String")}} 对象不同。所有对象都能转换成一个“`[object 类型]`”这种格式的字符串。但是很多对象不能转换为数字，布尔或函数。

## 示例

### 使用 `valueOf`

```js
// Array：返回数组对象本身
var array = ["ABC", true, 12, -5];
console.log(array.valueOf() === array);   // true

// Date：当前时间距 1970 年 1 月 1 日午夜的毫秒数
var date = new Date(2013, 7, 18, 23, 11, 59, 230);
console.log(date.valueOf());   // 1376838719230

// Number：返回数字值
var num = 15.26540;
console.log(num.valueOf());   // 15.2654

// 布尔：返回布尔值 true 或 false
var bool = true;
console.log(bool.valueOf() === bool);   // true

// new 一个 Boolean 对象
var newBool = new Boolean(true);
// valueOf() 返回的是 true，两者的值相等
console.log(newBool.valueOf() == newBool);   // true
// 但是不全等，两者类型不相等，前者是 boolean 类型，后者是 object 类型
console.log(newBool.valueOf() === newBool);   // false

// Function：返回函数本身
function foo(){}
console.log( foo.valueOf() === foo );   // true
var foo2 =  new Function("x", "y", "return x + y;");
console.log( foo2.valueOf() );
/*
ƒ anonymous(x,y
) {
return x + y;
}
*/

// Object：返回对象本身
var obj = {name: "张三", age: 18};
console.log( obj.valueOf() === obj );   // true

// String：返回字符串值
var str = "http://www.xyz.com";
console.log( str.valueOf() === str );   // true

// new 一个字符串对象
var str2 = new String("http://www.xyz.com");
// 两者的值相等，但不全等，因为类型不同，前者为 string 类型，后者为 object 类型
console.log( str2.valueOf() === str2 );   // false
```

### 改写 .prototype.valueof

```js
function MyNumberType(n) {
    this.number = n;
}

MyNumberType.prototype.valueOf = function() {
    return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
