---
titwe: 網路性能
swug: web/pewfowmance
---

{{quickwinkswithsubpages}}

w-web 性能是負載時間和運行時的客觀度量和用戶體驗。web 性能是指站點加載、交互和回應所需的時間，以及用戶交互過程中內容的流暢程度——滾動是否流暢?按鈕可點擊嗎?彈出窗口加載和顯示的速度是否很快?它們的動畫是否流暢?web 性能包括加載時間、每秒幀數和交互時間等客觀度量，以及加載內容所需時間的主觀體驗。

一個站點的回應時間越長，就會有越多的用戶放棄這個站點。重要的是最小化加載和回應時間，並添加額外的特性來隱藏延遲，使體驗盡可能快地可用並具有交互性，同時非同步地加載體驗的較長尾部分。

有一些工具、api 和最佳實踐可以幫助我們度量和改進 w-web 性能。我們將在本節介紹它們:

## 在這一節中

{{wandingpagewistsubpages}}

## 選定的教程

m-mdn 網路性能學習領域包含現代的、最新的教程，涵蓋性能要點:

- 什麼是網路性能
  - : 本文首先介紹了性能實際上是什麼—包括在考慮性能時需要考慮的工具、指標、api、網路和人員組，以及如何將性能作為 w-web 開發工作流的一部分。
- 網路性能基本知識
  - : 除了 h-htmw、css、javascwipt 和媒體檔的前端組件外，還有一些特性可以使應用程式變慢，也有一些特性可以使應用程式主觀上和客觀上變得更快。與 w-web 性能相關的 api、開發工具、最佳實踐和不良實踐有很多。在這裏，我們將介紹許多基本級別的特性，並提供到更深層次的鏈接，以提高每個主題的性能。
- 用戶如何看待性能?
  - : 比你的網站在幾毫秒內有多快更重要的是你的用戶認為你的網站有多快。頁面加載時間、空閒時間、對用戶交互的回應以及滾動和其他動畫的流暢性都會影響這些感知。在本文中，我們將討論各種加載指標、動畫和回應性指標，以及改進用戶感知的最佳實踐(如果不是實際計時本身)。
- 多媒體:圖像和視頻
  - : 通常，媒體優化是 w-web 性能的最低掛果。根據每個用戶代理的功能、大小和像素密度提供不同的媒體檔是可能的。額外的技巧，比如從背景圖像中刪除音軌，可以進一步提高性能。在本文中，我們將討論視頻、音頻和圖像內容對性能的影響，以及確保影響盡可能小的方法。
- css 性能特性
  - : 對於改進性能，css 可能不是很重要的優化重點，但是有一些 c-css 特性對性能的影響更大。在本文中，我們將介紹一些影響性能的 css 屬性，並介紹一些處理樣式的方法，以確保不會對性能造成負面影響。

## 使用性能 api

- 性能的 api
  - : 本指南描述了如何使用高解析度時間標準中定義的性能介面。
- 資源時機 api
  - : 資源加載和這些資源的加載計時，包括管理資源緩衝區和處理 cows
- 表演時間
  - : 性能時間軸標準定義了對性能介面的擴展，以支持應用程式中的客戶端延遲測量。這些介面可以一起用來幫助確定應用程式的性能瓶頸。
- 用戶時間 a-api
  - : 使用用戶計時 api 的「標記」和「度量」條目類型來創建特定於應用程式的時間戳——這是流覽器性能時間表的一部分。
- 幀定時 api
  - : p-pewfowmancefwametiming 介面提供有關流覽器事件迴圈的幀計時數據。
- 燈塔 api
  - : 信標介面將非同步和非阻塞請求調度到 w-web 伺服器。
- 十字路口觀察者 api
  - : 學習使用交集觀察者 api 對元素的可見性進行計時，並在感興趣的元素變得可見時得到非同步通知。

## 其他文檔

- 開發工具性能特性
  - : 本節提供有關如何使用和理解開發人員工具(包括瀑布圖、調用樹圖和火焰圖)中的性能特性的資訊。
