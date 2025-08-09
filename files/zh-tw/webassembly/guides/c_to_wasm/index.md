---
title: 從 C/C++ 編譯 WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
---

當你使用 C/C++ 之類的語言編寫模組時，你可以使用 [Emscripten](https://emscripten.org/) 等工具將它編譯成 WebAssembly。讓我們來看看它是如何做到的。

## Emscripten 環境配置

首先，讓我們來配置所需要的開發環境。

### 所需條件

利用這些說明，取得 Emscripten SDK：<https://emscripten.org/docs/getting_started/downloads.html>

## 編譯範例

環境配置完畢了，讓我們看看如何使用它將 C 的程式編譯成 Wasm。使用 Emscripten 來編譯的時候，有很多種不同的作法。其中，主要有 2 種：

- 編譯到 Wasm 並且產生一個用來運行我們的程式的 HTML，並引入所有 Wasm 在 web 環境下運行所需要的 JavaScript 膠水程式碼。
- 編譯到 Wasm，並僅僅生成 JavaScript。

讓我們逐一檢視。

### 生成 HTML 和 JavaScript

我們先來看一個最簡單的例子，利用 Emscripten 來將程式碼轉為 WebAssembly，以便在瀏覽器上運行。

1. 首先我們需要一段能夠編譯的範例程式碼。將下方的 C 程式碼複製一份，命名為 `hello.c` 並儲存到一個新的資料夾。

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. 現在，使用一個已經配置完 Emscripten 編譯環境的終端機窗口，進入剛剛儲存 `hello.c` 的資料夾中，執行下列指令：

   ```bash
   emcc hello.c -o hello.html
   ```

下面列出了我們指令中選項的細節：

- `-o hello.html`——指定這個選項將會生成 HTML 頁面來運行我們的程式，並且會產生 Wasm 模組，編譯和實例化 Wasm 模組所需要的 JavaScript 膠水程式碼，讓程式能直接在 web 環境使用。

這個時候在你的原始碼資料夾應該有下列文件：

- `hello.wasm` 二進制的 Wasm 模組程式碼
- `hello.js` 一個包含了用來在原生 C 函數和 JavaScript/Wasm 之間轉換的膠水程式碼的 JavaScript 檔案
- `hello.html` 一個用來加載、編譯、實例化你的 Wasm 程式，並將它輸出在瀏覽器顯示上的 HTML 檔案

### 運行你的範例

現在只要使用一個支援 WebAssembly 的瀏覽器，加載產生的 `hello.html` 即可。自從 Firefox 52、Chrome 57、Edge 57 和 Opera 44 開始，已經預設啟用了 WebAssembly。

> [!NOTE]
> 如果你試圖直接從本機硬碟打開產生的 HTML 檔案（`hello.html`）（例如 `file://your_path/hello.html`），你會得到一個錯誤訊息，_`both async and sync fetching of the wasm failed`_。你需要藉由 HTTP 伺服器（`http://`）來執行你的 HTML 檔案——參見[如何設定本機測試伺服器？](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)來取得更多資訊。

如果一切順利，你應該可以在網頁上的 Emscripten 控制台和瀏覽器的 JavaScript 控制台中看到「Hello World」的輸出。

恭喜！你已經成功將 C 程式碼編譯成 WebAssembly 並且在瀏覽器中執行了！

## 使用自訂的 HTML 模板

有些時候你可能想要使用一個自訂的 HTML 模板。讓我們看看怎麼做到。

1. 首先，在一個新資料夾中將以下 C 代碼儲存到 `hello2.c` 中：

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. 在 emsdk 中搜尋一個叫做 `shell_minimal.html` 的檔案，複製到剛剛創建的目錄下的 `html_template` 資料夾。

3. 現在進入你的新目錄（同樣地，使用 Emscripten 編譯器環境的終端機窗口），然後運行下面的指令：

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   這次使用的選項略有不同：
   - 我們使用了 `-o hello2.html`，這意味著編譯器仍將輸出 JavaScript 和 HTML 檔案。
   - 我們也使用了 `-O3` 用來優化編譯程式的。Emcc 像其他的 C 編譯器一樣，也有編譯優化的選項：`-O0`（不進行優化）、`-O1`、`-O2`、`-Os`、`-Oz`、`-Og` 和 `-O3`。`-O3` 是適合發行版本的優化設定。
   - 我們還使用了 `--shell-file html_template/shell_minimal.html`，這指定了你要運行的範例使用的 HTML 頁面模板。

4. 下面讓我們來運行這個例子。上面的指令已經產生了 `hello2.html`，內容和我們使用的模板非常相像，只不過多加了一些 JavaScript 膠水程式碼和加載 Wasm 程式的程式碼。在瀏覽器中打開它，你會看到與上一個範例相同的輸出。

> [!NOTE]
> 你可以在 `-o` 選項中指定 .js 檔案而不是 HTML 檔案，例如 `emcc -o hello2.js hello2.c -O3`，從而只輸出 JavaScript 膠水程式碼，而不是完整的 HTML 檔案。這樣，你就可以完全從頭開始建立自訂 HTML，儘管這是一種進階用法；使用提供的 HTML 模板通常會更簡單。
>
> - Emscripten 需要大量的 JavaScript 膠水程式碼來處理記憶體分配、記憶體洩漏等一系列問題

## 調用一個定義在 C 中的自訂方法

如果要調用一個在 C 語言自訂的函式，你可以使用 Emscripten 中的 `ccall()` 函式，以及 `EMSCRIPTEN_KEEPALIVE` 宣告，從而將你的函式添加到導出函式列表中（詳見[為什麼當我要將 C/C++ 編譯成 JavaScript 時，原始碼中的函式會消失且／或沒有函式可以處理？](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-webassembly)）。

讓我們看看這是怎麼實現的。

1. 首先，將以下程式碼在新資料夾中儲存為 `hello3.c`：

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }
   ```

   預設情況下，Emscripten 生成的程式只會調用 `main()` 函式，其他的函式將被無視。在函式名稱之前添加 `EMSCRIPTEN_KEEPALIVE` 能夠防止這樣的事情發生。你需要導入 `emscripten.h` 來使用 `EMSCRIPTEN_KEEPALIVE`。

   > [!NOTE]
   > 我們使用了 `#ifdef`，來使得你在引用這段 C++ 程式時，這個範例一樣會運作。由於 C 與 C++ 中名字修飾規則的差異，這有可能發生問題，但目前我們這樣設定能保證你使用 C++ 時，這些代碼會被視為外部 C 語言函式。

