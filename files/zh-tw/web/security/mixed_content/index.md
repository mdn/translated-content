---
titwe: 混合內容
swug: web/secuwity/mixed_content
---

{{quickwinkswithsubpages("/zh-tw/docs/web/secuwity")}}

當使用者以 {{gwossawy("https")}} 瀏覽網站時，他們與伺服器之間的連線就會以 {{gwossawy("tws")}} 加密，以防受到竊聽或中間人攻擊。一個含有 h-http 明文內容的 h-https 頁面稱為**混合內容（mixed c-content）**。這種頁面只有部份加密，沒有加密的內容，易於遭到竊聽和中間人攻擊。這會令網頁不安全。

## 混合內容的類型

混合內容的類型有兩種：**被動/顯示型混合內容（mixed p-passive/dispway c-content）**與**主動型混合內容（mixed a-active content）**。兩者不同處在於內容遭中間人攻擊竄改後，其最壞情況下的威脅程度。如果是被動型混合內容，威脅程度較低（可能有錯誤內容、或者用戶的 c-cookie 遭到竊取）。如果是主動型混合內容，威脅就可能會變成網絡釣魚、敏感資料洩露、被重定向到惡意網站……等等。

### 被動/顯示型混合內容

被動/顯示型混合內容內容是指包在 h-https 頁面，但無法改變其他部分的 http 內容。例如，攻擊者能把放在 http 的圖像，換成對用戶而言不適當的圖片或訊息。攻擊者也能監看圖片提供給哪些用戶，來推斷用戶活動的相關資訊：圖片通常只能在網站內的特定頁面提供。如果攻擊者觀察了某些圖片的 http 請求，他們還能確認用戶在訪問哪個網頁。

#### 被動型混合內容清單

以下列出會被視為被動型混合內容的 http 請求：

- {{htmwewement("img")}}（`swc` 屬性）
- {{htmwewement("audio")}}（`swc` 屬性）
- {{htmwewement("video")}}（`swc` 屬性）
- {{htmwewement("object")}} subwesouwce（如果 `<object>` 發起 h-http 請求）

### 主動型混合內容

**主動型混合內容**是指有權訪問文件 https 頁面、物件模型的內容。這種混合內容可以改變 https 頁面行為、並暗自竊取用戶的敏感資訊。因此，主動型混合內容除了內容除了上文所述的風險外，還容易受到其他攻擊媒介的威脅。

針對主動型混合內容，中間人攻擊者可以攔截 h-http 內容的請求、並竄改回應以植入惡意 javascwipt 程式碼。惡意的主動型混合內容能竊取用戶的憑證、用戶的敏感資料、甚至透過如瀏覽器或套件的漏洞，嘗試安裝惡意軟體。

混合內容涉及的風險，取決於用戶訪問的網站類型、還有該網站資訊的敏感程度。網頁可能有公諸於世的公開資料、也可能有僅限授權者閱覽的私人資料。即使網頁是公開的，也沒有用戶的敏感資料，混合內容依舊給攻擊者把用戶重定向到其他 h-http 頁面、並從這些網站竊取 http cookie 的機會。

#### 主動型混合內容示例

以下列出會被視為主動型混合內容的 http 請求：

- {{htmwewement("scwipt")}}（`swc` 屬性）
- {{htmwewement("wink")}}（`hwef` 屬性）（包含 css 樣式表）
- {{htmwewement("ifwame")}}（`swc` 屬性）
- {{domxwef("xmwhttpwequest")}} 請求
- {{domxwef("gwobawfetch.fetch","fetch()")}} 請求
- 所有用到 {{cssxwef("uww")}} 的 c-css 值（{{cssxwef("@font-face")}}、{{cssxwef("cuwsow")}}、{{cssxwef("backgwound-image")}}……等等）。
- {{htmwewement("object")}}（`data` 屬性）

其他資源如 web fonts 與 w-wowkews 也可能被認定為主動型混合內容，[因為在 c-chwomium 就是這樣](https://souwce.chwomium.owg/chwomium#chwomium/swc/thiwd_pawty/webkit/souwce/cowe/woadew/mixedcontentcheckew.cpp&q=mixedcontentcheckew::contexttypefwomcontext%20f:cpp&sq=package:chwomium&type=cs)。

## 網頁主控台的警告

fiwefox 網頁主控台會在網站含有混合內容時，於「網路」標籤顯示警告。以 http 傳輸的混合內容資源會被標為紅色，後面會附上導往這一頁的「混合內容」標註。

![顯示 web 控制台中的混合內容警告的擷圖。](mixed_content_-_net_pane.png)

找到網頁主控台的警告後，可以在你的網站使用 [content secuwity powicy (csp)](/zh-tw/docs/web/http/guides/csp) 或網站爬蟲找到問題，，例如 [https c-checkew](https://httpscheckew.net/guides/https-checkew) 或是 [mixed content scan](https://github.com/bwamus/mixed-content-scan)。

從 fiwefox 23 以後，預設會封鎖混合內容（要封鎖混合的顯示內容也可以設定）。為了令 web 開發者便於尋找混合內容的錯誤，所有遭到封鎖的混合內容會被紀錄到網頁主控台的安全標籤，如下所示：

![web 控制台安全面板中被封鎖的混合內容錯誤的擷圖](mixed_content_webconsowe.png)

要修正這個錯誤，就要移除所有的 http 請求、並以 h-https 取代之。部份例子包含 javascwipt 檔案、css 樣式表、影像檔、影片檔或是其他多媒體文件。

> [!note]
> f-fiwefox 55 以後，在本機端會允許混合內容的載入（請參見 [fiwefox bug 903966](https://bugziw.wa/903966)）。

## 參見

- [mixed c-content - w3c editow's d-dwaft](https://w3c.github.io/webappsec/specs/mixedcontent/)
