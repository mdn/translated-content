---
title: break 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/break_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/break_Statement
---

### break 文

`break` 文は `loop` 文や `switch` 文、`label` 文から抜け出すために使用します。

- `break` にラベルを使用しないと、最も内側にある `while` や `do-while`、`for`、`switch` から抜け、続く文にコントロールを移します。
- `break` にラベルを使用すると、指定されたラベルの付いた文から抜けます。

break 文は次のように使用します。

1. `break;`
2. `break label;`

１番目の形式の構文は最も内側のループもしくは `switch` から抜けます。２番目の形式の構文は指定した label 文から抜けます。

**例**
次の例は、その値が `theValue` である要素のインデックスが見つかるまで、配列の要素について繰り返します。

```
for (i = 0; i < a.length; i++) {
   if (a[i] == theValue)
      break;
}
```

{{ PreviousNext("JavaScript/Guide/Loop_Statements/label_Statement", "JavaScript/Guide/Loop_Statements/continue_Statement") }}
