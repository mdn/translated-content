---
title: do...while 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/do...while_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/do...while_Statement
---

### do...while 文

`do...while` 文は指定した条件が false に評価されるまで繰り返します。`do...while` 文は次のように使用します。

```
do
   statement
while (condition);
```

`statement` は条件がチェックされる前に一度実行されます。複数の文を実行するにはブロック文 (`{ ... }`) を使用して文をグループ化してください。`condition` が true の場合、その文が再び実行されます。毎回実行された後に条件がチェックされます。条件が false ときは実行が停止され、コントロールが `do...while` の後に続く文に渡されます。

**例**
次の例では do ループは最低 1 回は反復され、i が 5 より小さくなくなるまで反復されます。

```
do {
   i += 1;
   document.write(i);
} while (i < 5);
```

{{ PreviousNext("JavaScript/Guide/Loop_Statements/for_Statement", "JavaScript/Guide/Loop_Statements/while_Statement") }}
