---
title: 同源政策 (Same-origin policy)
slug: Web/Security/Same-origin_policy
---

同源政策限制了程式碼和不同網域資源間的互動。

## 同源定義

所謂同源是指兩份網頁具備相同協定、埠號 (如果有指定) 以及主機位置，下表提供了一些例子展示那些來源和 `http://store.company.com/dir/page.html` 屬於同源:

| URL                                               | Outcome | Reason       |
| ------------------------------------------------- | ------- | ------------ |
| `http://store.company.com/dir2/other.html`        | 同源    |              |
| `http://store.company.com/dir/inner/another.html` | 同源    |              |
| `https://store.company.com/secure.html`           | 不同源  | 協定不同     |
| `http://store.company.com:81/dir/etc.html`        | 不同源  | 埠號不同     |
| `http://news.company.com/dir/other.html`          | 不同源  | 主機位置不同 |

另外請參考 [file 來源定義: URL](/zh-TW/docs/Same-origin_policy_for_file:_URIs)。

Cookie 的來源定義和上述不一樣。

## 變更來源

網頁能夠有限地變更來源，我們可以將 {{domxref("document.domain")}} 存為目前網域後半部，然後較短的網域就會作為之後來源檢查，譬如我們在 `http://store.company.com/dir/other.html` 的文件裡執行以下程式碼:

```plain
document.domain = "company.com";
```

執行完後，網頁能以 `http://company.com/dir/page.html` 通過同源檢查。然而基於同源檢查，company.com 無法將 document.domain 存為 othercompany.com。

任何變更 document.domain 行為，包括 document.domain = document.domain 都會導致埠號重置為 null，因此無法只藉由執行 document.domain = "company.com" 讓 company.com:8080 和 company.com 互動，必須兩邊都重新設定好讓埠號都一致重置為 null。

> **備註：** 為了讓子網域可以安全的存取其母網域，我們需要一起改變子、母網域的 document.domain 為相同值，即使只是將母網域設回原始值也是必要，否則將會導致許可權錯誤 (Permission Error)。

## 跨來源網路存取

同源政策控制了兩個不同網域來源互動，例如當使用{{domxref("XMLHttpRequest")}}。這些互動可分為以下三類:

- 跨來源寫(Cross-origin writes)通常被允許，例如有連結、重新導向以及表單送出。少數某些 HTTP 請求需要[先導請求](/zh-TW/docs/HTTP/Access_control_CORS#.E5.85.88.E5.B0.8E.E8.AB.8B.E6.B1.82)。
- 跨來源嵌入(Cross-origin embedding)通常被允許，例子請參照下方。
- 跨來源讀取(Cross-origin read) 通常不被允許，不過通常可以藉由嵌入來繞道讀取，例如嵌入影像寬高讀取、嵌入程式碼或[嵌入資源](https://grepular.com/Abusing_HTTP_Status_Codes_to_Expose_Private_Information)。

下面是一些能跨來源嵌入的資源:

- `<script src="…"></script>` 內的 JavaScript，但語法錯誤訊息只限於同源程式碼腳本。
- CSS 的 `<link rel="stylesheet" href="...">`，由於 CSS 寬鬆語法規則，跨來源 CSS 要求正確的 Content-Type 標頭。限制在瀏覽器間各有差異: [IE](http://msdn.microsoft.com/en-us/library/ie/gg622939%28v=vs.85%29.aspx), [Firefox](http://www.mozilla.org/security/announce/2010/mfsa2010-46.html), [Chrome](http://code.google.com/p/chromium/issues/detail?id=9877), [Safari](http://support.apple.com/kb/HT4070) (請至 CVE-2010-0051)以及[Opera](http://www.opera.com/support/kb/view/943/).
- {{htmlelement("img")}}的影像；支援格式有 PNG, JPEG, GIF, BMP, SVG 等等
- {{htmlelement("video")}}和{{htmlelement("audio")}}媒體檔案
- [`<object>`](/zh-TW/docs/HTML/Element/object), [`<embed>`](/zh-TW/docs/HTML/Element/embed)和[`<applet>`](/zh-TW/docs/HTML/Element/applet)的外掛
- [`@font-face`](/zh-TW/docs/CSS/@font-face) 的字型；有些瀏覽器允許跨來源字型，有些則不。
- [`<frame>`](/zh-TW/docs/HTML/Element/frame)以及[`<iframe>`](/zh-TW/docs/HTML/Element/iframe)中的內容；如果一個網站想要避免跨來源載入互動，可以藉由[`X-Frame-Options`](/zh-TW/docs/HTTP/X-Frame-Options)標頭避免。

### 如何允許跨來源存取

使用[CORS](/zh-TW/docs/HTTP/Access_control_CORS)允許跨來源存取

### 如何阻擋跨來源存取

- 藉由檢查請求中包含的無法猜測的特殊記號(token)可以避免跨來源寫入，還有跨來源讀取知道此記號的網頁，這個記號即為[跨站偽造(Cross-Site Request Forgery, CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29)記號。
- 確保資源無法被嵌入來防止跨來源讀取。
- 為了防止跨來源嵌入，請確保資源不被解讀為上述可嵌入格式之一；瀏覽器通常不會理會 Content-Type，比如說有一個指向 HTML 文件的\<script>標籤，瀏覽器還是會嘗試解析該 HTML 文件為 Javascript；當你的資源不是網站進入點，可以使用 CSRF 記號。

## 跨來源程式腳本存取

Javascript API 例如[`iframe.contentWindow`](/zh-TW/docs/DOM/HTMLIFrameElement), {{domxref("window.parent")}}, {{domxref("window.open")}}以及{{domxref("window.opener")}}，允許文件之間直接互相參照，當兩份文件的來源不同，參照存取[Window](http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#security-window)和[Location](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#security-location)物件將受到限制；一些瀏覽器比規範[准許存取更多屬性](https://bugzilla.mozilla.org/show_bug.cgi?id=839867)。文件間的溝通也可以改用{{domxref("window.postMessage")}}來進行。

## 延伸閱讀

- [Same-origin policy for file: URIs](/zh-TW/docs/Same-origin_policy_for_file:_URIs)
- [Same-Origin Policy at W3C](http://www.w3.org/Security/wiki/Same_Origin_Policy)
