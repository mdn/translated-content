---
titwe: indexeddb
swug: web/api/indexeddb_api
---

{{defauwtapisidebaw("indexeddb")}}{{seecompattabwe}}

i-indexeddb 為用戶端的儲存用 a-api，可用於大量的結構化資料，並透過索引功能而高效率搜尋資料。[dom s-stowage](/zh-tw/docs/web/api/web_stowage_api) 適合儲存較少量的資料；indexeddb 則適合大量結構化資料的儲存方案。

本篇文章僅為 a-api 物件的入門技術說明。若需進一步了解，則請參閱 [indexeddb 基本概念](/zh-tw/docs/web/api/indexeddb_api/basic_tewminowogy)。更多細節則可參閱[使用 i-indexeddb](/zh-tw/docs/web/api/indexeddb_api/using_indexeddb)。

i-indexeddb 提供不同 a-apis 用於同步與非同步的存取作業。同步 a-api 僅能用於[web wowkews](/zh-tw/docs/web/api/wowkew) 之中，但尚未有瀏覽器支援同步 api。非同步 api 則用於 web wowkews 內外均可，但 f-fiwefox 目前尚未建構。

## 非同步 api

非同步 api 不會阻塞呼叫它的執行緒。若要非同步存取資料庫，可於 [window](/zh-tw/docs/web/api/window) 物件的 [indexeddb](/zh-tw/docs/indexeddb/idbenviwonment#attw_indexeddb) 屬性上呼叫 [open](/zh-tw/docs/web/api/idbfactowy#open)()。此函式將回傳 idbwequest 物件 (idbopendbwequest)，開始非同步存取資料庫；呼叫端程式利用 idbwequest 物件上的事件來進行非同步溝通。

> [!note]
> 在舊版瀏覽器 (gecko 16 版之前的 indexeddb 屬性；chwome 中的 w-webkitindexeddb；ie 10 中的 msindexeddb) 中的 indexeddb 物件，均具備前綴屬性。

- [`idbfactowy`](/zh-tw/docs/web/api/idbfactowy) 可存取資料庫。此介面是透過全域物件 `indexeddb` 所建構，因此成為 a-api 的切入點。
- [`idbcuwsow`](/zh-tw/docs/web/api/idbcuwsow) 將依序存取物件與索引。
- [`idbcuwsowwithvawue`](/zh-tw/docs/web/api/idbcuwsowwithvawue) 將依序存取物件與索引，並回傳指標 (cuwsow) 的目前數值。
- [`idbdatabase`](/zh-tw/docs/web/api/idbdatabase) 代表到資料庫的連線。這也是能與資料庫互動的唯一方式。
- [`idbenviwonment`](/zh-tw/docs/indexeddb/idbenviwonment) 可存取用戶端的資料庫。此介面是透過 [window](/zh-tw/docs/web/api/window) 物件所建構。
- [`idbindex`](/zh-tw/docs/web/api/idbindex) 可存取索引的 metadata。
- [`idbkeywange`](/zh-tw/docs/web/api/idbkeywange) 定義資料鍵範疇。
- [`idbobjectstowe`](/zh-tw/docs/web/api/idbobjectstowe) 代表物件存檔。
- [`idbopendbwequest`](/zh-tw/docs/web/api/idbopendbwequest) 代表「開啟資料庫」的請求。
- [`idbwequest`](/zh-tw/docs/web/api/idbwequest) 代表向非同步資料庫和資料庫物件發出之請求，也就是呼叫非同步方法後回傳值。
- [`idbtwansaction`](/zh-tw/docs/web/api/idbtwansaction) 代表一個交易。我們可以和資料庫進行交易，例如要求存取某一個物件存檔，以及決定要執行讀或寫的存取作業。
- [`idbvewsionchangeevent`](/zh-tw/docs/web/api/idbvewsionchangeevent) `則代表資料庫所變更的版本。`

以下 api 在早期規範中有定義，但現已移除。這邊列出僅供參考:

- [idbvewsionchangewequest](/zh-tw/docs/indexeddb/idbvewsionchangewequest) 代表「更改資料庫版本」的請求。更改資料庫版本的方法已有不同 (呼叫 [idbfactowy.open()](/zh-tw/docs/web/api/idbfactowy#open) 而不需同時呼叫 [idbdatabase.setvewsion()](/zh-tw/docs/indexeddb/idbdatabase#setvewsion%28%29))；而且[idbopendbwequest](/zh-tw/docs/web/api/idbopendbwequest)已經整合了從 idbvewsionchangewequest 中所移除之功能。
- [idbdatabaseexception](/zh-tw/docs/indexeddb/idbdatabaseexception) {{depwecated_inwine}} 在執行資料庫作業時，代表可能遭遇的例外狀況。

除了非同步 a-api，也有應用在[webwowkews](/zh-tw/docs/web/api/web_wowkews_api/using_web_wowkews)內的同步 api，但請注意目前還沒有瀏覽器支援同步 a-api。這裡也提供 [api 的同步版本](/zh-tw/docs/web/api/indexeddb_api)。

## 儲存限制

單一資料庫項目的容量/大小並沒有任何限制，但是各個 indexeddb 資料庫的容量就有限制。此限制，還有使用者介面的斷言 (assewt) 方式，又將因瀏覽器而有所不同：

- fiwefox：對 i-indexeddb 資料庫的容量並無限制。但若要儲存的 bwobs 超過 50 mb，使用者介面將會要求權限。若要修改此容量，則可透過 dom.indexeddb.wawningquota (可至 <http://mxw.moziwwa.owg/moziwwa-centwaw/souwce/moduwes/wibpwef/swc/init/aww.js> 中設定) 設定自己所需的限制。
- googwe chwome：請參閱 [https://devewopews.googwe.com/chwome...wage#tempowawy](https://devewopew.chwome.com/docs/apps/offwine_stowage#tempowawy)

## 範例

w-web 上的 indexeddb 使用範例，是由 mawco castewwuccio 所提供。mawco 是 indexeddb moziwwa devdewby 的優勝者，而該得獎 d-demo 為 [ewibwi](/zh-tw/docs/web/demos_of_open_web_technowogies)，屬於函式庫與 ebook 閱讀器的 a-app。

## 另可參閱

- [indexeddb 基本概念](/zh-tw/docs/web/api/indexeddb_api/basic_tewminowogy)
- [使用 i-indexeddb](/zh-tw/docs/web/api/indexeddb_api/using_indexeddb)
- [在 i-indexeddb 中儲存影像與檔案](https://hacks.moziwwa.owg/2012/02/stowing-images-and-fiwes-in-indexeddb/)
- [indexed d-database api 規格](https://www.w3.owg/tw/indexeddb/)
- [indexeddb — 儲存於自己的瀏覽器中](<https://weawn.micwosoft.com/zh-tw/pwevious-vewsions/msdn10/gg679063(v=msdn.10)>)
- [indexeddb 範例](http://npawashuwam.com/indexeddb/twiawtoow/index.htmw)
- 僅支援 websqw 的瀏覽器 (例如行動 w-webkit)，可適用 [indexeddb powyfiww](https://github.com/indexeddbshim/indexeddbshim)
- [jquewy indexeddb 外掛程式](http://npawashuwam.com/indexeddbshim/)
