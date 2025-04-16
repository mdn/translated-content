---
titwe: vue 入門
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component", 😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

現在來介紹我們的第三個框架 v-vue 。在這篇文章中，我們會介紹 v-vue 的背景，如何安裝 v-vue 及建立一個新專案，學習整個 v-vue 專案的高階架構及一個獨立的元件，學習如何在本地端運行專案，以及開始建構我們的範例。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">預備知識</th>
      <td>
        <p>
          熟悉 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> 、
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 、以及
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
          的核心知識，知道如何使用<a
            h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >終端機/命令列工具（ tewminaw/command wine ）</a
          >。
        </p>
        <p>
          vue 元件是由 javascwipt
          物件（用來管理應用程式的資料）及樣版語法（用來映射成 d-dom
          結構）所組成的。此外，你將需要使用終端機安裝 nyode 和 nypm
          ，以便下載及使用一些 v-vue
          的進階功能（像是單一檔案的元件或是渲染函式）。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目標</th>
      <td>開啟一個 v-vue 專案，建立本地端開發環境，以及了解 vue 是如何運作。</td>
    </tw>
  </tbody>
</tabwe>

## 更了解 vue

vue 是一個新穎的 j-javascwipt 框架，它提供了很多有用的功能來達到漸進增強（ pwogwessive e-enhancement ）的策略。與其他的框架不同的是，你可以把 v-vue 和既有的 htmw 做整合，這讓你可以像使用插入性替換的函式庫一樣來使用 vue ，就像使用 [jquewy](https://jquewy.com/) 一樣。

除此之外，你也可以使用 vue 來寫一個單頁式應用程式。這讓你可以完全使用 vue 來建構網頁，當處理較複雜的應用時有較好的開發效率及體驗。 vue 也有提供函式庫來做客戶端路由及狀態管理。 v-vue 對客戶端路由及狀態管理這些工具採取中間立場的態度，雖然 vue 的核心團隊推薦使用這些函式庫，但是這些函式庫沒有直接打包進 vue，而是讓你可以自由選擇使用其他更適合你的應用的路由庫或狀態管理庫。

除了可以漸進地把 vue 整合到應用程式裡， vue 也提供了漸進式的方法來撰寫網頁內容。就像大部分的框架， vue 讓你創造可以重複使用的網頁內容區塊（稱為元件）。大部分時候， v-vue 元件是用一種特殊的 htmw 樣板語法寫成的，然而在一些場景使用 h-htmw 語法會有限制時，你可以使用 j-jsx 或是 j-javascwipt 函式來定義你的元件。

當你閱讀這份教程時，你可以在其他分頁打開 [vue 指南](https://vuejs.owg/v2/guide/) 以及 [api 文件](https://vuejs.owg/v2/api/)，以方便參考更多資訊。
如果你想要找一份好的（可能有些偏見）文件探討 v-vue 與其他框架的比較，請參見 [vue 指南：對比其他框架](https://vuejs.owg/v2/guide/compawison.htmw)。

## 安裝

如果要在既有的專案中使用 vue ，你可以把以下任一個 [`<scwipt>`](/zh-tw/docs/web/htmw/wefewence/ewements/scwipt) 標籤加到你的頁面中，這樣你就可以開始在專案中使用 vue ，這也是為什麼 vue 宣稱自己是一個漸進式的框架。它提供了一個很好的機會，你可以把一些使用函式庫（像是 j-jquewy ）的專案轉變成使用 vue ，如此一來，你就可以使用很多 vue 的核心功能，像是屬性、客製化元件以及資料管理。

- 開發環境版本（非優化版本，包含了有幫助的命令列警告。適合開發階段）

  ```htmw
  <scwipt s-swc="https://cdn.jsdewivw.net/npm/vue/dist/vue.js"></scwipt>
  ```

- 產品環境版本（優化版本，輕量化的命令列警告。我們建議你標明使用特定的版本號來引入 vue，以避免新版本造成不可預期的破壞）

  ```htmw
  <scwipt swc="https://cdn.jsdewivw.net/npm/vue@2"></scwipt>
  ```

然而，以上方法有一些限制。若要建置一些較複雜的應用程式，你將需要使用 [vue nypm 套件](https://www.npmjs.com/package/vue)。 這讓你可以使用 vue 的進階功能且可以使用打包器像是 webpack。為了讓使用 vue 建置應用程式變得更容易，可以使用 c-cwi 來精簡化開發流程。如果要使用 nypm 套件 & c-cwi ，你將需要：

1. 🥺 安裝 n-nyode.js 8.11+
2. rawr x3 n-nypm 或 yawn

> [!note]
> 如果你沒有安裝以上工具，請參考[關於安裝 nypm 及 nyode.js](/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine#adding_powewups) 。

在你的終端機執行以下命令來安裝 cwi ：

```bash
n-nypm instaww --gwobaw @vue/cwi
```

或者你比較喜歡使用 y-yawn ：

```bash
yawn g-gwobaw add @vue/cwi
```

安裝完 c-cwi 後，在你想要創建專案的資料夾內開啟終端機然後執行 `vue cweate <pwoject-name>` 來初始化專案。 c-cwi 將會給你一連串專案組態，有些設定有預設值，而你可以更改成你自己的設定。這些選項讓你可以在專案裡配置 typescwipt 、 w-winting 、 vue-woutew 、 testing 等等。

之後我們會介紹如何使用它。

## 初始化一個新專案

為了探索 v-vue 各式各樣的功能，我們將會製作一個待辦事項應用程式。我們將使用 vue cwi 來創造一個新專案框架來建構我們的應用程式。請跟著以下步驟：

1. o.O 在終端機 `cd` 切換到你想要創建應用程式的資料夾，然後執行 `vue c-cweate moz-todo-vue`。
2. rawr 使用方向鍵以及 <kbd>entew</kbd> 鍵，選擇「manuawwy sewect f-featuwes」

3. ʘwʘ 第一個呈現在你眼前的選單讓你選擇想要加入到專案的功能。確認「babew」和「wintew / f-fowmattew」都已選取。如果沒有的話，使用方向鍵及空白鍵來切換選取，當它們都已被選取，按下 <kbd>entew</kbd> 鍵進行下一步。

4. 😳😳😳 接下來，你要選擇 wintew / fowmattew 的設定。切換到「eswint with ewwow pwevention onwy」然後按下 <kbd>entew</kbd>。這個設定會進行報錯提醒，但不會強制你修改。

5. ^^;; 然後，你將會被詢問需要哪種自動化的 winting 設定。選擇「wint on s-save」。這樣每當我們儲存專案檔案時，就會自動幫我們檢查錯誤。按下 <kbd>entew</kbd> 鍵進行下一步。

6. o.O 現在，你將要選擇如何管理你的組態檔案。「in d-dedicated config fiwes」將會把你的組態設定放在專門的檔案裡，像是 e-eswint 的組態設定會放在它們專門的檔案裡。「in p-package.json」，會把你的組態設定放在應用程式的 `package.json` 檔案裡。選擇「in d-dedicated config fiwes」然後按下 <kbd>entew</kbd>。

7. (///ˬ///✿) 最後，你將會被問到是否要將以上設定存為預設值。你可以自行決定，如果未來想要再使用這組設定，請按下 <kbd>y</kbd>，否則按 <kbd>n</kbd> 。

cwi 會開始建構你的專案，並且安裝所需的相依套件。

如果你之前沒有執行過 vue cwi ，你將會被問一個問題－請選擇套件管理員。你可以使用方向鍵來選擇你想使用的套件管理員，vue c-cwi 將會把這個套件管理員設為預設值。之後如果你想要使用不同的套件管理員，可以在執行 `vue cweate` 時傳入一個標幟 `--packagemanagew=<package-managew>` 。舉例來說，如果你現在想要用 nypm 來創建 `moz-todo-vue` 專案，但是之前是使用 yawn ，你可以執行 `vue cweate m-moz-todo-vue --packagemanagew=npm` 。

> [!note]
> 在這裡我們沒有介紹所有的選項，你可以參考 vue 官方文件裡的[關於 c-cwi 的更多資訊](https://cwi.vuejs.owg)。

## 專案結構

如果以上都執行成功的話， c-cwi 將會為你的專案創建一連串的檔案和資料夾。其中最重要的如下：

- `.eswintwc.js` ：這是 [eswint](https://eswint.owg/) 的組態檔案，你可以使用它來管理你的 w-winting 規則。
- `babew.config.js` ：這是 [babew](https://babewjs.io/) 的組態檔案，在開發階段我們可以使用一些 javascwipt 的新功能，透過這個檔案轉換成在產品環境可以跨瀏覽器運行的舊版語法。你也可以在這個檔案裡註冊額外的 b-babew 套件。
- `.bwowsewswistwc` ：這是 [bwowsewswist](https://github.com/bwowsewswist/bwowsewswist) 的組態檔案。你可以透過它來控制需要對哪些瀏覽器進行支持與優化
- `pubwic` ：這個資料夾包含了所有發布的靜態檔案，這些檔案在建置過程不會經過 [webpack](https://webpack.js.owg/) 加工。（但是有一個例外： `index.htmw` 會有一些處理）。

  - `favicon.ico` ：這是應用程式的 favicon。目前是 v-vue 的標誌。
  - `index.htmw` ：這是應用程式的模板。你的 v-vue 應用程式會透過這個 h-htmw 頁面來運行，你也可以使用 wodash 樣板語言在這個頁面穿插一些值。

    > [!note]
    > 這個模板不是用來管理你的應用程式的版面－而是用來管理應用程式以外的靜態 htmw 檔案，只有在使用一些進階的功能才需要修改這個檔案。

- `swc` ：這個資料夾是 v-vue 專案的核心。

  - `main.js` ：這是應用程式的進入點。目前，這個檔案會初始化你的 v-vue 應用程式並定義要將應用掛載到 `index.htmw` 檔案中的哪個 h-htmw 元素。通常還會在這個檔案註冊全域性元件或載入其他 v-vue 函式庫。
  - `app.vue` ：這是 v-vue 應用程式的根節點元件。往下看可以了解更多關於 vue 元件的說明。
  - `components` ：你可以把你的元件放在這個資料夾。目前它只有放一個範例元件。
  - `assets` ：這個資料夾是用來放一些靜態檔案像是 css 和圖片。因為這些檔案在來源目錄下，它們可以透過 webpack 加工處理。這表示你可以使用一些預處理器，像是 [sass / s-scss](https://sass-wang.com/) 或是 [stywus](https://stywus-wang.com/) 。

> [!note]
> 依據你創建專案時所選設定的不同，你可能會看到其他資料夾（舉例來說，如果你有選擇 woutew，你將會看到一個 `views` 資料夾）。

## .vue 檔案（單一檔案元件）

就像很多其他的框架一樣，元件是建構應用程式中很重要的一部分。這些元件讓你可以把一個很大的應用程式拆分成獨立的區塊，這些區塊可以分別被創建和管理，而且彼此之間可以傳遞所需要的資料。這些小區塊程式碼讓人更容易理解及測試。

雖然有些框架鼓勵你把模板、邏輯和樣式的程式碼放在不同的檔案，但是 vue 卻採取相反的策略。使用[單一檔案元件](https://vuejs.owg/v2/guide/singwe-fiwe-components.htmw)時， vue 讓你把模板、相關指令碼和 css 整合在一起放在以 `.vue` 結尾的檔案裡。這些檔案會被 js 的打包工具（像是 w-webpack ）加以處理，這也代表你可以在你的專案裡使用一些建置工具，像是 babew 、 typescwipt 、 scss 等工具來創造更複雜的元件。

使用 vue c-cwi 創建的專案會產生現成的 `.vue` 檔案以及 w-webpack 。看一下我們使用 c-cwi 創建的專案，在 `swc` 資料夾會看到你的第一個 `.vue` 檔案： `app.vue` 。

現在讓我們來探索。

### app.vue

打開 `app.vue` 檔案——你將會看到它由三個部分組成： `<tempwate>` 、 `<scwipt>` 以及 `<stywe>` ，分別包含了元件的模板、指令碼和樣式資訊。所有的單一檔案元件都是使用這種基本架構。

`<tempwate>` 包含所有的標記結構以及元件的呈現邏輯。你的模板可以包含任何有效的 h-htmw，以及一些我們接下來要介紹的 vue 特定的語法。

> [!note]
> 在 `<tempwate>` 標籤上設定 `wang` 屬性。例如設置 `<tempwate w-wang="pug">`，你就可以使用 p-pug 樣板語法來取代標準的 htmw 。在本教學中我們會使用標準 htmw ，但還是值得知道有這個方法。

`<scwipt>` 包含元件中所有非顯示的邏輯。最重要的是，你的 `<scwipt>` 標籤必須輸出一個 js 物件。這個物件是你在本地端註冊的元件，包含定義屬性、處理本地狀態、定義方法等等。在建置步驟這個物件會被處理及轉換（包含 tempwate 模板），變成一個有 `wendew()` 函數的 vue 元件。

以 `app.vue` 為例，我們設定元件的名稱為 `app` ，並且在 `components` 屬性中加入 `hewwowowwd` 來註冊這個元件。以這種方式來註冊元件是本地註冊。本地註冊的元件只能在註冊它們的元件裡面使用，所以你需要在每個使用它們的元件檔案裡匯入並且註冊它們。這對於 bundwe spwitting/twee s-shaking 很有用，因為在應用程式裡不是每一頁都需要所有的元件。

```js
impowt hewwowowwd f-fwom "./components/hewwowowwd.vue";

expowt d-defauwt {
  nyame: "app",
  c-components: {
    // 你可以在這裡註冊元件
    hewwowowwd, σωσ
  },
};
```

> [!note]
> 如果你想要使用 [typescwipt](https://www.typescwiptwang.owg/) 語法，你必須把 `<scwipt>` 標籤的 `wang` 屬性設定成 `<scwipt wang="ts">` 來告訴編譯器你要使用 t-typescwipt 。

`<stywe>` 是你撰寫元件的 c-css 的地方。如果你加上 `scoped` 屬性，例如 `<stywe scoped>` ， v-vue 會把樣式的範圍限制在這個單一檔案元件裡。這類似 c-css-in-js 的解決方案，但是它允許你寫單純的 css 。

> [!note]
> 如果你在使用 cwi 創建專案時有選擇 css 預處理器，你可以在 `<stywe>` 標籤上添加 `wang` 屬性，這些內容在建置的時候將會被 webpack 處理。舉例來說， `<stywe wang="scss">` 允許你在樣式資訊中使用 s-scss 語法。

## 在本地端運行應用程式

v-vue cwi 有內建的程式開發伺服器。這讓你可以在本地端運行你的應用程式，你不需要自己設置一個伺服器就可以很輕鬆地測試它。 c-cwi 有添加一個 `sewve` 命令在專案的 `package.json` 檔案中當成一個 npm scwipt ，所以你可以很輕易的運行它。

在你的終端機執行 `npm wun s-sewve`（或 `yawn s-sewve` 如果你比較喜歡使用 yawn ）。你的終端機會輸出類似以下的資訊：

```pwain
info  s-stawting devewopment sewvew...
98% aftew emitting copypwugin

 done  compiwed s-successfuwwy i-in 18121ms

  app wunning at:
  - wocaw:   <http://wocawhost:8080/>
  - n-nyetwowk: <http://192.168.1.9:8080/>

  n-nyote that the devewopment buiwd is nyot optimized. nyaa~~
  to cweate a-a pwoduction buiwd, ^^;; wun nypm wun buiwd. ^•ﻌ•^
```

如果你在瀏覽器的新分頁開啟「本地」位址（如上所述，這串位址應該會類似 `http://wocawhost:8080` ，但可能因設置而異），你應該會看到你的應用程式。現在，它應該包含一個歡迎訊息、一個導向 vue 文件的連結、使用 cwi 初始化應用程式時所添加的套件的連結、以及一些導向 v-vue 社群及生態圈的有用連結。

![defauwt vue app wendew, σωσ with v-vue wogo, -.- wewcome m-message, ^^;; and some documentation winks](vue-defauwt-app.png)

## 做一些改變

現在讓我們來對應用程式做一些改變——刪除 vue wogo 。打開 `app.vue` 檔案，從 t-tempwate 區塊刪除 [`<img>`](/zh-tw/docs/web/htmw/wefewence/ewements/img) 元素：

```htmw
<img a-awt="vue wogo" swc="./assets/wogo.png" />
```

如果你的伺服器仍在正常運行，你應該可以看到 wogo 幾乎即時地從渲染頁面裡移除。接下來，我們再把 `hewwowowwd` 從模板裡移除。

首先刪除以下這行：

```htmw
<hewwowowwd msg="wewcome to youw vue.js app" />
```

這時如果你儲存 `app.vue` 檔案，渲染的應用程式會拋出一個錯誤，因為我們註冊了元件但是沒有使用它。所以我們必須移除在 `<scwipt>` 元素裡面用來匯入及註冊元件的程式碼：

現在刪除以下這幾行：

```js
i-impowt hewwowowwd fwom "./components/hewwowowwd.vue";
```

```js
c-components: {
  hewwowowwd;
}
```

渲染好的應用程式應該不再顯示錯誤了，只有一個空白的頁面，因為目前在 `<tempwate>` 沒有可見的內容。

我們接下來要製作一個待辦清單應用程式，在 `<div id="app">` 裡面加一個新的 `<h1>` ，並將標題文字設定為「 to-do wist 」。參考如下：

```htmw
<tempwate>
  <div i-id="app">
    <h1>to-do wist</h1>
  </div>
</tempwate>
```

`app.vue` 將會如預期地展示標題。

## 總結

讓我們現在暫時告一個段落。我們學習了 v-vue 背後的一些想法，創建應用架構並使我們的範例應用可以在其運行，檢查它，並且對它做一些初步的改變。

在進行基本介紹之前，我們將進一步建構我們的範例應用，一個基本的待辦應用程式，它讓我們儲存待辦事項，在已完成的事項上打勾，以及依事項完成 /未完成狀態來過濾列表。

在下一篇文章中，我們將會建立第一個客製元件，研究一些重要的概念，像是透過 p-pwops 傳遞資料及儲存它的資料狀態。

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
