---
title: WAI-ARIA基礎
slug: Learn/Accessibility/WAI-ARIA_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

接續之前的文章，有時在涉及非語意 HTML 與動態 JavaScript 更新的內容製作複雜的 UI 控制措施將是個難題。WAI-ARIA 即是一個能藉由添加進一步的語意幫助處理這種問題的技術 ，讓瀏覽器與輔助科技可以辨識及用以讓使用者知道發生甚麼事情。這裡我們將展示如何以基本水準的運用來增進無障礙使用。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先決條件：</th>
      <td>基本電腦技能、基本瞭解HTML, CSS與JavaScript、瞭解本課程先前文章。</td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        能熟悉WAI-ARIA，以及在必要時如何用於提供有用的附加語意強化無障礙。
      </td>
    </tr>
  </tbody>
</table>

## 甚麼是 WAI-ARIA?

開始瞭解甚麼是 WAI-ARIA，以及它可為我們做些甚麼。

### 一個全新問題集

當網站應用程式開始更複雜與動態，新的無障礙特性與問題集就開始出現。

例如，HTML5 導入許多語意的元素來定義一般頁面的特性({{htmlelement("nav")}}, {{htmlelement("footer")}}等) 在沒有這些可用之前，開發者僅簡單使用{{htmlelement("div")}}搭配 IDs 或 classes，如\<div class="nav">，但這些是有問題的，因為沒有很簡單的方法可程式化地容易找到特定的頁面特性如主要導覽功能。

起初的解決方案是在頁面的頂端添加一個或更多隱藏的連結去連結到導覽功能(或其他任何的功能)，例如：

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

但這仍然不是非常精確，並且僅能使用於螢幕報讀器從頁面頂端閱讀下來的時候。

如同另一個例子，應用程式開始具有複雜的控制措施如日期選取器提供選擇日期，內容滑塊提供選取內容值等。HTML5 提供特定的輸入型態來呈現這些控制措施：

```html
<input type="date" /> <input type="range" />
```

這些在跨瀏覽器之間沒有全面性支援，而且也非常困難去為他們指定樣式，而使他們與網站設計整合時不是很好用。因此，開發者時常依賴 JavaScript 資源庫來產生這些一系列內嵌的控制措施 {{htmlelement("div")}}或具有 classnames 的表格元素，透過 CSS 指定樣式與使用 JavaScript 控制。

這個的問題是視覺上可以運作，但螢幕報讀器則一點也無法理解它們是甚麼，以及它們的使用者僅被告知他們可以看到一堆沒有語意的元素來描述它們的含意。

### 進入 WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) 是一個由 W3C 編撰的規格，定義一套額外的 HTML 屬性能用於元素上提供額外的語意及改善可及性，當元素缺乏這些條件時可適用。本規格定義三個主要的特點：

