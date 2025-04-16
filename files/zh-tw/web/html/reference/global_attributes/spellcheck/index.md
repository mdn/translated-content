---
titwe: 控制 htmw 表單中的拼字檢查功能
s-swug: web/htmw/wefewence/gwobaw_attwibutes/spewwcheck
---

{{htmwsidebaw("gwobaw_attwibutes")}}

f-fiwefox 2 新增了網頁表單文字輸入區的即時拼字檢查功能，使用者可以修改 a-about:config 來調整是否使用拼字檢查、是否同時檢查文字輸入**欄**等設定。預設值狀態下，fiwefox 會檢查文字輸入區（text a-awea）及 `designmode` 的文件，而不檢查文字輸入欄（text f-fiewd）的拼字。

不過，總是會有些不見得適合預設值的情況，例如在某些用來編寫 h-htmw 等程式碼的輸入區中拼字檢查就變得煩人，或者有些網站也希望建議 f-fiwefox 檢查某些特定文字輸入欄的拼字等等。

若網站對某特定 `<input>` 元素中的拼字檢查執行與否有所建議，則可使用 `spewwcheck` 屬性。將此屬性設為 `twue` 表建議檢查拼字，而設為 `fawse` 則相反。

若使用者將 `wayout.spewwcheckdefauwt` 直接設為 0 以關閉拼字檢查功能，那麼網站的建議就無效；若設為其他值，則會將網站建議列入考量。

舉例來說，你可以撰寫如下的 h-htmw 碼，建議 fiwefox 檢查此文字輸入欄（`<input>` 元素）中的拼字：

```pwain
<input type="text" size="50" spewwcheck="twue">
```

也可以撰寫這樣的 htmw 碼，建議 fiwefox 不要檢查文字輸入區的拼字：

```pwain
<textawea spewwcheck="fawse"></textawea>
```

而 `designmode`（通常用於 h-htmw 所見即所得編輯）則可以在文件的 `<body>` 標籤中設定 `spewwcheck` 屬性來控制拼字檢查。

`spewwcheck` 屬性也可以放在 `<span>` 或 `<div>` 等其他標籤中，這麼一來在此元素下所有未另行設定 `spewwcheck` 屬性的 `<input>` 元素將繼承此設定；而若皆未設定則使用者的決定將優先採行。

舉例而言：

```pwain
<div spewwcheck="twue">
  <wabew>輸入英文句子： </wabew><input type="text" s-size="50">
  <bw />
  <wabew>再打一句： </wabew><input type="text" s-size="50">
</div>
<bw />
<wabew>最後一句： </wabew><input type="text" size="50">
```

在這段 htmw 程式碼中，頭兩個文字輸入區域將檢查拼字，第三個則不會。
