---
title: do...while 語法
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

`do...while` 語法會反覆執行直到指定條件的求值結果為 false 為止。`do...while` 語法如下︰

```js-nolint
do
  statement
while (condition);
```

`statement` 會在檢測條件之前就先執行一次。若要執行多個語句，就使用區塊語法（`{ ... }`）把語句群組化。如果 `condition` 為 true，就會再執行一次語句。每回執行以後，就會檢測條件。當條件為 false 時，就停止執行並把控制權轉移給 `do...while` 後面的語句。

## 範例

在以下範例中，do 循環至少會反覆執行一次，並一直反覆到 i 不再小於 5 為止。

```js
do {
  i += 1;
  document.write(i);
} while (i < 5);
```
