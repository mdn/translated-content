---
title: 建立一個 item 元件
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

元件可以用來幫助你組織你的應用程式。這篇文章會引導你建立一個元件，用來管理清單列表中的個別項目，包含加入核取方塊、編輯和刪除功能。這邊也會介紹 Angular 事件模型。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉主要的 <a href="/zh-TW/docs/Learn/HTML">HTML</a>，<a
          href="/zh-TW/docs/Learn/CSS"
          >CSS</a
        >
        和 <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> 語言和<a
          href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >terminal/command line</a
        >知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        掌握更多元件知識，包含如何使用事件來處理資料更新，以及加入核取方塊、編輯和刪除的功能。
      </td>
    </tr>
  </tbody>
</table>

## 建立一個新的元件

使用如下的 CLI 指令,在命令行建立一個名為 `item` 元件：

```bash
ng generate component item
```

指令 `ng generate component` 創建了以你指定名稱的元件及對應資料夾。這邊的元件和資料夾名稱為 `item`。你可以在 `app` 資料夾下找到 `item` 目錄。

與 `AppComponent` 一樣， `ItemComponent` 是由下列文件組成：

- 用於 HTML 的 `item.component.html`
- 用於邏輯的 `item.component.ts`
- 用於樣式的 `item.component.css`

你可以在 `item.component.ts` 的 `@Component()`的裝飾器中找到 HTML 和 CSS 文件的參照位置。

```js
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
```

## 為 ItemComponent 添加 HTML

`ItemComponent` 元件能讓使用者檢查已完成的項目，並對其進行編輯或刪除。

為了增加管理項目的標記，使用下面程式碼替換 `item.component.html` 中的佔位符內容。

```html
<div class="item">
  <input
    [id]="item.description"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <label [for]="item.description">\{{item.description}}</label>

  <div class="btn-wrapper" *ngIf="!editable">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
  </div>

  <!-- This section shows only if user clicks Edit button -->
  <div *ngIf="editable">
    <input
      class="sm-text-input"
      placeholder="edit item"
      [value]="item.description"
      #editedItem
      (keyup.enter)="saveItem(editedItem.value)" />

    <div class="btn-wrapper">
      <button class="btn" (click)="editable = !editable">Cancel</button>
      <button class="btn btn-save" (click)="saveItem(editedItem.value)">
        Save
      </button>
    </div>
  </div>
</div>
```

第一個 input 是一個核取方塊，讓用戶可以在完成該項目後勾選以核對。核取方塊的 `<input>` 和 `<label>` 中的雙大括號 `\{{}}` 表示 Angular 的內嵌繫結。
Angular 使用 `\{{item.description}}` 從 `items` 陣列中獲取當前 `item` 的描述。下一節將詳細解釋元件如何共享數據。

接下來的用於編輯和刪除當前項目的兩個按鈕位於 `<div>` 內。 `<div>` 內的 `*ngIf`，是內置的 Angular 結構型指令，可動態更改 DOM 的結構。

`*ngIf` 表示如果 `editable` 的值為 false，則此 `<div>` 會出現在 DOM 中。如果 `editable` 的值為 true，則 Angular 將從 DOM 中移除該 `<div>`。

```html
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```

當用戶點擊 **Edit** 按鈕時，`editable` 的值變為 true，這將從 DOM 中移除此 `<div>` 和它的子元素。如果用戶點擊 **Delete** 而不是點擊 **Edit**，則 `ItemComponent` 將觸發一個刪除事件，用來通知 `AppComponent` 做刪除動作。

在下一個 `<div>` 裡也放上了 `*ngIf`，不過它的判斷條件是當 `editable` 為 true 的情況下，Angular 會將該 `<div>` 和其子元素 `<input>` 和 `<button>`放入 DOM 中。

```html
<!-- This section shows only if user clicks Edit button -->
<div *ngIf="editable">
  <input
    class="sm-text-input"
    placeholder="edit item"
    [value]="item.description"
    #editedItem
    (keyup.enter)="saveItem(editedItem.value)" />

  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Cancel</button>
    <button class="btn btn-save" (click)="saveItem(editedItem.value)">
      Save
    </button>
  </div>
</div>
```

