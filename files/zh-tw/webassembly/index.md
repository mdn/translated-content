---
title: WebAssembly
slug: WebAssembly
tags:
  - Landing
  - WebAssembly
  - wasm
translation_of: WebAssembly
---
{{WebAssemblySidebar}}

WebAssembly 是一種新的低階程式語言，可在今日的網頁瀏覽器中被執行 —— 它是低階的類組合語言，具有嚴謹的二進位格式，能以接近原生應用程式的效能執行，並提供如 C/C++ 等語言一個構建目標，使它們能在 Web 上被執行。他也被設計為可與 JavaScript 共存，允許兩者一同工作。

## 簡而言之

WebAssembly 對於網路平台而言具有極大的意義 —— 它提供了一種方式，使得那些以各種語言編寫的程式都能以接近原生的速度於 Web 環境中執行，在這條件下，先前無法以此種方式運作的用戶端軟體皆能在 Web 中被執行。

WebAssembly 被設計來與 JavaScript 協同工作 —— 藉由 WebAssembly 的 JavaScript API，你可以把 WebAssembly 模組載入至一個 JavaScript 應用程式，並在兩者間共享功能。這允許你在同一應用程式內彈性地發揮 WebAssembly 的高效能威力同時兼顧 JavaScript 的表達力與高靈活性，即便你可能不知道如何編寫 WebAssembly 程式碼。

而且更棒的是，這是由 [W3C WebAssembly Working Group](https://www.w3.org/wasm/) 和 [Community Group](https://www.w3.org/community/webassembly/) 開發的一項網路標準，並也得到來自各大主要瀏覽器廠商的積極參與。

## 指南

- [WebAssembly 概念](/zh-TW/docs/WebAssembly/Concepts)
  - : 藉由閱讀 WebAssembly 後的高階概念開始 —— 也就是說，它為何是如此有用，是如何相容網路平台（及其他），和如何使用它。
- [將 C/C++ 模組編譯為 WebAssembly](/zh-TW/docs/WebAssembly/C_to_wasm)
  - : 當你使用 C/C++ 編寫程式後，你可以使用諸如 [Emscripten](https://emscripten.org/) 等工具將其編譯為 .wasm 文件。讓我們看看它是如何實作的。
- [從現有的 C 模組編譯為 WebAssembly](/zh-TW/docs/WebAssembly/existing_C_to_wasm)
  - : WebAssembly 核心的使用案例是期望能讓開發者在 Web 環境中使用現存 C 的生態環境。
- [將 Rust 程式碼編譯為 WebAssembly](/zh-TW/docs/WebAssembly/Rust_to_wasm)
  - : 你可以將 Rust 編譯為 WebAssembly！本教程將帶您了解將 Rust 項目編譯為 wasm 並在現有的 Web 應用程序中使用它所需的所有知識。
- [載入並運行 WebAssembly 程式碼](/zh-TW/docs/WebAssembly/Loading_and_running)
  - : 本文介紹如何透過把 [Fetch](/zh-TW/docs/Web/API/Fetch_API) 或 [XHR](/zh-TW/docs/Web/API/XMLHttpRequest) API 與 [WebAssembly JavaScript](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) API 結合起來、編譯及實例化 .wasm 文件。
- [使用 WebAssembly 的 JavaScript API](/zh-TW/docs/WebAssembly/Using_the_JavaScript_API)
  - : 當你載入一個 .wasm 模組後，你就用到它。在本文中將向你展示如何透過 WebAssembly 的 JavaScript API 來使用  WebAssembly。
- [導出 WebAssembly 函數](/zh-TW/docs/WebAssembly/Exported_functions)
  - : 被導出的 WebAssembly 函數是用 JavaScript 來表示 WebAssembly 函數的封裝，並允許從 JavaScript 調用 WebAssembly 原始碼。本文將描述他們。
- [了解 WebAssembly 的文件格式](/zh-TW/docs/WebAssembly/Understanding_the_text_format)
  - : 本文介紹了 .wasm 的文件格式。這是在進行偵錯時由瀏覽器開發工具中展現出 .wasm 模組的一種低階文件格式。
- [把 WebAssembly 文件格式轉為 wasm](/zh-TW/docs/WebAssembly/Text_format_to_wasm)
  - : 本文提供一個如何把以 WebAssembly 編寫的模組轉換為二進位的 .wasm 文件格式的指南。

## API 參考

- [WebAssembly control flow](/zh-TW/docs/WebAssembly/Reference/Control_flow)
  - : Reference documentation for the set of WebAssembly control-flow operators.
- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : This object acts as the namespace for all WebAssembly related functionality.
- {{jsxref("Global_objects/WebAssembly/Global", "WebAssembly.Global()")}}
  - : A `WebAssembly.Global` object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more {{jsxref("WebAssembly.Module")}} instances. This allows dynamic linking of multiple modules.
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : A `WebAssembly.Module` object contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently [shared with Workers](/zh-TW/docs/Web/API/Worker/postMessage), and instantiated multiple times.
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance()")}}
  - : A `WebAssembly.Instance` object is a stateful, executable instance of a `Module`.  `Instance` objects contain all the [Exported WebAssembly functions](/zh-TW/docs/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.
- {{jsxref("Global_objects/WebAssembly/instantiateStreaming", "WebAssembly.instantiateStreaming()")}}
  - : The `WebAssembly.instantiateStreaming()` function is the primary API for compiling and instantiating WebAssembly code, returning both a `Module` and its first `Instance`.
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : A `WebAssembly.Memory` object is a resizable {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} that holds the raw bytes of memory accessed by an `Instance`.
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : A `WebAssembly.Table` object is a resizable typed array of opaque values, like function references, that are accessed by an `Instance`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Creates a new WebAssembly `CompileError` object.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Creates a new WebAssembly `LinkError` object.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Creates a new WebAssembly `RuntimeError` object.

## 範本

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- 參考我們的 [webassembly-範例](https://github.com/mdn/webassembly-examples/) 庫來獲取更多例子。

## 規範

| Specification                            | Status                               | Comment                                         |
| ---------------------------------------- | ------------------------------------ | ----------------------------------------------- |
| {{SpecName('WebAssembly JS')}} | {{Spec2('WebAssembly JS')}} | Initial draft definition of the JavaScript API. |

## 瀏覽器相容性

{{Compat("javascript.builtins.WebAssembly")}}

## 參見

- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/emscripting-a-c-library/)
