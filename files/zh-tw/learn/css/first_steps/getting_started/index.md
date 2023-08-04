---
title: 開始使用 CSS
slug: Learn/CSS/First_steps/Getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

在這個主題中，我們將 CSS 套用到一個簡單的 HTML 文件上，在過程中學習這個語言一些實際的東西。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        基本的電腦概念、能夠<a
          href="/zh-TW/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安裝基本軟體</a
        >，基本<a
          href="/zh-TW/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >與各種檔案打交道</a
        >的能力，以及 HTML 的基礎（由<a
          href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML"
          >HTML介紹</a
        >學到）。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        了解將 CSS 文件與 HTML 檔案連接的基本知識，並且能夠使用 CSS
        對文字作簡單的格式變化。
      </td>
    </tr>
  </tbody>
</table>

## 由某個 HTML 開始

我們的起點是一個 HTML 文件。如果您想要在自己的電腦上操作，可以把下面的程式碼複製下來。在您電腦上的目錄中，用 `index.html` 為檔名儲存。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Getting started with CSS</title>
  </head>

  <body>
    <h1>I am a level one heading</h1>

    <p>
      This is a paragraph of text. In the text is a
      <span>span element</span> and also a
      <a href="http://example.com">link</a>.
    </p>

    <p>
      This is the second paragraph. It contains an <em>emphasized</em> element.
    </p>

    <ul>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item <em>three</em></li>
    </ul>
  </body>
</html>
```

> **備註：** 如果您用來閱讀這篇文章的環境沒辦法簡單地建立檔案，也別擔心。底下會提供線上程式編輯器讓你就在這個頁面中撰寫範例程式。

## 為我們的文件加入 CSS

首先，第一個步驟是告訴 HTML 文件我們有些 CSS 規則要加入。你通常有三種不同的方式來將 CSS 套用到 HTML 文件上，然而，現在我們先將焦點放在其中最常見並且實用的方式：在您文件標頭的位置將 CSS 連結進去。

建立一個檔案，存在與您 HTML 文件同一個目錄之中，並命名為 `styles.css` 。副檔名 `.css` 會讓它被當作一個 CSS 檔案。

為了連結 `styles.css` 到 `index.html` 中，在 HTML 文件的 {{htmlelement("head")}} 中，加入下面這行：

```html
<link rel="stylesheet" href="styles.css" />
```

{{htmlelement("link")}} 元素使用 `rel` 屬性告訴瀏覽器我們有一個樣式表，接著 `href` 屬性指向到這個樣式表的位置。您可以在 `styles.css` 裡加入規則，來測試它是否能夠運作。使用程式碼編輯器，在您的 CSS 檔案中加入下面這段規則：

```css
h1 {
  color: red;
}
```

將您的 HTML 與 CSS 檔案儲存後，重新整理瀏覽器裡的頁面。文件中最上頭的第一級標題現在應該會是紅色的。如果是，恭喜！您成功地套到了一些 CSS 設定到 HTML 中了。如果結果不是如此，仔細檢查您的每段文字並確認都輸入正確。

你可以在你電腦裡的 `styles.css` 上繼續，或是使用我們下的互動編輯器來繼續本教學指引。 互動編輯器的行為，就像是這個 CSS 已經連結到 HTML 中，就如同我們在前面剛剛完成的一樣。

## 裝飾 HTML 元素

藉由的將我們的標題設定為紅色，已經證明了我們可以指定並修飾 HTML 元素。我們透過一個*元素選擇器*來達成，它會指定名稱相符的 HTML 元素。想要指向所有段落元素的話，您會將選擇器設為 `p`。要把所有段落文字改成綠色，您會這麼作：

```css
p {
  color: green;
}
```

藉由逗號的分隔，您可以一次設定多個選擇器。如果我想要讓所有段落與清單項目都變綠色，我的規則會長得像：

```css
p,
li {
  color: green;
}
```

在底下的互動式編輯器（編輯程式區塊）中，或是在您本地的 CSS 檔案嘗試編輯看看。

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## 改變元素的預設樣式

當我們看一個標記清楚的 HTML 文件，即便是像我們範例這樣的簡單。能夠看到瀏覽器藉由加上一些預設的樣式讓 HTML 變得可閱讀。標題字體較大且較粗，而清單的項目前添加上符號。會如此表現，是因為瀏覽器裡有包含預設樣式的內部樣式表，它預設會套用到所有的頁面。少了它們的話，所有的內容會全擠在一起，而我們得從頭一個一個設定樣式。所有現代的瀏覽器，預設以很相似的方式來呈現 HTML 內容。

然而，您通常會想要一些不同於瀏覽器預設的選擇。可以通過選擇想改變的 HTML 元素，使用 CSS 規則來改變它的外觀來達成。拿我們的 `<ul>` 為例，它是一個無序清單。如果我決定不要顯示項目前的清單符號，可以如此移除它們：

```css
li {
  list-style-type: none;
}
```

現在試著把這個加到你的 CSS 中。

在 MDN 上可以查到 `list-style-type` 個好好屬性能夠設定哪些值。看一看 [`list-style-type`](/zh-TW/docs/Web/CSS/list-style-type) 頁面，您將能在開頭處看到一個互動式範例，可以嘗試選擇不同的值看到其呈現結果，可用值的詳細描述放在頁面後面一點的位置。

經由查讀頁面的內容，您將會發現除了移除項目符號之外，也可以改變項目符號的樣式。試試看使用值 `square` 把項目符號改為方形。

## 添加分類（class）

到目前為止，我們依元素的名稱來設定過樣式。當您希望同類型的元素在您的文件中都以相同的方式呈現，這種作法就行得通。但絕大多數的時候並非如此，所以您將需要一個能選擇某部分的元素、以避免更動到其它部分樣式的方法。最常見的作法，是在您要改變的 HTML 元素上設定 class（分類）並藉由它來定義要修改的範圍。

在您的 HTML 文件中，加上一個 [class 屬性](/zh-TW/docs/Web/HTML/Global_attributes/class)到第二個清單項目上。您的清單會變得如同底下這樣：

```html
<ul>
  <li>Item one</li>
  <li class="special">Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

