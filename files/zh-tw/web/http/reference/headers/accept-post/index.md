---
title: Accept-Post 標頭
slug: Web/HTTP/Reference/Headers/Accept-Post
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

HTTP **`Accept-Post`** {{Glossary("response header", "回應標頭")}}用於告知伺服器在 {{HTTPMethod("POST")}} 請求中接受哪些[媒體類型](/zh-TW/docs/Web/HTTP/Guides/MIME_types)。例如，伺服器接收到不支援的媒體類型的 `POST` 請求時，可能會回應 {{HTTPStatus("415", "415 Unsupported Media Type")}} 狀態碼並附上參考一個或多個支援媒體類型的 `Accept-Post` 標頭。

此標頭應出現在對支援 `POST` 方法的資源的 {{HTTPMethod("OPTIONS")}} 請求的回應中。在對任何請求方法的回應中出現 `Accept-Post` 標頭，都隱含地表示允許在請求的目標資源上進行 `POST` 操作。

> [!NOTE]
> IANA 維護著[官方內容編碼列表](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)。`bzip` 和 `bzip2` 編碼是非標準的，但在某些情況下可能會使用，特別是為了舊版支援。

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
Accept-Post: <media-type>/<subtype>
Accept-Post: <media-type>/*
Accept-Post: */*

// 以逗號分隔的媒體類型列表
Accept-Post: <media-type>/<subtype>, <media-type>/<subtype>
```

> [!NOTE]
> `Accept-Post` 標頭指定媒體範圍的方式與 {{HTTPHeader("Accept")}} 相同，只是它沒有透過 `q`（{{Glossary("quality values", "品質值")}}）參數來表示偏好。這是因為 `Accept-Post` 是回應標頭，而 `Accept` 是請求標頭。

## 指令

- `<media-type>/<subtype>`
  - : 單一、精確的[媒體類型](/zh-TW/docs/Web/HTTP/Guides/MIME_types)，例如 `text/html`。
- `<media-type>/*`
  - : 不含子類型的媒體類型。例如，`image/*` 對應 `image/png`、`image/svg`、`image/gif` 及其他圖片類型。
- `*/*`
  - : 任何媒體類型。

## 範例

```http
Accept-Post: application/json, text/plain
Accept-Post: image/webp
Accept-Post: */*
```

## 規範

{{Specifications}}

## 瀏覽器相容性

瀏覽器相容性與此標頭無關。此標頭由伺服器傳送，且規範未定義用戶端行為。

## 參見

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}} 請求方法
