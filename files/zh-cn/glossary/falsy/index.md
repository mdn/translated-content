---
title: 假值
slug: Glossary/Falsy
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**假值**（**falsy**，有时写为 **falsey**）是在{{Glossary("Boolean", "布尔")}}上下文中认定为 false 的值。

{{Glossary("JavaScript")}} 在需要用到布尔类型值的上下文中使用{{Glossary("Type_Conversion", "类型转换")}}将值转换为布尔值，例如{{Glossary("Conditional", "条件语句")}}和{{Glossary("Loop", "循环语句")}}。

下列表格提供了 JavaScript 的所有假值。

| 值                          | 类型      | 描述                                                                                                            |
| --------------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null")}}        | Null      | 关键词 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) — 任何值的缺失                             |
| {{Glossary("undefined")}}   | Undefined | [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) — 原始类型值                       |
| `false`                     | Boolean   | 关键字 [`false`](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)。                                 |
| {{Glossary("NaN")}}         | Number    | [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) — 不是一个数字                                 |
| `0`                         | Number    | {{jsxref("Number")}} 零，也包括 `0.0`、`0x0` 等。                                                               |
| `-0`                        | Number    | {{jsxref("Number")}} 负的零，也包括 `-0.0`、`-0x0` 等。                                                         |
| `0n`                        | BigInt    | {{jsxref("BigInt")}} 零，也包括 `0x0n` 等。需要注意没有 {{jsxref("BigInt")}} 负的零 —— `0n` 的相反数还是 `0n`。 |
| `""`                        | String    | 空[字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)值，也包括 `''` 和 ` `` `。               |
| {{domxref("document.all")}} | Object    | 唯一具有假值的 JavaScript 对象是内置的 {{domxref("document.all")}}。                                            |

`null` 和 `undefined` 也都是[空值](/zh-CN/docs/Glossary/Nullish)。

## 示例

JavaScript 中*假*值的例子（在布尔值上下文中被转换为 false，从而*绕过*了 `if` 代码块）：

```js
if (false) {
  // 执行不到这里
}

if (null) {
  // 执行不到这里
}

if (undefined) {
  // 执行不到这里
}

if (0) {
  // 执行不到这里
}

if (-0) {
  // 执行不到这里
}

if (0n) {
  // 执行不到这里
}

if (NaN) {
  // 执行不到这里
}

if ("") {
  // 执行不到这里
}
```

### 逻辑与操作符 &&

如果第一个对象是假值，则返回那个对象：

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## 参见

- {{Glossary("Truthy", "真值")}}
- {{Glossary("Type_coercion", "类型转换")}}
- {{Glossary("Boolean", "布尔值")}}
- [布尔值转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean#布尔值转换)
