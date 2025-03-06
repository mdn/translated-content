---
title: 典型的 HTTP 會話
slug: Web/HTTP/Session
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

在用戶端—伺服器協定（例如 HTTP）中，會話由三個階段組成：

1. 用戶端建立一個 TCP 連接（或者如果傳輸層不是 TCP，則建立適當的連接）。
2. 用戶端發送其請求，並等待回答。
3. 伺服器處理請求，發送其回答，提供狀態碼和適當的數據。

從 HTTP/1.1 開始，在完成第三個階段後不再關閉連接，並且現在用戶端被授予進一步的請求：這意味著第二和第三個階段現在可以執行任意次數。

## 建立連接

在用戶端—伺服器協定中，是用戶端建立連接。在 HTTP 中打開連接意味著在底層傳輸層啟動一個連接，這通常是 TCP。

對於 TCP，用於計算機上的 HTTP 伺服器的默認端口是 80。也可以使用其他端口，例如 8000 或 8080。要提取的頁面的 URL 包含域名和連接埠，如果連接埠是 80 則後者可以省略。有關更多詳細訊息，請參見 [URL 參考](/zh-TW/docs/Web/URI)。

> [!NOTE]
> 用戶端—伺服器模型不允許伺服器在沒有明確請求的情況下向用戶端發送數據。但是，各種 Web API 使這種用例成為可能，包括 [Push API](/zh-TW/docs/Web/API/Push_API)、[伺服器發送事件](/zh-TW/docs/Web/API/Server-sent_events)和 [WebSockets API](/zh-TW/docs/Web/API/WebSockets_API)。

## 發送用戶端請求

一旦建立了連接，使用者代理就可以發送請求（使用者代理通常是網頁瀏覽器，但也可以是其他任何東西，例如爬蟲）。用戶端請求由文本指令組成，用 CRLF（回車符，後跟換行符）分隔，分成三個塊：

1. 第一行包含一個請求方法，後面跟著它的參數：

   - 文件的路徑，作為不帶協定或域名的絕對 URL
   - HTTP 協定版本

2. 接下來的行代表一個 HTTP 標頭，給伺服器提供關於哪種類型的數據是適合的訊息（例如，什麼語言、什麼 MIME 類型），或者其他改變其行為的數據（例如，如果已經緩存，則不發送回應）。這些 HTTP 標頭形成一個塊，以空行結束。
3. 最後一個塊是一個可選的數據塊，其中可能包含主要由 POST 方法使用的進一步數據。

### 範例請求

提取 developer.mozilla.org 的根頁面（`https://developer.mozilla.org/`），並告訴伺服器使用者代理如果可能的話希望以法語顯示頁面：

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

請注意最後的空行，這將數據塊與標頭塊分開。由於在 HTTP 標頭中沒有提供 `Content-Length`，因此這個數據塊是空的，標記著標頭的結束，使得伺服器一接收到這個空行就能夠處理請求。

例如，發送表單的結果：

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### 請求方法

HTTP 定義了一組[請求方法](/zh-TW/docs/Web/HTTP/Methods)，指示對資源執行的所需操作。雖然它們也可以是名詞，但這些請求方法有時被稱為 HTTP 動詞。最常見的請求是 `GET` 和 `POST`：

- {{HTTPMethod("GET")}} 方法請求指定資源的數據表示。使用 `GET` 的請求應僅檢索數據。
- {{HTTPMethod("POST")}} 方法將數據發送到伺服器，以便它可以更改其狀態。這是通常用於 [HTML 表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)的方法。

## 伺服器回應的結構

連接的代理發送了其請求後，Web 伺服器對其進行處理，最終返回一個回應。與用戶端請求類似，伺服器回應由文本指令組成，用 CRLF 分隔，分成三個塊：

1. 第一行（_狀態行_）由使用的 HTTP 版本的確認和回應狀態碼（以及其簡短的人類可讀文本含義）組成。
2. 接下來的行表示特定的 HTTP 標頭，向用戶端提供有關發送的數據的訊息（例如類型、數據大小、使用的壓縮演算法、有關緩存的提示）。與用戶端請求的 HTTP 標頭塊類似，這些 HTTP 標頭形成一個以空行結束的塊。
3. 最後一個塊是一個數據塊，其中包含可選的數據。

### 範例回應

成功的網頁回應：

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A simple webpage</title>
</head>
<body>
  <h1>Simple HTML webpage</h1>
  <p>Hello, world!</p>
</body>
</html>
```

通知請求的資源已永久移動：

```http
HTTP/1.1 301 Moved Permanently
Server: Apache/2.4.37 (Red Hat)
Content-Type: text/html; charset=utf-8
Date: Thu, 06 Dec 2018 17:33:08 GMT
Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

<!doctype html>… (contains a site-customized page helping the user to find the missing resource)
```

通知請求的資源不存在：

```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 38217
Connection: keep-alive
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:35:13 GMT
Expires: Thu, 06 Dec 2018 17:35:13 GMT
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
X-Cache: Error from cloudfront

<!doctype html>… (contains a site-customized page helping the user to find the missing resource)
```

### 回應狀態碼

[HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Status)指示特定的 HTTP 請求是否成功完成。回應分為五類：資訊回應、成功回應、重新導向訊息、用戶端錯誤回應和伺服器錯誤回應。

- {{HTTPStatus(200)}}: OK。請求已成功。
- {{HTTPStatus(301)}}: Moved Permanently。此回應碼表示所請求的資源的 URI 已更改。
- {{HTTPStatus(404)}}: Not Found。伺服器找不到所請求的資源。

## 參見

- [URL](/zh-TW/docs/Web/URI)
- [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Status)
