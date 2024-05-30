---
title: 提升
slug: Glossary/Hoisting
l10n:
  sourceCommit: 9fd171abed5944476123db22360b1e086f0900d5
---

{{GlossarySidebar}}

JavaScript **提升**是指解释器在执行代码之前，似乎将函数、变量、类或导入的*声明*移动到其{{glossary("scope", "作用域")}}的顶部的过程。

*提升*不是 ECMAScript 规范中规范定义的术语。规范确实将一组声明定义为[_可提升的声明_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration)，但这只包括 [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)、[`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)、[`async function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 以及 [`async function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*) 声明。提升通常也被认为是 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 声明的一个特性，尽管方式不同。用通俗的话来说，以下任何行为都可以被视为提升：

1. 能够在声明变量之前在其作用域中使用该变量的值。（“值提升”）
2. 能够在声明变量之前在其作用域中引用该变量而不抛出 {{jsxref("ReferenceError")}}，但值始终是 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。（“声明提升”）
3. 变量的声明导致在声明行之前的作用域中行为发生变化。
4. 声明的副作用在评估包含该声明的其余代码之前产生。

前面说到的四种函数声明的提升表现为第 1 种行为；`var` 声明的提升表现为第 2 种行为；[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 和 [`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class) 声明（也称为*词法声明*）的提升表现为第 3 种行为；[`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 声明的提升表现为第 1 和第 4 种行为。

有些人更倾向于将 `let`、`const` 和 `class` 视为不提升的，因为[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)严格禁止在声明之前使用变量。这种看法是可以接受的，因为提升并不是一个普遍认同的术语。然而，暂时性死区可以导致其作用域内的其他可观察变化，这表明存在某种形式的提升：

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

如果 `const x = 2` 声明完全没有提升（即仅在执行时生效），那么 `console.log(x)` 语句应该能够读取上层作用域的 `x` 值。然而，由于 `const` 声明仍然“污染”了其定义的整个作用域，`console.log(x)` 语句读取的是 `const x = 2` 声明的 `x`，但它尚未初始化，因此抛出 {{jsxref("ReferenceError")}}。不过，从实用角度看，将词法声明视为不提升可能更有用，因为这些声明的提升并没有带来任何有意义的特性。

注意以下情况不属于提升：

```js
{
  var x = 1;
}
console.log(x); // 1
```

这里没有“在声明前访问”；只是因为 `var` 声明不是块级作用域的。

有关提升的更多信息，请参见：

- `var`、`let`、`const` 提升——[语法类型教程](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#变量提升)
- `function` 提升——[函数教程](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数提升)
- `class` 提升——[类教程](/zh-CN/docs/Web/JavaScript/Guide/Using_classes#类声明提升)
- `import` 提升——[JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#导入声明提升)

## 参见

- [`var` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
- [`let` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)
- [`const` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)
- [`function` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [`class` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