您可以使用英文句點 `.` 作開頭，在您的 CSS 中指定 `special` 分類來建立選擇器。加上底下這些到您的 CSS 檔案中：

```css
.special {
  color: orange;
  font-weight: bold;
}
```

存檔後重新整理網頁，看看有什麼樣的結果。

您可以將 `special` 分類套用到任何您希望與這個清單項目相同方式呈現的元素。舉例來說，您可能想要在段落中的 `<span>` 元素一樣以橘色粗體呈現。嘗試添加 `class` 屬性並設定為 `special` 到它上頭，然後重新載入頁面看看發生了什麼。

有些時候，您會看到選擇器中，將元素名稱與分類合在一起：

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

這個語法表示「選擇任何帶有 special 分類屬性的 `li` 元素」。如果您改用了這個選擇器，樣式將不會被套用到具有一樣分類的 `<span>` 及其它元素上。要維持原本的呈現結果，您應該再增加選擇器把元素包含進規則當中：

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

您可以想像，有些分類的設定可能會被套用在多種元素上，而且您不希望當有新的元素要套用相同樣式的時候，得回頭修改選擇器。因此選擇器應該只指定分類（class）而不指定元素名稱，除非要為了這個分類下的特定元素設定樣式，確保不會套用到其它元素上。

## 依所在位置指定樣式

有些時候，您會想要一些在不同位置的東西看起來有所差別。有許多選擇器可以作到，但現在我們只介紹其中兩種。在我們的文件中有兩個 `<em>` 元素，一個在段落中另一個在清單項目裡。要只選擇到被包含在 `<li>` 元素裡的 `<em>` 元素，我可以使用被稱**後裔連結器（descendant combinator）** 的語法，它是用空格（一到多個）連結兩個選擇器。

在您的樣式表加入以下規則。

```css
li em {
  color: rebeccapurple;
}
```

這個選擇器將會指向任何在 `<li>` 內部的 `<em>` 元素（後裔）。所以在範例裡中，您應該會發現在第三個清單項目裡的 `<em>` 變成紫色，但是在段落裡的則沒有改變。

