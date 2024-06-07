---
title: 弱簽章演算法
slug: Web/Security/Weak_Signature_Algorithm
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/Security")}}

### 簽章演算法的重要性

在簽署憑證時，雜湊演算法的完整性是非常重要的一環。雜湊演算法的漏洞可能導致攻擊者獲取假造的憑證。隨著科技發展出現更多可行的攻擊新手法，並不建議繼續使用舊的演算法，且這些演算法最終該被移除。

### SHA-1

以 SHA-1 為基礎的簽章非常普遍：因為到目前為止大部分憑證皆使用 SHA-1。然而考慮到 SHA-1 已經太過老舊，不建議繼續使用下去。當未來要替換憑證時，請先確認使用的是強簽章演算法。更多資訊請查閱 [Mozilla Security Blog post](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) 上的內容。

### MD5

以 MD5 為基礎的簽章已在 2012 初被移除。
