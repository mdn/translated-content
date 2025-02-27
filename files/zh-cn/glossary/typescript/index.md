---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 8005d92738cb5678d9b1e434f02ddebaa15c1eaa
---

{{GlossarySidebar}}

TypeScript 是一个为 JavaScript 添加{{glossary("static_typing", "静态类型检查")}}的编程语言。

TypeScript 是 JavaScript 的超集，这意味着 JavaScript 中所具有的一切也都可以在 TypeScript 中使用，而且每个 JavaScript 程序都是语法合法的 TypeScript 程序。此外，TypeScript 和 JavaScript 的运行时行为是相同的。

然而，TypeScript 添加了编译时类型检查，实现了关于不同类型如何使用和组合的规则。这可以捕获在 JavaScript 中只有在运行时才会遇到的各种编程错误。

一些类型规则是从 JavaScript 中推断出来的。例如，在下面的代码中，TypeScript 推断 `myVariable` 是一个字符串，因此不允许将其重新赋值为不同的类型：

```ts
let myVariable = "Hello World";
myVariable = 1;
// 错误：
// Type 'number' is not assignable to type 'string'.
```

TypeScript 还允许程序员对其代码进行注释，以指示例如函数的参数类型或对象的属性：

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// 错误：
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

编译后，类型注释会被移除，使得编译输出只是 JavaScript，这意味着它可以在任何 JavaScript 运行时中执行。

## 参见

- [TypeScript 官网](https://www.typescriptlang.org/)