另外有些時候，您可能會想嘗試對直接跟在標題後面的那個段落設定樣式。要作到就使用一個 `+` （**相鄰連結器 adjacent sibling combinator**）放在選擇器的中間。

試著加入面這個規則到

```css
h1 + p {
  font-size: 200%;
}
```

下面真實運作的例子中，包含了上面提到的兩個規則。試著將段落（p）裡的 span 改為紅色。藉由確認第一個段落裡的 span 變成紅色，但清單第一項裡的沒有改變，您將會知道所加入規則是否正確。

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **備註：** 如您所見， CSS 提供我們一些方法來選擇元素，而目前為止我們只涉及到表面！我們將在課程後面的[選擇器](/zh-TW/docs/Learn/CSS/Building_blocks/Selectors)章節裡有更深入的探討。

## 依狀態指定樣式

在這篇教學中我們要看的最後一種類型，是依照元素的狀態來設定樣式的能力。最直接的例子就是設定連結的樣式。當我們設定連結的樣式，我們的目標是 [`<a>`](/zh-TW/docs/Web/HTML/Element/a) （錨點 anchor）元素。它具有不同的狀態來表示其連結：還沒被訪問過、訪問過、滑鼠停留其上方、由鍵盤取得焦點或是正被點擊中。您可以使用 CSS 來指定不同的狀態，下面的 CSS 設定連結（錨點元素）在未訪問過時為粉紅色，訪問過為綠色。

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

您可以改變連結當滑鼠停留在上頭（或稱為懸停）時的樣子，假如要把連結的底線移除，可以用接下來的規則作到：

```css
a:hover {
  text-decoration: none;
}
```

在下面真實運作的例子裡，您可以為連結的不同狀態設定不同的樣式。我已經將上面例子中的規則加進去，而現在意識到粉紅色實在是太淺而且不好閱讀，何不換個更好的顏色？您能讓連結變成粗體嗎？

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 900)}}

我們已經將連結在懸停狀態下的底線移除。您也可以移除連結在所有狀態下的底線。但是在實際運作的網站上，值得注意的是您要確保使用網站的人能分判哪些元素是連結。留著底線會是一個讓人意識到段落中的某些文字以可點擊的重要線索，這是人們已經習慣的行為。就像所有 CSS 規則一樣，您所作的更改可能會使得內容難被閱讀或使用，我們將儘可能將這些可能的問題點突顯出來。

> **備註：** 你將會在 MDN 網站以及這些課程中經常看到[可用性](/zh-TW/docs/Learn/Accessibility)的觀點被提起。當我們討論可用性的時候，指的是為了讓我們網頁能被每個人了解及使用所必須的東西。
>
> 您的訪客可能使用帶滑鼠或觸控面板的電腦，或是有觸控螢幕的電話。又或著他們使用螢幕閱讀器，它會將網站的內容唸出來，或著他們需要更大的文體，或著只能使用鍵盤來瀏覽網站。
>
> 沒經過裝飾（瀏覽器預設樣式）的 HTML 內容，通常每個人都能使用（不見得最方便，但可以閱讀），當你開始設定樣式的時候，請不要讓讓它變得更難被使用，這一點很重要。

## 組合選擇器和連結器

值得一提的是，您可以把多個選擇器和連結器組合在一起，例如：

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
  ...;
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
  ...;
}
```

您也可以使用不同種類的選擇器和連結器，試著把下面的規則加到您的 CSS 中：

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

這個規則會對任何在 `<body>` 內，跟在 `<h1>` 後 `<p>` 裡的 `special` 分類元素設定樣式！

在們提供的 HTML 文件中，樣式只會套用在 `<span class="special">` 元素上。

如果這現在看起來有很複雜，別擔心，隨著開始撰寫更多 CSS ，您很快就會掌握它了。

## 小結

在這個課程中，我們探討了一些使用 CSS 來設定樣式的方法。我們將在後續的課程中學習這些知識。不過，您現在已經知識怎麼調整文字的樣式，以不同的方式指定文件中想套用樣式的元素，並且在 MDN 文件中查找可以使用的屬性及支援的值。

在下一個課程中，我們將看看 CSS 的結構是如何。

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
