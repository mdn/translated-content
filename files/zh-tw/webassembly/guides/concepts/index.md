---
title: WebAssembly 的概念
slug: WebAssembly/Guides/Concepts
---

這篇文章解釋了這些概念背後 WebAssembly 是如何運作的，以及 WebAssembly 的目標、它能解決的問題和它是如何在瀏覽器 JavaScript 引擎中運作的。

## WebAssembly 是什麽

WebAssembly 是一種新形態的程式碼，它可以被執行在現代瀏覽器下，並提供一些新功能以及主要獲得效能上的提升。這主要并不是由人類直接撰寫，而是設計來給一些高效的語言編譯的目標檔獲得，如 C、C++、Rust 等等。

這在 Web 平臺上具備很重大的意義——它提供了一種方式來在近原生的速度下執行多種語言撰寫的程式碼，這是以前的使用者端運行的程式是無法達成的。

更甚，你甚至不必知道如何創建 WebAssembly 就可以享受它的優勢。WebAssembly 模組可以被引入到一個 Web 或 Node.js 應用程式，提供 WebAssembly 的函式供 JavaScript 使用。JavaScript 框架仍然可以在使用 WebAssembly 所提供的巨大效能優勢以及新特性的情況下為 Web 開發者良好運作。

## WebAssembly 的目標

WebAssembly 是在 [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) 以一個公開的標準下被創造的，有著下列目標：

- 快，有效率，以及可移植性。WebAssembly 程式碼可以以近原生速度跨平臺運行，藉由[硬體共同具有的能力](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution)的優勢。
- 具備可讀性以及可除錯性，WebAssembly 雖然是一種低階的組合語言，但他仍然有人類可讀的文本格式（最終規範仍未決定），這使得程式碼能被人撰寫、閲讀以及除錯。
- 具備安全性。WebAssembly 是被規範跑在一個安全的沙盒執行換進。像是其他的 Web 程式碼，他會被强制要求遵守瀏覽器的同源政策與權限政策。
- 不會破壞 Web 既有架構。WebAssembly 是設計來與其他 Web 技術良好共存的，并且支援以前。

