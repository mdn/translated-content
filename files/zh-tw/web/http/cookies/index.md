---
title: 使用 HTTP Cookie
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: a86c551ce8f5c6936b14640357eaa4da71a857d7
---

{{HTTPSidebar}}

**HTTP Cookie**（Web Cookie、瀏覽器 Cookie）是伺服器發送到使用者瀏覽器的一小段資料。瀏覽器可能會儲存這個 Cookie，並在之後的請求中將其發送回同一個伺服器。通常，HTTP Cookie 用於判斷兩個請求是否來自同一個瀏覽器，例如保持使用者登錄狀態。它為[無狀態](/zh-TW/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless)的 HTTP 協定記住了有狀態的資訊。

Cookie 主要用於三個目的：

- 會話管理
  - : 登錄、購物車、遊戲分數或伺服器需要記住的其他任何內容
- 個性化
  - : 使用者偏好、主題和其他設定
- 追蹤
  - : 記錄和分析使用者行為

Cookie 曾經用於一般的用戶端儲存。儘管在它們是用戶端唯一儲存數據的方式時這是合理的，但現代儲存 API 現在被推薦使用。Cookie 會隨著每個請求發送，因此可能會降低性能（特別是對於移動數據連接）。現代用戶端儲存的 API 包括 [Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API)（`localStorage` 和 `sessionStorage`）和 [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API)。

> [!NOTE]
> 若要查看儲存的 Cookie（以及網頁可以使用的其他儲存），你可以在開發者工具中啟用[儲存空間檢測器](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)，並從儲存樹中選擇 Cookie。

## 建立 Cookie

在接收到 HTTP 請求後，伺服器可以在回應中使用一個或多個 {{HTTPHeader("Set-Cookie")}} 標頭來發送 Cookie。瀏覽器通常會儲存這個 Cookie，並在發送到同一個伺服器的請求中使用一個 {{HTTPHeader("Cookie")}} HTTP 標頭發送它。你可以指定一個到期日期或時間段，之後就不應該再發送這個 Cookie。你也可以將額外的限制設定為特定的域和路徑，以限制發送 Cookie 的位置。有關下面提到的標頭屬性的詳細訊息，請參見 {{HTTPHeader("Set-Cookie")}} 相關文章。

### `Set-Cookie` 和 `Cookie` 標頭

{{HTTPHeader("Set-Cookie")}} HTTP 回應標頭將 Cookie 從伺服器發送到使用者代理。一個簡單的 Cookie 設置如下：

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

這指示伺服器發送標頭，告訴用戶端儲存一對 Cookie：

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

然後，每次向伺服器發送的後續請求，瀏覽器都會使用 {{HTTPHeader("Cookie")}} 標頭將所有先前儲存的 Cookie 發送回伺服器。

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

