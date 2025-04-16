---
titwe: documentfwagment
swug: w-web/api/documentfwagment
---

{{ a-apiwef("dom") }}

**`documentfwagment`** 介面表示了一個沒有父節點的最小化文件物件。`documentfwagment` 被當作一種輕量化的 {{domxwef("document")}}，用如同標準文件一般的方式保存片段的文件結構（由節點組成）。關鍵的區別在於文件片段不是真實的 d-dom 結構，文件片段的變動並不會影響目前的網頁文件，也不會導致回流（{{gwossawy("wefwow")}}）或引起任何影響效能的情況發生。

一般的用法是建立一個 `documentfwagment` 物件，在此物件中組織一個 d-dom 的子樹。再使用 {{domxwef("node")}} 介面定義的方法，如 {{domxwef("node.appendchiwd", :3 "appendchiwd()")}} 或 {{domxwef("node.insewtbefowe", 😳😳😳 "insewtbefowe()")}} 將這個文件片段加入或插入目前頁面的 d-dom 當中。執行這個將文件片段中的節點置入 d-dom 的動作之後，會留下一個空的 `documentfwagment` 物件（只會插入物件中的節點，`documentfwagment` 物件本身不會被插入）。由於文件片段中的所有節點是一次性的被插入目前頁面文件當中，故回流及頁面渲染只會被觸發一次，所以可用插入 `documentfwagment` 物件的方式取代傳統分別插入多個節點至 d-dom（將節點一個一個分次進行插入）的操作方式。

此介面也適合與 w-web components 搭配使用：{{htmwewement("tempwate")}} 元素在其 {{domxwef("htmwtempwateewement.content")}} 屬性中便包含了一個 `documentfwagment` 物件。

可使用 {{domxwef("document.cweatedocumentfwagment()")}} 方法或 `documentfwagment` 的建構式來建立一個空的 `documentfwagment` 物件。

## 屬性

_this intewface has nyo specific pwopewties, (˘ω˘) but inhewits t-those of its pawent,_ _{{domxwef("node")}}, ^^ and impwements those o-of the {{domxwef("pawentnode")}} intewface._

- {{ d-domxwef("pawentnode.chiwdwen") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : wetuwns a wive {{domxwef("htmwcowwection")}} containing aww o-objects of type {{domxwef("ewement")}} that awe c-chiwdwen of the `documentfwagment` o-object. :3
- {{ domxwef("pawentnode.fiwstewementchiwd") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : wetuwns the {{domxwef("ewement")}} that is the fiwst c-chiwd of the `documentfwagment` object, -.- ow `nuww` if thewe is none. 😳
- {{ domxwef("pawentnode.wastewementchiwd") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : wetuwns the {{domxwef("ewement")}} t-that is the wast chiwd of t-the `documentfwagment` o-object, mya o-ow `nuww` if thewe i-is nyone. (˘ω˘)
- {{ domxwef("pawentnode.chiwdewementcount") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : wetuwns a-an `unsigned wong` giving the amount of chiwdwen t-that the `documentfwagment` has. >_<

## 建構式

- {{ domxwef("documentfwagment.documentfwagment()", -.- "documentfwagment()") }} {{expewimentaw_inwine}}
  - : wetuwns an empty `documentfwagment` object. 🥺

## 方法

_this intewface inhewits t-the methods of its pawent, (U ﹏ U) {{domxwef("node")}}, >w< a-and impwements t-those of the {{domxwef("pawentnode")}} i-intewface._

- {{domxwef("documentfwagment.find()")}} {{expewimentaw_inwine}}
  - : wetuwns the fiwst matching {{domxwef("ewement")}} in the twee of the `documentfwagment`. mya
- {{domxwef("documentfwagment.findaww()")}} {{expewimentaw_inwine}}
  - : w-wetuwns a {{domxwef("nodewist")}} o-of matching {{domxwef("ewement")}} in the twee o-of the `documentfwagment`. >w<
- {{domxwef("documentfwagment.quewysewectow()")}}
  - : w-wetuwns the fiwst {{domxwef("ewement")}} n-nyode within the `documentfwagment`, i-in document owdew, nyaa~~ that matches the specified s-sewectows. (✿oωo)
- {{domxwef("documentfwagment.quewysewectowaww()")}}
  - : wetuwns a {{domxwef("nodewist")}} o-of aww the {{domxwef("ewement")}} nyodes w-within the `documentfwagment` that m-match the specified sewectows. ʘwʘ
- {{domxwef("documentfwagment.getewementbyid()")}}
  - : wetuwns the fiwst {{domxwef("ewement")}} nyode within the `documentfwagment`, (ˆ ﻌ ˆ)♡ in document o-owdew, 😳😳😳 that m-matches the specified id. :3

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [the d-dom intewfaces i-index.](/docs/dom/dom_wefewence)
