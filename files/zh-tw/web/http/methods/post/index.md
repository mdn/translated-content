---
title: POST
slug: Web/HTTP/Methods/POST
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

**HTTP `POST` 方法**將數據發送到服務器。請求主體的類型由 {{HTTPHeader("Content-Type")}} 標頭指示。

{{HTTPMethod("PUT")}} 和 `POST` 之間的區別在於 `PUT` 是幂等的：調用一次或多次連續調用具有相同效果（即沒有*副*作用），而連續相同的 `POST` 可能會產生額外的效果，例如多次提交訂單。

`POST` 請求通常通過 [HTML 表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)發送，並導致服務器上的更改。在這種情況下，通過將適當的字串放入 {{HTMLElement("form")}} 元素的 [`enctype`](/zh-TW/docs/Web/HTML/Element/form#enctype) 屬性或 {{HTMLElement("input") }} 或 {{HTMLElement("button")}} 元素的 [`formenctype`](/zh-TW/docs/Web/HTML/Element/input#formenctype) 屬性來選擇內容類型：

- `application/x-www-form-urlencoded`：鍵和值以 `'&'` 分隔的鍵值元組形式進行編碼，鍵和值之間有 `'='`。鍵和值中的非字母數字符號均已 [URL 編碼](https://en.wikipedia.org/wiki/URL_encoding)：這就是為什麼此類型不適用於二進制數據（請改用 `multipart/form-data`）。
- `multipart/form-data`：每個值都作為一個數據塊（"主體部分"）發送，由用戶代理定義的分隔符（"邊界"）分隔每個部分。鍵在每個部分的 `Content-Disposition` 標頭中給出。
- `text/plain`

當 `POST` 請求通過 HTML 表單之外的方法發送，例如 {{domxref("fetch()")}} 調用時，主體可以採用任何類型。如 HTTP 1.1 規範所述，`POST` 被設計為允許一個統一的方法來涵蓋以下功能：

- 對現有資源進行註釋
- 將消息發佈到佈告板、新聞組、郵件列表或類似的文章組
- 通過註冊模式添加新用戶
- 將數據塊（例如提交表單的結果）提供給數據處理過程
- 通過附加操作擴展數據庫

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "冪等")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
      <td>僅當包含新鮮度信息時</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許
      </th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 語法

```http
POST /test
```

## 範例

使用默認的 `application/x-www-form-urlencoded` 內容類型的簡單表單：

```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

使用 `multipart/form-data` 內容類型的表單：

```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPMethod("GET")}}
