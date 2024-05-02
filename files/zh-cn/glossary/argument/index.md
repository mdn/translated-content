---
title: 引数
slug: Glossary/Argument
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

**引数**是一个作为{{Glossary("function", "函数")}}输入的{{glossary("value", "值")}}（{{Glossary("primitive", "原始值")}}或{{Glossary("object", "对象")}}）。

例如：

```js
const argument1 = "Web";
const argument2 = "开发";
example(argument1, argument2); // 传入两个引数

// 这个函数接受两个参数
function example(parameter1, parameter2) {
  console.log(parameter1); // 输出 = "Web"
  console.log(parameter2); // 输出 = "开发"
}
```

在函数调用中的引数顺序应该与函数定义中的{{Glossary("parameter", "参数")}}顺序相同。

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // 传入两个引数

// 这个函数接受一个参数，因而传入的第二个引数被忽略了
function example(parameter) {
  console.log(parameter); // 输出 = foo
}
```

## 参见

- 维基百科上的[参数和引数](<https://zh.wikipedia.org/wiki/參數_(程式設計)#参数和引数)>)
- {{glossary("JavaScript")}} 的 {{jsxref("Functions/arguments","arguments")}} 对象