設置 `[value]="item.description"`，`<input>` 的值將綁定到當前項目的 `description` 屬性。此綁定使項目的 `description` 成為`<input>` 的值。因此如果將 `description` 設為 `eat`， 因為 `<input>` 已經和 `description` 綁定。所以，當用戶編輯項目時，`<input>` 的值已被設為 `eat`。

`<input>` 上的範本變數 `#editedItem` 表示 Angular 將用戶在此 `<input>` 中輸入的內容儲存在名為 `editedItem` 的變數中。如果用戶在輸入後選擇按 Enter 而不是點擊 **Save**，則 `keyup` 事件將調用 `saveItem()` 方法並傳遞 `editedItem` 變數的值。

當用戶點擊 **Cancel** 按鈕時，`editable` 的值將切換為 `false`，連帶從 DOM 中移除編輯相關的輸入框和按鈕。當 `editable` 的值為 `false` 時，Angular 將含有 **Edit** 和 **Delete** 按鈕的 `<div>` 放回 DOM 中。

點擊 **Save** 按鈕將調用 `saveItem()` 方法。 `saveItem()`方法從 `<input>` 中的範本變數 `#editedItem` 取得值，並將該項目的 `description` 更改為 `editedItem.value` 的值。

## 準備 AppComponent

在下一章節，您將添加用來溝通 `AppComponent` 和 `ItemComponent` 的程式碼。首先將以下內容添加到 `app.component.ts` 中來配置 AppComponent：

```js
remove(item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
```

