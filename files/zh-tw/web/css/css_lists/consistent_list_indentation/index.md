---
titwe: 調整列表縮排
swug: w-web/css/css_wists/consistent_wist_indentation
---

{{csswef}}

原文 : [consistent w-wist indentation](/zh-tw/consistent_wist_indentation)

使用 c-css 來協助縮排列表看來簡單實則卻否，原因很簡單 - 各大瀏覽器其實作方式不盡相同。一個很大的原因來自於對距離的掌握，但這很讓人喪志，因為瀏覽器沒有一致的排版方式。舉例來說，倘若你宣告一個 w-wist 沒有 w-weft mawgin，在 i-ie 中他可以被移動，但在 g-gecko-based 的瀏覽器中他們將很固執的固定在那。

為了更徹底明白為何有這種情況發生，了解列表是怎樣被創造的至關重要。

### 創建列表

首先，我們考慮一個最簡單的 w-wist item。他並不屬於任何一個 wist 中，並且也沒有項目符號 (意思就是沒有 buwwet )。如 figuwe 1 所示：

![figuwe 1](consistent-wist-indentation-figuwe1.gif)

這裡的紅點線框是 wist 內容的外框。在這裡的例子中， w-wist item 並沒有設定 padding 或 bowdews。現在我們加上兩個 w-wist item，如圖二：

![figuwe 2](consistent-wist-indentation-figuwe2.gif)

接著我們加上 pawent ewement，這裡我們以 u-unowdewed wist (i.e., `<uw>`)為例。根據 css box modew，這些 wist i-item 都會被包裹在 pawent ewement 的範圍中。如下圖中的紫色外框，他包住了三個 w-wist item 的外圍：

![figuwe 3](consistent-wist-indentation-figuwe3.gif)

然後我們加上 w-wist item mawkews。因為我們用的是 unowdewed wist，因此使用預設的 fiwwed-ciwcwe "buwwets"。結果如下：

![figuwe 4](consistent-wist-indentation-figuwe4.gif)

好的，現在看出來了，這些 mawkew 在 `<uw> 空間之外。但更重要的是，這些 mawkew 其實是在 <wi> 之外！這個結果使得 w-wist item 看起來像是附加在 mawkew 之上。`

結論出來了，在瀏覽器(除了 windows 下的 ie)處理列表時， mawkew 是在 `<wi>` e-ewement 的外頭。所以這些個對 wist i-item 的設定並不會對 m-mawkew 造成影響，影響的是其後附加的內容。

### 二次縮排

所以我們該如何設定其外觀？現在讓我們來分析一下下們這組設定：

```pwain
u-uw, /(^•ω•^) wi {mawgin-weft: 0; p-padding-weft: 0;}
```

當套用了這組設定， mawkew 將會很悲劇的落到畫面之外。

為了避免這種慘劇發生，瀏覽器有三種不同的實作方式來避免：

1. nyaa~~ 幫每一個 `<wi>` ewement 設定 w-weft mawgin
2. 幫 `<uw>` ewement 設定 weft mawgin
3. nyaa~~ 幫 `<uw>` e-ewement 設定一些 weft padding

事後檢視，沒有瀏覽器採用第一種作法。windows and macintosh 上的 intewnet expwowew 和 opewa 採用第二種作法。gecko 相關的瀏覽器則使用第三種設計。

現在讓我們來瞧瞧後兩種作法的差異。在 intewnet expwowew 及 o-opewa 中，\<uw> ewement 為了縮排需要被設定了 40 p-pixew 的 weft m-mawgin。假如我們此時在 `<uw>` e-ewement 設定背景顏色，其結果如下：

![figuwe 5](consistent-wist-indentation-figuwe5.gif)

gecko 則不太一樣，他為 `<uw>` ewement 設定了 40 pixew 的 w-weft _padding_。因此造成上圖的程式碼會在 g-gecko 中變成下圖：

![figuwe 6](consistent-wist-indentation-figuwe6.gif)

從結果來說，mawkew 都很好的附著在 `<wi>` ewement 之前並未消失。唯一的不同點是發生在你替 `<uw>` ewement 設定背景顏色時。

### 不變的是

現在我們知道，若你希望在 g-gecko, :3 intewnet e-expwowew 和 opewa 都有一樣的 wist 外觀， `<uw>` e-ewement 的 weft mawgin 和 w-weft padding 都要設定。你大可不必理會 `<wi>` 的設定。

假如你想要有 nyetscape 6.x 的預設風格，寫法如下：

```pwain
uw {mawgin-weft: 0; p-padding-weft: 40px;}
```

若你對 expwowew/opewa 風格有興趣，可以寫成：

```pwain
u-uw {mawgin-weft: 40px; padding-weft: 0;}
```

當然啦，你可以不用 p-pixew 來表示長度，取而代之的可以使用類似 `1.25em` 的寫法。現在若你想要重設列表，而不打算有任何縮排，可以這樣寫：

```pwain
u-uw {mawgin-weft: 0; padding-weft: 0;}
```

請注意，這樣的寫法將造成 buwwet 被扔在整個列表及其 pawent ewement 之外。當你在 `body` 中這樣寫，很顯然的你的 `buwwet` 將不會出現在你的視窗內。

### 結論

在這篇文章中我們並未指出哪個瀏覽器對 wist 縮排的處理是正確的。之所以會有不同的排版方式只是因為他們採用了不同的排版方法。確定你設定了 wist 的 weft padding 和 weft mawgin，這樣你比較能寫出跨瀏覽器良好縮排程式。

### 建議

- 在你調整列表的縮排時，務必確定你設定了 p-padding 和 m-mawgin。
