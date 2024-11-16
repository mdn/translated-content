---
title: 理解 JavaScript 前端框架
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---

{{LearnSidebar}}

JavaScript 框架在前端開發佔有重要的地位：它能讓前端工程師透過千錘百鍊的工具，建立擴展性高、互動性強的網路程式。多數公司也視 JavaScript 框架為重要的前端工具。因此多數前端工程師，會需要擁有前端框架的技能。

身為一位富有抱負的前端工程師，學習前端框架時，可能很難確定要從哪裡開始：五花八門的框架可供選擇、隨時還有新的框架出現。儘管大多數框架用途類似，但實作方法千變萬化。而在使用框架時，也需要考慮無數情形。

在這裡，我們旨在理解前端框架方面，提供舒適的學習曲線：我們不會詳細說明 React/ReactDOM 或 Vue 亦或其他特定框架的資訊。框架開發團隊早就針對這方面，寫出了詳細的文件。相反地，我們想先著重回答更基本的問題：

- 為什麼要用框架？它能解決什麼問題？
- 選用框架時要考慮哪些問題？或甚至，我需要框架嗎？
- 框架擁有什麼功能？一般來說他們怎麼作動，或實作方面有哪些不同？
- 這些框架與「Vanilla JavaScript」（譯註：Vanilla JavaScript 是指原生 JavaScript）或 HTML 有什麼關係？

之後，我們將針對坊間主要框架提供教學，以便提供足夠鑽研下去的背景資訊。我們希望以務實且不忘基本實做（如無障礙）的方法，來理解框架這回事。