- **Roles** — 這些角色用以定義元素是甚麼或做甚麼事。在這些當中許多被稱為地標角色，大部分重複了 HTML5 結構化元素的語意值如`role="navigation"` ({{htmlelement("nav")}}) or `role="complementary"` ({{htmlelement("aside")}}), 但也有其他描述不同的頁面結構者，如`role="banner"`, `role="search"`, `role="tabgroup"`, `role="tab"`等常見於使用者介面中。
- **Properties** — 這些用以定義元素的屬性，可用來賦予元素額外的意義或語意。舉例，`aria-required="true"`指定一個表單輸入必須填寫才有效，而`aria-labelledby="label"`讓你可以在一個元素上置放一個 ID，當該頁面上任何內容設定標籤後而引用它，頁面包含多個元素而不可能使用`<label for="input">`。舉例，你可使用`aria-labelledby`指定一個鍵盤鍵描述包含在一個{{htmlelement("div")}}之中是多個表格儲存格的標籤，或者你可使用它做為圖片 alt 文字的替代方案 — 指定頁面上現有的資訊做為圖片的 alt 文字，而非將它重複放在`alt`屬性之內. 範例可參考[Text alternatives](/zh-TW/docs/Learn/Accessibility/HTML?document_saved=true#Text_alternatives)。
- **States** — 定義目前元素狀態的特殊屬性，例如 `aria-disabled="true"`，是對螢幕報讀器指定表單輸入目前是停用的狀態。狀態不同於屬性，在於屬性在應用程序整個生命週期中不會改變，而狀態通常會透過 JavaScript 程式化改變。

有關 WAI-ARIA 屬性的重要觀點是他們不會影響網頁的任何內容，除了透過瀏覽器無障礙 API 揭露資訊之外(螢幕報讀器即從中獲得資訊)。儘管 WAI-ARIA 屬性對 CSS 選擇元素很有用，但不會影響網頁結構、DOM 等。

> **備註：** 你可以在 WAI-ARIA 規格中找到所有 ARIA 的角色及其用法的很有用清單，請參見 [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)連結以獲得更進一步的資訊。
>
> 本規格也涵括所有屬性與狀態的清單，請參見 [Definitions of States and Properties (all aria-\* attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)連結以獲得更進一步的資訊。

### 哪裡支援 WAI-ARIA？

這不是一個容易回答的問題。要難找到一個決定性的資源來陳述何者是支援 WAI-ARIA 的特點以及在何處，因為：

1. 在 WAI-ARIA 規格中有很多特點。
2. 要考量作業系統、瀏覽器與螢幕報讀器的許多組合。

最後一點是關鍵—首先要使用螢幕報讀器，你的作業系統必須執行具有必要的無障礙 API 的瀏覽器去揭露螢幕報讀器必須去完成工作的資訊。大部分主流的作業系統有 1 個或 2 個瀏覽器可供螢幕報讀器使用。Paciello Group 一則最近的文章提供這些數據—請參見 [Rough Guide: browsers, operating systems and screen reader support updated](https://www.paciellogroup.com/blog/2014/10/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/)。

接著，你必須擔心瀏覽器是否支援 ARIA 特徵並透過其 API 揭露，同時螢幕報讀器是否辨識該資訊並以可用的方式向使用者呈現的問題。

1. 瀏覽器支援一般相當好—在撰文當下， [caniuse.com](http://caniuse.com/#feat=wai-aria)表示全球瀏覽器對 WAI-ARIA 的支援率大約為 88%。
2. 螢幕報讀器對 ARIA 特徵的支援沒有相當於此水平，但大部分主流的螢幕報讀器是有達到此水平。你可查閱 Powermapper 的 [WAI-ARIA Screen reader compatibility](http://www.powermapper.com/tests/screen-readers/aria/)這篇文章了解支援的水平。

在本文中，我們未試圖涵蓋每一個 WAI-ARIA 特徵及其確切的支援細節。相反地，我們將涵蓋最關鍵的 WAI-ARIA 特徵讓你知道；如果我們沒有提到任何支援細節，你可認定該特徵得到很好的支援。我們會明確地提到這個例外情況。

> **備註：** 某些 JavaScript 儲存庫支援 WAI-ARIA，亦即當他們產生 UI 特徵如複雜的表單控制措施，他們添加 ARIA 屬性來增進這些特徵的無障礙。如果你在尋找第三方的 JavaScript 解決方案來快速的開發 UI，你應該謹慎地考量其 UI 插件的無障礙作為你決定使用的重要因素。jQuery UI(參見[About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support))、 [ExtJS](https://www.sencha.com/products/extjs/)與 [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html)是良好範例。

### 何時應該使用 WAI-ARIA?

我們討論了促使 WAI-ARIA 早期建立的一些問題，但基本上 WAI-ARIA 在 4 個主要領域很有用：

1. **路標/地標**：ARIA 的角色屬性值可作為地標，不是複製 HTML5 元素的語意(如{{htmlelement("nav")}})，就是超越 HTML5 語意而對不同的功能區域提供路標，如搜尋、頁籤群組、頁籤、清單框等。
2. **動態內容更新**：螢幕報讀器往往難以報讀不斷改變的內容；當某個內容區域更新時，我們可以使用 aria-live 通知螢幕報讀器的使用者，例如透過 [XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest)或[DOM APIs](/zh-TW/docs/Web/API/Document_Object_Model)。
3. **增強鍵盤無障礙**：內建的 HTML 元素具有原生的鍵盤無障礙；當其他元素伴隨使用 JavaScript 模擬相似的互動時，鍵盤無障礙操作與螢幕報讀器報讀會遭遇問題。如果這是不可避免的，WAI-ARIA 提供讓其他元素獲得焦點的一種方法(使用 `tabindex`)。
4. **非語意控制措施的無障礙**：當一系列巢狀的`<div>`搭配 CSS/JavaScript 用於創建一個複雜的 UI 特徵，或者一個透過 JavaScript 大幅增強/改變的原生控制措施，無障礙會遭遇到困難—如果沒有語意或其他線索，螢幕報讀器使用者將發覺難以理解該特徵的作用。在這種情況下，ARIA 可以幫助提供缺失的部分使用如按鈕、清單框或頁籤群組等角色組合，以及 aria-required 或 aria-posinset 等屬性對功能性提供進一步的線索。

記住一件事 — **僅在必需時才使用 WAI-ARIA**! 理想情況下，你應該總是使用原生 HTML 特徵提供螢幕報讀器所需要的語意來告訴其使用者接下來將發生甚麼事情。有時候這是不可能的情形，不是因為你受限於控制該程式碼，就是因為你創建一些複雜而無法用簡易的 HTML 元素來開發。在這種情況下，WAI-ARIA 可作為有價值的無障礙增強工作。

再說一次，只有需要的時候才使用它！

> **備註：** 請確保有各類實際的使用者來測試你的網站 — 非身障者、使用螢幕報讀器者、使用鍵盤導覽者等。他們將比你更能了解它運作的效果。

## 實作 WAI-ARIA 開發

在下一個章節我們將更仔細地看看這 4 個領域，並附帶實際的範例。在繼續之前，你應該將備妥螢幕報讀器測試設置，以便在過程中你可以測試這些範例。

更多資訊請參見[螢幕報讀器測試](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)章節。

### 路標/地標

WAI-ARIA 添加[角色屬性](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)給瀏覽器，讓你可以在必要時添加額外的語意值到你網站上的元素。這第一個主要的領域在為螢幕報讀器提供資訊方面非常有用，讓螢幕報讀器的使用者可以找到常見的頁面元素。我們來看個範例 — [網站-無-角色](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-no-roles)範例([看實際頁面](http://mdn.github.io/learning-area/accessibility/aria/website-no-roles/))有以下的結構：

```html
<header>
  <h1>...</h1>
  <nav>
    <ul>
      ...
    </ul>
    <form>
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>
```

若你嘗試在現代瀏覽器中使用螢幕報讀器來測試此範例，你將可以獲得一些有用的資訊。例如，VoiceOver 給你以下的資訊：

- 在 `<header>` 元素上— "橫幅，2 個項目"(含有一個標題與 `<nav>`)。
- 在 `<nav>` 元素上—"導航列 2 個項目" (含有一個清單與一個表單)。
- 在 `<main>` 元素上—"主要內容 2 個項目" (含有一則文章與一個附帶內容)。
- 在`<aside>` 元素上—"補充 2 個項目" (含有一個標題與一個清單)。
- 在搜尋表單輸入—"搜尋查詢，插入文字開始處"。
- 在`<footer>` 元素上—"頁尾 1 個項目"。

如果你到 VoiceOver 地標選單(使用 VoiceOver 主鍵+ U，然後使用游標鍵循環整個選單選項)，你會看到大部分元素被列的很好，因此可以很快地訪問他們。

![](landmarks-list.png)

然而，這裡我們可以做得更好，搜尋表單是一個人們想要找到的很重要的地標，但是它並沒有列在地標選項之中或者被視為顯著的地標，除了在實際輸入而被召喚作為搜尋輸入之外(`<input type="search">`)。另外，有些舊的瀏覽器(大部分是指 IE8)無法辨識 HTML5 元素的語意。

讓我們使用一些 ARIA 特徵來改善它。首先，我們將添加一些角色屬性到我們的 HTML 結構。你可以試著複製我們原始的檔案(參見[index.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/index.html)與[style.css](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/style.css))，或者瀏覽我們的[網站-aria-角色](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles)範例([看實際頁面](http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/))，其結構如下：

```html
<header>
  <h1>...</h1>
  <nav role="navigation">
    <ul>
      ...
    </ul>
    <form role="search">
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article role="article">...</article>
  <aside role="complementary">...</aside>
</main>

<footer>...</footer>
```

在本範例中我們也將給你一個額外的特徵—{{htmlelement("input")}} 元素賦予 [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label)屬性，藉由給予描述性的標籤讓螢幕報讀器可以報讀出來，即使我們沒有包含{{htmlelement("label")}}元素。像這種情況就非常有用—搜尋表單是一個非常常見、容易辨識的特徵，而添加視覺的標籤可能破壞頁面的設計。

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

現在如果我們使用 VoiceOver 來看這個範例，我們可以獲得一些改善：

- 召喚搜尋表單當作獨立的項目，無論是在瀏覽頁面，或在地標選項之中。
- 當表單輸入凸顯時，將報讀出包含在`aria-label`屬性的標籤文字。

除此之外，該網站對舊瀏覽器如 IE8 的使用者更可能無障礙；為了這個目的，包含 ARIA 角色是值得的。如果為了某些原因，你的網站僅使用 `<div>`建置，那麼肯定你應該包含 ARIA 角色來提供這些非常需要的語意！

當 ARIA 超越從 HTML5 所能獲得的語意時，搜尋表單的改進語意已經顯示實現的可能性。你將會在下面看到更多關於這些語意與 ARIA 屬性的能力，尤其在[Accessibility of non-semantic controls](#非語意控制措施的無障礙)章節。現在，我們先來看看 ARIA 如何幫助動態內容更新。

### 動態內容更新

從文本內容到附著於圖片的替代文字，其內容載入至 DOM 中可方便螢幕報讀器使用。因此，大部分使用文字內容的傳統靜態網站能輕易讓視覺障礙者無障礙使用。

問題在於現代網頁應用程式通常不只是靜態的文字—他們傾向有很多動態更新的內容，例如透過像[XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest), [Fetch](/zh-TW/docs/Web/API/Fetch_API), 或[DOM APIs](/zh-TW/docs/Web/API/Document_Object_Model)等機制更新的內容而不必重新載入全部的頁面。這些有時稱為即時區塊。

我們來看一個簡單的範例—請看 [aria-no-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html) ([看實際頁面](http://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html))。本範例中我們有簡單的隨機引言框：

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

我們的 JavaScript 透過含有一系列的隨機引言與其作者的 [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) `載入一個`JSON 檔案。一旦這些完成，我們就開始 [`setInterval()`](/zh-TW/docs/Web/API/WindowTimers/setInterval) 迴圈每 10 秒載入新的隨機引言到引言框之中。

```js
var intervalID = window.setInterval(showQuote, 10000);
```

這個運作正常，但對無障礙不是很好—此內容更新無法被螢幕報讀器所偵測，所以他們的使用者不知道發生甚麼事情。這是一個相當平凡的例子，但只要想像一下如果你正在創建一個有著大量不斷更新內容的複雜 UI，如聊天室、一個策略型的遊戲 UI、或者一個即時更新的購物車顯示窗—則將不可能以任何有效的方式使用該應用程式而沒有某種提醒使用者該更新內容的方法。

很幸運地 WAI-ARIA 提供一項有用的機制來提供這些警告—即[`aria-live`](https://www.w3.org/TR/wai-aria-1.1/#aria-live) 屬性。將此屬性用在元素上可讓螢幕報讀器讀出更新的內容。報讀內容的緊急性決定於以下屬性值：

- `off:` 預設值，更新不應該通知。
- `polite`: 更新應該只在使用者空閒時才通知。
- `assertive`: 更新應盡快通知使用者。
- `rude`: 更新應立即通知，即使打斷使用者。

一般而言， `assertive` 設置足以讓你的更新內容在他們出現時依序地讀出，因此如果同時有多個事件改變，你將獲得所有的更新。只有對非常高優先順序的更新使用 `rude` 才能覆蓋其他所有的更新。

我們希望你複製 [aria-no-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html) 與 [quotes.json](https://github.com/mdn/learning-area/blob/master/accessibility/aria/quotes.json)，並更新 `<section>` 標籤如下所示：

```html
<section aria-live="assertive"></section>
```

這將使螢幕報讀器在內容更新時讀出更新的內容。

> **備註：** 如果你嘗試從 `XMLHttpRequest` 執行 `file://` URL`，`大部分的瀏覽器會拋出安全異常，例如你直接上傳該檔案到瀏覽器(透過雙擊滑鼠鍵等)。為了這項可以執行，你需要將檔案上傳到一個網站伺服器如 [GitHub](/zh-TW/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages)，或本機網站伺服器如 [Python's SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)。

這裡有一項額外的考量—只有文字更新才讀出。如果我們也總是讀出標題，那將很好，以讓使用者記住讀出的內容。為做到這樣，我們可以添加 [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) 屬性到這個部分，再次更新您的 `<section>` 標籤如下所示：

```html
<section aria-live="assertive" aria-atomic="true"></section>
```

`aria-atomic="true"`屬性告訴螢幕報讀器以一個原子單位方式讀出完整的元素內容，而不僅只讀出更新的部分。

> **備註：** 你可以查看完成的範例 [aria-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-live.html) ([看實際頁面](http://mdn.github.io/learning-area/accessibility/aria/aria-live.html))。

> **備註：** [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) 屬性在即時區塊更新時對於控制讀出甚麼內容也相當有用，例如你可以僅獲得讀出新增或移除的內容。

### 增強鍵盤無障礙

如同在本模組其他章節所討論， HTML 關於無障礙的關鍵優勢之一是內建鍵盤無障礙特徵如按鈕、表單控制措施及連結。一般而言，你可以使用 tab 鍵在控制措施之間移動，輸入(Enter)/返回(Return)鍵用來選擇或觸發控制措施，以及偶爾需要其他的控制措施(例如上下游標在 `<select>` 框中的選項間移動)。

然而，有時你最終必須撰寫不是使用非語意的元素如按鈕(或其他控制的型態)，或者使用可獲焦點的控制措施用作非正確目的程式碼。你可能嘗試修正一些繼承來的不好的程式碼，或者你可能創建需要某些種類的複雜插件。

讓非焦點的程式碼可獲得焦點，WAI-ARIA 使用一些新值擴展 `tabindex` 屬性：

- `tabindex="0"` —如上述，此值允許正常不被 tab 遊走到的元素變得可以 tab 遊走，這是`tabindex`最有用的值。
- `tabindex="-1"` — 此允許正常不被 tab 遊走到的元素，可以程式化地獲得焦點，如透過 JavaScript 或作為連結的對象。

我們更詳細討論這一點並在我們的 HTML 無障礙文章中展示典型的實作—請參見 [Building keyboard accessibility back in](/zh-TW/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in).

### 非語意控制措施的無障礙

本部份接續前一章節—當一系列巢狀的 `<div>`搭配 CSS/JavaScript 用於創建一個複雜的 UI 特徵，或者一個透過 JavaScript 大幅增強/改變的原生控制措施，不僅鍵盤無障礙會遭遇到困難，而且如果沒有語意或其他線索，螢幕報讀器使用者也會發覺難以理解該特徵的作用。在這種情況下，ARIA 可以幫助提供缺失的語意。

#### 表單驗證與錯誤警告

首先，讓我們再看一次在我們的 CSS 與 JavaScript 無障礙文章中第一次看的表單範例(請閱讀 [Keeping it unobtrusive](/zh-TW/docs/Learn/Accessibility/CSS_and_JavaScript#Keeping_it_unobtrusive)完整回顧)。在本章節文末我們展示當你試著送出表單而驗證錯誤時，出現我們包含一些在錯誤訊息框的 ARIA 屬性。

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](https://www.w3.org/TR/wai-aria-1.1/#alert) 自動地將其應用的該元素轉換為即時區塊，以利讀出它的改變；它也將語意地辨識其為警告訊息(重要時間/內容脈絡敏感資訊)，而呈現以更好、更無障礙的方式向使用者傳遞警告(模態對話框如 [`alert()`](/zh-TW/docs/Web/API/Window/alert) 具有許多無障礙的問題；請參見 WebAIM 的 [Popup Windows](http://webaim.org/techniques/javascript/other#popups))。
- [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) 的 all 值指示螢幕報讀器當它任何改變時讀出錯誤清單的內容—例如當錯誤新增或移除時。這個很有用因為使用者會想知道留著的錯誤是甚麼，而不只有知道清單中甚麼是已經新增或移除。

我們可進一步使用我們的 ARIA，並提供更多的驗證協助。如何指出區塊是否需要在第一個位置，以及年齡的範圍應該多少？

1. 在此，複製我們的 [form-validation.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html) 與 [validation.js](https://github.com/mdn/learning-area/blob/master/accessibility/css/validation.js) 檔案，並將他們儲存在本機目錄。
2. 在文字編輯器開啟他們並且看一下該程式碼如何運作。
3. 首先，在開始的 `<form>` 標籤之上增加一個段落，如下所示，並且用星號標記兩個表單的 `<label>`。這是一般我們對有視力的使用者標記必要區塊的方法。

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. 這讓視覺有意義，但這對螢幕報讀器使用者不能輕易理解。很幸運地，WAI-ARIA 提供 [`aria-required`](https://www.w3.org/TR/wai-aria-1.1/#aria-required) 屬性以提示螢幕報讀器應告訴使用者需要填寫的表單輸入欄位。更新`<input>` 元素如下：

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. 如果你現在儲存本範例並使用螢幕報讀器測試，你應該聽到這個內容 "Enter your name star, required, edit text"。
6. 如果我們給予螢幕報讀器使用者與視覺的使用者有關年齡的值應該是甚麼的概念，這樣也將會很有用。這個或許常以提示或在表單輸入區內預設文本的方式呈現。WAI-ARIA 用包含 [`aria-valuemin`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) 與 [`aria-valuemax`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax) 屬性來指定最小與最大值，但這些目前未受到很好的支持；比較受支持的特徵是 HTML5 `placeholder` 屬性，它在沒有輸入值的時間將含有的訊息顯示在輸入框，並能由許多螢幕報讀器讀出。更新你的數值輸入如下所示：

   ```html
   <input
     type="number"
     name="age"
     id="age"
     placeholder="Enter 1 to 150"
     aria-required="true" />
   ```

> **備註：** 你可以查看完成的範例 [form-validation-updated.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html)。

除了傳統的 {{htmlelement("label")}} 元素之外，WAI-ARIA 也能賦予一些進階的表單標籤技術。我們已經談論過使用 [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) 屬性在我們不希望標籤讓有視覺的使用者看見的地方來提供標籤(參見上述 [路標/地標](#路標地標) 章節。如果你想要指定一個非`<label>` 元素當作標籤或具有相同標籤多重的表單輸入標籤，這裡有使用其他屬性如 [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) 的其他標籤技術，如果你想要其他的訊息與表單輸入關聯並且報讀出來，使用 [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)。更多細節請參見 [WebAIM's Advanced Form Labeling article](http://webaim.org/techniques/forms/advanced) 。

還有許多其他有用的屬性與狀態，用來指出表單元素的狀態。例如， `aria-disabled="true"` 可用於指出表單區域是處於停用的狀態。許多瀏覽器只會跳過停用的表單區塊，並且甚至不會被螢幕報讀器讀出，但在某些情況下，他們可被感知，所以最好包含此屬性讓螢幕報讀器知道停用的輸入事實上即是停用的狀態。

如果輸入的停用狀態可能產生改變，也最好在發生時指出，以及其結果為何。例如，在我們的 [form-validation-checkbox-disabled.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) 展示中，當核取框被核取時，可以讓另一個表單輸入允許輸入更進一步的資訊。我們已經設置一個隱藏的即時區塊：

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

這是使用絕對位置從視窗中隱藏。當核取/未核取時，我們更新在隱藏的即時區塊中的文字，告訴螢幕報讀器使用者選取這個核取框時結果會是甚麼，以及更新 `aria-disabled` 的狀態，連同一些視覺的指示：

```js
function toggleMusician(bool) {
  var instruItem = formItems[formItems.length - 1];
  if (bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = "#000";
    instruItem.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Instruments played field now enabled; use it to tell us what you play.";
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = "#999";
    instruItem.input.setAttribute("aria-disabled", "true");
    instruItem.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

#### 描述非語意按鈕為按鈕

本課程我們已經談過幾次按鈕、連結或表單元素(參見 HTML 無障礙文章的 [UI controls](/zh-TW/docs/Learn/Accessibility/HTML#UI_controls) ，以及前述[增強鍵盤無障礙](#增強鍵盤無障礙)的原生無障礙(以及在使用其他元素偽造背後的無障礙議題)。基本上，使用 `tabindex` 與一些 JavaScript，在很多情況下，你可以在沒有太多困難下增加鍵盤無障礙支援功能。

但螢幕報讀器的情況如何呢？他們仍然無法將這些元素視為按鈕。如果我們用螢幕報讀器測試我們的 [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) 範例，我們偽造的按鈕將會用句子如 "Click me!, group"讀出，很顯然地令人困惑。

我們可以使用 WAI-ARIA 角色來修正它。請複製 [fake-div-buttons.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)在本機，並且對每個按鈕`<div>`增加 [`role="button"`](https://www.w3.org/TR/wai-aria-1.1/#button) ，範例如下：

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

現在當你使用螢幕報讀器測試它時，按鈕將會用句子如"Click me!, button" 讀出—這樣好多了。

> **備註：** 記住最好盡可能使用正確的語意元素，如果你希望創建一個按鈕，並且可使用 {{htmlelement("button")}} 元素，就應該使用 {{htmlelement("button")}} 元素！

#### 透過複雜的插件引導使用者

除了標準 HTML 可用外，還有一堆其他[角色](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)可以辨識非語意的元素結構作為一般的使用者介面特徵，例如 [`combobox`](https://www.w3.org/TR/wai-aria-1.1/#combobox), [`slider`](https://www.w3.org/TR/wai-aria-1.1/#slider), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel), [`tree`](https://www.w3.org/TR/wai-aria-1.1/#tree)。你可在 [Deque university code library](https://dequeuniversity.com/library/)中找到很多有用的範例，可給你這些控制措施如何做到無障礙的想法。

我們來看看我們自己的範例，我們回到我們簡單的絕對位置頁籤的介面(參見在我們的 CSS 與 JavaScript 無障礙文章中的 [Hiding things](/zh-TW/docs/Learn/Accessibility/CSS_and_JavaScript#Hiding_things) )，你可以找到 [頁籤資訊框範例](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html)(看[原始碼](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)).

本範例以鍵盤無障礙而言運作正常—你可以開心地在不同的頁籤間跳位，並且選擇他們顯示該頁籤的內容，也相當地容易操作—你可以滾動內容並使用標題來導覽，即使你看不到螢幕上正發生的事情。然而內容是甚麼並非很明顯—螢幕報讀器目前以連結的清單報讀內容，以及有三個標題的內容。這樣無法給你了解內容之間的關係。最好給予使用者更多關於內容結構的線索。

為改善這些，我們創建新的範例版本為 [aria-tabbed-info-box.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-tabbed-info-box.html) ([看實際頁面](http://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html))，我們已經更新頁籤介面的結構如下：

```html
<ul role="tablist">
  <li
    class="active"
    role="tab"
    aria-selected="true"
    aria-setsize="3"
    aria-posinset="1"
    tabindex="0">
    Tab 1
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="2"
    tabindex="0">
    Tab 2
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="3"
    tabindex="0">
    Tab 3
  </li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">...</article>
  <article role="tabpanel" aria-hidden="true">...</article>
</div>
```

> **備註：** 這裡最引人注目的是我們移除在原來範例中的連結，並且只使用清單項目作為頁籤—這樣做是因為對螢幕報讀器使用者比較少困擾(連結並非真正地帶妳到哪個地方；他們只是改變視窗)，並且可讓組件大小/位置在組件特徵中有很好的運作—當這些是放在連結上的時候，瀏覽器將維持報讀"1 of 1"，而非"1 of 3"、"2 of 3"等。

新的特徵如下：

- 新的角色— [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist), [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) — 這些確認頁籤介面的重要區域—頁籤的容器、頁籤本身，以及相對應的頁籤控制盤。
- [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) — 定義目前被選取的是哪一個頁籤。當不同的頁籤被使用者選取時，本屬性在不同頁籤的值透過 JavaScript 更新。
- [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) — 隱藏元素不讓螢幕報讀器讀出來。當不同的頁籤被使用者選取時，本屬性在不同頁籤的值透過 JavaScript 更新。
- `tabindex="0"` — 由於我們已經移除連結，我們需要給予清單項目本屬性，提供鍵盤焦點。
- [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize) — T 本屬性允許你向螢幕報讀器指定某元素是一系列中的部分，以及該系列有多少項目。
- [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset) — 本屬性允許你指定某個元素在一系列中的位置，伴隨 `aria-setsize，`提供螢幕報讀器有足夠資訊來告訴你目前的位置在"1 of 3"項目等。在許多情況下，瀏覽器應該可從元素層級結構推測這項資訊，但它肯定有助於提供更多的線索。

在我們的測試中，這些新的結構確實提供整體的改善。頁籤現在被認定為頁籤（如螢幕報讀器讀出「索引標籤」），被選取的頁籤以「已選取」指出並讀出頁籤的名稱，螢幕報讀器也告訴你目前所在的頁籤數目。此外，因為設置 `aria-hidden`（只有非隱藏的頁籤才設定 `aria-hidden="false"`），非隱藏的頁籤是唯一你可以向下導覽的內容，意即所選取的內容很容易找到。

> **備註：** 如果有任何你很明確地不希望螢幕報讀器讀出的內容，你可賦予它們 `aria-hidden="true"` 屬性。

## 總結

本文並未涵蓋所有 WAI-ARIA 的內容，但應該給予你足夠的資訊來了解如何使用它，以及了解一些你會遇到而需要它的最常見型態。

## 相關參考資訊

- [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — ARIA 角色參考資訊。
- [Definitions of States and Properties (all aria-\* attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) — 屬性與狀態參考資訊。
- [Deque university code library](https://dequeuniversity.com/library/) — 實用的範例資源庫，展示使用 WAI-ARIA 特徵讓複雜的 UI 控制措施無障礙
- [WAI-ARIA Authoring Practices](http://w3c.github.io/aria-practices/) — 由 W3C 發佈之非常詳細的設計模型，解釋如何使用 WAI-ARIA 特徵實作不同類型的複雜 UI 控制措施無障礙
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) — W3C 標準針對每一個 HTML 特徵定義由瀏覽器設置隱含特徵的無障礙(ARIA)語意，以及如果需要額外的語意，你可以設置的 WAI-ARIA 特徵。

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
