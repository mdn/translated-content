---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
---

{{HTTPSidebar}}

**HTTP `Strict-Transport-Security`** 回應標頭（簡稱為 {{Glossary("HSTS")}}）告知瀏覽器應強制使用 HTTPS 以取代 HTTP。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## Syntax

```plain
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## Directives

- `max-age=<expire-time>`
  - : 以秒計算的時間，告知瀏覽器應該保持強制 HTTPS 存取的時間有多長。
- `includeSubDomains` {{optional_inline}}
  - : 若該標頭被聲明，則瀏覽器應該將強制使用 HTTPS 的狀態套用至該域名的所有子域。
- `preload` {{optional_inline}}
  - : 參考 [Preloading Strict Transport Security](#preloading_strict_transport_security)。 此非規範的一部份。

## Description

若是網站在被訪問時經由 HTTP 被重定向至 HTTPS，則訪客將在受到 HTTPS 保護前與該網站的非加密版本通信。例如若使用者輸入 `http://www.foo.com/` 或是 foo.com 時，未加密的首次連線為中間人留下了機會。他們可以使用中間人攻擊將使用者定向至惡意網站而非使用者預期的網站的安全版本。

HTTP Strict Transport Security 標頭明確告知瀏覽器在有效期間費不應該使用 HTTP 與該網站進行通訊，並且應該將所有的 HTTP 請求自動轉換成 HTTPS。

> **備註：** 瀏覽器將會忽略 HTTP 站點所回應的 `Strict-Transport-Security` 標頭，因為在 HTTP 連線下，該標頭可能是被惡意添加或是竄改的。瀏覽器僅會在使用 HTTPS 連線且該連線由合法的證書保護時回應該標頭的要求，唯有在這種情況下瀏覽器方能確定該站點有正確的 HTTPS 配置且標頭的確由該站點所要求。

### 一個範例情境

你連接到機場提供的免費 WIFI 並且登入你的網路銀行以察看可用餘額並支付帳單，不幸的是，你連上的無線網路實際上是黑客偽造的筆記型電腦。當你嘗試連上網路銀行時，實際上你連結的是黑客所偽造的網路銀行介面，現在，你的帳號密碼已經洩漏了。

HSTS 可以處理這項問題，你只要曾經在安全的環境下連結到你的網路銀行，且該銀行啟用了 HSTS ，那你的瀏覽器將會知道僅使用 HTTPS 進行通訊，而不會接受黑客的重定向請求，HSTS 從中間人手上保護了你的安全。

### 瀏覽器如何處理它

當你首次經由 HTTPS 存取使用 HSTS 的網站時，你的瀏覽器將會記憶此一要求，在未來你存取該網站時將會自動將 HTTP 轉為 HTTPS。

在 HSTS 標頭所指定的時間過期後，瀏覽器將不會自動將 HTTP 轉為 HTTPS。

無論何時將 Strict-Transport-Security 標頭傳遞到瀏覽器，它都會更新該網站的到期時間，因此網站可以更新此一訊息並防止該聲明到期。 如果有必要停用嚴格傳輸安全性，則將 max-age 設置為 0（使用 HTTPS 連接）將立即使 Strict-Transport-Security 標頭過期，從而允許使用 HTTP 訪問。

## Preloading Strict Transport Security

Google maintains [an HSTS preload service](https://hstspreload.org/). By following the guidelines and successfully submitting your domain, browsers will never connect to your domain using an insecure connection. While the service is hosted by Google, all browsers have stated an intent to use (or actually started using) the preload list. However, it is not part of the HSTS specification and should not be treated as official.

- Information regarding the HSTS preload list in Chrome : <https://www.chromium.org/hsts>
- Consultation of the Firefox HSTS preload list : [nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## Examples

All present and future subdomains will be HTTPS for a max-age of 1 year. This blocks access to pages or sub domains that can only be served over HTTP.

```plain
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Blog post: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog post: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Article: [HTTP Strict Transport Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.md)
- Wikipedia: [HTTP Strict Transport Security](https://zh.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- Browser test site: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
- [Features restricted to secure contexts](/zh-TW/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
