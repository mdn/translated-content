---
title: PATCH
slug: Web/HTTP/Methods/PATCH
l10n:
  sourceCommit: 3138c50f08e9fba1176aa77dbbfdb33e22357ddd
---

{{HTTPSidebar}}

**HTTP `PATCH` 方法**對資源應用部分修改。

`PATCH` 在某種程度上類似於 {{Glossary("CRUD")}} 中的「更新」概念（一般來說，HTTP 與 {{Glossary("CRUD")}} 不同，兩者不應混淆）。

`PATCH` 被視為對資源進行修改的一組指令。與 {{HTTPMethod("PUT")}} 相比較，後者是對資源的完整表示。

`PATCH` 不一定是幂等的，儘管它可以是。與 {{HTTPMethod("PUT")}} 相比較，後者總是幂等的。「幂等」這個詞意味著任意次重複、相同的請求將使資源處於相同的狀態。例如，如果自動遞增計數器字段是資源的一部分，那麼對於 {{HTTPMethod("PUT")}} 來說自然會覆蓋它（因為它覆蓋了一切），但對於 `PATCH` 來說不一定如此。

`PATCH`（像 {{HTTPMethod("POST")}} 一樣）*可能*會對其他資源產生副作用。

要找出伺服器是否支持 `PATCH`，伺服器可以通過將其添加到 {{HTTPHeader("Allow")}} 或 {{HTTPHeader("Access-Control-Allow-Methods")}}（對於 [CORS](/zh-TW/docs/Web/HTTP/CORS)）回應標頭中的列表來宣告其支持。

另一個（隱式）表明 `PATCH` 被允許的指示是 {{HTTPHeader("Accept-Patch")}} 標頭的存在，該標頭指定伺服器接受的修補程式文件格式。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>可能</td>
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
      <td>僅在包含新鮮訊息時</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
PATCH /file.txt HTTP/1.1
```

## 範例

### 請求

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### 回應

任何 [2xx](https://httpwg.org/specs/rfc9110.html#status.2xx) 狀態碼均表示成功的回應。

在下面的範例中，使用了 {{HTTPStatus("204")}} 回應代碼，因為回應不包含有效負載體。{{HTTPStatus("200")}} 回應可以包含有效負載體。

```http
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}、{{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}}——指定伺服器接受的修補程式文件格式。
