---
title: 陳述式與宣告
slug: Web/JavaScript/Reference/Statements
---

{{jsSidebar("Statements")}}

JavaScript 應用程式由適當的陳述式組成。一個單一的陳述式可以跨用好幾行。 多個陳述式也可以藉由分號分隔來寫在同一行。 這不是一個關鍵字，而是一群關鍵字。

## 陳述式與宣告分類

For an alphabetical listing see the sidebar on the left.

### 流程控制

- {{jsxref("Statements/block", "Block")}}
  - : A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.
- {{jsxref("Statements/break", "break")}}
  - : 中斷當下的迴圈、條件判斷（switch）或是標籤（label）陳述式，並將程式流程轉到被中斷陳述式後的陳述式。
- {{jsxref("Statements/continue", "continue")}}
  - : Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
- {{jsxref("Statements/Empty", "Empty")}}
  - : An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
- {{jsxref("Statements/if...else", "if...else")}}
  - : 當特定的條件為真時執行一段陳述式，若為假則另一段陳述式就會被執行。
- {{jsxref("Statements/switch", "switch")}}
  - : Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
- {{jsxref("Statements/throw", "throw")}}
  - : Throws a user-defined exception.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Marks a block of statements to try, and specifies a response, should an exception be thrown.

### 宣告

- {{jsxref("Statements/var", "var")}}
  - : Declares a variable, optionally initializing it to a value.
- {{jsxref("Statements/let", "let")}}
  - : Declares a block scope local variable, optionally initializing it to a value.
- {{jsxref("Statements/const", "const")}}
  - : Declares a read-only named constant.

### 函數與類別（Class）

- {{jsxref("Statements/function", "function")}}
  - : 用指定的變數宣告一個函數
- {{jsxref("Statements/function*", "function*")}}
  - : Generators functions enable writing [iterators](/zh-TW/docs/Web/JavaScript/Guide/The_Iterator_protocol) more easily.
- {{jsxref("Statements/async_function", "async function")}}
  - : Declares an async function with the specified parameters.
- {{jsxref("Statements/return", "return")}}
  - : Specifies the value to be returned by a function.
- {{jsxref("Statements/class", "class")}}
  - : Declares a class.

### 迭代（Iteration）

- {{jsxref("Statements/do...while", "do...while")}}
  - : Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
- {{jsxref("Statements/for", "for")}}
  - : Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
- {{deprecated_inline}} {{non-standard_inline()}} {{jsxref("Statements/for_each...in", "for each...in")}}
  - : Iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iterates over iterable objects (including {{jsxref("Global_Objects/Array","arrays","","true")}}, array-like objects, [iterators and generators](/zh-TW/docs/JavaScript/Guide/Iterators_and_Generators)), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- {{jsxref("Statements/while", "while")}}
  - : Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### 其他

- {{jsxref("Statements/debugger", "debugger")}}
  - : Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
- {{jsxref("Statements/export", "export")}}
  - : Used to export functions to make them available for imports in external modules, another scripts.
- {{jsxref("Statements/import", "import")}}
  - : Used to import functions exported from an external module, another script.
- {{jsxref("Statements/label", "label")}}
  - : Provides a statement with an identifier that you can refer to using a `break` or `continue` statement.
- {{deprecated_inline}} {{jsxref("Statements/with", "with")}}
  - : Extends the scope chain for a statement.

## 瀏覽器相容性

{{Compat}}

## 參見

- [運算式與運算子](/docs/Web/JavaScript/Reference/Operators)
