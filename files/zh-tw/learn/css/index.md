---
title: CSS（樣式表）
slug: Learn/CSS
---

{{LearnSidebar}}

階層式樣式表（{{glossary("CSS")}}）是學習完 {{glossary("HTML")}} 之後，你應該學習的第一項技術。HTML 用於定義內容的架構與語意，CSS 則是用來設定樣式與佈局方式。舉例來說，你可以使用 CSS 來改變內容的字體、顏色、字型大小、間距、拆分成多欄，或是加入動畫和其他裝飾性質的特性。

### 想要成為 Web 前端開發人員？

我們整理了一門課程，包含了你實現目標需要的所有基礎知識。

[開始](/zh-TW/docs/Learn/Front-end_web_developer)

## 先備知識

在嘗試 CSS 之前，你應該先了解基本的 HTML 知識。我們建議先閱讀 [HTML 介紹](/zh-TW/docs/Learn/HTML/Introduction_to_HTML)單元。在這個單元你會學習到關於：

- CSS，由 [CSS 介紹](/zh-TW/docs/Learn/CSS/First_steps)單元開始
- 更進階 [HTML 模組](/zh-TW/docs/Learn/HTML#模組)
- [JavaScript](/zh-TW/docs/Learn/JavaScript) 以及它如何在網頁加上動態的功能

在你了解最基礎的 HTML 運作思維後，我們推薦你同時學習 HTML 與 CSS，使兩者之間互相搭配。因為 HTML 搭配上 CSS 會變得無比有趣，兩者是密不可分的，你無法在不理解 HTML 的情況下獨立學習 CSS。

在開始這個主題之前，你應該要有電腦的基礎使用概念以及使用網頁的經驗（單純地瀏覽、查看內容）。你應該要有一個已經設定的好的基本工作環境，如同[安裝基本軟體](/zh-TW/docs/Learn/Getting_started_with_the_web/Installing_basic_software)所敘述的，知道怎麼建立與管理檔案，如同[處理檔案](/zh-TW/docs/Learn/Getting_started_with_the_web/Dealing_with_files)提到的內容。這兩者都是 [Web 入門](/zh-TW/docs/Learn/Getting_started_with_the_web)裡初學者單元中一部分。

建議你在開始課程前先閱讀 [Web 入門](/zh-TW/docs/Learn/Getting_started_with_the_web)，不過並非絕對必要，儘量那裡有許多詳細的介紹，大部分 CSS 概念在我們的 CSS 入門單元中也會含蓋到。

## 單元

這個主題按建議的學習順序包含以下的單元。強烈建議你從第一項開始。

- [CSS 入門](/zh-TW/docs/Learn/CSS/First_steps)
  - : CSS（階層式樣式表）用來設定網頁的樣式及佈局，例如：改變文字的字體、顏色、大小及間距以及拆分為多欄，或是增加動畫或裝飾性的效果。這個單元提供一個溫和的路徑，讓你逐漸熟悉 CSS 的基礎概念，包含它的運作方式，語法是什麼樣子，以及如何開始在 HTML 裡添加樣式。
- [CSS 的組成](/zh-TW/docs/Learn/CSS/Building_blocks)
  - : 這個單元接續在 [CSS 入門](/zh-TW/docs/Learn/CSS/First_steps)之後，現在已經熟悉了這門語言的語法，並有了一些基本的使用經驗，是時候再深入一些。這個單元關注於疊加（cascade）和繼承（inheritance）規則、所有可用的選擇器類型、單位、尺寸、背景與邊框的樣式、除錯，以及其它更多的。這裡的目的是在進入更進階的主題，像是[文字樣式](/zh-TW/docs/Learn/CSS/Styling_text)及 [CSS 佈局](/zh-TW/docs/Learn/CSS/CSS_layout)之前，給你一個足以寫出合格 CSS 的工具包並幫助你了解所有的基礎理論。
- [裝飾文字](/zh-TW/docs/Learn/CSS/Styling_text)
  - : 在含蓋了 CSS 語言基本的部分之後，下一個帶給你的 CSS 主題會專注於文字樣式的裝飾上，你將最常用 CSS 作的事情之一。在這裡，我們文字樣式的基礎，包括設定字體、粗細、斜體、行距與字距、陰影與其它的文字效果。整個單元圍繞於在你的頁面上套用選擇的字體，以及對清單和連結進行樣式調整。
- [CSS 的布局](/zh-TW/docs/Learn/CSS/CSS_layout)
  - : 到了這邊，我們已經看過了 CSS 的基礎知識，如何裝飾文字，如何裝飾並控制你內容所在的區。現在是時候來看看如合將你的這些區塊擺放到正確的位置，並能依不同的可視空間進行調整。我們已經含蓋了必須的先備知識，所以我們現在可以深入到 CSS 的布局，看看不同的顯示設定，像是新的佈局工具 flexbox 、 CSS grid 和定位（position）以及一些你可能仍想要了解的早期技術。

## 解決常見的 CSS 問題

[使用 CSS 解決常見的問題](/zh-TW/docs/Learn/CSS/Howto)裡提供了許多單元的連結，其內容說明如何使用 CSS 解決在建立網頁時常見的問題。

在一開始，你主要將顏色套用到 HTML 元素或是背景；改變元素的大小、形狀和位置，然後添加、定義元素的邊框。當你對 CSS 的基礎知識有深刻的理解，就沒有太多作不到的事情。學習 CSS 其中一項最棒的事情，是當你了解了基本原理，通常你就能很好的抓到「什麼能作」、「什麼作不到」的感覺，既使是在你還不確切的知道要怎麼實現它的狀況下。

## 怪異的 CSS

CSS 與你將遇到程式語言或設計工具在運作上有點不太一樣。為什麼要用這種方式運作？在下面影片中， Miriam Suzanne 解釋為什麼 CSS 是這樣運作，以及為什麼會這樣子發展。（可以利用字幕翻譯功能，將 CC 字幕轉為中文）

{{EmbedYouTube("aHUtMbJw8iA")}}

## 相關資源

- [MDN 中的 CSS 資源](/zh-TW/docs/Web/CSS)
  - : 在 MDN 網站裡，CSS 文件的主要入口，你將可以在這裡找到所有 CSS 語言的所有特性，以及它們詳細的參考資訊。想要知道一個屬性可以套用的所有設定嗎？這是一個不錯的地方。
