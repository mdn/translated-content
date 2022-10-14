---
title: 篩選我們的待辦事項項目
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

現在讓我們來增加功能，讓使用者篩選待辦事項，這樣他們就可以選擇查看進行中、已完成，或是全部的事項。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉基礎的 <a href="/zh-TW/docs/Learn/HTML">HTML</a> ，
        <a href="/zh-TW/docs/Learn/CSS">CSS</a> 與
        <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> 語言，以及<a
          href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
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

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Getting started with Angular](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Beginning our Angular todo list app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Styling our Angular app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Creating an item component](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtering our to-do items](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Building Angular applications and further resources](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