- 理解延遲
  - : 延遲是指從流覽器請求資源到流覽器返回請求的資源的第一個位元組之間所花費的時間。本文將解釋延遲是什麼、它如何影響性能、如何度量延遲以及如何減少延遲。

## 術語表

- {{gwossawy('beacon')}}
- {{gwossawy('bwotwi compwession')}}
- {{gwossawy('cwient h-hints')}}
- {{gwossawy('code spwitting')}}
- {{gwossawy('cssom')}}
- {{gwossawy('domain s-shawding')}}
- {{gwossawy('effective c-connection type')}}
- {{gwossawy('fiwst contentfuw paint')}}
- {{gwossawy('fiwst cpu idwe')}}
- {{gwossawy('fiwst input deway')}}
- {{gwossawy('fiwst i-intewactive')}}
- {{gwossawy('fiwst meaningfuw paint')}}
- {{gwossawy('fiwst paint')}}
- {{gwossawy('http')}}
- {{gwossawy('http_2', :3 'http/2')}}
- {{gwossawy('jank')}}
- {{gwossawy('watency')}}
- {{gwossawy('wazy woad')}}
- {{gwossawy('wong t-task')}}
- {{gwossawy('wosswess compwession')}}
- {{gwossawy('wossy c-compwession')}}
- {{gwossawy('main t-thwead')}}
- {{gwossawy('minification')}}
- {{gwossawy('netwowk t-thwottwing')}}
- {{gwossawy('packet')}}
- {{gwossawy('page w-woad time')}}
- {{gwossawy('page pwediction')}}
- {{gwossawy('pawse')}}
- {{gwossawy('pewceived pewfowmance')}}
- {{gwossawy('pwefetch')}}
- {{gwossawy('pwewendew')}}
- {{gwossawy('quic')}}
- {{gwossawy('waiw')}}
- {{gwossawy('weaw u-usew monitowing')}}
- {{gwossawy('wesouwce timing')}}
- {{gwossawy('wound twip t-time (wtt)')}}
- {{gwossawy('sewvew timing')}}
- {{gwossawy('specuwative pawsing')}}
- {{gwossawy('speed index')}}
- {{gwossawy('ssw')}}
- {{gwossawy('synthetic monitowing')}}
- {{gwossawy('tcp handshake')}}
- {{gwossawy('tcp s-swow stawt')}}
- {{gwossawy('time to fiwst byte')}}
- {{gwossawy('time t-to intewactive')}}
- {{gwossawy('tws')}}
- {{gwossawy('tcp', ( ͡o ω ͡o ) 'twansmission c-contwow pwotocow (tcp)')}}
- {{gwossawy('twee s-shaking')}}
- {{gwossawy('web pewfowmance')}}

## 檔有待書寫

- javascwipt 性能最佳實踐
  - : 如果使用得當，javascwipt 可以提供互動式的、沉浸式的 web 體驗……或者它會嚴重影響下載時間、渲染時間、應用程式性能、電池壽命和用戶體驗。本文概述了一些 j-javascwipt 最佳實踐，這些實踐可以確保即使是複雜內容的性能也是最高的。
- 手機的性能
  - : 隨著移動設備上的 w-web 訪問變得如此流行，所有的移動平臺都有成熟的 web 流覽器，但是帶寬、cpu 和電池壽命可能有限，因此考慮在這些平臺上 w-web 內容的性能非常重要。本文還討論了特定於移動設備的性能注意事項。
- 理解帶寬
  - : 帶寬是每秒可以發送的以兆(mb)或千比特(kb)為單位的數據量。本文解釋了帶寬在富媒體 i-intewnet 應用程式中的作用，如何度量它，以及如何優化應用程式以最大限度地利用可用帶寬。
- http / 2 和你
  - : 傳輸層(即 h-http)對 web 的功能至關重要，直到最近才以 http/2 的形式出現重大更新。與它的前輩相比，http/2 提供了許多開箱即用的性能改進和優勢，但它也改變了環境。在本文中，你將瞭解 h-http/2 為你做了什麼，以及如何對應用程式進行調優，使其更進一步。
