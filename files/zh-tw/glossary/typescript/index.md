---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

TypeScript 是一個程式語言，為 JavaScript 增加了{{glossary("static_typing", "靜態型別檢查")}}功能。

TypeScript 是 JavaScript 的超集，這意味著 JavaScript 的一切都可以在 TypeScript 中使用，同時所有的 JavaScript 程式都是語法合法的 TypeScript 程式。此外，TypeScript 跟 JavaScript 的執行時期行為完全相同。

然而，TypeScript 增加了編譯時期的型別檢查，實作了關於不同型別如何使用與組合的規則。這可以捕捉各種在 JavaScript 執行時才會遇到的錯誤。

有些型別規則是從 JavaScript 中推斷而來。例如在下方的程式碼中，TypeScript 推斷 `myVariable` 是一個字串，因此不允許它重新被賦值為其他型別：

```ts
let myVariable = "Hello World";
myVariable = 1;
// 錯誤：
// 類型 'number' 不可指派給類型 'string'。
```

TypeScript 也允許程式設計師為程式碼加上型別標註，例如標示函式參數的型別，或是物件屬性的型別：

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// 錯誤：
// 類型 'string' 的引數不可指派給類型 'number' 的參數。
```

在編譯之後，型別註解會被刪除，編譯之後輸出的程式碼會變成純 JavaScript，意味著可以在任何 JavaScript 的執行環境執行。

## 參見

- [TypeScript 官網](https://www.typescriptlang.org/)
