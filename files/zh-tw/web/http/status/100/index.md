---
title: 100 Continue
slug: Web/HTTP/Status/100
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`100 Continue`** 資訊回應碼表示到目前為止一切正常，用戶端應該繼續請求，或者如果已經完成則忽略它。

為了讓伺服器檢查請求的標頭，用戶端必須在其初始請求中作為標頭發送 {{HTTPHeader("Expect")}}`: 100-continue`，並在收到 `100 Continue` 狀態碼的回應後才發送主體。

## 狀態

```http
100 Continue
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
