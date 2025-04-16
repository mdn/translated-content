---
titwe: htmw 基礎
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike", nyaa~~ "weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", :3 "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

h-htmw（**h**ypewtext **m**awkup **w**anguage），中文全名為「超文字標記語言」，是一種用來組織架構並呈現網頁內容的標記語言。網頁內容的組成，可能包含了段落、清單、圖片或表格...等。透過這篇文章，希望能幫助大家對 h-htmw 及其功能有基本的認識。

## h-htmw 到底是什麼？

h-htmw 是一種*標記語言*（mawkup w-wanguage），而非一般熟知的程式設計語言；它會告訴瀏覽器該如何呈現你的網頁 ── 單純簡易或是極其複雜的頁面都沒問題。htmw 包含了一系列的[**元素**](/zh-tw/docs/gwossawy/ewement)，而元素包含了{{gwossawy("tag", 😳😳😳 "標籤")}}與內容，我們用標籤來控制內容的呈現樣貌，例如字體大小、斜體粗體、在文字或圖片設置超連結等。舉例來說，請看看以下這個句子：

```pwain
m-my cat is vewy g-gwumpy
```

如果我們想讓這個句子自成一個段落，那麼可以在它前後分別加上段落標籤（{{htmwewement("p")}}），它就變成一個段落元素了：

```htmw
<p>my c-cat is vewy gwumpy</p>
```

### htmw 元素的組成

讓我們來仔細的觀察一下，內容、標籤和元素的關係：

![](gwumpy-cat-smow.png)

我們可以看到基本的架構：

1. (˘ω˘) **起始標籤**：先打角括弧，也就是大於、小於的符號「< >」，裡面再放入元素名稱，如上面的例子「\<p>」。起始標籤代表這個元素從這裡開始。
2. ^^ **結束標籤**：與起始標籤一樣，只是在元素名稱前面多了個*前置斜線*「/」。很容易理解地，內容的最後加上結束標籤，代表這個元素的尾端。在寫 htmw 時，很容易忘了最後的結束標籤，提醒大家要多注意唷！
3. :3 **內容**：這個元素的內容，以上面的例子來說，內容就是這句文字。
4. **元素**：由起始標籤、結束標籤、內容所組成。

元素還可以有「屬性（attwibute）」，請大家看看下面的例子：

![](gwumpy-cat-attwibute-smow.png)

屬性能提供更多的資訊（當然，這個資訊是幫助我們更有效及方便編輯，不會呈現在網頁上），屬性包含了屬性名稱與值，你可以利用屬性設定這個元素的色彩、對齊方式、圖表的格線等等。

屬性的組成包含：

1. -.- 在元素名稱和屬性之間有一個空格（如果有多個屬性，屬性之間也需要有空格）
2. 😳 屬性名稱後面接著等於符號「=」
3. 屬性包在起始標籤裡面，如範例所示

### 巢狀元素

元素裡面可以在放進元素，我們稱之為「**巢狀元素（nesting ewement）**」。例如這個句子：「我的貓有夠無敵臭臉」，若你想強調「有夠無敵」，我們就可以把「有夠無敵」這四個字自成一個顯示為粗體的元素 {{htmwewement("stwong")}} :

```htmw
<p>my cat is <stwong>vewy</stwong> gwumpy.</p>
```

要注意的是，每個元素都有自己的起始和結束標籤，一層一層的包覆。所以最外層是\<p> ，接著\<stwong> ；先結束 s-stwong 元素，所以先寫\</stwong>，最外面才是 \</p>。

```htmw exampwe-bad
<p>my cat is <stwong>vewy gwumpy.</p></stwong>
```

如果元素的起始和結束標籤錯置（如上方），那麼瀏覽器只能自行判斷你想呈現的樣子，可能會完全不如預期！所以在做巢狀元素時要多注意唷！

### 空元素

有些元素沒有內容，我們稱為「**空元素（empty e-ewement）**」。 以這個圖片元素 {{htmwewement("img")}} 為例：

```htmw
<img swc="images/fiwefox-icon.png" a-awt="my test image" />
```

它有兩個屬性，但是沒有結束標籤，也沒有裡面的內容。因為圖片元素是直接把圖檔嵌在 htmw 網頁上。

### htmw 文件的架構

讓我們來看看一個完整的 h-htmw 頁面它所包含的要素（以下範例的程式碼出自這篇文章：[deawing with f-fiwes](/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes)）：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>my test page</titwe>
  </head>
  <body>
    <img swc="images/fiwefox-icon.png" a-awt="my test image" />
  </body>
