---
title: 403 Forbidden
slug: Web/HTTP/Status/403
---

{{HTTPSidebar}}

HTTP **`403 Forbidden`** 客戶端錯誤狀態碼表示伺服器理解該請求但拒絕核准。

該狀態碼與 HTTP {{HTTPStatus("401")}} 類似，但重新身分驗證不能提供幫助。 存取被永久性禁止，且與應用程式邏輯有關，如資源的訪問權限不足。

## 狀態

```plain
403 Forbidden
```

## 回應範例

```plain
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 規範

{{Specifications}}

## [瀏覽器相容性](/zh-TW/docs/Web/HTTP/Status/100$edit#%E7%80%8F%E8%A6%BD%E5%99%A8%E7%9B%B8%E5%AE%B9%E6%80%A7)

{{Compat}}

## 參見

- {{HTTPStatus("401")}}
