---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: 3c29ffa78c551ea6a61bbb795a5f97a66c6868c0
---

{{HTTPSidebar}}

**`Accept-Encoding`** 請求的 HTTP 標頭指示用戶端可以理解的內容編碼（通常是壓縮演算法）。伺服器使用[內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)來選擇其中一個提議，並使用 {{HTTPHeader("Content-Encoding")}} 回應標頭通知用戶端該選擇。

即使用戶端和伺服器都支援相同的壓縮演算法，如果 `identity` 值也可接受，伺服器可能選擇不壓縮回應主體。有兩種常見情況會導致這種情況：

- 要發送的資料已經壓縮，因此第二次壓縮不會減少傳輸的資料大小。這對於預先壓縮的圖像格式（例如 JPEG）也是如此；
- 伺服器負載過重，無法分配計算資源來執行壓縮。例如，微軟建議如果伺服器使用超過其計算能力的 80%，就不要壓縮。

只要 `identity;q=0` 或 `*;q=0` 指令未明確禁止表示無編碼的 `identity` 值，伺服器就不得返回 {{HTTPStatus("406")}} `Not Acceptable` 錯誤。

> **備註：**
>
> - IANA 註冊表維護了一份[官方內容編碼列表](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)。
> - `bzip` 和 `bzip2` 編碼是非標準的，但在某些情況下可能會使用，包括對舊版的支援。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: identity
Accept-Encoding: *

// 使用品質值語法加權多個演算法：
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## 指令

- `gzip`
  - : 使用 [Lempel-Ziv 編碼](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77)（LZ77）和 32 位元的 CRC 的壓縮格式。
- `compress`
  - : 使用 [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW)（LZW）演算法的壓縮格式。
- `deflate`
  - : 使用具有 [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) 壓縮演算法的 [zlib](https://en.wikipedia.org/wiki/Zlib) 結構的壓縮格式。
- `br`
  - : 使用 [Brotli](https://en.wikipedia.org/wiki/Brotli) 演算法的壓縮格式。
- `zstd`
  - : 使用 [Zstandard](https://en.wikipedia.org/wiki/Zstd) 演算法的壓縮格式。
- `identity`
  - : 表示恆等函數（即無修改或壓縮）。即使省略，此值始終被視為可接受的。
- `*`
  - : 匹配標頭中尚未列出的任何內容編碼。如果標頭不存在，則這是預設值。此指令不表示支援任何演算法，而表示不表達任何偏好。
- `;q=`（加權 q 值）
  - : 任何值都按照使用相對 [quality value](/zh-TW/docs/Glossary/Quality_values)（稱為 _weight_）表示的偏好順序。

## 範例

```http
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: gzip, compress, br, zstd

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
- 有關內容協商結果的標頭：{{HTTPHeader("Content-Encoding")}}
- 其他類似的標頭：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli compression")}}
- {{Glossary("GZip compression")}}
- {{Glossary("Zstandard compression")}}
