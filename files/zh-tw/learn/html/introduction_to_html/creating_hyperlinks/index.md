---
title: Creating hyperlinks
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

超連結(Hyperlinks)真的超級重要 — 它造就了我們現今所熟知的網路。這篇文章將會介紹超連結的使用語法，並且探討建立它們的最佳實踐方法。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">需求：</th>
      <td>
        我們在
        <a href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 入門</a
        >
        中介紹過的 HTML 基礎，以及在
        <a
          href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML 的文字基礎知識</a
        >
        中介紹過的文字格式化技巧。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>學習如何有效地使用超連結，並利用它們來連結多個檔案。</td>
    </tr>
  </tbody>
</table>

## 什麼是超連結？

超連結可說是網路中最令人振奮的革新技術。當然啦，早在網路技術萌芽之初，它們就已經在那了，它們正是網路之所以被稱為「網路」的最大原因 — 它讓我們的文件能任意地與其他文件(或者資源)相互連結（或是連結文件中的特定部份），讓我們能透過一個簡單的網路位址來經營我們的網路應用（相較之下，本機應用(native apps)就必須要安裝在主機上才能使用）。幾乎所有的網路內容都能被轉換成一個連結，讓網路瀏覽器在這些連結被點擊或觸發之後，跳轉到該網路位址({{glossary("URL")}})上。

> [!NOTE]
> URL 能夠指向 HTML 檔案、純文字檔案、圖片、文字文件、影音檔案等等可存在網路上的東西。如果網路瀏覽器不知道如何顯示或者處理該檔案的話，它會問你想要開啟這個檔案（將檔案交由本機應用來處理）還是要下載該檔案（意即你可以待會兒再處理）。

以 BBC 的主頁為例，裡面就包含了非常多的連結，各自連到不同新聞、網站的其它地方(導覽功能)，或者登入/註冊頁面等等。

![frontpage of bbc.co.uk, showing many news items, and navigation menu functionality](updated-bbc-website.png)

## 解析連結

