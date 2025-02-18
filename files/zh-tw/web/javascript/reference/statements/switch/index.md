---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
---

{{jsSidebar("Statements")}}

**`switch` 語句**會比對一個[表達式](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators)裡頭的值是否符合 `case` 條件，然後執行跟這個條件相關的[陳述式](/zh-TW/docs/Web/JavaScript/Reference/Statements)，以及此一符合條件以外，剩下其他條件裡的陳述式。

{{InteractiveExample("JavaScript Demo: Statement - Switch")}}

```js interactive-example
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## 語法

```js
switch (expression) {
  case value1:
        //當 expression 的值符合 value1
        //要執行的陳述句
    [break;]
  case value2:
        //當 expression 的值符合 value2
        //要執行的陳述句
    [break;]
  ...
  case valueN:
        //當 expression 的值符合 valueN
        //要執行的陳述句
    [break;]
  [default:
        //當 expression 的值都不符合上述條件
        //要執行的陳述句
    [break;]]
}
```

- `expression`
  - : 一個表達式其結果用來跟每個 `case` 條件比對。
- `case valueN` {{optional_inline}}
  - : 一個 `case` 條件是用來跟 `expression` 匹配的。 如果 `expression` 符合特定的 `valueN`，那在 case 條件裡的語句就會執行，直到這個 `switch` 陳述式結束或遇到一個 `break` 。
- `default` {{optional_inline}}
  - : 一個 `default` 條件；倘若有這個條件，那在 `expression` 的值並不符合任何一個 `case` 條件的情況下，就會執行這個條件裡的語句。

## 描述

一個 switch 陳述式會先評估自己的 expression。然後他會按照 `case` 條件順序開始尋找，直到比對到第一個表達式值跟輸入 expression 的值相等的 case 條件（使用[嚴格的邏輯運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators), `===`）並把控制流交給該子句、並執行裡面的陳述式（如果給定值符合多個 case，就執行第一個符合的 case，就算該 case 與其他 case 不同）

If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing the associated statements. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. 按照慣例， `default` 語句會是最後一個條件，但不一定要存在。

The optional [`break`](/zh-TW/docs/Web/JavaScript/Reference/Statements/break) statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If `break` is omitted, the program continues execution at the next statement in the `switch` statement.

## 範例

### 使用 `switch`

In the following example, if `expr` evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When `break` is encountered, the program breaks out of `switch` and executes the statement following `switch`. If `break` were omitted, the statement for case "Cherries" would also be executed.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```

### 如果我忘記 break 會發生什麼事？

If you forget a break then the script will run from the case where the criterion is met and will run the case after that regardless if criterion was met. See example here:

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
  // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

### 我可以在 cases 中間放 default 嗎？

Yes, you can! JavaScript will drop you back to the default if it can't find a match:

```js
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}
```

It also works when you put default before all other cases.

### 同時使用多個條件 case 的方法

Source for this technique is here:

[Switch statement multiple cases in JavaScript (Stack Overflow)](https://stackoverflow.com/questions/13207927/switch-statement-for-multiple-cases-in-javascript)

#### Multi-case - single operation

This method takes advantage of the fact that if there is no break below a case statement it will continue to execute the next case statement regardless if the case meets the criteria. See the section titled "What happens if I forgot a break?"

This is an example of a single operation sequential switch statement, where four different values perform exactly the same.

```js
var Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal will go on Noah's Ark.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal will not.");
}
```

#### Multi-case - chained operations

This is an example of a multiple-operation sequential switch statement, where, depending on the provided integer, you can receive different output. This shows you that it will traverse in the order that you put the case statements, and it does not have to be numerically sequential. In JavaScript, you can even mix in definitions of strings into these case statements as well.

```js
var foo = 1;
var output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

The output from this example:

| Value                                | Log text                          |
| ------------------------------------ | --------------------------------- |
| foo is NaN or not 1, 2, 3, 4, 5 or 0 | Please pick a number from 0 to 5! |
| 0                                    | Output: So What Is Your Name?     |
| 1                                    | Output: What Is Your Name?        |
| 2                                    | Output: Your Name?                |
| 3                                    | Output: Name?                     |
| 4                                    | Output: ?                         |
| 5                                    | Output: !                         |

### Block-scope variables within `switch` statements

With ECMAScript 2015 (ES6) support made available in most modern browsers, there will be cases where you would want to use [let](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) and [const](/zh-TW/docs/Web/JavaScript/Reference/Statements/const) statements to declare block-scoped variables.

Take a look at this example:

```js
const action = "say_hello";
switch (action) {
  case "say_hello":
    let message = "hello";
    console.log(message);
    break;
  case "say_hi":
    let message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
    break;
}
```

This example will output the error `Uncaught SyntaxError: Identifier 'message' has already been declared` which you were not probably expecting.

This is because the first `let message = 'hello';` conflicts with second let statement `let message = 'hi';` even they're within their own separate case statements `case 'say_hello':` and `case 'say_hi':`; ultimately this is due to both `let` statements being interpreted as duplicate declarations of the same variable name within the same block scope.

We can easily fix this by wrapping our case statements with brackets:

```js
const action = "say_hello";
switch (action) {
  case "say_hello": {
    // added brackets
    let message = "hello";
    console.log(message);
    break;
  } // added brackets
  case "say_hi": {
    // added brackets
    let message = "hi";
    console.log(message);
    break;
  } // added brackets
  default: {
    // added brackets
    console.log("Empty action received.");
    break;
  } // added brackets
}
```

This code will now output `hello` in the console as it should, without any errors at all.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 你也可以看看

- [`if...else`](/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else)
