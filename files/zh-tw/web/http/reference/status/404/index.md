---
title: 404 Not Found
slug: Web/HTTP/Reference/Status/404
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

HTTP **`404 Not Found`** [用戶端錯誤回應](/en-US/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器找不到所請求的資源。導致 404 頁面的連結通常稱為無效或死連結，可能會受到[失效連結](https://zh.wikipedia.org/zh-tw/%E5%A4%B1%E6%95%88%E9%80%A3%E7%B5%90)的影響。

404 狀態碼僅表示資源遺失，但不指明這是暫時的還是永久的。如果資源永久刪除，伺服器應傳送 {{HTTPStatus("410", "410 Gone")}} 狀態。

{+404 errors on a website can lead to a poor user experience for your visitors, so the number of broken links (internal and external) should be minimized to prevent frustration for readers.+}
{+Common causes of 404 responses are mistyped URLs or pages that are moved or deleted without redirection.+}
{+For more information, see the [Redirections in HTTP](/en-US/docs/Web/HTTP/Guides/Redirections) guide.+}

## 狀態

```http
404 Not Found
```

## Examples

### Page not found

Fetching a non-existent page may look like the following request:

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

The server returns a response similar to this:

```http
HTTP/1.1 404 Not Found
Age: 249970
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Expires: Fri, 05 Jul 2024 11:40:58 GMT
Last-Modified: Tue, 25 Jun 2024 14:14:48 GMT
Server: ECAcc (nyd/D13E)
Vary: Accept-Encoding
X-Cache: 404-HIT
Content-Length: 1256

<!doctype html>
<head>
    <title>404 not found</title>
    ...
```

### Custom error page in Apache

For the Apache server, you can specify a path to a custom 404 page in a `.htaccess` file.
The example below uses `notfound.html` as a page to show visitors on 404s, although a common approach is to name the file `404.html` or `404.php` (depending on the server-side technology) at the top-level of the server:

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> Custom 404 page design is a good thing in moderation.
> Feel free to make your 404 page humorous and human, but don't confuse your visitors as to why they are seeing something unexpected.
>
> For an example of a custom 404 page, see the [KonMari 404 page](https://konmari.com/404).

## 規範

{{Compat}}

## 參見

- [HTTP response status codes](/en-US/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("410")}}
- [維基百科: HTTP 404](https://zh.wikipedia.org/zh-tw/HTTP_404)
