---
title: Content-Type 標頭
slug: Web/HTTP/Reference/Headers/Content-Type
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP **`Content-Type`** {{Glossary("representation header", "表示標頭")}}用於指示資源在套用任何內容編碼之前的原始{{Glossary("MIME type", "媒體類型")}}。

在回應中，`Content-Type` 標頭會告知用戶端回傳資料的媒體類型。在請求中（例如 {{HTTPMethod("POST")}} 或 {{HTTPMethod("PUT")}}），用戶端使用 `Content-Type` 標頭來指定傳送給伺服器的內容類型。如果伺服器的實作或組態對內容類型處理很嚴格，可能會回傳 {{HTTPStatus("415")}} 用戶端錯誤回應。

`Content-Type` 標頭與 {{HTTPHeader("Content-Encoding")}} 的不同之處在於，`Content-Encoding` 可幫助接收者了解如何將資料解碼回其原始形式。

> [!NOTE]
> 如果瀏覽器對回應執行 [MIME 嗅探](/zh-TW/docs/Web/HTTP/Guides/MIME_types#mime_嗅探)（或內容嗅探），此值可能會被忽略。為防止瀏覽器使用 MIME 嗅探，請將 {{HTTPHeader("X-Content-Type-Options")}} 標頭值設為 `nosniff`。更多詳細資訊請參見 [MIME 類型驗證](/zh-TW/docs/Web/Security/Practical_implementation_guides/MIME_types)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Representation header", "表示標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS 安全清單回應標頭")}}
      </th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS 安全清單請求標頭")}}
      </th>
      <td>
        是*
      </td>
    </tr>
  </tbody>
</table>

\* 值不能包含 [CORS 不安全的請求標頭位元組](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte)：`"():<>?@[\]{},`、Delete `0x7F` 以及 `0x00` 到 `0x19` 的控制字元（Tab `0x09` 除外）。其解析後的值（忽略參數）的媒體類型也必須是 `application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain` 之一。

## 語法

```plain
Content-Type: <media-type>
```

例如：

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=ExampleBoundaryString
```

## 指令

- `<media-type>`
  - : 資源或資料的[媒體類型](/zh-TW/docs/Web/HTTP/Guides/MIME_types)。可包含以下參數：
    - **`charset`**：表示使用的{{Glossary("character encoding", "字元編碼")}}標準。該值不區分大小寫，但建議使用小寫。
    - **`boundary`**：對於多部分實體，`boundary` 參數是必需的。它用於劃定訊息多個部分的邊界。該值由 1 到 70 個字元組成（不以空白結尾），這些字元在不同系統（例如電子郵件閘道）的上下文中被認為是穩健的。通常，標頭邊界在請求主體中會以兩個破折號為前綴，而最後的邊界末尾會附加兩個破折號。

## 範例

### 提供具有正確內容類型的資產

在以下兩個範例回應中，JavaScript 和 CSS 資產分別使用 `text/javascript` 和 `text/css` 提供。為這些資源設定正確的內容類型有助於瀏覽器更安全、更高效地處理它們。更多資訊請參見[正確設定伺服器 MIME 類型](/zh-TW/docs/Learn/Server-side/Configuring_server_MIME_types)。

```http
HTTP/1.1 200
content-encoding: br
content-type: text/javascript; charset=utf-8
vary: Accept-Encoding
date: Fri, 21 Jun 2024 14:02:25 GMT
content-length: 2978

const videoPlayer=document.getElementById...
```

```http
HTTP/3 200
server: nginx
date: Wed, 24 Jul 2024 16:53:02 GMT
content-type: text/css
vary: Accept-Encoding
content-encoding: br

.super-container{clear:both;max-width:100%}...
```

### 多部分表單中的 `Content-Type`

在 {{HTTPMethod("POST")}} 請求中，來自 HTML 表單提交的 `Content-Type` 由 {{HTMLElement("form")}} 元素上的 `enctype` 屬性指定。

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="描述輸入值" />
  <input type="file" name="myFile" />
  <button type="submit">提交</button>
</form>
```

請求看起來像下面的範例，為簡潔起見省略了一些標頭。在請求中，使用 `ExampleBoundaryString` 的邊界是為了說明，但在實務上，瀏覽器會建立一個更像 `---------------------------1003363413119651595289485765` 的字串。

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=ExampleBoundaryString

--ExampleBoundaryString
Content-Disposition: form-data; name="description"

描述輸入值
--ExampleBoundaryString
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

[使用者選擇的 foo.txt 檔案內容]
--ExampleBoundaryString--
```

### URL 編碼表單提交中的 `Content-Type`

當表單不涉及檔案上傳且使用較簡單的欄位時，URL 編碼的表單可能更方便，其中表單資料包含在請求主體中：

```html
<form action="/submit" method="post">
  <label for="comment">評論：</label>
  <input type="text" id="comment" name="comment" value="你好！" />
  <button type="submit">提交</button>
</form>
```

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 17

comment=你好！
```

### 使用 JSON 的 REST API 中的 `Content-Type`

許多 {{Glossary("REST")}} API 使用 `application/json` 作為內容類型，這對於機器對機器的通訊或程式化互動很方便。以下範例顯示了一個 {{HTTPStatus("201", "201 Created")}} 回應，展示了成功請求的結果：

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "新使用者已建立",
  "user": {
    "id": 123,
    "firstName": "Paul",
    "lastName": "Klee",
    "email": "p.klee@example.com"
  }
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}} 標頭
- {{HTTPHeader("Vary")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPHeader("X-Content-Type-Options")}}
