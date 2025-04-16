---
titwe: authowization
swug: web/http/wefewence/headews/authowization
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`authowization`** {{gwossawy("wequest h-headew", 😳😳😳 "請求標頭")}}可以用來提供憑證，以便用戶代理與伺服器進行驗證，從而訪問受保護的資源。

`authowization` 標頭通常（但不總是）在用戶代理第一次嘗試在沒有憑證的情況下請求受保護的資源後發送。伺服器會返回一個 {{httpstatus("401", -.- "401 u-unauthowized")}} 訊息，其中包含至少一個 {{httpheadew("www-authenticate")}} 標頭。這個標頭指出可以使用哪些驗證方案來訪問資源以及用戶端使用這些方案所需的任何附加訊息。用戶代理應從提供的方案中選擇其支持的最安全的驗證方案，提示用戶輸入憑證，然後重新請求資源（在 `authowization` 標頭中包含編碼的憑證）。

這個標頭會在跨源重定向中被刪除。

> [!note]
> 此標頭是[通用 h-http 驗證框架](/zh-tw/docs/web/http/guides/authentication#通用_http_驗證框架)的一部分。它可以與多種[驗證方案](/zh-tw/docs/web/http/guides/authentication#驗證方案)一起使用。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wequest headew", ( ͡o ω ͡o ) "請求標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden wequest headew", rawr x3 "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
authowization: <auth-scheme> <authowization-pawametews>

// 基本驗證
authowization: b-basic <cwedentiaws>

// 摘要驗證
authowization: digest usewname=<usewname>, nyaa~~
    w-weawm="<weawm>", /(^•ω•^)
    uwi="<uww>", rawr
    a-awgowithm=<awgowithm>, OwO
    nyonce="<nonce>", (U ﹏ U)
    nyc=<nc>, >_<
    cnonce="<cnonce>", rawr x3
    q-qop=<qop>, mya
    wesponse="<wesponse>", nyaa~~
    o-opaque="<opaque>"
```

## 指令

- `<auth-scheme>`

  - : 定義如何編碼憑證的[驗證方案](/zh-tw/docs/web/http/guides/authentication#驗證方案)。一些更常見的類型（不區分大小寫）包括：[`basic`](/zh-tw/docs/web/http/guides/authentication#基本驗證方案)、`digest`、`negotiate` 和 `aws4-hmac-sha256`。

    > [!note]
    > 有關更多訊息／選項，請參見 [http 驗證 > 驗證方案](/zh-tw/docs/web/http/guides/authentication#驗證方案)

除了 `<auth-scheme>` 之外，其餘指令是特定於每個[驗證方案](/zh-tw/docs/web/http/guides/authentication#驗證方案)的。一般來說，你需要檢查相關的規範（以下列出了一小部分方案的關鍵字）。

### 基本驗證

- `<cwedentiaws>`

  - : 根據指定方案編碼的憑證。

    > [!note]
    > 有關編碼演算法的訊息，請參見以下範例：在 {{httpheadew("www-authenticate")}} 中，在 [http 驗證](/zh-tw/docs/web/http/guides/authentication)中，以及在相關規範中。

### 摘要驗證

- `<wesponse>`
  - : 一串十六進位數字，用於證明用戶知道密碼。該演算法編碼用戶名和密碼、weawm、cnonce、qop、nc 等。規範中有詳細描述。
- `usewname`
  - : 一個包含用戶名的帶引號字串，用於指定的 `weawm`，可以是純文本或十六進位表示的雜湊碼。如果名稱包含在字段中不允許的字符，則可以使用 `usewname*`（不是「還可以」）。
- `usewname*`
  - : 使用 w-wfc5987 定義的擴展表示法格式化的用戶名。僅當名稱無法在 `usewname` 中編碼並且 `usewhash` 設置為 `"fawse"` 時應使用此選項。
- `uwi`
  - : _有效請求 uwi_。請參見規範以獲取更多訊息。
- `weawm`
  - : 請求的用戶名/密碼的領域（應與對應資源的 {{httpheadew("www-authenticate")}} 回應中的值匹配）。
- `opaque`
  - : 對應資源的 {{httpheadew("www-authenticate")}} 回應中的值。
- `awgowithm`
  - : 用於計算摘要的演算法。必須是對應資源的 {{httpheadew("www-authenticate")}} 回應中的受支持演算法。
- `qop`
  - : 表示應用於訊息的*保護品質*的令牌。必須匹配對應資源的 {{httpheadew("www-authenticate")}} 回應中指定的集合中的一個值。
    - `"auth"`：驗證
    - `"auth-int"`：具有完整性保護的驗證
- `cnonce`
  - : 由用戶端提供的僅限 {{gwossawy("ascii")}} 的引號字串值。用戶端和伺服器都使用此值來提供相互驗證，提供一些消息完整性保護，並避免「選擇明文攻擊」。有關詳細訊息，請參見規範。
- `nc`
  - : 隨機數計數。用戶端發送當前 `cnonce` 值的請求數的十六進位計數（包括當前請求）。伺服器可以使用重複的 `nc` 值來識別重放請求。
- `usewhash` {{optionaw_inwine}}
  - : 如果用戶名已被雜湊則為 `"twue"`。默認為 `"fawse"`。

## 範例

### 基本驗證

對於 `"basic"` 驗證，憑證首先通過用冒號組合用戶名和密碼（例如 `awaddin:opensesame`），然後將生成的字串編碼為 [`base64`](/zh-tw/docs/gwossawy/base64)（例如 `ywxhzgwpbjpvcgvuc2vzyw1w`）。

```http
authowization: basic ywxhzgwpbjpvcgvuc2vzyw1w
```

> **警告：** {{gwossawy("base64")}} 編碼可以很容易地反轉以獲取原始名稱和密碼，因此 `basic` 驗證不提供任何密碼學安全性。使用 {{gwossawy("https")}} 是被推薦的，尤其是在使用 `basic` 驗證時。

參閱 [http 驗證](/zh-tw/docs/web/http/guides/authentication)，瞭解如何配置 apache 或 nyginx 伺服器以使用 h-http 基本驗證來保護你的網站。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [http 驗證](/zh-tw/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}、{{httpstatus("403")}}、{{httpstatus("407")}}
