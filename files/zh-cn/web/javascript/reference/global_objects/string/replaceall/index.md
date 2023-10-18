---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
---

{{JSRef}}

**`replaceAll()`** 方法返回一个新字符串，其中所有匹配 `pattern` 的部分都被替换为 `replacement`。`pattern` 可以是一个字符串或一个 {{jsxref("RegExp")}}，`replacement` 可以是一个字符串或一个在每次匹配时调用的函数。原始字符串保持不变。

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## 语法

```js-nolint
replaceAll(pattern, replacement)
```

### 参数

- `pattern`

  - : 可以是一个字符串或一个具有 [`Symbol.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 方法的对象，典型的例子是[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。任何没有 `Symbol.replace` 方法的值都将被强制转换为字符串。

    如果 `pattern` [是一个正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)，则必须设置全局（`g`）标志，否则会抛出 {{jsxref("TypeError")}}。

- `replacement`
  - : 可以是一个字符串或一个函数。替换字符串的语义与 [`String.prototype.replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 相同。

### 返回值

返回一个新字符串，其中所有匹配 `pattern` 的部分都被替换为 `replacement`。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `pattern` 是一个[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)，并且没有设置全局（`g`）标志（其 [`flags`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) 属性不包含 `"g"`），则会抛出该异常。

## 描述

该方法不会修改调用它的字符串。它返回一个新字符串。

与 [`replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 不同，该方法将替换所有匹配的字符串，而不仅仅是第一个。如果字符串不是静态已知的，那么这特别有用，因为调用 [`RegExp()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) 构造函数而不转义特殊字符可能会意外地改变它的语义。

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
```

如果 `pattern` 是一个具有 [`Symbol.replace`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) 方法的对象（包括 `RegExp` 对象），则该方法将被调用，并以目标字符串和 `replacement` 作为参数。它的返回值成为 `replaceAll()` 的返回值。在这种情况下，`replaceAll()` 的行为完全取决于 `@@replace` 方法，因此除了额外的输入验证（即正则表达式必须是全局的）之外，它将具有与 `replace()` 相同的结果。

如果 `pattern` 是一个空字符串，则替换内容将插入到每个 UTF-16 码元之间，类似于 [`split()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 的行为。

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

有关正则表达式属性（尤其是 [sticky](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 标志）如何与 `replaceAll()` 交互的更多信息，请参阅 [`RegExp.prototype[@@replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)。

## 示例

### 使用 replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### 非全局正则表达式抛出错误

使用正则表达式搜索值时，它必须是全局的。下面的代码是不可行的：

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

下面的代码可以正常运行：

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.replaceAll` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