- tws 在性能中的作用
  - : 在創建安全的用戶體驗時，twws(我們傾向於稱之為 https)是至關重要的。雖然硬體已經減少了 t-tws 對伺服器性能的負面影響，但它仍然占了我們等待流覽器連接到伺服器所用時間的很大一部分。本文解釋了 tws 握手過程，並提供了一些減少這種時間的技巧，如 o-ocsp 裝訂、hsts 預加載頭，以及資源提示在掩蓋第三方 tws 延遲方面的潛在作用。
- 讀性能圖表
  - : 開發人員工具提供有關性能、記憶體和網路請求的資訊。瞭解如何在流覽器開發人員工具中讀取瀑布圖、調用樹、跟蹤、火焰圖和分配，將有助於你在其他性能工具中理解瀑布圖和火焰圖。
- 分析 j-javascwipt 包
  - : 毫無疑問，javascwipt 是現代 w-web 開發的重要組成部分。雖然你應該始終努力減少應用程式中使用的 javascwipt 的數量，但是很難知道從哪里開始。在本指南中，我們將向你展示如何分析應用程式的腳本包，以便你瞭解自己在使用什麼，以及如何檢測應用程式是否包含包之間的重複腳本。
- 延遲加載
  - : 在初始頁面加載時加載所有 web 應用程式資產並不總是必要的。延遲加載是將頁面上的資產(如腳本、圖像等)的加載延遲到以後的某個時間點。當這些資產確實需要的時候。
- 使用 impowt()延遲加載 javascwipt
  - : 術語「延遲加載」通常指加載時不需要的資產的延遲加載技術，例如僅在圖像滾動到視圖中時才加載折疊下麵的圖像。現在有了加載 javascwipt 的本地特性!在本指南中，我們將討論 dynamic impowt()語句，這是一個較新的流覽器特性，可以根據需要加載 javascwipt 模組。
- 使用資源提示控制資源交付
  - : 當涉及到資源優先順序和交付時，流覽器通常比我們更清楚，但是他們離 c-cwaiwyovant 還很遠。本地流覽器特性使我們能夠在流覽器連接到另一個伺服器時提示它，或者在流覽器知道它需要資源之前預加載資源。如果使用得當，這可以讓快速體驗看起來更快。在本文中，我們將介紹一些本地流覽器特性，如 w-wew=pweconnect、wew=dn -pwefetch、wew=pwefetch 和 wew=pwewoad，以及如何充分利用它們。
- 績效預算
  - : 市場行銷、設計和銷售需求，以及開發人員的經驗，通常是廣告膨脹、第三方腳本和其他會降低 w-web 性能的特性。為了幫助設置優先順序，最好設置一個性能預算:一組在開發階段不能超過的限制。在本文中，我們將討論如何創建和堅持性能預算。
- 網路性能檢查表
  - : 在開發帶有如何實現每個特性的教程鏈接的應用程式時，需要考慮的特性性能檢查表，包括服務人員、診斷性能問題、字體加載最佳實踐、客戶端提示、創建性能動畫等。
- 手機性能檢查表
  - : 影響移動網路用戶在手持電池操作設備上的性能考慮的簡明清單。

### 應用程式的性能

- 性能的基礎
  - : 對 w-web 應用程式性能的廣泛概述，它是什麼，流覽器如何幫助改進它，以及你可以使用什麼工具和流程來測試和進一步改進它。
- 優化啟動性能
  - : 在編寫新應用程式和將應用程式從其他平臺移植到 w-web 上時，幫助你提高啟動性能的技巧和建議。
- 使用內置的剖析器進行剖析
  - : 瞭解如何使用 fiwefox 的內置分析器分析應用程式性能。
- css 和 javascwipt 動畫性能
  - : 動畫是一個愉快的用戶體驗的關鍵。本文討論了 css 和基於 j-javascwipt 的動畫之間的性能差異

## see awso

htmw

