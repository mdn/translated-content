---
title: while 語法
slug: Web/JavaScript/Reference/Statements/while
---

`while` 語法會執行他的語句，只要指定的條件的求值結果為 true。`while` 語法如下︰

```js-nolint
while (condition)
  statement
```

如果條件變成 false，就停止執行循環內部的 `statement`，並把控制權移交給循環後面的語句。

條件的測試會發生在執行循環裡的 `statement` 之前。如果返回的條件為 true，就會執行 `statement`，並再次測試條件。如果返回的條件為 false，就停止執行並把控制權移交給 `while` 後面的語句。

若要執行多個語句，就使用區塊語法（`{ ... }`）把這些語句群組化。

## 範例 1

以下 `while` 循環會一直反覆直到 `n` 小於 3 為止︰

```js
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

每一次的反覆，循環便會遞增 `n` 並且把 `n` 的值代入給 `x`。因此，`x` 和 `n` 持有下列的值︰

- 第一次循環以後︰`n` = 1、`x` = 1
- 第二次循環以後︰`n` = 2、`x` = 3
- 第三次循環以後︰`n` = 3、`x` = 6

第三次的循環完成以後，條件 `n` < 3 不再為 true，所以終止循環。

## 範例 2

應避免無限循環。確認循環裡的條件最終一定會變成 false。否則循環永遠不會終止。下面的 `while` 循環裡的語句將會永遠執行下去，因為條件永遠不會變成 false︰

```js
while (true) {
  alert("Hello, world");
}
```
