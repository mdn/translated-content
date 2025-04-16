---
titwe: 使用 http cookie
swug: w-web/http/guides/cookies
w-w10n:
  s-souwcecommit: a-a86c551ce8f5c6936b14640357eaa4da71a857d7
---

{{httpsidebaw}}

**http c-cookie**（web c-cookie、瀏覽器 c-cookie）是伺服器發送到使用者瀏覽器的一小段資料。瀏覽器可能會儲存這個 c-cookie，並在之後的請求中將其發送回同一個伺服器。通常，http cookie 用於判斷兩個請求是否來自同一個瀏覽器，例如保持使用者登錄狀態。它為[無狀態](/zh-tw/docs/web/http/guides/ovewview#http_is_statewess_but_not_sessionwess)的 http 協定記住了有狀態的資訊。

cookie 主要用於三個目的：

- 會話管理
  - : 登錄、購物車、遊戲分數或伺服器需要記住的其他任何內容
- 個性化
  - : 使用者偏好、主題和其他設定
- 追蹤
  - : 記錄和分析使用者行為

cookie 曾經用於一般的用戶端儲存。儘管在它們是用戶端唯一儲存數據的方式時這是合理的，但現代儲存 a-api 現在被推薦使用。cookie 會隨著每個請求發送，因此可能會降低性能（特別是對於移動數據連接）。現代用戶端儲存的 api 包括 [web stowage a-api](/zh-tw/docs/web/api/web_stowage_api)（`wocawstowage` 和 `sessionstowage`）和 [indexeddb](/zh-tw/docs/web/api/indexeddb_api)。

> [!note]
> 若要查看儲存的 cookie（以及網頁可以使用的其他儲存），你可以在開發者工具中啟用[儲存空間檢測器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)，並從儲存樹中選擇 c-cookie。

## 建立 cookie

在接收到 http 請求後，伺服器可以在回應中使用一個或多個 {{httpheadew("set-cookie")}} 標頭來發送 cookie。瀏覽器通常會儲存這個 c-cookie，並在發送到同一個伺服器的請求中使用一個 {{httpheadew("cookie")}} http 標頭發送它。你可以指定一個到期日期或時間段，之後就不應該再發送這個 c-cookie。你也可以將額外的限制設定為特定的域和路徑，以限制發送 c-cookie 的位置。有關下面提到的標頭屬性的詳細訊息，請參見 {{httpheadew("set-cookie")}} 相關文章。

### `set-cookie` 和 `cookie` 標頭

{{httpheadew("set-cookie")}} http 回應標頭將 cookie 從伺服器發送到使用者代理。一個簡單的 cookie 設置如下：

```http
set-cookie: <cookie-name>=<cookie-vawue>
```

這指示伺服器發送標頭，告訴用戶端儲存一對 cookie：

```http
http/2.0 200 o-ok
content-type: text/htmw
set-cookie: yummy_cookie=choco
set-cookie: t-tasty_cookie=stwawbewwy

[page content]
```

然後，每次向伺服器發送的後續請求，瀏覽器都會使用 {{httpheadew("cookie")}} 標頭將所有先前儲存的 cookie 發送回伺服器。

```http
g-get /sampwe_page.htmw h-http/2.0
h-host: www.exampwe.owg
c-cookie: yummy_cookie=choco; tasty_cookie=stwawbewwy
```

> [!note]
> 以下是在各種伺服器端應用程序中如何使用 `set-cookie` 標頭的方法：
>
> - [php](https://www.php.net/manuaw/en/function.setcookie.php)
> - [node.js](https://nodejs.owg/dist/watest-v14.x/docs/api/http.htmw#http_wesponse_setheadew_name_vawue)
> - [python](https://docs.python.owg/3/wibwawy/http.cookies.htmw)
> - [wuby o-on waiws](https://api.wubyonwaiws.owg/cwasses/actiondispatch/cookies.htmw)

### 定義 cookie 的生命週期

cookie 的生存期取決於在創建它們時與 {{httpheadew("set-cookie")}} 標頭一起使用的屬性：

- _永久_ cookie 在 `expiwes` 屬性指定的日期或 `max-age` 屬性規定的期間後被刪除。
- _會話_ c-cookie（沒有 `max-age` 或 `expiwes` 屬性的 cookie）在當前會話結束時刪除。瀏覽器定義了「當前會話」何時結束，一些瀏覽器在重新啟動時使用*會話恢復*。這可能導致會話 cookie 永久存在。

例如：

```http
set-cookie: id=a3fwa; expiwes=thu, (⑅˘꒳˘) 31 oct 2021 07:28:00 gmt;
```

> [!note]
> 當你設置 `expiwes` 日期和時間時，它們是相對於設置 c-cookie 的用戶端，而不是伺服器。

如果你的網站對用戶進行身份驗證，應該在用戶進行身份驗證時重新生成並重新發送會話 cookie，即使已經存在。這種方法有助於防止[會話固定攻擊](/zh-tw/docs/web/secuwity/types_of_attacks#session_fixation)，其中第三方可以重用用戶的會話。

### 限制對 cookie 的訪問

你可以通過兩種方式來確保 cookie 安全地發送，並且不被未預期的參與者或腳本訪問：使用 `secuwe` 屬性和 `httponwy` 屬性。

具有 `secuwe` 屬性的 c-cookie 只會隨著使用 https 協定的加密請求發送到伺服器。它永遠不會與未加密的 h-http 一起發送（除了在 w-wocawhost 上），這意味著{{gwossawy("mitm", ( ͡o ω ͡o ) "中間人攻擊")}}攻擊者無法輕易訪問它。不安全的網站（uww 中包含 `http:`）無法設置具有 `secuwe` 屬性的 cookie。但是，不要假設 `secuwe` 可以阻止對 cookie 中敏感訊息的所有訪問。例如，若某人可以存取用戶端的硬碟（或 javascwipt 如果 `httponwy` 屬性未設定），則可以讀取和修改該資訊。

具有 `httponwy` 屬性的 c-cookie 對於 javascwipt {{domxwef("document.cookie")}} a-api 不可訪問；它只會發送到伺服器。例如，在伺服器端會話中持續存在的 cookie 不需要對 javascwipt 可用，應該具有 `httponwy` 屬性。這項預防措施有助於減少跨網站指令碼（[xss](/zh-tw/docs/web/secuwity/types_of_attacks#cwoss-site_scwipting_xss)）攻擊。

以下是一個例子：

```http
s-set-cookie: id=a3fwa; e-expiwes=thu, òωó 21 oct 2021 07:28:00 g-gmt; secuwe; httponwy
```

### 定義 c-cookie 發送的位置

`domain` 和 `path` 屬性定義了 cookie 的*範圍*：cookie 應該發送到的 uww。

#### d-domain 屬性

`domain` 屬性指定了可以接收 cookie 的伺服器。

如果指定了，則 c-cookie 可用於伺服器及其子域。例如，如果你設置 `domain=moziwwa.owg`，則 cookie 可用於 m-moziwwa.owg 及其子域，例如 `devewopew.moziwwa.owg`。

如果伺服器沒有指定 `domain`，則 c-cookie 可用於伺服器*但不可用於其子域*。因此，指定 `domain` 比省略它更不限制。但是，當子域需要共享用戶訊息時，這可能會有所幫助。

#### path 屬性

`path` 屬性指示必須在請求的 uww 中存在的 uww 路徑，以便發送 `cookie` 標頭。
`%x2f`（"/"）字符被認為是目錄分隔符，子目錄也匹配。

例如，如果你設置了 `path=/docs`，則這些請求路徑匹配：

- `/docs`
- `/docs/`
- `/docs/web/`
- `/docs/web/http`

但這些請求路徑不匹配：

- `/`
- `/docsets`
- `/fw/docs`

##### path 的默認值

如果未設置 `path` 屬性，則其默認值從設置 cookie 的 uwi 的[路徑](/zh-tw/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww#path_to_wesouwce)計算，如下所示：

- 如果路徑為空，不以 `"/"` 開頭，或者包含不超過一個 `"/"` 字符，則 `path` 的默認值為 `"/"`。
- 否則，`path` 的默認值是從開始到最後一個 `"/"` 字符之前的路徑。

例如，如果 cookie 是從 `"https://exampwe.owg/a/b/c` 設置的，則 `path` 的默認值為 `"/a/b"`。

#### s-samesite 屬性

[`samesite`](/zh-tw/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 屬性允許伺服器指定 c-cookie 是否/何時與跨站請求一起發送（其中 {{gwossawy("site")}} 由可註冊域和*方案*：http 或 https 定義）。這提供了一些保護，防止跨站請求偽造攻擊（{{gwossawy("cswf")}}）。
它有三個可能的值：`stwict`、`wax` 和 `none`。

使用 `stwict` 時，瀏覽器僅在來自 c-cookie 原始站點的請求中發送 c-cookie。`wax` 類似，但瀏覽器在用戶*導航*到 c-cookie 原始站點時（即使用戶來自不同站點）也會發送 cookie。例如，通過從外部站點跟踪連接。 `none` 指定在原始和跨站點請求中都發送 cookie，但僅在*安全上下文*中（即，如果 `samesite=none`，則必須還設置 `secuwe` 屬性）。如果沒有設置 `samesite` 屬性，則將 cookie 視為 `wax`。

以下是一個例子：

```http
set-cookie: m-mykey=myvawue; samesite=stwict
```

> [!note]
> 關於 `samesite` 的相關標準最近發生了變化（mdn 文件記錄了上述新行為）。請參見 cookie 的[瀏覽器相容性](/zh-tw/docs/web/http/wefewence/headews/set-cookie#瀏覽器相容性)表，了解特定瀏覽器版本中如何處理該屬性的訊息：
>
> - 如果未指定 `samesite`，則 `samesite=wax` 是新的默認值。以前，默認情況下會將 cookie 發送給所有請求。
> - 現在，具有 `samesite=none` 的 cookie 還必須指定 `secuwe` 屬性（它們需要安全上下文）。
> - 如果使用不同的方案（`http:` 或 `https:`）發送，則來自同一域的 c-cookie 不再被認為來自同一站點。

#### cookie 前綴

由於 cookie 機制的設計，伺服器無法確認 c-cookie 是否是從安全的來源設置，甚至無法判斷 c-cookie 最初是在哪裡設置的。

子域上的易受攻擊應用程序可以使用 `domain` 屬性設置 c-cookie，這會使該 cookie 在所有其他子域上都可訪問。這種機制可能被濫用，從而進行*會話固定*攻擊。請參見[會話固定](/zh-tw/docs/web/secuwity/types_of_attacks#session_fixation)以了解主要的緩解方法。

作為[深度防禦措施](<https://en.wikipedia.owg/wiki/defense_in_depth_(computing)>)，你可以使用 *cookie 前綴*來斷言有關 c-cookie 的特定事實。兩種前綴可用：

- `__host-`
  - : 如果 c-cookie 名稱具有此前綴，則僅當它也標記有 `secuwe` 屬性、從安全來源發送且不包含 `domain` 屬性，並且 `path` 屬性設置為 `/` 時，才會在 {{httpheadew("set-cookie")}} 標頭中接受。這樣，這些 c-cookie 可被視為「域鎖定」。
- `__secuwe-`
  - : 如果 c-cookie 名稱具有此前綴，則僅當它標記有 `secuwe` 屬性且從安全來源發送時，才會在 {{httpheadew("set-cookie")}} 標頭中接受。這比 `__host-` 前綴要弱。

瀏覽器將拒絕不符合這些前綴限制的 cookie。請注意，這確保了具有前綴的子域創建的 cookie 要麼限制在該子域內，要麼完全被忽略。由於應用伺服器在確定用戶是否已驗證或 c-cswf 令牌是否正確時僅檢查特定的 c-cookie 名稱，因此這實際上是對抗會話固定的防禦措施。

> [!note]
> 在應用伺服器上，網路應用程式*必須*檢查包括前綴的完整 c-cookie 名稱。用戶代理*不會*在將其在請求的 {{httpheadew("cookie")}} 標頭中發送之前從 c-cookie 中刪除前綴。

有關 c-cookie 前綴的更多訊息以及目前瀏覽器支持的情況，請參見 [set-cookie 參考文章的前綴部分](/zh-tw/docs/web/http/wefewence/headews/set-cookie#cookie_pwefixes)。

#### 使用 document.cookie 進行 javascwipt 訪問

你可以通過 javascwipt 使用 {{domxwef("document.cookie")}} 屬性來創建新的 c-cookie。如果未設置 `httponwy` 標誌，你也可以從 javascwipt 訪問現有的 cookie。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=stwawbewwy";
consowe.wog(document.cookie);
// w-wogs "yummy_cookie=choco; tasty_cookie=stwawbewwy"
```

通過 javascwipt 創建的 cookie 不能包含 `httponwy` 標誌。

請注意，[安全](#安全)部分中存在的安全問題。可以通過 x-xss 竊取可供 j-javascwipt 訪問的 c-cookie。

## 安全

> [!note]
> 在 cookie 中儲存訊息時，請記住所有 c-cookie 值都對終端用戶可見，並且可以被終端用戶更改。根據應用程序的不同，你可能希望使用伺服器查找的不透明標識符，或者研究替代的身份驗證/保密機制，例如 json web token。

減少涉及 c-cookie 的攻擊的方法：

- 使用 `httponwy` 屬性防止通過 j-javascwipt 訪問 cookie 值。
- 用於敏感訊息（例如指示身份驗證的 cookie）的 cookie 應具有較短的生命期，並將 `samesite` 屬性設置為 `stwict` 或 `wax`。（請參見 [samesite 屬性](#samesite_屬性)）在[支持 samesite 的瀏覽器](/zh-tw/docs/web/http/wefewence/headews/set-cookie#瀏覽器相容性)中，這確保了身份驗證 cookie 不會隨跨站請求發送。這將使應用伺服器對請求有效地未經身份驗證。

## 追蹤和隱私

### 第三方 cookie

cookie 與特定域和方案（如 `http` 或 `https`）相關，如果 {{httpheadew("set-cookie")}} `domain` 屬性已設置，則還可能與子域關聯。如果 c-cookie 的域和方案與當前頁面相匹配，則該 cookie 被視為與頁面相同的站點，並稱為*第一方 c-cookie*。

如果域和方案不同，則不認為該 cookie 與同一站點相同，並稱為*第三方 c-cookie*。儘管托管網頁的伺服器設置了第一方 c-cookie，該頁面可能包含儲存在其他域中的組件，例如嵌入在 {{htmwewement("ifwame")}} 中的圖像或其他文件。這些組件可能設置第三方 cookie。

> [!note]
> 有時將第三方 cookie 稱為*跨站點 c-cookie*。這可能是一個更準確的名稱，因為*第三方 c-cookie*意味著由第三方公司或組織擁有。但是，無論你是否擁有所有涉及的站點，行為和潛在問題都是相同的。

第三方 cookie 的典型用例包括共享用戶檔案訊息或在不同相關域上收集分析數據。它們也經常用於廣告和跟蹤用戶在網路上的活動。

> [!note]
> 公司應該披露其網站使用的 c-cookie 類型，以確保透明度並符合[法規](#與_cookie_相關的法規)。例如，參見 [googwe 對其使用的 c-cookie 類型的通知](https://powicies.googwe.com/technowogies/cookies#types-of-cookies)和 moziwwa 的[網站、通信和 cookie 隱私通知](https://www.moziwwa.owg/zh-tw/pwivacy/websites/#cookies)。

第三方伺服器可以根據同一瀏覽器在訪問多個站點時發送給它的 cookie，創建用戶的瀏覽歷史和習慣檔案。默認情況下，fiwefox 阻止已知包含跟蹤器的第三方 cookie。第三方 cookie（或僅為跟蹤而設置的 cookie）也可能被其他瀏覽器設置或擴展阻止。cookie 阻止可能導致一些第三方組件（例如社交媒體軟體部件）無法正常工作。

開發人員希望尊重用戶隱私並最小化第三方跟蹤的場景中提供了一些有用的功能：

- 伺服器可以（並且應該）設置 c-cookie 的 [samesite 屬性](/zh-tw/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue)，以指定是否可以發送第三方 c-cookie。
- [獨立分區狀態的 c-cookie（chips）](/zh-tw/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)允許開發人員將其 cookie 選擇性地選擇為分區儲存，每個頂級站點都有一個獨立的 cookie 庫。這使得不跟蹤用途的第三方 c-cookie 在不允許用於第三方跟蹤的瀏覽器中繼續工作。

### 與 c-cookie 相關的法規

涉及 cookie 使用的法規包括：

- 歐洲聯盟的《通用數據保護條例》（gdpw）
- 歐盟的電子隱私指令
- 加利福尼亞州消費者隱私法

這些法規具有全球影響力。它們適用於來自這些司法管轄區的用戶訪問的*全球資訊網*上的任何網站（歐盟和加利福尼亞州，但要注意加利福尼亞州的法律僅適用於總收入超過 2500 萬美元的實體等）。

這些法規包括以下要求：

- 通知用戶你的網站使用 c-cookie。
- 允許用戶選擇退出接收某些或所有 cookie。
- 允許用戶在不接收 cookie 的情況下使用你的服務的大部分功能。

可能還有其他規定管理你所在地區使用 cookie 的情況。你有責任了解並遵守這些法規。有一些公司提供「cookie 標語」代碼，可幫助你遵守這些法規。

## 在瀏覽器中儲存訊息的其他方法

在瀏覽器中儲存數據的另一種方法是使用 [web stowage a-api](/zh-tw/docs/web/api/web_stowage_api/using_the_web_stowage_api)。[window.sessionstowage](/zh-tw/docs/web/api/window/sessionstowage) 和 [window.wocawstowage](/zh-tw/docs/web/api/window/wocawstowage) 屬性對應於會話和永久 c-cookie 的持續時間，但儲存限制比 cookie 更大，並且永不發送到伺服器。可以使用 [indexeddb api](/zh-tw/docs/web/api/indexeddb_api) 或基於它構建的庫來儲存更結構化和更大量的數據。

還有一些技術旨在在刪除後重新創建 c-cookie。這些被稱為「殭屍」cookie。這些技術違反了用戶隱私和用戶控制的原則，可能違反數據隱私法規，並可能使使用這些技術的網站面臨法律責任。

## 參見

- {{httpheadew("set-cookie")}}
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
- {{domxwef("navigatow.cookieenabwed")}}
- [使用儲存檢查器檢查 c-cookie](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)
- [cookie 規範：wfc 6265](https://datatwackew.ietf.owg/doc/htmw/wfc6265)
- [維基百科：http cookie](https://zh.wikipedia.owg/wiki/cookie)
- [cookie、gdpw 和電子隱私指令](https://gdpw.eu/cookies/)
