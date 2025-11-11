---
title: Vue 入門
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

現在來介紹我們的第三個框架 Vue 。在這篇文章中，我們會介紹 Vue 的背景，如何安裝 Vue 及建立一個新專案，學習整個 Vue 專案的高階架構及一個獨立的元件，學習如何在本地端運行專案，以及開始建構我們的範例。

<table>
  <tbody>
    <tr>
      <th scope="row">預備知識</th>
      <td>
        <p>
          熟悉 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a> 、
          <a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS</a> 、以及
          <a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          的核心知識，知道如何使用<a
            href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >終端機/命令列工具（ terminal/command line ）</a
          >。
        </p>
        <p>
          Vue 元件是由 Javascript
          物件（用來管理應用程式的資料）及樣版語法（用來映射成 DOM
          結構）所組成的。此外，你將需要使用終端機安裝 node 和 npm
          ，以便下載及使用一些 Vue
          的進階功能（像是單一檔案的元件或是渲染函式）。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目標</th>
      <td>開啟一個 Vue 專案，建立本地端開發環境，以及了解 Vue 是如何運作。</td>
    </tr>
  </tbody>
</table>

## 更了解 Vue

Vue 是一個新穎的 Javascript 框架，它提供了很多有用的功能來達到漸進增強（ progressive enhancement ）的策略。與其他的框架不同的是，你可以把 Vue 和既有的 HTML 做整合，這讓你可以像使用插入性替換的函式庫一樣來使用 Vue ，就像使用 [JQuery](https://jquery.com/) 一樣。

除此之外，你也可以使用 Vue 來寫一個單頁式應用程式。這讓你可以完全使用 Vue 來建構網頁，當處理較複雜的應用時有較好的開發效率及體驗。 Vue 也有提供函式庫來做客戶端路由及狀態管理。 Vue 對客戶端路由及狀態管理這些工具採取中間立場的態度，雖然 Vue 的核心團隊推薦使用這些函式庫，但是這些函式庫沒有直接打包進 Vue，而是讓你可以自由選擇使用其他更適合你的應用的路由庫或狀態管理庫。

除了可以漸進地把 Vue 整合到應用程式裡， Vue 也提供了漸進式的方法來撰寫網頁內容。就像大部分的框架， Vue 讓你創造可以重複使用的網頁內容區塊（稱為元件）。大部分時候， Vue 元件是用一種特殊的 HTML 樣板語法寫成的，然而在一些場景使用 HTML 語法會有限制時，你可以使用 JSX 或是 Javascript 函式來定義你的元件。

當你閱讀這份教程時，你可以在其他分頁打開 [Vue 指南](https://vuejs.org/v2/guide/) 以及 [API 文件](https://vuejs.org/v2/api/)，以方便參考更多資訊。
如果你想要找一份好的（可能有些偏見）文件探討 Vue 與其他框架的比較，請參見 [Vue 指南：對比其他框架](https://vuejs.org/v2/guide/comparison.html)。

## 安裝

如果要在既有的專案中使用 Vue ，你可以把以下任一個 [`<script>`](/zh-TW/docs/Web/HTML/Reference/Elements/script) 標籤加到你的頁面中，這樣你就可以開始在專案中使用 Vue ，這也是為什麼 Vue 宣稱自己是一個漸進式的框架。它提供了一個很好的機會，你可以把一些使用函式庫（像是 JQuery ）的專案轉變成使用 Vue ，如此一來，你就可以使用很多 Vue 的核心功能，像是屬性、客製化元件以及資料管理。

- 開發環境版本（非優化版本，包含了有幫助的命令列警告。適合開發階段）

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

- 產品環境版本（優化版本，輕量化的命令列警告。我們建議你標明使用特定的版本號來引入 Vue，以避免新版本造成不可預期的破壞）

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  ```

然而，以上方法有一些限制。若要建置一些較複雜的應用程式，你將需要使用 [Vue NPM 套件](https://www.npmjs.com/package/vue)。 這讓你可以使用 Vue 的進階功能且可以使用打包器像是 WebPack。為了讓使用 Vue 建置應用程式變得更容易，可以使用 CLI 來精簡化開發流程。如果要使用 npm 套件 & CLI ，你將需要：

1. 安裝 Node.js 8.11+
2. npm 或 yarn

> [!NOTE]
> 如果你沒有安裝以上工具，請參考[關於安裝 npm 及 Node.js](/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#adding_powerups) 。

在你的終端機執行以下命令來安裝 CLI ：

```bash
npm install --global @vue/cli
```

或者你比較喜歡使用 yarn ：

```bash
yarn global add @vue/cli
```

安裝完 CLI 後，在你想要創建專案的資料夾內開啟終端機然後執行 `vue create <project-name>` 來初始化專案。 CLI 將會給你一連串專案組態，有些設定有預設值，而你可以更改成你自己的設定。這些選項讓你可以在專案裡配置 TypeScript 、 linting 、 vue-router 、 Testing 等等。

之後我們會介紹如何使用它。

## 初始化一個新專案

為了探索 Vue 各式各樣的功能，我們將會製作一個待辦事項應用程式。我們將使用 Vue CLI 來創造一個新專案框架來建構我們的應用程式。請跟著以下步驟：

1. 在終端機 `cd` 切換到你想要創建應用程式的資料夾，然後執行 `vue create moz-todo-vue`。
2. 使用方向鍵以及 <kbd>Enter</kbd> 鍵，選擇「Manually select features」

3. 第一個呈現在你眼前的選單讓你選擇想要加入到專案的功能。確認「Babel」和「Linter / Formatter」都已選取。如果沒有的話，使用方向鍵及空白鍵來切換選取，當它們都已被選取，按下 <kbd>Enter</kbd> 鍵進行下一步。

4. 接下來，你要選擇 linter / formatter 的設定。切換到「Eslint with error prevention only」然後按下 <kbd>Enter</kbd>。這個設定會進行報錯提醒，但不會強制你修改。

5. 然後，你將會被詢問需要哪種自動化的 linting 設定。選擇「Lint on save」。這樣每當我們儲存專案檔案時，就會自動幫我們檢查錯誤。按下 <kbd>Enter</kbd> 鍵進行下一步。

6. 現在，你將要選擇如何管理你的組態檔案。「In dedicated config files」將會把你的組態設定放在專門的檔案裡，像是 ESLint 的組態設定會放在它們專門的檔案裡。「In package.json」，會把你的組態設定放在應用程式的 `package.json` 檔案裡。選擇「In dedicated config files」然後按下 <kbd>Enter</kbd>。

7. 最後，你將會被問到是否要將以上設定存為預設值。你可以自行決定，如果未來想要再使用這組設定，請按下 <kbd>y</kbd>，否則按 <kbd>n</kbd> 。

CLI 會開始建構你的專案，並且安裝所需的相依套件。

如果你之前沒有執行過 Vue CLI ，你將會被問一個問題－請選擇套件管理員。你可以使用方向鍵來選擇你想使用的套件管理員，Vue CLI 將會把這個套件管理員設為預設值。之後如果你想要使用不同的套件管理員，可以在執行 `vue create` 時傳入一個標幟 `--packageManager=<package-manager>` 。舉例來說，如果你現在想要用 npm 來創建 `moz-todo-vue` 專案，但是之前是使用 yarn ，你可以執行 `vue create moz-todo-vue --packageManager=npm` 。

> [!NOTE]
> 在這裡我們沒有介紹所有的選項，你可以參考 Vue 官方文件裡的[關於 CLI 的更多資訊](https://cli.vuejs.org)。

## 專案結構

如果以上都執行成功的話， CLI 將會為你的專案創建一連串的檔案和資料夾。其中最重要的如下：

- `.eslintrc.js` ：這是 [eslint](https://eslint.org/) 的組態檔案，你可以使用它來管理你的 linting 規則。
- `babel.config.js` ：這是 [Babel](https://babeljs.io/) 的組態檔案，在開發階段我們可以使用一些 Javascript 的新功能，透過這個檔案轉換成在產品環境可以跨瀏覽器運行的舊版語法。你也可以在這個檔案裡註冊額外的 babel 套件。
- `.browserslistrc` ：這是 [Browserslist](https://github.com/browserslist/browserslist) 的組態檔案。你可以透過它來控制需要對哪些瀏覽器進行支持與優化
- `public` ：這個資料夾包含了所有發布的靜態檔案，這些檔案在建置過程不會經過 [Webpack](https://webpack.js.org/) 加工。（但是有一個例外： `index.html` 會有一些處理）。
  - `favicon.ico` ：這是應用程式的 favicon。目前是 Vue 的標誌。
  - `index.html` ：這是應用程式的模板。你的 Vue 應用程式會透過這個 HTML 頁面來運行，你也可以使用 lodash 樣板語言在這個頁面穿插一些值。

    > [!NOTE]
    > 這個模板不是用來管理你的應用程式的版面－而是用來管理應用程式以外的靜態 HTML 檔案，只有在使用一些進階的功能才需要修改這個檔案。

- `src` ：這個資料夾是 Vue 專案的核心。
  - `main.js` ：這是應用程式的進入點。目前，這個檔案會初始化你的 Vue 應用程式並定義要將應用掛載到 `index.html` 檔案中的哪個 HTML 元素。通常還會在這個檔案註冊全域性元件或載入其他 Vue 函式庫。
  - `App.vue` ：這是 Vue 應用程式的根節點元件。往下看可以了解更多關於 Vue 元件的說明。
  - `components` ：你可以把你的元件放在這個資料夾。目前它只有放一個範例元件。
  - `assets` ：這個資料夾是用來放一些靜態檔案像是 CSS 和圖片。因為這些檔案在來源目錄下，它們可以透過 Webpack 加工處理。這表示你可以使用一些預處理器，像是 [Sass / SCSS](https://sass-lang.com/) 或是 [Stylus](https://stylus-lang.com/) 。

> [!NOTE]
> 依據你創建專案時所選設定的不同，你可能會看到其他資料夾（舉例來說，如果你有選擇 router，你將會看到一個 `views` 資料夾）。

## .vue 檔案（單一檔案元件）

就像很多其他的框架一樣，元件是建構應用程式中很重要的一部分。這些元件讓你可以把一個很大的應用程式拆分成獨立的區塊，這些區塊可以分別被創建和管理，而且彼此之間可以傳遞所需要的資料。這些小區塊程式碼讓人更容易理解及測試。

雖然有些框架鼓勵你把模板、邏輯和樣式的程式碼放在不同的檔案，但是 Vue 卻採取相反的策略。使用[單一檔案元件](https://vuejs.org/v2/guide/single-file-components.html)時， Vue 讓你把模板、相關指令碼和 CSS 整合在一起放在以 `.vue` 結尾的檔案裡。這些檔案會被 JS 的打包工具（像是 Webpack ）加以處理，這也代表你可以在你的專案裡使用一些建置工具，像是 Babel 、 TypeScript 、 SCSS 等工具來創造更複雜的元件。

使用 Vue CLI 創建的專案會產生現成的 `.vue` 檔案以及 Webpack 。看一下我們使用 CLI 創建的專案，在 `src` 資料夾會看到你的第一個 `.vue` 檔案： `App.vue` 。

現在讓我們來探索。

### App.vue

打開 `App.vue` 檔案——你將會看到它由三個部分組成： `<template>` 、 `<script>` 以及 `<style>` ，分別包含了元件的模板、指令碼和樣式資訊。所有的單一檔案元件都是使用這種基本架構。

`<template>` 包含所有的標記結構以及元件的呈現邏輯。你的模板可以包含任何有效的 HTML，以及一些我們接下來要介紹的 Vue 特定的語法。

> [!NOTE]
> 在 `<template>` 標籤上設定 `lang` 屬性。例如設置 `<template lang="pug">`，你就可以使用 Pug 樣板語法來取代標準的 HTML 。在本教學中我們會使用標準 HTML ，但還是值得知道有這個方法。

`<script>` 包含元件中所有非顯示的邏輯。最重要的是，你的 `<script>` 標籤必須輸出一個 JS 物件。這個物件是你在本地端註冊的元件，包含定義屬性、處理本地狀態、定義方法等等。在建置步驟這個物件會被處理及轉換（包含 template 模板），變成一個有 `render()` 函數的 Vue 元件。

以 `App.vue` 為例，我們設定元件的名稱為 `App` ，並且在 `components` 屬性中加入 `HelloWorld` 來註冊這個元件。以這種方式來註冊元件是本地註冊。本地註冊的元件只能在註冊它們的元件裡面使用，所以你需要在每個使用它們的元件檔案裡匯入並且註冊它們。這對於 bundle splitting/tree shaking 很有用，因為在應用程式裡不是每一頁都需要所有的元件。

```js
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // 你可以在這裡註冊元件
    HelloWorld,
  },
};
```

> [!NOTE]
> 如果你想要使用 [TypeScript](https://www.typescriptlang.org/) 語法，你必須把 `<script>` 標籤的 `lang` 屬性設定成 `<script lang="ts">` 來告訴編譯器你要使用 TypeScript 。

`<style>` 是你撰寫元件的 CSS 的地方。如果你加上 `scoped` 屬性，例如 `<style scoped>` ， Vue 會把樣式的範圍限制在這個單一檔案元件裡。這類似 CSS-in-JS 的解決方案，但是它允許你寫單純的 CSS 。

> [!NOTE]
> 如果你在使用 CLI 創建專案時有選擇 CSS 預處理器，你可以在 `<style>` 標籤上添加 `lang` 屬性，這些內容在建置的時候將會被 Webpack 處理。舉例來說， `<style lang="scss">` 允許你在樣式資訊中使用 SCSS 語法。

## 在本地端運行應用程式

Vue CLI 有內建的程式開發伺服器。這讓你可以在本地端運行你的應用程式，你不需要自己設置一個伺服器就可以很輕鬆地測試它。 CLI 有添加一個 `serve` 命令在專案的 `package.json` 檔案中當成一個 npm script ，所以你可以很輕易的運行它。

在你的終端機執行 `npm run serve`（或 `yarn serve` 如果你比較喜歡使用 yarn ）。你的終端機會輸出類似以下的資訊：

```plain
INFO  Starting development server...
98% after emitting CopyPlugin

 DONE  Compiled successfully in 18121ms

  App running at:
  - Local:   <http://localhost:8080/>
  - Network: <http://192.168.1.9:8080/>

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

如果你在瀏覽器的新分頁開啟「本地」位址（如上所述，這串位址應該會類似 `http://localhost:8080` ，但可能因設置而異），你應該會看到你的應用程式。現在，它應該包含一個歡迎訊息、一個導向 Vue 文件的連結、使用 CLI 初始化應用程式時所添加的套件的連結、以及一些導向 Vue 社群及生態圈的有用連結。

![default vue app render, with vue logo, welcome message, and some documentation links](vue-default-app.png)

## 做一些改變

現在讓我們來對應用程式做一些改變——刪除 Vue logo 。打開 `App.vue` 檔案，從 template 區塊刪除 [`<img>`](/zh-TW/docs/Web/HTML/Reference/Elements/img) 元素：

```html
<img alt="Vue logo" src="./assets/logo.png" />
```

如果你的伺服器仍在正常運行，你應該可以看到 logo 幾乎即時地從渲染頁面裡移除。接下來，我們再把 `HelloWorld` 從模板裡移除。

首先刪除以下這行：

```html
<HelloWorld msg="Welcome to Your Vue.js App" />
```

這時如果你儲存 `App.vue` 檔案，渲染的應用程式會拋出一個錯誤，因為我們註冊了元件但是沒有使用它。所以我們必須移除在 `<script>` 元素裡面用來匯入及註冊元件的程式碼：

現在刪除以下這幾行：

```js
import HelloWorld from "./components/HelloWorld.vue";
```

```js
components: {
  HelloWorld;
}
```

渲染好的應用程式應該不再顯示錯誤了，只有一個空白的頁面，因為目前在 `<template>` 沒有可見的內容。

我們接下來要製作一個待辦清單應用程式，在 `<div id="app">` 裡面加一個新的 `<h1>` ，並將標題文字設定為「 To-Do List 」。參考如下：

```html
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` 將會如預期地展示標題。

## 總結

讓我們現在暫時告一個段落。我們學習了 Vue 背後的一些想法，創建應用架構並使我們的範例應用可以在其運行，檢查它，並且對它做一些初步的改變。

在進行基本介紹之前，我們將進一步建構我們的範例應用，一個基本的待辦應用程式，它讓我們儲存待辦事項，在已完成的事項上打勾，以及依事項完成 /未完成狀態來過濾列表。

在下一篇文章中，我們將會建立第一個客製元件，研究一些重要的概念，像是透過 props 傳遞資料及儲存它的資料狀態。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
