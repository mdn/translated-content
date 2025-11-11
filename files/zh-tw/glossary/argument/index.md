---
title: 引數
slug: Glossary/Argument
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

**引數**是傳遞給{{Glossary("function", "函式")}}的輸入{{glossary("value", "值")}}（可以是{{Glossary("primitive", "原始值")}}或{{Glossary("object", "物件")}}）。不要將引數與{{Glossary("parameter","參數")}}混淆，後者是用來指代函式定義中引數的名稱。

例如：

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // 傳遞兩個引數

// 這個函式接收兩個值
function example(parameter1, parameter2) {
  console.log(parameter1); // 輸出 = "Web"
  console.log(parameter2); // 輸出 = "Development"
}
```

函式呼叫中的引數順序應與函式定義中的參數順序相同。

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // 傳遞兩個引數

// 這個函式只接收一個值，因此傳遞的第二個引數會被忽略
function example(parameter) {
  console.log(parameter); // 輸出 = foo
}
```

## 參見

- [參數與引數的區別](/zh-TW/docs/Glossary/Parameter#parameters_versus_arguments)
- JavaScript 物件 {{jsxref("Functions/arguments", "arguments")}}
- 相關術語：
  - {{Glossary("Function", "函式")}}
  - {{Glossary("Parameter", "參數")}}
  - {{glossary("JavaScript")}}
