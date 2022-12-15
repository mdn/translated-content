---
title: delete 操作符
slug: Web/JavaScript/Reference/Operators/delete
---

{{jsSidebar("Operators")}}

**`delete` 操作符**用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## 语法

```js
delete object.property
delete object['property']
```

> **备注：** 该语法允许在 `delete` 操作符之后使用更广泛的表达式，但只有上述形式才能产生有意义的行为。

### 参数

- `object`
  - : 对象的名称，或计算结果为对象的表达式。
- `property`
  - : 要删除的属性。

### 返回值

对于所有情况都是 `true`，除非属性是一个{{jsxref("Object.hasOwnProperty", "自身的")}} {{jsxref("Errors/Cant_delete", "不可配置")}}的属性，在这种情况下，非严格模式返回 `false`。

### 异常

- {{jsxref("TypeError")}}
  - : 如果属性是自身不可配置的属性且处于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中，则会抛出该异常。
- {{jsxref("ReferenceError")}}
  - : 当 `object` 是父对象（[`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)）时抛出。

## 描述

与通常的看法不同，`delete`操作符与直接释放内存**无关**。内存管理 通过断开引用来间接完成的，查看[内存管理](/zh-CN/docs/Web/JavaScript/Memory_Management)页可了解详情。

**`delete`** 操作符会从某个对象上移除指定属性。成功删除的时候会返回 `true`，否则返回 `false`。

但是，以下情况需要重点考虑：

- 如果你试图删除的属性不存在，那么 delete 将不会起任何作用，但仍会返回 true
- 如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性（也就是说，delete 操作只会在自身的属性上起作用）
- 任何使用 {{jsxref("Statements/var","var")}} 声明的属性不能从全局作用域或函数的作用域中删除。

  - 这样的话，delete 操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
  - 除了在全局作用域中的函数不能被删除，在对象 (object) 中的函数是能够用 delete 操作删除的。

- 任何用{{jsxref("Statements/let","let")}}或{{jsxref("Statements/const","const")}}声明的属性不能够从它被声明的作用域中删除。
- 不可设置的 (Non-configurable) 属性不能被移除。这意味着像{{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}}内置对象的属性以及使用{{jsxref("Object.defineProperty()")}}方法设置为不可设置的属性不能被删除。

下面的代码块给出了一个简单的例子：

```js
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// 当试着删除一个不存在的属性时
// 同样会返回 true
console.log(delete Employee.salary); // returns true
```

### 不可配置属性

当一个属性被设置为不可设置，delete 操作将不会有任何效果，并且会返回 false。在严格模式下会抛出语法错误（{{jsxref("SyntaxError")}}）。

```js
var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});

console.log(delete Employee.name);  // returns false
```

{{jsxref("Statements/var","var")}}, {{jsxref("Statements/let","let")}}以及{{jsxref("Statements/const","const")}}创建的不可设置的属性不能被 delete 操作删除。

```js
var nameOther = 'XYZ';

// 通过以下方法获取全局属性：
Object.getOwnPropertyDescriptor(window, 'nameOther');

// 输出：Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// 因为“nameOther”使用 var 关键词添加，
// 它被设置为不可设置（non-configurable）
delete nameOther;   // return false
```

在严格模式下，这样的操作会抛出异常。

### **严格模式与非严格模式的对比**

在严格模式下，如果对一个变量的直接引用、函数的参数或者函数名使用 delete 操作，将会抛出语法错误（{{jsxref("SyntaxError")}}）。因此，为避免严格模式下的语法错误，必须以`delete object.property`或`delete object['property']`的形式使用 delete 运算符。

```js
Object.defineProperty(globalThis, 'variable1', { value: 10, configurable: true, });
Object.defineProperty(globalThis, 'variable2', { value: 10, configurable: false, });

console.log(delete variable1); // true

// SyntaxError in strict mode.
console.log(delete variable2); // false
```

```js
function func(param) {
  // SyntaxError in strict mode.
  console.log(delete param); // false
}

