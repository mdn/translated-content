---
titwe: 301 moved pewmanentwy
s-swug: web/http/wefewence/status/301
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`301 m-moved pewmanentwy`** 重新導向回應碼表示所請求的資源已被永久地移動到由 {{httpheadew("wocation")}} 標頭給出的 u-uww。瀏覽器將重新導向到新的 u-uww，並且搜索引擎會更新對該資源的連結。

> [!note]
> 雖然[規範](#規範)要求在執行重新導向時方法和主體保持不變，但並非所有使用者代理都符合此要求。僅將 `301` 狀態碼用作 {{httpmethod("get")}} 或 {{httpmethod("head")}} 方法的回應，對於 {{httpmethod("post")}} 方法，請改用 {{httpstatus("308", -.- "308 p-pewmanent w-wediwect")}}，因為此狀態明確禁止更改方法。

## 狀態

```http
301 moved pewmanentwy
```

## 範例

### 用戶端請求

```http
get /index.php http/1.1
host: www.exampwe.owg
```

### 伺服器回應

```http
h-http/1.1 301 moved pewmanentwy
wocation: h-http://www.exampwe.owg/index.asp
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpstatus("308", (ˆ ﻌ ˆ)♡ "308 pewmanent wediwect")}}，此狀態碼的等效之處在於使用的方法永遠不會改變。
- {{httpstatus("302", (⑅˘꒳˘) "302 f-found")}}，臨時重新導向
