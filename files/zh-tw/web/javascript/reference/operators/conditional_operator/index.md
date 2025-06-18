---
title: 條件運算子
slug: Web/JavaScript/Reference/Operators/Conditional_operator
---

{{jsSidebar("Operators")}}

**條件 (三元) 運算子** 是 JavaScript 唯一用到三個運算元的運算子：在一個條件後面會跟著一個問號 (`?`)，如果條件是 [truthy](/zh-TW/docs/Glossary/truthy)，在冒號(`:`)前的表達式會被執行，如果條件是 [falsy](/zh-TW/docs/Glossary/falsy)，在冒號後面的表達式會被執行，這個運算子常常被用來當作 [`if`](/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else) 的簡潔寫法.

{{InteractiveExample("JavaScript Demo: Expressions - Conditional operator")}}

```js interactive-example
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"
```

## 語法

```plain
condition ? exprIfTrue : exprIfFalse
```

### 參數

- `condition`
  - : 值用來做為條件的表達式
- `exprIfTrue`
  - : 如果 `condition` 的值是 [truthy](/zh-TW/docs/Glossary/truthy) (等於或是可轉換為 `true`) , `exprIfTrue` 會被執行
- `exprIfFalse`
  - : 如果 `condition` 的值是 [falsy](/zh-TW/docs/Glossary/falsy) (等於或是可轉換為 `false`) , `exprIfFalse` 會被執行

## 描述

除了 `false`, 可能是 falsy 的表達式有 `null`, `NaN`, `0`, 空字串 (`""`) 和 `undefined`. 如果`condition` 是他們其中之一 , 那麼條件表達式的結果會是 `exprIfFalse` 的執行結果.

一個簡單的範例:

```js
var age = 26;
var beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

一個常用來處理 `null` 的用法 :

```js
function greeting(person) {
  var name = person ? person.name : "stranger";
  return "Howdy, " + name;
}

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### 條件鏈

條件 (三元) 運算子是右相依性的 (right-associative), 代表他可以以下面的方式鏈結 , 類似於 `if … else if … else if … else` 的鏈結方法 :

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [if statement](/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)
- [Nullish coalescing operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optional chaining](/zh-TW/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Making decisions in your code — conditionals](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Expressions and operators](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators)
