---
title: Firefox 2 的安全功能
slug: Mozilla/Firefox/Releases/2/Security_changes
---

本文探討 Firefox 2 與安全性相關的變動。

## 不夠安全的編碼方式皆預設關閉

[Firefox 2](zh_tw/Firefox_2) 預設停用 SSLv2 及不夠安全的「export」編碼方式（金鑰長度小於 64 位元），改以 SSLv3 替代，這樣可以提高安全性。

偏好的編碼方式為 `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` 及 `TLS_RSA_WITH_3DES_EDE_CBC_SHA`。有些伺服器則稱為 `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` 及 `SSL_RSA_WITH_3DES_EDE_CBC_SHA`。

若 SSLv2 必須開啟，則可以將各項以 `security.ssl2.*` 開頭的使用偏好設定為 `true`。

## 新特色

- Firefox 2 支援 TLS 下的[橢圓曲線密碼](http://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86%E6%9B%B2%E7%BA%BF%E5%AF%86%E7%A0%81%E5%AD%A6)。目前限於 256、384 及 521 位元（是 521 沒錯）。
- Firefox 2 支援「TLS 伺服器名稱指示套件」（TLS server name indication extension）。「TLS 伺服器名稱指示套件」能用於在同一個網路位置（Network Address）中存在多個虛擬伺服器時建立安全連線，進一步的內容請參考「[RFC 3546](https://tools.ietf.org/html/rfc3546)」。
- 當 Firefox 2 傳送一個 [OCSP](http://en.wikipedia.org/wiki/Ocsp) 請求到有效的網頁伺服器認證時，Firefox 會直接連線到該伺服器，而不會使用代理伺服器（Proxy Sever）。

## 開啟與關閉編碼方式

透過在 URL 上打上 about:config，並且篩選 "ssl" 或 "tls"，你可以得知 Firefox 2 支援哪些加密編碼，並且開啟或關閉這些加密方式。
