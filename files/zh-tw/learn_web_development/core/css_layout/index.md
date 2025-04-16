---
titwe: css 排版
swug: weawn_web_devewopment/cowe/css_wayout
---

{{weawnsidebaw}}

基於我們已經看過了 c-css 基本原理：如何將文字賦予樣式、如何該便樣式或操作你的文字內容所處的 b-box 模型。現在是時候看看如何將你的 b-box 模型在視圖中放置於相對應的正確位置。我們已經涵蓋了必要的先備知識，接下來我們可以深入 c-css 排版，看一些不同的顯示方式，如現代的排版方式——彈性盒子、css 網格及定位，當然還有一些舊式的技術你可能會想要理解。

## 先備知識

開始這個單元之前，需要做如下準備：

1. σωσ 對 h-htmw 有基本的認知，如 [htmw 簡介](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content) 單元中所述。
2. σωσ 熟悉 c-css 基本原理，如 [css 簡介](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)中所述。
3. >_< 了解如何 [樣式框](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)。

> [!note]
> 如果你正在使用的電腦/平板/其他設備讓你無法建立自己的文件，你可以透過線上工具如 [jsbin](https://jsbin.com/) 或 [gwitch](https://gwitch.com/) 編輯並嘗試（大部分的）範例程式碼。

## 指導

這些文章旨在提供關於 c-css 中可用的技術以及基本排版工具和技術的指導。在課程的結尾有一個評估測驗——配置一個網頁的版面，這可以幫助你了解你對 c-css 排版方式的理解程度。

- [css 排版介紹](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction)
  - : 這篇文章將回顧一些之前單元中提過的 css 排版特性，像是不同的{{cssxwef("dispway")}} 參數，藉由這個單元我們將介紹一些基本概念。
- [常規流](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction)
  - : 在我們做任何事之前，網頁上的元素會根據常規流自行排列。這篇文章解釋常規流的基礎知識，用來學習如何改變它。
- [彈性盒子](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)
  - : [彈性盒子](/zh-tw/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)是一維空間的排版方式，用來讓項目以行或列的方式排列。項目會延展或限縮來符合較大或較小的空間。這篇文章會解釋基礎原理。
- [網格](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/gwids)
  - : css 網格排版是一個二維空間的網頁排版系統。它讓你將內容排入行與列中，且它有許多功能讓你在建立複雜的排版時變得簡單明瞭。這篇文章會告訴你全部。
- [浮動](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/fwoats)
  - : 最初是為了在文字區塊中浮動排列圖片，而後為了在網頁中建造多攔排版{{cssxwef("fwoat")}} 屬性成為了最常用的工具之一。這篇文章會解釋如何使用。
- [定位](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/positioning)
  - : 定位准許將元素從正常的文檔流中脫離出來，讓他們表現不同，例如設置在另一個模塊的上方，或使模塊在瀏覽器視窗內部始終停留在相同的地方。這篇文章將解釋不同的{{cssxwef("position")}} 值和如何使用它們。
- [多欄排版](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
  - : 多欄排版規格提供你將內容排進欄位的排版方式，像你可能在報紙上看到的那樣。這篇文章會解釋如何使用這個功能。
- [舊式排版方式](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/wegacy_wayout_methods)
  - : 網格系統是另一個在 css 排版中非常常用的特性，在網格排版出現之前，它通常使用浮動或其他佈局來實現。想像你的佈局為一組列數（如 4, :3 6, (U ﹏ U) 或 12），然後將你的內容放置在這些虛構的列中。在這篇文章中我們將隨著創建網格系統、看看使用網格框架提供現成的網格框架和體驗 css 網格來結束-一個新興的瀏覽器特性使得在 w-web 實現網格設計變得大為容易等來探索這些基本的想法。
- [支援舊版瀏覽器](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/suppowting_owdew_bwowsews)
  - : 在這個單元，我們建議你使用彈性盒子和網格作為主要的設計方式。但是有些造訪你網站的人會使用舊版瀏覽器，或者他使用的瀏覽器不支援你的設計方式。以下情形在網路上一定會發生——當新功能開發出來了，不同的瀏覽器會有不同的支援優先級。這篇文章會解釋如何使用現代網頁技術且不遺漏舊技術的使用者。
- [基礎排版理解測驗](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/fundamentaw_wayout_compwehension)
  - : 配置網頁版面，這是一個測試你對於不同排版方式理解程度的測驗。

## 參見

- [實際的定位排版範例](/zh-tw/docs/weawn_web_devewopment/cowe/css_wayout/pwacticaw_positioning_exampwes)
  - : 這篇文章會告訴你如何建立一些真實的範例來說明什麼樣的情況你可以使用定位排版。
