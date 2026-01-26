---
title: Allow 標頭
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`Allow`** {{Glossary("response header", "回應標頭")}}列出了資源所支援的[請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)集合。如果伺服器回應 {{HTTPStatus("405", "405 Method Not Allowed")}} 狀態碼，則必須傳送此標頭以指示哪些請求方法可以替代使用。空的 `Allow` 值表示資源不允許任何請求方法，這可能暫時發生在某些特定的資源上。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Allow: <http-methods>
```

## 指令

- `<http-methods>`
  - : 資源支援的允許方法，以逗號分隔的列表。

## 範例

```http
Allow: GET, POST, HEAD
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("405", "405 Method Not Allowed")}} 狀態碼
- {{HTTPHeader("Server")}}
- {{HTTPMethod("OPTIONS")}}
