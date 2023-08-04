---
title: 混合內容
slug: Web/Security/Mixed_content
---

當使用者以 {{Glossary("HTTPS")}} 瀏覽網站時，他們與伺服器之間的連線就會以 {{Glossary("TLS")}} 加密，以防受到竊聽或中間人攻擊。一個含有 HTTP 明文內容的 HTTPS 頁面稱為**混合內容（mixed content）**。這種頁面只有部份加密，沒有加密的內容，易於遭到竊聽和中間人攻擊。這會令網頁不安全。

## 混合內容的類型

混合內容的類型有兩種：**被動/顯示型混合內容（mixed passive/display content）**與**主動型混合內容（mixed active content）**。兩者不同處在於內容遭中間人攻擊竄改後，其最壞情況下的威脅程度。如果是被動型混合內容，威脅程度較低（可能有錯誤內容、或者用戶的 cookie 遭到竊取）。如果是主動型混合內容，威脅就可能會變成網絡釣魚、敏感資料洩露、被重定向到惡意網站……等等。

### 被動/顯示型混合內容

被動/顯示型混合內容內容是指包在 HTTPS 頁面，但無法改變其他部分的 HTTP 內容。例如，攻擊者能把放在 HTTP 的圖像，換成對用戶而言不適當的圖片或訊息。攻擊者也能監看圖片提供給哪些用戶，來推斷用戶活動的相關資訊：圖片通常只能在網站內的特定頁面提供。如果攻擊者觀察了某些圖片的 HTTP 請求，他們還能確認用戶在訪問哪個網頁。

#### 被動型混合內容清單

以下列出會被視為被動型混合內容的 HTTP 請求：

- {{HTMLElement("img")}}（`src` 屬性）
- {{HTMLElement("audio")}}（`src` 屬性）
- {{HTMLElement("video")}}（`src` 屬性）
- {{HTMLElement("object")}} subresource（如果 `<object>` 發起 HTTP 請求）

### 主動型混合內容

**主動型混合內容**是指有權訪問文件 HTTPS 頁面、物件模型的內容。這種混合內容可以改變 HTTPS 頁面行為、並暗自竊取用戶的敏感資訊。因此，主動型混合內容除了內容除了上文所述的風險外，還容易受到其他攻擊媒介的威脅。

針對主動型混合內容，中間人攻擊者可以攔截 HTTP 內容的請求、並竄改回應以植入惡意 JavaScript 程式碼。惡意的主動型混合內容能竊取用戶的憑證、用戶的敏感資料、甚至透過如瀏覽器或套件的漏洞，嘗試安裝惡意軟體。

混合內容涉及的風險，取決於用戶訪問的網站類型、還有該網站資訊的敏感程度。網頁可能有公諸於世的公開資料、也可能有僅限授權者閱覽的私人資料。即使網頁是公開的，也沒有用戶的敏感資料，混合內容依舊給攻擊者把用戶重定向到其他 HTTP 頁面、並從這些網站竊取 HTTP cookie 的機會。

#### 主動型混合內容示例

以下列出會被視為主動型混合內容的 HTTP 請求：

- {{HTMLElement("script")}}（`src` 屬性）
- {{HTMLElement("link")}}（`href` 屬性）（包含 CSS 樣式表）
- {{HTMLElement("iframe")}}（`src` 屬性）
- {{domxref("XMLHttpRequest")}} 請求
- {{domxref("GlobalFetch.fetch","fetch()")}} 請求
- 所有用到 {{cssxref("url")}} 的 CSS 值（{{cssxref("@font-face")}}、{{cssxref("cursor")}}、{{cssxref("background-image")}}……等等）。
- {{HTMLElement("object")}}（`data` 屬性）

其他資源如 web fonts 與 workers 也可能被認定為主動型混合內容，[因為在 Chromium 就是這樣](https://code.google.com/p/chromium/codesearch#chromium/src/third_party/WebKit/Source/core/loader/MixedContentChecker.cpp&q=MixedContentChecker::contextTypeFromContext%20f:cpp&sq=package:chromium&type=cs)。

## 網頁主控台的警告

Firefox 網頁主控台會在網站含有混合內容時，於「網路」標籤顯示警告。以 HTTP 傳輸的混合內容資源會被標為紅色，後面會附上導往這一頁的「混合內容」標註。

[![Screen shot of the web console displaying a mixed content warning.](mixed_content_-_net_pane.png)](/files/12545/Mixed_content_-_Net_pane.png)

找到網頁主控台的警告後，可以在你的網站使用 [Content Security Policy (CSP)](/zh-TW/docs/Web/HTTP/CSP) 或網站爬蟲找到問題，，例如 [HTTPS Checker](https://httpschecker.net/guides/https-checker) 或是 [Mixed Content Scan](https://github.com/bramus/mixed-content-scan)。

從 Firefox 23 以後，預設會封鎖混合內容（要封鎖混合的顯示內容也可以設定）。為了令 web 開發者便於尋找混合內容的錯誤，所有遭到封鎖的混合內容會被紀錄到網頁主控台的安全標籤，如下所示：

[![A screenshot of blocked mixed content errors in the Security Pane of the Web Console](mixed_content_webconsole.png)](/files/5261/blocked-mixed-content-errors.png)

要修正這個錯誤，就要移除所有的 HTTP 請求、並以 HTTPS 取代之。部份例子包含 JavaScript 檔案、CSS 樣式表、影像檔、影片檔或是其他多媒體文件。

> **備註：** Firefox 55 以後，在本機端會允許混合內容的載入（請參見 [Firefox bug 903966](https://bugzil.la/903966)）。

## 參見

- [Mixed Content - W3C Editor's Draft](https://w3c.github.io/webappsec/specs/mixedcontent/)
- [如何修正含有混和內容的網站](/zh-TW/docs/Security/MixedContent/How_to_fix_website_with_mixed_content)
