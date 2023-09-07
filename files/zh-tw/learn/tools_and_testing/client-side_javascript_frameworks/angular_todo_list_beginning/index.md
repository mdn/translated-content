---
title: 開始開發我們的 Angular 待辦事項應用程式
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

此刻，我們已準備好使用 Angular 來創建我們的待辦事項應用程式。完成後的應用程式將具有顯示待辦項目列表，並包含編輯、刪除與新增項目等功能。在本篇中，您將學到應用程式的結構，以及建立一個可顯示待辦項目的基礎列表。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉網頁核心語言 <a href="/zh-TW/docs/Learn/HTML">HTML</a> 、
        <a href="/zh-TW/docs/Learn/CSS">CSS</a> 與
        <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> ，並具備
        <a
          href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >terminal/command line</a
        >
        相關知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        藉由創建一個可顯示待辦事項列表的基本應用程式結構，協助了解 Angular
        的基礎概念，例如元件結構、元件間的共享資料，以及持續不斷的內容創作。
      </td>
    </tr>
  </tbody>
</table>

## 待辦事項應用程式的結構組成

就如同一個不使用框架的簡易應用程式， Angular 應用程式同樣有個 `index.html` 檔案。
在這個 `index.html` 的 `<body>` 標籤中， Angular 使用了一個特殊元素 — `<app-root>` — 來插入您的主要元件，該元件也包含著您所創建的其他元件。
一般而言，您並不需要碰觸到 `index.html` 這個檔案，反而應該專注於那些應用程式中的特定區域內的事務，這些稱之為元件。

### 使用元件來組織您的應用程式

元件是 Angular 的核心組成部分
這個待辦事項應用程式有兩個元件 ── 一個元件作為您的應用程式基底，另一個元件用來處理待辦事項。

每一個元件由一個 TypeScript 類別、 HTML 與 CSS 所組成。
由於 Typescript 轉譯（transpile），又或者說轉換（convert）為 JavaScript ，這意味著您的應用程式最後為純粹的 JavaScript ，但儘管如此，您仍保有使用 Typescript 擴展功能與精簡語法的便利性。

### 運用 \*ngIf 與 \*ngFor 來動態改變 UI

這份教學也涵蓋兩個重要的 Angular 指令（directive）來動態變更 DOM 的結構。
一個指令類似一個命令，讓您使用在您的 HTML 中，影響應用程式裡的變動。

第一個指令為 Angular 的迭代器（iterator） `*ngFor` 。
`*ngFor` 能根據一個陣列中項目動態建立 DOM 元素。

您會學到的第二個指令是 `*ngIf` 。
您能使用 `*ngIf` 根據某個條件來對 DOM 進行添加或移除元素。
例如，若使用者想要編輯在待辦列表中的某一個項目，您就需要提供他們編輯項目的各種方法。
若他們不想要編輯這個項目時，您也要移除這個編輯中的介面。

### 在元件之間共享資料

在這個待辦應用程式中，您需要配置元件來分享資料。
為了添加新的項目至待辦列表，主要的元件必須發送這個新項目到第二個元件。
第二個元件管理這些項目並且掌管編輯、標記已完成，以及刪除個別項目。

您可以使用具有特殊裝飾子 `@Input()` 與 `@Output()` 在 Angular 元件之間達成資料共享。
您使用這些裝飾子來指定哪些特定屬性允許資料輸入至一個元件或由一個元件輸出。
欲使用 `@Output()` ，您要在一個元件中引發一個事件，如此一來，其他的元件就會知道有可使用的資料。

## 定義項目

在 `app` 目錄中新建一個名為 `item.ts` 的檔案，包含以下內容：

```js
export interface Item {
  description: string;
  done: boolean;
}
```

這個 `Item` `interface` 用來建立一個 `item` 物件模型，讓您的應用程式能理解 `item` 到底是什麼。
對於這個待辦列表來說，一個 `item` 物件擁有說明與是否已完成兩個屬性。

## 將邏輯加入至 AppComponent

