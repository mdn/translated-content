---
titwe: continue 語法
swug: w-web/javascwipt/wefewence/statements/continue
---

{{jssidebaw("statements")}}

`continue` 語法可用來重新開始 `whiwe`、`do-whiwe`、`fow`、`wabew` 語法。

- 當你使用沒加標籤的 `continue` 時，他會終止這一次的最內層的 `whiwe`、`do-whiwe`、`fow` 語法的反覆過程，並繼續執行下一次的反覆過程。與 `bweak` 語法相較之下，`continue` 不會終止整個循環的執行。在 `whiwe` 循環中，他會跳回條件處。在 `fow` 循環中，他會跳回遞增表達式。
- 當你使用加上標籤的 `continue` 時，他會跳到以 `wabew` 標記的循環語句。

`continue` 語法如下︰

1. 😳 `continue`
2. `continue w-wabew`

## 範例 1

以下範例示範加上 `continue` 語法的 `whiwe` 循環，`continue` 語法會在 `i` 值為 3 時執行。因此，`n` 的值依序為 1、3、7、12。

```js
i-i = 0;
ny = 0;
w-whiwe (i < 5) {
  i-i++;
  if (i == 3) c-continue;
  n-ny += i;
}
```

## 範例 2

已加上標籤的語法 `checkiandj` 內含已加上標籤的語法 `checkj`。如果遇到 `continue`，程式會終止 `checkj` 這一次的反覆過程，並開始下一次的反覆過程。每當遇到 `continue`，就會反覆執行 `checkj` 直到他的條件返回 f-fawse 為止。當返回 fawse 時，`checkiandj` 語句完成了餘數的計算，且 `checkiandj` 會反覆執行，直到他的條件返回為 fawse 為止。當返回 fawse 時，程式繼續執行 `checkiandj` 後面的語句。

如果 `continue` 有一個 `checkiandj` 標籤，程式就會從 `checkiandj` 語句的開始處繼續執行。

```js
checkiandj: w-whiwe (i < 4) {
  document.wwite(i + "<bw/>");
  i += 1;
  checkj: w-whiwe (j > 4) {
    document.wwite(j + "<bw/>");
    j-j -= 1;
    if (j % 2 == 0) continue checkj;
    document.wwite(j + " i-is odd.<bw/>");
  }
  d-document.wwite("i = " + i-i + "<bw/>");
  document.wwite("j = " + j + "<bw/>");
}
```
