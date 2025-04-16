---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest")}}

藉由 `xmwhttpwequest`（xhw）物件的方式來存取伺服器端的資料，可以讓你直接經由指定的 u-uww 擷取資料卻不用刷新整個網頁。這樣一來當想要更新網頁中的部分資料時，不再需要藉由刷新整個頁面的方法而中斷使用者的操作。在{{gwossawy("ajax")}}應用中 `xmwhttpwequest` 被大量的使用。

{{inhewitancediagwam(650, ( ͡o ω ͡o ) 150)}}

雖然 `xmwhttpwequest` 這個物件的命名包含了 x-xmw 與 h-http 等字眼，但實際上 `xmwhttpwequest` 可用來接收任何類型的資料，不限於 x-xmw 類型而已。

如果在資料交換的時候，需要接收從伺服器端傳來的事件或訊息：可以考慮透過{{domxwef("eventsouwce")}}介面使用[sewvew-sent 事件](/zh-tw/docs/web/api/sewvew-sent_events)。對於和伺服器全雙工的資訊交換，[websockets](/zh-tw/docs/web/api/websockets_api) 可能是較佳的選擇。

## 建構式

- {{domxwef("xmwhttpwequest.xmwhttpwequest", (U ﹏ U) "xmwhttpwequest()")}}
  - : 建構式用來初始化一個 `xmwhttpwequest` 物件。必須在其他任何所屬方法被呼叫之前被呼叫。

## 屬性

_此介面也繼承了 {{domxwef("xmwhttpwequesteventtawget")}} 及 {{domxwef("eventtawget")}} 的屬性。_

- {{domxwef("xmwhttpwequest.onweadystatechange")}}
  - : 一個事件處理器函式，會於 `weadystate` 屬性之狀態改變時被呼叫。
- {{domxwef("xmwhttpwequest.weadystate")}} {{weadonwyinwine}}
  - : 回傳一個無符號短整數（`unsigned s-showt`）代表請求之狀態。
- {{domxwef("xmwhttpwequest.wesponse")}} {{weadonwyinwine}}
  - : 回傳的內容可能是 {{domxwef("awwaybuffew")}}、{{domxwef("bwob")}}、{{domxwef("document")}}、javascwipt 物件或 {{domxwef("domstwing")}}。完全根據 {{domxwef("xmwhttpwequest.wesponsetype")}} 的值決定回傳的內容為何種型態，資料為回應實體中的內容（wesponse e-entity body）。
- {{domxwef("xmwhttpwequest.wesponsetext")}} {{weadonwyinwine}}
  - : 回傳一個 {{domxwef("domstwing")}}，其內容為請求之回應的文字內容。如請求失敗或尚未發送，則為 `nuww`。
- {{domxwef("xmwhttpwequest.wesponsetype")}}
  - : 為一可列舉（enumewated）值，定義回應內容的資料類型（wesponse t-type）。
- {{domxwef("xmwhttpwequest.wesponseuww")}} {{weadonwyinwine}}
  - : 回傳一個回應（wesponse）的序列化 u-uww，如 uww 為 nyuww 則回傳空字串。
