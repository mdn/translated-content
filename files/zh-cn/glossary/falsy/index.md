---
title: 假值
slug: Glossary/Falsy
---

{{GlossarySidebar}}

**假值**（**falsy**，有时写为 **falsey**）是在 {{Glossary("Boolean")}} 上下文中认定为 false 的值。

{{Glossary("JavaScript")}} 在需要用到布尔类型值的上下文中使用{{Glossary("Type_Conversion", "强制类型转换")}}将值转换为布尔值，例如{{Glossary("Conditional", "条件语句")}}和{{Glossary("Loop", "循环语句")}}。

下列表格提供了 JavaScript 的所有假值。

| 值                          | 说明                                                                                                                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                     | 关键字 [`false`](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字)。                                                                                                              |
| `0`                         | {{jsxref("Number")}} 零值（同理，`0.0`、`0x0` 也为零）。                                                                                                                                     |
| `-0`                        | {{jsxref("Number")}} 负零值（同理，`-0.0`、`-0x0` 也为负零）。                                                                                                                               |
| `0n`                        | {{jsxref("BigInt")}} 零值（`0x0n` 同理）。注意没有 {{jsxref("BigInt")}} 负零值——`0n` 的相反数还是 `0n`。                                                                                     |
| `""`、`''`、` `` `          | 空[字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)值。                                                                                                                   |
| {{Glossary("null")}}        | [null](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 值——任意值缺失。                                                                                                                 |
| {{Glossary("undefined")}}   | [undefined](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 值——初始值。                                                                                                      |
| {{Glossary("NaN")}}         | [NaN](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 值——非数值。                                                                                                                  |
| {{domxref("document.all")}} | 当且仅当对象具有 [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) 内部插槽时，它才是假值。这个槽只存在于 {{domxref("document.all")}} 中，不能用 JavaScript 来设置。 |

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

- {{Glossary("Truthy","真值")}}
- {{Glossary("Type_coercion", "强制转换")}}
- {{Glossary("Boolean","布尔值")}}
- [布尔值转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
