---
title: function* 表达式
slug: Web/JavaScript/Reference/Operators/function*
---

{{jsSidebar("Operators")}}

**`function*`**关键字可以在表达式内部定义一个生成器函数。

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html")}}

## 语法

```plain
function* [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```

### 参数

- `name`
  - : 函数名。在声明*匿名函数*时可以省略。函数名称只是函数体中的一个本地变量。
- `paramN`
  - : 传入函数的一个参数名。一个函数最多有 255 个参数。
- `statements`
  - : 函数体。

## 描述

`function*`表达式和{{jsxref('Statements/function*', 'function* 声明')}}比较相似，并具有几乎相同的语法。`function*`表达式和`function*`声明之间主要区别就是函数名，即在创建匿名函数时，`function*`表达式可以省略函数名。阅读{{jsxref('Function', '函数')}}章节了解更多信息。

## 示例

下面的示例定义了一个未命名的生成器函数并把它赋值给`x`。函数产出它的传入参数的平方：

```js
var x = function* (y) {
  yield y * y;
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("GeneratorFunction")}} 对象
- [The Iterator protocol](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} 对象
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
