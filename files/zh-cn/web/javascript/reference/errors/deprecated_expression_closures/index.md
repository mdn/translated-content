---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
Warning: expression closures are deprecated
```

## 错误类型

警告。JavaScript 引擎不会停止运行。

## 哪里出错了？

非标准化的[表达式闭包](/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_closures)语法（简写函数语法）已被废弃，不应该再被使用。该语法将会在 [Firefox bug 1083458](https://bugzil.la/1083458) 中全部移除，到时候用到该语法的脚本程序会报 SyntaxError 错误。

## 示例

### 被废弃的语法

表达式闭包从函数声明或者对象方法定义中省略了花括号或是 return 语句。

```js example-bad
var x = function() 1;

var obj = {
  count: function() 1
};
```

### 标准语法

将非标准化的表达式闭包语法转换成标准 ECMAScript 语法，可以添加花括号以及 return 语句。

```js example-good
var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
```

### 标准语法之箭头函数

另外，你可以选择使用箭头函数：

```js example-good
var x = () => 1;
```

### 标准语法之方法的简略写法

表达式闭包还会出现在 getter 与 setter 中，例如：

```js example-bad
var obj = {
  get x() 1,
  set x(v) this.v = v
};
```

根据 ES2015 中对于[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)的规定，上述写法可以转换成如下形式：

```js example-good
var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
```

## 相关内容

- [Expression closures](/zh-CN/docs/Web/JavaScript/Reference/Operators/Expression_closures)
- [Arrow functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Method definitions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)
