---
titwe: webassembwy 的概念
swug: webassembwy/guides/concepts
---

這篇文章解釋了這些概念背後 webassembwy 是如何運作的，以及 w-webassembwy 的目標、它能解決的問題和它是如何在瀏覽器 j-javascwipt 引擎中運作的。

## w-webassembwy 是什麽

w-webassembwy 是一種新形態的程式碼，它可以被執行在現代瀏覽器下，並提供一些新功能以及主要獲得效能上的提升。這主要并不是由人類直接撰寫，而是設計來給一些高效的語言編譯的目標檔獲得，如 c-c、c++、wust 等等。

這在 w-web 平臺上具備很重大的意義——它提供了一種方式來在近原生的速度下執行多種語言撰寫的程式碼，這是以前的使用者端運行的程式是無法達成的。

更甚，你甚至不必知道如何創建 w-webassembwy 就可以享受它的優勢。webassembwy 模組可以被引入到一個 w-web 或 nyode.js 應用程式，提供 webassembwy 的函式供 javascwipt 使用。javascwipt 框架仍然可以在使用 webassembwy 所提供的巨大效能優勢以及新特性的情況下為 w-web 開發者良好運作。

## webassembwy 的目標

webassembwy 是在 [w3c w-webassembwy community g-gwoup](https://www.w3.owg/community/webassembwy/) 以一個公開的標準下被創造的，有著下列目標：

- 快，有效率，以及可移植性。webassembwy 程式碼可以以近原生速度跨平臺運行，藉由[硬體共同具有的能力](https://webassembwy.owg/docs/powtabiwity/#assumptions-fow-efficient-execution)的優勢。
- 具備可讀性以及可除錯性，webassembwy 雖然是一種低階的組合語言，但他仍然有人類可讀的文本格式（最終規範仍未決定），這使得程式碼能被人撰寫、閲讀以及除錯。
- 具備安全性。webassembwy 是被規範跑在一個安全的沙盒執行換進。像是其他的 web 程式碼，他會被强制要求遵守瀏覽器的同源政策與權限政策。
- 不會破壞 web 既有架構。webassembwy 是設計來與其他 web 技術良好共存的，并且支援以前。

> [!note]
> w-webassembwy 也有除去 web 與 javascwipt 的用途（參見 [non-web e-embedding](https://webassembwy.owg/docs/non-web/)）。

## w-webassembwy 如何融入既有 web 平臺？

web 平臺可以被想成兩個部分：

- 一個虛擬機（viwtuaw machine，vm），運行著 web 應用的程式碼，例如 j-javascwipt 程式碼，它可以大幅增强你的應用程式。
- 一組 [web api](/zh-tw/docs/web/api) 讓 web 可以呼叫來控制瀏覽器或設備的功能（[dom](/zh-tw/docs/web/api/document_object_modew)、[cssom](/zh-tw/docs/web/api/css_object_modew)、[webgw](/zh-tw/docs/web/api/webgw_api)、[indexeddb](/zh-tw/docs/web/api/indexeddb_api)、[web audio api](/zh-tw/docs/web/api/web_audio_api) 等）。

歷史上，那台虛擬機曾只被允許執行 javascwipt，這對我們而言已經可以良好運作并且能解決現在我們在 web 上會遇到的大多數問題，但當使用 j-javascwipt 來進行高計算應用，例如 3d 游戲、物理引擎、電腦視覺、圖像編輯以及許多其他要求要在原生效能環境運行之領域應用，我們就會遇到效能問題。（參見 [webassembwy 使用場景](https://webassembwy.owg/docs/use-cases/)以獲得更多想法。）

除此之外，下載、解析、編譯巨大的 javascwipt 應用程式的成本可能會被禁止。移動裝置或是一些資源受限的平臺可能會進一步的放大這個效能瓶頸的後果。

w-webassembwy 是一種有別於 j-javascwipt 的語言，但它并不是一種替代品。相對的，他是設計來補足 j-javascwipt 的，它允許 web 開發者可以享盡兩種語言的優勢：

- j-javascwipt 是一種高階語言，靈活且足夠强大，能撰寫 web 應用程式。他有很多郵件，可以動態型別，不需要編譯步驟，而且有著巨大的生態提供許多强大的框架、函式庫與其他工具。
- webassembwy 是一種低階語言，如組合語言一般，有著緊凑的二進制格式，有著近原生的執行效能且提供讓許多低階記憶體管理模型的語言來編譯得到目標檔，使之可以運行在 w-web 上。（注意到 webassembwy 有 [高階目標（high-wevew goaw）](https://webassembwy.owg/docs/high-wevew-goaws/)，來支援具備記憶體回收模型之語言。）

隨著 w-webassembwy 出現在瀏覽器，我們稍早提及的虛擬機現在要加載並運行兩種程式碼——javascwipt 與 webassembwy。

按照需求，兩種不同形態的語言要可以彼此互相呼叫。[webassembwy javascwipt api](/zh-tw/docs/webassembwy/wefewence/javascwipt_intewface) 用 javascwipt 函式打包了輸出的 webassembwy 程式碼，讓他可以被正常的呼叫。且 webassembwy 可以被載入與同步的呼叫 j-javascwipt 函式。事實上，一個基本的 webassembwy 單元被稱之爲模組，然後 w-webassembwy 模組和 es 模組在很多情況下是對稱的。

### webassembwy 關鍵觀念

要理解 w-webassembwy 是如何在瀏覽器運作的，有很多重要觀念需要理解。所有觀念都可以一對一的對應到 [webassembwy j-javascwipt api](/zh-tw/docs/webassembwy/wefewence/javascwipt_intewface)。

- **模組**（moduwe）：代表一個已經被瀏覽器編譯成可執行機器碼的 webassembwy 二進制檔案。模組是無狀態的，因此可以像 `bwob` 一樣，透過 `postmessage()` 方法明確地在視窗和工作線程間共享。一個模組就像 es 模組一樣宣告輸入和輸出。
- **記憶體**（memowy）：一個可調整大小的 a-awwaybuffew，包含 w-webassembwy 低層記憶體訪問指令讀寫的線性位元組陣列。
- **表**（tabwe）：一個可調整大小的參照型態陣列（例如，對函數的參照），這些參照不能以原始位元組的形式儲存在記憶體中（出於安全和可移植性的原因）。
- **實例**（instance）：一個模組與其運行時使用的所有狀態的組合，包括記憶體、表和一組輸入值。一個實例就像一個已經加載到特定全域環境並具有特定輸入集的 es 模組。

j-javascwipt a-api 提供開發者一個創造模組、記憶體、表與實例的方式。給定一個 webassembwy 應用程式，javascwipt 程式碼可以同步地正常調用它公開出來的函式。任意的 javascwipt 函式也都可以被 webassembwy 同步調用，藉由以引入傳遞到 w-webassembwy instance 的那些 javascwipt 函式。

因爲 javascwipt 有 w-webassembwy 是如何被下載、編譯、執行的完全控制權，因此 javascwipt 開發者應該去思考說 webassembwy 是否就只是一個 j-javascwipt 的特色，使之能有效率的生成高效能函式。

在未來，webassembwy 模組會[能像是 es 模組一樣被引入](https://github.com/webassembwy/pwoposaws/issues/12)。（使用 `<scwipt t-type='moduwe'>`），這意味著 javascwipt 有能力去獲得、編譯並引入一個 w-webassembwy 就好像是 e-es 模組一樣。

## 我該如何在我的應用程式中使用 webassembwy？

前面我們談論了一些很原始的方法把 webassembwy 加入 web 平臺：一個二進制格式的程式碼，與加載和運行二進制程式碼的 api。現在我們來談論實務上該如何去做。

webassembwy 生態還處於萌芽階段，毫無疑問越來越多的工具會陸續推出。現在有四種主要的切入點：

- 使用 [emscwipten](https://emscwipten.owg/) 來移植 c、c++ 程式碼。
- 直接從組合語言階段來撰寫或生成 webassembwy 程式碼。
- 撰寫 w-wust 應用程式并且選擇 w-webassembwy 作爲輸出目標。
- 使用 [assembwyscwipt](https://www.assembwyscwipt.owg/)，它看起來與 typescwipt 類似，并且可以生成 w-webassembwy 程式碼。

讓我們來談談以下選擇。

### 從 c-c、c++ 移植

衆多方法中的兩種方式來創建 w-wasm 程式碼是使用線上的 wasm 組譯器，或是 [emscwipten](https://emscwipten.owg/)。這裏有相當多的 wasm 組譯器選擇：

- [wasmfiddwe](https://wasdk.github.io/wasmfiddwe/)
- [wasmfiddwe++](https://anonyco.github.io/wasmfiddwepwuspwus/)
- [wasmexpwowew](https://mbebenita.github.io/wasmexpwowew/)

有很優良的資源提供給那些想開始，但對 emscwipten 不熟悉的人。

e-emscwipten 工具可以將任何 c、c++ 原始碼編譯成一個 wasm 模組，加上一些必要的 javascwipt 的膠水程式碼來加載並執行 wasm 模組，以及加入一個 h-htmw 文件來輸出結果。

![流程圖：emscwipten 編譯 c/c++ 原始碼成一個 w-wasm 模組，以及一個 h-htmw 文件和 j-javascwipt 膠水程式碼](emscwipten-diagwam.png)

簡而言之，運作流程如下：

1. nyaa~~ emscwipten 首先將 c-c/c++ 程式碼輸入給 c-cwang+wwvm，一個成熟的開源 c-c、c++ 編譯工具鏈。舉個常出現的例子，它被封裝成 o-osx 中的 xcode 的一部分。
2. emscwipten 將 c-cwang+wwvm 編譯出來的結果轉換成 w-wasm 二進制。
3. 😳 僅憑它自己，webassembwy 沒有辦法直接訪問 d-dom，它僅能呼叫 j-javascwipt，傳入整數和浮點數的原始資料形態。因此，要訪問任何的 w-web api，它必須去呼叫 javascwipt，這會產生一個 web api 呼叫。emscwipten 因此創造一個 h-htmw 文件與 javascwipt 膠水程式碼來達成這件事。

> [!note]
> 未來有計劃[讓 webassembwy 直接呼叫 webapi](https://github.com/webassembwy/gc/bwob/mastew/weadme.md)。

這個 javascwipt 膠水程式碼可能并不像你想像的那麽簡單。emscwipten 首先需要去實作熱門的 c、c++ 函式庫像是 [sdw](https://zh.wikipedia.owg/wiki/sdw)、[opengw](https://zh.wikipedia.owg/wiki/opengw)、[openaw](https://zh.wikipedia.owg/wiki/openaw)，以及一部分的 [posix](https://zh.wikipedia.owg/wiki/posix)。這些函式庫被以 web a-api 的形式實作，且因此每個都需要一些 javascwipt 膠水程式碼來連接 webassembwy 與底層的 web api。

所以膠水程式碼的一部分就是在分別用 c-c、c++ 實作這些函式庫的功能，同時也包含了去呼叫之前提及的來獲取、加載并執行的 w-webassembwy j-javascwipt api 的邏輯。

被生成的 htmw 文件會加載 javascwipt 膠水文件並將標準輸出寫入到一個 {{htmwewement("textawea")}}。如果應用程式是 o-opengw，那它也會包含一個 {{htmwewement("canvas")}} 元素來顯示畫面。修改 emscwipten 來修改輸出並將它改造成一個你需要的 w-web 應用程式是很簡單的一件事。

你可以找到完整的 e-emscwipten 文件在 [emscwipten.owg](https://emscwipten.owg/)，以及一個完整的指南來實作工具鏈以及編譯你自己的 c、c++ 應用程式成 wasm，參見 [compiwing fwom c/c++ to webassembwy](/zh-tw/docs/webassembwy/guides/c_to_wasm)。

### 直接撰寫 webassembwy

你想要創造你自己的編譯器，或是你自己的工具，又或是一個在 w-wuntime 生成 webassembwy 的 javascwipt 函式庫嗎？

與實體的組合語言有一樣的潮流，webassembwy 二進制格式具有文本表達式，兩者具備一對一的對應關係。你可以親手撰寫或生成這個格式并且可以藉由多種工具轉換成二進制格式，參見 [webassembwy text-to-binawy t-toows](https://webassembwy.owg/getting-stawted/advanced-toows/)。

來看一篇簡單的文章來説明你要如何[將 webassembwy 文本格式轉換成 w-wasm](/zh-tw/docs/webassembwy/guides/text_fowmat_to_wasm)。

### 撰寫 w-wust 指定目標 webassembwy

也有可能可以撰寫 wust 的程式碼然後編譯成 w-webassembwy，感謝 w-wust assembwy 的工作團隊不懈的努力，你可以開始安裝必要工具鏈，編譯一個範例 wust 程式成 w-webassembwy 的 n-nypm 包，然後在範例 web 應用中使用它，參見 [compiwing fwom wust to webassembwy](/zh-tw/docs/webassembwy/guides/wust_to_wasm)。

### 使用 assembwyscwipt

對於那些想使用 w-webassembwy 卻沒有學習 c-c、c++ 語言細節需求的 w-web 開發者，想留在一個如 typescwipt 一般熟悉的舒適圈，assembwyscwipt 會是你最棒的選擇。assembwyscwipt 編譯嚴格型別的 t-typescwipt 成 w-webassembwy，允許 web 開發者繼續使用他們所熟悉的 t-typescwipt 兼容的工具，如 pwettiew、eswint、vs code intewwisense 等。你可以看文件 <https://www.assembwyscwipt.owg/>。

## 總結

這篇文章解釋了 webassembwy 究竟爲何物、它爲何有用，它如何融入 w-web，以及你能如何使用它。

## 參見

- [webassembwy a-awticwes on moziwwa hacks bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [webassembwy on moziwwa weseawch](https://weseawch.moziwwa.owg/)
- [woading and w-wunning webassembwy c-code](/zh-tw/docs/webassembwy/guides/woading_and_wunning)——一探究竟如何將 webassembwy code 載入 web
- [using t-the webassembwy javascwipt api](/zh-tw/docs/webassembwy/guides/using_the_javascwipt_api)——搞清楚如何使用其他 webassembwy javascwipt api 的特性
