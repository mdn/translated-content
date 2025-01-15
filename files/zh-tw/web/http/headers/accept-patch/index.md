---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 48d9e84c6473101112582296ee4c6e3d960a2f79
---

{{HTTPSidebar}}

**`Accept-Patch`** HTTP 回應標頭用來宣告伺服器在 PATCH 請求中能夠理解哪些媒體類型。

當伺服器回應任何方法時，**`Accept-Patch`** 表示在由請求 URI 所標示的資源上允許使用 PATCH。以下兩種常見情況會導致這種情況：

伺服器收到帶有不支援媒體類型的 PATCH 請求時，可能會回應 {{HTTPStatus("415")}} `Unsupported Media Type` 並帶有一個或多個支援的媒體類型的 Accept-Patch 標頭。

> [!NOTE]
> IANA 登記處維護了一個[媒體類型清單](https://www.iana.org/assignments/media-types/media-types.xhtml)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## 指令

無

## 範例

```http
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## 規範

{{Specifications}}

## 瀏覽器相容性

瀏覽器相容性對此標頭無關緊要（標頭由伺服器發送，且規範未定義用戶端行為）。

## 參見

- HTTP 方法 {{HTTPMethod("PATCH")}}
- HTTP 語意和上下文 {{RFC("7231", "PUT", "4.3.4")}}
