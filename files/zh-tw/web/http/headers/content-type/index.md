---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}

**`Content-Type`** 用來表示資源的 {{Glossary("MIME type","media type")}} 。

在 HTTP 回應中，`Content-Type` 表頭是用來表示本次 HTTP 事務回傳的內容類型。瀏覽器有時會自己推測內容類型（MIME sniffing），如果要阻止這個行為，請在回應中設定 {{HTTPHeader("X-Content-Type-Options")}} 標頭為 `nosniff`。

在 HTTP 請求中（比如 {{HTTPMethod("POST")}} 或 {{HTTPMethod("PUT")}}），則是客戶端用來告訴伺服器自己傳的資料是什麼內容類型。

| Header type                                                      | {{Glossary("Entity header")}}                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}                 | no                                                                                                                                                                                                                                                                                                                                    |
| {{Glossary("CORS-safelisted response header")}} | yes                                                                                                                                                                                                                                                                                                                                   |
| {{Glossary("CORS-safelisted request header")}}     | yes, with the additional restriction that values can't contain a _CORS-unsafe request header byte_: 0x00-0x1F (except 0x09 (HT)), `"():<>?@[\]{}`, and 0x7F (DEL). It also needs to have a MIME type of its parsed value (ignoring parameters) of either `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`. |

## 語法

```html
Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
```

## 指令

- `media-type`
  - : 資料的 [內容類型（MIME type）](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- charset
  - : 編碼標準。
- boundary
  - : 對於多段的資料必須要使用 `boundary` 指令，由 1 到 70 字的字元組成（這樣做很適合寄信），而且不能以空白結束。它會用來標誌資料的每一個段落。通常第一個段落的前面會加上兩個破折號（-），而最後一個段落後面也會加上兩個破折號。

## 範例

### 在 HTML 表單設定 `Content-Type`

你可以在 HTML {{HTMLElement("form")}} 的 `enctype` 屬性，設定表單送出後的 {{HTTPMethod("POST")}} 請求的 `Content-Type` 。

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text">
  <input type="file" name="myFile">
  <button type="submit">Submit</button>
</form>
```

HTTP 請求大概長這樣（省略了一些不重要的標頭）：

```plain
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
