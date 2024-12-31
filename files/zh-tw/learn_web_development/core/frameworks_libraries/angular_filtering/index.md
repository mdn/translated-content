---
title: 篩選我們的待辦事項項目
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

現在讓我們來增加功能，讓使用者篩選待辦事項，這樣他們就可以選擇查看進行中、已完成，或是全部的事項。

<table>
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉基礎的 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a> ，
        <a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS</a> 與
        <a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a> 語言，以及<a
          href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >終端機/命令列</a
        >的知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>替我們的應用程式增加篩選功能。</td>
    </tr>
  </tbody>
</table>

## 我們的篩選功能程式碼

篩選項目的功能是建立於你先前加入在 `app.component.ts` 的 `filter` 屬性

```js
filter: 'all' | 'active' | 'done' = 'all';
```

filter 屬性的預設值為 `all`，但是它也可以被設置為 `active` 或是 `done`。

## 增加篩選的控制項

在 `app.component.html` 新增下列 HTML 並且放在 **Add** 按鈕與項目表單之間。
在下列這個片段中，你的 HTML 中現有的部分是被註解起來的，這樣讓你可以更清楚地看到該把按鈕放在什麼位置。

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

<!-- Buttons that show all, still to do, or done items on click -->
<div class="btn-wrapper">
  <button
    class="btn btn-menu"
    [class.active]="filter == 'all'"
    (click)="filter = 'all'">
    All
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'active'"
    (click)="filter = 'active'">
    To Do
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'done'"
    (click)="filter = 'done'">
    Done
  </button>
</div>

<!-- <h2>\{{items.length}} item(s)</h2>
        <ul>... -->
```

點擊按鈕改變 `filter` 點擊按鈕改變 filter 的值，這將會決定哪些 `項目` 應該顯示，以及 Angular 套用於啟用狀態按鈕的樣式。

- 如果使用者點擊了 **All** 的按鈕，全部的項目都會顯示。
- 如果使用者點擊了 **To do** 的按鈕，只有 `done` 的值為 `false` 的項目會顯示。
- 如果使用者點擊了 **Done** 的按鈕，只有 `done` 的值為 `true` 的項目會顯示。

class 屬性可以用使用方括號 `[]` 來綁定，控制按鍵上的文字顏色，
當 `filter` 的值符合表達式的時候，類別綁定器 `[class.active]` 會套用 `active` class。
例如：當使用者點擊了 **Done** 按鈕，將會把 `filter` 的值設為 `done` ，這時候 `filter == 'done'` 這個表達式將會成立，也就是為邏輯真值 `true`。
當 `filter` 的值為 `done` ， Angular 就會套用 `active` class 到 **Done** 按鈕上，使得文字變為綠色。
而當使用者點擊了其他的按鈕，使得 `filter` 的值不再是 `done` 時，就不會再套用綠色在文字上了。

## 結語

真是快！因為你已經有了 `filter` 的程式碼在 `app.component.ts` 中，你所需要做的就是編輯模板，以便於提供篩選項的控制項。我們的下一個，同時也是最後一個主題，探討了如何建立用於生產環境的 Angular 應用程式，並且提供了近一步的資源來帶領繼續你踏上學習之旅。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
