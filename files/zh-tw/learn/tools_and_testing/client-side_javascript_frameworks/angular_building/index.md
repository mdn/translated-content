---
title: 建構 Angular 應用程式與更多資源
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

這篇文章內容涵蓋，如何建立一個生產版本（production）的應用程式，以及提供後續的學習資源。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉 <a href="/zh-TW/docs/Learn/HTML">HTML</a>、<a
          href="/zh-TW/docs/Learn/CSS"
          >CSS</a
        >
        和
        <a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a> 的主要概念，以及
        <a
          href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >終端機／命令列</a
        >
        的知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>學會如何編譯你的 Angular 應用程式</td>
    </tr>
  </tbody>
</table>

## 建置最終版的應用程式

現在你已經完成開發你的應用程式，接著執行 Angular CLI `build` 的指令。
當你在 `todo` 的目錄底下執行 `build` 的指令，應用程式會編譯並且輸出到 `dist/` 的目錄下。

在 `todo` 目錄底下，且在命令列執行以下的命令：

```bash
ng build -c production
```

命令列介面——CLI（Command Line Interface），會將應用程式編譯並且輸出到新的目錄 `dist` 底下。這個 `--configuration production`/`-c production` 尾隨在 `ng build` 的參數，會移除在正式產品版本上不需要的東西。

## 部署你的應用程式

為了部署你的應用程式，你可以複製 `dist/my-project-name` 資料夾底下的內容到你的伺服器上。
因為這些都是靜態檔案，你可以將這些檔案放到任何能夠提供檔案的伺服器上，像是：

- [Node.js](https://nodejs.org)
- [Java](https://www.java.com)
- [.NET](https://dotnet.microsoft.com)

你可以使用任何後端，像是 [Firebase](https://firebase.google.com/docs/hosting)、[Google Cloud](https://cloud.google.com/solutions/web-hosting) 或 [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website)。

## 接著要做什麼

現在你已經建立了基本的應用程式，但是你的 Angular 學習旅程才剛開始，你可以探索 Angular 文件學習更多，像是：

- [英雄之旅](https://angular.io/tutorial)([正體中文版](https://angular.tw/tutorial))：一個深入的 Angular 重點課程，像是使用服務（service）、導覽（navigation）以及從伺服器取得資料。
- Angular [元件](https://angular.io/guide/component-overview) 指南：一系列的文章，主題包括生命週期、元件互動以及檢視封裝。
- [表單](https://angular.io/guide/forms-overview) 指南：文章內容包含建立 Angular 的響應式表單、輸入驗證以及建立動態表單。

## 總結

以上。希望您喜歡 Angular！

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## 在這個模組中

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

  - [Angular 新手入門](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [開始開發我們的 Angular 待辦事項應用程式](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [使用樣式點綴我們的 Angular 應用程式](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [建立一個 item 元件](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [篩選我們的待辦事項項目](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [建構 Angular 應用程式與更多資源](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
