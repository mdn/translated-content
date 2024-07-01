---
title: "SyntaxError: a declaration in the head of a for-of loop can't have an initializer"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
---

{{jsSidebar("Errors")}}

## 错误信息

```plain
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)

SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

[for...of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环的头部包含有初始化表达式。也就是对一个变量进行声明并赋值 |`for (var i = 0 of iterable)`|。这在 for-of 循环中是被禁止的。你想要的可能是允许包含初始化器的 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环形式。

## 示例

### 非法的 `for-of` 循环形式

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### 合法的 `for-of` 循环形式

需要将初始化器 (`value = 50`) 从`for-of` 循环的头部移除。或许你的本意是给每个值添加 50 的偏移量，在这种情况下，可以在循环体中进行添加。

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## 相关内容

- [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) – 在严格模式下也同样禁止使用初始化器 ([SyntaxError: for-in loop head declarations may not have initializers](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) – 在迭代时允许定义初始化器
