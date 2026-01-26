---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP **`226 IM Used`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示伺服器正在回傳一個{{Glossary("delta", "增量")}}以回應 {{HTTPMethod("GET")}} 請求。它用於*HTTP 增量編碼*的上下文中。

IM 代表*實例操作*，指的是產生*增量*的演算法。在增量編碼中，用戶端會發送一個帶有兩個標頭的 {{HTTPMethod("GET")}} 請求：`A-IM:`，表示對差異演算法的偏好；以及 {{HTTPHeader("If-None-Match")}}，指定其擁有的資源版本。伺服器會以相對於給定基礎文件的差異來回應，而不是回傳完整的文件。此回應使用 `226` 狀態碼、一個描述所用差異演算法的 `IM:` 標頭，並可能包含一個 `Delta-Base:` 標頭，其 {{HTTPHeader("ETag")}} 與增量關聯的基礎文件相符。

> [!WARNING]
> 對於 HTTP 增量編碼的支援不佳，意味著實作很少。相反地，大多數系統僅依賴[壓縮方法](/zh-TW/docs/Web/HTTP/Guides/Compression)來減少頻寬，儘管壓縮和增量編碼的組合是可能的。
>
> 即使用戶端和伺服器支援增量編碼，代理伺服器或快取可能不支援，且將 HTTP 增量編碼新增至系統的複雜性可能超過其效益。

## 狀態

```http
226 IM Used
```

## 範例

### 使用 `vcdiff` 增量演算法接收 `226`

在以下的 `GET` 請求中，用戶端請求一個資源，且已快取一個 ETag 為 `abcd123` 的版本。`A-IM:` 標頭表示偏好使用 `vcdiff` 和 `diffe` 增量演算法：

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

假設伺服器支援增量編碼，它會回應該 ETag 為 `abcd123` 版本之後的差異。`IM` 標頭表示使用了 `vcdiff` 演算法，而 `Delta-Base:` 標頭表示該差異是基於 ETag 為 `abcd123` 的資源。

```http
HTTP/1.1 226 IM Used
ETag: "5678a23"
IM: vcdiff
Content-Type: text/plain
Content-Length: 123
Delta-Base: abcd123

...
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("200")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [聯合供稿增量有助於降低訂閱帶寬成本。](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
