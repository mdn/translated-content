---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: 27ed2557b2d3f07807b2f662dc2cf13208406eb9
---

{{HTTPSidebar}}

**`Content-Type`** 表示標頭用來指示資源的原始{{Glossary("MIME type","媒體類型")}}（在任何內容編碼應用於發送之前）。

在回應中，`Content-Type` 標頭向用戶端提供返回內容的實際內容類型。此標頭的值可能會被忽略，例如在瀏覽器進行 MIME 嗅探時，設置 {{HTTPHeader("X-Content-Type-Options")}} 標頭值為 `nosniff` 可以防止這種行為。

在請求中（例如 {{HTTPMethod("POST")}} 或 {{HTTPMethod("PUT")}}），用戶端告訴伺服器實際發送的數據類型。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Representation header", "表示標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("CORS-safelisted response header", "CORS 安全清單回應標頭")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("CORS-safelisted request header", "CORS 安全清單請求標頭")}}</th>
      <td>是，附加限制是值不能包含 <em>CORS 不安全的請求標頭字節</em>：0x00-0x1F（除了 0x09 (HT)），<code>"():&#x3C;>?@[\]{}</code> 和 0x7F (DEL)。 <br />值解析後的 MIME 類型（忽略參數）必須是 <code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code> 或 <code>text/plain</code> 之一。</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## 指令

- `media-type`
  - : 資源或數據的 [MIME 類型](/zh-TW/docs/Web/HTTP/MIME_types)。
- charset
  - : 字符編碼標準。大小寫不敏感，推薦使用小寫。
- boundary
  - : 對於多部分實體，`boundary` 指令是必需的。該指令由 1 到 70 個字符組成（不以空白結尾），這些字符被認為是通過電子郵件網關非常穩定的字符集合。它用於封裝消息多個部分的邊界。通常，標頭邊界前面加上兩個短劃，最後的邊界末尾加上兩個短劃。

## 範例

### HTML 表單中的 `Content-Type`

在 {{HTTPMethod("POST")}} 請求中，來自 HTML 表單提交的 `Content-Type` 由 {{HTMLElement("form")}} 元素上的 `enctype` 屬性指定。

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

請求看起來像這樣（省略了一些不太重要的標頭）：

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