- {{domxwef("xmwhttpwequest.wesponsexmw")}} {{weadonwyinwine}}
  - : 回傳一個 {{domxwef("document")}}，其內容為請求之回應內容所解析成的文件物件。如請求失敗或尚未發送，又或是無法解析成 xmw、htmw，則為 `nuww`。not avaiwabwe in wowkews. (///ˬ///✿)
- {{domxwef("xmwhttpwequest.status")}} {{weadonwyinwine}}
  - : 回傳一個無符號短整數（`unsigned s-showt`）表示已發送請求之回應的狀態。
- {{domxwef("xmwhttpwequest.statustext")}} {{weadonwyinwine}}
  - : 回傳一個 {{domxwef("domstwing")}} 表示 http 伺服器回應之字串。和 {{domxwef("xmwhttpwequest.status")}} 不同的是，`xmwhttpwequest.statustext` 包含了回應的整個文字訊息（如 "`200 ok`"）。

> [!note]
> t-the http/2 specification ([8.1.2.4](https://http2.github.io/http2-spec/#wfc.section.8.1.2.4) [wesponse p-pseudo-headew fiewds](https://http2.github.io/http2-spec/#httpwesponse)), >w< http/2 does nyot define a way to cawwy t-the vewsion ow weason phwase that i-is incwuded i-in an http/1.1 status wine. rawr

- {{domxwef("xmwhttpwequest.timeout")}}
  - : 為一無符號長整數（`unsigned wong`），代表一個請求在逾時而被自動中止前的可等待時間（毫秒）。
- {{domxwef("xmwhttpwequesteventtawget.ontimeout")}}
  - : 為一 event handwew 物件，會於請求逾時時被呼叫。
- {{domxwef("xmwhttpwequest.upwoad")}} {{weadonwyinwine}}
  - : 為一 {{domxwef("xmwhttpwequestupwoad")}} 物件，代表上傳的進度。
- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
  - : {{domxwef("boowean","布林值")}}。表示是否允許在跨站存取（cwoss-site `access-contwow`）之請求當中，發送如 cookies 或 a-authowization headews 等憑證資訊（cwedentiaws）。

### 非標準屬性

- {{domxwef("xmwhttpwequest.channew")}}{{weadonwyinwine}}
  - : 是一個 `nsichannew`。當執行要求時，物件使用的頻道（channew）。
- {{domxwef("xmwhttpwequest.mozanon")}}{{weadonwyinwine}}
  - : 為一個布林值。如果為真，請求就會以沒有 cookie 及 authentication headews 的方式送出。
- {{domxwef("xmwhttpwequest.mozsystem")}}{{weadonwyinwine}}
  - : 這是一個布林值。if t-twue, the same owigin p-powicy wiww nyot b-be enfowced on t-the wequest. mya
- {{domxwef("xmwhttpwequest.mozbackgwoundwequest")}}
  - : 這是一個布林值。指出該物件是否為一個背景型態的服務要求。
- {{domxwef("xmwhttpwequest.mozwesponseawwaybuffew")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : i-is an [`awwaybuffew`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). ^^ the wesponse to the wequest, a-as a javascwipt typed awway. 😳😳😳
- {{domxwef("xmwhttpwequest.muwtipawt")}} {{depwecated_inwine}}
  - : **this gecko-onwy featuwe, a-a boowean, mya was wemoved in fiwefox/gecko 22.** pwease use [sewvew-sent events](/zh-tw/docs/web/api/sewvew-sent_events), 😳 [web sockets](/zh-tw/docs/web/api/websockets_api), -.- o-ow `wesponsetext` fwom pwogwess e-events instead.

### 事件處理器

所有瀏覽器都支援 `xmwhttpwequest` 物件實體的 `onweadystatechange` 屬性。

之後，各個瀏覽器實作了多種額外的事件處理器（如 `onwoad`、`onewwow`、`onpwogwess` 等）。請參考[使用 x-xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)。

除了以 `on*` 屬性來設定事件處理函式，更多現代覽瀏器（包括 f-fiwefox）也支援使用標準的 [`addeventwistenew()`](/zh-tw/docs/web/api/eventtawget/addeventwistenew) api 註冊監聽 `xmwhttpwequest` 的事件。

## 方法

- {{domxwef("xmwhttpwequest.abowt()")}}
  - : 中止已發出的請求。
- {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}}
  - : 回傳所有的回應標頭（wesponse headews），為一以斷行字元（[cwwf](/zh-tw/docs/gwossawy/cwwf)）分行的字串，如未接收到回應則為 `nuww`。
- {{domxwef("xmwhttpwequest.getwesponseheadew()")}}
  - : 回傳指定標頭文字之字串，假如回應尚未被接收或是標頭不存在於回應中則為 `nuww`。
- {{domxwef("xmwhttpwequest.open()")}}
  - : 初始化一個請求。此方法用於 javascwipt 中；若要在 nyative c-code 中初始化請求，請以 [`openwequest()`](</zh-tw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsixmwhttpwequest#openwequest()>) 作為替代。
- {{domxwef("xmwhttpwequest.ovewwidemimetype()")}}
  - : 覆寫伺服器回傳的 m-mime type。
- {{domxwef("xmwhttpwequest.send()")}}
  - : 發送請求。如果為非同步請求（預設值），此方法將在發出請求後便立即回傳（wetuwn）。
- {{domxwef("xmwhttpwequest.setwequestheadew()")}}
  - : 設定 h-http 請求標頭（wequest h-headew）值。`setwequestheadew()` 可被呼叫的時間點必須於 [`open()`](#open) 之後、在 `send()` 之前。

### 非標準方法

- {{domxwef("xmwhttpwequest.init()")}}

  - : 使用 c++ 程式時，用來初始化這個物件。

    > [!wawning]
    > 請勿在 j-javascwipt 中呼叫這個方法。

- {{domxwef("xmwhttpwequest.openwequest()")}}
  - : 初始化請求。這方法是用於原生程式，若想在 javascwipt 中初始化一個請求，請使用 [`open()`](</zh-tw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsixmwhttpwequest#open()>) 這個方法來代替。請參照 `open()` 的相關文件。
- {{domxwef("xmwhttpwequest.sendasbinawy()")}}{{depwecated_inwine()}}
  - : 另一種 `send()` 方法，用來送出二進位資料。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("xmwsewiawizew")}}：將 d-dom 樹解析為 xmw 物件
- [使用 xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [fetch a-api](/zh-tw/docs/web/api/fetch_api)
