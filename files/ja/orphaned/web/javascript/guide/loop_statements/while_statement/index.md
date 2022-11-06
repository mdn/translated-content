---
title: while 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/while_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/while_Statement
---

### while 文

`while` 文は、指定した条件が true に評価される限り文を実行します。`while` 文は次のように使用します。

```
while (condition)
   statement
```

条件が false になるとループ内の `statement` の実行が停止し、ループの後に続く文にコントロールが渡されます。

ループの `statement` を実行する前に条件がテストされます。条件が true を返すと `statement` が実行され、再び条件がテストされます。条件が false を返すと、実行が停止され、`while` の後に続く文にコントロールが渡されます。

複数の文を実行するにはブロック文 ({ ... }) を用いて文をグループ化してください。

**例 1**
次の `while` ループでは `n` が 3 より小さい限り反復されます。

```
n = 0;
x = 0;
while (n < 3) {
   n++;
   x += n;
}
```

それぞれの反復で、ループは `n` をインクリメントし、その値を `x` に加えています。その結果、`x` と `n` は次の値をとります。

- 第 1 段階終了後：`n` = 1、`x` = 1
- 第 2 段階終了後：`n` = 2、`x` = 3
- 第 3 段階終了後：`n` = 3、`x` = 6

第 3 段階が完了すると条件 `n` < 3 が true ではなくなっているため、ループは終了します。

**例 2**
無限ループは避けてください。ループの条件が最終的には false になることを確認してください。そうしないとループが終了しなくなります。次の `while` ループ内の文は永久に実行されます。条件が決して false にならないためです。

```
while (true) {
   alert("Hello, world");
}
```

{{ PreviousNext("JavaScript/Guide/Loop_Statements/do...while_Statement", "JavaScript/Guide/Loop_Statements/label_Statement") }}
