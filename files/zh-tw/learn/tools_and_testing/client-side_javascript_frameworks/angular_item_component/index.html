---
title: 建立一個 item 元件
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component
tags:
  - 初學者
  - 框架
  - 安裝
  - 學習
  - 用戶端
  - 元件
  - 事件
  - 資料
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - client-side
  - Angular
  - Components
  - Events
  - Data
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p>元件可以用來幫助你組織你的應用程式。這篇文章會引導你建立一個元件，用來管理清單列表中的個別項目，包含加入核取方塊、編輯和刪除功能。這邊也會介紹 Angular 事件模型。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">預備知識：</th>
    <td>熟悉主要的 <a href="/zh-TW/docs/Learn/HTML">HTML</a>，<a href="/zh-TW/docs/Learn/CSS">CSS</a> 和 <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> 語言和<a href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">terminal/command line</a>知識。
   </td>
  </tr>
  <tr>
   <th scope="row">學習目標：</th>
   <td>掌握更多元件知識，包含如何使用事件來處理資料更新，以及加入核取方塊、編輯和刪除的功能。</td>
  </tr>
 </tbody>
</table>

<h2 id="creating_the_new_component">建立一個新的元件</h2>

<p>使用如下的 CLI 指令,在命令行建立一個名為 <code>item</code> 元件：</p>

<pre class="brush: bash">ng generate component item</pre>

<p>指令 <code>ng generate component</code> 創建了以你指定名稱的元件及對應資料夾。這邊的元件和資料夾名稱為 <code>item</code>。你可以在 <code>app</code> 資料夾下找到 <code>item</code> 目錄。</p>
  
<p>與 <code>AppComponent</code> 一樣， <code>ItemComponent</code> 是由下列文件組成：</p>

<ul>
  <li>用於 HTML 的 <code>item.component.html</code></li>
  <li>用於邏輯的 <code>item.component.ts</code></li>
  <li>用於樣式的 <code>item.component.css</code></li>
</ul>

<p>你可以在 <code>item.component.ts</code> 的 <code>@Component()</code>的裝飾器中找到 HTML 和 CSS 文件的參照位置。</p>

<pre class="brush: js">@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})</pre>

<h2 id="add_html_for_the_itemcomponent-">為 ItemComponent 添加 HTML</h2>

<p><code>ItemComponent</code> 元件能讓使用者檢查已完成的項目，並對其進行編輯或刪除。</p>

<p>為了增加管理項目的標記，使用下面程式碼替換 <code>item.component.html</code> 中的佔位符內容。</p>

<pre class="brush: html">&lt;div class="item"&gt;

  &lt;input [id]="item.description" type="checkbox" (change)="item.done = !item.done" [checked]="item.done" /&gt;
  &lt;label [for]="item.description"&gt;\{{item.description}}&lt;/label&gt;

  &lt;div class="btn-wrapper" *ngIf="!editable"&gt;
    &lt;button class="btn" (click)="editable = !editable"&gt;Edit&lt;/button&gt;
    &lt;button class="btn btn-warn" (click)="remove.emit()"&gt;Delete&lt;/button&gt;
  &lt;/div&gt;

  &lt;!-- This section shows only if user clicks Edit button --&gt;
  &lt;div *ngIf="editable"&gt;
    &lt;input class="sm-text-input" placeholder="edit item" [value]="item.description" #editedItem (keyup.enter)="saveItem(editedItem.value)"&gt;

    &lt;div class="btn-wrapper"&gt;
      &lt;button class="btn" (click)="editable = !editable"&gt;Cancel&lt;/button&gt;
      &lt;button class="btn btn-save" (click)="saveItem(editedItem.value)"&gt;Save&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;/div&gt;</pre>