**[從「前端框架簡介」開始吧。](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## 先決條件

在理解前端框架前，你需要對 web 核心技術：[HTML](/zh-TW/docs/Learn/HTML)、[CSS](/zh-TW/docs/Learn/CSS)、以及最重要的[JavaScript](/zh-TW/docs/Learn/JavaScript)，擁有基本程度的理解。

如果理解構建框架的 Web 技術，你的程式會更豐富（richer）且更專業，同時也能更有信心地除錯。

## 概觀性教學

- [1. 前端框架介紹](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : 我們從整體概述來探討框架、提供 JavaScript 與框架的簡要歷史、框架存在的理由、他們提供什麼東西、如何決定選擇哪個框架、以及前端框架的的替代方案。
- [2. 框架的主要功能](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : 大多數主要的 JavaScript 前端框架在更動 DOM、處理瀏覽器事件、還有提供良好的開發體驗方面，使出了不同的方法。這篇文章將探討「四大框架」的主要功能、看看他們如完成高層次工作、以及這四個框架的相異之處。

## React 教學

> [!NOTE]
> 最近一次測試成功的 React 教學在 2020 年五月。版本為 React/ReactDOM 16.13.1 與 create-react-app 3.4.1。
>
> 如果想看看最新的程式，可以從我們的 [todo-react repository](https://github.com/mdn/todo-react) 或互動性的 <https://mdn.github.io/todo-react-build/> 看。

- [1. 開始學 React](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : 在這裡我們將開始與 React 打招呼。我們將探索其背景和用途的一些細節、在自己的電腦建立 React 全家桶、還有建立與把玩簡單的程式，以理解 React 是怎麼跑的。
- [2. 建立我們的 React todo list](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : 我們的任務是驗證 React 的概念（proof-of-concept）：我們將建立一個能讓使用者添加、編輯、刪除需要的工作，同時在不刪除工作的情況下，將它們標記為完成。本文將完成 `App` 組件的基本架構與樣式，以便為下個文章將探討的組件定義與響應性做準備。
- [3. 把 React app 組件化](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : 現在，我們的 app 整個黏在一起了。在做其他事情前，最好把這個程式切成一個個能管理，描述性也好的組件（component）。React 本身對組件的定義不多：那是取決於你的考量！我們將展示如何以聰明的方法，把程式切成一個個組件。
- [4. 響應性 React：事件與狀態](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : 在組件化以後，現在開始把原本靜態的 UI，能開始與我們實際互動，並修改資料吧。在這裡除了做這件事以外，我們還會深入探討事件和狀態。
- [5. 響應性 React：編輯、過濾、條件式過濾](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : 在初學 React 之路即將結束前（至少從現在來說），我們將在 Todo list app 裡面，添加畫龍點睛的主要功能：包括編輯已存在的工作、透過給定條件過濾全部、已完成、或未完成的工作。我們將不斷探討條件式 UI 渲染。
- [6. React 無障礙](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : 在教學最後，我們將削除最後的障礙：像是能增進可用性，同時降低鍵盤與螢幕報讀用戶困惑的 focus 管理。
- [7. React 的資源](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : 最後的最後，我們將提供鑽研 React 所需的資源。

## Ember 教學

> [!NOTE]
> 最近一次測試成功的 Ember 教學在 2020 年五月。版本為 Ember/Ember CLI 3.18.0。
>
> 如果想看看最新的程式，可以從我們的 [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc) 或互動性的 <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> 看。注意：部分功能沒有放在教學裡面。

- [1. 開始學 Ember](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : 首先我們將探討 Ember 的原理與用途，還有如何安裝 Ember 全家桶，建立簡單的 app，最後還有完成開發環境。
- [2. Ember app 架構與組件](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In this article we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.
- [3. 響應性 Ember：事件、類別、狀態](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : 此時，我們將開始給 app 添加一些響應性，從而能夠添加和顯示新的待辦事項。在此過程中，我們將研究如何在 Ember 中使用事件，創建組件類以包含用於控制交互功能的 JavaScript 程式，以及設置服務來跟踪應用程序的資料狀態。
- [4. 響應性 Ember：Footer 功能、條件式渲染](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : 現在是時候開始處理我們應用程序中的 Footer 功能了。在這裡，我們將更新待辦事項計數器，以顯示仍需完成的正確待辦事項數量，並將樣式正確應用於已完成待辦事項（即已選中復選框的位置）。我們還將連接「清除完成」按鈕。在此過程中，我們將學習在模板中使用條件式渲染的知識。
- [5. Ember 的路由](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : 在本文中，我們學習了路由，有時也稱為基於 URL 的過濾。我們將使用它為三個 Todo 視圖（「全部」、「活動」、「已完成」）中的每個視圖提供唯一的 URL。
- [6. Ember 的資源與除錯](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : 最後的最後，我們將提供鑽研 Ember 所需的資源，以及好用的相關資訊。

## Vue 教學

> [!NOTE]
> 最近一次測試成功的 Vue 教學在 2020 年五月。版本為 Vue 2.6.11。
>
> 如果想看看最新的程式，可以從我們的 [todo-vue repository](https://github.com/mdn/todo-vue) 或互動性的 <https://mdn.github.io/todo-vue/dist/> 看。

- [1. 開始學 Vue](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : 我們首先來介紹 Vue 吧。首先我們將聊聊 Vue 的背景、理解如何安裝新的專案、研究專案的整體架構與單一組件、如何讓專案在自己的電腦執行、並準備好建立一個新範例。
- [2. 建立第一個 Vue 組件](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : 現在來開始鑽研 Vue 並建立第一個組件吧：我們將給 todo list 的各個單元建立獨立的組件。在此同時，我們將學習一些重要概念：比如說在組件內使用組件、透過 prop 傳送資料、還有儲存資料的狀態。
- [3. 渲染 Vue 組件的列表](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : 現在我們已經有了一個能動的組件；現在將要給我們的 App 添加 `ToDoItem` 這個組件了。在這裡，我們將專精於如何給 `App.vue` 組件，添加一組 todo 的資料，接著使用 `v-for` 指令（directive）讓 `ToDoItem` 透過迴圈顯示出來。
- [4. 寫一個 todo 表單：Vue 的事件、方法、model](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : 我們已經放了一些資料，同時也透過迴圈把 `ToDoItem` 渲染出來了。接下來，我們將讓使用者輸入 todo 項目、同時需要文字 `<input>`、submit 之後的事件觸發、還有能控制資料的 model。這些就是我們會探討的重點。
- [5. 透過 CSS 樣式化 Vue 組件](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : 我們的程式看起來終於要漂亮一點了。我們將探討如何透過 CSS 樣式化 Vue 組件。
- [6. 使用 Vue 的計算屬性](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : 在這裡我們將使用 Vue 的計算（computed）屬性，加上一個 counter 已便顯示完成工作的數量。計算屬性的功能與 methods 類似，但它只會在資料更新時變動資料。
- [7. Vue 的條件式渲染：編輯已存在的待辦](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : 現在來添加一個還沒探討到的重要功能吧：那就是編輯已經存在的項目。要完成這件事，我們將借用 Vue 在條件式渲染的長才——也就是 `v-if` 與 `v-else`——在現有 todo 項目視圖間切換，同時編輯能更新的視圖。我們還會探討如何添加刪除待辦的功能。
- [8. 重點管理 Vue ref](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : 我們快講完 Vue 了。最後要看的功能是 focus 管理，或者換句話說，如何消除鍵盤用戶的障礙。我們會看看怎麼透過 Vue ref 完成這件事：這是一項能透過虛擬 DOM、或組件的內部 DOM 結構，直接訪問 DOM 節點的進階功能。
- [9. Vue 的資源](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : 最後的最後，我們將提供鑽研 Vue 所需的資源，以及有用的資訊。

## Svelte 教學

> [!NOTE]
> Svelte tutorials last tested in August 2020, with Svelte 3.24.1.
>
> If you need to check your code against our version, you can find a finished version of the sample Svelte app code as it should be after each article, in our [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) repo. For a running live version, see our Svelte REPL at <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Getting started with Svelte](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : In this article we'll provide a quick introduction to the [Svelte framework](https://svelte.dev/). We will see how Svelte works and what sets it apart from the rest of the frameworks and tools we've seen so far. Then we will learn how to setup our development environment, create a sample app, understand the structure of the project, and see how to run it locally and build it for production.
- [2. Starting our Svelte Todo list app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : Now that we have a basic understanding of how things work in Svelte, we can start building our example app: a todo list. In this article we will first have a look at the desired functionality of our app, then we'll create a `Todos.svelte` component and put static markup and styles in place, leaving everything ready to start developing our To-Do list app features, which we'll go on to in subsequent articles.
- [3. Dynamic behavior in Svelte: working with variables and props](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : Now that we have our markup and styles ready we can start developing the required features for our Svelte To-Do list app. In this article we'll be using variables and props to make our app dynamic, allowing us to add and delete todos, mark them as complete, and filter them by status.
- [4. Componentizing our Svelte app](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : The central objective of this article is to look at how to break our app into manageable components and share information between them. We'll componentize our app, then add more functionality to allow users to update existing components.
- [5. Advanced Svelte: Reactivity, lifecycle, accessibility](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : In this article we will add the app's final features and further componentize our app. We will learn how to deal with reactivity issues related to updating objects and arrays. To avoid common pitfalls, we'll have to dig a little deeper into Svelte's reactivity system. We'll also look at solving some accessibility focus issues, and more besides.
- [6. Working with Svelte stores](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : In this article we will show another way to handle state management in Svelte — [Stores](https://svelte.dev/tutorial/writable-stores). Stores are global data repositories that hold values. Components can subscribe to stores and receive notifications when their values change.
- [7. TypeScript support in Svelte](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : We will now learn how to use TypeScript in Svelte applications. First we'll learn what TypeScript is and what benefits it can bring us. Then we'll see how to configure our project to work with TypeScript files. Finally we will go over our app and see what modifications we have to make to fully take advantage of TypeScript features.
- [8. Deployment and next steps](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : In this final article we will look at how to deploy your application and get it online, and also share some of the resources that you should go on to, to continue your Svelte learning journey.

## Angular 教學

> [!NOTE]
> Angular 教學的最後測試時間為 2021 年四月，使用 Angular CLI（NG）11.2.5。
>
> 如果你需要根據我們的版本檢查程式碼，可以在 [angular-to-do-example](https://github.com/kapunahelewong/angular-to-do-example/tree/main/src) 上找到範例程式碼的最終版本。

- [1. Angular 新手入門](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - : 在本文中，我們將會探索 Angular 所提供的功能、安裝必備工具、建立範例應用程式，並進一步瞭解 Angular 的基本架構。
- [2. 開始開發我們的 Angular 待辦事項應用程式](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - : 此刻，我們已準備好使用 Angular 來創建我們的待辦事項應用程式。完成後的應用程式將具有顯示待辦項目列表，並包含編輯、刪除與新增項目等功能。在本篇中，你將學到應用程式的結構，以及建立一個可顯示待辦項目的基礎列表。
- [3. 使用樣式點綴我們的 Angular 應用程式](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - : 現在，我們已經建立了基本的應用程式結構，並加入了內容，接著我們就要來對應用程式進行樣式的調整，透過本篇文章來學習如何使用樣式點綴我們的 Angular 應用程式。
- [4. 建立一個項目元件](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - : 元件為你提供了一種組織應用程式的方式。本篇文章將引導你建立一個元件，來處理待辦列表中的各個待辦項目，並增加標示完成、編輯以及刪除的功能。在本篇也將介紹 Angular 事件模型
- [5. 過濾待辦事項](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - : 現在，讓我們繼續增加功能，以允許用戶過濾待辦項目，以便他們可以查看進行中、已完成或所有待辦項目。
- [6. 構建 Angular 應用程序和更多資源](/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
  - : 這篇文章內容涵蓋，如何建立一個產品版（production）的應用程式，以及提供後續的學習資源。

## 該選什麼框架？

我們在最初發布的文章集，主要介紹了 React/ReactDOM、Ember、Vue。之所以選中這三個框架是因為：

- 它們在一段時間內，依舊是最受歡迎的選擇：如同多數軟體工具一般，選擇持續開發中、不太可能下星期就棄掉、還有可能藉由這份技能來找工作的軟體，才是明智的選擇。
- 它們都擁有活躍的社群與良好的文件。在剛開始理解複雜的概念時，這方面至關重要。
- 我們不可能把*所有的*框架都寫進來。因為你沒辦法在前端日新月異的情況下即時更新。
- 初學者在選擇需要理解的概念方面，會是個蠻麻煩的問題。因此，盡可能精簡會對初學者的幫助很大。

先講一下：我們選什麼框架**並不是**因為他們最棒，而是因為我們認同他們：這些框架在較吻合以上的考量要點。

我們以本來希望在一開始包含更多框架，但最後決定先發布，之後再追加其它教學，而非延後。如果屬意的框架沒放進去而你也想幫忙的話，請隨時[與我們聯繫](/zh-TW/docs/MDN/Community/Communication_channels)。
