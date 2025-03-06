---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
l10n:
  sourceCommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{HTTPSidebar}}

**`Accept-Post`** HTTP 回應標頭用於告知伺服器接受哪些[媒體類型](/zh-TW/docs/Web/HTTP/MIME_types)的 HTTP POST 請求。

任何方法回應中的 **`Accept-Post`** 都表示在請求的資源上允許 `POST` 操作（標頭中的任何文件／媒體格式進一步指示允許的文件格式）。

例如，伺服器接收到不支援的媒體類型的 `POST` 請求時，可能會回應 {{HTTPStatus("415")}} `Unsupported Media Type` 狀態碼並附上參考一個或多個支援媒體類型的 **`Accept-Post`** 標頭。

> [!NOTE]
>
> - IANA 註冊表維護[官方內容編碼列表](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)。
> - `bzip` 和 `bzip2` 編碼是非標準的，但在某些情況下，包括遺留支援時可能會使用。

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
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

> **備註：** `Accept-Post` 標頭指定的媒體範圍與 {{HTTPHeader("Accept")}} 相同，只是沒有偏好（即沒有 `q` 參數）。這是因為 `Accept-Post` 是回應標頭，而 `Accept` 是請求標頭。

## 指令

無。

## 範例

```http
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## 規範

{{Specifications}}

## 瀏覽器相容性

瀏覽器相容性與此標頭無關（標頭由伺服器傳送，且規範未定義用戶端行為）。

## 參見

- HTTP 方法 {{HTTPMethod("POST")}}
- HTTP 語義和上下文 {{RFC("7231", "POST", "4.3.3")}}
