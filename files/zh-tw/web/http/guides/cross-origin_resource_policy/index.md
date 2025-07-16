---
title: 跨來源資源政策（CORP）
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**跨來源資源政策**是透過 [`Cross-Origin-Resource-Policy` HTTP 標頭](/zh-TW/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy)設定的一項政策，允許網站和應用程式選擇保護自己免受其他來源（例如使用 `<script>` 和 `<img>` 元素發出的請求）的某些請求，以減輕推測性側信道攻擊（例如[幽靈漏洞](https://zh.wikipedia.org/wiki/幽灵漏洞)）以及跨網站腳本包含攻擊。

CORP 是超越預設的{{Glossary("same-origin policy", "同源政策")}}的另一層保護。跨來源資源政策補充了[跨來源讀取封鎖](https://fetch.spec.whatwg.org/#corb)（CORB），這是一種防止某些跨來源讀取的機制。

> [!NOTE]
> 此政策僅對 [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) 請求有效，這些請求是對列入 CORS 白名單的方法／標頭預設發出的。

由於此政策是通過[_回應標頭_](/zh-TW/docs/Glossary/Response_header)表達的，實際請求不會被阻止——相反，瀏覽器通過剝離回應主體來防止結果洩漏。

## 使用方式

> [!NOTE]
> 由於 [Chrome 中的錯誤](https://crbug.com/1074261)，設置 Cross-Origin-Resource-Policy 可能會破壞 PDF 渲染，導致訪客無法閱讀部分 PDF 的後續頁面。在生產環境中使用此標頭時請謹慎。

Web 應用程式通過 {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 回應標頭設置跨來源資源政策，該標頭接受下方三個值之一：

- `same-site`
  - : 只有來自同一[_站點_](/zh-TW/docs/Glossary/Site)的請求可以讀取資源。

    > [!WARNING]
    > 這比{{Glossary("origin", "來源")}}的安全性要低。檢查兩個來源是否為同一站點的[演算法](https://html.spec.whatwg.org/multipage/browsers.html#same-site)在 HTML 標準中定義，涉及檢查*可註冊域*。

- `same-origin`
  - : 只有來自相同[_來源_](/zh-TW/docs/Glossary/Origin)（即方案 + 主機 + 通訊埠）的請求可以讀取資源。
- `cross-origin`
  - : 來自任何[_來源_](/zh-TW/docs/Glossary/Origin)（包括同站點和跨站點）的請求都可以讀取資源。這在使用 COEP 時很有用（見下文）。

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

在跨來源資源政策檢查期間，如果設置了標頭，瀏覽器將拒絕來自不同來源／站點的 `no-cors` 請求。

## 與跨來源嵌入政策（COEP）的關係

當文件使用 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP 回應標頭時，可以要求子資源要麼與文件同源，要麼帶有 {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 回應標頭，以表明它們可以被嵌入。這就是 `cross-origin` 值存在的原因。

## 歷史

這一概念最初於 2012 年提出（作為 `From-Origin`），但在 2018 年第二季度[復活](https://github.com/whatwg/fetch/issues/687)並在 Safari 和 Chromium 中實施。

2018 年初，兩個名為 _Meltdown_ 和 _Spectre_ 的側信道硬體漏洞被披露。這些漏洞由於推測執行功能中的競爭條件導致敏感數據洩漏，而推測執行旨在提高性能。

作為回應，Chromium 推出了 [Cross-Origin Read Blocking](https://fetch.spec.whatwg.org/#corb)，自動保護某些資源（`Content-Type` 為 HTML、JSON 和 XML）免受跨來源讀取。如果應用程式未提供 [`no-sniff` 指令](/zh-TW/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)，Chromium 將嘗試猜測 `Content-Type` 並應用保護。

`Cross-Origin-Resource-Policy` 是一個選擇性啟用的回應標頭，可以保護*任何*資源；瀏覽器無需嗅探 MIME 類型。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 標頭