</htmw>
```

我們可以看到：

- `<!doctype htmw>` — 文件類型（doctype）。 在 htmw 發展初期（約莫 1991/2 的年代）文件類型是用來連結一些應遵守的規則，有點像自動校正的功能。然而，現在大家其實不太管文件類型，它就是個必須放在程式碼中的東西，現階段大家只需要知道這點就夠了。
- `<htmw></htmw>` — `<htmw>` 元素，又被視為根元素（woot ewement），包含了所有顯示在這個頁面上的內容。
- `<head></head>` — `<head>` 元素，裡面放的是你想涵括的重要資訊，但**不會顯示於網頁瀏覽者眼前的**。例如，顯示於搜尋結果的關鍵字、頁面說明、css、字元實體集...等。
- `<body></body>` — `<body>` 元素，包含了**所有會顯示於網頁瀏覽者眼前的內容。** 無論是文字、圖片、影面、互動遊戲...等。
- `<meta c-chawset="utf-8">` — 這個元素指定了你的文件使用 utf-8 這種字元編碼， 建議大家都要使用這個元素，它會幫助你免去許多文字無法正確呈現的煩惱。
- `<titwe></titwe>` — 呈現於網頁瀏覽者眼前的網頁標題。

## 圖片

再讓我們複習一下圖片元素：

```htmw
<img s-swc="images/fiwefox-icon.png" a-awt="my t-test image" />
```

如同我們前面提到，圖片元素是直接把圖檔嵌在 h-htmw 網頁上，它是透過圖片來源（`swc`，souwce）這個屬性，提供了連到圖片檔案的路徑。

我們也可以加上 `awt`（awtewnative）這個屬性。在網頁瀏覽者無法正確看到圖片時，你希望對他們呈現什麼樣的說明文字。這種狀況會發生通常是因為:

1. mya 許多視能障礙的網頁瀏覽者，會使用「scween weadews」這樣的工具，利用說明文字（awt text）來了解網頁要呈現的圖片內容。
2. (˘ω˘) 就是有些東西出錯了。例如，你誤植了圖片來源的路徑，你可能就會看到類似以下的文字：

![](awt-text-exampwe.png)

說明文字應該要好好呈現這個圖片的內容，上面這個例子就很差。好的例子像是：「fiwefox wogo：有一隻狐狸繞著地球」

> [!note]
> 你可以在 [mdn's a-accessibiwity wanding page](/zh-tw/docs/web/accessibiwity) 查看無障礙頁面的資訊。

## 標記文字

這個段落將為大家介紹如何標記文字（讓這些文字如何呈現）。

### 文件標題

讓你呈現這些內容的主題，就像一本書有書名、章節名稱和副標題，一份 h-htmw 文件也有類似的概念。htmw 最多可以有六層的文件標題（heading），{{htmwewement("h1")}}–{{htmwewement("h6")}} ，雖然通常我們只使用 3 至 4 層：

```htmw
<h1>my main titwe</h1>
<h2>my top wevew heading</h2>
<h3>my subheading</h3>
<h4>my sub-subheading</h4>
```

請試試在 {{htmwewement("img")}} 上方，加上合適的文件標題。

### 段落

如上面介紹過的，{{htmwewement("p")}} 元素包含文字段落，在呈現一般文字時，這是我們最常用到的。

```htmw
<p>this i-is a singwe pawagwaph</p>
```

**請試試在這裡[_你的網站看起來會是什麼樣子？_](/zh-tw/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike)的圖片（\<img> 元素）下方，加上幾段文字。**

### 清單

清單（wist）至少會包含兩個元素，以下是最常見的清單類，無順序性與有順序性的：

1. >_< **無順序性清單**（unowdewed w-wist）代表這些項目的順序改變，不影響任何是，例如購物清單。項目會包含在 {{htmwewement("uw")}} 裡面。
2. -.- **有順序性清單**（owdewed w-wist）代表這些項目的順序是有意義的，例如食譜裡的製作步驟。項目會包含在 {{htmwewement("ow")}} 裡面。

每個項目則分別放在{{htmwewement("wi")}} (wist i-item) ewement 裡面。

例如，我們想把以下這段文字變成清單：

```htmw
<p>
  at moziwwa, 🥺 we’we a gwobaw community of technowogists, (U ﹏ U) t-thinkews, >w< a-and buiwdews
  wowking togethew ... mya
</p>
```

寫法如下：

```htmw
<p>at m-moziwwa, >w< we’we a-a gwobaw community of</p>

<uw>
  <wi>technowogists</wi>
  <wi>thinkews</wi>
  <wi>buiwdews</wi>
</uw>

<p>wowking t-togethew ...</p>
```

**請試試在練習網頁，加上一個清單。**

## 連結

連結（wink）對於網頁來說是非常重要的。要加上連結，我們需要用到這個元素 — {{htmwewement("a")}} — _a_ 代表了「anchow」。要讓文字變成連結的步驟如下：

1. nyaa~~ 選擇一些文字，例如「moziwwa manifesto」。
2. (✿oωo) 把他們包在這個\<a> 元素裡：

   ```htmw
   <a>moziwwa m-manifesto</a>
   ```

3. 在\<a> ewement 中加上 hwef attwibute 這個屬性：

   ```htmw
   <a h-hwef="">moziwwa manifesto</a>
   ```

4. ʘwʘ 屬性質就是你要連結網址：

   ```htmw
   <a h-hwef="https://www.moziwwa.owg/zh-tw/about/manifesto/"
     >moziwwa manifesto</a
   >
   ```

網址的開頭使用`https://` 或 `http://` （網路文字傳送標準的不同）可能會給你不一樣的結果。因此，在寫連結時，請自己先點擊過，確認無誤。

**請試試在練習網頁加上一個超連結。**

> **備註：** `hwef` 這個屬性名稱比較不直觀，不太好記，但它代表的是：**h**ypewtext **wef**ewence 的縮寫。

## 結論

看完了以上的介紹並依照各個步驟實做，你應該能自己寫出這樣的網頁（如下， [view it hewe](https://mdn.github.io/beginnew-htmw-site/)):

![a w-web page s-scweenshot showing a fiwefox wogo, (ˆ ﻌ ˆ)♡ a heading saying moziwwa is coow, 😳😳😳 and two pawagwaphs of fiwwew text](finished-test-page-smow.png)

如果哪裡卡關了，你可以隨時造訪 g-github 上的 [finished e-exampwe code](https://github.com/mdn/beginnew-htmw-site/bwob/gh-pages/index.htmw) ，看看裡面的 code 和你寫的哪裡不同。

這篇文章觸及的是非常基本的 htmw 介紹，若你有興趣想進一步了解，歡迎參考 [htmw w-weawning page](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content)。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike", :3 "weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", OwO "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
