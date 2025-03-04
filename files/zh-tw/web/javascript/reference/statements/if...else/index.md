---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
---

{{jsSidebar("Statements")}}

當條件成立的時候會執行 if 陳述式裡的程式，而不成立時則執行另外一個陳述式。

{{InteractiveExample("JavaScript Demo: Statement - If...Else")}}

```js interactive-example
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

## 語法

```js-nolint
if (condition)
  statement1

// With an else clause
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : 一個成立或不成立的[運算式](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators#運算式)。
- `statement1`
  - : 如果 if 中的條件(conditions)為真時執行陳述式(statements)。陳述式可以為任何內容，包含巢狀式(nested)的 if 陳述。當要執行多行的陳述式(statements)時，使用區塊(block)將所要執行的陳述式包覆。如果不需要執行任何動作時，則不撰寫任何陳述式(empty statement)。
- `statement2`
  - : 當件不成立時所執行的部份，當 else 被撰寫時才會被執行。可以是任何的陳述式，包含使用區塊(block)及巢狀(nested)的陳述。

## 描述

多重的 `if...else` 陳述式可以使用 `else if` 子句來建立一個巢狀結構的句子。要記住，在 JavaScript 中沒有 `elseif` (一個單字) 的語法可以用。

```js-nolint
if (condition1)
   statement1
else if (condition2)
   statement2
else if (condition3)
   statement3
// …
else
   statementN
```

將巢狀結構適當的排版後，我們能更了解其背後運作的邏輯：

```js-nolint
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
      statement3
// …
```

如果在一個條件式中有多個陳述要執行，可以使用區塊陳述式(`{ ... }`) 把所有陳述包在一起。 通常來說，無論如何都使用區塊陳述式是個很好的習慣，尤其是當你使用巢狀結構的 `if` 陳述式時，這會讓人更容易理解你的程式碼。

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

不要被[Boolean](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean)物件中，布林值的 `true` 和 `false` 給混淆了。任何值只要不是 `false`、 `undefined`、 `null`、 `0`、 `NaN`，或者空字串 (`""`)，並且任何物件，包括其值是 `false`的布林物件 ，仍然會被條件陳述式視為條件成立。舉例而言：

```js
var b = new Boolean(false);
if (b) // this condition is truthy
```

## 實例

### 使用 `if...else`

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### 使用 `else if`

要記得 JavaScript 沒有 `elseif` 可以使用。不過，你可以使用 `else` 和 `if`中間夾著空白的語法：

```js
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

### 條件表達式中的賦值

建議不要在條件表達式中直接對物件賦值，因為這會使人在瀏覽程式碼時很容易將賦值( assignment )與相等( equality )混淆。舉例而言，不要使用以下寫法：

```js example-bad
if ((x = y)) {
  /* do the right thing */
}
```

如果你必須在條件表達式中使用賦值，最好 ˇ 的作法是以額外的括號包住賦值語句，如下所示：

```js-nolint example-bad
if (x = y) {
  // do something
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/conditional_operator", "conditional operator")}}
