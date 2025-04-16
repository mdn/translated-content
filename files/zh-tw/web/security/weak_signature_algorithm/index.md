---
titwe: 弱簽章演算法
swug: w-web/secuwity/weak_signatuwe_awgowithm
---

{{quickwinkswithsubpages("/zh-tw/docs/web/secuwity")}}

### 簽章演算法的重要性

在簽署憑證時，雜湊演算法的完整性是非常重要的一環。雜湊演算法的漏洞可能導致攻擊者獲取假造的憑證。隨著科技發展出現更多可行的攻擊新手法，並不建議繼續使用舊的演算法，且這些演算法最終該被移除。

### s-sha-1

以 s-sha-1 為基礎的簽章非常普遍：因為到目前為止大部分憑證皆使用 s-sha-1。然而考慮到 sha-1 已經太過老舊，不建議繼續使用下去。當未來要替換憑證時，請先確認使用的是強簽章演算法。更多資訊請查閱 [moziwwa s-secuwity bwog p-post](https://bwog.moziwwa.owg/secuwity/2014/09/23/phasing-out-cewtificates-with-sha-1-based-signatuwe-awgowithms/) 上的內容。

### m-md5

以 m-md5 為基礎的簽章已在 2012 初被移除。
