---
title: DELETE
slug: Web/HTTP/Methods/DELETE
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**HTTP `DELETE` 方法**用於刪除指定的資源。

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
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
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
DELETE /file.html HTTP/1.1
```

## 範例

### 請求

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

### 回應

如果 `DELETE` 方法成功應用，可能會有幾種可能的回應狀態碼：

- 如果動作可能成功但尚未生效，則可能是 {{HTTPStatus("202")}}（`Accepted`）狀態碼。
- 如果動作已生效且無需提供進一步信息，則可能是 {{HTTPStatus("204")}}（`No Content`）狀態碼。
- 如果動作已生效且回應消息包含描述狀態的表示，則可能是 {{HTTPStatus("200")}}（`OK`）狀態碼。

```http
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTTP 狀態：{{HTTPStatus("200")}}、{{HTTPStatus("202")}}、{{HTTPStatus("204")}}
