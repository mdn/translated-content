---
title: Svelte 入門
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

此篇文章我們將摘要說明 [Svelte 框架](https://svelte.dev/)。我們將會看到 Svelte 如何運作，以及它與其它框架和工具的不同之處。接著我們將學習如何設置我們的開發環境並建立一個範例應用程式，了解其專案結構及如何在本地運行，最後可以將其建置於正式環境。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        <p>
          推薦你至少需熟悉基本的
          <a href="/zh-TW/docs/Learn/HTML">HTML</a>、
          <a href="/zh-TW/docs/Learn/CSS">CSS</a> 與
          <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a>
          等程式語言且具備<a
            href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >終端機/命令列環境</a
          >基本知識。
        </p>
        <p>
          Svelte 為一個編譯器，從我們的來源去產生出最小且高度優化的 JavaScript 程式碼；你將會需要一個安裝了 node 和 npm 的終端機來編譯和建置你的應用程式。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        設置 Svelte 本地開發環境，建立初始應用程式並瞭解 Svelte 基本運作方式。
      </td>
    </tr>
  </tbody>
</table>

## Svelte：一種建構豐富使用者介面的新方式

於此模組中介紹的其它框架相比，Svelte 提供了一種不同的方式來建構網站應用程式。當應用程式運行時，像 React 和 Vue 等框架會在使用者的瀏覽器直接做它們想要做的事情，而 Svelte 則是將做的這些事移到編譯階段處理，因此那些做的事情只會發生在你建置應用程式的時候，進而能產生高度優化的原生 JavaScript 程式碼。

這種方式產生的結果並不是只有將應用程式的包裹最小化及取得最佳效能，對於現代的生態環境而擁有較少技術經驗的人，可以更容易取得開發者經驗。

Svelte 更貼近傳統的網站開發模型（HTML、CSS、JS），它只有對 HTML 和 JavaScript 加上一些擴充，與其它框架相比，可以說只需要一點點概念和工具就能學習。

現階段的缺點只因它目前仍在發展中——和其它成熟框架相比它的生態環境較受限於工具、支援、套件、使用模式等等限制，工作機會也比較少。但它的優點應該足夠讓你感興趣並去探索它。

> **備註：** 最近 Svelte 已經正式加入 [TypeScript 支援](https://svelte.dev/blog/svelte-and-typescript)，這也是最受歡迎的功能之一，我們將在之後的教學系列中看到它。

我們鼓勵你走完 [Svelte 教學](https://svelte.dev/tutorial/basics)來快速了解基本的概念，在你回來此教學系列學習如何建構一些更深入的東西之前。它應該會花費你約 30 分鐘去完成。

## 使用案例

Svelte 可以被用來開發一小塊介面或整個應用程式。你也可以從頭開始來讓 Svelte 驅動你的使用者介面或將它漸進地整合至已存在的應用程式。

不過 Svelte 特別適合處理下列幾種情況：

- 讓網站應用程式更適用於低功耗裝置：使用 Svelte 建構應用程式將擁有較小的包裹大小，特別對於網路連線緩慢和有限處理能力的裝置是理想的。較少的程式碼意謂著較少的容量可供下載、解析、執行並保存於記憶體中。
- 可應付需頻繁互動的頁面或複雜的視覺化需求：比如你建構一個資料視覺化應用程式，你可能會需要顯示大量的 DOM 元素，從該框架就能獲得較好的性能增益，因為它不會有運行途中的消耗，將可以確保使用者的互動更快速與即時。
- 具備基本的網站開發知識即可：Svelte 學習曲線不高。網站開發人員具備基本的 HTML、CSS、JavaScript 知識就能在短時間簡單地抓住 Svelte 要點並開始建構網站應用程式。

此外，有了 [Sapper](https://sapper.svelte.dev/)（此框架基於 Svelte）的幫忙，你將能夠開發出帶有這些進階特徵的應用程式，像是伺服器端渲染（server-side rendering）、程式碼分離（code splitting）、以檔案為基礎的路由方式（file-based routing）、離線應用（offline）等支援。還有 [Svelte Native](https://svelte-native.technology/) 讓你能夠建構原生行動應用程式。

## Svelte 如何工作？

作為一個編譯器，Svelte 能擴展 HTML、CSS、JavaScript，產生最佳的 JavaScript 程式碼而不會有任何運行途中的消耗。為了達成這件事，Svelte 透過下列方法來擴展其原生網站技術：

- 藉由對 HTML 擴展允許標記 JavaScript 表達式和提供一些指令來使用條件和迴圈，做法和 handlebars 相似。
- 藉由對 CSS 擴展加上範圍機制，允許每個元件去定義它們自己的樣式，不會因為其它元件的樣式改變而被影響。
- 藉由對 JavaScript 擴展重新詮釋語言的一些特定指令來達到真實的反應性和減輕元件狀態管理。

只有在非常特殊的情況和 Svelte 元件的上下文中編譯器才會介入。其中對 JavaScript 的擴展相對也比較少且謹慎，就是為了不破壞 JavaScript 一些語法，而使開發人員覺得困惑。事實上，你大部分時間還是會用到原生 JavaScript 來開發。

## Svelte 第一步

既然 Svelte 是一個編譯器，你不能只是把 `<script src="svelte.js">` 標籤加入到你的頁面並載入它到你的應用程式。你將必須設置你的開發環境，為的是能讓編譯器可以做它要做的事情。

### 需求

為了使用 Svelte，你會需要安裝 [Node.js](https://nodejs.org/en/)。推薦你使用長期支援版本（LTS）。Node 包含 npm（the node package manager）和 npx（the node package runner）。另外你也可以使用 Yarn 套件管理工具來代替 npm，但我們先假定你會用 npm 來走完這個教學系列。若想知道更多 npm 和 yarn 的相關資訊可以至[基礎套件管理](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)了解。

如果你是使用 Windows 的話，你將會需要安裝一些軟體來達到和 Unix/macOS 作業系統使用終端機一樣的行為，為的是接下來走教學系列時，可以使用到一些被提及的終端機指令。Gitbash（[適用於 Windows 的 git 工具集](https://gitforwindows.org/)中的一部分功能）或使用[適用於 Linux 的 Windows 子系統（WSL）](https://docs.microsoft.com/zh-TW/windows/wsl/about)，這些都是蠻合適的解決方案。若想知道更多命令列的相關資訊可以至[命令列課程](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)了解。

若想知道更多相關資訊也可以至下列去閱讀：

- 可以至 nodejs.org 了解[「什麼是 npm？」](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- 可以至 npm 部落格了解[「介紹 npx」](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- 可以至 Svelte 部落格了解[「以最簡單的方式來開始 Svelte」](https://svelte.dev/blog/the-easiest-way-to-get-started)

### 建構你第一個 Svelte 應用程式

最簡單的方式就是使用入門範本來建構初始應用程式。你可以至 [sveltejs/template](https://github.com/sveltejs/template) 下載並解壓縮出入門範本或者使用 [degit](https://github.com/Rich-Harris/degit) 來做這件事。

為了建構你第一個入門範本應用程式，請先執行下列終端機指令：

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> **備註：** 不用太驚訝 degit 做了這麼多事情——它其實就只是讓你可以從 git 儲存庫下載和解壓縮最新版本的內容。使用它比起使用 `git clone` 更快能達到我們的目的，因為它並不會下載整個儲存庫的歷史以及不會複製一份放在本機端。

之後執行 `npm run dev`，Svelte 將會編譯和建構你的應用程式。它將會跑在本機 `localhost:8080` 位址。當你對來源檔案做了異動，Svelte 將會偵測到檔案更新並自動地重新編譯和刷新你的應用程式。你的瀏覽器將會顯示如下圖：

![A simple start page that says hello world, and gives a link to the official svelte tutorials](01-svelte-starter-app.png)

### 應用程式結構

入門範本有下列結構：

```plain
moz-todo-svelte
├── README.md
├── package.json
├── package-lock.json
├── rollup.config.js
├── .gitignore
├── node_modules
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── global.css
│   └── build
│       ├── bundle.css
│       ├── bundle.js
│       └── bundle.js.map
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte
    └── main.js
```

內容解釋如下：

- `package.json` 和 `package-lock.json`：Node.js/npm 用它來組織化管理你的專案，相關資訊可以在這邊找到。在這個教學系列中，你不需要完全了解這個檔案，但如果你想要學習更多的話，你可以至 NodeJS.org 閱讀[什麼是 `package.json` 檔案](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)？我們在[基礎套件管理教學系列](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)也有談到。
- `node_modules`：這裡是 node 存放專案相依套件的地方。這些相依套件在正式環境不會看到，只有開發時才會被使用到。
- `.gitignore`：告訴 git 有哪些檔案或資料夾不要納入專案版本控制——透過它可以決定哪些檔案要納入專案版本控制，還蠻實用的！
- `rollup.config.js`：Svelte 使用 [rollup.js](https://rollupjs.org/) 做為模組包裝工具。這個組態檔案告訴 rollup 如何編譯和建構你的應用程式。假如你偏好使用 [webpack](https://webpack.js.org/)，你可以改執行 `npx degit sveltejs/template-webpack svelte-app` 來建構你的初始應用程式。
- `scripts`：包含所需的設置腳本。現在應該只有 `setupTypeScript.js`。

  - `setupTypeScript.js`：此腳本用來支援 Svelte 可以使用 TypeScript。我們將在之後的文章談到更多。

- `src`：這個目錄主要放你應用程式的來源程式碼——你寫的程式碼基本都會放在這。

  - `App.svelte`：在你的應用程式中它是最高層級的元件。不過它現在只會渲染出「Hello World!」的訊息給你看。
  - `main.js`：我們應用程式的進入點。它會實例化 `App` 元件並將其綁定至我們 HTML 頁面的 body 上。

- `public`：這個目錄包含所有我們會釋出於正式環境的檔案。

  - `favicon.png`：這個是你應用程式的 favicon。現在應該會是 Svelte 的標誌。
  - `index.html`：這個是你應用程式的主要頁面。最初為一個空的 HTML5 頁面，接著會載入由 Svelte 產生的 CSS 檔案和 js 包裹。
  - `global.css`：這個檔案包含沒有範圍限制的樣式。這是一個正規的 CSS 檔案，將會套用至整個應用程式。
  - `build`：這個資料夾會包含那些被產生的 CSS 和 JavaScript 來源程式碼。

    - `bundle.css`：所有定義於你個別元件中的樣式，都會被 Svelte 產生至這個 CSS 檔案中。
    - `bundle.js`：所有你的 JavaScript 來源程式碼都會被編譯至這個 JavaScript 檔案中。

## 讓我們來看看第一個 Svelte 元件

元件是 Svelte 應用程式建構的基礎。使用 HTML 的超集合將它們寫至 `.svelte` 檔案中。

全部有三個區塊—— `<script>`，`<styles>` 和標記（markup）區塊——各區塊存在與否由你決定，也沒限制區塊存放的順序。

```html
<script>
  // 邏輯放這
</script>

<style>
  /* 樣式放這 */
</style>

<!-- 標記（零或多個HTML元素）放這 -->
```

> **備註：** 更多元件格式的資訊，可以至 [Svelte 文件](https://svelte.dev/docs#Component_format)閱讀。

接著我們來看入門範本中的 `src/App.svelte` 檔案，你應該會看到以下內容：

```html
<script>
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

### `<script>` 區塊

`<script>` 區塊包含元件實例被建構時運行的 JavaScript。元件標記區塊則可以使用頂層那些被宣告或載入的變數。頂層變數是 Svelte 預設用來處理元件狀態和互動使用。我們之後會解釋更多細節來說明這代表什麼意思。

```html
<script>
  export let name;
</script>
```

Svelte 使用 [`export`](/zh-TW/docs/Web/JavaScript/Reference/Statements/export) 關鍵字將變數宣告標記為屬性，代表這個屬性可以被外部其它元件存取。這是 Svelte 擴展 JavaScript 語法讓其更有用且使用上如同以往的其中一個例子。

### 標記區塊

標記區塊中你可以插入任何你想要的 HTML，另外你也可以插入有效的 JavaScript 表達式在大括號（`{}`）中。此例中我們嵌入 `name` 屬性值在 `Hello` 文字的右邊。

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte 也支援一些標籤，像是 `{#if...}`，`{#each...}` 和 `{#await...}` ——分別允許你可以條件式渲染部分標記區塊，迭代清單元素與處理非同步數值。

### `<style>` 區塊

假如你有寫過一些 CSS，下面這段應該不會太陌生：

```html
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

我們現在對 [`<h1>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements) 元素套用了一些樣式。對於其它元件中的 `<h1>` 元素們將會有什麼影響呢？

在 Svelte 中，CSS 在元件 `<style>` 區塊中且被侷限於該元件範圍之內。這是透過對所選的元素加上一個類別來實現，而這個類別則會是基於元件樣式的雜湊值。

你可以觀察到這個現象，藉由在瀏覽器開一個新標籤至 `localhost:8080` 位址，對 _HELLO WORLD!_ 標籤右鍵／<kbd>Ctrl</kbd> 點選並選擇*檢查*：

![Svelte starter app with devtools open, showing classes for scoped styles](02-svelte-component-scoped-styles.png)

編譯應用程式時，Svelte 會改變我們 `h1` 的樣式定義為 `h1.svelte-1tky8bj` 並更改每一個在此元件中的 `<h1>` 元素為 `<h1 class="svelte-1tky8bj">`，如此就能讓該元件取得所需的樣式。

> **備註：** 你也可以使用 `:global(...)` 修飾符覆寫此行為並且套用樣式至全域選擇器上（可以至 [Svelte `<style>` 文件](https://svelte.dev/docs#style)閱讀更多資訊）。

## 做一些小改變

現在我們大致知道它是如何協同工作之後，接著可以來做一些小改變。
你可以嘗試更新你的 `App.svelte` 元件——例如將 `App.svelte` 第 6 行位置的 `<h1>` 元素內容變更如下：

```html
<h1>Hello {name} from MDN!</h1>
```

只要儲存檔案之後，跑在 `localhost:8080` 位址的應用程式將會自動地被更新。

### 初見 Svelte 反應性

在使用者介面框架當中，反應性意謂著當任何元件的狀態被改變時，框架能夠自動地更新 DOM。

在 Svelte 中，藉由在元件指定新數值給任何頂層變數來觸發反應性。舉個例子，我們可以在 `App` 元件中寫一個 `toggleName()` 方法並透過一個按鈕來觸發它。

嘗試更新你的 `<script>` 和標記區塊如下：

```html
<script>
  export let name;

  function toggleName() {
    if (name === "world") {
      name = "svelte";
    } else {
      name = "world";
    }
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click="{toggleName}">Toggle name</button>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

每當按鈕被點擊，Svelte 會執行 `toggleName()` 方法並更新 `name` 變數數值。

你可以看到 `<h1>` 標籤已經自動地被更新。每當 name 變數數值改變時，Svelte 就會在背後建立一些 JavaScript 程式碼來更新 DOM，而沒有使用到任何 virtual DOM 或複雜的協調機制。

注意在 `on:click` 使用的 `:`。這是 Svelte 用於 DOM 事件監聽的語法。

## 檢視 main.js：我們應用程式的進入點

讓我們打開 `src/main.js`，它會告訴你 `App` 元件是從哪裡載入並使用。這個檔案是我們應用程式的進入點，一開始會看起來如下內容：

```js
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
```

`main.js` 一開始就會把我們預計要使用的 Svelte 元件載入。然後於第 3 行位置會傳入選項物件並實例化它：

- `target`：決定我們想要把元件渲染在哪一個 DOM 元素上，此例為 `<body>` 元素。
- `props`：指定數值給 `App` 元件中的每一個屬性。

## 葫蘆裡賣什麼藥？

Svelte 是如何很好地讓所有檔案協同工作？

Svelte 編譯器處理每一個元件的 `<style>` 區塊並編譯它們至 `public/build/bundle.css` 檔案中。

它也編譯每一個元件的標記和 `<script>` 區塊並把結果儲存至 `public/build/bundle.js`。它也會加上一些程式碼到 `src/main.js` 以參考每一個元件的功能。

最後 `public/index.html` 檔案會引入那些被產生的 `bundle.css` 和 `bundle.js` 檔案：

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Svelte app</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/build/bundle.css" />

    <script defer src="/build/bundle.js"></script>
  </head>

  <body></body>
</html>
```

`bundle.js` 的壓縮版本容量大概 3KB 多一點，其中包含「Svelte 執行環境」（約 300 行 JavaScript 程式碼）和被編譯後的 `App.svelte` 元件。你可以看到，`bundle.js` 是唯一一個被 `index.html` 參考的 JavaScript 檔案。沒有其它函式庫被載入至網頁中。

比起其它框架編譯後的包裹要小的多。考慮到程式碼包裹這件事，不僅僅是你需下載檔案的大小。包含那些需要被解析、執行並保存於記憶體中的可執行程式碼。所以確實有蠻大的不同，特別是低功耗裝置或 CPU 密集型應用程式。

## 跟著這個教學系列

在這個教學系列你將建構一個完整的網站應用程式。我們將學習有關 Svelte 的所有基礎，以及一些進階課題。

你可以只閱讀內容來充分了解 Svelte 的一些功能，但如果你跟著我們一起撰寫應用程式，將可以從本教學系列獲得最大收益。為了讓你可以更簡單跟著每一篇文章做，我們提供了一個 GitHub 儲存庫並以資料夾分隔出每一個教學系列開頭需要的應用程式來源程式碼。

Svelte 也提供了一個線上 REPL，它是在網站上用於即時撰寫 Svelte 應用程式的一個遊樂場，而不用安裝任何東西在你的機器上。我們在每一篇文章都有提供 REPL，所以你可以立即撰寫程式碼。接著談一談如何使用這些工具。

### 使用 Git

最受歡迎的版本控制系統是 Git 以及 GitHub，網站提供了你的儲存庫託管和多種與它協作的工具。

我們將會使用 GitHub，所以你可以在每一篇文章輕易地下載到來源程式碼。不用擔心你錯過了什麼，因為你將能夠取得這些於每一篇文章欲完成的程式碼內容。

[安裝 git](https://git-scm.com/downloads) 之後，為了複製儲存庫你應該執行下列指令：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

接著在開始閱讀每一篇文章前，你可以 `cd` 至對應資料夾並將應用程式以開發模式運行確認其當前狀態為何，像是如下列指令：

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

假如你想要學習更多關於 git 和 GitHub，我們已經有整理一些有幫助的連結清單至指南——看看 [Git 和 GitHub](/zh-TW/docs/Learn/Tools_and_testing/GitHub)。

> **備註：** 假如你只是想要下載檔案而不是複製 git 儲存庫，你可以使用 degit 工具像是這樣—— `npx degit opensas/mdn-svelte-tutorial`。你也可以用 `npx degit opensas/mdn-svelte-tutorial/01-getting-started` 來下載特定資料夾。Degit 將不會建立本地 git 儲存庫，它將只下載特定資料夾下的檔案們。

### 使用 Svelte REPL

REPL（[read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)）是一個互動式環境，允許你輸入一些指令並能立即看到結果——大部分的程式語言都有提供 REPL。

Svelte 的 REPL 功能卻不只如此。它是一個線上工具，允許你建構一個完整的應用程式並儲存它們於線上，也能分享給其他人。

它是最簡單可以在任何機器上開始體驗 Svelte 的方式，而不需要安裝任何東西。它也廣泛地被 Svelte 社群所使用。假如你想要分享一些想法、尋求幫助或回報問題，建立一個 REPL 來演示問題總是有幫助的。

讓我們快速看一下 Svelte REPL 和你應該怎麼去使用它。它看起來像：

![the svelte repl in action, showing component code on the left, and output on the right](03-svelte-repl-in-action.png)

為了開始使用 REPL，打開你的瀏覽器並至 <https://svelte.dev/repl>。

- 螢幕左邊你將可以看到你元件們的程式碼，螢幕右邊你將可以看到你應用程式的執行輸出。
- 程式碼上方的列讓你可以建立 `.svelte` 和 `.js` 檔案，也能重新排列它們。為了將檔案建立在資料夾中，你只要輸入完整的路徑名稱—— `components/MyComponent.svelte`。資料夾將自動地被建立。
- 更上方的列有你 REPL 的標題。點擊可以編輯它。
- 右邊有三個標籤：

  - _Result_ 標籤內會顯示你應用程式的輸出，底下也有提供控制台。
  - _JS output_ 標籤內會讓你檢查被 Svelte 產生的 JavaScript 程式碼並可以設定編譯器選項。
  - _CSS output_ 標籤內會顯示被 Svelte 產生的 CSS。

- 這些標籤的上方，你將會找到一個工具列，讓你可以進入全螢幕模式和下載你的應用程式。假如你有登入 GitHub 帳號，你將能夠複製（fork）和儲存應用程式。透過點擊你 GitHub 的用戶概況並選取那些你已儲存的應用程式，將能夠看到所有你已儲存的 REPLs。

每當你在 REPL 改變任何檔案，Svelte 將會重新編譯應用程式並更新結果（Result）標籤。為了分享你的應用程式網址。舉個例子，這是運行我們完整應用程式的 REPL 連結：<https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>。

> **備註：** 可以注意一下在連結上怎麼標註 Svelte 的版本。當你在回報 Svelte 特定版本的問題時，這是很有幫助的。

我們將會在每一篇文章的開頭與結尾提供 REPL，所以你就能立刻和我們一起撰寫程式碼。

> **備註：** 不知何時 REPL 變得沒辦法適當地處理資料夾名稱。假如你是使用 REPL 來跟著教學系列，只需要將所有你的元件建立在根目錄即可。接著當你看到程式碼中的路徑時，舉例來說如果是 `import Todos from './components/Todos.svelte'`，只需要將它換成類似如 `import Todos from './Todos.svelte'` 即可。

## 到目前為止的程式碼

### Git

複製 Github 儲存庫（假如你還沒完成）如下：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

接著取得當前應用程式狀態，執行如下：

```bash
cd mdn-svelte-tutorial/01-getting-started
```

或直接下載資料夾內容如下：

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

記得執行 `npm install && npm run dev` 以開發模式來運行你的應用程式。

### REPL

為了使用 REPL 和我們一起撰寫程式碼，點擊如下連結：

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## 總結

這篇文章初步帶我們了解了 Svelte 的來龍去脈，包含如何安裝本地環境，建構起始應用程式以及它是如何協同工作。下一篇文章將開始建構我們第一個應用程式——一個待辦清單。在我們開始做之前，讓我們先回顧一下已經學到的那些東西。

在 Svelte 當中：

- 我們在每個元件中定義腳本、樣式、標記區塊於單一的 `.svelte` 檔案中。
- 透過 `export` 關鍵字來宣告元件屬性。
- 可以藉由載入對應的 `.svelte` 檔案來使用這些 Svelte 元件。
- 元件樣式有範圍限制，防止它們之間有衝突。
- 標記區塊中你可以包含任何 JavaScript 表達式，將它以大括號包起來。
- 元件中的頂層變數會構成其元件狀態。
- 當指定新數值給頂層變數時，將會觸發其反應性。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
