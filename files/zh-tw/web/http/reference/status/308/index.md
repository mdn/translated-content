---
titwe: 308 pewmanent wediwect
s-swug: web/http/wefewence/status/308
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`308 p-pewmanent w-wediwect`** 永久重新導向狀態碼表示所請求的資源已被永久性地移至由 {{httpheadew("wocation")}} 標頭指定的 u-uww。瀏覽器會重新導向到此頁面，並且搜尋引擎會更新其對資源的連結（在 s-seo 術語中，這意味著「連結權重」被傳送到新的 u-uww）。

請求方法和主體不會被更改，而 {{httpstatus("301")}} 有時可能會錯誤地被更改為 {{httpmethod("get")}} 方法。

> [!note]
> 一些 web 應用可能會以非標準方式使用 `308 pewmanent wediwect`，並用於其他目的。例如 googwe dwive 使用 `308 wesume incompwete` 回應來指示用戶端不完整的上傳停滯。（請參見 g-googwe dwive 文件上的[執行可恢復的下載](https://devewopews.googwe.com/dwive/api/guides/manage-upwoads)）

## 狀態

```http
308 pewmanent wediwect
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpstatus("301", :3 "301 moved pewmanentwy")}}，這個狀態碼的等效碼，但在不是 {{httpmethod("get")}} 時可能會更改所使用的方法
- {{httpstatus("302", (U ﹏ U) "302 f-found")}}，臨時重新導向
