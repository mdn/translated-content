---
title: 學習該如何開發 Web
slug: Learn_web_development
---

{{LearnSidebar}}

歡迎來到 MDN 的「學習專區（Learning Area）」。本系列文章將提供撰寫程式碼的必要網站，讓剛接觸的新手也能開發 Web。

MDN 學習專區不是要讓「初學者」變成「專家」；而是想讓「初學者」能夠更怡然自得。你在這裡可完全安排自己的進度，逐步探索 [MDN 的其他部分](/zh-TW/)，再接觸進階資源來堆砌之前所習得的知識。

如果你是完全的新手，那 Web 開發過程可能頗有難度。我們希望能帶領你輕鬆學習，另提供相關細節以培養你的正確觀念。不論你是要學習 Web 開發（自學或參與課程）的學生、尋找教材的老師、純粹興趣使然的業餘工程師，甚至只是想進一步了解 Web 技術的人，都希望你在這裡就像在家裡一樣自在。

> [!WARNING]
> 此學習專區將定期新增更多資訊。如果你希望能納入其他自己感興趣的主題，或覺得某個地方尚有缺漏，請到下方的[聯絡我們](#聯絡我們)尋找相關資訊並取得聯繫。

## 入門

- 完全新手：如果你正打算接觸 Web 開發，我們建議先從提供了實用 Web 開發介紹的[入門 Web](/zh-TW/docs/Learn_web_development/Getting_started/Your_first_website)模組。
- 特殊問題：如果你對 Web 開發有著特殊問題，[常見問題](/zh-TW/docs/Learn_web_development/Howto)可能有你所需要的資訊。
- 基礎以外：如果你已經具備基本知識，則下一步就是了解 {{glossary("HTML")}} 與 {{glossary("CSS")}} 的細節。可從[HTML 介紹](/zh-TW/docs/Learn_web_development/Core/Structuring_content)模組著手，再進到[CSS 介紹](/zh-TW/docs/Learn_web_development/Core/Styling_basics)。
- 寫些腳本：如果你嫻熟 HTML 與 CSS 或想動手寫程式碼，要不要去 {{glossary("JavaScript")}} 或伺服器端語言那邊看看呢 ── 就從我們的 [JavaScript 起步走](/zh-TW/docs/Learn_web_development/Core/Scripting)與[伺服器端程式設計起步走](/zh-TW/docs/Learn_web_development/Extensions/Server-side/First_steps)開始吧。

> [!NOTE]
> 我們的[字彙庫](/zh-TW/docs/Glossary)另提供專有名詞的定義。

## 涵蓋主題

以下是 MDN 學習專區內涵蓋的主題清單。

- [Web 入門](/zh-TW/docs/Learn_web_development/Getting_started/Your_first_website)
  - : 針對完全新手提供實際介紹。
- [HTML：構建 Web](/zh-TW/docs/Learn_web_development/Core/Structuring_content)
  - : HTML 是構建不同區域的內容、還有定義這些區域意義和用途的語言。這個主題詳述了 HTML。
- [CSS：裝飾 Web](/zh-TW/docs/Learn_web_development/Core/Styling_basics)
  - : CSS 是用來妝點和編排 web 內容、添加動畫行為之類的語言。這個主題總括 CSS 的一切。
- [JavaScript：動態用戶端腳本](/zh-TW/docs/Learn_web_development/Core/Scripting)
  - : JavaScript 是給網頁添加動態功能的語言。這個主題會教你要自在理解並撰寫 JavaScript 所需的一切。
- [無障礙網頁：讓大家都能用上 Web](/zh-TW/docs/Learn_web_development/Core/Accessibility)
  - : 無障礙網頁是給盡可能給任何人提供 Web 內容的做法，無論那個人是否受障礙、設備、地點、或其他原因影響。這個主題提供你需要知道的一切。
- [工具與測試](/zh-TW/docs/Learn_web_development/Extensions/Testing)
  - : 這個主題介紹開發者用來改善工作的工具，如跨瀏覽器測試工具。
- [伺服端網站程式設計](/zh-TW/docs/Learn_web_development/Extensions/Server-side)
  - : 就算對用戶端 Web 開發熟悉了，理解伺服器和伺服器端程式如何做動是很有用的。這個主題提供了伺服器端做動原理的總體介紹，並藉著兩大熱門框架 ──Django（Python）與 Express（node.js）── 詳細說明如何建立伺服器端 app。

## 取得我們的範例程式碼

在學習專區看到的所有程式碼都[放在 GitHub 上了](https://github.com/mdn/learning-area/)。如果想把它們複製到自己的電腦，最簡單的方法是：

1. 在電腦上[安裝 Git](http://git-scm.com/downloads)。這個版本控制系統，是 GitHub 運作的基礎。
2. [在 GitHub 註冊一個帳號](https://github.com/join)。很簡單的。
3. 註冊好後用自己的帳密登入 [github.com](https://github.com)。
4. 開啟你的[命令提示字元](https://www.lifewire.com/how-to-open-command-prompt-2618089)（Windows）（譯註：如果使用 Windows 7 以後，建議使用 [Powershell](https://msdn.microsoft.com/en-us/powershell)）或是終端機（[Linux](https://help.ubuntu.com/community/UsingTheTerminal)、[MacOSX](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)）
5. 要把學習專區的 repo 透過命令提示字元/終端機複製到目錄裡面，稱作 learning-area 的資料夾，只要鍵入以下指令：

   ```bash
   git clone https://github.com/mdn/learning-area
   ```

6. 現在你能透過檔案管理員或 [cd 指令](<https://zh.wikipedia.org/wiki/Cd_(%E5%91%BD%E4%BB%A4)>)進入目錄，找到想要的檔案了。

你可以在 GitHub 的 `learning-area` repository 做任何更新，只要這麼做：

1. 在命令提示字元/終端機裡面，用 `cd` 進到 `learning-area` 目錄，例如說你要是在上一層目錄的話：

   ```bash
   cd learning-area
   ```

2. 用這個指令更新 repository：

   ```bash
   git pull
   ```

## 聯絡我們

如果你想向我們詢問任何事情，最快的方式就是透過[溝通渠道](/zh-TW/docs/MDN/Community/Communication_channels)留下訊息。不論你覺得網站有哪個地方做錯或缺漏，想看到新的學習主題、對自己不了解的地方尋求協助，或其他疑難雜症，都歡迎你提供意見給我們。

如果你想幫我們添增＼改善內容，則請先了解[該如何協助](/zh-TW/docs/MDN/Community)並聯絡我們！不論你是學生、教師、Web 開發老手，或是想幫我們改善學習經驗，都歡迎和我們聯絡。

## 參見

- [Mozilla Developer Newsletter](https://www.mozilla.org/zh-TW/newsletter/developer/)
  - : 我們針對網頁開發者發行的電子報，對於所有程度的開發者都是很好的學習資源。
- [EXLskills](https://exlskills.com/learn-en/courses)
  - : 免費和開放的課程，學習技術技能，指導和基於項目的學習
- [Codecademy](https://www.codecademy.com/)
  - : 絕妙的互動式網站，可從頭開始學習程式設計語言。
- [Code.org](https://code.org/)
  - : 基本的編碼理論與實作，主要為孩童與初學者所設計。
- [freeCodeCamp.com](https://www.freecodecamp.com/)
  - : 富含教學與專案實做的互動式網路開發學習網站。
- [Web Literacy Map](https://teach.mozilla.org/web-literacy/)
  - : Web 素養與 21 世紀常見技術的入門，亦已分門別類提供教學活動。
- [Teaching activities](https://teach.mozilla.org/activities)
  - : 由 Mozilla 基金會所設計的一系列教學 (與學習) 活動，涵蓋 JavaScript 的基本 Web 素養與隱私概念，並可嘗試開發 Minecraft。