<p>第一個 input 是一個核取方塊，讓用戶可以在完成該項目後勾選以核對。核取方塊的 <code>&lt;input&gt;</code> 和 <code>&lt;label&gt;</code> 中的雙大括號 <code>\{{}}</code> 表示 Angular 的內嵌繫結。
Angular使用 <code>\{{item.description}}</code> 從 <code>items</code> 陣列中獲取當前 <code>item</code> 的描述。下一節將詳細解釋元件如何共享數據。</p>

<p>接下來的用於編輯和刪除當前項目的兩個按鈕位於 <code>&lt;div&gt;</code> 內。 <code>&lt;div&gt;</code> 內的 <code>*ngIf</code>，是內置的 Angular 結構型指令，可動態更改 DOM 的結構。</p>

<p> <code>*ngIf</code> 表示如果 <code>editable</code> 的值為 false，則此 <code>&lt;div&gt;</code> 會出現在 DOM 中。如果 <code>editable</code> 的值為 true，則 Angular 將從 DOM 中移除該 <code>&lt;div&gt;</code>。</p>


<pre class="brush: html">&lt;div class="btn-wrapper" *ngIf="!editable"&gt;
  &lt;button class="btn" (click)="editable = !editable"&gt;Edit&lt;/button&gt;
  &lt;button class="btn btn-warn" (click)="remove.emit()"&gt;Delete&lt;/button&gt;
&lt;/div&gt;</pre>



<p>當用戶點擊 <strong>Edit</strong> 按鈕時，<code>editable</code> 的值變為 true，這將從 DOM 中移除此 <code>&lt;div&gt;</code> 和它的子元素。如果用戶點擊 <strong>Delete</strong> 而不是點擊 <strong>Edit</strong>，則 <code>ItemComponent</code> 將觸發一個刪除事件，用來通知 <code>AppComponent</code> 做刪除動作。</p>


<p>在下一個 <code>&lt;div&gt;</code> 裡也放上了 <code>*ngIf</code>，不過它的判斷條件是當 <code>editable</code> 為 true 的情況下，Angular 會將該 <code>&lt;div&gt;</code> 和其子元素 <code>&lt;input&gt;</code> 和 <code>&lt;button&gt;</code>放入 DOM 中。</p>
  

<pre class="brush: html">&lt;!-- This section shows only if user clicks Edit button --&gt;
&lt;div *ngIf="editable"&gt;
  &lt;input class="sm-text-input" placeholder="edit item" [value]="item.description" #editedItem (keyup.enter)="saveItem(editedItem.value)"&gt;

  &lt;div class="btn-wrapper"&gt;
    &lt;button class="btn" (click)="editable = !editable"&gt;Cancel&lt;/button&gt;
    &lt;button class="btn btn-save" (click)="saveItem(editedItem.value)"&gt;Save&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p>設置 <code>[value]=&quot;item.description&quot;</code>，<code>&lt;input&gt;</code> 的值將綁定到當前項目的 <code>description</code> 屬性。此綁定使項目的 <code>description</code> 成為<code>&lt;input&gt;</code> 的值。因此如果將 <code>description</code> 設為 <code>eat</code>， 因為 <code>&lt;input&gt;</code> 已經和 <code>description</code> 綁定。所以，當用戶編輯項目時，<code>&lt;input&gt;</code> 的值已被設為 <code>eat</code>。</p>

<p><code>&lt;input&gt;</code> 上的範本變數 <code>#editedItem</code> 表示 Angular 將用戶在此 <code>&lt;input&gt;</code> 中輸入的內容儲存在名為 <code>editedItem</code> 的變數中。如果用戶在輸入後選擇按 Enter 而不是點擊 <strong>Save</strong>，則 <code>keyup</code> 事件將調用 <code>saveItem()</code> 方法並傳遞 <code>editedItem</code> 變數的值。</p>
  
<p>當用戶點擊 <strong>Cancel</strong> 按鈕時，<code>editable</code> 的值將切換為 <code>false</code>，連帶從 DOM 中移除編輯相關的輸入框和按鈕。當 <code>editable</code> 的值為 <code>false</code> 時，Angular 將含有 <strong>Edit</strong> 和 <strong>Delete</strong> 按鈕的 <code>&lt;div&gt;</code> 放回 DOM 中。</p>
  
