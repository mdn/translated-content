---
title: HTML介紹
slug: Learn/HTML/Introduction_to_HTML
---

{{LearnSidebar}}

本質上，{{glossary("HTML")}} 是一種非常簡單的語言，由元素所組成。元素可以賦予文字片段不同的意義 (比方說，將它們描述成段落、項目清單，或是表格的一部分)、將文件組織成不同的邏輯區段 (如標頭(header)、三行的內文，或是導覽目錄)，以及在網頁中嵌入圖片或影片等內容。在這個主題中我們將介紹前面兩項，並介紹基本概念以及語法以讓你了解 HTML。

## 預備知識

在開始閱讀之前，你並不需要具備任何 HTML 知識，你只要能夠操作電腦、瀏覽網頁並消化其中的內容即可。你需要[建立一個基礎工作環境](/zh-TW/docs/Learn/Getting_started_with_the_web/Installing_basic_software)，並且了解[如何建立與管理檔案](/zh-TW/docs/Learn/Getting_started_with_the_web/Dealing_with_files)── 這些都屬於我們 [Web 入門](/zh-TW/docs/Learn/Getting_started_with_the_web) 的一部分。

> [!NOTE]
> 如果你是在某些無法建立個人檔案的電腦/平板/其他裝置上進行，你可以在一些線上 coding program（如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/)）上測試程式碼範例。

## 導覽

這個主題包含以下子題，將帶你了解所有 HTML 的基礎理論，並且提供充足的機會讓你測試所習得的技能。

- [HTML 入門](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  - : 包含 HTML 最基礎的部分 ── 我們將定義元素（elements）、屬性（attributes）以及其他重要術語，並且介紹它們的使用方法。除此之外，我們也將說明典型的 HTML 網頁及其中的元素是如何構成的，並解釋其他重要的基本語言特性。還有，我們也會玩一些 HTML，好引發你的興趣！
- [在 head 中有什麼? HTML 中的後設資料(Metadata)](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
  - : HTML 文件的 head 是在網頁加載完畢之後，不會顯示在瀏覽器上的部分。其中包含一些資訊，如頁面的標題({{htmlelement("title")}})、{{glossary("CSS")}} 的連結 (當你想利用 CSS 來妝點你的頁面 HTML 時，你會用到它們)、網頁圖示(favicon)的連結，以及 metadata (裡頭承載了有關於該 HTML 的資料，如作者、描述該文件的關鍵詞等。)
- [HTML 文字的基礎知識](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
  - : 一個 HTML 的主要作用是賦予純文字意義(又稱為[語義化](/zh-TW/docs/Glossary/Semantics))，好讓瀏覽器知道如何正確地顯示它。這篇文章將探討如何使用 HTML 來將文字區塊拆解為標題(heading)和段落(paragraph)、強調字詞、建立列表等等。
- [建立超連結](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
  - : 超連結真的非常重要 — 它造就了我們現今所知的網路。這篇文章介紹超連結的使用語法，並且探討建立連結的最佳實踐方法。
- [進階文字格式](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
  - : 在 HTML 中還有許多可以用來格式化文字的元素，但我們沒有在 [HTML 文字的基礎知識](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)中提及這些內容。雖然這些元素比較鮮為人知，不過還是相當值得一談。在這篇文章中，你將會學到如何表示引言、描述列表、程式碼、上下標，及聯繫訊息等等。
- [文件與網站架構](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - : 除了分別定義網頁的各個成分（例如：段落或是圖片），HTML 還能定義網頁上的區塊（例如：標頭、導航列或是主要內容）。這篇文章將介紹如何規劃一個基本的網頁架構，以及如何透過編寫 HTML 來表示網頁架構。
- [HTML 除錯](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
  - : 如果 HTML 出錯了，卻找不到哪裡有錯誤該怎麼辦？這篇文章將會介紹一些能幫得上忙的實用工具。

## 評量

下面的評量將測試你對於以上的 HTML 基礎是否已經了解。

- [標記信件內容](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
  - : 我們都學過怎麼寫信，而信件也是用來測試我們格式化文字技巧的好例子。在這份測驗中，你將需要以 HTML 將一封信標記成題目要求的樣子。
- [組織網頁內容](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
  - : 這份測驗將要測試你利用 HTML 來組織網頁的能力，該網頁將包含頁眉(header)、頁腳(footer)、導覽列(navigation)、內文(main content)和側邊攔(sidebar)。

## 另見

- [Web literacy basics 1](https://teach.mozilla.org/activities/web-lit-basics/)
  - : Mozilla 基金會所提供的一個優質課程。該課程探索並測驗了很多在本主題中所提及的技術。透過裡頭的六大學習主題，學習者能夠熟悉閱讀、撰寫以及參與網路，並經由實作與合作了解網路基礎。
