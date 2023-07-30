---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---

{{JSRef}}

**`Reflect.construct()`** 方法的行为有点像 [`new` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构造函数，相当于运行 `new target(...args)`.

## 语法

```plain
Reflect.construct(target, argumentsList[, newTarget])
```

### 参数

- `target`
  - : 被运行的目标构造函数
- `argumentsList`
  - : 类数组，目标构造函数调用时的参数。
- `newTarget` {{optional_inline}}
  - : 作为新创建对象的原型对象的 `constructor` 属性，参考 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 操作符，默认值为 `target`。

### `返回值`

以`target`（如果`newTarget`存在，则为`newTarget`）函数为构造函数，`argumentList`为其初始化参数的对象实例。

### 异常

如果 target 或者 newTarget 不是构造函数，抛出{{jsxref("TypeError")}},异常。

## 描述

`Reflect.construct`允许你使用可变的参数来调用构造函数，这和使用[new 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)搭配[对象展开符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)调用一样。

```js
var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args);
```

### `Reflect.construct()` vs `Object.create()`

`在新语法 Reflect`出现之前，是通过明确指定构造函数和原型对象（使用{{jsxref("Object.create()")}}）来创建一个对象的。

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

// 创建一个对象：
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// 与上述方法等效：
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

虽然两种方式结果相同，但在创建对象过程中仍一点不同。

当使用`Object.create()`和{{jsxref("Function.prototype.apply()")}}时，如果不使用`new`操作符调用构造函数，构造函数内部的`new.target`值会指向`undefined`。

当调用`Reflect.construct()`来创建对象，`new.target`值会自动指定到`target`（或者 newTarget，前提是 newTarget 指定了）。

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

var obj1 = Reflect.construct(OneClass, args);
// 输出：
//     OneClass
//     function OneClass { ... }

var obj2 = Reflect.construct(OneClass, args, OtherClass);
// 输出：
//     OneClass
//     function OtherClass { ... }

var obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// 输出：
//     OneClass
//     undefined
```

## 示例

### 使用 `Reflect.construct()`

```js
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Reflect")}}
- [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)