上面 `remove()` 方法使用了 JavaScript `Array.splice()` 方法，並透過 `indexOf` 取得欲刪除項目的陣列索引中位置，以從陣列中刪除該項目。
簡單來說，`splice()` 方法從陣列中刪除了該項目。 `splice()` 的更多訊息請參閱 MDN Web 文章：[`Array.prototype.splice()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)。

## 在 ItemComponent 添加邏輯

使用 `ItemComponent` UI， 你必須在元件中添加邏輯，就跟在 function 中寫輸入與輸出的方式一樣。

在 `item.component.ts`，引入 JavaScript，如下所示：

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";
```

加入 `Input` ， `Output`,和 `EventEmitter` 使 `ItemComponent` 可以與 `AppComponent` 共享數據，
透過匯入 `Item` ， 就可以知道在 `ItemComponent` 的 `item` 為何。

繼續看 `item.component.ts` ，把生成的 `ItemComponent` 替換成以下內容：

```js
export class ItemComponent {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
```

`editable` 屬性有助於切換模板，讓使用者可以編輯其項目。HTML 中的 `editable` 屬性與 `*ngIf` 語句中的屬性相同， `*ngIf="editable"`。當你在模板使用此屬性時，你也必須在 class 中宣告它。

`@Input()` ， `@Output()` 和 `EventEmitter` 促進兩個元件中的溝通，一個 `@Output()` 服務元件做為資料傳進的入口，然後一個 `@Output()` 是將元件資料傳到外層。`@Output()` 必須是 `EventEmitter` 的類型，資料可以透過事件分享至其他組件。

使用 `@Input()`指定外部元件要傳進之屬性的值，將 `@Output()` 與 `EventEmitter` 結合使用可將該元件指定屬性的值傳出，使得另一個元件可以接收其資料。

`saveItem()` 方法是在 `description` 取得一個引數，此`description` 為使用者輸入 HTML 的 `<input>` 標籤編輯清單的項目時的文字，
此 `description` 與 `<input>` 中帶有 `#editedItem` 範本變數的字符串相同。

如果使用者沒有輸入任何的值但點擊 **Save** 時，`saveItem()` 不會回傳任何東西與更新 `description`。如果你沒有用 `if` ，使用者就可以在 HTML 的 `<input>` 沒有值的時候點擊 **Save**，並且 `description` 會是空字串。

如果使用者輸入文字並點擊儲存， `saveItem()` 會設定 `editable` 是 false，這會導致模板中的`*ngIf` 移除編輯功能並重新渲染 **Edit** 跟 **Delete** 的按鈕

儘管程式現在可以編譯，你必須在 `AppComponent` 中使用 `ItemComponent` 才能在瀏覽器看到新功能。

## 在 AppComponent 中使用 ItemComponent

在父子關係的情境下，可將一個組件包含在另一個組件中，讓您靈活地使用它們。

`AppComponent` 就像個應用程式的外殼，可在內部加入其他元件

要在 `AppComponent` 中使用 `ItemComponent`，需將 `ItemComponent` 選擇器放到 `AppComponent` 中。Angular 在元件共享數據的元件中使用 `@Component()` 裝飾器，此選擇器為 `app-item`:

```js
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
```

要在 `AppComponent` 中使用 `ItemComponent` 選擇器時，你要增加元素 `<app-item>`，它對應你在 `app.component.html` 中對元件類別定義的選擇器。用以下更新的版本替換在 `app.component.html` 中未排序清單:

```html
<h2>
  \{{items.length}}
  <span *ngIf="items.length === 1; else elseBlock">item</span>
  <ng-template #elseBlock>items</ng-template>
</h2>

<ul>
  <li *ngFor="let item of items">
    <app-item (remove)="remove(item)" [item]="item"></app-item>
  </li>
</ul>
```

雙括號 `\{{}}`，在 `<h2>` 內顯示 `items` 的長度與數目。

在 `<h2>` 中 `<span>` 使用 `*ngIf` 與 `else` 決定 `<h2>` 是否要呈現 "item" 或 "items"。如果在列表中只有一個項目， 則 `會顯示包含 <span> 的內容。當items 陣列不等於 1 時，被我們命名為 elseBlock 的 <ng-template>，將顯示 #elseBlock，而不是 <span>。當您不想內容在預設渲染的時候，可以使用 Angular 的 <ng-template> ，因 #elseBlock 不是 <span>，是使用 <ng-template>。在此範例中，若 item 陣列長度不是 1 ，則 *ngIf 會顯示 elseBlock 而不顯示 <span>。`

在 `<li>` 使用 Angular 的結構型指令 `*ngFor` 會在 `items`陣列迭代所有的項目，Angular 的 `*ngFor` 與 `*ngIf` 指令相似，是另一個可以協助你用更少的程式碼改變 DOM 元素架構，每一個 `item`，Angular 會重複 `<li>` 與其所有的內容，其中包含 `<app-item>`。這代表 Angular 為陣列中的每一個項目建立另一個 `<app-item>` 實體。Angular 會建立與 `items` 陣列中的數量相同的項目的 `<li>` 元素。

您可使用 `*ngFor` 在其他的元素上，像是在 `<div>`、`<span>` 或是 `<p>`，以此類推。

在 `AppComponent` 有一個移除項目的 `remove()` 的方法，是綁定 `ItemComponent` 中 remove 的屬性，此 `item` 屬性是在中括號內 `[]`,用來綁定 `item` 在 `AppComponent` 與 `ItemComponent` 之間的值。

現在你應該知道如何編輯和刪除在列表中的項目。當你新增或刪除項目時，項目的數量也會更動，為了使列表更易於使用，請在 `ItemComponent` 中新增些樣式。

## 為 ItemComponent 添加樣式

你可以使用元件的 styles sheet 去增加該元件的樣式。下面的 CSS 增加了基本的樣式，對按鈕添加 flexbox 屬性和客製化了核取方塊。

將下面的樣式程式碼貼至 `item.component.css`。

```css
.item {
  padding: 0.5rem 0 0.75rem 0;
  text-align: left;
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.btn {
  /* menu buttons flexbox styles */
  flex-basis: 49%;
}

.btn-save {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.btn-save:hover {
  background-color: #444242;
}

.btn-save:focus {
  background-color: #fff;
  color: #000;
}

.checkbox-wrapper {
  margin: 0.5rem 0;
}

.btn-warn {
  background-color: #b90000;
  color: #fff;
  border-color: #9a0000;
}

.btn-warn:hover {
  background-color: #9a0000;
}

.btn-warn:active {
  background-color: #e30000;
  border-color: #000;
}

.sm-text-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #555;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 1rem 0;
}

/* Custom checkboxes
Adapted from https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes */

/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "\2713\0020";
  position: absolute;
  top: 0.15em;
  left: 0.22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all 0.2s;
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}
```

## 結論

您現在應該擁有一個樣式化的 Angular 待辦事項列表應用程序，該應用程序可以添加，編輯和刪除項目。下一步是加入過濾功能，以便您可以查看符合特定條件的項目。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
