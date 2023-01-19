---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
---

{{JSRef}}

**`[@@iterator]()`** 方法返回一个新的 Iterator 对象，它遍历字符串的代码点，返回每一个代码点的字符串值。

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## 语法

```plain
string[Symbol.iterator]
```

### 返回值

一个新的 Iterator 对象。

## 示例

### 使用 `[@@iterator]()`

```js
var string = 'A\uD835\uDC68';

var strIter = string[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### 通过 `for..of` 使用 `[@@iterator]()`

```js
var string = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (var v of string) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Iteration protocols](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
