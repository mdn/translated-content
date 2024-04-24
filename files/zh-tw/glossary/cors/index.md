---
title: CORS
slug: Glossary/CORS
---

{{GlossarySidebar}}

**CORS**（跨來源資源共享）是瀏覽器技術規範，用來傳輸 [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)，判斷阻擋或允許不同來源網域的資源存取。

[同源安全政策（same-origin security policy）](/zh-TW/docs/Web/Security/Same-origin_policy)，預設會禁止跨網域的資源請求。CORS 賦予網站伺服器跨網域存取控制能力，使其能安全地跨網域傳輸資料。

## CORS 標頭

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 表示回傳資料能否共享（布林值）。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 指定為 `true` 時，瀏覽器可以傳送或接收敏感資訊（HTTP Cookie）。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 指定可以出現在真實請求的 HTTP 標頭，用來回應預檢請求。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : 指定存取資源所允許的 HTTP 方法，用來回應預檢請求。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 表示瀏覽器允許存取的標頭白名單，例如 `X-My-Header, X-My-Custom-Header`。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 表示預檢請求的回傳結果可以被快取多久（秒）。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 用於預檢請求，讓伺服器知道後續真實請求夾帶的 HTTP 標頭。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 用於預檢請求，讓伺服器端知道後續真實請求使用的 [HTTP 方法](/zh-TW/docs/Web/HTTP/Methods)。
- {{HTTPHeader("Origin")}}
  - : 告訴伺服器請求來源之網域。

## 參見

- MDN 上的 [HTTP 存取控制（CORS）](/zh-TW/docs/Web/HTTP/CORS)
- 維基百科上的[跨來源資源共享](https://zh.wikipedia.org/wiki/跨來源資源共享)
- [Fetch 規範](https://fetch.spec.whatwg.org)
