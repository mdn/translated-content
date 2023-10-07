---
title: 逻辑空赋值（??=）
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
---

{{jsSidebar("Operators")}}

逻辑空赋值运算符（`x ??= y`）仅在 `x` 是{{Glossary("nullish", "空值")}}（`null` 或 `undefined`）时对其赋值。

{{EmbedInteractiveExample("pages/js/expressions-logical-nullish-assignment.html")}}

## 语法

```js-nolint
expr1 ??= expr2
```

## 描述

### 短路评估

[空值合并](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)运算符从左至右求值，其使用以下规则测试是否可能进行语法短路求值：

`(结果非 null 或 undefined 的表达式) ?? expr` 被短路求值为左侧表达式，当左侧证明为既非 `null` 也非 `undefined`.

语法短路意味着 `expr` 部分**尚未被求值**，因此任何与其求值产生的相关副作用都不会生效（例如，如果 `expr` 是一个函数调用，则该调用将不会发生）。

逻辑空赋值的语法短路也意味着 `x ??= y` 等价于：

```js
x ?? (x = y);
```

而不等价于如下的表达式，因为其一定会发生赋值：

```js example-bad
x = x ?? y;
```

## 示例

### 使用逻辑空赋值

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [空值合并运算符（`??`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- {{Glossary("Nullish", "空值")}}
- {{Glossary("Truthy", "真值")}}
- {{Glossary("Falsy", "假值")}}
