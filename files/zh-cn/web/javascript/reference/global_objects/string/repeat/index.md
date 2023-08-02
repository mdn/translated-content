---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
---

{{JSRef}}

**`repeat()`** 方法构造并返回一个新字符串，其中包含指定数量的所调用的字符串副本，这些副本连接在一起。

{{EmbedInteractiveExample("pages/js/string-repeat.html","shorter")}}

## 语法

```js-nolint
repeat(count)
```

### 参数

- `count`
  - : 介于 `0` 和 {{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "+Infinity")}} 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。

### 返回值

包含指定字符串的指定数量副本的新字符串。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `count` 为负值，或者 `count` 超过了字符串的最大长度，将抛出错误。

## 示例

### 使用 repeat()

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc'（count 将被转换为整数）
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc'（repeat() 是一个通用方法）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`core-js` 中 `String.prototype.repeat` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.concat()")}}