現在，您的應用程式知道了 `item` 為何物，您可以在 TypeScript 檔案 `app.component.ts` 中加入更多項目。
在 `app.component.ts` 中置換內容如下：

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "todo";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
}
```

第一行是以 JavaScript import 來匯入 Angular。
這個 `@Component()` 裝飾子指定關於 `AppComponent` 的元資料（metadata）。
預設元資料的屬性如下：

- `selector`: 代表您使用在範本內的 CSS 選擇器名稱，用以實例化這個元件。此處為 `'app-root'` 。
  當產生您的應用程式時，於 `index.html` 檔案中的 `body` 標籤內， Angular CLI 就已加入了 `<app-root></app-root>` 。
  您可以使用相同的方式來將元件選擇器加入至其他元件的 HTML 範本內。
- `templateUrl`: 指定與這個元件相關的 HTML 檔案。此處為 `'./app.component.html'` 。
- `styleUrls`: 提供要套用在這個元件的樣式表的檔案位址與名稱。此處為 `'./app.component.css'` 。

這個 `filter` 屬性為 `union` 型態，表示 `filter` 的值可能為 `all` 、 `active` ，或者 `done` 。
有了 `union` 型態，若您賦予 `filter` 屬性錯誤的值， TypeScript 會馬上讓您知道來及早除錯。
本指引接下來的步驟會展示如何為您的列表加入篩選功能，但您仍可以使用篩選器來顯示這個列表預設的所有項目。

這個 `allItems` 陣列包含所有待辦項目，其中也包含項目是否已完成的 `done` 屬性。
例如，第一個項目 `eat` 擁有值為 true 的 `done` 屬性。

當 `filter` 等於 `all` 時，這個 getter `get items()` 會由 `allItems` 陣列中獲取所有的項目。
否則， `get items()` 會回傳 `done` 的項目或是取決於使用者如何篩選的未完成項目。
此 getter 也會建立名為 `items` 的陣列名稱，這部分您將會在下個章節使用到。

## 將 HTML 加入至 AppComponent 的範本

為了在瀏覽器中看到列表中的項目，置換 `app.component.html` 內容為以下 HTML ：

```html
<div class="main">
  <h1>My To Do List</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

這個 `<li>` 包含了一個 Angular 的內建指令 `*ngFor` ，它可以迭代 `items` 陣列中的所有項目。
對於每一個項目， `*ngFor` 建立了一個新的 `<li>` 。
此處包住 `item.description` 的雙花括號指示 Angular 以每個項目的說明文字來填充每個 `<li>` 。

在瀏覽器中，您應該可以看到如下的項目列表：

```plain
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## 將項目加入至列表

一個待辦列表理所當然地需要有添加項目的方法。

在 `app.component.ts` 中，加入以下方法至此類別中：

```js
addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}
```

這個 `addItem()` 方法接受一個使用者提供的項目，並在使用者點擊 **Add** 按鈕時將之加入至陣列中。
這個 `addItem()` 方法使用了陣列方法的 `unshift()` 來添加一個新的項目到陣列的開頭位置與列表的頂端。
又或者，您也可以使用 `push()` 來添加一個新的項目到陣列的最後位置與列表的尾端。

為了能使用 `addItem()` 方法，編輯 `AppComponent` 範本中的 HTML 。

在 `app.component.html` 中置換 `<h2>` 為

```js
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput"
/>

<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
```

當使用者在 `<input>` 中輸入一個新的項目名稱並按下 **Enter** 鍵後， `addItem()` 方法隨即加入這筆資料至 `items` 陣列中。
按下 **Enter** 鍵的同時也會重設 `<input>` 的值為空字串。
或者，使用者也能透過點擊 **Add** 按鈕來呼叫相同的 `addItem()` 方法。

## 小結

目前為止，您應該已經在您的瀏覽器中顯示待辦事項列表。這是很大的進展！當然，我們仍有很多事要做。在下一篇文章，我們將研究在應用程式中加入一些樣式。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
