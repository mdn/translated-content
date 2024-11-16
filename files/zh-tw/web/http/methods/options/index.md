---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
l10n:
  sourceCommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

{{HTTPSidebar}}

**HTTP `OPTIONS` 方法**用於請求給定 URL 或伺服器的允許通訊選項。用戶端可以使用此方法指定 URL，或使用星號（`*`）來指代整個伺服器。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>可能</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "冪等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row"><a href="/zh-TW/docs/Learn/Forms">HTML 表單</a>中是否允許</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## 範例

### 辨識允許的請求方法

要查找伺服器支援的請求方法，可以使用 `curl` 命令列程序發出 `OPTIONS` 請求：

```bash
curl -X OPTIONS https://example.org -i
```

然後回應中包含一個包含允許方法的 {{HTTPHeader("Allow")}} 標頭：

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### CORS 中的預檢請求

在 [CORS](/zh-TW/docs/Web/HTTP/CORS) 中，會使用 `OPTIONS` 方法發送[預檢請求](/zh-TW/docs/Glossary/Preflight_request)，以便伺服器可以回應是否允許發送請求。在此範例中，我們將請求許可權的參數列出如下：

- 在預檢請求中發送的 {{HTTPHeader("Access-Control-Request-Method")}} 標頭告訴伺服器，當實際請求被發送時，它將具有 {{HTTPMethod("POST")}} 請求方法。
- {{HTTPHeader("Access-Control-Request-Headers")}} 標頭告訴伺服器，當實際請求被發送時，它將具有 `X-PINGOTHER` 和 `Content-Type` 標頭。

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

伺服器現在可以回應是否接受這些情況下的請求。在此範例中，伺服器回應表示：

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 允許 `https://foo.example` 來源通過以下方式請求 `bar.example/resources/post-here/` URL：
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : URL 的允許方法為 {{HTTPMethod("POST")}}、{{HTTPMethod("GET")}} 和 `OPTIONS`。（此標頭類似於 {{HTTPHeader("Allow")}} 回應標頭，但僅用於 [CORS](/zh-TW/docs/Web/HTTP/CORS)。）
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` 和 `Content-Type` 為 URL 的允許請求標頭。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 上述許可權可以被緩存 86400 秒（1 天）。

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

## 狀態碼

{{HTTPStatus("200")}} OK 和 {{HTTPStatus("204")}} No Content 都是[允許的狀態碼](https://fetch.spec.whatwg.org/#ref-for-ok-status)，但一些瀏覽器錯誤地認為 `204 No Content` 應用於資源，並且不會發送後續請求以取得它。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Allow")}} 標頭
- [CORS](/zh-TW/docs/Web/HTTP/CORS)
