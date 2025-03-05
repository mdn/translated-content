---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
l10n:
  sourceCommit: f341bd4728d3448faf6b9fc3b45980c35c067f25
---

{{HTTPSidebar}}

HTTP **`Accept-Encoding`** {{glossary("request header", "請求")}}和{{glossary("response header", "回應標頭")}}表示發送方可以理解的內容編碼（通常是壓縮演算法）。在請求中，伺服器使用[內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)從用戶端的編碼提案中選擇一個，並使用 {{HTTPHeader("Content-Encoding")}} 回應標頭通知用戶端選擇。在回應中，它提供有關伺服器可以理解的內容編碼的訊息，以便在後續對資源的請求中使用該編碼。例如，如果對資源的請求（例如 {{HTTPMethod("PUT")}}）使用了不支援的編碼，則 `Accept-Encoding` 會包含在 {{HTTPStatus("415", "415 Unsupported Media Type")}} 回應中。

即使用戶端和伺服器都支援相同的壓縮演算法，如果是 `identity` 值也是可接受的，伺服器可能選擇不壓縮回應的主體。這在兩種常見情況下發生：

1. 資料已經壓縮，這意味著第二輪壓縮不會減少傳輸的資料大小，甚至在某些情況下可能會增加內容大小。這對於預壓縮的圖像格式（例如 JPEG）是正確的。
2. 伺服器過載，無法分配計算資源來執行壓縮。例如，Microsoft 建議如果伺服器使用超過 80% 的計算能力，則不要壓縮。

只要 `identity;q=0` 或 `*;q=0` 指令沒有明確禁止 `identity` 值（即無編碼），伺服器絕不能返回 {{HTTPStatus("406", "406 Not Acceptable")}} 錯誤。

> [!NOTE]
> IANA 維護[官方內容編碼列表](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)。`bzip` 和 `bzip2` 編碼是非標準的，但在某些情況下可能會使用，包括對舊版的支援。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}、{{Glossary("Response header", "回應標頭")}}</td>
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
- `*`（萬用字元）
  - : 匹配標頭中尚未列出的任何內容編碼。如果標頭不存在，則這是預設值。此指令不表示支援任何演算法，而表示不表達任何偏好。
- `;q=`（加權 q 值）
  - : 任何值都按照使用相對[品質值](/zh-TW/docs/Glossary/Quality_values)（稱為*權重*）表示的偏好順序。

## 範例

### 預設 Accept-Encoding 值

瀏覽器導航通常具有以下 `Accept-Encoding` 請求標頭值：

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### 加權 Accept-Encoding 值

以下標頭顯示使用品質值的 `Accept-Encoding` 偏好，範圍在 `0`（最低優先級）和 `1`（最高優先級）之間。Brotli 壓縮的權重為 `1.0`，使 `br` 成為用戶端的首選，其次是權重為 `0.8` 的 `gzip`，然後是任何其他內容編碼，權重為 `0.1`：

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Content_negotiation)
- 有關內容協商結果的標頭：{{HTTPHeader("Content-Encoding")}}
- 其他類似的標頭：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli compression", "Brotli 壓縮")}}
- {{Glossary("GZip compression", "GZip 壓縮")}}
- {{Glossary("Zstandard compression", "Zstandard 壓縮")}}
