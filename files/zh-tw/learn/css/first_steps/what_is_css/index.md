---
title: CSS 是什麼？
slug: Learn/CSS/First_steps/What_is_CSS
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS")}}** （階層式樣式表）可以讓你建立出好看的網頁，但是它背後是怎麼運作的？在這個主題裡，藉由簡單的語法範例來說明 CSS 是什麼，以及含蓋這個語言的一些關鍵項目。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        基本的電腦概念、能夠<a
          href="/zh-TW/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安裝基本軟體</a
        >，基本<a
          href="/zh-TW/Learn/Getting_started_with_the_web/Dealing_with_files"
          >與各種檔案打交道</a
        >的能力，以及 HTML 的基礎（由<a
          href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >學到）。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>學到 CSS 是什麼。</td>
    </tr>
  </tbody>
</table>

在 [HTML 入門](/zh-TW/docs/Learn/HTML/Introduction_to_HTML)單元中，我們含蓋了什麼是 HTML 以及它是如何被用來標記文件。這些文件能夠被瀏覽器讀取，標題的文字會看起來比一般段落更大，段落之間會換行並帶有間隔。連結會帶有顏色及底線，讓它與其它一般的文字有區別。你所看到的這些是瀏覽器的預設樣式，用來確保當作者沒有指定任何樣式的狀況下，仍有一些非常基本的樣式被套用上，好讓內容基本上能夠被閱讀（如下圖所示）。

![The default styles used by a browser](html-example.png)

然而，如果所有的網站都長這個樣子，網路世界將是個很無趣的地方。你能使用 CSS 對 HTML 元件的樣子作更多控制，將這些標記以任何你喜歡的設計作調整。

看看下面的影片，了解更多關於瀏覽器預設樣式（可開 CC 字幕並自動翻譯為中文）。

{{EmbedYouTube("spK_S0HfzFw")}}

## CSS 是作什麼用的？

如同我們前面所提到的， CSS 是一種用來指定文件該用什麼方式呈現的語言，可以定義它們的樣式、布局…等。

**文件**通常指的是使用標記語言的文字檔案，{{Glossary("HTML")}} 是其中最常見的，但是你也可能遇到其它例如 {{Glossary("SVG")}} 或 {{Glossary("XML")}} 的標記語言。

所謂的**呈現**文件，指的是將文件轉換為你的讀者可用的形式。像是 {{Glossary("Mozilla Firefox","Firefox")}} 、 {{Glossary("Google Chrome","Chrome")}} 或 {{Glossary("Microsoft Edge","Edge")}} 這類的{{Glossary("browser","瀏灠器")}}，是設計來將文件視覺化，再呈現電腦螢幕、投影機上或是由列表機列印出來。

> **備註：** 瀏覽器有時候被稱為 {{Glossary("User agent","user agent")}}（用戶終端），它基本上泛指電腦裡安裝的應用軟體。雖然並不是唯一，當我們在討論 CSS 的時候，用戶終端主要指的是瀏覽器。至於其它的用戶終端，有些能夠將 HTML 和 CSS 轉換為 PDF 再列印出來。

CSS 可以用在很基本文字樣式上頭，像是改變標題和連結的[顏色](/zh-TW/docs/Web/CSS/color_value)及[尺寸](/zh-TW/docs/Web/CSS/font-size)。它可以用在建立布局，像是[將原本單欄的文字內容加入布局](/zh-TW/docs/Web/CSS/Layout_cookbook/Column_layouts)，劃分出主要的內容以及包含相關資訊的側邊欄。它甚至可以用在建立[動畫](/zh-TW/docs/Web/CSS/CSS_animations)效果。點進上面的連結，看看相關的例子。

## CSS 語法

CSS 是一種基於規則的語言，你對網頁裡特定或一群元素指定一系列的規則。舉例來說：「我要讓頁面裡的主標題，以紅色且大號的字體呈現」。

下面這段語法是為了實現上面的需求，用簡單 CSS 規則示範：

```css
h1 {
  color: red;
  font-size: 5em;
}
```

樣式規則以一個{{Glossary("CSS Selector", "選擇器")}}開始。它*選擇*了你預計改變樣式的 HTML 元素。在這個例子中，我們要調整的是第一級的標題元素（{{htmlelement("h1")}}）。

接著我們跟著一組花括號 `{ }`，裡面是一到多個**聲明**，它的形式是一對一對**屬性名稱**和**屬性內容**的組合。每一對聲明會將我們選中元素的屬性，付予我們所想要設定的內容（或數值）。

