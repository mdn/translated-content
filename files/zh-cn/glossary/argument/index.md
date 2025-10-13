---
title: 实际参数
slug: Glossary/Argument
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

**实际参数**（Argument）是作为输入传递给{{Glossary("function", "函数")}}的{{glossary("value", "值")}}，可以是{{Glossary("primitive", "原始值")}}或{{Glossary("object", "对象")}}。不要将实际参数与{{Glossary("parameter", "形式参数")}}混淆：形式参数是函数定义中用于引用实际参数的名称。

例如：

```js
const argument1 = "Web";
const argument2 = "开发";
example(argument1, argument2); // 传递两个实际参数

// 该函数接受两个值
function example(parameter1, parameter2) {
  console.log(parameter1); // 输出 = "Web"
  console.log(parameter2); // 输出 = "开发"
}
```

函数调用中的实际参数顺序应与函数定义中的{{Glossary("parameter", "形式参数")}}顺序相同。

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // 传递两个实际参数

// 该函数只接受一个值，因此传递的第二个实际参数将被忽略
function example(parameter) {
  console.log(parameter); // 输出 = foo
}
```

## 参见

- [形式参数与实际参数之间的区别](/zh-CN/docs/Glossary/Parameter#形式参数与实际参数)
- {{glossary("JavaScript")}} 中的 {{jsxref("Functions/arguments","arguments")}} 对象
- 相关术语：
  - {{Glossary("Function", "函数")}}
  - {{Glossary("Parameter", "形式参数")}}
