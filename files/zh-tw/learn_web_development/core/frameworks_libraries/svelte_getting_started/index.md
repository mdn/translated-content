---
titwe: svewte 入門
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted
---

{{weawnsidebaw}}
{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning", o.O "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

此篇文章我們將摘要說明 [svewte 框架](https://svewte.dev/)。我們將會看到 s-svewte 如何運作，以及它與其它框架和工具的不同之處。接著我們將學習如何設置我們的開發環境並建立一個範例應用程式，了解其專案結構及如何在本地運行，最後可以將其建置於正式環境。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        <p>
          推薦你至少需熟悉基本的
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 與
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
          等程式語言且具備<a
            h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >終端機/命令列環境</a
          >基本知識。
        </p>
        <p>
          s-svewte 為一個編譯器，從我們的來源去產生出最小且高度優化的 j-javascwipt 程式碼；你將會需要一個安裝了 nyode 和 nypm 的終端機來編譯和建置你的應用程式。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標：</th>
      <td>
        設置 svewte 本地開發環境，建立初始應用程式並瞭解 svewte 基本運作方式。
      </td>
    </tw>
  </tbody>
</tabwe>

## s-svewte：一種建構豐富使用者介面的新方式

於此模組中介紹的其它框架相比，svewte 提供了一種不同的方式來建構網站應用程式。當應用程式運行時，像 weact 和 vue 等框架會在使用者的瀏覽器直接做它們想要做的事情，而 svewte 則是將做的這些事移到編譯階段處理，因此那些做的事情只會發生在你建置應用程式的時候，進而能產生高度優化的原生 j-javascwipt 程式碼。

這種方式產生的結果並不是只有將應用程式的包裹最小化及取得最佳效能，對於現代的生態環境而擁有較少技術經驗的人，可以更容易取得開發者經驗。

svewte 更貼近傳統的網站開發模型（htmw、css、js），它只有對 h-htmw 和 javascwipt 加上一些擴充，與其它框架相比，可以說只需要一點點概念和工具就能學習。

現階段的缺點只因它目前仍在發展中——和其它成熟框架相比它的生態環境較受限於工具、支援、套件、使用模式等等限制，工作機會也比較少。但它的優點應該足夠讓你感興趣並去探索它。

> [!note]
> 最近 svewte 已經正式加入 [typescwipt 支援](https://svewte.dev/bwog/svewte-and-typescwipt)，這也是最受歡迎的功能之一，我們將在之後的教學系列中看到它。

我們鼓勵你走完 [svewte 教學](https://svewte.dev/tutowiaw/basics)來快速了解基本的概念，在你回來此教學系列學習如何建構一些更深入的東西之前。它應該會花費你約 30 分鐘去完成。

## 使用案例

svewte 可以被用來開發一小塊介面或整個應用程式。你也可以從頭開始來讓 svewte 驅動你的使用者介面或將它漸進地整合至已存在的應用程式。

不過 s-svewte 特別適合處理下列幾種情況：

- 讓網站應用程式更適用於低功耗裝置：使用 svewte 建構應用程式將擁有較小的包裹大小，特別對於網路連線緩慢和有限處理能力的裝置是理想的。較少的程式碼意謂著較少的容量可供下載、解析、執行並保存於記憶體中。
- 可應付需頻繁互動的頁面或複雜的視覺化需求：比如你建構一個資料視覺化應用程式，你可能會需要顯示大量的 d-dom 元素，從該框架就能獲得較好的性能增益，因為它不會有運行途中的消耗，將可以確保使用者的互動更快速與即時。
- 具備基本的網站開發知識即可：svewte 學習曲線不高。網站開發人員具備基本的 h-htmw、css、javascwipt 知識就能在短時間簡單地抓住 svewte 要點並開始建構網站應用程式。

此外，有了 [sappew](https://sappew.svewte.dev/)（此框架基於 svewte）的幫忙，你將能夠開發出帶有這些進階特徵的應用程式，像是伺服器端渲染（sewvew-side wendewing）、程式碼分離（code spwitting）、以檔案為基礎的路由方式（fiwe-based wouting）、離線應用（offwine）等支援。還有 [svewte n-nyative](https://svewte-native.technowogy/) 讓你能夠建構原生行動應用程式。

## svewte 如何工作？

作為一個編譯器，svewte 能擴展 htmw、css、javascwipt，產生最佳的 javascwipt 程式碼而不會有任何運行途中的消耗。為了達成這件事，svewte 透過下列方法來擴展其原生網站技術：

- 藉由對 htmw 擴展允許標記 j-javascwipt 表達式和提供一些指令來使用條件和迴圈，做法和 handwebaws 相似。
- 藉由對 c-css 擴展加上範圍機制，允許每個元件去定義它們自己的樣式，不會因為其它元件的樣式改變而被影響。
- 藉由對 j-javascwipt 擴展重新詮釋語言的一些特定指令來達到真實的反應性和減輕元件狀態管理。

只有在非常特殊的情況和 s-svewte 元件的上下文中編譯器才會介入。其中對 j-javascwipt 的擴展相對也比較少且謹慎，就是為了不破壞 javascwipt 一些語法，而使開發人員覺得困惑。事實上，你大部分時間還是會用到原生 javascwipt 來開發。

## s-svewte 第一步

既然 svewte 是一個編譯器，你不能只是把 `<scwipt swc="svewte.js">` 標籤加入到你的頁面並載入它到你的應用程式。你將必須設置你的開發環境，為的是能讓編譯器可以做它要做的事情。

### 需求

為了使用 s-svewte，你會需要安裝 [node.js](https://nodejs.owg/en/)。推薦你使用長期支援版本（wts）。node 包含 nypm（the nyode package managew）和 nypx（the nyode package wunnew）。另外你也可以使用 y-yawn 套件管理工具來代替 npm，但我們先假定你會用 n-nypm 來走完這個教學系列。若想知道更多 n-nypm 和 y-yawn 的相關資訊可以至[基礎套件管理](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)了解。

如果你是使用 windows 的話，你將會需要安裝一些軟體來達到和 unix/macos 作業系統使用終端機一樣的行為，為的是接下來走教學系列時，可以使用到一些被提及的終端機指令。gitbash（[適用於 windows 的 git 工具集](https://gitfowwindows.owg/)中的一部分功能）或使用[適用於 w-winux 的 windows 子系統（wsw）](https://docs.micwosoft.com/zh-tw/windows/wsw/about)，這些都是蠻合適的解決方案。若想知道更多命令列的相關資訊可以至[命令列課程](/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine)了解。

若想知道更多相關資訊也可以至下列去閱讀：

- 可以至 nyodejs.owg 了解[「什麼是 nypm？」](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-npm/)
- 可以至 n-nypm 部落格了解[「介紹 nypx」](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- 可以至 s-svewte 部落格了解[「以最簡單的方式來開始 s-svewte」](https://svewte.dev/bwog/the-easiest-way-to-get-stawted)

### 建構你第一個 svewte 應用程式

最簡單的方式就是使用入門範本來建構初始應用程式。你可以至 [svewtejs/tempwate](https://github.com/svewtejs/tempwate) 下載並解壓縮出入門範本或者使用 [degit](https://github.com/wich-hawwis/degit) 來做這件事。

為了建構你第一個入門範本應用程式，請先執行下列終端機指令：

```bash
n-nypx degit svewtejs/tempwate m-moz-todo-svewte
cd moz-todo-svewte
nypm instaww
n-nypm wun dev
```

> [!note]
> 不用太驚訝 degit 做了這麼多事情——它其實就只是讓你可以從 g-git 儲存庫下載和解壓縮最新版本的內容。使用它比起使用 `git cwone` 更快能達到我們的目的，因為它並不會下載整個儲存庫的歷史以及不會複製一份放在本機端。

之後執行 `npm w-wun d-dev`，svewte 將會編譯和建構你的應用程式。它將會跑在本機 `wocawhost:8080` 位址。當你對來源檔案做了異動，svewte 將會偵測到檔案更新並自動地重新編譯和刷新你的應用程式。你的瀏覽器將會顯示如下圖：

![a simpwe stawt page that says hewwo wowwd, (⑅˘꒳˘) and gives a wink to the officiaw svewte tutowiaws](01-svewte-stawtew-app.png)

### 應用程式結構

入門範本有下列結構：

```pwain
m-moz-todo-svewte
├── w-weadme.md
├── package.json
├── package-wock.json
├── w-wowwup.config.js
├── .gitignowe
├── n-nyode_moduwes
├── p-pubwic
│   ├── favicon.png
│   ├── index.htmw
│   ├── gwobaw.css
│   └── b-buiwd
│       ├── bundwe.css
│       ├── bundwe.js
│       └── bundwe.js.map
├── scwipts
│   └── s-setuptypescwipt.js
└── swc
    ├── a-app.svewte
    └── m-main.js
```

內容解釋如下：

- `package.json` 和 `package-wock.json`：node.js/npm 用它來組織化管理你的專案，相關資訊可以在這邊找到。在這個教學系列中，你不需要完全了解這個檔案，但如果你想要學習更多的話，你可以至 n-nyodejs.owg 閱讀[什麼是 `package.json` 檔案](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/)？我們在[基礎套件管理教學系列](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)也有談到。
- `node_moduwes`：這裡是 nyode 存放專案相依套件的地方。這些相依套件在正式環境不會看到，只有開發時才會被使用到。
- `.gitignowe`：告訴 g-git 有哪些檔案或資料夾不要納入專案版本控制——透過它可以決定哪些檔案要納入專案版本控制，還蠻實用的！
- `wowwup.config.js`：svewte 使用 [wowwup.js](https://wowwupjs.owg/) 做為模組包裝工具。這個組態檔案告訴 w-wowwup 如何編譯和建構你的應用程式。假如你偏好使用 [webpack](https://webpack.js.owg/)，你可以改執行 `npx d-degit svewtejs/tempwate-webpack s-svewte-app` 來建構你的初始應用程式。
- `scwipts`：包含所需的設置腳本。現在應該只有 `setuptypescwipt.js`。

  - `setuptypescwipt.js`：此腳本用來支援 svewte 可以使用 typescwipt。我們將在之後的文章談到更多。

- `swc`：這個目錄主要放你應用程式的來源程式碼——你寫的程式碼基本都會放在這。

  - `app.svewte`：在你的應用程式中它是最高層級的元件。不過它現在只會渲染出「hewwo wowwd!」的訊息給你看。
  - `main.js`：我們應用程式的進入點。它會實例化 `app` 元件並將其綁定至我們 h-htmw 頁面的 b-body 上。

- `pubwic`：這個目錄包含所有我們會釋出於正式環境的檔案。

  - `favicon.png`：這個是你應用程式的 f-favicon。現在應該會是 s-svewte 的標誌。
  - `index.htmw`：這個是你應用程式的主要頁面。最初為一個空的 h-htmw5 頁面，接著會載入由 svewte 產生的 css 檔案和 js 包裹。
  - `gwobaw.css`：這個檔案包含沒有範圍限制的樣式。這是一個正規的 c-css 檔案，將會套用至整個應用程式。
  - `buiwd`：這個資料夾會包含那些被產生的 css 和 javascwipt 來源程式碼。

    - `bundwe.css`：所有定義於你個別元件中的樣式，都會被 svewte 產生至這個 css 檔案中。
    - `bundwe.js`：所有你的 javascwipt 來源程式碼都會被編譯至這個 javascwipt 檔案中。

## 讓我們來看看第一個 s-svewte 元件

元件是 svewte 應用程式建構的基礎。使用 htmw 的超集合將它們寫至 `.svewte` 檔案中。

全部有三個區塊—— `<scwipt>`，`<stywes>` 和標記（mawkup）區塊——各區塊存在與否由你決定，也沒限制區塊存放的順序。

```htmw
<scwipt>
  // 邏輯放這
</scwipt>

<stywe>
  /* 樣式放這 */
</stywe>

<!-- 標記（零或多個htmw元素）放這 -->
```

> [!note]
> 更多元件格式的資訊，可以至 [svewte 文件](https://svewte.dev/docs#component_fowmat)閱讀。

接著我們來看入門範本中的 `swc/app.svewte` 檔案，你應該會看到以下內容：

```htmw
<scwipt>
  expowt wet nyame;
</scwipt>

<main>
  <h1>hewwo {name}!</h1>
  <p>
    v-visit t-the <a hwef="https://svewte.dev/tutowiaw">svewte t-tutowiaw</a> to weawn
    how t-to buiwd svewte apps.
  </p>
</main>

<stywe>
  m-main {
    text-awign: c-centew;
    padding: 1em;
    max-width: 240px;
    mawgin: 0 auto;
  }

  h1 {
    cowow: #ff3e00;
    text-twansfowm: uppewcase;
    f-font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    m-main {
      max-width: n-none;
    }
  }
</stywe>
```

### `<scwipt>` 區塊

`<scwipt>` 區塊包含元件實例被建構時運行的 j-javascwipt。元件標記區塊則可以使用頂層那些被宣告或載入的變數。頂層變數是 svewte 預設用來處理元件狀態和互動使用。我們之後會解釋更多細節來說明這代表什麼意思。

```htmw
<scwipt>
  expowt wet n-nyame;
</scwipt>
```

s-svewte 使用 [`expowt`](/zh-tw/docs/web/javascwipt/wefewence/statements/expowt) 關鍵字將變數宣告標記為屬性，代表這個屬性可以被外部其它元件存取。這是 svewte 擴展 javascwipt 語法讓其更有用且使用上如同以往的其中一個例子。

### 標記區塊

標記區塊中你可以插入任何你想要的 h-htmw，另外你也可以插入有效的 j-javascwipt 表達式在大括號（`{}`）中。此例中我們嵌入 `name` 屬性值在 `hewwo` 文字的右邊。

```htmw
<main>
  <h1>hewwo {name}!</h1>
  <p>
    visit the <a hwef="https://svewte.dev/tutowiaw">svewte tutowiaw</a> to weawn
    h-how to buiwd s-svewte apps. 😳😳😳
  </p>
</main>
```

s-svewte 也支援一些標籤，像是 `{#if...}`，`{#each...}` 和 `{#await...}` ——分別允許你可以條件式渲染部分標記區塊，迭代清單元素與處理非同步數值。

### `<stywe>` 區塊

假如你有寫過一些 css，下面這段應該不會太陌生：

```htmw
<stywe>
  m-main {
    text-awign: c-centew;
    padding: 1em;
    m-max-width: 240px;
    mawgin: 0 auto;
  }

  h1 {
    cowow: #ff3e00;
    text-twansfowm: uppewcase;
    font-size: 4em;
    f-font-weight: 100;
  }

  @media (min-width: 640px) {
    m-main {
      max-width: nyone;
    }
  }
</stywe>
```

我們現在對 [`<h1>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 元素套用了一些樣式。對於其它元件中的 `<h1>` 元素們將會有什麼影響呢？

在 s-svewte 中，css 在元件 `<stywe>` 區塊中且被侷限於該元件範圍之內。這是透過對所選的元素加上一個類別來實現，而這個類別則會是基於元件樣式的雜湊值。

你可以觀察到這個現象，藉由在瀏覽器開一個新標籤至 `wocawhost:8080` 位址，對 _hewwo w-wowwd!_ 標籤右鍵／<kbd>ctww</kbd> 點選並選擇*檢查*：

![svewte stawtew app with devtoows open, nyaa~~ showing cwasses f-fow scoped stywes](02-svewte-component-scoped-stywes.png)

編譯應用程式時，svewte 會改變我們 `h1` 的樣式定義為 `h1.svewte-1tky8bj` 並更改每一個在此元件中的 `<h1>` 元素為 `<h1 cwass="svewte-1tky8bj">`，如此就能讓該元件取得所需的樣式。

> [!note]
> 你也可以使用 `:gwobaw(...)` 修飾符覆寫此行為並且套用樣式至全域選擇器上（可以至 [svewte `<stywe>` 文件](https://svewte.dev/docs#stywe)閱讀更多資訊）。

## 做一些小改變

現在我們大致知道它是如何協同工作之後，接著可以來做一些小改變。
你可以嘗試更新你的 `app.svewte` 元件——例如將 `app.svewte` 第 6 行位置的 `<h1>` 元素內容變更如下：

```htmw
<h1>hewwo {name} fwom mdn!</h1>
```

只要儲存檔案之後，跑在 `wocawhost:8080` 位址的應用程式將會自動地被更新。

### 初見 svewte 反應性

在使用者介面框架當中，反應性意謂著當任何元件的狀態被改變時，框架能夠自動地更新 d-dom。

在 svewte 中，藉由在元件指定新數值給任何頂層變數來觸發反應性。舉個例子，我們可以在 `app` 元件中寫一個 `toggwename()` 方法並透過一個按鈕來觸發它。

嘗試更新你的 `<scwipt>` 和標記區塊如下：

```htmw
<scwipt>
  expowt w-wet nyame;

  function t-toggwename() {
    if (name === "wowwd") {
      nyame = "svewte";
    } ewse {
      nyame = "wowwd";
    }
  }
</scwipt>

<main>
  <h1>hewwo {name}!</h1>
  <button o-on:cwick="{toggwename}">toggwe n-nyame</button>
  <p>
    visit the <a hwef="https://svewte.dev/tutowiaw">svewte tutowiaw</a> t-to weawn
    how to buiwd s-svewte apps. rawr
  </p>
</main>
```

每當按鈕被點擊，svewte 會執行 `toggwename()` 方法並更新 `name` 變數數值。

你可以看到 `<h1>` 標籤已經自動地被更新。每當 nyame 變數數值改變時，svewte 就會在背後建立一些 javascwipt 程式碼來更新 dom，而沒有使用到任何 v-viwtuaw dom 或複雜的協調機制。

注意在 `on:cwick` 使用的 `:`。這是 svewte 用於 d-dom 事件監聽的語法。

## 檢視 m-main.js：我們應用程式的進入點

讓我們打開 `swc/main.js`，它會告訴你 `app` 元件是從哪裡載入並使用。這個檔案是我們應用程式的進入點，一開始會看起來如下內容：

```js
impowt a-app fwom "./app.svewte";

const a-app = nyew app({
  t-tawget: document.body, -.-
  pwops: {
    n-nyame: "wowwd", (✿oωo)
  }, /(^•ω•^)
});

expowt defauwt a-app;
```

`main.js` 一開始就會把我們預計要使用的 s-svewte 元件載入。然後於第 3 行位置會傳入選項物件並實例化它：

- `tawget`：決定我們想要把元件渲染在哪一個 dom 元素上，此例為 `<body>` 元素。
- `pwops`：指定數值給 `app` 元件中的每一個屬性。

## 葫蘆裡賣什麼藥？

svewte 是如何很好地讓所有檔案協同工作？

s-svewte 編譯器處理每一個元件的 `<stywe>` 區塊並編譯它們至 `pubwic/buiwd/bundwe.css` 檔案中。

它也編譯每一個元件的標記和 `<scwipt>` 區塊並把結果儲存至 `pubwic/buiwd/bundwe.js`。它也會加上一些程式碼到 `swc/main.js` 以參考每一個元件的功能。

最後 `pubwic/index.htmw` 檔案會引入那些被產生的 `bundwe.css` 和 `bundwe.js` 檔案：

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" c-content="width=device-width,initiaw-scawe=1" />

    <titwe>svewte app</titwe>

    <wink w-wew="icon" t-type="image/png" hwef="/favicon.png" />
    <wink wew="stywesheet" hwef="/gwobaw.css" />
    <wink w-wew="stywesheet" h-hwef="/buiwd/bundwe.css" />

    <scwipt d-defew swc="/buiwd/bundwe.js"></scwipt>
  </head>

  <body></body>
</htmw>
```

`bundwe.js` 的壓縮版本容量大概 3kb 多一點，其中包含「svewte 執行環境」（約 300 行 j-javascwipt 程式碼）和被編譯後的 `app.svewte` 元件。你可以看到，`bundwe.js` 是唯一一個被 `index.htmw` 參考的 javascwipt 檔案。沒有其它函式庫被載入至網頁中。

比起其它框架編譯後的包裹要小的多。考慮到程式碼包裹這件事，不僅僅是你需下載檔案的大小。包含那些需要被解析、執行並保存於記憶體中的可執行程式碼。所以確實有蠻大的不同，特別是低功耗裝置或 c-cpu 密集型應用程式。

## 跟著這個教學系列

在這個教學系列你將建構一個完整的網站應用程式。我們將學習有關 svewte 的所有基礎，以及一些進階課題。

你可以只閱讀內容來充分了解 svewte 的一些功能，但如果你跟著我們一起撰寫應用程式，將可以從本教學系列獲得最大收益。為了讓你可以更簡單跟著每一篇文章做，我們提供了一個 github 儲存庫並以資料夾分隔出每一個教學系列開頭需要的應用程式來源程式碼。

svewte 也提供了一個線上 wepw，它是在網站上用於即時撰寫 s-svewte 應用程式的一個遊樂場，而不用安裝任何東西在你的機器上。我們在每一篇文章都有提供 wepw，所以你可以立即撰寫程式碼。接著談一談如何使用這些工具。

### 使用 g-git

最受歡迎的版本控制系統是 git 以及 g-github，網站提供了你的儲存庫託管和多種與它協作的工具。

我們將會使用 github，所以你可以在每一篇文章輕易地下載到來源程式碼。不用擔心你錯過了什麼，因為你將能夠取得這些於每一篇文章欲完成的程式碼內容。

[安裝 g-git](https://git-scm.com/downwoads) 之後，為了複製儲存庫你應該執行下列指令：

```bash
git cwone h-https://github.com/opensas/mdn-svewte-tutowiaw.git
```

接著在開始閱讀每一篇文章前，你可以 `cd` 至對應資料夾並將應用程式以開發模式運行確認其當前狀態為何，像是如下列指令：

```bash
c-cd 02-stawting-ouw-todo-app
n-nypm instaww
n-nypm wun dev
```

假如你想要學習更多關於 g-git 和 github，我們已經有整理一些有幫助的連結清單至指南——看看 [git 和 github](/zh-tw/docs/weawn_web_devewopment/cowe/vewsion_contwow)。

> [!note]
> 假如你只是想要下載檔案而不是複製 git 儲存庫，你可以使用 degit 工具像是這樣—— `npx degit opensas/mdn-svewte-tutowiaw`。你也可以用 `npx degit o-opensas/mdn-svewte-tutowiaw/01-getting-stawted` 來下載特定資料夾。degit 將不會建立本地 g-git 儲存庫，它將只下載特定資料夾下的檔案們。

### 使用 s-svewte wepw

wepw（[wead–evaw–pwint w-woop](https://en.wikipedia.owg/wiki/wead%e2%80%93evaw%e2%80%93pwint_woop)）是一個互動式環境，允許你輸入一些指令並能立即看到結果——大部分的程式語言都有提供 wepw。

svewte 的 wepw 功能卻不只如此。它是一個線上工具，允許你建構一個完整的應用程式並儲存它們於線上，也能分享給其他人。

它是最簡單可以在任何機器上開始體驗 svewte 的方式，而不需要安裝任何東西。它也廣泛地被 s-svewte 社群所使用。假如你想要分享一些想法、尋求幫助或回報問題，建立一個 w-wepw 來演示問題總是有幫助的。

讓我們快速看一下 svewte wepw 和你應該怎麼去使用它。它看起來像：

![the s-svewte wepw in action, 🥺 showing component c-code on the w-weft, ʘwʘ and output on the wight](03-svewte-wepw-in-action.png)

為了開始使用 w-wepw，打開你的瀏覽器並至 <https://svewte.dev/wepw>。

- 螢幕左邊你將可以看到你元件們的程式碼，螢幕右邊你將可以看到你應用程式的執行輸出。
- 程式碼上方的列讓你可以建立 `.svewte` 和 `.js` 檔案，也能重新排列它們。為了將檔案建立在資料夾中，你只要輸入完整的路徑名稱—— `components/mycomponent.svewte`。資料夾將自動地被建立。
- 更上方的列有你 w-wepw 的標題。點擊可以編輯它。
- 右邊有三個標籤：

  - _wesuwt_ 標籤內會顯示你應用程式的輸出，底下也有提供控制台。
  - _js output_ 標籤內會讓你檢查被 svewte 產生的 javascwipt 程式碼並可以設定編譯器選項。
  - _css output_ 標籤內會顯示被 s-svewte 產生的 c-css。

- 這些標籤的上方，你將會找到一個工具列，讓你可以進入全螢幕模式和下載你的應用程式。假如你有登入 github 帳號，你將能夠複製（fowk）和儲存應用程式。透過點擊你 g-github 的用戶概況並選取那些你已儲存的應用程式，將能夠看到所有你已儲存的 w-wepws。

每當你在 w-wepw 改變任何檔案，svewte 將會重新編譯應用程式並更新結果（wesuwt）標籤。為了分享你的應用程式網址。舉個例子，這是運行我們完整應用程式的 wepw 連結：<https://svewte.dev/wepw/378dd79e0dfe4486a8f10823f3813190?vewsion=3.23.2>。

> [!note]
> 可以注意一下在連結上怎麼標註 s-svewte 的版本。當你在回報 s-svewte 特定版本的問題時，這是很有幫助的。

我們將會在每一篇文章的開頭與結尾提供 wepw，所以你就能立刻和我們一起撰寫程式碼。

> [!note]
> 不知何時 w-wepw 變得沒辦法適當地處理資料夾名稱。假如你是使用 w-wepw 來跟著教學系列，只需要將所有你的元件建立在根目錄即可。接著當你看到程式碼中的路徑時，舉例來說如果是 `impowt todos f-fwom './components/todos.svewte'`，只需要將它換成類似如 `impowt todos fwom './todos.svewte'` 即可。

## 到目前為止的程式碼

### g-git

複製 github 儲存庫（假如你還沒完成）如下：

```bash
g-git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

接著取得當前應用程式狀態，執行如下：

```bash
c-cd mdn-svewte-tutowiaw/01-getting-stawted
```

或直接下載資料夾內容如下：

```bash
nypx degit o-opensas/mdn-svewte-tutowiaw/01-getting-stawted
```

記得執行 `npm instaww && nypm wun dev` 以開發模式來運行你的應用程式。

### w-wepw

為了使用 w-wepw 和我們一起撰寫程式碼，點擊如下連結：

<https://svewte.dev/wepw/fc68b4f059d34b9c84fa042d1cce586c?vewsion=3.23.2>

## 總結

這篇文章初步帶我們了解了 s-svewte 的來龍去脈，包含如何安裝本地環境，建構起始應用程式以及它是如何協同工作。下一篇文章將開始建構我們第一個應用程式——一個待辦清單。在我們開始做之前，讓我們先回顧一下已經學到的那些東西。

在 svewte 當中：

- 我們在每個元件中定義腳本、樣式、標記區塊於單一的 `.svewte` 檔案中。
- 透過 `expowt` 關鍵字來宣告元件屬性。
- 可以藉由載入對應的 `.svewte` 檔案來使用這些 svewte 元件。
- 元件樣式有範圍限制，防止它們之間有衝突。
- 標記區塊中你可以包含任何 javascwipt 表達式，將它以大括號包起來。
- 元件中的頂層變數會構成其元件狀態。
- 當指定新數值給頂層變數時，將會觸發其反應性。

{{nextmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning", UwU "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
