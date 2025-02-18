---
title: 前端框架簡介
slug: Learn_web_development/Core/Frameworks_libraries/Introduction
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}

我們從整體概述來探討框架、提供 JavaScript 與框架的簡要歷史、框架存在的理由、他們提供什麼東西、如何決定選擇哪個框架、以及前端框架的的替代方案。

<table>
  <tbody>
    <tr>
      <th scope="row">先決條件：</th>
      <td>
        熟悉 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
          href="/zh-TW/docs/Learn_web_development/Core/Styling_basics"
          >CSS</a
        >、<a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a> 這些核心技術。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        理解 JavaScript
        前端框架存在的理由、他們解決的問題、可用的替代方案、還有決定選擇的方法。
      </td>
    </tr>
  </tbody>
</table>

## 一段簡短的歷史

在 JavaScript 誕生的 1996 年，它的作用僅僅是為當時由靜態文檔組成的網頁，提供些許的互動和興奮感。而當網路漸漸從*閱讀*的媒介，成為*做事*的場所，JavaScript 也慢慢地紅了起來。JavaScript 開發者們撰寫了許多工具，來解決自己遭遇的問題，並打包成能重複使用的工具包，稱為**函式庫**（library），以便和他人共享自己的解決方案。這個共享函式庫的生態，也推進了網路的增長。

