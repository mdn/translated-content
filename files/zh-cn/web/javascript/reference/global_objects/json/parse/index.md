---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

静态方法 **`JSON.parse()`** 用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。可以提供一个可选的 _reviver_ 函数，用于在返回结果对象之前对其进行转换。

{{InteractiveExample("JavaScript 示例：JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// 期望输出：42

console.log(obj.result);
// 期望输出：true
```

## 语法

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### 参数

- `text`
  - : 要被解析成 JavaScript 值的字符串，关于 JSON 的语法格式，请参考：{{jsxref("JSON")}}。
- `reviver` {{optional_inline}}
  - : 如果是函数，则规定了最初由解析产生的每个值在返回前的转换方式。不可调用的值将被忽略。调用该函数时需要输入以下参数：
    - `key`
      - : 与值相关的键。
    - `value`
      - : 解析产生的值。
    - `context` {{optional_inline}}
      - : 上下文对象，用于保存与当前正在恢复的表达式相关的状态。每次调用 reviver 函数时，它都是一个新对象。只有在恢复原始值时才会传递该对象，而当 `value` 是对象或数组时则不会传递。它包含以下属性：
        - `source`
          - : 代表此值的原始 JSON 字符串。

### 返回值

与给定的 JSON `text` 相对应的 {{jsxref("Object")}}、{{jsxref("Array")}}、string、number、boolean 或者 `null` 值。

### 异常

- {{jsxref("SyntaxError")}}
  - : 若传入的字符串不是合法的 JSON，则会抛出此异常。

## 描述

`JSON.parse()`会根据 [JSON 语法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#完整的_json_语法)解析 JSON 字符串，然后像 JavaScript 表达式一样对字符串进行求值。只有在处理 `"__proto_"` 键时，JSON 文本才会代表与 JavaScript 表达式不同的值，请参见[对象字面值与 JSON](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#对象字面语法与_json_的对比)。

### reviver 参数

如果指定了 `reviver`，那么在返回之前，将对解析计算出的值进行*转换*。具体来说，计算值及其所有属性（以[深度优先](https://zh.wikipedia.org/wiki/深度优先搜索)的方式，从嵌套最多的属性开始，直到原始值本身）都会在 `reviver` 中单独运行。

调用 `reviver` 时，包含被处理属性的对象将作为 `this`（除非将 `reviver` 定义为箭头函数，在这种情况下没有单独的 `this` 绑定）和两个参数：`key` 和 `value`，分别代表字符串形式的属性名称（即使是数组）和属性值。对于原始值，会传递一个额外的 `context` 参数，其中包含该值的源文本。如果 `reviver` 函数返回 {{jsxref("undefined")}}（或不返回任何值，例如，在函数执行结束时），则会从对象中删除该属性。否则，属性将被重新定义为返回值。如果 `reviver` 只转换某些值而不转换其他值，请务必按原样返回所有未转换的值，否则这些值将从生成的对象中删除。

与 {{jsxref("JSON.stringify()")}} 的 `replacer` 参数类似，对于数组和对象，`reviver` 最后一次调用的是以空字符串作为 `key`、以根对象作为 `value` 的根值。对于其他有效的 JSON 值，`reviver` 的工作原理与此类似，即调用一次空字符串作为 `key`，值本身作为 `value`。

如果从 `reviver` 返回另一个值，该值将完全取代最初解析的值。这甚至适用于根值。例如：

```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) =>
  typeof value === "object" ? undefined : value,
);

console.log(transformedObj1); // undefined
```

我们无法通用地解决这个问题。你无法专门处理 `key` 为空字符串的情况，因为 JSON 对象也可能包含空字符串的键。在实现 reviver 时，需要非常精确地知道每个键需要进行哪种转换。

请注意，`reviver` 是在解析数值后运行的。因此，举例来说，JSON 文本中的数字已经被转换为 JavaScript 数字，在此过程中可能会丢失精度。一种不损失精度地传输大型数字的方法是将其序列化为字符串，然后将其还原为 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)，或其他适当的任意精度格式。

还可以使用 `context.source` 属性访问代表值的原始 JSON 源文本，如下所示：

```js
const bigJSON = '{"gross_gdp": 12345678901234567890}';
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  if (key === "gross_gdp") {
    // 忽略值，它已经损失了精度
    return BigInt(context.source);
  }
  return value;
});
```

## 示例

### 使用 `JSON.parse()`

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### 使用 `reviver` 参数

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // 为数值返回 value * 2
      : value, // 其他值返回原值
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### 在与 JSON.stringify() 的 replacer 配对时使用 reviver

为了使一个值能正确地往返（即被反序列化为相同的原始对象），序列化过程必须保留类型信息。例如，可以使用 {{jsxref("JSON.stringify()")}} 的 `replacer` 参数来实现这一目的：

```js
// Map 通常被序列化为没有属性的对象。
// 我们可以使用替换器来指定要序列化的条目。
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"one"],[2,"two"],[3,"three"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  Array.isArray(value) && value.every(Array.isArray) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

由于 JSON 没有注释类型元数据的语法空间，为了恢复非纯对象的值，必须考虑以下方法之一：

- 将整个对象序列化为字符串，并在其前缀上类型标记。
- 根据数据结构进行“猜测”（例如，由两个成员组成的数组）
- 如果有效载荷的形状是固定的，则根据属性名称进行“猜测”（例如，所有名为 `registry` 的属性都包含 `Map` 对象）。

### 非法 JSON

当 `JSON.parse` 接收到不符合 JSON 语法的字符串时，它会抛出一个 `SyntaxError`。

数组和对象在 JSON 中不能有[尾随逗号](/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)：

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
// SyntaxError: Unexpected token ] in JSON at position 13

JSON.parse('{"foo": 1, }');
// SyntaxError: Unexpected token } in JSON at position 12
```

JSON 字符串必须用双引号（而不是单引号）分隔：

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: Unexpected token ' in JSON at position 1

JSON.parse("'string'");
// SyntaxError: Unexpected token ' in JSON at position 0
```

如果要在 JavaScript 字符串字面量中写入 JSON，则应使用单引号对 JavaScript 字符串字面量进行分隔，或使用双引号对 JSON 字符串进行分隔：

```js-nolint example-good
JSON.parse('{"foo": 1}'); // OK
JSON.parse("{\"foo\": 1}"); // OK
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中对现代 `JSON.parse` 行为（reviver 的 `context` 参数）的 Polyfill](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON.stringify()")}}