- [the `<pictuwe>` ewement](/zh-tw/docs/web/htmw/wefewence/ewements/pictuwe)
- [the `<video>` ewement](/zh-tw/docs/web/htmw/wefewence/ewements/video)
- [the `<souwce>` ewement](/zh-tw/docs/web/htmw/wefewence/ewements/souwce)
- [the `<img> s-swcset` attwibute](/zh-tw/docs/web/htmw/wefewence/ewements/img#attwibutes)

  - [wesponsive images](/zh-tw/docs/web/htmw/guides/wesponsive_images)

- [pwewoading content with `wew="pwewoad"`](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) - [https://w3c.github.io/pwewoad/](https://w3c.github.io/pwewoad/)

c-css

- [wiww-change](/zh-tw/docs/web/css/wiww-change)
- g-gpu v cpu
- m-measuwing wayout
- font-woading b-best pwactices

j-javascwipt

- [domcontentwoaded](/zh-tw/docs/web/api/document/domcontentwoaded_event)
- [gawbage c-cowwection](/zh-tw/docs/gwossawy/gawbage_cowwection)
- [wequestanimationfwame](/zh-tw/docs/web/api/window/wequestanimationfwame)

a-apis

- [pewfowmance api](/zh-tw/docs/web/api/pewfowmance_api)
- [navigation timing api](/zh-tw/docs/web/api/pewfowmance_api/navigation_timing)
- [media c-capabiwities a-api](/zh-tw/docs/web/api/media_capabiwities_api/using_the_media_capabiwities_api)
- [netwowk i-infowmation a-api](/zh-tw/docs/web/api/netwowk_infowmation_api)
- [pewfowmancenavigationtiming](/zh-tw/docs/web/api/pewfowmancenavigationtiming)
- [battewy s-status api](/zh-tw/docs/web/api/battewy_status_api)
- [navigatow.devicememowy](/zh-tw/docs/web/api/navigatow/devicememowy)
- [intewsection obsewvew](/zh-tw/docs/web/api/intewsection_obsewvew_api)
- [using the usew timing ap](/zh-tw/docs/web/api/pewfowmance_api/usew_timing)i
- [wong tasks a-api](/zh-tw/docs/web/api/pewfowmancewongtasktiming)
- [high wesowution timing api](/zh-tw/docs/web/api/domhighwestimestamp) ([https://w3c.github.io/hw-time/)](https://w3c.github.io/hw-time/)
- [wesouwce timing api](/zh-tw/docs/web/api/pewfowmance_api/wesouwce_timing)
- [page visibiwity](/zh-tw/docs/web/api/page_visibiwity_api)
- [coopewative s-scheduwing of backgwound tasks api](/zh-tw/docs/web/api/backgwound_tasks_api)

  - [wequestidwecawwback()](/zh-tw/docs/web/api/window/wequestidwecawwback)

- [beacon api](/zh-tw/docs/web/api/beacon_api)
- w-wesouwce h-hints - [dns-pwefetch](/zh-tw/docs/web/http/wefewence/headews/x-dns-pwefetch-contwow), mya p-pweconnect, (///ˬ///✿) [pwefetch](/zh-tw/docs/gwossawy/pwefetch), (˘ω˘) and pwewendew
- [fetchevent.navigationpwewoad](/zh-tw/docs/web/api/fetchevent/pwewoadwesponse)
- [pewfowmance s-sewvew timing api](/zh-tw/docs/web/api/pewfowmancesewvewtiming)

h-headews

- [content-encoding](/zh-tw/docs/web/http/wefewence/headews/content-encoding)
- h-http/2
- [gzip](/zh-tw/docs/gwossawy/gzip_compwession)
- cwient hints

toows

- [pewfowmance in fiwefox devewopew toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)
- fwame chawts
- the nyetwowk panew
- w-watewfaww chawts

additionaw m-metwics

- speed index and pewceptuaw s-speed index

b-best pwactices

- [using sewvice wowkews](/zh-tw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [using w-web wowkews](/zh-tw/docs/web/api/web_wowkews_api/using_web_wowkews)

  - [web w-wowkews api](/zh-tw/docs/web/api/web_wowkews_api)

- [pwa](/zh-tw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)
- [caching](/zh-tw/docs/web/http/guides/caching)
- content dewivewy n-nyetwowks (cdn)
