---
title: 属性访问器
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**属性访问器**通过使用点或方括号符号来访问对象的属性。

{{InteractiveExample("JavaScript 演示：属性访问器", "taller")}}

```js interactive-example
const person1 = {};
person1["firstName"] = "张";
person1["lastName"] = "三";

console.log(person1.firstName);
// 期望输出："张"

const person2 = {
  firstName: "李",
  lastName: "四",
};

console.log(person2["lastName"]);
// 期望输出："四"
```

## 语法

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## 描述

我们可以将对象看做是一个*关联数组*（也称为：_映射_、_字典_、_散列表_、_查询表_）。这个数组中的*键*就是这个对象中[属性](/zh-CN/docs/Glossary/Property/JavaScript)的名称。

访问属性有两种方式：*点表示法*和*方括号表示法*。

### 点号表示法

在 `object.propertyName` 语法中，`propertyName` 必须是一个有效的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)，也可以是一个[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)。例如，`object.$1` 有效，而 `object.1` 无效。

```js
const variable = object.propertyName;
object.propertyName = value;
```

```js
const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'
```

```js-nolint example-bad
const object = {};
object.1 = "bar"; // SyntaxError
console.log(object.1); // SyntaxError
```

在这里，我们从 `document` 中访问了一个名为 `createElement` 的方法，并调用了它。

```js
document.createElement("pre");
```

如果对数字字面量使用方法，并且数字字面量没有指数且没有小数点，请在方法调用之前的点之前留出[空白字符](/zh-CN/docs/Glossary/Whitespace)，以防止点被解释为小数点。

```js-nolint
77 .toExponential();
// 或
77
.toExponential();
// 或
(77).toExponential();
// 或
77..toExponential();
// 或
77.0.toExponential();
// 因为 77. === 77.0，没有歧义
```

此外，[私有元素](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)只能在定义它们的类中使用点符号访问。

### 方括号表示法

在 `object[expression]` 语法中，`expression` 应求值为表示属性名称的字符串或 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。因此，它可以是任何字符串字面量形式，例如，包括 `1foo'`、`'!bar!'`，甚至是 `' '`（空格）。

```js
const variable = object[propertyName];
object[propertyName] = value;
```

以下调用的效果与前一个示例完全相同：

```js
document["createElement"]("pre");
```

方括号表示之前允许有空格。

```js-nolint
document ["createElement"]("pre");
```

传递对属性名求值的表达式与直接传递属性名的作用相同。

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "张三" };

Obj["name"]; // 返回“张三”
Obj[key]; // 求值为 Obj["name"]，并返回“张三”
Obj[getKey()]; // 求值为 Obj["name"]，并返回“张三”
```

不过，请注意不要使用方括号访问由外部输入给出名称的属性。这可能会使你的代码受到[对象注入攻击](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md)。

### 属性名称

属性名称必须是字符串或 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。任何其他值，包括数值，都会被强制转换为字符串。由于 `1` 被强制转换为 `'1'`，因此以下示例会输出 `'值'`。

```js
const object = {};
object["1"] = "值";
console.log(object[1]);
```

以下代码也会输出 `'值'`，因为 `foo` 和 `bar` 被转换为相同的字符串（`"[object Object]"`）。

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "值";
console.log(object[bar]);
```

### 方法绑定

在谈到对象的属性时，通常会区分属性和方法。然而，属性/方法之间的区别不过是一种约定俗成的说法。方法是一种可以被调用的属性（例如，如果它的值是对 {{jsxref("Function")}} 实例的引用）。

方法并不与作为其属性的对象绑定。具体来说，方法中的 `this` 并不固定，也不一定指包含该方法的对象。相反，`this` 被函数调用“传递”。请参阅 [`this` 的引用](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。

## 示例

### 方括号表示法与 eval()

JavaScript 新手经常会犯一个错误，就是在可以使用方括号表示法的情况下使用了 {{jsxref("Global_Objects/eval", "eval()")}} 代替。

例如，许多脚本中经常出现以下语法。

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` 很慢，应尽可能避免使用。而且，此时 `strFormControl` 必须是一个合法的标识符，这在一些表单控件的 name、`id` 值之中并不是必要的。所以，使用方括号表示法来代替会更好一些：

```js
const x = document.forms.form_name.elements[strFormControl].value;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [可选链（`?.`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