<p>點擊 <strong>Save</strong> 按鈕將調用 <code>saveItem()</code> 方法。 <code>saveItem()</code>方法從  <code>&lt;input&gt;</code> 中的範本變數 <code>#editedItem</code> 取得值，並將該項目的 <code>description</code> 更改為 <code>editedItem.value</code> 的值。</p>

<h2 id="prepare_the_appcomponent">準備 AppComponent</h2>

<p>在下一章節，您將添加用來溝通 <code>AppComponent</code> 和 <code>ItemComponent</code> 的程式碼。首先將以下內容添加到 <code>app.component.ts</code> 中來配置 AppComponent：</p>

<pre class="brush: js">remove(item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}</pre>


<p>上面 <code>remove()</code> 方法使用了 JavaScript <code>Array.splice()</code> 方法，並透過 <code>indexOf</code> 取得欲刪除項目的陣列索引中位置，以從陣列中刪除該項目。
簡單來說，<code>splice()</code> 方法從陣列中刪除了該項目。 <code>splice()</code> 的更多訊息請參閱 MDN Web 文章：<a href="/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>Array.prototype.splice()</code></a>。</p>
  

<h2 id="add_logic_to_itemcomponent-">在 ItemComponent 添加邏輯</h2>

<p>使用 <code>ItemComponent</code> UI， 你必須在元件中添加邏輯，就跟在 function 中寫輸入與輸出的方式一樣。</p>

<p>在 <code>item.component.ts</code>，引入 JavaScript，如下所示：</p>

<pre class="brush: js">import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";</pre>

<p>加入 <code>Input</code> ， <code>Output</code>,和 <code>EventEmitter</code> 使 <code>ItemComponent</code> 可以與 <code>AppComponent</code> 共享數據，
透過匯入 <code>Item</code> ， 就可以知道在 <code>ItemComponent</code> 的 <code>item</code> 為何。</p>

<p>繼續看 <code>item.component.ts</code> ，把生成的 <code>ItemComponent</code> 替換成以下內容：</p>

<pre class="brush: js">export class ItemComponent {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter&lt;Item&gt;();

  saveItem(description) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}</pre>

<p><code>editable</code> 屬性有助於切換模板，讓使用者可以編輯其項目。HTML中的 <code>editable</code> 屬性與 <code>*ngIf</code> 語句中的屬性相同， <code>*ngIf=&quot;editable&quot;</code>。當你在模板使用此屬性時，你也必須在class中宣告它。</p>

<p><code>@Input()</code> ， <code>@Output()</code> 和 <code>EventEmitter</code> 促進兩個元件中的溝通，一個 <code>@Output()</code> 服務元件做為資料傳進的入口，然後一個 <code>@Output()</code> 是將元件資料傳到外層。<code>@Output()</code> 必須是 <code>EventEmitter</code> 的類型，資料可以透過事件分享至其他組件。</p>

<p>使用 <code>@Input()</code>指定外部元件要傳進之屬性的值，將 <code>@Output()</code> 與 <code>EventEmitter</code> 結合使用可將該元件指定屬性的值傳出，使得另一個元件可以接收其資料。</p>

<p><code>saveItem()</code> 方法是在 <code>description</code> 取得一個引數，此<code>description</code> 為使用者輸入 HTML 的 <code>&lt;input&gt;</code> 標籤編輯清單的項目時的文字，
此 <code>description</code> 與 <code>&lt;input&gt;</code> 中帶有 <code>#editedItem</code> 範本變數的字符串相同。</p>