> [!NOTE]
> WebAssembly 也有除去 Web 與 JavaScript 的用途（參見 [Non-web embedding](https://webassembly.org/docs/non-web/)）。

## WebAssembly 如何融入既有 Web 平臺？

Web 平臺可以被想成兩個部分：

- 一個虛擬機（Virtual Machine，VM），運行著 Web 應用的程式碼，例如 JavaScript 程式碼，它可以大幅增强你的應用程式。
- 一組 [Web API](/zh-TW/docs/Web/API) 讓 Web 可以呼叫來控制瀏覽器或設備的功能（[DOM](/zh-TW/docs/Web/API/Document_Object_Model)、[CSSOM](/zh-TW/docs/Web/API/CSS_Object_Model)、[WebGL](/zh-TW/docs/Web/API/WebGL_API)、[IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API)、[Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API) 等）。

歷史上，那台虛擬機曾只被允許執行 JavaScript，這對我們而言已經可以良好運作并且能解決現在我們在 Web 上會遇到的大多數問題，但當使用 JavaScript 來進行高計算應用，例如 3D 游戲、物理引擎、電腦視覺、圖像編輯以及許多其他要求要在原生效能環境運行之領域應用，我們就會遇到效能問題。（參見 [WebAssembly 使用場景](https://webassembly.org/docs/use-cases/)以獲得更多想法。）

除此之外，下載、解析、編譯巨大的 JavaScript 應用程式的成本可能會被禁止。移動裝置或是一些資源受限的平臺可能會進一步的放大這個效能瓶頸的後果。

WebAssembly 是一種有別於 JavaScript 的語言，但它并不是一種替代品。相對的，他是設計來補足 JavaScript 的，它允許 Web 開發者可以享盡兩種語言的優勢：

- JavaScript 是一種高階語言，靈活且足夠强大，能撰寫 Web 應用程式。他有很多郵件，可以動態型別，不需要編譯步驟，而且有著巨大的生態提供許多强大的框架、函式庫與其他工具。
- WebAssembly 是一種低階語言，如組合語言一般，有著緊凑的二進制格式，有著近原生的執行效能且提供讓許多低階記憶體管理模型的語言來編譯得到目標檔，使之可以運行在 Web 上。（注意到 WebAssembly 有 [高階目標（high-level goal）](https://webassembly.org/docs/high-level-goals/)，來支援具備記憶體回收模型之語言。）

隨著 WebAssembly 出現在瀏覽器，我們稍早提及的虛擬機現在要加載並運行兩種程式碼——Javascript 與 WebAssembly。

按照需求，兩種不同形態的語言要可以彼此互相呼叫。[WebAssembly JavaScript API](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface) 用 JavaScript 函式打包了輸出的 WebAssembly 程式碼，讓他可以被正常的呼叫。且 WebAssembly 可以被載入與同步的呼叫 JavaScript 函式。事實上，一個基本的 WebAssembly 單元被稱之爲模組，然後 WebAssembly 模組和 ES 模組在很多情況下是對稱的。

### WebAssembly 關鍵觀念

要理解 WebAssembly 是如何在瀏覽器運作的，有很多重要觀念需要理解。所有觀念都可以一對一的對應到 [WebAssembly JavaScript API](/zh-TW/docs/WebAssembly/Reference/JavaScript_interface)。

- **模組**（Module）：代表一個已經被瀏覽器編譯成可執行機器碼的 WebAssembly 二進制檔案。模組是無狀態的，因此可以像 `Blob` 一樣，透過 `postMessage()` 方法明確地在視窗和工作線程間共享。一個模組就像 ES 模組一樣宣告輸入和輸出。
- **記憶體**（Memory）：一個可調整大小的 ArrayBuffer，包含 WebAssembly 低層記憶體訪問指令讀寫的線性位元組陣列。
- **表**（Table）：一個可調整大小的參照型態陣列（例如，對函數的參照），這些參照不能以原始位元組的形式儲存在記憶體中（出於安全和可移植性的原因）。
- **實例**（Instance）：一個模組與其運行時使用的所有狀態的組合，包括記憶體、表和一組輸入值。一個實例就像一個已經加載到特定全域環境並具有特定輸入集的 ES 模組。

JavaScript API 提供開發者一個創造模組、記憶體、表與實例的方式。給定一個 WebAssembly 應用程式，JavaScript 程式碼可以同步地正常調用它公開出來的函式。任意的 JavaScript 函式也都可以被 WebAssembly 同步調用，藉由以引入傳遞到 WebAssembly Instance 的那些 JavaScript 函式。

因爲 JavaScript 有 WebAssembly 是如何被下載、編譯、執行的完全控制權，因此 JavaScript 開發者應該去思考說 WebAssembly 是否就只是一個 JavaScript 的特色，使之能有效率的生成高效能函式。

在未來，WebAssembly 模組會[能像是 ES 模組一樣被引入](https://github.com/WebAssembly/proposals/issues/12)。（使用 `<script type='module'>`），這意味著 JavaScript 有能力去獲得、編譯並引入一個 WebAssembly 就好像是 ES 模組一樣。

## 我該如何在我的應用程式中使用 WebAssembly？

前面我們談論了一些很原始的方法把 WebAssembly 加入 Web 平臺：一個二進制格式的程式碼，與加載和運行二進制程式碼的 API。現在我們來談論實務上該如何去做。

WebAssembly 生態還處於萌芽階段，毫無疑問越來越多的工具會陸續推出。現在有四種主要的切入點：

- 使用 [Emscripten](https://emscripten.org/) 來移植 C、C++ 程式碼。
- 直接從組合語言階段來撰寫或生成 WebAssembly 程式碼。
- 撰寫 Rust 應用程式并且選擇 WebAssembly 作爲輸出目標。
- 使用 [AssemblyScript](https://www.assemblyscript.org/)，它看起來與 TypeScript 類似，并且可以生成 WebAssembly 程式碼。

讓我們來談談以下選擇。

### 從 C、C++ 移植

衆多方法中的兩種方式來創建 Wasm 程式碼是使用線上的 Wasm 組譯器，或是 [Emscripten](https://emscripten.org/)。這裏有相當多的 Wasm 組譯器選擇：

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

有很優良的資源提供給那些想開始，但對 Emscripten 不熟悉的人。

Emscripten 工具可以將任何 C、C++ 原始碼編譯成一個 Wasm 模組，加上一些必要的 JavaScript 的膠水程式碼來加載並執行 Wasm 模組，以及加入一個 HTML 文件來輸出結果。

![流程圖：Emscripten 編譯 C/C++ 原始碼成一個 Wasm 模組，以及一個 HTML 文件和 JavaScript 膠水程式碼](emscripten-diagram.png)

簡而言之，運作流程如下：

1. Emscripten 首先將 C/C++ 程式碼輸入給 clang+LLVM，一個成熟的開源 C、C++ 編譯工具鏈。舉個常出現的例子，它被封裝成 OSX 中的 XCode 的一部分。
2. Emscripten 將 clang+LLVM 編譯出來的結果轉換成 Wasm 二進制。
3. 僅憑它自己，WebAssembly 沒有辦法直接訪問 DOM，它僅能呼叫 JavaScript，傳入整數和浮點數的原始資料形態。因此，要訪問任何的 Web API，它必須去呼叫 JavaScript，這會產生一個 Web API 呼叫。Emscripten 因此創造一個 HTML 文件與 JavaScript 膠水程式碼來達成這件事。

> [!NOTE]
> 未來有計劃[讓 WebAssembly 直接呼叫 WebAPI](https://github.com/WebAssembly/gc/blob/master/README.md)。

這個 JavaScript 膠水程式碼可能并不像你想像的那麽簡單。Emscripten 首先需要去實作熱門的 C、C++ 函式庫像是 [SDL](https://zh.wikipedia.org/wiki/SDL)、[OpenGL](https://zh.wikipedia.org/wiki/OpenGL)、[OpenAL](https://zh.wikipedia.org/wiki/OpenAL)，以及一部分的 [POSIX](https://zh.wikipedia.org/wiki/POSIX)。這些函式庫被以 Web API 的形式實作，且因此每個都需要一些 JavaScript 膠水程式碼來連接 WebAssembly 與底層的 Web API。

所以膠水程式碼的一部分就是在分別用 C、C++ 實作這些函式庫的功能，同時也包含了去呼叫之前提及的來獲取、加載并執行的 WebAssembly JavaScript API 的邏輯。

被生成的 HTML 文件會加載 JavaScript 膠水文件並將標準輸出寫入到一個 {{htmlelement("textarea")}}。如果應用程式是 OpenGL，那它也會包含一個 {{htmlelement("canvas")}} 元素來顯示畫面。修改 Emscripten 來修改輸出並將它改造成一個你需要的 Web 應用程式是很簡單的一件事。

你可以找到完整的 Emscripten 文件在 [emscripten.org](https://emscripten.org/)，以及一個完整的指南來實作工具鏈以及編譯你自己的 C、C++ 應用程式成 Wasm，參見 [Compiling from C/C++ to WebAssembly](/zh-TW/docs/WebAssembly/Guides/C_to_Wasm)。

### 直接撰寫 WebAssembly

你想要創造你自己的編譯器，或是你自己的工具，又或是一個在 runtime 生成 WebAssembly 的 JavaScript 函式庫嗎？

與實體的組合語言有一樣的潮流，WebAssembly 二進制格式具有文本表達式，兩者具備一對一的對應關係。你可以親手撰寫或生成這個格式并且可以藉由多種工具轉換成二進制格式，參見 [WebAssembly text-to-binary tools](https://webassembly.org/getting-started/advanced-tools/)。

來看一篇簡單的文章來説明你要如何[將 WebAssembly 文本格式轉換成 Wasm](/zh-TW/docs/WebAssembly/Guides/Text_format_to_Wasm)。

### 撰寫 Rust 指定目標 WebAssembly

也有可能可以撰寫 Rust 的程式碼然後編譯成 WebAssembly，感謝 Rust Assembly 的工作團隊不懈的努力，你可以開始安裝必要工具鏈，編譯一個範例 Rust 程式成 WebAssembly 的 npm 包，然後在範例 Web 應用中使用它，參見 [Compiling from Rust to WebAssembly](/zh-TW/docs/WebAssembly/Guides/Rust_to_Wasm)。

### 使用 AssemblyScript

對於那些想使用 WebAssembly 卻沒有學習 C、C++ 語言細節需求的 Web 開發者，想留在一個如 TypeScript 一般熟悉的舒適圈，AssemblyScript 會是你最棒的選擇。AssemblyScript 編譯嚴格型別的 TypeScript 成 WebAssembly，允許 Web 開發者繼續使用他們所熟悉的 TypeScript 兼容的工具，如 Prettier、ESLint、VS Code IntelliSense 等。你可以看文件 <https://www.assemblyscript.org/>。

## 總結

這篇文章解釋了 WebAssembly 究竟爲何物、它爲何有用，它如何融入 Web，以及你能如何使用它。

## 參見

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [Loading and running WebAssembly code](/zh-TW/docs/WebAssembly/Guides/Loading_and_running)——一探究竟如何將 WebAssembly Code 載入 Web
- [Using the WebAssembly JavaScript API](/zh-TW/docs/WebAssembly/Guides/Using_the_JavaScript_API)——搞清楚如何使用其他 WebAssembly JavaScript API 的特性
