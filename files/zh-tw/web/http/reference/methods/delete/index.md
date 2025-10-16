---
title: DELETE 請求方法
slug: Web/HTTP/Reference/Methods/DELETE
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`DELETE`** 方法要求伺服器刪除指定的資源。

`DELETE` 方法對訊息主體沒有定義語意，因此主體應為空。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>可能</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>可能</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "冪等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可快取")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
DELETE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : 結合 {{HTTPHeader("Host")}} 標頭提供的資訊後，用來識別請求目標資源。在發送給原始伺服器的請求中，這是一個絕對路徑（例如：`/path/to/file.html`）；在發送給代理伺服器的請求中，則是一個絕對 URL（例如：`http://www.example.com/path/to/file.html`）。
- `<query>` {{optional_inline}}
  - : 可選的查詢組件，前面加上問號 `?`。通常用於以 `key=value` 鍵值對的形式攜帶識別資訊。

## 範例

### 成功刪除資源

以下請求要求伺服器刪除資源 `file.html`：

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

如果請求成功，伺服器可能回傳多種[成功回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)。{{HTTPStatus("204", "204 No Content")}} 回應表示請求成功且不需回傳額外資訊給用戶：

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

{{HTTPStatus("200", "200 OK")}} 回應表示請求已成功，且回應主體中包含描述結果的表示法：

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 1234

<html>
  <body>
    <h1>檔案「file.html」已刪除。</h1>
  </body>
</html>
```

{{HTTPStatus("202", "202 Accepted")}} 回應表示伺服器已接受請求且可能會成功，但資源尚未被刪除。

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<html>
  <body>
    <h1>已接受刪除「file.html」的請求。</h1>
    <p>詳情請參見<a href="http://example.com/tasks/123/status">狀態監控</a>。</p>
  </body>
</html>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

瀏覽器不會在用戶觸發的操作中使用 `DELETE` 方法，因此「瀏覽器相容性」不適用。開發者可以透過 [`fetch()`](/zh-TW/docs/Web/API/Window/fetch) 設定此請求方法。

## 參見

- HTTP 狀態：{{HTTPStatus("200")}}、{{HTTPStatus("202")}}、{{HTTPStatus("204")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 標頭](/zh-TW/docs/Web/HTTP/Reference/Headers)
