# 針對 MDN 翻譯內容的一般指導原則

本文是針對正體中文（ zh-TW ）地區的翻譯指南。如果你所在的地區尚未有文件指南而你又想新建的話，歡迎你開始建立或聯絡[我們負責該地區的翻譯團隊](https://github.com/mdn/translated-content/blob/docs-readme/README.md)。

同樣的，如果你對一般指導原則有一些不錯的想法想要補充，不用客氣，去發起問題（ issue ）來跟我們談談吧。以下進入正體中文翻譯指導原則的主要內容。

## 翻譯標題 ID

基於自動產生文章內的導覽、識別程式碼區塊用於建立實際範例、以及其他的原因，我們的文章通常都會為標題配上 ID 。

在翻譯標題時，你不需要翻譯它的 ID 。路徑的其他部分也沒有翻譯，所以讓它維持一致吧。

例如：

```html
<h2 id="tutorials">Tutorials</h2>
```

在 `zh-TW` 地區的翻譯應該是

```html
<h2 id="tutorials">教學</h2>
```

一般上我們建議你用小寫的方式書寫所有 ID 。雖然平台會在呈現時自動轉換，但減少手動建立錨點就表示在轉換的過程減少出錯的機率。

## 翻譯程式碼區塊

當翻譯程式碼片段時，針對註解、字串、輸出結果進行翻譯都是可以的，但不建議對變數、函數、方法等名稱進行中文翻譯。

然而，不要對實際的程式碼術語進行翻譯，好比語法。你要確保範例在翻譯後仍可正常執行。

當試圖翻譯範例時，請記得有些範例會連向實際的版本或獨立的原始碼倉庫。你可以考慮建立對應的翻譯版本然後在翻譯頁面中連向這些經翻譯的外部程式碼。

## HTML 原始碼的換行

在某些文章的原始碼中，你可能會發現區塊等級元素中有無關緊要的換行，例如：

```html
<p>The
  <code><strong>HTMLCanvasElement</strong></code><strong><code>.transferControlToOffscreen()</code></strong>
  method transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main
  thread or on a worker.</p>

<pre
  class="brush: js">OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()</pre>
```

一般而言，我們並不會在原始碼中使用如此的換行，所以你可以選擇把它們移除，而且當你在進行新的翻譯時也不要把它們加進來。但毋須浪費太多時間移除這些多餘的換行，因為在最終呈現的結果上並不會有差異。

## 站內連結翻譯

在翻譯文章時記得把 MDN 內部頁面連結中的語系轉換成 `zh-TW` 以便讀者在點選連結時能夠正確的跳轉到該主題的中文翻譯頁面。

例如：

```html
<p>For example, consider the <a href="/en-US/docs/Web/JavaScript">JavaScript</a> guide, which is structured as follows:</p>
```

在翻譯時應該是（請注意 `/zh-TW` 替換了原本的 `/en-US`）

```html
<p>以 <a href="/zh-TW/docs/Web/JavaScript">JavaScript</a> 指南為例，它的結構如下：</p>
```

## 中文翻譯的常見問題

基於台灣的島國文化，受到外來文化的影響頗深，對中文掌握的程度也因人而異，中文輸入法又無統一規範等種種原因，在翻譯文章時難免發生不少錯誤。以下針對不同主題整理相關常見的錯誤。

### 標點符號

錯誤使用中文標點是台灣在地化翻譯常見的問題之一，譯者往往不知道如何正確使用中文（全形）標點符號。

#### 中文標點符號

在翻譯文章時，應使用全形中文標點符號（除非在引述外文的文字中），例如：

- 正確：雖然「 Java 」和「 JavaScript 」都是 Oracle 公司
- 不正確：雖然 "Java" 和 "JavaScript" 都是 Oracle 公司
- 正確：請前往 JavaScrip ——動態的用戶端指令。
- 不正確：請前往 JavaScrip-動態的用戶端指令。

當引述的內容為外文時，應保留其原有的標點符號：

- 正確：我們將變數 myHeading 中 innerHTML 特性的值設為「 Hello world! 」。
- 不正確：我們將變數 myHeading 中 innerHTML 特性的值設為「Hello world！」。


#### 常見錯誤

常見錯誤使用的標點符號（包含但不限於下列的例子）：

| 名稱 | 正確 | 錯誤 |
| --- | --- | ---- |
| 夾注號 | （） | () |
| 冒號 | ： | :  |
| 引號 | 「『』」 | “” 、 "" |
| 破折號 | —— | -- 、 — |

#### 如何輸入全形標點符號

在「微軟新注音」輸入法中，透過前導字元 <kbd>\`</kbd> （數字 1 左邊的按鍵）或使用 <kbd>shift</kbd> + <kbd>space</kbd> 切換全形模式，這樣可以快速輸入全形中文。其他輸入法也應有相應的機制，請自行探索。

#### 中文標點符號參考資源

- [教育部《重訂標點符號手冊》修訂版](https://language.moe.gov.tw/001/upload/files/site_content/m0001/hau/haushou.htm)。
- [維基百科標點符號](https://zh.wikipedia.org/zh-tw/%E6%A0%87%E7%82%B9%E7%AC%A6%E5%8F%B7)。

### 中文及拉丁語系文字交界之修飾

基於閱讀及選取操作（連點游標可選取該詞組—— word ）上的便利，在翻譯時，中外文（拉丁語系）交界處使用一個半形空格進行修飾是常見的作法。但譯者往往發生風格不一致、過度修飾等問題。

應修飾中英文交界處。

- 正確：使用 Git 作為版本控制。
- 不正確：使用Git作為版本控制。

風格不一致。部分有修飾但部分沒有。

- 正確：JavaScript 是一個成熟的動態程式語言，應用於 HTML 文件（ document ）上時，
- 不正確：JavaScript是一個成熟的動態程式語言，應用於 HTML 文件（document）上時，


過度修飾。在中文字與中文標點符號之間也進行修飾，要知道中文標點符號既中文字。

- 正確：版本控制系統—— Git 。
- 不正確：版本控制系統 —— Git。

### 慣用語及術語

因地緣及文化等因素，加上中國人口與市場的蓬勃發展，簡體中文資訊量龐大且強勢，台灣譯者容易受到中國慣用語的影響而不自知。

以下列舉部分常見的原文、台灣慣用翻譯、中國慣用翻譯做為參考：

| 英文 | 台灣慣用翻譯 | 中國慣用翻譯 |
| --- | ---------- | ---------- |
| video | 視訊 | 視頻 |
| audio | 音訊 | 音頻 |
| component | 元件 | 組件 |
| custom | 自訂 | 自定義 |
| support | 支援（實際行動的，意圖或精神上的則為支持） | 支持 |
| network | 網路 | 網絡 |
| code | 程式碼 | 代碼 |
| source code | 原始碼 | 源代碼 |
| programming | 程式設計／程設 | 編程 |
| config/configuration | 組態 | 配置 |
| (browser) extension | 套件／擴充功能 | 插件 |
| plugin | 外掛 | 插件 |
| (file) extension | 副檔名 | 擴展名 |
| array | 陣列 | 數組 |
| object | 物件 | 對象 |

當台灣譯者在翻譯時應盡可能地使用台灣的慣用翻譯或詞彙，若碰到不確定的情況，可以參考下列的資源，請不要參考線上翻譯服務（譬如， Google 翻譯）。

### 台灣慣用詞彙參考資源

專業術語可參考相關權威單位，例如：

- [國家教育研究院 雙語詞彙、學術名詞暨辭書資訊網](https://terms.naer.edu.tw/)
- [微軟語言入口網站](https://www.microsoft.com/zh-tw/language/)

特定領域術語可參考當地該領域專家的相關著作，例如：

- JavaScript 可參考林信良。
- CSS 可參考李建杭。
- Git 可參考高見龍。

其他日常用語

- [行政院陸委會正簡體對照表](https://www.mac.gov.tw/Content_List.aspx?n=87AE0F44904650AB)
- [政治大學正簡體對照表](http://nccur.lib.nccu.edu.tw/bitstream/140.119/35617/12/031112.pdf)
- [陸委會大陸資訊及研究中心](https://www.mac.gov.tw/MAIRC/cp.aspx?n=78790EF4BAE05CCF)

### 中文相關文法

中文和英文分屬兩種不同的語系，彼此之間並不一定存在對方語文中的某些概念，但在國際化的今天，中文讀者往往也容易被英文所影響。

以下是一些在翻譯中文時常碰到的問題，包含但不限於中英文之間的差異。

#### 語態

英文有主動語態（active voice）及被動語態（passive voice）。中文雖然也具有主被動語態的觀念，但以主動語態為主。因此在翻譯時應盡可能的使用主動語態以避免造成閱讀與理解上的困難，最典型的就是「被」的濫用以及照搬英文的倒裝句。

- 原文： Publishing a website is a complex topic because there are many ways to go about it.
- 宜：因為有太多方法能夠發佈網站，所以這不是一個幾句話就能說完的課題。
- 不宜：發佈網站並不是一個幾句話就能說得完的課題，主要是因為有太多方法能夠發佈網站。

#### 敬語

英文的代名詞並無敬語的觀念，然而某些中文譯者往往習慣性地在翻譯時把代名詞譯為敬語，這是不需要的。文件敘述的語氣毋須刻意展現謙卑的態度，使用貼近口語的說法即可，不需要太過正式（嚴肅）。

- 原文： FTP  programs vary widely, but generally, you have to connect to your web server using details provided by your hosting company
- 宜：FTP 程式很廣泛，但一般來說，你可以用你公司提供的資訊登入你的網頁伺服器。
- 不宜：FTP 程式很廣泛，但一般來說，您可以用您公司提供的資訊登入您的網頁伺服器。

#### 代名詞

在英文文章中，通常會在敘述中充斥大量的第二或第三人代名詞。但在翻譯為中文時這種過度出現的代名詞實際上會使得閱讀變得不通順。適度地減少代名詞的出現並不為過，甚至能夠讓中文的閱讀更加順暢。

- 原文： After you have finished your instructions, follow the numbered list with a brief closing summary or explanation about the expected outcome upon completion.
- 宜：在完成操作指南後，接續著有序清單給予結語或說明有哪些在完成操作指南後應期待出現的結果。
- 不宜：在你完成你的操作指南之後，接續著有序清單給予結語或說明有哪些在完成操作指南後應期待出現的結果。

#### 複數形式

相對英文而言，中文並沒有複數（名詞）的概念，因此在翻譯文章時也請放心地去除原文中複數的形式。

- 原文： Browser Application Programming Interfaces (APIs)
- 宜：內建在瀏覽器內的應用程式介面（ Application Programming Interface ， API ）
- 不宜：內建在瀏覽器內的應用程式介面（Application Programming Interfaces，APIs）

## 結語

我們很難對翻譯這項工作訂定絕對的準則，語言的正確使用與否也難有絕對的標準。因此，在面對上述的指導原則及問題時，希望你不會感到太大的壓力，如果你有任何疑問，請隨時與負責你所關注地區的翻譯團隊進行聯絡，向他們提出你的問題。

儘管嘗試送出你的翻譯吧，審核人員會協助你進行除錯，找出你可能大意的地方。一旦問題都解決了，他們就會合併你的翻譯內容。

如果你還沒有做好直接貢獻翻譯的準備也沒有關係，你可以嘗試協助我們找出 MDN 上有瑕疵的翻譯，並透過問題（ issue ）回報給我們。又或是找到那些不太難且尚未解決的問題，並嘗試修正這些問題。這是相對簡單的方式邁出翻譯貢獻的第一步。我們衷心期待你的貢獻。