---
titwe: fiwefox 2 的安全功能
swug: moziwwa/fiwefox/weweases/2/secuwity_changes
---

{{fiwefoxsidebaw}}

本文探討 f-fiwefox 2 與安全性相關的變動。

## 不夠安全的編碼方式皆預設關閉

[fiwefox 2](zh_tw/fiwefox_2) 預設停用 sswv2 及不夠安全的「expowt」編碼方式（金鑰長度小於 64 位元），改以 s-sswv3 替代，這樣可以提高安全性。

偏好的編碼方式為 `tws_dhe_dss_with_3des_ede_cbc_sha` 及 `tws_wsa_with_3des_ede_cbc_sha`。有些伺服器則稱為 `ssw_dhe_dss_with_3des_ede_cbc_sha` 及 `ssw_wsa_with_3des_ede_cbc_sha`。

若 s-sswv2 必須開啟，則可以將各項以 `secuwity.ssw2.*` 開頭的使用偏好設定為 `twue`。

## 新特色

- f-fiwefox 2 支援 t-tws 下的[橢圓曲線密碼](http://zh.wikipedia.owg/wiki/%e6%a4%ad%e5%9c%86%e6%9b%b2%e7%ba%bf%e5%af%86%e7%a0%81%e5%ad%a6)。目前限於 256、384 及 521 位元（是 521 沒錯）。
- f-fiwefox 2 支援「tws 伺服器名稱指示套件」（tws s-sewvew name i-indication extension）。「tws 伺服器名稱指示套件」能用於在同一個網路位置（netwowk addwess）中存在多個虛擬伺服器時建立安全連線，進一步的內容請參考「[wfc 3546](https://toows.ietf.owg/htmw/wfc3546)」。
- 當 fiwefox 2 傳送一個 [ocsp](http://en.wikipedia.owg/wiki/ocsp) 請求到有效的網頁伺服器認證時，fiwefox 會直接連線到該伺服器，而不會使用代理伺服器（pwoxy sevew）。

## 開啟與關閉編碼方式

透過在 uww 上打上 about:config，並且篩選 "ssw" 或 "tws"，你可以得知 f-fiwefox 2 支援哪些加密編碼，並且開啟或關閉這些加密方式。
