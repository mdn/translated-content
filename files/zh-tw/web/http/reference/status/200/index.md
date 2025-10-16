---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`200 OK`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示請求已成功。默認情況下，`200 OK` 回應是可快取的。

`200 OK` 回應的含義與格式取決於 HTTP 請求方法。以下是不同方法的差異：

- {{HTTPMethod("GET")}}：伺服器已擷取到資源並包含在回應主體中。
- {{HTTPMethod("POST")}}：動作已成功；回應包含描述結果的訊息主體。
- {{HTTPMethod("HEAD")}}：與 `GET` 相同，但不包含訊息主體。
- {{HTTPMethod("TRACE")}}：回應訊息主體包含伺服器接收到的請求。

雖然是可行的，但成功的 {{HTTPMethod("PUT")}} 或 {{HTTPMethod("DELETE")}} 請求通常不會回傳 `200 OK` 回應。若資源是首次上傳或建立，較常見的回應是 {{HTTPStatus("201", "201 Created")}}；若資源成功刪除，則常見回應為 {{HTTPStatus("204", "204 No Content")}}。

## 狀態

```http
200 OK
```

## 範例

### `GET` 請求接收到 `200 OK`

在此範例中，成功的 `GET` 請求（目標為 `https://example.com`）會回傳 `200 OK` 回應。回應中包含表示標頭及帶有 HTML 內容的訊息主體：

```http
HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 294510
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Etag: "3147526947"
Expires: Fri, 28 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECAcc (nyd/D10E)
X-Cache: HIT
Content-Length: 1256

<!doctype html>
<!-- HTML 內容如下所示 -->
```

### 對表單提交的 `POST` 請求接收到 `200 OK`

假設有一個表單用於將資料傳送至 `http://example.com/subscribe` 的端點，以管理訂閱作業。用於訂閱使用者的 `POST` 請求可能如下所示：

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

在此範例中，狀態碼為 `200 OK` 的回應可能如下所示：

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "使用者訂閱待確認。確認電子郵件已發送。",
  "subscription": {
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "id": 123,
    "feed": "default"
  }
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- 術語：{{Glossary("Idempotent", "冪等")}}
