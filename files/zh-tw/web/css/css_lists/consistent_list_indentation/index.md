---
title: 調整列表縮排
slug: Web/CSS/CSS_lists/Consistent_list_indentation
---

{{CSSRef}}

原文 : [Consistent List Indentation](/zh-TW/Consistent_List_Indentation)

使用 CSS 來協助縮排列表看來簡單實則卻否，原因很簡單 - 各大瀏覽器其實作方式不盡相同。一個很大的原因來自於對距離的掌握，但這很讓人喪志，因為瀏覽器沒有一致的排版方式。舉例來說，倘若你宣告一個 list 沒有 left margin，在 IE 中他可以被移動，但在 Gecko-based 的瀏覽器中他們將很固執的固定在那。

為了更徹底明白為何有這種情況發生，了解列表是怎樣被創造的至關重要。

### 創建列表

首先，我們考慮一個最簡單的 list item。他並不屬於任何一個 list 中，並且也沒有項目符號 (意思就是沒有 bullet )。如 Figure 1 所示：

![Figure 1](consistent-list-indentation-figure1.gif)

這裡的紅點線框是 list 內容的外框。在這裡的例子中， list item 並沒有設定 padding 或 borders。現在我們加上兩個 list item，如圖二：

![Figure 2](consistent-list-indentation-figure2.gif)

接著我們加上 parent element，這裡我們以 unordered list (i.e., `<ul>`)為例。根據 CSS box model，這些 list item 都會被包裹在 parent element 的範圍中。如下圖中的紫色外框，他包住了三個 list item 的外圍：

![Figure 3](consistent-list-indentation-figure3.gif)

然後我們加上 list item markers。因為我們用的是 unordered list，因此使用預設的 filled-circle "bullets"。結果如下：

![Figure 4](consistent-list-indentation-figure4.gif)

好的，現在看出來了，這些 marker 在 `<ul> 空間之外。但更重要的是，這些 marker 其實是在 <li> 之外！這個結果使得 list item 看起來像是附加在 marker 之上。`

結論出來了，在瀏覽器(除了 windows 下的 IE)處理列表時， marker 是在 `<li>` element 的外頭。所以這些個對 list item 的設定並不會對 marker 造成影響，影響的是其後附加的內容。

### 二次縮排

所以我們該如何設定其外觀？現在讓我們來分析一下下們這組設定：

```plain
ul, li {margin-left: 0; padding-left: 0;}
```

當套用了這組設定， marker 將會很悲劇的落到畫面之外。

為了避免這種慘劇發生，瀏覽器有三種不同的實作方式來避免：

1. 幫每一個 `<li>` element 設定 left margin
2. 幫 `<ul>` element 設定 left margin
3. 幫 `<ul>` element 設定一些 left padding

事後檢視，沒有瀏覽器採用第一種作法。Windows and Macintosh 上的 Internet Explorer 和 Opera 採用第二種作法。Gecko 相關的瀏覽器則使用第三種設計。

現在讓我們來瞧瞧後兩種作法的差異。在 Internet Explorer 及 Opera 中，\<ul> element 為了縮排需要被設定了 40 pixel 的 left margin。假如我們此時在 `<ul>` element 設定背景顏色，其結果如下：

![Figure 5](consistent-list-indentation-figure5.gif)

Gecko 則不太一樣，他為 `<ul>` element 設定了 40 pixel 的 left _padding_。因此造成上圖的程式碼會在 Gecko 中變成下圖：

![Figure 6](consistent-list-indentation-figure6.gif)

從結果來說，marker 都很好的附著在 `<li>` element 之前並未消失。唯一的不同點是發生在你替 `<ul>` element 設定背景顏色時。

### 不變的是

現在我們知道，若你希望在 Gecko, Internet Explorer 和 Opera 都有一樣的 list 外觀， `<ul>` element 的 left margin 和 left padding 都要設定。你大可不必理會 `<li>` 的設定。

假如你想要有 Netscape 6.x 的預設風格，寫法如下：

```plain
ul {margin-left: 0; padding-left: 40px;}
```

若你對 Explorer/Opera 風格有興趣，可以寫成：

```plain
ul {margin-left: 40px; padding-left: 0;}
```

當然啦，你可以不用 pixel 來表示長度，取而代之的可以使用類似 `1.25em` 的寫法。現在若你想要重設列表，而不打算有任何縮排，可以這樣寫：

```plain
ul {margin-left: 0; padding-left: 0;}
```

請注意，這樣的寫法將造成 bullet 被扔在整個列表及其 parent element 之外。當你在 `body` 中這樣寫，很顯然的你的 `bullet` 將不會出現在你的視窗內。

### 結論

在這篇文章中我們並未指出哪個瀏覽器對 list 縮排的處理是正確的。之所以會有不同的排版方式只是因為他們採用了不同的排版方法。確定你設定了 list 的 left padding 和 left margin，這樣你比較能寫出跨瀏覽器良好縮排程式。

### 建議

- 在你調整列表的縮排時，務必確定你設定了 padding 和 margin。
