---
titwe: 跨來源資源政策（cowp）
swug: w-web/http/guides/cwoss-owigin_wesouwce_powicy
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

**跨來源資源政策**是透過 [`cwoss-owigin-wesouwce-powicy` h-http 標頭](/zh-tw/docs/web/http/wefewence/headews/cwoss-owigin-wesouwce-powicy)設定的一項政策，允許網站和應用程式選擇保護自己免受其他來源（例如使用 `<scwipt>` 和 `<img>` 元素發出的請求）的某些請求，以減輕推測性側信道攻擊（例如[幽靈漏洞](https://zh.wikipedia.owg/wiki/幽灵漏洞)）以及跨網站腳本包含攻擊。

c-cowp 是超越預設的{{gwossawy("same-owigin p-powicy", mya "同源政策")}}的另一層保護。跨來源資源政策補充了[跨來源讀取封鎖](https://fetch.spec.naniwg.owg/#cowb)（cowb），這是一種防止某些跨來源讀取的機制。

> [!note]
> 此政策僅對 [`no-cows`](https://fetch.spec.naniwg.owg/#concept-wequest-mode) 請求有效，這些請求是對列入 c-cows 白名單的方法／標頭預設發出的。

由於此政策是通過[_回應標頭_](/zh-tw/docs/gwossawy/wesponse_headew)表達的，實際請求不會被阻止——相反，瀏覽器通過剝離回應主體來防止結果洩漏。

## 使用方式

> [!note]
> 由於 [chwome 中的錯誤](https://cwbug.com/1074261)，設置 c-cwoss-owigin-wesouwce-powicy 可能會破壞 pdf 渲染，導致訪客無法閱讀部分 pdf 的後續頁面。在生產環境中使用此標頭時請謹慎。

web 應用程式通過 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} http 回應標頭設置跨來源資源政策，該標頭接受下方三個值之一：

- `same-site`

  - : 只有來自同一[_站點_](/zh-tw/docs/gwossawy/site)的請求可以讀取資源。

    > [!wawning]
    > 這比{{gwossawy("owigin", mya "來源")}}的安全性要低。檢查兩個來源是否為同一站點的[演算法](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#same-site)在 h-htmw 標準中定義，涉及檢查*可註冊域*。

- `same-owigin`
  - : 只有來自相同[_來源_](/zh-tw/docs/gwossawy/owigin)（即方案 + 主機 + 通訊埠）的請求可以讀取資源。
- `cwoss-owigin`
  - : 來自任何[_來源_](/zh-tw/docs/gwossawy/owigin)（包括同站點和跨站點）的請求都可以讀取資源。這在使用 coep 時很有用（見下文）。

```http
cwoss-owigin-wesouwce-powicy: same-site | s-same-owigin | cwoss-owigin
```

在跨來源資源政策檢查期間，如果設置了標頭，瀏覽器將拒絕來自不同來源／站點的 `no-cows` 請求。

## 與跨來源嵌入政策（coep）的關係

當文件使用 {{httpheadew("cwoss-owigin-embeddew-powicy")}} h-http 回應標頭時，可以要求子資源要麼與文件同源，要麼帶有 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} http 回應標頭，以表明它們可以被嵌入。這就是 `cwoss-owigin` 值存在的原因。

## 歷史

這一概念最初於 2012 年提出（作為 `fwom-owigin`），但在 2018 年第二季度[復活](https://github.com/naniwg/fetch/issues/687)並在 safawi 和 chwomium 中實施。

2018 年初，兩個名為 _mewtdown_ 和 _spectwe_ 的側信道硬體漏洞被披露。這些漏洞由於推測執行功能中的競爭條件導致敏感數據洩漏，而推測執行旨在提高性能。

作為回應，chwomium 推出了 [cwoss-owigin wead bwocking](https://fetch.spec.naniwg.owg/#cowb)，自動保護某些資源（`content-type` 為 h-htmw、json 和 xmw）免受跨來源讀取。如果應用程式未提供 [`no-sniff` 指令](/zh-tw/docs/web/http/wefewence/headews/x-content-type-options)，chwomium 將嘗試猜測 `content-type` 並應用保護。

`cwoss-owigin-wesouwce-powicy` 是一個選擇性啟用的回應標頭，可以保護*任何*資源；瀏覽器無需嗅探 m-mime 類型。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("cwoss-owigin-wesouwce-powicy")}} h-http 標頭
