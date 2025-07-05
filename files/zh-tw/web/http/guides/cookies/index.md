---
title: 使用 HTTP Cookie
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

**cookie**（也稱為 Web Cookie 或瀏覽器 Cookie）是伺服器傳送給使用者網頁瀏覽器的一小段資料。瀏覽器可以儲存 Cookie、建立新的 Cookie、修改現有的 Cookie，並在之後的請求中將它們傳回給同一個伺服器。Cookie 讓網頁應用程式能夠儲存有限的資料並記住狀態訊息；根據預設，HTTP 協定是[無狀態的](/zh-TW/docs/Web/HTTP/Guides/Overview#http_無狀態，但並非無會話)。

在本文中，我們將探討 Cookie 的主要用途、解釋使用 Cookie 的最佳實踐，並檢視其隱私和安全方面的影響。

## Cookie 的用途

通常，伺服器會使用 HTTP Cookie 的內容來判斷不同的請求是否來自同一個瀏覽器／使用者，然後視情況發出個人化或通用的回應。以下描述一個基本的使用者登入系統：

1. 使用者將登入憑證傳送給伺服器，例如透過表單提交。
2. 如果憑證正確，伺服器會更新 UI 以表示使用者已登入，並回應一個包含 session ID 的 Cookie，該 Cookie 會在瀏覽器上記錄其登入狀態。
3. 稍後，使用者移動到同一個網站上的不同頁面。瀏覽器會將包含 session ID 的 Cookie 連同對應的請求一起傳送，以表示它仍然認為使用者已登入。
4. 伺服器會檢查 session ID，如果仍然有效，則會傳送個人化版本的新頁面給使用者。如果無效，則會刪除 session ID，並向使用者顯示通用版本的頁面（或可能顯示「存取被拒」的訊息並要求再次登入）。

![上述登入系統描述的視覺化表示](cookie-basic-example.png)

Cookie 主要用於三個目的：

- **會話管理**：使用者登入狀態、購物車內容、遊戲分數，或任何其他伺服器需要記住的使用者會話相關細節。
- **個人化**：使用者偏好，例如顯示語言和 UI 主題。
- **追蹤**：記錄和分析使用者行為。

### 資料儲存

在 Web 早期，當沒有其他選擇時，Cookie 被用於一般的用戶端資料儲存目的。現在建議使用現代的儲存 API，例如 [Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API)（`localStorage` 和 `sessionStorage`）和 [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API)。

它們是為儲存而設計的，永遠不會將資料傳送到伺服器，並且沒有使用 Cookie 進行儲存的其他缺點：

- 瀏覽器通常限制每個網域的 Cookie 數量上限（因瀏覽器而異，通常在數百個左右），以及每個 Cookie 的大小上限（通常為 4KB）。儲存 API 可以儲存更大量的資料。
- Cookie 會隨著每個請求一起傳送，因此可能會降低效能（例如在緩慢的行動數據連線上），特別是當你設定了很多 Cookie 時。

> [!NOTE]
> 要查看儲存的 Cookie（以及網頁正在使用的其他儲存），你可以在 Firefox 開發者工具中使用[儲存空間檢測器](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)，或在 Chrome 開發者工具中使用[應用程式面板](https://developer.chrome.com/docs/devtools/progressive-web-apps)。

## 建立、移除與更新 Cookie

在收到 HTTP 請求後，伺服器可以在回應中傳送一個或多個 {{HTTPHeader("Set-Cookie")}} 標頭，每個標頭都會設定一個獨立的 Cookie。設定 Cookie 的方式是指定一個鍵值對，如下所示：

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

以下 HTTP 回應指示接收的瀏覽器儲存一對 Cookie：

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=chocolate
Set-Cookie: tasty_cookie=strawberry

[頁面內容]
```

> [!NOTE]
> 了解如何在各種伺服器端語言／框架中使用 `Set-Cookie` 標頭：[PHP](https://www.php.net/manual/en/function.setcookie.php)、[Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value)、[Python](https://docs.python.org/3/library/http.cookies.html)、[Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)。

當發出新請求時，瀏覽器通常會將先前為目前網域儲存的 Cookie，在 {{HTTPHeader("Cookie")}} HTTP 標頭中傳回給伺服器：

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### 移除：定義 Cookie 的生命週期

你可以指定一個到期日期或時間段，在此之後 Cookie 應被刪除且不再傳送。根據建立 Cookie 時在 {{HTTPHeader("Set-Cookie")}} 標頭中設定的屬性，它們可以是*永久性*或*會話性* Cookie：

- 永久性 Cookie 會在 `Expires` 屬性指定的日期之後被刪除：

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  或在 `Max-Age` 屬性指定的時間段之後：

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` 的可用時間比 `Max-Age` 長，但 `Max-Age` 較不易出錯，並且在兩者都設定時具有優先權。這背後的理由是，當你設定 `Expires` 的日期和時間時，它們是相對於設定 Cookie 的用戶端。如果伺服器的時間設定不同，可能會導致錯誤。

- _會話性_ Cookie——沒有 `Max-Age` 或 `Expires` 屬性的 Cookie——會在目前會話結束時被刪除。瀏覽器定義了「目前會話」何時結束，有些瀏覽器在重新啟動時會使用*會話還原*。這可能導致會話性 Cookie 無限期地持續存在。

  > [!NOTE]
  > 如果你的網站對使用者進行身份驗證，它應該在使用者每次驗證時重新生成並重新傳送會話性 Cookie，即使是已經存在的 Cookie。這種方法有助於防止[會話固定](https://owasp.org/www-community/attacks/Session_fixation)攻擊，在這種攻擊中，第三方可以重複使用使用者的會話。

有一些技術旨在在 Cookie 被刪除後重新建立它們。這些被稱為「殭屍」cookie。這些技術違反了使用者[隱私](#隱私與追蹤)和控制的原則，可能違反[資料隱私法規](#cookie_相關法規)，並可能使使用它們的網站面臨法律責任。

### 更新 Cookie 值

要透過 HTTP 更新 Cookie，伺服器可以傳送一個帶有現有 Cookie 名稱和新值的 {{HTTPHeader("Set-Cookie")}} 標頭。例如：

```http
Set-Cookie: id=new-value
```

你可能出於多種原因想要這樣做，例如，如果使用者更新了他們的偏好，而應用程式希望在用戶端資料中反映這些變更（你也可以使用用戶端儲存機制，如 [Web Storage](/zh-TW/docs/Web/API/Web_Storage_API) 來實現）。

#### 透過 JavaScript 更新 Cookie

在瀏覽器中，你可以使用 {{domxref("Document.cookie")}} 屬性或非同步的 {{domxref("Cookie_Store_API", "Cookie Store API", "", "nocode")}} 透過 JavaScript 建立新的 Cookie。請注意，以下所有範例都使用 `Document.cookie`，因為它是最廣泛支援／最成熟的選項。

```js
document.Cookie = "yummy_cookie=chocolate";
document.Cookie = "tasty_cookie=strawberry";
```

你也可以存取現有的 Cookie 並為其設定新值，前提是它們沒有設定 [`HttpOnly`](/zh-TW/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) 屬性（即在建立它的 `Set-Cookie` 標頭中）：

```js
console.log(document.cookie);
// 輸出「yummy_cookie=chocolate; tasty_cookie=strawberry」

document.Cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// 輸出「tasty_cookie=strawberry; yummy_cookie=blueberry」
```

請注意，出於安全目的，你在初始化請求時不能直接透過傳送更新的 `Cookie` 標頭來更改 Cookie 值，例如，透過 {{domxref("Window/fetch", "fetch()")}} 或 {{domxref("XMLHttpRequest")}}。請注意，也有充分的理由不應允許 JavaScript 修改 Cookie——即在建立時設定 `HttpOnly`。有關更多詳細訊息，請參見[安全性](#安全性)一節。

## 安全性

當你在 Cookie 中儲存訊息時，預設情況下，所有 Cookie 值對終端使用者都是可見的，並且可以被他們更改。你絕對不希望你的 Cookie 被濫用——例如被惡意行為者存取／修改，或被傳送到不應傳送的網域。潛在的後果可能從惱人的——應用程式無法運作或表現出奇怪的行為——到災難性的。例如，犯罪分子可以竊取一個 session ID，並用它來設定一個 Cookie，使其看起來像是以另一個人的身份登入，從而控制他們的銀行或電子商務帳戶。

你可以用多種方式保護你的 Cookie，本節將對此進行回顧。

### 阻擋對你 Cookie 的存取

你可以透過兩種方式確保 Cookie 安全傳送，且不會被非預期的各方或腳本存取：使用 `Secure` 屬性和 `HttpOnly` 屬性：

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- 帶有 `Secure` 屬性的 Cookie 僅會透過 HTTPS 協定以加密請求傳送至伺服器。它永遠不會與不安全的 HTTP 一起傳送（localhost 除外），這意味著{{Glossary("MitM", "中間人")}}攻擊者無法輕易存取它。不安全的網站（URL 中帶有 `http:`）無法設定帶有 `Secure` 屬性的 Cookie。但是，不要以為 `Secure` 可以防止對 Cookie 中敏感訊息的所有存取。例如，有權存取用戶端硬碟（或 JavaScript，如果未設定 `HttpOnly` 屬性）的人可以讀取和修改訊息。

- 帶有 `HttpOnly` 屬性的 Cookie 不能被 JavaScript 存取，例如使用 {{domxref("Document.cookie")}}；它只能在到達伺服器時被存取。例如，持久化使用者會話的 Cookie 應該設定 `HttpOnly` 屬性——讓它們對 JavaScript 可用會非常不安全。這項預防措施有助於減輕跨網站指令碼攻擊（[XSS](/zh-TW/docs/Web/Security/Attacks/XSS)）。

> [!NOTE]
> 根據應用程式的不同，你可能希望使用一個由伺服器查詢的不透明識別碼，而不是直接在 Cookie 中儲存敏感訊息，或者研究替代的身份驗證／機密性機制，例如 [JSON Web Token](https://jwt.io/)。

### 定義 Cookie 的傳送位置

`Domain` 和 `Path` 屬性定義了 Cookie 的*範圍*：Cookie 被傳送到哪些 URL。

- `Domain` 屬性指定哪個伺服器可以接收 Cookie。如果指定，Cookie 在指定的伺服器及其子網域上可用。例如，如果你從 `mozilla.org` 設定 `Domain=mozilla.org`，Cookie 在該網域和像 `developer.mozilla.org` 這樣的子網域上都可用。

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  如果 `Set-Cookie` 標頭未指定 `Domain` 屬性，則 Cookie 在設定它的伺服器上可用，_但不在其子網域上_。因此，指定 `Domain` 比省略它限制更少。請注意，伺服器只能將 `Domain` 屬性設定為其自己的網域或父網域，而不能設定為子網域或其他網域。因此，例如，網域為 `foo.example.com` 的伺服器可以將屬性設定為 `example.com` 或 `foo.example.com`，但不能設定為 `bar.foo.example.com` 或 `elsewhere.com`（不過 Cookie 仍然會被*傳送*到像 `bar.foo.example.com` 這樣的子網域）。有關更多詳細訊息，請參見[無效網域](/zh-TW/docs/Web/HTTP/Reference/Headers/Set-Cookie#無效網域)。

- `Path` 屬性指示請求的 URL 中必須存在的 URL 路徑，以便傳送 `Cookie` 標頭。例如：

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  `%x2F`（「/」）字元被視為目錄分隔符，子目錄也會匹配。例如，如果你設定 `Path=/docs`，這些請求路徑會匹配：
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  但這些請求路徑不會：
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > `path` 屬性讓你根據網站的不同部分來控制瀏覽器傳送哪些 Cookie。它不是作為安全措施，並且[不能防止](/zh-TW/docs/Web/API/Document/cookie#安全性)從不同路徑未經授權地讀取 Cookie。

### 使用 `SameSite` 控制第三方 Cookie

[`SameSite`](/zh-TW/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 屬性讓伺服器可以指定是否／何時隨跨站請求傳送 Cookie——即[第三方 Cookie](/zh-TW/docs/Web/Privacy/Guides/Third-party_cookies)。跨站請求是指{{Glossary("Site", "網站")}}（可註冊的網域）和／或協定（http 或 https）與使用者目前正在訪問的網站不匹配的請求。這包括在其他網站上點擊連結以導航到你的網站時傳送的請求，以及由嵌入的第三方內容傳送的任何請求。

`SameSite` 有助於防止訊息洩漏，保護使用者[隱私](#隱私與追蹤)並提供一些針對{{Glossary("CSRF", "跨站請求偽造")}}攻擊的保護。它有三個可能的值：`Strict`、`Lax` 和 `None`：

- `Strict` 會使瀏覽器僅在回應源自 Cookie 原始網站的請求時才傳送 Cookie。當你有與功能相關的 Cookie，而這些功能總是在初始導航之後，例如身份驗證或儲存購物車訊息時，應該使用此設定。

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > 用於敏感訊息的 Cookie 也應該有較短的[生命週期](#移除：定義_cookie_的生命週期)。

- `Lax` 與此類似，只是瀏覽器在使用者*導航*到 Cookie 的原始網站時也會傳送 Cookie（即使使用者來自不同的網站）。這對於影響網站顯示的 Cookie 很有用——例如，你的網站上可能有合作夥伴的產品訊息以及一個聯盟連結。當使用者跟隨該連結到合作夥伴網站時，他們可能希望設定一個 Cookie，說明該聯盟連結被跟隨，如果購買了產品，則會顯示獎勵橫幅並提供折扣。

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` 指定 Cookie 在原始請求和跨站請求中都會被傳送。如果你想將 Cookie 與從嵌入在其他網站中的第三方內容發出的請求一起傳送，例如廣告技術或分析提供商，這就很有用。請注意，如果設定了 `SameSite=None`，則還必須設定 `Secure` 屬性——`SameSite=None` 需要一個*安全上下文*。

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

如果未設定 `SameSite` 屬性，則 Cookie 預設被視為 `Lax`。

### Cookie 前綴

由於 Cookie 機制的設計，伺服器無法確認 Cookie 是否從安全來源設定，甚至無法知道 Cookie 最初是在*哪裡*設定的。

子網域上的應用程式可以設定帶有 `Domain` 屬性的 Cookie，這使得所有其他子網域都可以存取該 Cookie。這種機制可能在[會話固定](https://owasp.org/www-community/attacks/Session_fixation)攻擊中被濫用。

然而，作為一種[縱深防禦措施](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>)，你可以使用 *Cookie 前綴*來斷言關於 Cookie 的特定事實。有兩種前綴可用：

- `__Host-`：如果 Cookie 名稱有這個前綴，它只有在同時標記了 `Secure` 屬性、從安全來源傳送、*不*包含 `Domain` 屬性，並且 `Path` 屬性設定為 `/` 的情況下，才會在 {{HTTPHeader("Set-Cookie")}} 標頭中被接受。換句話說，這個 Cookie 是*網域鎖定*的。
- `__Secure-`：如果 Cookie 名稱有這個前綴，它只有在標記了 `Secure` 屬性並從安全來源傳送的情況下，才會在 {{HTTPHeader("Set-Cookie")}} 標頭中被接受。這比 `__Host-` 前綴弱。

瀏覽器會拒絕不符合其限制的帶有這些前綴的 Cookie。這確保了由子網域建立的帶有前綴的 Cookie 要麼被限制在一個子網域內，要麼被完全忽略。由於應用程式伺服器在確定使用者是否已驗證或 CSRF 權杖是否正確時只檢查特定的 Cookie 名稱，這實際上起到了防禦[會話固定](https://owasp.org/www-community/attacks/Session_fixation)攻擊的作用。

> [!NOTE]
> 在伺服器上，網頁應用程式*必須*檢查包含前綴的完整 Cookie 名稱。使用者代理在請求的 {{HTTPHeader("Cookie")}} 標頭中傳送 Cookie 之前，*不會*從 Cookie 中剝離前綴。

有關 Cookie 前綴和目前瀏覽器支援狀態的更多訊息，請參見 [Set-Cookie 參考文章的前綴部分](/zh-TW/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_前綴)。

## 隱私與追蹤

前面我們談到如何使用 `SameSite` 屬性來控制何時傳送第三方 Cookie，以及這如何有助於保護使用者隱私。在建立網站時，隱私是一個非常重要的考量，如果做得好，可以與使用者建立信任。如果做得不好，則會完全侵蝕這種信任並導致各種其他問題。

第三方 Cookie 可以由透過 {{htmlelement("iframe")}} 嵌入網站的第三方內容設定。它們有許多合法用途，包括共享使用者個人資料訊息、計算廣告曝光次數，或在不同相關網域之間收集分析資料。

然而，第三方 Cookie 也可用於建立令人毛骨悚然、侵入性的使用者體驗。第三方伺服器可以根據同一個瀏覽器在存取多個網站時傳送給它的 Cookie，來建立使用者瀏覽歷史和習慣的個人資料。典型的例子是，當你在一個網站上搜尋產品訊息後，無論你走到哪裡，網路上都會出現類似產品的廣告追著你跑。

瀏覽器供應商知道使用者不喜歡這種行為，因此都已開始預設阻擋第三方 Cookie，或至少已計劃朝這個方向發展。第三方 Cookie（或稱追蹤 Cookie）也可能被其他瀏覽器設定或擴充功能阻擋。

> [!NOTE]
> 阻擋 Cookie 可能會導致一些第三方組件（例如社群媒體小工具）無法按預期運作。隨著瀏覽器對第三方 Cookie 施加更多限制，開發者應該開始尋找減少對其依賴的方法。

有關第三方 Cookie、相關問題以及可用替代方案的詳細訊息，請參見我們的[第三方 Cookie](/zh-TW/docs/Web/Privacy/Guides/Third-party_cookies) 文章。有關隱私的一般訊息，請參見我們的[隱私](/zh-TW/docs/Web/Privacy)著陸頁。

## Cookie 相關法規

涵蓋 Cookie 使用的立法或法規包括：

- 歐盟的[通用資料保護規則](https://gdpr.eu/)（GDPR）
- 歐盟的電子隱私指令
- 加州消費者隱私法

這些法規具有全球影響力。它們適用於*全球資訊網*上任何使用者從這些司法管轄區（歐盟和加州）存取的網站（但加州法律僅適用於總收入超過 2500 萬美元的實體等情況）。

這些法規包括以下要求：

- 通知使用者你的網站使用 Cookie。
- 允許使用者選擇退出接收部分或全部 Cookie。
- 允許使用者在不接收 Cookie 的情況下使用你的大部分服務。

你所在的地區可能還有其他管理 Cookie 使用的法規。你有責任了解並遵守這些法規。有些公司提供「Cookie 橫幅」程式碼，幫助你遵守這些法規。

> [!NOTE]
> 公司應出於透明度目的並為遵守法規，在其網站上披露他們使用的 Cookie 類型。例如，參見 [Google 關於其使用的 Cookie 類型的通知](https://policies.google.com/technologies/cookies#types-of-cookies)和 Mozilla 的[網站、通訊與 Cookie 隱私聲明](https://www.mozilla.org/en-US/privacy/websites/#cookies)。

## 參見

- 相關的 HTTP 標頭：{{HTTPHeader("Set-Cookie")}}、{{HTTPHeader("Cookie")}}
- 相關的 JavaScript API：{{domxref("Document.cookie")}}、{{domxref("Navigator.cookieEnabled")}}、{{domxref("Cookie_Store_API", "Cookie Store API", "", "nocode")}}
- [第三方 Cookie](/zh-TW/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie 規範：RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookie、GDPR 和電子隱私指令](https://gdpr.eu/cookies/)