一個基本的連結由 {{htmlelement("a")}} 元素包裹一段文字而成(當然也不一定要是文字，見下方的[區塊級連結](#區塊級連結block-level_links))，同時，你需要將網路位址填入 [`href`](/zh-TW/docs/Web/HTML/Element/a#href) 屬性中，這個屬性有時也被叫做**超文字參考(Hypertext Reference)**或**目標(target)**。

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

這會產生以下結果：

I'm creating a link to [the Mozilla homepage](https://www.mozilla.org/en-US/).

### 利用 title 屬性來添加額外資訊

另外一個你可能會想在連結中附加的屬性是 `title`，它的目的是攜帶一個補充訊息到連結上，好比說目標網頁有什麼樣的資訊，或者是一些警告訊息，範例如下：

```html
<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's
          mission and how to contribute"
    >the Mozilla homepage</a
  >.
</p>
```

這將會產生以下結果（當游標移到連結上方時，標題會以提示的形式出現）：

I'm creating a link to [the Mozilla homepage](https://www.mozilla.org/en-US/).

> [!NOTE]
> 連結標題只有在游標停在連結上方時才會出現，也就是說那些只依賴鍵盤來瀏覽網頁的人將會很難看到這個訊息，因此，如果說標題資訊對網頁易用性(usability)有著重大影響的話，你應該把它放在大家都看得到的地方，比方說放在一般的文字元素裡。

### 不要只用看的：建立你自己的範例連結

主動學習時間！我們想要你用自己的文字編輯器來撰寫一個 HTML 文件(你可以修改我們的[入門範本](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)，那應該就很夠用了)。

- 試著在 HTML 的主體(body)中，加入一個以上的段落或者其他你學過的內容元素。
- 將一些內容轉換成連結。
- 增加標題屬性到連結中。

### 區塊級連結(Block-level links)

就像先前所提到的，你可以將任何內容轉換成連結，就算是[區塊級元素](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started#區塊級元素_vs._行內元素（block_versus_inline_element）)也沒問題！如果你有一張圖片要轉換成連結，你可以把圖片元素放在 `<a>` 標籤裡，像這樣：

```html
<a href="https://www.mozilla.org/en-US/">
  <img
    src="mozilla-image.png"
    alt="mozilla logo that links to the mozilla homepage" />
</a>
```

> [!NOTE]
> 在往後的教學中，你還會學到更多的圖片使用技法。

## 快速理解 URL 和路徑

在完全搞懂連結標的(link target)之前，你必須要先瞭解什麼是 URL 和檔案路徑，而這個小節就是要帶你來看這些東西。

URL 全名為 Uniform Resource Locator (一致資源定位器，俗稱網址)，是一條用來指出某樣東西在網路上的位址的字串。比如說 Mozilla 的英文主頁就是位在 `https://www.mozilla.org/en-US/`。

URL 利用路徑來找到檔案，而路徑會指出你所感興趣的檔案位於檔案系統上的什麼地方。現在讓我們來看個簡單的目錄結構範例(請見我們的[建立超連結](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks)目錄)。

![A simple directory structure. The parent directory is called creating-hyperlinks and contains two files called index.html and contacts.html, and two directories called projects and pdfs, which contain an index.html and a project-brief.pdf file, respectively](simple-directory.png)

`creating-hyperlinks` 是這個目錄結構的**根目錄(root)**，當你在本地端撰寫網站時，你會將整個網站都放在這樣的資料夾中。在我們的根目錄裡有 `index.html` 和 `contacts.html` 兩個檔案，在現實的情況中，`index.html` 會是我們的首頁或者登陸頁面(landing page，網站或它的某部份的進入點)。

我們的根目錄中有兩個子目錄 — `pdfs` 和 `projects`，它們各自都有一個檔案在裡頭，分別是 `project-brief.pdf` 和 `index.html`。請記得，你可以很愉快地在一個專案中擁有兩個 `index.html`，只要它們處在檔案系統上的不同位址。很多網站都會這麼做，第二個 `index.html` 可能會拿來當作是與專案有關資訊的主登陸頁面。

- **在相同目錄裡：**如果你要連結的兩個檔案處在同一個的目錄下，你只需要寫指向的檔案名稱就行了。比方說，如果你想在 `index.html` (最上層的那個) 中加入一個通往 `contacts.html` 的超連結，你要用的 URL 就是 `contacts.html`：

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **往下到子目錄中**：如果你想要在 `index.html` (還是最上層的那個) 中加入一個指向 `projects/index.html` 的超連結，在指出你要的檔案之前，你需要先往下進到 `projects` 目錄裡。要做到這件事，你可以先指出目錄名稱，然後加上一個 /，最後再加上檔案名稱。因此你要寫的 URL 會是 `projects/index.html`：

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **往上到父目錄中**：如果你想要在 `projects/index.html` 中加入一個指向 `pdfs/project-brief.pdf` 的超連結，你需要先往上進到 `pdf` 目錄裡。而「往上移動一個目錄」可以用 `..` 來表示，因此你要寫的 URL 會是 `../pdfs/project-brief.pdf`：

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> 你可以將多個這種語法組成一個較為複雜的 URL，例如：`../../../complex/path/to/my/file.html`。

### 文件片段 (Document fragments)

並不是每次都只能連到文件的頂端，你也可以連到 HTML 文件中的某個部分，而這個部分叫做**文件片段(document fragment)**。要做到這件事，你得先為你要連的元素設定 [`id`](/zh-TW/docs/Web/HTML/Global_attributes#id) 屬性，通常你可以把連結設在標題(heading)上，像是下面這樣：

```html
<h2 id="Mailing_address">Mailing address</h2>
```

要連到特定的 `id`，你得在你的 URL 的後面加上一個 # 號，像這樣：

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

你甚至可以利用文件片段來連到*同個文件的其他部分*：

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### 絕對 URL vs. 相對 URL

你會在網路上看到兩個名詞，**絕對 URL(absolute URL)**和**相對 URL(relative URL):**

**絕對 URL**：指向網路上的絕對位址，裡頭包含協定({{glossary("protocol")}})和網域名稱({{glossary("domain name")}})。舉個例子，假設一個 web server 的根目錄有一個 `projects` 目錄，裡面放著一個 `index.html`，該網站的網域為 `http://www.example.com`，則網頁可以透過網址 `http://www.example.com/projects/index.html` 來取得 (或寫成 `http://www.example.com/projects/` 也行，因為大多的 web server 都能在 URL 沒有明確指出時，自動找尋如 `index.html` 之類的登陸頁面)。

絕對 URL 無論在什麼地方使用，它都會代表同一個位址。

**相對 URL**：指向一個檔案的相對位址，這跟我們在先前看到的非常類似。舉例來說，如果我們想要從 `http://www.example.com/projects/index.html` 連到同一目錄下的 PDF 檔，URL 就只要檔名就好 — 像是 `project-brief.pdf` — 不需要其它的資訊。如果那個 PDF 放在 `projects` 中叫做 `pdfs` 的子目錄裡，其相對連結就是 `pdfs/project-brief.pdf` (等效的絕對 URL 為 `http://www.example.com/projects/pdfs/project-brief.pdf`)。

相對 URL 指向的位址會受到檔案所在的真正位址影響 — 舉例來說，如果我們將 `index.html` 移出 `projects`，並放在網站的根目錄中 (也就是在最上層中)，裡頭指向 `pdfs/project-brief.pdf` 的相對 URL 連結會指到 `http://www.example.com/pdfs/project-brief.pdf`，而非 `http://www.example.com/projects/pdfs/project-brief.pdf`。

當然，`project-brief.pdf` 和 `pdfs` 的位置不會因為你移動 `index.html` 就改變 — 這會使得你的連結指到錯誤的地方，你一定得非常小心！

## 連結的最佳實踐

撰寫連結時有幾個最佳實踐方法，現在讓我們來看看吧。

### 使用明確的字詞

要在你的網頁上加入連結非常簡單，但這還不夠，我們必須確保連結能夠被所有讀者取用到，無論他們的背景或者使用的工具為何。比如說：

- 螢幕閱讀器的使用者會在頁面上的連結間跳來跳去，並且閱讀連結時不看上下文。
- 搜尋引擎使用連結上的文字來為目標建立索引，因此你可以將關鍵字包含在你的連結文字中，藉此有效地說明連結的對象。
- 以視覺進行閱讀的讀者對於內文往往匆匆一瞥，他們將注目在明顯的頁面特徵，像是連結，因此具有敘述性的連結文字將對他們有所助益。

我們來看幾個例子：

**好的**連結文字：[下載 Firefox](https://firefox.com)

```html
<p><a href="https://firefox.com/">下載 Firefox</a></p>
```

**不好的**連結文字：[點這裡](https://firefox.com/)來下載 Firefox

```html
<p><a href="https://firefox.com/">點這裡</a>來下載 Firefox</p>
```

其它小訣竅：

- 千萬別把 URL 當作連結文字 — URL 看起來醜斃了，更別提當螢幕閱讀器將它逐字唸出時會有多糟。
- 千萬別用「連結(link)」或「連至(link to)」— 那只是廢話罷了。螢幕閱讀器會直接告訴使用者哪邊有連結；而具有視力的讀者可以直接看出連結，因為連結通常使用不同的顏色，並且設有底線 (一般不會打破這項慣例，因為大家都已經習以為常了)，所以也不用多提。
- 讓你的連結越短越好 — 太長的連結會使螢幕閱讀器的使用者蒙受其害，因為他們必須從頭聽到尾。
- 盡量讓連結的文字不一樣，太多重複的連結文字會帶給螢幕閱讀器的使用者麻煩，因為他們可能會從一個連結表中選擇連結，因此若有許多重複的「點這裡」會讓他們相當困惑。

### 盡可能使用相對連結

經過之前的說明，你可能會覺得無論如何都應該採用絕對連結，畢竟它們不會像相對連結一樣，因為頁面被搬移而失效。然而，對於相同網站內的連結，你應該盡量使用相對連結 (連到別的網站的連結必須使用絕對連結)，原因如下：

- 首先，由於相對 URL 通常比絕對 URL 來得短，因此使用它可以增進原始碼的可讀性。
- 第二，使用相對 URL 比較有效率。當你使用絕對 URL 時，瀏覽器會先查看 server 在域名系統({{glossary("DNS")}}，詳情請見[網路是如何運作的](/zh-TW/docs/Learn/Getting_started_with_the_web/How_the_Web_works)) 上的真實位址，並再從那個位址開始尋找請求的檔案；如果我們使用相對 URL，瀏覽器就可以直接從那個 server 開始搜尋。因此，如果你在可以使用相對 URL 時而去使用絕對 URL，就會迫使你的瀏覽器不斷地進行額外的工作，進而降低效能。

### 要連到非 HTML 的資源時請先聲明

當連結連至一個需要下載的資源 (像是 PDF 或 Word 文件) 或是串流 (如影音串流) 或是其他有潛在未知影響的東西 (開啟彈出式視窗或者載入 Flash movie) 時，你應該要加上一些文字來預示，以下就是幾個非常惱人的情境：

- 假設你正處於低頻寬的連線，點擊連結之後，卻開始下載好幾 MB 的東西。
- 假設你沒有安裝 Flash player，點擊連結之後，卻進到一個需要 Flash 的頁面。

讓我們來看一些可以改善這些情況的方法：

```html
<p>
  <a href="http://www.example.com/large-report.pdf">
    下載銷售報告(PDF, 10MB)
  </a>
</p>

<p>
  <a href="http://www.example.com/video-stream/" target="_blank">
    觀看影片(將在新分頁開啟串流，HD 畫質)
  </a>
</p>

<p><a href="http://www.example.com/car-game">遊玩賽車遊戲(需要 Flash) </a></p>
```

### 當連結會觸發下載時，使用下載屬性

當你連結一個需要下載的資源時，你可以使用 `download` 屬性來提供一個預設的儲存檔名。以下範例是最新版的 Windows 版 Firefox 的下載連結：

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  下載Windows上的最新版Firefox (64-bit) (English, US)
</a>
```

## 不要只用看的：建立一個導覽選單

在這次練習中，我們想要你利用導覽列來將許多網頁連結在一起，創造出一個具有多個頁面的網站。這是一個很常見的網站建造方式 — 每一個網頁都使用同樣的網頁結構，其中包含相同的導覽選單，這樣子一來，當連結被點擊時，會讓人以為還留在原地，但內容卻倏忽更迭。

你需要先在一個目錄中建立下面這四個網頁的複本 (你可以在 [navigation-menu-start](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-start) 目錄下找到完整的清單)：

- [index.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/social.html)

接著，你可以這麼做：

1. 在指定的地方添加一個無序列表，裡面放著可以連到的網頁名稱。因為導覽選單其實就是一個連結的列表，所以這麼做在語義上沒什麼問題。
2. 把每一個網頁名稱變成超連結。
3. 把導覽選單複製到每一個頁面上。
4. 把每個網頁中，連到自己的連結移除，因為這種連結毫無意義且令人困惑，此外，無連結的文字可以用來提示使用者的所在位置。

完成後的範例應該會長這樣：

![An example of a simple HTML navigation menu, with home, pictures, projects, and social menu items](navigation-example.png)

> [!NOTE]
> 如果你卡住了，或者不確定有沒有做對，你可以到 [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-marked-up) 目錄來偷瞄答案。

## E-mail 連結

你可以建立一個連結或按鈕，使得它被點擊之後，開啟一個正在撰寫中的電子郵件訊息。這可以透過 {{HTMLElement("a")}} 元素和 `mailto:` URL scheme 來達成。

多數情況 `mailto:` 會填入收信人的電子郵件地址。例如：

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

它的結果會像是這樣：[Send email to nowhere](mailto:nowhere@mozilla.org)。

事實上，電子郵件地址是選填的。如果你將它留空 (也就是說，你的 [`href`](/zh-TW/docs/Web/HTML/Element/a#href) 只寫了 "mailto:")，使用者的 mail client 會開啟一個寄信視窗，其中並沒有指定收信人，這在使用「分享」連結時非常有用，使用者可以自行決定要寄給誰。

### 指定細節

除了電子郵件地址之外，你還可以提供其他資訊，事實上，任何標準的郵件標頭欄位都能被加到 `mailto` URL 中，常見的有主旨(subject)、副本(cc)以及主體(body) (這個雖然不是真的標頭欄位，但能讓你放一條簡短的訊息在新郵件的主體中)。每個欄位與它的值被定義成一組查詢項(query term)。

下面是一個包含 cc、bcc(密件副本)、subject 和 body 的範例：

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> 每一個欄位的值必須以 URL 編碼，也就是將空白及不可印字元(不可見的字元如縮排(tabs)、回車(carriage return)、換頁(page breaks)等等)轉換成[百分號編碼](http://en.wikipedia.org/wiki/Percent-encoding)。也請注意這裡使用問號(`?`)來分隔主要 URL 和其他欄位；以 & 來分隔 `mailto:` URL 中的不同的欄位，這是標準的 URL 查詢記號(query notation)。你可以閱讀 [GET 方法](/zh-TW/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#The_GET_method)來得知有那些常用的查詢記號。

以下是 `mailto` URL 的其他例子：

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## 小試身手！

你已經讀完這個章節囉，但你有掌握箇中的重點嗎？你可以在繼續閱讀後面的章節之前，先進行一些測驗 — 請前往[小試身手：超連結。](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links)

## 總結

總而言之，以上就是超連結的介紹了！ 稍後你在後續的課程中學到如何位連結增添樣式時，還會再碰到它們。HTML 的下一章，我們將繼續討論文字語義(text semantics)，並看一些進階／不常見的特性，相信你會獲益良多的 — 下一站是：進階文字格式化技巧！

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
