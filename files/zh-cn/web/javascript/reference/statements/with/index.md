---
title: with
slug: Web/JavaScript/Reference/Statements/with
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> **备注：** 不建议使用 `with` 语句，因为它可能是混淆错误和兼容性问题的根源。有关详细信息，请参阅下面“描述”一节中的“语意不明的弊端”部分。

**`with`** 语句扩展一个语句的作用域链。

## 语法

```js-nolint
with (expression)
  statement
```

- `expression`
  - : 将给定的表达式添加到在评估语句时使用的作用域链上。表达式周围的括号是必需的。
- `statement`
  - : 任何语句。要执行多个语句，请使用一个[块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句 (`{ ... }`) 对这些语句进行分组。

## 描述

JavaScript 查找某个未使用命名空间的变量时，会通过作用域链来查找，作用域链是跟执行代码的 context 或者包含这个变量的函数有关。'with'语句将某个对象添加到作用域链的顶部，如果在 statement 中有某个未使用命名空间的变量，跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出{{jsxref("ReferenceError")}}异常。

> **备注：** 不推荐使用`with`，在 ECMAScript 5 [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中该标签已被禁止。推荐的替代方案是声明一个临时变量来承载你所需要的属性。

### 性能方面的利与弊

**利**：`with` 语句可以在不造成性能损失的情況下，减少变量的长度。其造成的附加计算量很少。使用 'with' 可以减少不必要的指针路径解析运算。需要注意的是，很多情況下，也可以不使用 with 语句，而是使用一个临时变量来保存指针，来达到同样的效果。

**弊**：`with` 语句使得程序在查找变量值时，都是先在指定的对象中查找。所以那些本来不是这个对象的属性的变量，查找起来将会很慢。如果是在对性能要求较高的场合，'with' 下面的 statement 语句中的变量，只应该包含这个指定对象的属性。

### 语义不明的弊端

**弊端**：`with` 语句使得代码不易阅读，同时使得 JavaScript 编译器难以在作用域链上查找某个变量，难以决定应该在哪个对象上来取值。请看下面的例子：

```js
function f(x, o) {
  with (o) print(x);
}
```

`f`被调用时，`x`有可能能取到值，也可能是`undefined`，如果能取到，有可能是在 o 上取的值，也可能是函数的第一个参数`x`的值（如果 o 中没有这个属性的话）。如果你忘记在作为第二个参数的对象 o 中定义`x`这个属性，程序并不会报错，只是取到另一个值而已。

**弊端**：使用 `with` 语句的代码，无法向前兼容，特別是在使用一些原生数据类型的时候。看下面的例子：

```js
function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
```

如果是在 ECMAScript 5 环境调用`f([1,2,3], obj)`，则`with`语句中变量`values`将指向函数的第二个参数`values`。但是，ECMAScript 6 标准给[`Array.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)添加了一个新属性`values`，所有数组实例将继承这个属性。所以在 ECMAScript 6 环境中，`with`语句中变量`values`将指向`[1,2,3].values`。

## 示例

### 使用 with 语句

下面的`with`语句指定[`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)对象作为默认对象。`with`语句里面的变量，分別指向`Math`对象的[`PI`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) 、`cos` 和 [`sin`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) 函数，不用在前面添加命名空间。后续所有引用都指向`Math`对象。

```js
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/block", "block")}}
- [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
