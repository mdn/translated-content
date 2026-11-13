---
title: 理解 JavaScript 前端框架
slug: Learn_web_development/Core/Frameworks_libraries
---

JavaScript 框架在前端開發佔有重要的地位：它能讓前端工程師透過千錘百鍊的工具，建立擴展性高、互動性強的網路程式。多數公司也視 JavaScript 框架為重要的前端工具。因此多數前端工程師，會需要擁有前端框架的技能。

身為一位富有抱負的前端工程師，學習前端框架時，可能很難確定要從哪裡開始：五花八門的框架可供選擇、隨時還有新的框架出現。儘管大多數框架用途類似，但實作方法千變萬化。而在使用框架時，也需要考慮無數情形。

在這裡，我們旨在理解前端框架方面，提供舒適的學習曲線：我們不會詳細說明 React/ReactDOM 或 Vue 亦或其他特定框架的資訊。框架開發團隊早就針對這方面，寫出了詳細的文件。相反地，我們想先著重回答更基本的問題：

- 為什麼要用框架？它能解決什麼問題？
- 選用框架時要考慮哪些問題？或甚至，我需要框架嗎？
- 框架擁有什麼功能？一般來說他們怎麼作動，或實作方面有哪些不同？
- 這些框架與「Vanilla JavaScript」（譯註：Vanilla JavaScript 是指原生 JavaScript）或 HTML 有什麼關係？

之後，我們將針對坊間主要框架提供教學，以便提供足夠鑽研下去的背景資訊。我們希望以務實且不忘基本實做（如無障礙）的方法，來理解框架這回事。

**[從「前端框架簡介」開始吧。](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)**

## 先決條件

在理解前端框架前，你需要對 web 核心技術：[HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content)、[CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)、以及最重要的[JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting)，擁有基本程度的理解。

如果理解構建框架的 Web 技術，你的程式會更豐富（richer）且更專業，同時也能更有信心地除錯。

## 概觀性教學

- [1. 前端框架介紹](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : 我們從整體概述來探討框架、提供 JavaScript 與框架的簡要歷史、框架存在的理由、他們提供什麼東西、如何決定選擇哪個框架、以及前端框架的的替代方案。
- [2. 框架的主要功能](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : 大多數主要的 JavaScript 前端框架在更動 DOM、處理瀏覽器事件、還有提供良好的開發體驗方面，使出了不同的方法。這篇文章將探討「四大框架」的主要功能、看看他們如完成高層次工作、以及這四個框架的相異之處。

## React 教學

> [!NOTE]
> 最近一次測試成功的 React 教學在 2020 年五月。版本為 React/ReactDOM 16.13.1 與 create-react-app 3.4.1。
>
> 如果想看看最新的程式，可以從我們的 [todo-react repository](https://github.com/mdn/todo-react) 或互動性的 <https://mdn.github.io/todo-react-build/> 看。

- [1. 開始學 React](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : 在這裡我們將開始與 React 打招呼。我們將探索其背景和用途的一些細節、在自己的電腦建立 React 全家桶、還有建立與把玩簡單的程式，以理解 React 是怎麼跑的。
- [2. 建立我們的 React todo list](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : 我們的任務是驗證 React 的概念（proof-of-concept）：我們將建立一個能讓使用者添加、編輯、刪除需要的工作，同時在不刪除工作的情況下，將它們標記為完成。本文將完成 `App` 組件的基本架構與樣式，以便為下個文章將探討的組件定義與響應性做準備。
- [3. 把 React app 組件化](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : 現在，我們的 app 整個黏在一起了。在做其他事情前，最好把這個程式切成一個個能管理，描述性也好的組件（component）。React 本身對組件的定義不多：那是取決於你的考量！我們將展示如何以聰明的方法，把程式切成一個個組件。
- [4. 響應性 React：事件與狀態](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : 在組件化以後，現在開始把原本靜態的 UI，能開始與我們實際互動，並修改資料吧。在這裡除了做這件事以外，我們還會深入探討事件和狀態。
- [5. 響應性 React：編輯、過濾、條件式過濾](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : 在初學 React 之路即將結束前（至少從現在來說），我們將在 Todo list app 裡面，添加畫龍點睛的主要功能：包括編輯已存在的工作、透過給定條件過濾全部、已完成、或未完成的工作。我們將不斷探討條件式 UI 渲染。
- [6. React 無障礙](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : 在教學最後，我們將削除最後的障礙：像是能增進可用性，同時降低鍵盤與螢幕報讀用戶困惑的 focus 管理。
- [7. React 的資源](/zh-TW/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : 最後的最後，我們將提供鑽研 React 所需的資源。

## 該選什麼框架？

我們在最初發布的文章集，主要介紹了 React/ReactDOM、Ember、Vue。之所以選中這三個框架是因為：

- 它們在一段時間內，依舊是最受歡迎的選擇：如同多數軟體工具一般，選擇持續開發中、不太可能下星期就棄掉、還有可能藉由這份技能來找工作的軟體，才是明智的選擇。
- 它們都擁有活躍的社群與良好的文件。在剛開始理解複雜的概念時，這方面至關重要。
- 我們不可能把*所有的*框架都寫進來。因為你沒辦法在前端日新月異的情況下即時更新。
- 初學者在選擇需要理解的概念方面，會是個蠻麻煩的問題。因此，盡可能精簡會對初學者的幫助很大。

先講一下：我們選什麼框架**並不是**因為他們最棒，而是因為我們認同他們：這些框架在較吻合以上的考量要點。

我們以本來希望在一開始包含更多框架，但最後決定先發布，之後再追加其它教學，而非延後。如果屬意的框架沒放進去而你也想幫忙的話，請隨時[與我們聯繫](/zh-TW/docs/MDN/Community/Communication_channels)。