目前 JavaScript 已經是網路的必需品了，[大約 95% 的網站都又在使用 JavaScript](https://w3techs.com/technologies/details/cp-javascript)，網路也成了當今生活的必須。使用者可以透過文字與影像，來寫論文、聽音樂、看電影、與人遠距離交流。曾經只能透過裝在電腦內的原生軟體所完成的事情，現在也能網路上做到。這種現代化、複雜度高、還有各種互動的網站，被稱為**網路應用程式**（web applications）。

當代 JavaScript 框架的問世，讓構建高度動態的互動式應用，變得簡單許多。**框架**是個針對軟體構建，提供完整解決方案的函式庫。這些選項能讓應用程式，開始能預測和同質化。可預測性讓軟體能擴展到巨大的規模時依舊能維護；可預測性和可維護性則對軟體的健康和長壽至關重要。

JavaScript 框架能構建常用的網站裡，許多令人印象深刻的軟體。目前你正在看的 MDN Web Docs 網站，也是用 React/ReactDOM 作為前端支援的。

## 那有什麼框架？

有很多框架，不過主要有以下「四大框架」。

### Ember

[Ember](https://emberjs.com/) 在 2011 年 12 月發行。這個框架始於 [SproutCore](https://en.wikipedia.org/wiki/SproutCore) 的內部專案。這是個比較老的框架：與 React 或 Vue 之類的替代方案相比，其用戶數比較少，不過在穩定性、社區支持、和一些巧妙的編碼原則方面，仍然享譽無數。

### Angular

[Angular](https://angular.io) 是個由 Google 內部的 Angular Team 與其他社群所開發的開源專案。這個專案是同一群人由 [AngularJS](https://angularjs.org/) 所重寫的專案。該專案於 2016 年 9 月 14 日發行。

Angular 是基於組件、並使用指令式 HTML 樣板的框架。在構建時，框架的編譯器會將模板，轉換為優化的 JavaScript 程式。Angular 使用了 JavaScript 超集（superset）的 [TypeScript](https://www.typescriptlang.org/)。我們將在下一章中詳細介紹它。

### Vue

尤雨溪在維護並理解前述的 [AngularJS](https://angularjs.org/) 專案後，於 2014 年發表了 [Vue](https://vuejs.org/)。Vue 是四大框架裡面最年輕的，但成了近年來的當紅炸子雞。

Vue 除了與 Angular 一樣，使用了一些自定義的 HTML 以外，大部分還是使用現代化的標準 JavaScript。

### React

Facebook 於 2013 年發表了 [React](https://reactjs.org/)。在發表當時 Facebook 內部早已使用 React 解決許多內部問題。技術上來說 React *並不是*框架，而是一個用來渲染 UI 組件的函式庫。React 通常會配合*其他*函式庫來建立應用程式：例如 React 搭配 [React Native](https://reactnative.dev/) 建立手機程式、React 與 [ReactDOM](https://reactjs.org/docs/react-dom.html) 建立網路程式...等等。

由於 React 與 ReactDOM 通常會搭在一起用，React 在通俗上會被理解為 JavaScript 框架。在閱讀本模塊時，我們將以這種通俗理解為基礎。

React 使用一種很像是 HTML 的 JavaScript 語法：[JSX](https://reactjs.org/docs/introducing-jsx.html)。

## 為什麼有框架？

我們已經討論了啟發框架建立的環境，但那不是開發人員*為什麼*要製造它們的理由。要探索原因，首先需要首先檢查開發軟體所碰上的挑戰。

來看看一個常見的例子吧：一個能建立待辦事項程式，我們將會用待辦事項程式為例子，來介紹不同的框架。這個應用程序要能讓使用者執行諸如渲染事項列表，添加新任務和刪除任務之類的操作；還要能可靠地跟踪並更新程式所依賴的資料在軟體開發中，此這些資料稱為狀態（state）。

每個目標分開來看，理論上都很簡單：我們能遍歷需要渲染的資料、建立新的工作物件、還能用標識符來查詢、編輯或刪除工作。然而，當我們要求程式，讓用戶在瀏覽器完成*這一切*的話，麻煩就來了。**問題在於：更動狀態時，也同時需要更動 UI 的顯示。**

讓我們藉由待辦事項程式的*一個功能*來看看這個問題有多難搞：把工作清單渲染出來。

## DOM 的冗長變化

建立 HTML 元素並在瀏覽器上渲染，會需要驚人數量的程式碼。假設我們的狀態，是一個由多個物件組成的陣列：

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

我們如何對用戶顯示工作？我們想將每個工作，都表示為一個列表項目：結構為無序列表元素 [`<ul>`](/zh-TW/docs/Web/HTML/Element/ul) 內，含有一定數量的 [`<li>`](/zh-TW/docs/Web/HTML/Element/li) 元素。怎麼做呢？看起來就像這樣：

```js
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const textContent = document.createTextNode(name);

  span.appendChild(textContent);

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}
```

我們在這裡用上了 [`document.createElement()`](/zh-TW/docs/Web/API/Document/createElement) 方法建立了 `<li>`、還有一些程式碼來建立需要的屬性與子元素。

程式的第十行引用了另一個構建函式：`buildDeleteButtonEl()`。它與用於構建列表元素的模式很像：

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  const textContent = document.createTextNode("Delete");

  button.setAttribute("type", "button");
  button.appendChild(textContent);

  return button;
}
```

這個按鈕還派不上用場，但稍後我們會用它來實做刪除功能。這渲染程式，會讓頁面看起來像這樣：

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

*光是*為了弄 UI 我們就寫了大約三十行左右的程式：這樣就*只是*為了能讓清單在 DOM 渲染而已喔。更別提之後還需要添加方便樣式化的 class。

像範例這樣直接操作 DOM 的話，會需要理解很多 DOM 的東西：像是 DOM 的原理、如何建立元素、更改屬性、巢狀排列……*同時*還要把他們都呈現出來。這些程式甚至還沒有處理與用戶的互動或工作。在增加功能的時候，我們需要在正確的時間、用正確的方法，來更新我們的 UI。

JavaScript 框架旨在使這類工作更加輕鬆：他們會提供更好的*開發體驗*。框架本身並沒有給 JavaScript 提供新功能；而是用更容易的方案，建立當代的網站。

如果想查看本節中的程式碼範例，請參閱 [CodePen 的程式](https://codepen.io/dengeist/pen/XWbPNmw)：這網站同樣允許用戶添加和刪除新任務。

閱讀本節中使用的 JavaScript 資訊：

- [`document.createElement()`](/zh-TW/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/zh-TW/docs/Web/API/Document/createTextNode)
- [`document.createDocumentFragment()`](/zh-TW/docs/Web/API/Document/createDocumentFragment)
- [`eventTarget.addEventListener()`](/zh-TW/docs/Web/API/EventTarget/addEventListener)
- [`node.appendChild()`](/zh-TW/docs/Web/API/Node/appendChild)
- [`node.removeChild()`](/zh-TW/docs/Web/API/Node/removeChild)

## 建立 UI 的另一種方法

JavaScript 框架都會提供一種能更加*宣告性*撰寫介面的方法。也就是說，框架能讓你描述 UI 看起來要怎麼樣、然後在 DOM 的背後完成這一切。

原生 JavaScript 試圖重複建立新 DOM 元素的方法，很難一眼理解。相反地，來看看 Vue 的程式碼會怎麼完成吧：

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

就這樣啦。原本大約三十多行的程式，現在只要六行。如果不太熟悉大括號和 `v-` 屬性的話，沒關係；那些語法會在 Vue 模塊學到。這裡只是要講說與原生 JavaScript 對比，框架的程式碼看起來更像是實際呈現的 UI。

也因為有 Vue，我們再也不用自己寫針對 UI 呈現的函式；整個框架會幫我們用最優化、最效率的方法完成這件事。我們只要告訴 Vue 整個排版要怎麼排就好。熟悉 Vue 的開發者，也可以盡快參與我們的專案、搞清楚整個專案到底怎麼做的。不過並不是只有 Vue 這樣：使用框架本身，就可以提高團隊與個人的工作效率。

要在原生 JavaScript 做*類似的*事是可以的。[樣板文字](/zh-TW/docs/Web/JavaScript/Reference/Template_literals)就能在編寫 HTML 字串的同時，也表示最終元素的外觀。就算是待辦事項列表應用，這樣簡單的事情，這可能是一個有用的想法，但是對於管理成千上萬條數據記錄、並且要在用戶界面中呈現盡可能多唯一元素的大型應用程序而言，這樣子是很難維護的。

## 框架給我們的其他東西

讓我們看看框架賦予的其他優勢。正如之前提，你可以透過原生 JavaScript 實現框架，但是使用框架可以消除自行解決這些問題所需要的認知負擔。

### 工具

本模塊提到的幾個框架，背後都有著龐大而活躍的社群；這些社群形成了各種生態圈、並提供能增進開發體驗的工具：像是確保功能正常的測試、或著維持程式一致性的 linting。

> [!NOTE]
> 如果對這方面的概念有興趣，請看看 [Client-side tooling overview](/zh-TW/docs/Learn_web_development/Extensions/Client-side_tools/Overview)。

### 切分

大多數框架鼓勵開發者把介面的各部份，封裝成各種*組件*（components）：也就是一個個可維護、可互通、還可重用的程式碼塊（chunks of code）。與該組件相關連的程式，可獨立為一個、或數個獨立的程式。在原生 JavaScript 裡面要這麼做的話，開發者就必須靠自己的慣例，才能在高效、可擴展的情況下，實現這個目標。但大多數的 JavaScript 開發者，最後會讓 UI 相關的所有程式，都分散在整個文件中。

### 路由

web 最重要的功能之一，就是頁面之間的導航：畢竟它就是相互連接文件的網路。在你點選網站上的連結時，瀏覽器會與伺服器溝通、並獲取新內容以便顯示給你看。也因為這樣，地址欄中的 URL 就會更改。你可以保存這個新的 URL 並稍後回來、或與其他人分享該 URL，以便他們輕鬆地找到同一個頁面。你的瀏覽器會記住這個導航歷史記錄，也能在頁面之間來回導航。這就叫**伺服器端路由**（server-side routing）。

現代的網路應用程式通常不獲取和渲染新的 HTML 文件：它們通常載入單個 HTML Shell，並不斷更新其中的 DOM 同時，不導航用戶到新地址（這被稱為**單頁應用**、**single page apps**、**SPA**）。每個新的虛擬網頁通常稱為 _視圖_（view），一般來說也不執行路由。

在 SPA 複雜到一定的程度、也有渲染出足夠獨特的視圖時，給應用程式導入路由功能，就變得很重要：人們習慣在應用程式中，透過連結導航到特定頁面，在導航歷史記錄中前進和後退等，而當這些標準的 Web 功能被破壞時，他們的體驗也會受到影響。如果導航功能以用戶端程式提供，這就叫做**用戶端路由**（client-side routing）。

你*可以*透過原生 JavaScript 實做路由功能。但比較活躍的框架都有相對應的函式庫，讓路由功能在開發過程中更加直觀。

## 使用框架時要考慮的事情

想成為一位高效的網路開發，意味著你需要選擇最合適的工具：JavaScript 框架能讓前端開發變簡單，但它並不是萬能仙丹。我們回在這個章節探討選擇框架需要考慮的事情。請注意，你可能完全不需要框架。不要為了用框架而用框架。

### 熟悉工具

如同原生 JavaScript，框架也需要理解它們各自的特性。在選好框架前，確保有足夠的時間熟悉框架，以便讓它成為開發的墊腳石，而不是絆腳石。同時，也要確保你的同事們能接受它。

### 過度工程化

一個 web 專案如果是個只有數個個人頁面、還幾乎沒有交互功能的話，你完全不需要 JavaScript 框架、甚至 JavaScript 本身也不需要。也就是說，框架並不是整體式的，其中一些可能更適合於小型專案。一篇在 Smashing Magazine 的文章中，作者 Sarah Drasner 寫了一篇[怎麼用 Vue 取代 jQuery 的文章](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/)、讓網頁的一小部分具有交互性。

### 更大的程式庫和抽象化

框架能寫出宣告式程式、有時候還會*少寫*程式。這一切都是透過框架在背後處理 DOM 互動所達成的。這種抽象化給開發者提供了相當棒的體驗，但這並不是免費的。為了把編寫的程式變成能與 DOM 互動的玩意，框架必須執行自己的程式；而這反過來又會讓專案變大，執行演算的開銷也更高昂。

不可避免地，這會產生一些額外的程式；而儘管一個支持 tree-shaking（刪除在構建過程中未實際用到的程式）的框架，會讓應用程式保持小巧，但在考慮性能時，這將是必須牢記在心的因素之一，尤其是在受網路/儲存空間受限的設備上（像是手機）。

框架的抽象化不僅影響你的 JavaScript、它也會影響你對與網絡本質的關係：無論如何構建 Web，最後與用戶交流的都是 HTML。用 JavaScript 編寫整個程式，會讓你看不到 HTML 本身、以及各標籤的用途，最後會生出不語義、且有障礙的 HTML 文件。實際上，你甚至能寫出一個完全依賴 JavaScript，沒有它就完全動不了的脆弱應用程式。

框架不是問題的根源。如果優先事項設錯了，*任何*應用程式都會變得脆弱、腫大、且障礙多舛。不過，框架確實擴大了我們作為開發人員的優先事項。如果想做出一個很複雜的 Web 程式，這當然能作到；但如果優先事項無法確保性能與無障礙的話，框架將放大這方面的問題。現在的 Web 不再是一個健壯的，內容優先的文件網絡，而是常將 JavaScript 放在首位，用戶體驗則放在最後。

## 框架網站的無障礙議題

讓我們以上一節的內容為基礎，並進一步討論無障礙問題。消除用戶界面的障礙總是需要點思考與努力，而框架會使該過程複雜化。你通常要用上進階的框架 API 來訪問本機瀏覽器功能，例如 ARIA [live region](/zh-TW/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 或 focus 管理。

在某些情況下，框架應用程式會發生在傳統網站不存在的障礙。最明顯的例子，就是前述的客戶端路由。

使用傳統（伺服器端）路由瀏覽 Web 會出現可預測的結果。瀏覽器知道將焦點設置在頁面頂部、輔助技術將宣布頁面標題。在導航到新頁面時，這些事情都一定會發生。

使用客戶端路由時，瀏覽器不會加載新頁面，因此它不知道要自動調整焦點、或宣告新的頁面標題。框架作者會花費大量時間和精力，來編寫可重現這些功能的 JavaScript，但沒有一個框架能做到如此完美。

結論是，_所有的_ Web 專案一開始，就要應該考慮無障礙問題。如果專案使用抽象的框架、又不考慮無障礙問題的話，未來衍生的無障礙問題會更嚴重。

## 如何選擇框架

不同模塊的框架，會採用不同的方法。來開發 Web 應用程式。框架都會定期變化、也都有其優缺點。選擇哪個框架的過程，是與團隊及專案息息相關的。你需要透過研究，來找出合適的需求。換句話說，我們已經找出了一些能有效地研究出選擇的問題：

1. 框架支援哪些瀏覽器？
2. 框架使用哪個特定領域語言（domain-specific language）？
3. 框架有夠大的社群與夠好的文件（或其他東西）支援嗎？

接下來我們退提供一個表格，來展示各大框架的*瀏覽器支援*、還有能用的**特定領域語言**。

一般來說，特定領域語言（domain-specific language, **DSL**）是一種與的特定領域軟體開發相關的程式語言。以框架的脈絡來說，DSL 是能讓開發更簡單的 JavaScript 或 HTML 變體。最重要的是，沒有哪個框架*要求*開發者使用某種特定領域語言，但框架們在挑選 DSL 方面，早已心有所屬了。選擇不採用該框架的首選 DSL，可能就會失去本可增添開發人員體驗的功能。

在為任何新專案做出選擇時，你需要認真考慮框架的支持矩陣（support matrix）和 DSL。瀏覽器要是不支援，會成為用戶的障礙；而 DSL 要是不支援，則會你和你開發團隊的障礙。

| 框架    | 瀏覽器支援                        | 首選的 DSL | 支援的 DSL             |
| ------- | --------------------------------- | ---------- | ---------------------- |
| Angular | IE9+                              | TypeScript | 基於 HTML; TypeScript  |
| React   | 當代瀏覽器（IE9+ 含有 Polyfill）  | JSX        | JSX; TypeScript        |
| Vue     | IE9+                              | 基於 HTML  | 基於 HTML, JSX, Pug    |
| Ember   | 當代瀏覽器（IE9+ 直到 2.18 為止） | Handlebars | Handlebars, TypeScript |

> [!NOTE]
> 「基於 HTML」的 DSL 並沒有官方名字。雖然它們不完全是 DSL，但也不是標準的 HTML，所在我們在此附帶一題。

表格的引用來源：

- [React browser support: official docs](https://reactjs.org/docs/react-dom.html#browser-support)
- [Ember browser support: Ember 3.0 release announcement](https://blog.emberjs.com/2018/02/14/ember-3-0-released.html)
- [Ember templating language (official docs)](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/)

### 框架有堅實的社區嗎？

這大概是最難評估的，因為社區沒辦法用什麼數字直接估算。你或許可以用 GitHub 的星星、或是 npm 的下載量來看，但有時最好的辦法，是找看看一些論壇、或和其他開發者聊聊看。這不只是社區大小的問題而已，你還需要看看社區多麼熱情和包容、以及文件多好讀。

### Web 的看法

在選框架這件事，不要只聽我們的話：網路上也有不少的討論。例如說，維基媒體基金會最近就選了 Vue 作為他們的前端框架，還發表了[相關的請求意見稿](https://phabricator.wikimedia.org/T241180)。請求意見稿的作者 Eric Gardner 花了不少時間，概述維基媒體基金會的需求、還有為什麼他認為這個框架，對開發團隊有益。這個請求意見稿，是你在研究要使用什麼框架時，需要考量什麼的一個好例子。

[State of JavaScript survey](https://stateofjs.com/) 也是有用的 JavaScript 開發者反饋集合。它包含了很多 JavaScript 相關的要點、包括有關框架使用情況、還有開發者對各框架看法的數據。網站也有數年的可用數據，以便了解框架的消長。

Vue 的開發團隊也寫了[有關 Vue 與其他框架的詳盡比較](https://vuejs.org/v2/guide/comparison.html)。如同他們自知，這種比較可能會有一些偏見，但這仍然是一種寶貴的資源。

## 前端框架的替代

如果在尋找能夠加速開發的工具、卻又發現專案不需要前端 JavaScript 框架的話，可以試試其他用於構建 Web 的解決方案：

- 內容管理系統（content management system）
- 伺服器渲染（Server-side rendering）
- 靜態網站產生器（static site generator）

### 內容管理系統

**內容管理系統**（ Content Management System, **CMS**）是能讓用戶在不自己寫程式的情況下，創建內容的工具。針對大型專案，尤其是撰寫者不熟悉程式、或者開發者想省時間的情況下，內容管理系統是個相當不錯的解決方案。不過，內容管理系統也需要費神去設定。使用 CMS 也同時意味著你會在最終輸出的控制方面，做出一定程度的退讓。比方說，如果 CMS 不太著墨在無障礙方面，那你也很難在這方面有所改進。

坊間常見的內容管理系統有 [Wordpress](https://wordpress.com/)、[Joomla](https://www.joomla.org/)、[Drupal](https://www.drupal.org/)。

### 伺服器渲染

**伺服器端渲染**（Server-side rendering, **SSR**）是由*伺服器*負責渲染單頁應用的程式架構，與構建 JavaScript 程式中最常見，最直接的*用戶端渲染*（client-side rendering）相對。伺服器端渲染只單純傳送 HTML 檔案，所以對用戶端更友善；但設置起來就比用戶端渲染程式難得多。

本模塊的所有用戶端渲染框架，都有相對應的伺服器端渲染。像是 React 的 [Next.js](https://nextjs.org/)、Vue 的 [Nuxt.js](https://nuxtjs.org/)（對這的確很教人困惑，不過兩者沒有關係）、Ember 的 [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot)、Angular 的 [Angular Universal](https://angular.io/guide/universal)。

> [!NOTE]
> 某些伺服器端渲染的解決方案，是由社區編寫和維護；但也有「官方」的解決方案，是由框架維護者提供的。

### 靜態網站產生器

靜態網站產生器是個可以給網站生成多個網頁的程式 ── 這包括相對應的 CSS 或 JavaScript── 以便在任何地方發布。發布主機可以是 GitHub pages 分支、或著 Netlify 實體、抑或著是私人的伺服器。這種方法有很多優點，主要是性能方面（用戶端收到網頁時，已經載入了整個網頁，所以不需要執行 JavaScript）與安全性（靜態網站的攻擊因為變少了）。靜態網站還是能在需要時用上 JavaScript，但靜態網站並不*依賴* JavaScript。一如其他工具，靜態網站產生器需要點時間去搞懂。這可能是開發過程的障礙。

靜態網站的獨立網頁，要多少就能有多少。如同框架能加快開發用戶端 JavaScript 程式一般，靜態網站產生器也能快速產生 HTML 檔案（要不然，你本來要自己寫的）。靜態網站產生器也像框架一樣，能允許用戶給網頁撰寫組件；並在最後建立頁面時，把組件都結合起來。以靜態網站產生器而言，組件被稱為**樣板**（template）。靜態網站產生器構建的網頁，甚至可以作為框架應用程式的宿主：比方說你可以完成「如果希望用戶造訪某個特定頁面時，啟動 React 程式」這樣的需求。

靜態網站產生器已經存在好一段時間了，但他們最近在 Web 歷史中再度復興起來。現在有一些強大的選擇，像是 [Hugo](https://gohugo.io/)、[Jekyll](https://jekyllrb.com/)、[Eleventy](https://www.11ty.dev/)、[Gatsby](https://www.gatsbyjs.org/)。

如果想深入理解靜態網站產生器的概念，看一下 Tatiana Mac 的 [Beginner's guide to Eleventy](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/)。在該系列的第一篇文章中，她解釋了什麼是靜態網站生成器，以及它與發布 Web 內容的其他方式之間的關係。

## 結論

我們終於把框架介紹完了。我們還沒有教任何程式，但我們希望提供了有用的背景知識，說明為什麼要使用框架，如何選擇框架，還有燃起想要學習的興趣！

我們的下一篇文章，將探討更底層的東西，著眼於框架傾向於提供的特定種類的功能，以及它們為什麼能動。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Main_features", "Learn_web_development/Core/Frameworks_libraries")}}
