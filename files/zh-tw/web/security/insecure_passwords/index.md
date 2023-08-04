---
title: 不安全的密碼
slug: Web/Security/Insecure_passwords
---

提供 HTTP 的登入表單非常危險，因為目前有很多已知的用戶密碼擷取手法。竊聽者可以透過側錄該網路或修改傳輸頁面進行大量的惡意攻擊，並直接竊取用戶憑證或密碼。本頁將詳細說明 Firefox 用以警示用戶與開發者有關不安全的密碼及密碼竊取風險的安全機制。

[HTTPS](/zh-TW/docs/Glossary/https) 通訊協定，旨在保護用戶的資料於傳輸時不會遭到竊聽與竄改，並保護其機密性與原始完整性。負責處理用戶資料的網站應使用 HTTPS 保護其用戶不受惡意駭客攻擊。如果沒有使用 HTTPS，竊取諸如登入憑證之類的用戶資訊是小事一樁。著名的 [Firesheep](https://codebutler.github.io/firesheep/) 附加套件曾示範過此種攻擊方式。

要處理這個問題，請安裝並設定網站伺服器的 SSL/TLS 憑證。目前有許多免費與付費的憑證供應商。如果是使用雲端，雲端服務商可能提供了啟動 HTTPS 的方法。

## 重複使用相同密碼

網站有時會需要用戶名稱與密碼，但並不實際儲存敏感資料。例如，新聞網站可能會儲存用戶想要再次閱覽的文章，但不會儲存其它用戶資料。上述範例的網頁開發者可能較無動機保護他們的網站與用戶憑證。

不幸的是，[重複使用相同密碼是非常危險的](https://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/)。用戶在多個網站皆使用相同密碼(如新聞網站、社群網站、電子信箱等)。因此，即使非法存取貴網站的用戶名稱與密碼並不對您構成嚴重問題，對於在不同網站(如網路銀行)使用相同名稱與密碼的用戶而言，卻會造成嚴重威脅。攻擊者愈來愈聰明，他們會從一個網站竊取用戶名稱與密碼的配對，並在更有利可圖的網站上重複嘗試。

## 參見

- [No More Passwords over HTTP, Please!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — 提供詳細資訊和常見問題的部落格文章

{{QuickLinksWithSubpages("/zh-TW/docs/Web/Security")}}
