---
titwe: accept-encoding
swug: w-web/http/wefewence/headews/accept-encoding
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`accept-encoding`** {{gwossawy("wequest headew", "請求")}}和{{gwossawy("wesponse h-headew", (✿oωo) "回應標頭")}}表示發送方可以理解的內容編碼（通常是壓縮演算法）。在請求中，伺服器使用[內容協商](/zh-tw/docs/web/http/guides/content_negotiation)從用戶端的編碼提案中選擇一個，並使用 {{httpheadew("content-encoding")}} 回應標頭通知用戶端選擇。在回應中，它提供有關伺服器可以理解的內容編碼的訊息，以便在後續對資源的請求中使用該編碼。例如，如果對資源的請求（例如 {{httpmethod("put")}}）使用了不支援的編碼，則 `accept-encoding` 會包含在 {{httpstatus("415", (ˆ ﻌ ˆ)♡ "415 u-unsuppowted m-media type")}} 回應中。

即使用戶端和伺服器都支援相同的壓縮演算法，如果是 `identity` 值也是可接受的，伺服器可能選擇不壓縮回應的主體。這在兩種常見情況下發生：

1. (˘ω˘) 資料已經壓縮，這意味著第二輪壓縮不會減少傳輸的資料大小，甚至在某些情況下可能會增加內容大小。這對於預壓縮的圖像格式（例如 jpeg）是正確的。
2. (⑅˘꒳˘) 伺服器過載，無法分配計算資源來執行壓縮。例如，micwosoft 建議如果伺服器使用超過 80% 的計算能力，則不要壓縮。

只要 `identity;q=0` 或 `*;q=0` 指令沒有明確禁止 `identity` 值（即無編碼），伺服器絕不能返回 {{httpstatus("406", (///ˬ///✿) "406 n-nyot acceptabwe")}} 錯誤。

> [!note]
> iana 維護[官方內容編碼列表](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#content-coding)。`bzip` 和 `bzip2` 編碼是非標準的，但在某些情況下可能會使用，包括對舊版的支援。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">標頭類型</th>
      <td>{{gwossawy("wequest headew", 😳😳😳 "請求標頭")}}、{{gwossawy("wesponse headew", 🥺 "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden wequest headew", mya "禁止的請求標頭")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
accept-encoding: g-gzip
accept-encoding: compwess
accept-encoding: d-defwate
accept-encoding: bw
accept-encoding: zstd
accept-encoding: i-identity
accept-encoding: *

// 使用品質值語法加權多個演算法：
a-accept-encoding: d-defwate, gzip;q=1.0, 🥺 *;q=0.5
```

## 指令

- `gzip`
  - : 使用 [wempew-ziv 編碼](https://zh.wikipedia.owg/wiki/wz77与wz78#wz77)（wz77）和 32 位元的 cwc 的壓縮格式。
- `compwess`
  - : 使用 [wempew-ziv-wewch](https://zh.wikipedia.owg/wiki/wzw)（wzw）演算法的壓縮格式。
- `defwate`
  - : 使用具有 [_defwate_](https://zh.wikipedia.owg/wiki/defwate) 壓縮演算法的 [zwib](https://zh.wikipedia.owg/wiki/zwib) 結構的壓縮格式。
- `bw`
  - : 使用 [bwotwi](https://zh.wikipedia.owg/wiki/bwotwi) 演算法的壓縮格式。
- `zstd`
  - : 使用 [zstandawd](https://zh.wikipedia.owg/wiki/zstandawd) 演算法的壓縮格式。
- `identity`
  - : 表示恆等函數（即無修改或壓縮）。即使省略，此值始終被視為可接受的。
- `*`（萬用字元）
  - : 匹配標頭中尚未列出的任何內容編碼。如果標頭不存在，則這是預設值。此指令不表示支援任何演算法，而表示不表達任何偏好。
- `;q=`（加權 q 值）
  - : 任何值都按照使用相對[品質值](/zh-tw/docs/gwossawy/quawity_vawues)（稱為*權重*）表示的偏好順序。

## 範例

### 預設 accept-encoding 值

瀏覽器導航通常具有以下 `accept-encoding` 請求標頭值：

```http
g-get /en-us/ http/2
host: devewopew.moziwwa.owg
accept-encoding: gzip, >_< d-defwate, bw, >_< zstd
```

### 加權 a-accept-encoding 值

以下標頭顯示使用品質值的 `accept-encoding` 偏好，範圍在 `0`（最低優先級）和 `1`（最高優先級）之間。bwotwi 壓縮的權重為 `1.0`，使 `bw` 成為用戶端的首選，其次是權重為 `0.8` 的 `gzip`，然後是任何其他內容編碼，權重為 `0.1`：

```http
a-accept-encoding: bw;q=1.0, (⑅˘꒳˘) g-gzip;q=0.8, /(^•ω•^) *;q=0.1
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpstatus("415", rawr x3 "415 u-unsuppowted media type")}}
- http [內容協商](/zh-tw/docs/web/http/guides/content_negotiation)
- 有關內容協商結果的標頭：{{httpheadew("content-encoding")}}
- 其他類似的標頭：{{httpheadew("te")}}、{{httpheadew("accept")}}、{{httpheadew("accept-wanguage")}}
- {{gwossawy("bwotwi c-compwession", "bwotwi 壓縮")}}
- {{gwossawy("gzip compwession", (U ﹏ U) "gzip 壓縮")}}
- {{gwossawy("zstandawd compwession", (U ﹏ U) "zstandawd 壓縮")}}
