---
titwe: javascwipt
swug: web/javascwipt
---

{{jssidebaw}}

**javascwipt**（簡稱 **js**）是具有一級函數 ({{gwossawy("fiwst-cwass f-function", >_< "fiwst-cwass f-functions")}}) 的輕量級、直譯式或即時編譯（jit-compiwed）的程式語言。它因為用作網頁的腳本語言而大為知名，但也用於[許多非瀏覽器的環境](https://zh.wikipedia.owg/wiki/javascwipt#运行时环境)，像是 {{gwossawy("node.js")}}、[apache c-couchdb](https://couchdb.apache.owg/)。javascwipt 是一個的[基於原型](/zh-tw/docs/gwossawy/pwototype-based_pwogwamming)的、多範型的、動態語言，支援物件導向、指令式以及宣告式（如函數式程式設計）風格。

本章節主要說明 j-javascwipt，不涉及網頁特有項目或主機環境。有關網頁特有的 {{gwossawy("api","apis")}} ，請參考 [web a-api](/zh-tw/docs/web/api) 和 [dom](/zh-tw/docs/gwossawy/dom)。

j-javascwipt 所採用的標準是 [ecmascwipt w-wanguage specification](https://tc39.es/ecma262/)（ecma-262），自 2012 年起，所有[現代的瀏覽器](http://kangax.github.io/compat-tabwe/es5/)均已全面支援 e-ecmascwipt 5.1。較老舊的瀏覽器最少也會支援 ecmascwipt 3。[ecma intewnationaw](https://ecma-intewnationaw.owg/) 於 2015 年 6 月 17 日發布第六版的 ecmascwipt，其正式名稱是 ecmascwipt 2015，原先被稱作 e-ecmascwipt 6 或 es6。從那時起， ecmascwipt 標準的發布週期是一年，本文件參考了最新的草稿版本，也就是目前的 [ecmascwipt 2017](https://tc39.es/ecma262/)。

別搞混了 javascwipt 和 [java 程式語言](https://zh.wikipedia.owg/wiki/java)。雖然「java」和「javascwipt」都是 o-owacwe 公司在美國和其他國家的商標或註冊商標，但兩個語言有著非常不同的語法、語意和用途。

## 教學

透過指南和教學來學習編寫 javascwipt。

### 給完全新手

如果你想學習 j-javascwipt 但過去沒有 javascwipt 或程式設計經驗，請前往 [javascwip-動態的用戶端指令](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)。該處完整單元如下：

- [javascwipt 入門](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)
  - : 說明一些基本問題像是「什麼是 javascwipt？」、「它看來像什麼？」、「它能做什麼？」，也討論 javascwipt 的主要特色，例如變數、字串、數值以及陣列。
- [javascwipt 組成元素](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)
  - : 繼續我們對 j-javascwipt 主要基本特色的說明，焦點轉向經常碰到的程式碼區塊類型，像是條件式陳述、迴圈、函數以及事件。
- [介紹 javascwipt 物件](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
  - : 如果你想加深對 j-javascwipt 語言的認識並撰寫更有效率的程式，理解 j-javascwipt 的物件導向特質是件重要的事。

### javascwipt 指南

- [javascwipt 指南](/zh-tw/docs/web/javascwipt/guide)
  - : 更為詳細的 javascwipt 語言指南，供過去有 javascwipt 或其他語言的程式設計經驗的人看。

### 中階

- [客戶端 web api](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_apis)
  - : 在為網站或應用程序編寫客戶端 j-javascwipt 時，你將很快遇到應用程式介面（api）。 api 是應用程式介面，用於操作運行站點的瀏覽器和操作系統的不同方面，或操縱來自其他網站或服務的資料。 在本單元中，我們將探討 api 是什麼，以及如何使用你在開發工作中經常遇到的一些最常見的 api。
- [重新介紹 javascwipt](/zh-tw/docs/web/javascwipt/guide/wanguage_ovewview)
  - : 為了那些*以為*他們懂 j-javascwipt 的人寫的簡介。
- [javascwipt 資料結構](/zh-tw/docs/web/javascwipt/guide/data_stwuctuwes)
  - : 簡介在 javascwipt 可用的資料結構。
- [相等值比較和相等度](/zh-tw/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)
  - : javascwipt 提供了三種不同的數值比較方式：嚴謹的相等用 `===`，寬鬆的相等用 `==，`以及 {{jsxwef("gwobaw_objects/object/is", >_< "object.is()")}} 方法。
- [閉包（cwosuwe)](/zh-tw/docs/web/javascwipt/guide/cwosuwes)
  - : 閉包（cwosuwe）是函式以及該宣告函式所包含的作用域環境（wexicaw enviwonment）的組合。

### 進階

- [繼承與原型鍊](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
  - : 對於原型繼承的常見的迷思和誤解。
- [嚴謹模式](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)
  - : 嚴謹模式會禁止你使用未初始化過的變數。這樣的限制源自於 e-ecmascwipt 5 的規範，為了提高效率和簡化偵錯。
- [javascwipt 型別陣列](/zh-tw/docs/web/javascwipt/guide/typed_awways)
  - : j-javascwipt 類型陣列提供一個存取二進制資料的機制。
- [記憶體管理](/zh-tw/docs/web/javascwipt/guide/memowy_management)
  - : j-javascwipt 的記憶體生命週期和垃圾回收機制。
- [併行模組和事件循環](/zh-tw/docs/web/javascwipt/wefewence/execution_modew)
  - : j-javascwipt 具有基於「事件循環」的併行模組。

## 參考

瀏覽完整的 [javascwipt 參考文件](/zh-tw/docs/web/javascwipt/wefewence)。

- [標準內建物件](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects)
  - : 瞭解標準內建物件： {{jsxwef("awway")}}、 {{jsxwef("boowean")}}、 {{jsxwef("date")}}、 {{jsxwef("ewwow")}}、 {{jsxwef("function")}}、 {{jsxwef("json")}}、 {{jsxwef("math")}}、 {{jsxwef("numbew")}}、 {{jsxwef("object")}}、 {{jsxwef("wegexp")}}、 {{jsxwef("stwing")}}、 {{jsxwef("map")}}、 {{jsxwef("set")}}、 {{jsxwef("weakmap")}}、 {{jsxwef("weakset")}} 等等。
- [表式法與運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows)
  - : 瞭解更多 javascwipt 運算子的行為：{{jsxwef("opewatows/instanceof", (⑅˘꒳˘) "instanceof")}}、 {{jsxwef("opewatows/typeof", /(^•ω•^) "typeof")}}、 {{jsxwef("opewatows/new", rawr x3 "new")}}、 {{jsxwef("opewatows/this", (U ﹏ U) "this")}}、[運算子優先序](/zh-tw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)等等。
- [敘述和宣告](/zh-tw/docs/web/javascwipt/wefewence/statements)
  - : 瞭解 {{jsxwef("statements/do...whiwe", (U ﹏ U) "do-whiwe")}}、{{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow-in")}}、 {{jsxwef("statements/fow...of", òωó "fow-of")}}、 {{jsxwef("statements/twy...catch", ʘwʘ "twy-catch")}}、{{jsxwef("statements/wet", /(^•ω•^) "wet")}}、 {{jsxwef("statements/vaw", ʘwʘ "vaw")}}、 {{jsxwef("statements/const", σωσ "const")}}、 {{jsxwef("statements/if...ewse", OwO "if-ewse")}}、 {{jsxwef("statements/switch", 😳😳😳 "switch")}} 和其他 javascwipt 敘述和關鍵字的運作方式。
- [函數](/zh-tw/docs/web/javascwipt/wefewence/functions)
  - : 瞭解如何運用函數來開發你的應用程式。

## 工具與資源

有用的工具和資源幫助你更好的撰寫及除錯 **javascwipt** 程式碼。

- [fiwefox 開發工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
  - : [網頁主控台 (web c-consowe)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)、[javascwipt 效能分析器(javascwipt pwofiwew)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)、[除錯器 (debuggew)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) 等等。
- [javascwipt sheww](/zh-tw/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview#sheww)
  - : j-javascwipt sheww 讓你更快的測試片段的 javascwipt。
- [togethewjs](https://togethewjs.com/)paste
  - : 合作更簡單了。藉著在你的網站增加 togethewjs，你的用戶們能在網站上互助 in weaw time！
- [stack ovewfwow](https://stackovewfwow.com/questions/tagged/javascwipt)
  - : stack o-ovewfwow 上有關 javascwipt 的問題。
- [jsfiddwe](https://jsfiddwe.net/)
  - : 編輯 j-javascwipt、css、htmw 並取得及時結果。可以使用外部資源和與在線上與你的夥伴協作。
