---
title: JSON.rawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`JSON.rawJSON()`** 静态方法会创建一个包含 JSON 文本片段的“原始 JSON”对象。将原始 JSON 对象序列化为 JSON 时，会将其视为已经是 JSON 文本。该文本必须是有效的 JSON。

## 语法

```js-nolint
JSON.rawJSON(string)
```

### 参数

- `string`
  - : JSON 文本。必须是表示**原始值**的有效 JSON。

### 返回值

一个可用于创建 JSON 文本的对象，其内容与提供的 `string` 完全相同，且不会在字符串两侧添加引号。此对象[具有 `null` 原型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，并且[被冻结](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)（因此不会因任何原始值转换而意外地被序列化为普通对象），并具有以下属性：

- `rawJSON`
  - : 提供的原始 JSON `string`。

此外，它还具有一个[私有字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)，用于将自身标记为原始 JSON 对象。因此 {{jsxref("JSON.stringify()")}} 和 {{jsxref("JSON.isRawJSON()")}} 可以识别它。

### 异常

- {{jsxref("SyntaxError")}}
  - : 如果 `string` 不是有效的 JSON，或者表示一个对象或数组，则抛出该异常。

## 描述

原始 JSON 对象可以看作一种不可变的原子数据结构，类似于各种[原始值](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#原始值)。它不是普通对象，除原始 JSON 文本外不包含其他数据。它可用于“预序列化”数据，以生成 `JSON.stringify` 因各种原因无法直接生成的格式。最常见的用例是解决浮点数精度丢失问题。例如：

```js
JSON.stringify({ value: 12345678901234567890 });
// {"value":12345678901234567000}
```

该值已不再与原始数字完全相等！这是因为 JavaScript 使用浮点数表示所有数字，因此无法精确表示所有整数。数字字面量 `12345678901234567890` 在被 JavaScript 解析时，就已经被舍入为最接近的可表示数字。

如果不使用 `JSON.rawJSON`，就无法让 `JSON.stringify` 输出数字字面量 `12345678901234567890`，因为根本不存在与之对应的 JavaScript 数值。使用原始 JSON，你可以直接指定 `JSON.stringify()` 应将某个值序列化成什么内容：

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// {"value":12345678901234567890}
```

更多示例请参见[无损数字序列化](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#使用_json_数字)。

请注意，尽管我们向 `JSON.rawJSON()` 传入了一个字符串，它在最终生成的 JSON 中仍会成为数字。这是因为该字符串表示的是原样输出的 JSON 文本。如果要序列化字符串，则应向 `JSON.rawJSON()` 传入一个带引号的字符串值：

```js
const rawJSON = JSON.rawJSON('"Hello world"');
JSON.stringify({ value: rawJSON });
// {"value":"Hello world"}
```

`JSON.rawJSON` 允许你插入任意 JSON 文本，但不能创建无效的 JSON。JSON 语法不允许的内容，`JSON.rawJSON()` 同样不允许：

```js example-bad
const rawJSON = JSON.rawJSON('"Hello\nworld"'); // 语法错误，因为 JSON 字符串中不允许换行符
```

此外，你不能使用 `JSON.rawJSON()` 创建 JSON 对象或数组。

## 示例

### 使用 JSON.rawJSON() 创建不同类型的 JSON 表达式

```js
const numJSON = JSON.rawJSON("123");
const strJSON = JSON.rawJSON('"Hello world"');
const boolJSON = JSON.rawJSON("true");
const nullJSON = JSON.rawJSON("null");

console.log(
  JSON.stringify({
    age: numJSON,
    message: strJSON,
    isActive: boolJSON,
    nothing: nullJSON,
  }),
);

// {"age":123,"message":"Hello world","isActive":true,"nothing":null}
```

但是，你不能使用 `JSON.rawJSON()` 创建 JSON 对象或数组：

```js example-bad
const arrJSON = JSON.rawJSON("[1, 2, 3]");
const objJSON = JSON.rawJSON('{"a": 1, "b": 2}');
// SyntaxError
```

### 使用 JSON.rawJSON() 创建转义字符串字面量

除了数字，只有另一种类型的 JavaScript 值与 JSON 文本不是一一对应的：字符串。将字符串序列化为 JSON 时，除不能出现在 JSON 字符串字面量中的码点（例如换行符）外，其他码点都会按原样输出：

```js
console.log(JSON.stringify({ value: "\ud83d\ude04" })); // {"value":"😄"}
```

这可能并不理想，因为接收此字符串的一方可能会以不同方式处理 Unicode。为了提高互操作性，你可以显式指定要序列化的字符串使用转义序列：

```js
const rawJSON = JSON.rawJSON('"\\ud83d\\ude04"');
const objStr = JSON.stringify({ value: rawJSON });
console.log(objStr); // {"value":"\ud83d\ude04"}
console.log(JSON.parse(objStr).value); // 😄
```

请注意，`rawJSON` 中的两个反斜线实际上表示一个反斜线字符。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `JSON.rawJSON` 的 polyfill](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.isRawJSON()")}}
- {{jsxref("JSON.stringify()")}}
