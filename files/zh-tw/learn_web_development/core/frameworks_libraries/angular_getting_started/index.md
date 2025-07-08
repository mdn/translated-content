---
title: Angular 入門
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

現在我們來看看 Google 的 Angular 框架，這是另一個你會經常遇到的熱門選擇。在本文中，我們將探討 Angular 提供了什麼、安裝先備條件並設定一個範例應用程式，並檢視 Angular 的基本架構。

> [!NOTE]
> 本教學的目標是 [Angular 18 版](https://angular.dev/overview)，最後修訂於 2024 年 8 月（`Angular CLI: 18.2.1`）。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        熟悉核心的 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS</a> 與 <a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a> 語言，並了解<a
          href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >終端機／命令列</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        設定本地的 Angular 開發環境、建立一個入門應用程式，並了解其基本運作方式。
      </td>
    </tr>
  </tbody>
</table>

## 什麼是 Angular？

Angular 是一個基於 [TypeScript](https://www.typescriptlang.org/) 建構的框架與開發平台。它用於建立一頁式 Web 應用程式。作為一個平台，Angular 包含：

- 一個用於建構可擴展 Web 應用程式的組件式框架
- 一系列整合良好的函式庫，涵蓋了各種功能，包括路由、表單管理、用戶端-伺服器通訊等
- 一套開發者工具，幫助你開發、建置、測試和更新你的程式碼

當你使用 Angular 建構應用程式時，你正在利用一個可以從單一開發者專案擴展到企業級應用程式的平台。Angular 的設計旨在讓更新盡可能地簡單，因此你可以用最少的力氣利用最新的開發成果。最棒的是，Angular 生態系由超過 170 萬名開發者、函式庫作者和內容創作者組成的多元社群所構成。

在你開始探索 Angular 平台之前，你應該先了解 Angular CLI。Angular CLI 是開發 Angular 應用程式最快、最簡單且推薦的方式。Angular CLI 讓許多任務變得簡單。以下是一些你會經常使用的範例命令：

| 命令                                              | 描述                                                  |
| ------------------------------------------------- | ----------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | 編譯一個 Angular 應用程式到一個輸出目錄。             |
| [`ng serve`](https://angular.dev/cli/serve)       | 建置並提供你的應用程式，檔案變更時會重新建置。        |
| [`ng generate`](https://angular.dev/cli/generate) | 根據一個 schematic 產生或修改檔案。                   |
| [`ng test`](https://angular.dev/cli/test)         | 在指定的專案上執行單元測試。                          |
| [`ng e2e`](https://angular.dev/cli/e2e)           | 建置並提供一個 Angular 應用程式，然後執行端對端測試。 |

你會發現 Angular CLI 是建構應用程式時一個很有價值的工具。

## 你將建構什麼

本教學系列將引導你建構一個待辦事項清單應用程式。透過這個應用程式，你將學習如何使用 Angular 來管理、編輯、新增、刪除和篩選項目。

## 先備知識

要在你的本地系統上安裝 Angular，你需要以下項目：

- **Node.js**

  Angular 需要 [active LTS 或 maintenance LTS](https://nodejs.org/en/about/previous-releases) 版本的 Node.js。關於特定版本需求的資訊，請參見[版本相容性](https://angular.dev/reference/versions)頁面。

  關於安裝 Node.js 的更多資訊，請參見 [nodejs.org](https://nodejs.org/en/download)。如果你不確定系統上執行的 Node.js 版本，請在終端機視窗中執行 `node -v`。

- **npm 套件管理器**

  Angular、Angular CLI 和 Angular 應用程式依賴 [npm 套件](https://docs.npmjs.com/getting-started/what-is-npm/)來實現許多特性和功能。要下載和安裝 npm 套件，你需要一個 npm 套件管理器。本指南使用 [npm client](https://docs.npmjs.com/cli/install/) 命令列介面，它預設會與 `Node.js` 一起安裝。要檢查你是否已安裝 npm client，請在終端機視窗中執行 `npm -v`。

## 建立一個 Angular 應用程式

你可以使用 Angular CLI 在終端機中執行命令，以產生、建置、測試和部署 Angular 應用程式。要全域安裝 Angular CLI，請在終端機中執行以下命令：

```bash
npm install -g @angular/cli
```

Angular CLI 的命令都以 `ng` 開頭，後面接著你希望 CLI 執行的動作。建立一個你想要建置應用程式的新目錄，並在終端機中切換到該目錄。然後使用以下的 [`ng new`](https://angular.dev/cli/new) 命令來建立一個名為 `todo` 的新應用程式：

```bash
ng new todo --routing=false --style=css --ssr=false
```

`ng new` 命令會建立一個最小的入門 Angular 應用程式。額外的旗標 `--routing`、`--style` 和 `--ssr` 定義了如何在應用程式中處理導航和樣式，並組態伺服器端算繪。本教學稍後會更詳細地描述這些功能。

第一次執行 `ng` 時，系統可能會詢問你是否要啟用終端機的[自動完成](https://angular.dev/cli/completion)和分析功能。自動完成很方便，因為在輸入 `ng` 命令時按下 <kbd>TAB</kbd> 鍵會顯示可能的選項並自動完成引數。

你也可以決定是否允許將關於 CLI 使用情況的分析資料傳送給 Google 的 Angular 維護者。要了解更多關於分析的資訊，請參見 [Angular `ng analytics` CLI 文件](https://angular.dev/cli/analytics)。

要執行你的 `todo` 應用程式，請使用 `cd` 命令導覽到你的新專案，然後執行 `ng serve`：

```bash
cd todo
ng serve
```

在瀏覽器中，導覽到 `http://localhost:4200/` 來查看你的新入門應用程式。如果你變更任何原始碼檔案，應用程式會自動重新載入。

在 `ng serve` 執行期間，開啟第二個終端機分頁或終端機視窗來執行命令，而不用停止伺服器。如果你在任何時候想要停止提供你的應用程式，請在執行 `ng serve` 命令的終端機中按下 `Ctrl+c`。

## 熟悉你的 Angular 應用程式

本教學關注的應用程式原始碼檔案位於 `src/app` 中：

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

CLI 自動產生的關鍵檔案如下：

1. `app.component.ts`：也稱為類別，包含應用程式主頁面的邏輯。
2. `app.component.html`：包含 `AppComponent` 的 HTML。此檔案的內容也稱為範本。範本決定了視圖，也就是你在瀏覽器中看到的內容。
3. `app.component.css`：包含 `AppComponent` 的樣式。當你想要定義只適用於特定組件而非整個應用程式的樣式時，會使用此檔案。

在 Angular 中，一個組件由三個主要部分組成——範本、樣式和類別。例如，`app.component.ts`、`app.component.html` 和 `app.component.css` 共同構成了 `AppComponent`。這種結構將邏輯、視圖和樣式分開，使應用程式更易於維護和擴展。透過這種方式，你從一開始就採用了最佳實踐。

Angular CLI 也會產生一個名為 `app.component.spec.ts` 的組件測試檔案，但本教學不涉及測試，所以你可以忽略該檔案。每當你產生一個組件時，CLI 都會在你指定的名稱的目錄中建立這些檔案，我們稍後會看到一個範例。

要了解更多關於測試的資訊，請參見 [Angular 測試指南](https://angular.dev/guide/testing)。

## Angular 應用程式的結構

Angular 是用 TypeScript 建構的。TypeScript 是 JavaScript 的超集合，這意味著任何有效的 JavaScript 都是有效的 TypeScript。TypeScript 提供了型別和比純 JavaScript 更簡潔的語法，這給你一個工具來建立更易於維護的程式碼並減少錯誤。

組件是 Angular 應用程式的建構區塊。一個組件包含一個帶有 `@Component()` 裝飾器的 TypeScript 類別。

### 裝飾器

你使用 `@Component()` 裝飾器來指定關於一個類別的後設資料（HTML 範本和樣式）。

### 類別

類別是你放置組件所需任何邏輯的地方。這些程式碼可以包含函式、事件監聽器、屬性以及對服務的參考等等。類別位於一個名為 `feature.component.ts` 的檔案中，其中 `feature` 是你組件的名稱。因此，你可能會有名為 `header.component.ts`、`signup.component.ts` 或 `feed.component.ts` 的檔案。你使用帶有後設資料的 `@Component()` 裝飾器來建立一個組件，這些後設資料告訴 Angular 在哪裡找到 HTML 和 CSS。一個典型的組件如下：

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  imports: [],
  // 以下的後設資料指定了組件其他部分的位置
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.css",
})
export class ItemComponent {
  // 程式碼寫在這裡
}
```

這個組件稱為 `ItemComponent`，其選擇器是 `app-item`。你可以像使用常規 HTML 標籤一樣使用選擇器，將其放置在其他範本中，即 `<app-item></app-item>`。當範本中存在選擇器時，每當遇到該選擇器的實例，瀏覽器就會算繪該組件的範本。本教學將引導你建立兩個組件，並在其中一個中使用另一個。

> [!NOTE]
> 上面組件的名稱是 `ItemComponent`，這也是類別的名稱。名稱相同僅僅是因為組件不過是一個由 TypeScript 裝飾器補充的類別。

Angular 的組件模型提供了強大的封裝和直觀的應用程式結構。組件也讓你的應用程式更容易進行單元測試，並可以提高程式碼的整體可讀性。

### HTML 範本

每個組件都有一個 HTML 範本，用來宣告該組件如何算繪。你可以行內定義此範本，也可以透過檔案路徑定義。

要參考外部 HTML 檔案，請使用 `templateUrl` 屬性：

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // 程式碼寫在這裡
}
```

要編寫行內 HTML，請使用 `template` 屬性並在反引號內編寫你的 HTML：

```ts
@Component({
  selector: "app-root",
  template: `<h1>待辦事項應用程式</h1>`,
})
export class AppComponent {
  // 程式碼寫在這裡
}
```

Angular 擴展了 HTML，提供了額外的語法，讓你可以從組件中插入動態值。當你的組件狀態改變時，Angular 會自動更新算繪後的 DOM。此功能的一個用途是插入動態文本，如下例所示。

```html
<h1>\{{ title }}</h1>
```

雙大括號指示 Angular 內插其中的內容。`title` 的值來自組件類別：

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: "<h1>\{{ title }}</h1>",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "待辦事項應用程式";
}
```

當應用程式載入組件及其範本時，瀏覽器會看到以下內容：

```html
<h1>待辦事項應用程式</h1>
```

### 樣式

一個組件可以從應用程式的 `styles.css` 檔案繼承全域樣式，並用自己的樣式來增強或覆蓋它們。你可以直接在 `@Component()` 裝飾器中編寫組件特定的樣式，或指定 CSS 檔案的路徑。

要將樣式直接包含在組件裝飾器中，請使用 `styles` 屬性：

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: ["h1 { color: red; }"],
})
export class AppComponent {
  // …
}
```

通常，組件會在一個單獨的檔案中使用樣式。你可以使用 `styleUrl` 屬性，其值為 CSS 檔案路徑的字串；如果有多個 CSS 樣式表要包含，則可以使用 `styleUrls`，其值為字串陣列：

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  // …
}
```

透過組件特定的樣式，你可以組織你的 CSS，使其易於維護和移植。

### 獨立組件

除非專案已經使用 [NgModules](https://angular.dev/guide/ngmodules)（Angular 模組）來組織程式碼，否則建議[讓組件成為獨立組件](https://angular.dev/guide/components/importing#standalone-components)。本教學使用[獨立組件](https://angular.dev/guide/components/importing#standalone-components)，這更容易上手。

通常會匯入 [`CommonModule`](https://angular.dev/api/common/CommonModule)，這樣你的組件就可以使用常見的[命令](https://angular.dev/guide/directives)和[管道](https://angular.dev/guide/pipes)。

```ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [CommonModule],
})
export class AppComponent {
  // …
}
```

## 總結

以上就是你對 Angular 的初步介紹。至此，你應該已經設定好並準備好建構一個 Angular 應用程式，並且對 Angular 的運作方式有了基本的了解。在下一篇文章中，我們將深化這些知識，並開始建構我們的待辦事項清單應用程式的結構。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
