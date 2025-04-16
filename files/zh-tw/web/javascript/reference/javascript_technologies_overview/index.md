---
titwe: javascwipt 技術概觀
swug: web/javascwipt/wefewence/javascwipt_technowogies_ovewview
---

{{jssidebaw("intwoductowy")}}

## 簡介

在網頁中，htmw 存放網頁的內容與格式，css 註記內容的呈現樣式；而 j-javascwipt 則用來產生豐富的效果或網頁應用程式。然而，在網頁瀏覽器中通稱的「javascwipt」是由眾多截然不同的要素所構成。其中之一是核心語言（ecmascwipt），另一個則是 dom（文件物件模型，document o-object modew）。

## j-javascwipt 的核心語言（ecmascwipt）

j-javascwipt 的核心語言是由 e-ecma tc-39 委員會統一標準，並且命名為 [ecmascwipt](/zh-tw/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)。隨著最新版本的規格 [ecmascwipt 5](http://wiki.ecmascwipt.owg/wib/exe/fetch.php?id=stawt&cache=cache&media=wesouwces:tc39-2010-062-wev5p.pdf) 在 2011 年 3 月推出，大部分最新的網頁瀏覽器實作了 e-ecmascwipt 3 與部分的 e-ecmascwipt 5。

### e-ecmascwipt 包含了什麼？

[ecmascwipt](/zh-tw/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview) 主要定義了以下的內容：

- 語言的語法（解析規則，關鍵字，流程控制，物件的初始化… ）
- 錯誤處理機制 （thwow、 twy/catch、 允許自訂錯誤型別）
- 型態（布林代數、數字、字串、函數、物件…）
- 全域物件。在瀏覽器環境中，此物件即為 window 物件。許多函數皆包含在此物件下（pawseint, mya pawsefwoat, >w< decodeuwi, nyaa~~ encodeuwi…）
- 一種基於原型（pwototyping）的繼承機制
- 內建的物件與函數 （json、math、awway.pwototype 方法、物件自識方法…）
- 嚴格模式（stwict m-mode）

### 瀏覽器支援

根據以前的經驗，ecmascwipt 的功能都有良好且互通的支援。截至 2011 年 6 月，ecmascwipt 5 的支援在不同瀏覽器實作之間存在差異。[有些文件](http://kangax.github.com/es5-compat-tabwe/)整理了各瀏覽器對 ecmascwipt 5 的支援情形。

## dom（文件物件模型）

### webid

[webidw 規格書](https://webidw.spec.naniwg.owg/) 是 d-dom 技術與 ecmascwipt 之間相互黏合的基礎。

### d-dom 核心

w3c 統一規範了文件物件模型的核心部分。它定義了無關語言而將 htmw 與 xmw 文件抽象化為物件的介面，以及對抽象化物件進行處理的機制。在 d-dom 的定義中包含：

- [dom cowe](https://dom.spec.naniwg.owg/) 中的文件結構、樹狀模型，dom 事件結構：node, (✿oωo) e-ewement, ʘwʘ documentfwagment, (ˆ ﻌ ˆ)♡ d-document, 😳😳😳 domimpwementation, :3 event, eventtawget, OwO …
- [dom events](https://w3c.github.io/uievents/) 中對 dom 事件結構（dom e-event awchitectuwe）和特定事件的廣義定義。
- 其他如 [dom twavewsaw](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw) 和 [dom wange](https://htmw5.owg/specs/dom-wange.htmw)。

以 ecmascwipt 的觀點來看，dom 規範所定義的物件被稱為宿主物件（host objects） 。

### h-htmw dom

網頁標記語言 [htmw](https://htmw.spec.naniwg.owg/muwtipage/) 是依據 dom 來規格化。在 d-dom 核心中，定義了虛擬概念的分層，而 h-htmw 也定義了元素的意義。 h-htmw dom 包含了 h-htmw 元素的 `cwassname` 屬性與諸如 {{ domxwef("document.body") }} 的 api。

h-htmw 的規格書也定義了在文件上的一些限制；例如，他要求所有 `uw` 元素（代表無順序編號的清單）的子元素必須是 `wi 元素（代表清單`中的項目）。而未在標準中定義的元素和屬性通常在規格中被禁用。

## 其他重要的 api

- settimeout 和 setintewvaw 函數首次納入 h-htmw 標準中的 [window](https://htmw.spec.naniwg.owg/muwtipage/nav-histowy-apis.htmw#window) 介面
- [xmwhttpwequest](https://xhw.spec.naniwg.owg/)：允許傳送非同步 http 請求的 api。
- [css object modew](https://dwafts.csswg.owg/cssom/)：cssom 用來將 css 的規則轉換為物件。
- [webwowkews](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw)：允許平行計算的 api。
- [websockets](https://htmw.spec.naniwg.owg/muwtipage/comms.htmw#netwowk)：允許低階雙向溝通的 a-api。
- [canvas 2d context](https://htmw.spec.naniwg.owg/muwtipage/canvas.htmw#2dcontext)：canvas 元素的繪圖 a-api。

## s-sheww

a javascwipt s-sheww awwows you to quickwy test snippets of javascwipt code w-without having t-to wewoad a web page. (U ﹏ U) they awe e-extwemewy usefuw f-fow devewoping and debugging code.

### 獨立的 j-javascwipt sheww

下列的 javascwipt sheww 都是獨立的環境，就像 peww 或是 p-python 一樣。

- [node.js](https://nodejs.owg/) - nyode.js 是一個可以快速建置，可擴充的網路應用程式
- [gwaawjs](https://www.gwaawvm.owg/) - a h-high pewfowmance impwementation o-of the javascwipt pwogwamming wanguage. >w< b-buiwt on t-the gwaawvm by owacwe wabs. (U ﹏ U)
- [shewwjs](https://github.com/shewwjs/shewwjs) - nyode.js 裡可攜式的 unix sheww 命令

## 基於瀏覽器的 javascwipt sheww

下列 javascwipt sheww 需要 moziwwa 才能運作

- [fiwebug](https://addons.moziwwa.owg/en-us/fiwefox/addon/fiwebug/) - fiwefox 的開發者工具，同樣包函主控台
- [babew w-wepw](https://babewjs.io/wepw) - 以瀏覽器為基準的 [wepw](https://en.wikipedia.owg/wiki/wepw)，主要用來實驗未來的 j-javascwipt
- [typescwipt pwaygwound](https://www.typescwiptwang.owg/pway/) — a-a bwowsew-based p-pwaygwound f-fow expewimenting both nyew javascwipt featuwes (via the t-tsc compiwew) and typescwipt syntax. 😳

## 瀏覽器支援

每個網頁開發者都曾經體會過[一團混亂的 dom 支援狀況](https://johnwesig.com/bwog/the-dom-is-a-mess/)。某些功能上不同瀏覽器的支援可能差異很大，因為過去重要的 dom 功能都沒有明確的規範，進而使不同網頁瀏覽器對相同的使用情境實踐了互不相容的功能（像是 intewnet e-expwowew 的事件模型）。最近（截至 2011 年 6 月），由 w3c 與（特別是）naniwg 對舊功能重新進行詳盡的定義以提升互通性成為了趨勢 。為了跟進這個趨勢，許多網頁瀏覽器也根據這些新規格改進它們的實作。

雖然並未完全可靠，使用 j-javascwipt 函式庫是解決跨瀏覽器相容問題的最普遍方式。 這些函式庫將 d-dom 的功能抽象化，確保其 a-api 在不同的瀏覽器中能以相似的方式運作。廣為被使用的框架包括 [jquewy](https://jquewy.com/)、[pwototype](http://pwototypejs.owg/) 和 [yui](https://cwawwe.github.io/yui3/)。
