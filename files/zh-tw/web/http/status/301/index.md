---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`301 Moved Permanently`** 重新導向回應碼表示所請求的資源已被永久地移動到由 {{HTTPHeader("Location")}} 標頭給出的 URL。瀏覽器將重新導向到新的 URL，並且搜索引擎會更新對該資源的連結。

> [!NOTE]
> 雖然[規範](#規範)要求在執行重新導向時方法和主體保持不變，但並非所有使用者代理都符合此要求。僅將 `301` 狀態碼用作 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法的回應，對於 {{HTTPMethod("POST")}} 方法，請改用 {{HTTPStatus("308", "308 Permanent Redirect")}}，因為此狀態明確禁止更改方法。

## 狀態

```http
301 Moved Permanently
```

## 範例

### 用戶端請求

```http
GET /index.php HTTP/1.1
Host: www.example.org
```

### 伺服器回應

```http
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("308", "308 Permanent Redirect")}}，此狀態碼的等效之處在於使用的方法永遠不會改變。
- {{HTTPStatus("302", "302 Found")}}，臨時重新導向