在冒號（:）前面的是屬性的名稱，後面的是屬性內容（值）。CSS 的{{Glossary("property/CSS","屬性")}}依照其類型可以使用的值而有所不同。在我們的例子中，有個 `color` 屬性，它可以設定各種[顏色值](/zh-TW/docs/Learn/CSS/Building_blocks/Values_and_units#Color)。而 `font-size` 屬性則可以採用不同[尺寸單位](/zh-TW/docs/Learn/CSS/Building_blocks/Values_and_units#Numbers_lengths_and_percentages)的值。

一個 CSS 樣式表包含了許多這樣子的規則，一個接著一個。

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

你將會發些有些值很容易學會，而另一些則需要查資料確認。MDN 上有各個屬性的獨立頁面讓你能查到屬性及其可使用的值，在你忘記了或是想知道其它可能用法的時候提供一個快速的路徑。

> **備註：** 你可以在 MDN 的 [CSS 參考資源](/zh-TW/docs/Web/CSS/Reference)找到所有的 CSS 屬性（以及其它 CSS 特性）頁面的連結。 另外，當你需要得到某個 CSS 特性的更多資訊，應該去習慣使用「mdn _特性名稱_」的方式在你喜歡搜尋引擊上搜尋。舉例來說，嘗試以「mdn color」和「mdn font-size」作關鍵字搜尋！

## CSS 的各個主題（單元）

由於 CSS 有太多的項目可以進行設定，因此將這個語言依不同主題切分出單元。你將會在探索 MDN 的時候看到這些單元，並發現許多文章是圍繞著特定單元所組織的。舉例來說，你可以在 MDN 關於[背景與邊框](/zh-TW/docs/Web/CSS/CSS_backgrounds_and_borders)的單元裡，看到它的目的，以及其包含了哪些不同的屬性及特性。 你也將在文末發現到相關 *CSS 規範*的連結。

在這裡不用太煩惱 CSS 的架構，可以讓尋找資訊變得簡單一些。例如說，當你知道某個屬性可能用在其它類似的東西上，因此它們可能被放在同一個規範（單元）裡。

舉個特別的例子，讓我們回到背景與邊框的單元中，你可能會認為在邏輯上 [`background-color`](/zh-TW/docs/Web/CSS/background-color) 和 [`border-color`](/zh-TW/docs/Web/CSS/border-color) 會在同一個單元裡被定義。所以你猜對了。

### CSS 規範

所有網路標準技術（HTML、CSS、JavaScript…等）都被定義在稱為定義（specifications 或簡稱 specs）巨型文件中，由像是 {{glossary("W3C")}}、{{glossary("WHATWG")}}、{{glossary("ECMA")}} 或 {{glossary("Khronos")}} 之類的標準組織所發布，並且很精確地定義這些技術的行為方式。

CSS 並沒有什麼不同，它由 W3C 一個被稱為 [CSS 工作組](https://www.w3.org/Style/CSS/)的團體所發展。這個團體是由對 CSS 感興趣的瀏覽器供應商和其它公司的代表所組成。還有其它被稱為*邀請專家*的人，與其它的成員組織無關，可以獨立的發聲。

新的 CSS 特性被 CSS 工作組所發展、定義。有時候是因為特定瀏覽器對某個功能有興趣，而有時候是因為網站設計師與開發人員的要求，還有一些時候是工作組本身定義的需求。CSS 正不斷發展，新的可用特性正在出現。然而，每個人很努力達到的 CSS 重要方針，是不要往會破壞舊網站的方向進行改變。一個在 2000 年建立的網站，使用了當時能用的 CSS 特性，應該到今天仍能夠在瀏覽器上使用。

作為一個 CSS 新手，你會發現 CSS 的規範不勝枚舉，它們是用來給開發用戶端程式的開發者實作功能所使用，而不是讓網站開發人員閱讀來了解 CSS。許多經驗的豐富的開發者，寧願看 MDN 上的文件或其它指引。然而，知道規範的存在還是有價值的，可以了解它們與你正使用的 CSS 之間的關係，瀏覽器支援（如下）以及相關定義。

## 瀏覽器支援

被定義好的 CSS 特性，只有被一個或更多瀏覽器實作出來之後，才會在我們開發網頁上面有所幫助。這意味著已經編寫了程式，可以將 CSS 檔案裡的設定轉換為輸出在畫面上的結果。我們將在 [CSS 工作原理](/zh-TW/docs/Learn/CSS/First_steps/How_CSS_works)中詳細介紹這個過程。一個（新）特性被所有瀏覽器同時實作出來是不常見的，通常會缺了幾個，CSS 某些部分你可以在某些瀏覽器上使用，然而在其它瀏覽器人則沒有作用。基於這個原因，確認特性被實作的狀況是有用的。在每個 MDN 的資源頁面上，你可以看到感興趣的屬性現在的狀態，因此你可以確定能不能把它使用在網站上。例如，參見 [CSS `font-family` 屬性的瀏覽器相容性表](/zh-TW/docs/Web/CSS/font-family#瀏覽器相容性)。

## 下一步…

現在你已經知卜 CSS 是什麼，接著移動到 [CSS 入門](/zh-TW/docs/Learn/CSS/First_steps/Getting_started)單元，你可以在這裡開始寫一些 CSS。

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
