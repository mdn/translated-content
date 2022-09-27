---
title: About JavaScript
slug: Web/JavaScript/About_JavaScript
---

{{JsSidebar}}

## 什麼是 JavaScript?

JavaScript® 是被用在上百萬的網頁和伺服器應用程式的一種網景開發物件腳本語言。Netscape's JavaScript 是 ECMA-262 Edition 3 ([ECMAScript](/zh-TW/docs/JavaScript/Language_Resources))的基礎標準腳本語言，兩者之間從公佈的標準只有輕微的差異。

相對於常見的誤解，JavaScript 不是「解釋型的 Java」。簡言之，JavaScript 是一種動態的腳本語言，支持基於原型的物件結構。基本語法是故意類似 Java 和 C + + 來減少需要學習語言的新概念。語言結構，如 if 語句，for 和 while 迴圈，和 switch，並 try ... catch 塊的功能在這些語言中的相同（或接近）。

JavaScript 可以作為一個程序和一個物件導向的語言。創建物件的 JavaScript 編程，通過附加的方法和屬性，否則空物件在運行時，而不是編譯語言如 C + + 和 Java 中常見語法類定義。一旦已建成一個物件，它可以被用來作為創建類似的物件的藍圖。

JavaScript 的動態能力包括運行時物件的結構，可變參數列表，函數變量，動態腳本創建（透過 eval），物件自我檢查（透過 `for ... in`），原始碼恢復（ JavaScript 程序可以將函式反編譯回原始碼）

內在的對象是數字、字符串、布林、日期、正規表示法、數學。

更深入討論 JavaScript 編程遵循下面的 JavaScript 資源

## JavaScript 的應用有哪些？

mozilla.org 主持兩個 JavaScript 應用。有史以來第一次創建 JavaScript 是在 Netscape 的布倫丹·艾希，並已被更新（在 JavaScript1.5），以符合 ECMA-262 第 5 版。這台發動機，代號為 SpiderMonkey 的，在 C 中實行。Rhino 引擎，主要由 Norris Boyd（也在網本）創建是在 Java 中的 JavaScript 實行。像 SpiderMonkey 一樣，Rhino 是 ECMA-262 第 3 版標準。

SpiderMonkey 的 JavaScript 引擎不時被添加到一些優化，如的 TraceMonkey（火狐 3.5），JägerMonkey（火狐 4）和 IonMonkey 的。

除了上述的實現，也有其他如流行的 JavaScript 引擎：-

- 谷歌的 V8 引擎，這是谷歌 Chrome 瀏覽器使用的。
- JavaScriptCore 被用在一些 WebKit 瀏覽器中，如蘋果的 Safari
- carakan 在 Opera。

在 Internet Explorer 中使用的 Chakra 引擎，在技術上是一個 JScript 引擎，而不是一個 JavaScript 引擎。

每個 mozilla.org 的 JavaScript 引擎，暴露了一個公共 API 應用程序可以調用的 JavaScript 支持。到目前為止，最常見的宿主環境為 JavaScript 是網路瀏覽器。 網路瀏覽器通常使用公共 API 來創建「宿主對象」負責反映 DOM 到 JavaScript。

另一個常見的應用是為 JavaScript（Web）伺服器端腳本語言。一個 JavaScript 的 Web 服務器會暴露主機對象代表一個 HTTP 請求和響應物件，由 JavaScript 動態生成網頁的程序操作。

對於在自己的應用程序中嵌入 JavaScript 的詳細信息，下面的 SpiderMonkey 或 Rhino 鏈接下面，或訪問我們的上 netscape.public.mozilla.jseng 新

## JavaScript 資源

- [SpiderMonkey](/zh-TW/docs/SpiderMonkey)
  - : 嵌入到 JavaScript 的具體信息在 C 引擎
- [Rhino](/zh-TW/docs/Rhino)
  - : 在 Java 編寫的 JavaScript 執行的具體信息。 (aka Rhino).
- [Language resources](/zh-TW/docs/JavaScript/Language_Resources)
  - : 指針出版的 JavaScript 標準，LiveConnect 文檔和 JavaScript 2.0 的工作。
- [Tamarin Project](/zh-TW/docs/Tamarin)
  - : 信息上的高性能，開放原始碼 JavaScript 2.0 的虛擬機。
- [A re-introduction to JavaScript](/zh-TW/docs/JavaScript/A_re-introduction_to_JavaScript)
  - : 核心 JavaScript1.5 指南和核心 JavaScript1.5 參考
- [Scripting resources](http://www.mozilla.org/js/scripting/)
  - : JavaScript 腳本資源的指針，包括推薦閱讀，在線參考和教程和示例代碼
- [Projects page](http://www.mozilla.org/js/projects.html)
  - : 使用開源 JavaScript 引擎列出的其他項目。
- [Test library page](http://www.mozilla.org/js/tests/library.html)
  - : 核心 JavaScript 測試套件的信息。
- [mozilla.dev.tech.js-engine](http://groups.google.com/group/mozilla.dev.tech.js-engine)
  - : 新聞組討論有關 JavaScript 引擎。
- [comp.lang.javascript](http://groups.google.com/group/comp.lang.javascript/topics/)
  - : 有關 ECMAScript 的，大多（雖然不一定）的一般性討論的新聞組，因為它涉及到瀏覽器。

JavaScript 是在美國和其他國家的 Oracle 公司的商標或註冊商標。