<p>如果使用者沒有輸入任何的值但點擊 <strong>Save</strong> 時，<code>saveItem()</code> 不會回傳任何東西與更新 <code>description</code>。如果你沒有用 <code>if</code> ，使用者就可以在 HTML 的 <code>&lt;input&gt;</code> 沒有值的時候點擊 <strong>Save</strong>，並且 <code>description</code> 會是空字串。</p>

<p>如果使用者輸入文字並點擊儲存， <code>saveItem()</code> 會設定 <code>editable</code> 是 false，這會導致模板中的<code>*ngIf</code> 移除編輯功能並重新渲染 <strong>Edit</strong> 跟 <strong>Delete</strong> 的按鈕</p>

<p>儘管程式現在可以編譯，你必須在 <code>AppComponent</code> 中使用 <code>ItemComponent</code> 才能在瀏覽器看到新功能。</p>

<h2 id="use_the_itemcomponent_in_the_appcomponent">在 AppComponent 中使用 ItemComponent</h2>

<p>在父子關係的情境下，可將一個組件包含在另一個組件中，讓您靈活地使用它們。</p>

<p><code>AppComponent</code> 就像個應用程式的外殼，可在內部加入其他元件</p>

<p>要在 <code>AppComponent</code> 中使用 <code>ItemComponent</code>，需將 <code>ItemComponent</code> 選擇器放到 <code>AppComponent</code> 中。Angular 在元件共享數據的元件中使用 <code>@Component()</code> 裝飾器，此選擇器為 <code>app-item</code>:</p>

<pre class="brush: js">@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})</pre>

<p>要在 <code>AppComponent</code> 中使用 <code>ItemComponent</code> 選擇器時，你要增加元素 <code>&lt;app-item&gt;</code>，它對應你在 <code>app.component.html</code> 中對元件類別定義的選擇器。用以下更新的版本替換在 <code>app.component.html</code> 中未排序清單:</p>

<pre class="brush: html">&lt;h2&gt;\{{items.length}} &lt;span *ngIf="items.length === 1; else elseBlock"&gt;item&lt;/span&gt;
&lt;ng-template #elseBlock&gt;items&lt;/ng-template&gt;&lt;/h2&gt;

&lt;ul&gt;
  &lt;li *ngFor="let item of items"&gt;
    &lt;app-item (remove)="remove(item)" [item]="item"&gt;&lt;/app-item&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<p>雙括號 <code>\{{}}</code>，在 <code>&lt;h2&gt;</code> 內顯示 <code>items</code> 的長度與數目。</p>

<p>在 <code>&lt;h2&gt;</code> 中 <code>&lt;span&gt;</code> 使用 <code>*ngIf</code> 與 <code>else</code> 決定 <code>&lt;h2&gt;</code> 是否要呈現 &quot;item&quot; 或 &quot;items&quot;。如果在列表中只有一個項目， 則 <code> 會顯示包含 <code>&lt;span&gt;</code> 的內容。當<code>items</code> 陣列不等於 <code>1</code> 時，被我們命名為 <code>elseBlock</code> 的 <code>&lt;ng-template&gt;</code>，將顯示 <code>#elseBlock</code>，而不是 <code>&lt;span&gt;</code>。當您不想內容在預設渲染的時候，可以使用 Angular 的 <code>&lt;ng-template&gt;</code> ，因 #elseBlock 不是 <code>&lt;span&gt;</code>，是使用 <code>&lt;ng-template&gt;</code>。在此範例中，若 <code>item</code> 陣列長度不是 <code>1</code> ，則 <code>*ngIf</code> 會顯示 <code>elseBlock</code> 而不顯示 <code>&lt;span&gt;</code>。</code> 