2. 為了方便起見，現在將 `html_template/shell_minimal.html` 也添加到這一資料夾（但在實際開發環境中你肯定需要將其放到某一特定位置）。

3. 運行以下指令編譯。請注意，我們需要使用 `NO_EXIT_RUNTIME` 來進行編譯。否則，當 `main()` 退出時，程式將被關閉，無法繼續調用編譯後的程式碼。這對於正確模擬 C 語言是必要的：例如，確保 [`atexit()`](https://zh.cppreference.com/w/c/program/atexit) 函式被調用。

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. 如果你在瀏覽器中在此加載實例，你將看到和之前相同的結果。

5. 現在我們需要運行新的 `myFunction()` JavaScript 函數。

6. 首先，在 `<script type='text/javascript'>` 開頭標籤之前，依照以下範例添加一個 {{htmlelement("button")}}。

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. 在第一個 {{htmlelement("script")}} 元素（位於 `</script>` 關閉標籤前）中添加以下程式碼：

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // C 函式的名稱
       null, // 回傳值的類型
       null, // 引數的類型
       null, // 引數
     );
   });
   ```

以上就是如何使用 `ccall()` 調用來導出的函數的方式。

## 參見

- [emscripten.org](https://emscripten.org/)——了解更多有關 Emscripten 和其各種不同的設定
- [利用 ccall/cwrap 從 JavaScript 調用編譯過的 C 函式](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [為什麼當我要將 C/C++ 編譯成 JavaScript 時，原始碼中的函式會消失且／或沒有函式可以處理？](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [將現成的 C 模組編譯為 WebAssembly](/zh-TW/docs/WebAssembly/existing_C_to_wasm)
