---
title: "RangeError: repeat count must be less than infinity"
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
---

{{jsSidebar("Errors")}}

## 信息

```plain
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)

RangeError: Invalid count value (Chrome)
```

## 错误类型

{{jsxref("RangeError")}}

## 发生了什么？

代码中使用了 {{jsxref("String.prototype.repeat()")}}方法。它有一个计数参数，表示重复该字符串的次数。该参数必须在 0 及正 {{jsxref("Infinity")}} 之间，且不能为负数。该值的合法范围可以这样表示： \[0, +∞)。

其结果字符串也不能长于最大字符串，不同 JavaScript 引擎中可能有所不同。在 Firefox (SpiderMonkey) 里最大字符串大小为 2^28 -1 (`0xFFFFFFF`)。

## 示例

### 无效的

```js example-bad
"abc".repeat(Infinity); // RangeError
"a".repeat(2 ** 28); // RangeError
```

### 有效的

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
```

## See also

- {{jsxref("String.prototype.repeat()")}}
