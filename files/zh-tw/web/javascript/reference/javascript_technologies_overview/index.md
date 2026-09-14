---
title: JavaScript 技術概觀
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
---

## 簡介

在網頁中，HTML 存放網頁的內容與格式，CSS 註記內容的呈現樣式；而 JavaScript 則用來產生豐富的效果或網頁應用程式。然而，在網頁瀏覽器中通稱的「JavaScript」是由眾多截然不同的要素所構成。其中之一是核心語言（ECMAScript），另一個則是 DOM（文件物件模型，Document Object Model）。

## JavaScript 的核心語言（ECMAScript）

JavaScript 的核心語言是由 ECMA TC-39 委員會統一標準，並且命名為 [ECMAScript](/zh-TW/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)。隨著最新版本的規格 [ECMAScript 5](http://wiki.ecmascript.org/lib/exe/fetch.php?id=start&cache=cache&media=resources:tc39-2010-062-rev5p.pdf) 在 2011 年 3 月推出，大部分最新的網頁瀏覽器實作了 ECMAScript 3 與部分的 ECMAScript 5。

### ECMAScript 包含了什麼？

[ECMAScript](/zh-TW/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) 主要定義了以下的內容：

- 語言的語法（解析規則，關鍵字，流程控制，物件的初始化… ）
- 錯誤處理機制 （throw、 try/catch、 允許自訂錯誤型別）
- 型態（布林代數、數字、字串、函數、物件…）
- 全域物件。在瀏覽器環境中，此物件即為 window 物件。許多函數皆包含在此物件下（parseInt, parseFloat, decodeURI, encodeURI…）
- 一種基於原型（Prototyping）的繼承機制
- 內建的物件與函數 （JSON、Math、Array.prototype 方法、物件自識方法…）
- 嚴格模式（Strict mode）

### 瀏覽器支援

根據以前的經驗，ECMAScript 的功能都有良好且互通的支援。截至 2011 年 6 月，ECMAScript 5 的支援在不同瀏覽器實作之間存在差異。[有些文件](http://kangax.github.com/es5-compat-table/)整理了各瀏覽器對 ECMAScript 5 的支援情形。

## DOM（文件物件模型）

### WebID

[WebIDL 規格書](https://webidl.spec.whatwg.org/) 是 DOM 技術與 ECMAScript 之間相互黏合的基礎。

### DOM 核心

W3C 統一規範了文件物件模型的核心部分。它定義了無關語言而將 HTML 與 XML 文件抽象化為物件的介面，以及對抽象化物件進行處理的機制。在 DOM 的定義中包含：

- [DOM core](https://dom.spec.whatwg.org/) 中的文件結構、樹狀模型，DOM 事件結構：Node, Element, DocumentFragment, Document, DOMImplementation, Event, EventTarget, …
- [DOM events](https://w3c.github.io/uievents/) 中對 DOM 事件結構（DOM Event Architecture）和特定事件的廣義定義。
- 其他如 [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) 和 [DOM Range](https://html5.org/specs/dom-range.html)。

以 ECMAScript 的觀點來看，DOM 規範所定義的物件被稱為宿主物件（Host objects） 。

### HTML DOM

網頁標記語言 [HTML](https://html.spec.whatwg.org/multipage/) 是依據 DOM 來規格化。在 DOM 核心中，定義了虛擬概念的分層，而 HTML 也定義了元素的意義。 HTML DOM 包含了 HTML 元素的 `className` 屬性與諸如 {{ domxref("document.body") }} 的 API。

HTML 的規格書也定義了在文件上的一些限制；例如，他要求所有 `ul` 元素（代表無順序編號的清單）的子元素必須是 `li 元素（代表清單`中的項目）。而未在標準中定義的元素和屬性通常在規格中被禁用。

## 其他重要的 API

- setTimeout 和 setInterval 函數首次納入 HTML 標準中的 [Window](https://html.spec.whatwg.org/multipage/nav-history-apis.html#window) 介面
- [XMLHttpRequest](https://xhr.spec.whatwg.org/)：允許傳送非同步 HTTP 請求的 API。
- [CSS Object Model](https://drafts.csswg.org/cssom/)：CSSOM 用來將 CSS 的規則轉換為物件。
- [WebWorkers](https://html.spec.whatwg.org/multipage/workers.html)：允許平行計算的 API。
- [WebSockets](https://html.spec.whatwg.org/multipage/comms.html#network)：允許低階雙向溝通的 API。
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage/canvas.html#2dcontext)：canvas 元素的繪圖 API。

## Shell

A JavaScript shell allows you to quickly test snippets of JavaScript code without having to reload a web page. They are extremely useful for developing and debugging code.

### 獨立的 JavaScript shell

下列的 JavaScript shell 都是獨立的環境，就像 perl 或是 python 一樣。

- [Node.js](https://nodejs.org/) - Node.js 是一個可以快速建置，可擴充的網路應用程式
- [GraalJS](https://www.graalvm.org/) - A high performance implementation of the JavaScript programming language. Built on the GraalVM by Oracle Labs.
- [ShellJS](https://github.com/shelljs/shelljs) - Node.js 裡可攜式的 Unix shell 命令

## 基於瀏覽器的 JavaScript shell

下列 JavaScript shell 需要 Mozilla 才能運作

- [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/) - Firefox 的開發者工具，同樣包函主控台
- [Babel REPL](https://babeljs.io/repl) - 以瀏覽器為基準的 [REPL](https://en.wikipedia.org/wiki/REPL)，主要用來實驗未來的 JavaScript
- [TypeScript playground](https://www.typescriptlang.org/play/) — A browser-based playground for experimenting both new JavaScript features (via the tsc compiler) and TypeScript syntax.

## 瀏覽器支援

每個網頁開發者都曾經體會過[一團混亂的 DOM 支援狀況](https://johnresig.com/blog/the-dom-is-a-mess/)。某些功能上不同瀏覽器的支援可能差異很大，因為過去重要的 DOM 功能都沒有明確的規範，進而使不同網頁瀏覽器對相同的使用情境實踐了互不相容的功能（像是 Internet Explorer 的事件模型）。最近（截至 2011 年 6 月），由 W3C 與（特別是）WHATWG 對舊功能重新進行詳盡的定義以提升互通性成為了趨勢 。為了跟進這個趨勢，許多網頁瀏覽器也根據這些新規格改進它們的實作。

雖然並未完全可靠，使用 JavaScript 函式庫是解決跨瀏覽器相容問題的最普遍方式。 這些函式庫將 DOM 的功能抽象化，確保其 API 在不同的瀏覽器中能以相似的方式運作。廣為被使用的框架包括 [jQuery](https://jquery.com/)、[prototype](http://prototypejs.org/) 和 [YUI](https://clarle.github.io/yui3/)。
