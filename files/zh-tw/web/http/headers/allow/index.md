---
title: Allow
slug: Web/HTTP/Headers/Allow
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Allow`** 標頭列出了資源所支援的方法集。

如果伺服器回應 {{HTTPStatus("405")}} `Method Not Allowed` 狀態碼，則必須傳送此標頭以指示可以使用哪些請求方法。空的 `Allow` 標頭表示資源不允許任何請求方法，這可能暫時發生在某些特定的資源上。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Allow: <http-methods>
```

## 指令

- \<http-methods>
  - : 允許的 [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)的逗號分隔列表。

## 範例

```http
Allow: GET, POST, HEAD
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
