---
title: Authorization 標頭
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

HTTP **`Authorization`** {{Glossary("request header", "請求標頭")}}可以用來提供憑證，以便用戶代理與伺服器進行驗證，從而訪問受保護的資源。

`Authorization` 標頭通常（但不總是）在用戶代理第一次嘗試在沒有憑證的情況下請求受保護的資源後發送。伺服器會返回一個 {{HTTPStatus("401", "401 Unauthorized")}} 訊息，其中包含至少一個 {{HTTPHeader("WWW-Authenticate")}} 標頭。這個標頭指出可以使用哪些驗證方案來訪問資源以及用戶端使用這些方案所需的任何附加訊息。用戶代理應從提供的方案中選擇其支持的最安全的驗證方案，提示用戶輸入憑證，然後重新請求資源（在 `Authorization` 標頭中包含編碼的憑證）。

這個標頭會在跨源重定向中被刪除。

> [!NOTE]
> 此標頭是[通用 HTTP 驗證框架](/zh-TW/docs/Web/HTTP/Guides/Authentication#通用_HTTP_驗證框架)的一部分。它可以與多種[驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)一起使用。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止的請求標頭")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Authorization: <auth-scheme> <authorization-parameters>

// 基本驗證
Authorization: Basic <credentials>

// 摘要驗證
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## 指令

- `<auth-scheme>`
  - : 定義如何編碼憑證的[驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)。一些更常見的類型（不區分大小寫）包括：[`Basic`](/zh-TW/docs/Web/HTTP/Guides/Authentication#基本驗證方案)、`Digest`、`Negotiate` 和 `AWS4-HMAC-SHA256`。

    > [!NOTE]
    > 有關更多訊息／選項，請參見 [HTTP 驗證 > 驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)

除了 `<auth-scheme>` 之外，其餘指令是特定於每個[驗證方案](/zh-TW/docs/Web/HTTP/Guides/Authentication#驗證方案)的。一般來說，你需要檢查相關的規範（以下列出了一小部分方案的關鍵字）。

### 基本驗證

- `<credentials>`
  - : 根據指定方案編碼的憑證。

    > [!NOTE]
    > 有關編碼演算法的訊息，請參見以下範例：在 {{HTTPHeader("WWW-Authenticate")}} 中，在 [HTTP 驗證](/zh-TW/docs/Web/HTTP/Guides/Authentication)中，以及在相關規範中。

### 摘要驗證

- `<response>`
  - : 一串十六進位數字，用於證明用戶知道密碼。該演算法編碼用戶名和密碼、realm、cnonce、qop、nc 等。規範中有詳細描述。
- `username`
  - : 一個包含用戶名的帶引號字串，用於指定的 `realm`，可以是純文本或十六進位表示的雜湊碼。如果名稱包含在字段中不允許的字符，則可以使用 `username*`（不是「還可以」）。
- `username*`
  - : 使用 RFC5987 定義的擴展表示法格式化的用戶名。僅當名稱無法在 `username` 中編碼並且 `userhash` 設置為 `"false"` 時應使用此選項。
- `uri`
  - : _有效請求 URI_。請參見規範以獲取更多訊息。
- `realm`
  - : 請求的用戶名/密碼的領域（應與對應資源的 {{HTTPHeader("WWW-Authenticate")}} 回應中的值匹配）。
- `opaque`
  - : 對應資源的 {{HTTPHeader("WWW-Authenticate")}} 回應中的值。
- `algorithm`
  - : 用於計算摘要的演算法。必須是對應資源的 {{HTTPHeader("WWW-Authenticate")}} 回應中的受支持演算法。
- `qop`
  - : 表示應用於訊息的*保護品質*的令牌。必須匹配對應資源的 {{HTTPHeader("WWW-Authenticate")}} 回應中指定的集合中的一個值。
    - `"auth"`：驗證
    - `"auth-int"`：具有完整性保護的驗證
- `cnonce`
  - : 由用戶端提供的僅限 {{Glossary("ASCII")}} 的引號字串值。用戶端和伺服器都使用此值來提供相互驗證，提供一些消息完整性保護，並避免「選擇明文攻擊」。有關詳細訊息，請參見規範。
- `nc`
  - : 隨機數計數。用戶端發送當前 `cnonce` 值的請求數的十六進位計數（包括當前請求）。伺服器可以使用重複的 `nc` 值來識別重放請求。
- `userhash` {{optional_inline}}
  - : 如果用戶名已被雜湊則為 `"true"`。默認為 `"false"`。

## 範例

### 基本驗證

對於 `"Basic"` 驗證，憑證首先通過用冒號組合用戶名和密碼（例如 `aladdin:opensesame`），然後將生成的字串編碼為 [`base64`](/zh-TW/docs/Glossary/Base64)（例如 `YWxhZGRpbjpvcGVuc2VzYW1l`）。

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> {{Glossary("Base64")}} 編碼可以很容易地反轉以獲取原始名稱和密碼，因此 `Basic` 驗證不提供任何密碼學安全性。使用 {{Glossary("HTTPS")}} 是被推薦的，尤其是在使用 `Basic` 驗證時。

參閱 [HTTP 驗證](/zh-TW/docs/Web/HTTP/Guides/Authentication)，瞭解如何配置 Apache 或 Nginx 伺服器以使用 HTTP 基本驗證來保護你的網站。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 驗證](/zh-TW/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}、{{HTTPStatus("403")}}、{{HTTPStatus("407")}}