> [!NOTE]
> 以下是在各種伺服器端應用程序中如何使用 `Set-Cookie` 標頭的方法：
>
> - [PHP](https://www.php.net/manual/en/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

### 定義 Cookie 的生命週期

Cookie 的生存期取決於在創建它們時與 {{HTTPHeader("Set-Cookie")}} 標頭一起使用的屬性：

- _永久_ Cookie 在 `Expires` 屬性指定的日期或 `Max-Age` 屬性規定的期間後被刪除。
- _會話_ Cookie（沒有 `Max-Age` 或 `Expires` 屬性的 Cookie）在當前會話結束時刪除。瀏覽器定義了「當前會話」何時結束，一些瀏覽器在重新啟動時使用*會話恢復*。這可能導致會話 Cookie 永久存在。

例如：

```http
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
```

> [!NOTE]
> 當你設置 `Expires` 日期和時間時，它們是相對於設置 Cookie 的用戶端，而不是伺服器。

如果你的網站對用戶進行身份驗證，應該在用戶進行身份驗證時重新生成並重新發送會話 Cookie，即使已經存在。這種方法有助於防止[會話固定攻擊](/zh-TW/docs/Web/Security/Types_of_attacks#session_fixation)，其中第三方可以重用用戶的會話。

### 限制對 Cookie 的訪問

你可以通過兩種方式來確保 Cookie 安全地發送，並且不被未預期的參與者或腳本訪問：使用 `Secure` 屬性和 `HttpOnly` 屬性。

具有 `Secure` 屬性的 Cookie 只會隨著使用 HTTPS 協定的加密請求發送到伺服器。它永遠不會與未加密的 HTTP 一起發送（除了在 localhost 上），這意味著{{Glossary("MitM", "中間人攻擊")}}攻擊者無法輕易訪問它。不安全的網站（URL 中包含 `http:`）無法設置具有 `Secure` 屬性的 Cookie。但是，不要假設 `Secure` 可以阻止對 Cookie 中敏感訊息的所有訪問。例如，若某人可以存取用戶端的硬碟（或 JavaScript 如果 `HttpOnly` 屬性未設定），則可以讀取和修改該資訊。

具有 `HttpOnly` 屬性的 Cookie 對於 JavaScript {{domxref("Document.cookie")}} API 不可訪問；它只會發送到伺服器。例如，在伺服器端會話中持續存在的 Cookie 不需要對 JavaScript 可用，應該具有 `HttpOnly` 屬性。這項預防措施有助於減少跨網站指令碼（[XSS](/zh-TW/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)）攻擊。

以下是一個例子：

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

### 定義 Cookie 發送的位置

`Domain` 和 `Path` 屬性定義了 Cookie 的*範圍*：Cookie 應該發送到的 URL。

#### Domain 屬性

`Domain` 屬性指定了可以接收 Cookie 的伺服器。

如果指定了，則 Cookie 可用於伺服器及其子域。例如，如果你設置 `Domain=mozilla.org`，則 Cookie 可用於 mozilla.org 及其子域，例如 `developer.mozilla.org`。

如果伺服器沒有指定 `Domain`，則 Cookie 可用於伺服器*但不可用於其子域*。因此，指定 `Domain` 比省略它更不限制。但是，當子域需要共享用戶訊息時，這可能會有所幫助。

#### Path 屬性

`Path` 屬性指示必須在請求的 URL 中存在的 URL 路徑，以便發送 `Cookie` 標頭。
`%x2F`（"/"）字符被認為是目錄分隔符，子目錄也匹配。

例如，如果你設置了 `Path=/docs`，則這些請求路徑匹配：

- `/docs`
- `/docs/`
- `/docs/Web/`
- `/docs/Web/HTTP`

但這些請求路徑不匹配：

- `/`
- `/docsets`
- `/fr/docs`

##### Path 的默認值

如果未設置 `Path` 屬性，則其默認值從設置 Cookie 的 URI 的[路徑](/zh-TW/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#path_to_resource)計算，如下所示：

- 如果路徑為空，不以 `"/"` 開頭，或者包含不超過一個 `"/"` 字符，則 `Path` 的默認值為 `"/"`。
- 否則，`Path` 的默認值是從開始到最後一個 `"/"` 字符之前的路徑。

例如，如果 Cookie 是從 `"https://example.org/a/b/c` 設置的，則 `Path` 的默認值為 `"/a/b"`。

#### SameSite 屬性

[`SameSite`](/zh-TW/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 屬性允許伺服器指定 Cookie 是否/何時與跨站請求一起發送（其中 {{Glossary("Site")}} 由可註冊域和*方案*：http 或 https 定義）。這提供了一些保護，防止跨站請求偽造攻擊（{{Glossary("CSRF")}}）。
它有三個可能的值：`Strict`、`Lax` 和 `None`。

使用 `Strict` 時，瀏覽器僅在來自 Cookie 原始站點的請求中發送 Cookie。`Lax` 類似，但瀏覽器在用戶*導航*到 Cookie 原始站點時（即使用戶來自不同站點）也會發送 Cookie。例如，通過從外部站點跟踪連接。 `None` 指定在原始和跨站點請求中都發送 Cookie，但僅在*安全上下文*中（即，如果 `SameSite=None`，則必須還設置 `Secure` 屬性）。如果沒有設置 `SameSite` 屬性，則將 Cookie 視為 `Lax`。

以下是一個例子：

```http
Set-Cookie: mykey=myvalue; SameSite=Strict
```

> [!NOTE]
> 關於 `SameSite` 的相關標準最近發生了變化（MDN 文件記錄了上述新行為）。請參見 cookie 的[瀏覽器相容性](/zh-TW/docs/Web/HTTP/Headers/Set-Cookie#瀏覽器相容性)表，了解特定瀏覽器版本中如何處理該屬性的訊息：
>
> - 如果未指定 `SameSite`，則 `SameSite=Lax` 是新的默認值。以前，默認情況下會將 Cookie 發送給所有請求。
> - 現在，具有 `SameSite=None` 的 Cookie 還必須指定 `Secure` 屬性（它們需要安全上下文）。
> - 如果使用不同的方案（`http:` 或 `https:`）發送，則來自同一域的 Cookie 不再被認為來自同一站點。

#### Cookie 前綴

由於 Cookie 機制的設計，伺服器無法確認 Cookie 是否是從安全的來源設置，甚至無法判斷 Cookie 最初是在哪裡設置的。

子域上的易受攻擊應用程序可以使用 `Domain` 屬性設置 Cookie，這會使該 Cookie 在所有其他子域上都可訪問。這種機制可能被濫用，從而進行*會話固定*攻擊。請參見[會話固定](/zh-TW/docs/Web/Security/Types_of_attacks#session_fixation)以了解主要的緩解方法。

作為[深度防禦措施](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>)，你可以使用 *cookie 前綴*來斷言有關 Cookie 的特定事實。兩種前綴可用：

- `__Host-`
  - : 如果 Cookie 名稱具有此前綴，則僅當它也標記有 `Secure` 屬性、從安全來源發送且不包含 `Domain` 屬性，並且 `Path` 屬性設置為 `/` 時，才會在 {{HTTPHeader("Set-Cookie")}} 標頭中接受。這樣，這些 Cookie 可被視為「域鎖定」。
- `__Secure-`
  - : 如果 Cookie 名稱具有此前綴，則僅當它標記有 `Secure` 屬性且從安全來源發送時，才會在 {{HTTPHeader("Set-Cookie")}} 標頭中接受。這比 `__Host-` 前綴要弱。

瀏覽器將拒絕不符合這些前綴限制的 Cookie。請注意，這確保了具有前綴的子域創建的 Cookie 要麼限制在該子域內，要麼完全被忽略。由於應用伺服器在確定用戶是否已驗證或 CSRF 令牌是否正確時僅檢查特定的 Cookie 名稱，因此這實際上是對抗會話固定的防禦措施。

> [!NOTE]
> 在應用伺服器上，網路應用程式*必須*檢查包括前綴的完整 Cookie 名稱。用戶代理*不會*在將其在請求的 {{HTTPHeader("Cookie")}} 標頭中發送之前從 Cookie 中刪除前綴。

有關 Cookie 前綴的更多訊息以及目前瀏覽器支持的情況，請參見 [Set-Cookie 參考文章的前綴部分](/zh-TW/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes)。

#### 使用 Document.cookie 進行 JavaScript 訪問

你可以通過 JavaScript 使用 {{domxref("Document.cookie")}} 屬性來創建新的 Cookie。如果未設置 `HttpOnly` 標誌，你也可以從 JavaScript 訪問現有的 Cookie。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

通過 JavaScript 創建的 Cookie 不能包含 `HttpOnly` 標誌。

請注意，[安全](#安全)部分中存在的安全問題。可以通過 XSS 竊取可供 JavaScript 訪問的 Cookie。

## 安全

> [!NOTE]
> 在 Cookie 中儲存訊息時，請記住所有 Cookie 值都對終端用戶可見，並且可以被終端用戶更改。根據應用程序的不同，你可能希望使用伺服器查找的不透明標識符，或者研究替代的身份驗證/保密機制，例如 JSON Web Token。

減少涉及 Cookie 的攻擊的方法：

- 使用 `HttpOnly` 屬性防止通過 JavaScript 訪問 Cookie 值。
- 用於敏感訊息（例如指示身份驗證的 Cookie）的 Cookie 應具有較短的生命期，並將 `SameSite` 屬性設置為 `Strict` 或 `Lax`。（請參見 [SameSite 屬性](#samesite_屬性)）在[支持 SameSite 的瀏覽器](/zh-TW/docs/Web/HTTP/Headers/Set-Cookie#瀏覽器相容性)中，這確保了身份驗證 Cookie 不會隨跨站請求發送。這將使應用伺服器對請求有效地未經身份驗證。

## 追蹤和隱私

### 第三方 Cookie

Cookie 與特定域和方案（如 `http` 或 `https`）相關，如果 {{HTTPHeader("Set-Cookie")}} `Domain` 屬性已設置，則還可能與子域關聯。如果 Cookie 的域和方案與當前頁面相匹配，則該 Cookie 被視為與頁面相同的站點，並稱為*第一方 Cookie*。

如果域和方案不同，則不認為該 Cookie 與同一站點相同，並稱為*第三方 Cookie*。儘管托管網頁的伺服器設置了第一方 Cookie，該頁面可能包含儲存在其他域中的組件，例如嵌入在 {{htmlelement("iframe")}} 中的圖像或其他文件。這些組件可能設置第三方 Cookie。

> [!NOTE]
> 有時將第三方 Cookie 稱為*跨站點 Cookie*。這可能是一個更準確的名稱，因為*第三方 Cookie*意味著由第三方公司或組織擁有。但是，無論你是否擁有所有涉及的站點，行為和潛在問題都是相同的。

第三方 Cookie 的典型用例包括共享用戶檔案訊息或在不同相關域上收集分析數據。它們也經常用於廣告和跟蹤用戶在網路上的活動。

> [!NOTE]
> 公司應該披露其網站使用的 Cookie 類型，以確保透明度並符合[法規](#與_cookie_相關的法規)。例如，參見 [Google 對其使用的 Cookie 類型的通知](https://policies.google.com/technologies/cookies#types-of-cookies)和 Mozilla 的[網站、通信和 Cookie 隱私通知](https://www.mozilla.org/zh-TW/privacy/websites/#cookies)。

第三方伺服器可以根據同一瀏覽器在訪問多個站點時發送給它的 Cookie，創建用戶的瀏覽歷史和習慣檔案。默認情況下，Firefox 阻止已知包含跟蹤器的第三方 Cookie。第三方 Cookie（或僅為跟蹤而設置的 Cookie）也可能被其他瀏覽器設置或擴展阻止。Cookie 阻止可能導致一些第三方組件（例如社交媒體軟體部件）無法正常工作。

開發人員希望尊重用戶隱私並最小化第三方跟蹤的場景中提供了一些有用的功能：

- 伺服器可以（並且應該）設置 Cookie 的 [SameSite 屬性](/zh-TW/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)，以指定是否可以發送第三方 Cookie。
- [獨立分區狀態的 Cookie（CHIPS）](/zh-TW/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)允許開發人員將其 Cookie 選擇性地選擇為分區儲存，每個頂級站點都有一個獨立的 Cookie 庫。這使得不跟蹤用途的第三方 Cookie 在不允許用於第三方跟蹤的瀏覽器中繼續工作。

### 與 Cookie 相關的法規

涉及 Cookie 使用的法規包括：

- 歐洲聯盟的《通用數據保護條例》（GDPR）
- 歐盟的電子隱私指令
- 加利福尼亞州消費者隱私法

這些法規具有全球影響力。它們適用於來自這些司法管轄區的用戶訪問的*全球資訊網*上的任何網站（歐盟和加利福尼亞州，但要注意加利福尼亞州的法律僅適用於總收入超過 2500 萬美元的實體等）。

這些法規包括以下要求：

- 通知用戶你的網站使用 Cookie。
- 允許用戶選擇退出接收某些或所有 Cookie。
- 允許用戶在不接收 Cookie 的情況下使用你的服務的大部分功能。

可能還有其他規定管理你所在地區使用 Cookie 的情況。你有責任了解並遵守這些法規。有一些公司提供「Cookie 標語」代碼，可幫助你遵守這些法規。

## 在瀏覽器中儲存訊息的其他方法

在瀏覽器中儲存數據的另一種方法是使用 [Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)。[window.sessionStorage](/zh-TW/docs/Web/API/Window/sessionStorage) 和 [window.localStorage](/zh-TW/docs/Web/API/Window/localStorage) 屬性對應於會話和永久 Cookie 的持續時間，但儲存限制比 Cookie 更大，並且永不發送到伺服器。可以使用 [IndexedDB API](/zh-TW/docs/Web/API/IndexedDB_API) 或基於它構建的庫來儲存更結構化和更大量的數據。

還有一些技術旨在在刪除後重新創建 Cookie。這些被稱為「殭屍」Cookie。這些技術違反了用戶隱私和用戶控制的原則，可能違反數據隱私法規，並可能使使用這些技術的網站面臨法律責任。

## 參見

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [使用儲存檢查器檢查 Cookie](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Cookie 規範：RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [維基百科：HTTP cookie](https://zh.wikipedia.org/wiki/Cookie)
- [Cookie、GDPR 和電子隱私指令](https://gdpr.eu/cookies/)
