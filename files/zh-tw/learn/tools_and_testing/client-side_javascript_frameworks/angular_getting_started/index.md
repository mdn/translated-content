---
title: Angular 新手入門
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

現在該看一下 Google 的 Angular 框架了，這是另一個你經常會遇到的前端框架。在本文中，我們將會探索 Angular 所提供的功能、安裝必備工具、建立範例應用程式，並進一步瞭解 Angular 的基本架構。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉基本的<a href="/zh-TW/docs/Learn/HTML">HTML</a>、
        <a href="/zh-TW/docs/Learn/CSS">CSS</a>、以及
        <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a>程式語言，具備
        <a
          href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >終端機/命令列環境</a
        >的基本知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        設立本機的Angular開發環境，建立初始應用程式，瞭解Angular基本運作方式。
      </td>
    </tr>
  </tbody>
</table>

## 什麼是 Angular？

Angular 是一個基於[TypeScript](https://www.typescriptlang.org/)的開發平台。身為一個平台，Angular 包含：

- 一個元件化的框架，用來建構可延展的 Web 應用程式。
- 一整套經深思熟慮而整合出來的函式庫，包含各種不同的功能，包含路由機制、表單管理、Client/Server 通訊，以及更多。
- 一組完善的開發工具，幫助你開發、建置、測試、更新你的程式碼。

你能使用 Angular 去開發多種不同規模的專案，小至單人應用式專案，大至大型企業級專案。Angular 的設計宗旨是讓後續更新升級十分容易，因此你能輕鬆的使用最新版本進行開發。最棒的是，Angular 的開發生態圈龐大，有超過一百七十萬的使用者、套件開發者以及內容創作者。

在開始探索 Angular 之前，你要先瞭解 Angular CLI。Angular CLI 是一種快速、簡單、備受推崇的 Angular 程式開發方式。Angular CLI 能讓許多任務變得更容易，以下是一些範例：

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/build">ng build</a></code>
      </td>
      <td>編譯Angular開發的程式到輸出目錄</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/serve">ng serve</a></code>
      </td>
      <td>建構應用程式並啟動開發伺服器，當檔案變化時重新建構</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/generate">ng generate</a></code>
      </td>
      <td>根據原理圖去生成或修改檔案</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/test">ng test</a></code>
      </td>
      <td>對指定專案進行單元測試</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.io/cli/e2e">ng e2e</a></code>
      </td>
      <td>編譯並啟動Angular程式，並執行端到端測試</td>
    </tr>
  </tbody>
</table>

在建造應用程式時，你會發現 Angular CLI 是很實用的工具。

## 你會建立的專案

這一系列的教學會帶領你建立一個待辦事項程式。透過這個程式，你會學到如何使用 Angular 管理、編輯、增加、刪除和篩選項目。

## 前置工作

想在本地端安裝 Angular，你必須安裝：

- **Node.js**

  Angular 需要使用 Node.js 的[當前版、活躍 LTS 版或是長期維護 LTS 版](https://nodejs.org/about/releases)若需特定版本的資訊，可以參閱在[package.json](https://unpkg.com/@angular/cli/package.json)檔案之中的`engines`關鍵字。

  若想更了解如何安裝 Node.js，可參閱[nodejs.org](https://nodejs.org)。若你不確定你目前使用的 Node.js 版本號，請在終端機輸入`node -v`查閱。

- **npm 套件管理器**

  Angular、Angular CLI 以及 Angular 應用程式都依賴 [npm 套件](https://docs.npmjs.com/getting-started/what-is-npm) 來實現許多特性與功能。想下載並安裝 npm 套件，你需要使用 npm 套件管理器。本教學使用[npm 客戶端](https://docs.npmjs.com/cli/install)命令列介面，該介面預設安裝在`Node.js`。欲檢查你是否安裝了 npm 客戶端，請在終端視窗中執行`npm -v`。

## 設置你的應用程式

你可以在終端機裡透過使用 Angular 命令列介面（CLI）來產生、建置、測試和佈署 Angular 應用程式。請在終端機裡執行以下指令來安裝 Angular 命令列介面：

```js
npm install -g @angular/cli
```

Angular CLI 的指令開頭均為`ng`，接著是你希望 CLI 進行的事項。在桌面目錄中，使用 `ng new`指令創建一個名為`todo`的專案：

```js
ng new todo --routing=false --style=css
```

使用`ng new`指令會在桌面創建一個小型入門 Angular 的專案。其他的標籤，`--routing`和`--style`，則是定義專案中的導航與樣式。本教學導覽會在後續篇章詳細解釋這些特性。

如果被詢問是否使用嚴格型別檢查模式，可以回覆「同意」。

輸入`cd`指令切換到你新開的專案：

```js
cd todo
```

想執行你的`todo`專案，請使用`ng serve`：

```js
ng serve
```

當 CLI 詢問是否使用情況分析，回覆`no`。

在瀏覽器中，導至<http://localhost:4200/>來查看你新建的專案。如果你更改任何原始資料夾，應用程式會自動加載更新。

當`ng serve`運行時，你或許會想開啟第二個終端機視窗來運行其他指令。如果你想中斷應用程式運行，請在終端機內按下`Ctrl+c`。

## 熟悉你的 Angular 程式

本教學導覽主要是用的程式原始檔在`src/app`資料夾內。由 CLI 自動產生的主要檔案如下：

1. `app.module.ts`：列出此專案使用的所有檔案。此檔案在專案中扮演中央樞紐的角色。
2. `app.component.ts`：又被稱為元件類別（Class），內含此專案主要頁面的相關邏輯
3. `app.component.html`：內含`AppComponent`所使用的網頁 html。這個檔案的內容也被視為元件模板（Template），此模板定義你在瀏覽器中看到的畫面。
4. `app.component.css`：內含`AppComponent`裡面的樣式。當你想定義某些樣式給特定模組使用，卻不希望影響到整體程式時，便可使用此檔案進行設定。

一個 Angular 的元件由三部份構成，分別是：模板、樣式、類別。舉例來說，`app.component.ts`、`app.component.html`、以及`app.component.css`一同構成`AppComponent`。此結構會將邏輯、畫面、樣式分開，如此一來便能讓程式更易於維護與擴張。

如此一來，你就能在一開始便依循最佳的實作慣例。

Angular CLI 也能產生`app.component.spec.ts`的元件測試檔案，但本次教學導覽不會深入探討測試的部分，所以你可以忽略這個檔案。

一旦你建立一個元件，CLI 就會按照你的命名在目錄中建立此四個檔案。

## Angular 的專案結構

Angular 基本上是用 TypeScript 作為主要開發的語言。
簡單來說，TypeScript 是 JavaScript 的超集合，也就是說在 JavaScript 中使用的語法也同樣適用於 TypeScript。
而 TypeScript 比純 JavaScript 更加強化型別的規範、寫法也更簡潔，因此使用 TypeScript 可以寫出更好維護的程式碼，並減少報錯的機率。

在 Angular 框架裡，主要是由許多元件（Components）來組成。
一個元件包含 HTML 頁面架構、樣式以及帶有元件裝飾器`@Component()`的 TypeScript 類別（class）。

### 類別

類別(class)裡會放這個元件的邏輯、規則，
舉例來說像是函式、事件監聽、屬性和參考等等。
類別會放在一個像是`feature.component.ts`的檔案裡，而`feature`就是你的元件名稱。
所以你可以建立一些檔案，並且命名為像是`header.component.ts`、`signup.component.ts`或是`feed.component.ts`。
當你建立一個元件，它會帶有`@Component()` 這樣的裝飾器，裡面會有檔案的路徑指向，告訴 Angular 要去哪裡找 HTML 和 CSS 檔案。
一個基本的元件寫法如下：

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  // 接下來的檔案路徑會指出其它檔案在什麼位置
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // 程式碼寫在這裡
}
```

這個元件會被稱為`ItemComponent`，它的選擇器是`app-item`。
這個選擇器就像 HTML 的標籤，你可以把它放在其它的模版裡。
當瀏覽器渲染到選擇器的時候，就會把這個元件的模版給渲染出來。
這份教學文件會指引你建立兩個元件，並把其中一個放到另一個元件裡。

Angular 的元件模組具備高度封裝性，讓專案結構看起來更直覺。
而 Angular 的元件也讓專案更易於做單元測試、讓程式碼更易於解讀。

### HTML 模版

每個元件都會有 HTML 模版去告訴瀏覽器要如何渲染頁面。HTML 可以直接內嵌寫在類別（Class）的檔案內，或是用檔案路徑去指明其位置。

而要去指明位在他處的 HTML 檔案，就要使用`templateUrl`這個屬性，範例如下：

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

當你把 HTML 內嵌寫在類別（Class）的檔案內時，要使用`template`這個屬性，並用反引號把 HTML 包起來，範例如下：

```js
@Component({
  selector: "app-root",
  template: `<h1>Hi!</h1>`,
})
export class AppComponent {}
```

Angular 還擴充了 HTML 的語法，讓你可以在元件中使用動態插值。
當你的元件狀態改變時，Angular 會自動重新渲染該節點。
下面的例子中會使用插值去插入一段文字來示範這個功能。

```html
<h1>\{{ title }}</h1>
```

雙花括號的地方就是告訴 Angular 插值顯示的地方。
`title`的值就是從元件的類別來的：

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "To do application";
}
```

當載入完元件和它的模版時，會在瀏覽器看到如下的呈現：

```html
<h1>To do application</h1>
```

### Styles

每個專案裡會有個全域性的樣式設定檔案`styles.css`，所有的元件都可以繼承它，並且再各自增加或覆寫它的樣式設定。
你可以直接在裝飾器`@Component()`裡寫出這個元件特有的樣式，或是用路徑指明它的 CSS 檔案位置。

要直接在元件裝飾器內設定樣式，就要使用`styles`這個屬性，範例如下：

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

但基本上，元件通常會把樣式另外寫在一個檔案，並用`styleUrls`去指明它的檔案路徑，如下：

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

以此去寫出這個元件特定的樣式，讓你更容易去維護你的 CSS 檔案。

## 總結

以上這些就是關於 Angular 的簡介。這時候的你，應該已經對 Angular 的運作有基本的了解，並準備建立一個 Angular 的專案。在下一篇文章裡，我們會更深入的應用這些知識，並且試著用 Angular 去寫一個「待辦清單」。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
