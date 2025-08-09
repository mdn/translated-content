---
title: break
slug: Web/JavaScript/Reference/Statements/break
---

**break 陳述句**會中斷目前的迭代、{{jsxref("Statements/switch", "switch")}} 或 {{jsxref("Statements/label", "label")}} 陳述句，並將程式流程轉到被中斷之陳述句後的陳述句。

{{InteractiveExample("JavaScript Demo: Statement - Break")}}

```js interactive-example
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3
```

## 語法

```plain
break [label];
```

- `label`
  - : 可選的。欲中斷陳述句的標籤 (label) 識別。若不是要中斷迭代或 {{jsxref("Statements/switch", "switch")}}，則需加此參數。

## 說明

中斷陳述 `break` 可加上標籤 (label) 參數，使其跳出被標籤的陳述語句。此中斷陳述 `break` 必須被包含在被標籤的陳述語句中。被標籤的陳述語句可被添加於任一個區塊 ([block](/zh-TW/docs/Web/JavaScript/Reference/Statements/block)) 前，而非限定在迴圈陳述。

## 範例

下面函式包含一個中斷陳述 `break` ，當 `i` 值為 3 時，中斷 `while` 迴圈，並回傳 `3 * x` 。

```js
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

The following code uses `break` statements with labeled blocks. A `break` statement must be nested within any label it references. Notice that `inner_block` is nested within `outer_block`.

```js
outer_block: {
  inner_block: {
    console.log("1");
    break outer_block; // breaks out of both inner_block and outer_block
    console.log(":-("); // skipped
  }
  console.log("2"); // skipped
}
```

The following code also uses `break` statements with labeled blocks but generates a Syntax Error because its `break` statement is within `block_1` but references `block_2`. A `break` statement must always be nested within any label it references.

```js
block_1: {
  console.log('1');
  break block_2; // SyntaxError: label not found
}

block_2: {
  console.log('2');
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/switch", "switch")}}
