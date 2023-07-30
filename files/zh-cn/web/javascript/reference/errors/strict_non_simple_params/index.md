---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
---

{{jsSidebar("Errors")}}

## 信息

```plain
Firefox:
句法错误："use strict" 不允许在带默认参数的函数中
句法错误："use strict" 不允许在带 rest 参数的函数中
句法错误："use strict" 不允许在带解构参数的函数中

Chrome:
句法错误：非法的'use strict'指令，在带有非简单参数列表的函数中
```

## 错误类型

{{jsxref("SyntaxError")}}.

## 哪里出错了？

在函数顶部直接写了 `"use strict"` ，而该函数拥有以下的参数其中之一：

- {{jsxref("Functions/Default_parameters", "默认参数", "", 1)}}
- {{jsxref("Functions/rest_parameters", "剩余参数", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "解构赋值", "", 1)}}

根据 ECMAScript 规范，不允许在这些函数的顶部使用“use strict”指令。

## 示例

### 函数语句

在这种情况下，函数 sum 具有默认参数 a = 1 和 b = 2：

```js example-bad
function sum(a=1, b=2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

如果这个函数应该处于 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)，并且整个脚本或封装函数也可以在严格模式下，可以移动 "use strict" 指令到函数之外：

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### 函数表达式

函数表达式可以使用另一种解决方法：

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

这可以转换为以下表达式：

```js example-good
var sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### 箭头函数

如果箭头函数需要访问 `this`，则可以将箭头函数作为封闭函数来使用：

```js example-bad
var callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

这可以转换为以下表达式：

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## 参见

- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Statements/function", "函数语句", "", 1)}}
- {{jsxref("Operators/function", "函数表达式", "", 1)}}
- {{jsxref("Functions/Default_parameters", "默认参数", "", 1)}}
- {{jsxref("Functions/rest_parameters", "剩余参数", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "解构参数", "", 1)}}
