---
title: 學習該如何開發 Web
slug: Learn
---

{{LearnSidebar}}

歡迎來到 MDN 的「學習專區（Learning Area）」。本系列文章將提供撰寫程式碼的必要網站，讓剛接觸的新手也能開發 Web。

MDN 學習專區不是要讓「初學者」變成「專家」；而是想讓「初學者」能夠更怡然自得。你在這裡可完全安排自己的進度，逐步探索 [MDN 的其他部分](/zh-TW/)，再接觸進階資源來堆砌之前所習得的知識。

如果你是完全的新手，那 Web 開發過程可能頗有難度。我們希望能帶領你輕鬆學習，另提供相關細節以培養你的正確觀念。不論你是要學習 Web 開發（自學或參與課程）的學生、尋找教材的老師、純粹興趣使然的業餘工程師，甚至只是想進一步了解 Web 技術的人，都希望你在這裡就像在家裡一樣自在。

> **警告：** 此學習專區將定期新增更多資訊。如果你希望能納入其他自己感興趣的主題，或覺得某個地方尚有缺漏，請到下方的[聯絡我們](#聯絡我們)尋找相關資訊並取得聯繫。

## 入門

- 完全新手：如果你正打算接觸 Web 開發，我們建議先從提供了實用 Web 開發介紹的[入門 Web](/zh-TW/docs/Learn/Getting_started_with_the_web)模組。
- 特殊問題：如果你對 Web 開發有著特殊問題，[常見問題](/zh-TW/docs/Learn/Common_questions)可能有你所需要的資訊。
- 基礎以外：如果你已經具備基本知識，則下一步就是了解 {{glossary("HTML")}} 與 {{glossary("CSS")}} 的細節。可從[HTML 介紹](/zh-TW/docs/Learn/HTML/Introduction_to_HTML)模組著手，再進到[CSS 介紹](/zh-TW/docs/Learn/CSS/First_steps)。
- 寫些腳本：如果你嫻熟 HTML 與 CSS 或想動手寫程式碼，要不要去 {{glossary("JavaScript")}} 或伺服器端語言那邊看看呢 ── 就從我們的 [JavaScript 起步走](/zh-TW/docs/Learn/JavaScript/First_steps)與[伺服器端程式設計起步走](/zh-TW/docs/Learn/Server-side/First_steps)開始吧。

> **備註：** 我們的[字彙庫](/zh-TW/docs/Glossary)另提供專有名詞的定義。

## 涵蓋主題

以下是 MDN 學習專區內涵蓋的主題清單。

- [Web 入門](/zh-TW/docs/Learn/Getting_started_with_the_web)
  - : 針對完全新手提供實際介紹。
- [HTML：構建 Web](/zh-TW/docs/Learn/HTML)
  - : HTML 是構建不同區域的內容、還有定義這些區域意義和用途的語言。這個主題詳述了 HTML。
- [CSS：裝飾 Web](/zh-TW/docs/Learn/CSS)
  - : CSS 是用來妝點和編排 web 內容、添加動畫行為之類的語言。這個主題總括 CSS 的一切。
- [JavaScript：動態用戶端腳本](/zh-TW/docs/Learn/JavaScript)
  - : JavaScript 是給網頁添加動態功能的語言。這個主題會教你要自在理解並撰寫 JavaScript 所需的一切。
- [無障礙網頁：讓大家都能用上 Web](/zh-TW/docs/Learn/Accessibility)
  - : 無障礙網頁是給盡可能給任何人提供 Web 內容的做法，無論那個人是否受障礙、設備、地點、或其他原因影響。這個主題提供你需要知道的一切。
- [工具與測試](/zh-TW/docs/Learn/Tools_and_testing)
  - : 這個主題介紹開發者用來改善工作的工具，如跨瀏覽器測試工具。
- [伺服端網站程式設計](/zh-TW/docs/Learn/Server-side)
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

如果你想向我們詢問任何事情，最快的方式就是透過[學習專區討論串](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294)或 [IRC 頻道](/zh-TW/docs/MDN/Community/Conversations#Chat_in_IRC)留下訊息。不論你覺得網站有哪個地方做錯或缺漏，想看到新的學習主題、對自己不了解的地方尋求協助，或其他疑難雜症，都歡迎你提供意見給我們。

如果你想幫我們添增＼改善內容，則請先了解[該如何協助](/zh-TW/docs/Learn/How_to_contribute)並聯絡我們！不論你是學生、教師、Web 開發老手，或是想幫我們改善學習經驗，都歡迎和我們聯絡。

## 另可參閱

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

##### Subnav

1. [Web 入門](/zh-TW/docs/Learn/Getting_started_with_the_web)

    1. [安裝基本軟體](/zh-TW/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
    2. [你的網站看起來會是什麼樣子？](/zh-TW/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
    3. [與各式各樣檔案打交道](/zh-TW/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
    4. [HTML 基本概念](/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics)
    5. [CSS 基本概念](/zh-TW/docs/Learn/Getting_started_with_the_web/CSS_basics)
    6. [JavaScript 基本概念](/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    7. [將你的網站發佈上線](/zh-TW/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
    8. [網站的運作方式](/zh-TW/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

2. [HTML — 建構 Web](/zh-TW/docs/Learn/HTML)

    1. **[HTML 概述](/zh-TW/docs/Learn/HTML)**
    2. [HTML 介紹](/zh-TW/docs/Learn/HTML/Introduction_to_HTML)

        1. **[HTML 基本介紹](/zh-TW/docs/Learn/HTML/Introduction_to_HTML)**
        2. [HTML 入門](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
        3. [先入為主？HTML 的 Metadata](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
        4. [HTML 文字基本概念](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
        5. [建立超連結](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
        6. [進階文字格式](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
        7. [文件與網站架構](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
        8. [HTML 除錯](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
        9. [評量習題：對字母標記](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
        10. [評量習題：建構內容網頁](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)

    3. [多媒體與嵌入](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding)

        1. **[多媒體與嵌入概述](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding)**
        2. [HTML 圖像](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
        3. [視訊與音訊內容](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
        4. [從物件到 iframe — 其他嵌入技術](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
        5. [為 Web 新增向量圖像](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
        6. [有所回應互動的圖像](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
        7. [評量習題：Mozilla splash 頁面](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)

3. [CSS — 讓 Web 別有風格](/zh-TW/docs/Learn/CSS)

    1. **[CSS 概述](/zh-TW/docs/Learn/CSS)**
    2. [CSS 介紹](/zh-TW/docs/Learn/CSS/Introduction_to_CSS)

        1. **[CSS 基本介紹](/zh-TW/docs/Learn/CSS/Introduction_to_CSS)**
        2. [CSS 運作方式](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
        3. [CSS 語法](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Syntax)
        4. [選擇器(Selectors)](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Selectors)
        5. [CSS 數值與單位](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
        6. [串接 (Cascade) 與繼承 (Inheritance)](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
        7. [區塊模型 (Box model)](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Box_model)
        8. [CSS 除錯](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)
        9. [評量習題：基礎的 CSS 綜合運算 (Comprehension)](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension)

    3. [文字樣式](/zh-TW/docs/Learn/CSS/Styling_text)

        1. **[文字樣式概述](/zh-TW/docs/Learn/CSS/Styling_text)**
        2. [文字與字體樣式基本原則](/zh-TW/docs/Learn/CSS/Styling_text/Fundamentals)
        3. [清單樣式](/zh-TW/docs/Learn/CSS/Styling_text/Styling_lists)
        4. [連結樣式](/zh-TW/docs/Learn/CSS/Styling_text/Styling_links)
        5. [Web 字型](/zh-TW/docs/Learn/CSS/Styling_text/Web_fonts)
        6. [評量習題：Typesetting a community school homepage](/zh-TW/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)

    4. [框盒 (boxes) 樣式](/zh-TW/docs/Learn/CSS/Styling_boxes)

        1. **[框盒樣式概述](/zh-TW/docs/Learn/CSS/Styling_boxes)**
        2. [框盒模型 (Box model) 回顧](/zh-TW/docs/Learn/CSS/Styling_boxes/Box_model_recap)
        3. [背景](/zh-TW/docs/Learn/CSS/Styling_boxes/Backgrounds)
        4. [邊框](/zh-TW/docs/Learn/CSS/Styling_boxes/Borders)
        5. [表格樣式](/zh-TW/docs/Learn/CSS/Styling_boxes/Styling_tables)
        6. [進階框盒效果](/zh-TW/docs/Learn/CSS/Styling_boxes/Advanced_box_effects)
        7. [評量習題：Creating fancy letterheader paper](/zh-TW/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)
        8. [評量習題：A cool looking box](/zh-TW/docs/Learn/CSS/Styling_boxes/A_cool_looking_box)

    5. [CSS 配置](/zh-TW/docs/Learn/CSS/CSS_layout)

        1. **[CSS 配置概述](/zh-TW/docs/Learn/CSS/CSS_layout)**
        2. [浮動布局(Floats)](/zh-TW/docs/Learn/CSS/CSS_layout/Floats)
        3. [Positioning](/zh-TW/docs/Learn/CSS/CSS_layout/Positioning)
        4. [Practical positioning examples](/zh-TW/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
        5. [彈性盒子(Flexbox)](/zh-TW/docs/Learn/CSS/CSS_layout/Flexbox)

4. [進階學習教材](/zh-TW/docs/Learn/Other_learning_material)

    1. [JavaScript — 動態指令](/zh-TW/docs/Learn/JavaScript)
    2. [WebGL — 圖像處理](/zh-TW/docs/Learn/WebGL)

5. [常見問題](/zh-TW/docs/Learn/Common_questions)

    1. [HTML 問題](/zh-TW/docs/Learn/HTML/Howto)
    2. [CSS 問題](/zh-TW/docs/Learn/CSS/Howto)
    3. [JavaScript 問題](/zh-TW/docs/Learn/JavaScript/Howto)
    4. [Web 運作方式](/zh-TW/docs/Learn/Common_questions#How_the_Web_works)
    5. [工具與設定](/zh-TW/docs/Learn/Common_questions#Tools_and_setup)
    6. [設計與親和度](/zh-TW/docs/Learn/Common_questions#Design_and_accessibility)

6. [該如何貢獻](/zh-TW/docs/Learn/How_to_contribute)
