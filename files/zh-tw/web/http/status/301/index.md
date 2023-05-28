---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
---

{{HTTPSidebar}}

HTTP **`301 Moved Permanently`** 重新導向狀態代碼代表所請求的資源已經被明確移動到 {{HTTPHeader("Location")}} 標頭所指示的 URL。瀏覽器會重新導向到此頁面，而搜尋引擎則會更新該資源的連結。用 SEO 的話來說，就是連結養分（link-juice）把你送到了新的 URL 去。

儘管規範要求當執行重新導向時，請求方法（以及主體）不應該被更動，但並非所有的用戶代理皆遵循它──你依然可以找到具有此類漏洞的軟體。因此，推薦只使用 `301` 回應碼作為 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法的回應， 另外使用 {{HTTPStatus("308", "308 Permanent Redirect")}} 作為 {{HTTPMethod("POST")}} 方法的替代，因為請求方法的更動在此狀態中是被明確禁止的。

## 狀態

```plain
301 Moved Permanently
```

## 範例

### 用戶端請求

```plain
GET /index.php HTTP/1.1
Host: www.example.org
```

### 伺服端回應

```plain
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("302", "302 Found")}}, 臨時重新導向
