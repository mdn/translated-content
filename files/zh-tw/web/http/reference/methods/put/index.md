---
title: PUT
slug: Web/HTTP/Reference/Methods/PUT
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**HTTP `PUT` 方法**用請求有效負載創建新資源或替換目標資源的表示。

`PUT` 和 {{HTTPMethod("POST")}} 之間的區別在於 `PUT` 是幂等的：調用一次或多次連續調用具有相同效果（即沒有*副*作用），而連續相同的 {{HTTPMethod("POST")}} 請求可能會產生額外的效果，類似於多次下單。

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
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
      <td>否</td>
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
PUT /new.html HTTP/1.1
```

## 範例

### 請求

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### 回應

如果目標資源沒有當前表示並且 `PUT` 請求成功創建了一個，那麼原伺服器必須通過發送 {{HTTPStatus("201")}}（`Created`）回應來通知用戶代理。

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

如果目標資源具有當前表示且該表示根據所附表示的狀態成功修改，則原伺服器必須發送 {{HTTPStatus("200")}}（`OK`）或 {{HTTPStatus("204")}}（`No Content`）回應以指示請求的成功完成。

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
