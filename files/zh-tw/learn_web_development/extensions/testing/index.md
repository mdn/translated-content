---
title: 跨瀏覽器測試
slug: Learn_web_development/Extensions/Testing
original_slug: Learn/Tools_and_testing/Cross_browser_testing
---

{{LearnSidebar}}

此模組專注於測試網路專案的跨瀏覽器領域。在此，我們會辨認你的目標閱聽者（例如你最該對什麼樣的用戶、瀏覽器、還有設備操心？）如何做測試、不同類型的程式碼會碰上的主要問題、如何解決/減輕這些問題、哪些工具最能幫你測試和修復問題、還有如何用自動化加速測試。

## 先決條件

在使用文章所述的工具前，你應該確實理解 [HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content)、[CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)、[JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting) 核心語言的基本。

## 指引

- [跨瀏覽器測試介紹](/zh-TW/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : 這篇文章將透過給予跨瀏覽器測試概覽重點、回答諸如「何謂跨瀏覽器測試？」、「你最有可能碰上什麼問題？」、「測試、找出、並解決錯誤的主要方法有哪些？」的問題，以作為模組的開頭。
- [測試進行策略](/zh-TW/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : 接著，我們將針對測試執行深入研究、確定目標受眾（像是什麼瀏覽器、設備、或其他需要確認的地方）、低測試策略（low fi testing strategies，讓自己取得需要的設備、虛擬機、還有 adhoc 測試）、進階測試策略（自動化以及使用專用工具）、還有用戶群組間的測試。
- [處理常見的 HTML 與 CSS 問題](/zh-TW/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : 在這裡，我們將關注可能遇上的，常見跨瀏覽器 HTML 與 CSS 程式相關問題，還有能預防或修復淺在問題的工具。這裡面會有語法標示（linting code）、CSS 前輟處理、使用瀏覽器工具找出問題、使用 polyfill 支援瀏覽器、處理響應式網頁問題...等等。
- [處理常見的 JavaScript 問題](/zh-TW/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)
  - : 我們會開始觀察常見的跨瀏覽器 JavaScript 程式問題，以及修復的辦法。使用瀏覽器工具追蹤並解決問題、使用 Polyfill 與函式庫解決問題、在老舊瀏覽器實作新功能...等等。
- [處理常見的無障礙問題](/zh-TW/docs/Learn_web_development/Core/Accessibility/Tooling)
  - : 我們要關注無障礙網頁，並提供常見問題的資訊、如何簡易測試、還有使用檢測/自動化工具，以排查無障礙問題。
- [功能檢測實做](/zh-TW/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : 功能檢測牽涉到確定瀏覽器是否支持某個程式碼，是否依賴他執行不同的程式碼，以便部分瀏覽器能提供可執行的體驗，而不是直接崩潰/錯誤。本文詳細介紹如何編寫自己的簡單功能檢測，如何使用函式庫來加速實現，以及用於功能檢測的本機功能，例如 `@supports`。
- [自動化測試介紹](/zh-TW/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : 每天在好幾個瀏覽器與設備上，運行手動測試數次，既乏味又浪費時間。要有效率的處理這種事，就要開始熟悉自動化工具。我們會在這篇文章看看有哪些可用的工具、如何使用它們、以及如何使用如 Sauce Labs 與 Browser Stack 的商業化瀏覽器測試程式之基本講述。
- [設定你的自動化測試環境](/zh-TW/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : 我們會在這篇文章教你如何安裝自己的自動化測試環境、並透過 Selenium/WebDriver 以及 Node 的測試函式庫如 selenium-webdriver 來跑你的測試。我們還會講測試環境如何與上篇文章所講述的商業軟體做整合。
