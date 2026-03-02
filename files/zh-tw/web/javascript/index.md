---
title: JavaScript
slug: Web/JavaScript
---

**JavaScript**（簡稱 **JS**）是具有一級函數 ({{Glossary("First-class Function", "First-class functions")}}) 的輕量級、直譯式或即時編譯（JIT-compiled）的程式語言。它因為用作網頁的腳本語言而大為知名，但也用於[許多非瀏覽器的環境](https://zh.wikipedia.org/wiki/JavaScript#运行时环境)，像是 {{Glossary("Node.js")}}、[Apache CouchDB](https://couchdb.apache.org/)。JavaScript 是一個的[基於原型](/zh-TW/docs/Glossary/Prototype-based_programming)的、多範型的、動態語言，支援物件導向、指令式以及宣告式（如函數式程式設計）風格。

本章節主要說明 JavaScript，不涉及網頁特有項目或主機環境。有關網頁特有的 {{Glossary("API","APIs")}} ，請參考 [Web API](/zh-TW/docs/Web/API) 和 [DOM](/zh-TW/docs/Glossary/DOM)。

JavaScript 所採用的標準是 [ECMAScript Language Specification](https://tc39.es/ecma262/)（ECMA-262），自 2012 年起，所有[現代的瀏覽器](http://kangax.github.io/compat-table/es5/)均已全面支援 ECMAScript 5.1。較老舊的瀏覽器最少也會支援 ECMAScript 3。[ECMA International](https://ecma-international.org/) 於 2015 年 6 月 17 日發布第六版的 ECMAScript，其正式名稱是 ECMAScript 2015，原先被稱作 ECMAScript 6 或 ES6。從那時起， ECMAScript 標準的發布週期是一年，本文件參考了最新的草稿版本，也就是目前的 [ECMAScript 2017](https://tc39.es/ecma262/)。

別搞混了 JavaScript 和 [Java 程式語言](https://zh.wikipedia.org/wiki/Java)。雖然「Java」和「JavaScript」都是 Oracle 公司在美國和其他國家的商標或註冊商標，但兩個語言有著非常不同的語法、語意和用途。

## 教學

透過指南和教學來學習編寫 JavaScript。

### 給完全新手

如果你想學習 JavaScript 但過去沒有 JavaScript 或程式設計經驗，請前往 [JavaScript-動態的用戶端指令](/zh-TW/docs/Learn_web_development/Core/Scripting)。該處完整單元如下：

- [JavaScript 入門](/zh-TW/docs/Learn_web_development/Core/Scripting)
  - : 說明一些基本問題像是「什麼是 JavaScript？」、「它看來像什麼？」、「它能做什麼？」，也討論 JavaScript 的主要特色，例如變數、字串、數值以及陣列。
- [JavaScript 組成元素](/zh-TW/docs/Learn_web_development/Core/Scripting)
  - : 繼續我們對 JavaScript 主要基本特色的說明，焦點轉向經常碰到的程式碼區塊類型，像是條件式陳述、迴圈、函數以及事件。
- [介紹 JavaScript 物件](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : 如果你想加深對 JavaScript 語言的認識並撰寫更有效率的程式，理解 JavaScript 的物件導向特質是件重要的事。

### JavaScript 指南

- [JavaScript 指南](/zh-TW/docs/Web/JavaScript/Guide)
  - : 更為詳細的 JavaScript 語言指南，供過去有 JavaScript 或其他語言的程式設計經驗的人看。

### 中階

- [客戶端 web API](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : 在為網站或應用程序編寫客戶端 JavaScript 時，你將很快遇到應用程式介面（API）。 API 是應用程式介面，用於操作運行站點的瀏覽器和操作系統的不同方面，或操縱來自其他網站或服務的資料。 在本單元中，我們將探討 API 是什麼，以及如何使用你在開發工作中經常遇到的一些最常見的 API。
- [重新介紹 JavaScript](/zh-TW/docs/Web/JavaScript/Guide/Language_overview)
  - : 為了那些*以為*他們懂 JavaScript 的人寫的簡介。
- [JavaScript 資料結構](/zh-TW/docs/Web/JavaScript/Guide/Data_structures)
  - : 簡介在 JavaScript 可用的資料結構。
- [相等值比較和相等度](/zh-TW/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript 提供了三種不同的數值比較方式：嚴謹的相等用 `===`，寬鬆的相等用 `==，`以及 {{jsxref("Global_Objects/Object/is", "Object.is()")}} 方法。
- [閉包（Closure)](/zh-TW/docs/Web/JavaScript/Guide/Closures)
  - : 閉包（Closure）是函式以及該宣告函式所包含的作用域環境（lexical environment）的組合。

### 進階

- [繼承與原型鍊](/zh-TW/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : 對於原型繼承的常見的迷思和誤解。
- [嚴謹模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)
  - : 嚴謹模式會禁止你使用未初始化過的變數。這樣的限制源自於 ECMAScript 5 的規範，為了提高效率和簡化偵錯。
- [JavaScript 型別陣列](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript 類型陣列提供一個存取二進制資料的機制。
- [記憶體管理](/zh-TW/docs/Web/JavaScript/Guide/Memory_management)
  - : JavaScript 的記憶體生命週期和垃圾回收機制。
- [併行模組和事件循環](/zh-TW/docs/Web/JavaScript/Reference/Execution_model)
  - : JavaScript 具有基於「事件循環」的併行模組。

## 參考

瀏覽完整的 [JavaScript 參考文件](/zh-TW/docs/Web/JavaScript/Reference)。

- [標準內建物件](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects)
  - : 瞭解標準內建物件： {{jsxref("Array")}}、 {{jsxref("Boolean")}}、 {{jsxref("Date")}}、 {{jsxref("Error")}}、 {{jsxref("Function")}}、 {{jsxref("JSON")}}、 {{jsxref("Math")}}、 {{jsxref("Number")}}、 {{jsxref("Object")}}、 {{jsxref("RegExp")}}、 {{jsxref("String")}}、 {{jsxref("Map")}}、 {{jsxref("Set")}}、 {{jsxref("WeakMap")}}、 {{jsxref("WeakSet")}} 等等。
- [表式法與運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators)
  - : 瞭解更多 JavaScript 運算子的行為：{{jsxref("Operators/instanceof", "instanceof")}}、 {{jsxref("Operators/typeof", "typeof")}}、 {{jsxref("Operators/new", "new")}}、 {{jsxref("Operators/this", "this")}}、[運算子優先序](/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_precedence)等等。
- [敘述和宣告](/zh-TW/docs/Web/JavaScript/Reference/Statements)
  - : 瞭解 {{jsxref("Statements/do...while", "do-while")}}、{{jsxref("Statements/for...in", "for-in")}}、 {{jsxref("Statements/for...of", "for-of")}}、 {{jsxref("Statements/try...catch", "try-catch")}}、{{jsxref("Statements/let", "let")}}、 {{jsxref("Statements/var", "var")}}、 {{jsxref("Statements/const", "const")}}、 {{jsxref("Statements/if...else", "if-else")}}、 {{jsxref("Statements/switch", "switch")}} 和其他 JavaScript 敘述和關鍵字的運作方式。
- [函數](/zh-TW/docs/Web/JavaScript/Reference/Functions)
  - : 瞭解如何運用函數來開發你的應用程式。

## 工具與資源

有用的工具和資源幫助你更好的撰寫及除錯 **JavaScript** 程式碼。

- [Firefox 開發工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [網頁主控台 (Web Console)](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)、[JavaScript 效能分析器(JavaScript Profiler)](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)、[除錯器 (Debugger)](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) 等等。
- [JavaScript Shell](/zh-TW/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#shell)
  - : JavaScript Shell 讓你更快的測試片段的 JavaScript。
- [TogetherJS](https://togetherjs.com/)Paste
  - : 合作更簡單了。藉著在你的網站增加 TogetherJS，你的用戶們能在網站上互助 in real time！
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow 上有關 JavaScript 的問題。
- [JSFiddle](https://jsfiddle.net/)
  - : 編輯 JavaScript、CSS、HTML 並取得及時結果。可以使用外部資源和與在線上與你的夥伴協作。
