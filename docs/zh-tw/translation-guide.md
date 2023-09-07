# 針對 MDN 翻譯內容的一般指導原則

本文是針對正體中文（zh-TW）地區的翻譯指南。如果你所在的地區尚未有文件指南，而你又想新建的話，歡迎你開始建立或聯絡[我們負責該地區的翻譯團隊](https://github.com/mdn/translated-content/blob/main/PEERS_GUIDELINES.md#review-teams)。

同樣的，如果你對一般指導原則有一些不錯的想法想要補充，不用客氣，去發起問題（issue）來跟我們談談吧。以下進入正體中文翻譯指導原則的主要內容。

## 翻譯標題 ID

基於自動產生文章內的導覽、識別程式碼區塊用於建立實際範例、以及其他的原因，我們的文章會使用到 HTML ID。而對於 Markdown 文件，其渲染得到的 HTML 文件的 ID 則與 Markdown 文件中的標題相對應（但這並不意味著兩者相同，yari 平台對於空格、半角標點等有特殊處理）。

> 對於 [Live Sample][] 等需要用到 HTML ID 的地方，可以透過查看網頁原始碼的方式確定標題對應的 ID。

例如：

```md
## Tutorials
```

在 `zh-TW` 地區的翻譯應該是

```md
## 教學
```

## 翻譯程式碼區塊

當翻譯程式碼片段時，針對註解、字串、輸出結果進行翻譯都是可以的，但不建議對變數、函數、方法等名稱進行中文翻譯。

然而，不要對實際的程式碼術語進行翻譯，好比語法。你要確保範例在翻譯後仍可正常執行。

當試圖翻譯範例時，請記得有些範例會連向實際的版本或獨立的原始碼倉庫。你可以考慮建立對應的翻譯版本，然後在翻譯頁面中連向這些經翻譯的外部程式碼。

## HTML 原始碼的換行

在某些文章的原始碼中，你可能會發現區塊等級元素中有無關緊要的換行，例如：

````md
The
**`HTMLCanvasElement.transferControlToOffscreen()`**
method transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main
thread or on a worker.

```js
OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()
```
````

一般而言，我們並不會在原始碼中使用如此的換行，所以你可以選擇把它們移除，而且當你在進行新的翻譯時也不要把它們加進來。但毋須浪費太多時間移除這些多餘的換行，因為在最終呈現的結果上並不會有差異。

## 站內連結翻譯

在翻譯文章時，記得把 MDN 內部頁面連結中的語系轉換成 `/zh-TW`，以便讀者在點選連結時，能夠正確的跳轉到該主題的中文翻譯頁面。

例如：

```md
For example, consider the [JavaScript](/en-US/docs/Web/JavaScript) guide, which is structured as follows:
```

在翻譯時應該是（請注意 `/zh-TW` 替換了原本的 `/en-US`）

```md
以 [JavaScript](/zh-TW/docs/Web/JavaScript) 指南為例，它的結構如下：
```

## 中文翻譯的常見問題

基於台灣的島國文化受到外來文化的影響頗深，對中文掌握的程度也因人而異，中文輸入法又無統一規範等種種原因，在翻譯文章時難免發生不少錯誤。以下針對不同主題，整理相關常見的錯誤。

### 標點符號

錯誤使用中文標點是台灣在地化翻譯常見的問題之一，譯者往往不知道如何正確使用中文（全形）標點符號。

#### 中文標點符號

在翻譯文章時，應使用全形中文標點符號（除非在引述外文的文字中），例如：

- 正確：`雖然「Java」和「JavaScript」都是 Oracle 公司`
- 不正確：`雖然 "Java" 和 "JavaScript" 都是Oracle公司`
- 正確：`請前往 JavaScript——動態的用戶端指令。`
- 不正確：`請前往 JavaScript -動態的用戶端指令。`

當引述的內容為外文時，應保留其原有的標點符號：

- 正確：`我們將變數 myHeading 中 innerHTML 特性的值設為「Hello, world!」。`
- 不正確：`我們將變數 myHeading 中 innerHTML 特性的值設為「Hello，world！」。`

#### 常見錯誤

常見錯誤使用的標點符號（包含但不限於下列的例子）：

<!-- markdownlint-disable search-replace -->

| 名稱   | 正確     | 錯誤     |
| ------ | -------- | -------- |
| 夾注號 | （）     | ()       |
| 冒號   | ：       | :        |
| 引號   | 「『』」 | “” 、 "" |
| 破折號 | ——       | -- 、 —  |

<!-- markdownlint-enable search-replace -->

#### 如何輸入全形標點符號

在「微軟新注音」輸入法中，透過前導字元 <kbd>\`</kbd>（數字 1 左邊的按鍵），或使用 <kbd>shift</kbd> + <kbd>space</kbd> 切換全形模式，這樣可以快速輸入全形中文。其他輸入法也應有相應的機制，請自行探索。

#### 中文標點符號參考資源

- [教育部《重訂標點符號手冊》修訂版](https://language.moe.gov.tw/001/upload/files/site_content/m0001/hau/haushou.htm)。
- [維基百科標點符號](https://zh.wikipedia.org/zh-tw/%E6%A0%87%E7%82%B9%E7%AC%A6%E5%8F%B7)。

### 中文及拉丁語系文字間不加修飾空白

中文網路界，有一派習慣是在中文字與半形英數、符號字元間，手動加入半形空格，以便視覺上美觀（如[盤古之白](https://github.com/vinta/pangu.js/blob/master/README.md)倡議）；但也有人主張中英文間不應手動加入空白，而應以系統來調整顯示樣式（如 [W3C 中文排版需求草案](https://www.w3.org/TR/clreq/#mixed_text_composition_in_horizontal_writing_mode)、[Fred Jame](https://fredjame.wordpress.com/2014/09/14/%e4%b8%ad%e8%8b%b1%e6%96%87%e4%b9%8b%e9%96%93%e7%82%ba%e4%bb%80%e9%ba%bc%e8%a6%81%e6%9c%89%e7%a9%ba%e6%a0%bc%e6%88%91%e5%95%8f/)、及[中文維基百科](https://zh.wikipedia.org/wiki/Wikipedia_talk:%E6%A0%BC%E5%BC%8F%E6%89%8B%E5%86%8C/%E5%AD%98%E6%A1%A35#%E6%8F%90%E8%AD%B0%E4%BF%AE%E6%94%B9%E6%A0%BC%E5%BC%8F%E6%89%8B%E5%86%8A%E4%B8%AD%E7%9A%84%E7%A9%BA%E6%A0%BC%E7%AB%A0%E7%AF%80)之討論）。

~~經 MDN 在地化團隊[討論](https://t.me/c/1099275693/2056)，著眼於簡化格式規範，並考量作業系統與瀏覽器層級中英文混排的 kerning 實作將越來越良好（如 iOS 13、macOS 10.15 ），MDN 上「不」在中英文間手動插入空白字元。~~

基於多數應用程式都並未很對中西文混排進行最佳化處理、不手動修飾仍對閱讀上造成一定的障礙、`zh-CN` 也偏向於手動修正等理由，重新採取須手動修飾的原則。請貢獻者盡可能確保格式的正確，審核人員也會協助你找出遺漏的部分。以下手動增加修飾空白的範例：

- 正確：`使用 Git 作為版本控制。`
- 不正確：`使用Git作為版本控制。`

全形標點符號與拉丁字符間也要加空白

- 正確：`JavaScript 是一個成熟的動態程式語言，應用於 HTML 文件（document）上時`
- 不正確：`JavaScript是一個成熟的動態程式語言，應用於HTML文件（document）上時`

我們也展望 MDN 未來能透過技術上的處理（如[漢字標準格式](https://hanzi.pro/manual/)或 [pangu.js](https://github.com/vinta/pangu.js)），讓中英文混排的文件，在尚未最佳化的系統上也能美觀顯示。

### 常見標題或詞彙

原文中經常出現某些常見的標題或用詞，為了避免因未翻譯上的差異導致讀者產生疑惑，請參考下表進行翻譯：

| 原文                  | 翻譯         |
| --------------------- | ------------ |
| Browser compatibility | 瀏覽器相容性 |
| Examples              | 範例         |
| See also              | 參見         |
| Specifications        | 規範         |

### 慣用語及術語

因地緣及文化等因素，加上中國人口與市場的蓬勃發展，簡體中文資訊量龐大且強勢，台灣譯者容易受到中國慣用語的影響而不自知。

以下列舉部分常見的原文、台灣慣用翻譯、中國慣用翻譯做為參考：

| 英文                 | 台灣慣用翻譯                               | 中國慣用翻譯 |
| -------------------- | ------------------------------------------ | ------------ |
| video                | 視訊                                       | 視頻         |
| audio                | 音訊                                       | 音頻         |
| component            | 元件                                       | 組件         |
| custom               | 自訂                                       | 自定義       |
| support              | 支援（實際行動的，意圖或精神上的則為支持） | 支持         |
| network              | 網路                                       | 網絡         |
| code                 | 程式碼                                     | 代碼         |
| source code          | 原始碼                                     | 源代碼       |
| programming          | 程式設計／程設                             | 編程         |
| config/configuration | 組態                                       | 配置         |
| (browser) extension  | 套件／擴充功能                             | 插件         |
| plugin               | 外掛                                       | 插件         |
| (file) extension     | 副檔名                                     | 擴展名       |
| array                | 陣列                                       | 數組         |
| object               | 物件                                       | 對象         |

當台灣譯者在翻譯時，應盡可能地使用台灣的慣用翻譯或詞彙。若碰到不確定的情況，可以參考下列的資源。由於機器翻譯多未考慮在地語彙，請不要仰賴線上翻譯服務（譬如 Google 翻譯）。

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

中文和英文分屬兩種不同的語系，彼此之間並不一定存在對方語文中的某些概念。但在國際化的今天，中文讀者往往也容易被英文所影響。

以下是一些在翻譯中文時常碰到的問題，包含但不限於中英文之間的差異。

#### 語態

英文有主動語態（active voice）及被動語態（passive voice）。中文雖然也具有主被動語態的觀念，但以主動語態為主。因此在翻譯時，應盡可能的使用主動語態，以避免造成閱讀與理解上的困難，最典型的就是「被」的濫用以及照搬英文的倒裝句。

- 原文：`Publishing a website is a complex topic because there are many ways to go about it.`
- 宜：`因為有太多方法能夠發佈網站，所以這不是一個幾句話就能說完的課題。`
- 不宜：`發佈網站並不是一個幾句話就能說得完的課題，主要是因為有太多方法能夠發佈網站。`

#### 敬語

英文的代名詞並無敬語的觀念，然而某些中文譯者，往往習慣性地在翻譯時把代名詞譯為敬語，這是不需要的。文件敘述的語氣，毋須刻意展現謙卑的態度，使用貼近口語的說法即可，不需要太過正式（嚴肅）。

- 原文：`generally, you have to connect to your web server using details provided by your hosting company`
- 宜：`一般來說，你可以用你的公司提供的資訊登入網頁伺服器。`
- 不宜：`一般來說，您可以用您的公司提供的資訊登入網頁伺服器。`

#### 代名詞

英文文章的敘述中，常會充斥大量的第二或第三人代名詞。但在翻譯為中文時，這種過度出現的代名詞，實際上會使得閱讀變得不通順。適度地減少代名詞的使用，能讓中文的閱讀更加順暢。

- 原文：`After you have finished your instructions, follow the numbered list with a brief closing summary.`
- 宜：`在完成操作指南後，接續著有序清單給予簡略結語。`
- 不宜：`在你完成你的操作指南之後，接續著有序清單給予簡略結語。`

#### 複數形式

相對英文而言，中文並沒有複數（名詞）的概念，因此在翻譯文章時也請去除原文中複數的形式。

- 原文：`Browser Application Programming Interfaces (APIs)`
- 宜：`瀏覽器應用程式介面（API）`
- 不宜：`瀏覽器應用程式介面（APIs）`
- 不宜：`瀏覽器應用程式介面們（APIs）`

## Mozilla 正體中文在地化規範

Mozilla 各專案一致性的在地化規範與翻譯原則，請參閱 [Mozilla L10n Style Guide](https://mozilla-l10n.github.io/styleguides/zh-TW/)。

## 結語

我們很難對翻譯這項工作訂定絕對的準則，語言的正確使用與否也難有絕對的標準。因此，在面對上述的指導原則及問題時，希望你不會感到太大的壓力，如果你有任何疑問，請隨時聯絡在地化翻譯團隊，向我們提出你的問題。

儘管嘗試送出你的翻譯吧，審核人員會協助你進行除錯，找出你可能大意的地方。一旦問題都解決了，他們就會合併你的翻譯內容。

如果你還沒有做好直接貢獻翻譯的準備也沒有關係，你可以嘗試協助我們找出 MDN 上有瑕疵的翻譯，並透過問題（issue）回報給我們。又或是找到那些不太難且尚未解決的問題，並嘗試修正這些問題。這是相對簡單的方式邁出翻譯貢獻的第一步。我們衷心期待你的貢獻。

[Live Sample]: https://developer.mozilla.org/docs/MDN/Writing_guidelines/Page_structures/Live_samples
