---
title: Accept-Patch 標頭
slug: Web/HTTP/Reference/Headers/Accept-Patch
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP **`Accept-Patch`** {{Glossary("response header", "回應標頭")}}用來宣告伺服器在 {{HTTPMethod("PATCH")}} 請求中能夠理解哪些[媒體類型](/zh-TW/docs/Web/HTTP/Guides/MIME_types)。例如，收到帶有不支援媒體類型的 `PATCH` 請求的伺服器，可以回覆 {{HTTPStatus("415", "415 Unsupported Media Type")}} 並帶有 `Accept-Patch` 標頭，以引用一或多個支援的媒體類型。

此標頭應出現在對支援 `PATCH` 方法的資源發出的 {{HTTPMethod("OPTIONS")}} 請求的回應中。在對任何請求方法的回應中出現 `Accept-Patch` 標頭，即隱含地表示允許在請求的目標資源上使用 `PATCH`。

> [!NOTE]
> IANA 維護了一份[官方內容編碼清單](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)。`bzip` 和 `bzip2` 編碼非標準，但在某些情況下可能會使用，特別是為了支援舊版。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Accept-Patch: <media-type>/<subtype>
Accept-Patch: <media-type>/*
Accept-Patch: */*

// 以逗號分隔的媒體類型清單
Accept-Patch: <media-type>/<subtype>, <media-type>/<subtype>
```

## 指令

- `<media-type>/<subtype>`
  - : 單一、精確的[媒體類型](/zh-TW/docs/Web/HTTP/Guides/MIME_types)，例如 `text/html`。
- `<media-type>/*`
  - : 不含子類型的媒體類型。例如 `image/*` 對應 `image/png`、`image/svg`、`image/gif` 及其他圖片類型。
- `*/*`
  - : 任何媒體類型。

## 範例

```http
Accept-Patch: application/json
Accept-Patch: application/json, text/plain
Accept-Patch: text/plain;charset=utf-8
```

## 規範

{{Specifications}}

## 瀏覽器相容性

瀏覽器相容性與此標頭無關。伺服器會發送此標頭，且規範未定義用戶端的行為。

## 參見

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}} 請求方法
