---
title: 篩選我們的待辦事項
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

現在，讓我們繼續新增功能，讓使用者可以篩選他們的待辦事項，以便他們可以檢視進行中、已完成或所有的事項。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        熟悉核心的 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a> 語言，並了解<a
          href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >終端機／命令列</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>為我們的應用程式新增篩選功能。</td>
    </tr>
  </tbody>
</table>

## 我們的篩選程式碼

篩選事項的功能建立在你先前新增到 `app.component.ts` 的 `filter` 屬性上：

```ts
export class AppComponent {
  // …
  filter: "all" | "active" | "done" = "all";
  // …
}
```

`filter` 的預設值為 `all`，但也可以是 `active` 或 `done`。

## 新增篩選控制項

在 `app.component.html` 中，將以下 HTML 新增到**新增**按鈕下方，但在列出事項的區塊上方。在下方的程式碼片段中，你 HTML 中現有的區塊會以註解顯示，這樣你就可以確切地知道要把按鈕放在哪裡。

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">新增</button>
 -->

<!-- 按下後可顯示所有、待辦或已完成事項的按鈕 -->
<div class="btn-wrapper">
  <button
    class="btn btn-menu"
    [class.active]="filter === 'all'"
    (click)="filter = 'all'">
    所有
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter === 'active'"
    (click)="filter = 'active'">
    待辦
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter === 'done'"
    (click)="filter = 'done'">
    已完成
  </button>
</div>

<!-- <h2>\{{items.length}} 個事項</h2>
         <ul>... -->
```

點擊按鈕會改變 `filter` 的值，這決定了要顯示哪些 `items`，以及 Angular 要套用到作用中按鈕的樣式。

- 如果使用者點擊**所有**按鈕，則會顯示所有的事項。
- 如果使用者點擊**待辦**按鈕，則只會顯示 `done` 值為 `false` 的事項。
- 如果使用者點擊**已完成**按鈕，則只會顯示 `done` 值為 `true` 的事項。

一個使用方括號 `[]` 的 class 屬性綁定，控制了按鈕的文字顏色。class 綁定 `[class.active]` 會在 `filter` 的值符合表達式時，套用 `active` class。例如，當使用者點擊**已完成**按鈕時，會將 `filter` 的值設定為 `done`，此時 class 綁定表達式 `filter === 'done'` 的求值結果為 `true`。當 `filter` 的值為 `done` 時，Angular 會將 `active` class 套用到**已完成**按鈕上，使其文字顏色變為綠色。一旦使用者點擊了其他按鈕，`filter` 的值就不再是 `done`，所以綠色的文字顏色也就不再套用。

## 總結

這很快吧！因為你已經在 `app.component.ts` 中有了 `filter` 的程式碼，所以你只需要編輯範本來提供篩選事項的控制項。我們的下一篇（也是最後一篇）文章將會探討如何建置你的 Angular 應用程式以準備好用於生產環境，並提供更多資源來繼續你的學習之旅。

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
