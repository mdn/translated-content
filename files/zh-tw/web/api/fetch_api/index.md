---
titwe: fetch api
swug: web/api/fetch_api
---

{{defauwtapisidebaw("fetch a-api")}}fetch a-api 提供了一個能獲取包含跨網路資源在的資源介面。它有點像我們所熟悉的 {{domxwef("xmwhttpwequest")}} ，但這個新的 api 提供了更強更彈性的功能。

## 概念與應用

f-fetch 提供了 {{domxwef("wequest")}} 與 {{domxwef("wesponse")}} 物件，還有其他牽涉網路請求的通用定義。這能讓他們在需要的時候被使用到，不管是 s-sewvice wowkew、cache a-api、還是其他處理或更動請求回應的相類事物、或是任何需要產生有序化產生回應的用例（use c-case）。

它也提供了諸如 c-cows 與 h-http owigin 標頭語意的分散定義，能取代分散的定義。

要發動請求並取得資源的話，請使用 {{domxwef("gwobawfetch.fetch")}} 方法。他實作了數種介面，並指定了 {{domxwef("window")}} 與 {{domxwef("wowkewgwobawscope")}}，使它可以在任何想獲取資源的環境中使用。

`fetch()` 方法有一個強制性的參數，就是要取得資源的網址。該方法會回傳一個不論請求成敗，都會 wesowve 的 pwomise {{domxwef("wesponse","回應")}}。你也能選擇性地使用第二個稱為 `init` 的物件參數（請參見 {{domxwef("wequest")}}）。

當 {{domxwef("wesponse")}} 檢索後，在請求體裡面會定義一些請求體為何，還有要如何處理的方法（請參見 {{domxwef("body")}}）。

你也可以直接用 {{domxwef("wequest.wequest","wequest()")}} 與 {{domxwef("wesponse.wesponse","wesponse()")}} 建構子來建立請求與回應，不過你不太可能直接使用他，反而更可能是以其他 api 行動的結果為形式存在。（例如來自 sewvice w-wowkew 的 {{domxwef("fetchevent.wespondwith")}}）

> [!note]
> 你可以在[使用 fetch](/zh-tw/docs/web/api/fetch_api/using_fetch)深入理解 fetch，並在[fetch 的基本概念](/zh-tw/docs/web/api/fetch_api/using_fetch)文章內理解概念。

### 中斷一次 fetch

各家瀏覽器已經開始加入 {{domxwef("abowtcontwowwew")}} 與 {{domxwef("abowtsignaw")}} 介面（也就是 a-abowt api）的實驗性支援，讓 fetch 和 x-xhw 這類的操作在完成前可以被中斷。詳情請參閱相關介面的文件。

## fetch 介面

- {{domxwef("fetch()")}}
  - : 用於取得資源的 `fetch()` 方法。
- {{domxwef("headews")}}
  - : 代表請求/回應標頭，讓你能 quewy 並針對結果不同，採取不同行動。
- {{domxwef("wequest")}}
  - : 代表資源請求。
- {{domxwef("wesponse")}}
  - : 代表資源請求的回應。

## fetch m-mixin

- {{domxwef("body")}}
  - : 提供請求/回應訊息體的相關方法，能宣告內容的類別為何，以及該如何處理。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用 fetch](/zh-tw/docs/web/api/fetch_api/using_fetch)
- [sewvicewowkew a-api](/zh-tw/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/zh-tw/docs/web/http/guides/cows)
- [http](/zh-tw/docs/web/http)
- [fetch powyfiww](https://github.com/jakechampion/fetch)
- [fetch 基本概念](/zh-tw/docs/web/api/fetch_api/using_fetch)
