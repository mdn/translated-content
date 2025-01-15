---
title: 無障礙網頁
slug: Learn_web_development/Core/Accessibility
original_slug: Learn/Accessibility
---

{{LearnSidebar}}

如果要當 web 開發者，學會 HTML、CSS、JavaScript 是很重要的。不過除此之外，你還要學得更多：你需要**負責任地**運用這些技術，才能讓所有讀者都能使用你的網頁。要達成這點，本模塊將展示一般最佳實做（在 [HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content)、[CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)、[JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting) 有示範）、[跨瀏覽器測試](/zh-TW/docs/Learn_web_development/Extensions/Testing)、還有其他啟動的要點。

## 概觀

When someone describes a site as "accessible," they mean that any user can use all its features and content, regardless of how the user accesses the web — even and especially users with physical or mental impairments.

- Sites should be accessible to keyboard, mouse, and touch screen users, and any other way users access the web, including screen readers and voice assistants like Alexa and Google Home.
- Applications should be understandable and usable by people regardless of auditory, visual, physical, or cognitive abilities.
- Sites should also not cause harm: web features like motion can cause migraines or epileptic seizures.

**By default, HTML is accessible, if used correctly.** Web accessibility involves ensuring that content remains accessible, regardless of who and how the web is accessed.

## 先決條件

要理解本模塊的概念，最少理解 [HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content)、[CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)、[JavaScript](/zh-TW/docs/Learn_web_development/Core/Scripting) 是個好主意。如果在學習相關技術時學習會更好。

> [!NOTE]
> 如果使用的設備無法讓你建立自己的文件，可以試著在 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 這種程式撰寫網站，執行大多數範例。

## 教學

- [何謂無障礙網頁？](/zh-TW/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
  - : 這篇文章針對何謂無障礙網頁，起了一個好開頭。這模塊包含了要考慮哪些族群以及理由、不同族群會用什麼工具和 Web 互動、還有怎麼把無障礙網頁導入 Web 開發工作流程。
- [HTML：無障礙網頁的好開始](/zh-TW/docs/Learn_web_development/Core/Accessibility/HTML)
  - : 只要確保在任何時候，正確的 HTML 元素都用於正確的目的，就能消除各種網頁的障礙。這篇文章詳述 HTML 如何確保網頁無障礙。
- [充分實踐 CSS 與 JavaScript 的無障礙](/zh-TW/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)
  - : 如果 CSS 與 JavaScript 使用得當，將可以為無障礙網頁提供助力……反過來的話，就會嚴重影響無障礙體驗。這篇文章詳述如何在內容複雜的情況下，確保能充分實踐 CSS 與 JavaScript 的無障礙。
- [WAI-ARIA 基礎](/zh-TW/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
  - : 從之前的文章來看，有時製作要涉及到非語意的 HTML 還有動態 JavaScript 更新技術……等，會令複雜的 UI 控制變得很困難。WAI-ARIA 正是為了解決此一問題而生。它對瀏覽器和輔助技術添加進一步的語意，讓用戶能知道發生了什麼事。我們將介紹如何在基本層面使用此技術，以提昇無障礙。
- [無障礙多媒體](/zh-TW/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : 會導致無障礙網頁出問題的另一個根源是多媒體：影片、聲音、圖片等內容，需要有合適的文字替代，以便輔助技術和它的用戶能夠理解。我們將在這篇文章中闡明作法。
- [行動無障礙網頁](/zh-TW/docs/Learn_web_development/Core/Accessibility/Mobile)
  - : 隨著行動設備訪問漸受歡迎、還有像是 iOS 與 Android 這般熱門平台，已經具備完善的輔助工具，考慮到如何在這些平台上實踐無障礙網頁，就變得十分重要。這篇文章將討論行動裝置特有的無障礙網頁相關議題。

## 評估

- [無障礙網頁偵錯](/zh-TW/docs/Learn_web_development/Core/Accessibility/Accessibility_troubleshooting)
  - : 要評估本模塊，我們會提出一些簡單的網站，你需要偵測有哪些無障礙的問題並修復之。

## 參見

- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today)：Marcy Sutton 所作的一套優秀教學影片。
- [Deque University resources](https://dequeuniversity.com/resources/)：包含程式碼範例、螢幕閱讀器參考、或是其他有用的資源。
- [WebAIM resources](https://webaim.org/resources/)：有教學、便覽、工具……等。
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/) - includes a list of web accessibility evaluation tools.
