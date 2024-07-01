---
title: CSS 像素
slug: Glossary/CSS_pixel
---

{{GlossarySidebar}}

**CSS 像素**—在 {{Glossary("CSS")}} 以 `px` 前輟表示—是大致對應單個點長高、肉眼也能輕易見到、否則就盡可能小的長度單位。按照定義，CSS 像素是在肉眼一臂之遙的距離下，像素密度（pixel density）為單個 96 DPI 像素的物理尺寸。

這定義當然因為如「輕易見到」或「一臂之遙」之類的不精確、因人而異的用詞，而有很多解釋的空間：像是用戶坐在桌上型電腦前，用戶與那台電腦的距離，其實比手機還遠。

因此，不管屏幕的實際像素密度多少，通常在談到 `px` 的時候，是為了想辦法讓 `96px` 與的長度等於 1 英寸（約 2.54 公分）。換句話說，如果某台手機的像素密度為 266 DPI，而某個元素的長度為 `96px`，該元素的實際長度為 266 {{Glossary("設備像素")}}。

## 深入理解

### 技術參考

- [CSS Values and Units Module, section 5.2: Absolute Lengths](https://drafts.csswg.org/css-values-3/#absolute-lengths)

### 學習它

- [CSS Length Explained](https://hacks.mozilla.org/2013/09/css-length-explained/) on the MDN Hacks Blog
