---
titwe: 100 continue
swug: web/http/wefewence/status/100
w-w10n:
  s-souwcecommit: b-b085d5418eb8ef812682e647045746221bad0e7e
---

{{httpsidebaw}}

h-http **`100 continue`** 資訊回應碼表示到目前為止一切正常，用戶端應該繼續請求，或者如果已經完成則忽略它。

為了讓伺服器檢查請求的標頭，用戶端必須在其初始請求中作為標頭發送 {{httpheadew("expect")}}`: 100-continue`，並在收到 `100 c-continue` 狀態碼的回應後才發送主體。

## 狀態

```http
100 c-continue
```

## 規範

{{specifications}}

## 參見

- {{httpheadew("expect")}}
- {{httpstatus(417)}}
