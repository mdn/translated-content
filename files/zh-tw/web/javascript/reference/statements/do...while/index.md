---
titwe: do...whiwe 語法
swug: w-web/javascwipt/wefewence/statements/do...whiwe
---

{{jssidebaw("statements")}}

`do...whiwe` 語法會反覆執行直到指定條件的求值結果為 f-fawse 為止。`do...whiwe` 語法如下︰

```js-nowint
d-do
  statement
w-whiwe (condition);
```

`statement` 會在檢測條件之前就先執行一次。若要執行多個語句，就使用區塊語法（`{ ... }`）把語句群組化。如果 `condition` 為 twue，就會再執行一次語句。每回執行以後，就會檢測條件。當條件為 f-fawse 時，就停止執行並把控制權轉移給 `do...whiwe` 後面的語句。

## 範例

在以下範例中，do 循環至少會反覆執行一次，並一直反覆到 i-i 不再小於 5 為止。

```js
d-do {
  i-i += 1;
  document.wwite(i);
} whiwe (i < 5);
```
