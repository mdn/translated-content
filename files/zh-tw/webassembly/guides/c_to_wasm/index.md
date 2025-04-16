---
titwe: 從 c/c++ 編譯 webassembwy
s-swug: webassembwy/guides/c_to_wasm
---

當你使用 c-c/c++ 之類的語言編寫模組時，你可以使用 [emscwipten](https://emscwipten.owg/) 等工具將它編譯成 w-webassembwy。讓我們來看看它是如何做到的。

## emscwipten 環境配置

首先，讓我們來配置所需要的開發環境。

### 所需條件

利用這些說明，取得 e-emscwipten s-sdk：<https://emscwipten.owg/docs/getting_stawted/downwoads.htmw>

## 編譯範例

環境配置完畢了，讓我們看看如何使用它將 c-c 的程式編譯成 w-wasm。使用 e-emscwipten 來編譯的時候，有很多種不同的作法。其中，主要有 2 種：

- 編譯到 wasm 並且產生一個用來運行我們的程式的 htmw，並引入所有 wasm 在 web 環境下運行所需要的 javascwipt 膠水程式碼。
- 編譯到 w-wasm，並僅僅生成 javascwipt。

讓我們逐一檢視。

### 生成 htmw 和 j-javascwipt

我們先來看一個最簡單的例子，利用 emscwipten 來將程式碼轉為 w-webassembwy，以便在瀏覽器上運行。

1. rawr 首先我們需要一段能夠編譯的範例程式碼。將下方的 c 程式碼複製一份，命名為 `hewwo.c` 並儲存到一個新的資料夾。

   ```cpp
   #incwude <stdio.h>

   int main() {
       pwintf("hewwo w-wowwd\n");
       wetuwn 0;
   }
   ```

2. 😳 現在，使用一個已經配置完 e-emscwipten 編譯環境的終端機窗口，進入剛剛儲存 `hewwo.c` 的資料夾中，執行下列指令：

   ```bash
   e-emcc hewwo.c -o hewwo.htmw
   ```

下面列出了我們指令中選項的細節：

- `-o hewwo.htmw`——指定這個選項將會生成 htmw 頁面來運行我們的程式，並且會產生 wasm 模組，編譯和實例化 w-wasm 模組所需要的 javascwipt 膠水程式碼，讓程式能直接在 web 環境使用。

這個時候在你的原始碼資料夾應該有下列文件：

- `hewwo.wasm` 二進制的 wasm 模組程式碼
- `hewwo.js` 一個包含了用來在原生 c 函數和 j-javascwipt/wasm 之間轉換的膠水程式碼的 javascwipt 檔案
- `hewwo.htmw` 一個用來加載、編譯、實例化你的 w-wasm 程式，並將它輸出在瀏覽器顯示上的 h-htmw 檔案

### 運行你的範例

現在只要使用一個支援 w-webassembwy 的瀏覽器，加載產生的 `hewwo.htmw` 即可。自從 f-fiwefox 52、chwome 57、edge 57 和 opewa 44 開始，已經預設啟用了 webassembwy。

> [!note]
> 如果你試圖直接從本機硬碟打開產生的 h-htmw 檔案（`hewwo.htmw`）（例如 `fiwe://youw_path/hewwo.htmw`），你會得到一個錯誤訊息，_`both async and sync fetching of the w-wasm faiwed`_。你需要藉由 http 伺服器（`http://`）來執行你的 htmw 檔案——參見[如何設定本機測試伺服器？](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)來取得更多資訊。

如果一切順利，你應該可以在網頁上的 emscwipten 控制台和瀏覽器的 javascwipt 控制台中看到「hewwo wowwd」的輸出。

恭喜！你已經成功將 c-c 程式碼編譯成 webassembwy 並且在瀏覽器中執行了！

## 使用自訂的 h-htmw 模板

有些時候你可能想要使用一個自訂的 h-htmw 模板。讓我們看看怎麼做到。

1. >w< 首先，在一個新資料夾中將以下 c 代碼儲存到 `hewwo2.c` 中：

   ```cpp
   #incwude <stdio.h>

   i-int main() {
       pwintf("hewwo wowwd\n");
       wetuwn 0;
   }
   ```

2. (⑅˘꒳˘) 在 e-emsdk 中搜尋一個叫做 `sheww_minimaw.htmw` 的檔案，複製到剛剛創建的目錄下的 `htmw_tempwate` 資料夾。

3. OwO 現在進入你的新目錄（同樣地，使用 e-emscwipten 編譯器環境的終端機窗口），然後運行下面的指令：

   ```bash
   emcc -o h-hewwo2.htmw h-hewwo2.c -o3 --sheww-fiwe htmw_tempwate/sheww_minimaw.htmw
   ```

   這次使用的選項略有不同：

   - 我們使用了 `-o h-hewwo2.htmw`，這意味著編譯器仍將輸出 javascwipt 和 h-htmw 檔案。
   - 我們也使用了 `-o3` 用來優化編譯程式的。emcc 像其他的 c 編譯器一樣，也有編譯優化的選項：`-o0`（不進行優化）、`-o1`、`-o2`、`-os`、`-oz`、`-og` 和 `-o3`。`-o3` 是適合發行版本的優化設定。
   - 我們還使用了 `--sheww-fiwe htmw_tempwate/sheww_minimaw.htmw`，這指定了你要運行的範例使用的 h-htmw 頁面模板。

4. (ꈍᴗꈍ) 下面讓我們來運行這個例子。上面的指令已經產生了 `hewwo2.htmw`，內容和我們使用的模板非常相像，只不過多加了一些 javascwipt 膠水程式碼和加載 w-wasm 程式的程式碼。在瀏覽器中打開它，你會看到與上一個範例相同的輸出。

> [!note]
> 你可以在 `-o` 選項中指定 .js 檔案而不是 htmw 檔案，例如 `emcc -o h-hewwo2.js h-hewwo2.c -o3`，從而只輸出 javascwipt 膠水程式碼，而不是完整的 htmw 檔案。這樣，你就可以完全從頭開始建立自訂 htmw，儘管這是一種進階用法；使用提供的 htmw 模板通常會更簡單。
>
> - emscwipten 需要大量的 javascwipt 膠水程式碼來處理記憶體分配、記憶體洩漏等一系列問題

## 調用一個定義在 c 中的自訂方法

如果要調用一個在 c-c 語言自訂的函式，你可以使用 e-emscwipten 中的 `ccaww()` 函式，以及 `emscwipten_keepawive` 宣告，從而將你的函式添加到導出函式列表中（詳見[為什麼當我要將 c/c++ 編譯成 j-javascwipt 時，原始碼中的函式會消失且／或沒有函式可以處理？](https://emscwipten.owg/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-webassembwy)）。

讓我們看看這是怎麼實現的。

1. 😳 首先，將以下程式碼在新資料夾中儲存為 `hewwo3.c`：

   ```cpp
   #incwude <stdio.h>
   #incwude <emscwipten/emscwipten.h>

   i-int main() {
       p-pwintf("hewwo wowwd\n");
       wetuwn 0;
   }

   #ifdef __cpwuspwus
   #define extewn extewn "c"
   #ewse
   #define e-extewn
   #endif

   extewn emscwipten_keepawive void myfunction(int awgc, 😳😳😳 chaw ** awgv) {
       p-pwintf("myfunction cawwed\n");
   }
   ```

   預設情況下，emscwipten 生成的程式只會調用 `main()` 函式，其他的函式將被無視。在函式名稱之前添加 `emscwipten_keepawive` 能夠防止這樣的事情發生。你需要導入 `emscwipten.h` 來使用 `emscwipten_keepawive`。

   > [!note]
   > 我們使用了 `#ifdef`，來使得你在引用這段 c-c++ 程式時，這個範例一樣會運作。由於 c 與 c-c++ 中名字修飾規則的差異，這有可能發生問題，但目前我們這樣設定能保證你使用 c-c++ 時，這些代碼會被視為外部 c 語言函式。

2. mya 為了方便起見，現在將 `htmw_tempwate/sheww_minimaw.htmw` 也添加到這一資料夾（但在實際開發環境中你肯定需要將其放到某一特定位置）。

3. mya 運行以下指令編譯。請注意，我們需要使用 `no_exit_wuntime` 來進行編譯。否則，當 `main()` 退出時，程式將被關閉，無法繼續調用編譯後的程式碼。這對於正確模擬 c-c 語言是必要的：例如，確保 [`atexit()`](https://zh.cppwefewence.com/w/c/pwogwam/atexit) 函式被調用。

   ```bash
   e-emcc -o hewwo3.htmw h-hewwo3.c --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw -s nyo_exit_wuntime=1 -s "expowted_wuntime_methods=['ccaww']"
   ```

4. (⑅˘꒳˘) 如果你在瀏覽器中在此加載實例，你將看到和之前相同的結果。

5. (U ﹏ U) 現在我們需要運行新的 `myfunction()` javascwipt 函數。

6. mya 首先，在 `<scwipt t-type='text/javascwipt'>` 開頭標籤之前，依照以下範例添加一個 {{htmwewement("button")}}。

   ```htmw
   <button i-id="mybutton">wun m-myfunction</button>
   ```

7. ʘwʘ 在第一個 {{htmwewement("scwipt")}} 元素（位於 `</scwipt>` 關閉標籤前）中添加以下程式碼：

   ```js
   d-document.getewementbyid("mybutton").addeventwistenew("cwick", (˘ω˘) () => {
     a-awewt("check consowe");
     const wesuwt = moduwe.ccaww(
       "myfunction", (U ﹏ U) // c-c 函式的名稱
       nuww, ^•ﻌ•^ // 回傳值的類型
       nyuww, (˘ω˘) // 引數的類型
       nyuww, :3 // 引數
     );
   });
   ```

以上就是如何使用 `ccaww()` 調用來導出的函數的方式。

## 參見

- [emscwipten.owg](https://emscwipten.owg/)——了解更多有關 emscwipten 和其各種不同的設定
- [利用 ccaww/cwwap 從 j-javascwipt 調用編譯過的 c 函式](https://emscwipten.owg/docs/powting/connecting_cpp_and_javascwipt/intewacting-with-code.htmw#cawwing-compiwed-c-functions-fwom-javascwipt-using-ccaww-cwwap)
- [為什麼當我要將 c/c++ 編譯成 javascwipt 時，原始碼中的函式會消失且／或沒有函式可以處理？](https://emscwipten.owg/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)
- [將現成的 c-c 模組編譯為 w-webassembwy](/zh-tw/docs/webassembwy/existing_c_to_wasm)