<p>在 <code>&lt;li&gt;</code> 使用 Angular 的結構型指令 <code>*ngFor</code> 會在 <code>items</code>陣列迭代所有的項目，Angular 的 <code>*ngFor</code> 與 <code>*ngIf</code> 指令相似，是另一個可以協助你用更少的程式碼改變 DOM 元素架構，每一個 <code>item</code>，Angular 會重複 <code>&lt;li&gt;</code> 與其所有的內容，其中包含  <code>&lt;app-item&gt;</code>。這代表 Angular 為陣列中的每一個項目建立另一個 <code>&lt;app-item&gt;</code> 實體。Angular 會建立與 <code>items</code> 陣列中的數量相同的項目的 <code>&lt;li&gt;</code> 元素。</p>

<p>您可使用 <code>*ngFor</code> 在其他的元素上，像是在 <code>&lt;div&gt;</code>、<code>&lt;span&gt;</code> 或是 <code>&lt;p&gt;</code>，以此類推。</p>

<p>在 <code>AppComponent</code> 有一個移除項目的 <code>remove()</code> 的方法，是綁定 <code>ItemComponent</code> 中 remove 的屬性，此 <code>item</code> 屬性是在中括號內 <code>[]</code>,用來綁定 <code>item</code> 在 <code>AppComponent</code> 與 <code>ItemComponent</code> 之間的值。</p>

<p>現在你應該知道如何編輯和刪除在列表中的項目。當你新增或刪除項目時，項目的數量也會更動，為了使列表更易於使用，請在 <code>ItemComponent</code> 中新增些樣式。</p>

<h2 id="add_styles_to_itemcomponent-">為 ItemComponent 添加樣式</h2>

<p>你可以使用元件的 styles sheet 去增加該元件的樣式。下面的 CSS 增加了基本的樣式，對按鈕添加 flexbox 屬性和客製化了核取方塊。</p>
<p>將下面的樣式程式碼貼至 <code>item.component.css</code>。</p>

<pre class="brush: css">.item {
  padding: .5rem 0 .75rem 0;
  text-align: left;
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 1rem;
  margin-bottom: .5rem;
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
  margin: .5rem 0;
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
  padding: .5rem;
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
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 1.25em; height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '\2713\0020';
  position: absolute;
  top: .15em; left: .22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all .2s;
  font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
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
}</pre>

<h2 id="summary">結論</h2>

<p>您現在應該擁有一個樣式化的Angular待辦事項列表應用程序，該應用程序可以添加，編輯和刪除項目。下一步是加入過濾功能，以便您可以查看符合特定條件的項目。</p>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Introduction to client-side frameworks</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features">Framework main features</a></li>
 <li>React
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Getting started with React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning">Beginning our React todo list</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components">Componentizing our React app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state">React interactivity: Events and state</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility">Accessibility in React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">React resources</a></li>
  </ul>
 </li>
 <li>Ember
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started">Getting started with Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization">Ember app structure and componentization</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state">Ember interactivity: Events, classes and state</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer">Ember Interactivity: Footer functionality, conditional rendering</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing">Routing in Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources">Ember resources and troubleshooting</a></li>
  </ul>
 </li>
 <li>Vue
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">Getting started with Vue</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component">Creating our first Vue component</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists">Rendering a list of Vue components</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models">Adding a new todo form: Vue events, methods, and models</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling">Styling Vue components with CSS</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties">Using Vue computed properties</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering">Vue conditional rendering: editing existing todos</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management">Focus management with Vue refs</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources">Vue resources</a></li>
  </ul>
 </li>
 <li>Svelte
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started">Getting started with Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning">Starting our Svelte Todo list app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props">Dynamic behavior in Svelte: working with variables and props</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components">Componentizing our Svelte app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility">Advanced Svelte: Reactivity, lifecycle, accessibility</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores">Working with Svelte stores</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript">TypeScript support in Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next">Deployment and next steps</a></li>
  </ul>
 </li>
 <li>Angular
   <ul>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started">Getting started with Angular</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning">Beginning our Angular todo list app</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling">Styling our Angular app</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component">Creating an item component</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering">Filtering our to-do items</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building">Building Angular applications and further resources</a></li>
   </ul>
 </li>
</ul>