// SyntaxError in strict mode.
console.log(delete func); // false
```

> **备注：** 下文在英文原版中已删除

任何使用 var 声明的变量都会被标记为不可设置的。在下面的例子中，salary 是不可设置的以及不能被删除的。在非严格模式下，下面的 delete 操作将会返回 false。

```js
function Employee() {
  delete salary;
  var salary;
}

Employee();
```

让我们来看看相同的代码在严格模式下会有怎样的表现。会抛出一个语法错误（`SyntaxError`）而不是返回 false。

```js
"use strict";

function Employee() {
  delete salary;  // SyntaxError
  var salary;
}

// 相似的，任何对任何函数
// 直接使用 delete 操作将会抛出语法错误。

function DemoFunction() {
  //some code
}

delete DemoFunction; // SyntaxError
```

## 示例

```js
// 在全局作用域创建 adminName 属性
adminName = 'xyz';

// 在全局作用域创建 empCount 属性
// 因为我们使用了 var，它会标记为不可配置。同样 let 或 const 也是不可配置的。
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName 是全局作用域的一个属性。
// 因为它不是用 var 创建的，所在可以删除。
// 因此，它是可配置的。
delete adminName;       // 返回 true

// 相反，empCount 是不可配置的，
// 因为创建它时使用了 var。
delete empCount;       // 返回 false

// delete 可用于删除对象的属性
delete EmployeeDetails.name; // 返回 true

// 甚至属性不存在，它也会返回 "true"
delete EmployeeDetails.salary; // 返回 true

// delete 对内建静态属性不起作用
delete Math.PI; // 返回 false

// EmployeeDetails 是全局作用域的一个属性。
// 因为定义它的时候没有使用 "var"，它被标记为可配置。
delete EmployeeDetails;   // 返回 true

function f() {
  var z = 44;

  // delete 对局部变量名不起作用
  delete z;     // 返回 false
}
```

### `delete` 和原型链

在下面的示例中，我们删除一个对象的自己的属性，而原型链上具有相同名称的属性可用：

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// 返回 true，因为删除的是 foo 对象的自身属性
delete foo.bar;

// foo.bar 仍然可用，因为它在原型链上可用。
console.log(foo.bar);   //42

// 从原型上删除属性
delete Foo.prototype.bar; //true

// 由于已删除“bar”属性，因此不能再从 Foo 继承它。
console.log(foo.bar);    //undefined
```

### 删除数组元素

当你删除一个数组元素时，数组的长度不受影响。即便你删除了数组的最后一个元素也是如此。

当用 `delete` 操作符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 `delete` 删除了 `trees[3]`。

```js
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
   // 这里不会执行
}
```

如果你想让一个数组元素继续存在但是其值是 `undefined`，那么可以使用将 `undefined` 赋值给这个元素而不是使用 `delete`。下面的例子中，trees\[3] 被赋值为 `undefined`，但该元素仍然存在。

```js
var trees = ["redwood","bay","cedar","oak","maple"];
trees[3] = undefined;
if (3 in trees) {
   // 这里会被执行
}
```

如果你想通过改变数组的内容来移除一个数组元素，请使用{{jsxref("Array.splice()", "splice()")}} 方法。在下面的例子中，通过使用{{jsxref("Array.splice()", "splice()")}}，将 trees\[3] 从数组中移除。

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 跨浏览器提示

尽管 ECMAScript 使得对象的迭代顺序依赖于实现，但似乎所有主流浏览器都支持基于最早添加的属性（至少对于不在原型上的属性）的迭代顺序（译注：ES5 标准取消了属性遍历的顺序的规定）。但是，在 IE 中，使用 `delete` 删除一个属性后，奇怪的事情发生了。在 IE 中，如果被删除的属性重新被添加，那么遍历时，该属性的顺序会在上次删除前的那个位置，而不是出现在遍历的最后一个。

如果您想在跨浏览器的环境中使用有序的关联数组，请使用{{jsxref("Map")}}对象（如果有），或使用两个单独的数组来模拟（一个用于键，另一个用于 值），或者建立一个由单一属性的对象组成的数组等。

## 参见

- [深入分析 delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
