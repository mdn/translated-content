---
title: 何謂無障礙網頁？
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
original_slug: Learn/Accessibility/What_is_accessibility
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

這篇文章給「到底什麼是無障礙網頁」的模塊，開了個好起頭：以下將包括我們該考慮什麼樣的用戶以及理由、不同的人要在 web 用什麼工具互動、還有如何令無障礙網頁成為 web 開發的一部分。

<table>
  <tbody>
    <tr>
      <th scope="row">先決要求：</th>
      <td>基本資訊能力、還有對 HTML 與 CSS 有基本的理解。</td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>熟悉無障礙網頁，包含它是什麼、還有它如何影響作為 web 開發者的你。</td>
    </tr>
  </tbody>
</table>

## 到底什麼是無障礙網頁？

無障礙是盡可能令更多人，使用你網站的實做：一般來說，我們會認為這屬於身心障礙者的範疇，但它其實會涵蓋其他群體：像是使用行動設備、或者網速很慢的人。

也可以把無障礙想成：所有人，不論他們的能力或環境如何，都要同等看待、並給予同等機會。就如同我們不能把坐在輪椅的人，排除在某棟物理大樓之外：目前的公共建築，通常都會有電梯或輪椅坡道；我們也不能排除視障或手機用戶，使用我們的網站。儘管我們生而不同，但我們都是人，因此，我們都擁有相同的人權。

無障礙是好事，但也是某些國家法律的一部分，也能開啟一些關係到你的服務或產品的市場。

無障礙與其所需之最佳實做將使大家受益：

- 提昇無障礙的語意 HTML 能增進 SEO，令網站更容易被找到、也更易於銷售。
- 關注無障礙網頁會展現優良的倫理道德、以增進你的公共形象。
- 無障礙網頁的一些作法也能令網站易於給其他族群使用，像是手機用戶、低網速……等等。事實上，任何人都能從此類改進中獲益。
- 我們還要提提某些地區的法律規定嗎？

## 你在鎖定什麼樣的障礙者？

身心障礙者和非身心障礙者一樣多元，他們的障別也是如此。重點是，不要光用自己使用電腦和 web 的角度去思考這件事：_你並不是無障礙網頁的用戶_。下文將解釋應當考慮的障別，還有他們訪問 web 內容的特殊工具（通常稱作 **assistive technologies**、**AT**、**輔助工具**、**輔具**）。

> [!NOTE]
> 世界衛生組織的[殘疾與健康](http://www.who.int/mediacentre/factsheets/fs352/zh/)指出「超過 10 億人，約佔世界人口的 15%，患有某種形式的殘疾。」、且「1.1 億至 1.9 億成年人有很嚴重的功能性障礙。」。

### 視覺障礙

視覺障礙包括盲人、低度視覺、色盲……等等。這類的用戶會使用擴視器（screen magnifier，可能是物理擴視機、或是軟體的縮放功能：當代多數瀏覽器和作業系統都有這種功能），也有些人會用螢幕閱讀器（screen reader，朗讀數位文字的軟體）：

- 有些是商業軟體，例如 [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS)（Windows）和 [Window Eyes](http://www.gwmicro.com/window-eyes/)（Windows）。
- 也有些是自由軟體，例如 [NVDA](http://www.nvaccess.org/)（Windows）、[ChromeVox](http://www.chromevox.com/)（Chrome、Windows、Mac OS X）、[Orca](https://wiki.gnome.org/Projects/Orca)（Linux）
- 還有些是系統內建，例如 [VoiceOver](https://www.apple.com/accessibility/osx/voiceover/)（Mac OS X 與 iOS）、[Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started)（Microsoft Windows）、[ChromeVox](http://www.chromevox.com/)（ChromeOS）、[TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback)（Android）。

熟悉螢幕閱讀器是個好主意；你得設定好螢幕閱讀器、還要會使用它，以理解其工作原理。請參見[cross browser testing screen readers guide](/zh-TW/docs/Learn_web_development/Core/Accessibility/Tooling#Screenreaders)以深入理解。以下影片提供了簡單的體驗。

{{EmbedYouTube("IK97XMibEws")}}

在統計方面，世界衛生組織表明：「全球視力受損人數約 2.53 億：3600 萬人患有盲症，2.17 億人有中度至重度視力損害。」（請參見[視力損害和盲症](http://www.who.int/mediacentre/factsheets/fs282/zh)）。如果網站編寫不正確，你的網站就會失去如此龐大的和重要的用戶群：這大約是全美國的總人口數。

### 聽覺障礙

聽覺障礙者、或聾人，是指聽力低落、或毫無聽力的群體。聽覺障礙者通常會用輔具（請參見[Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)），但沒有給電腦/web 使用的專門輔具。

不過，請記得有專門技術，會針對有聲內容，提供閱讀的替代文字。有簡單的文本記錄（text transcript）、也有能在影片出現的追蹤文字（text track），例如字幕。接下來將有文章深入探討。

聽覺障礙者也是龐大的人口，世界衛生組織在[耳聾和聽力損失](http://www.who.int/mediacentre/factsheets/fs300/zh)指出：「全球有 3.6 億人患有殘疾性聽力損失」。

### 行動障礙

有運動障礙的人，可能是純粹身體問題（例如： 肢體殘缺或癱瘓）或是四肢無力、失去控制等神經或遺傳疾病。他們可能難以使用滑鼠做出精確的手部動作，甚至可能只能使用[頭指針（head pointer）](http://pattersonmedical.com/app.aspx?cmd=getProductDetail&key=070_921118261)操作電腦。

這些殘疾也可能是老化的結果，而不是受到創傷或疾病，或可能是硬體的限制——有些使用者可能沒有滑鼠。

通常影響開發者開發網站的需求是要能使用鍵盤操作網頁——我們會在後續的文內討論使用鍵盤操作網頁。雖然這個需求有些麻煩，但這是一個很好的主意，請開發者嘗試看看。例如：你可以使用 Tab 鍵在表單中切換填寫項目嗎？你可以在我們的[跨瀏覽器測試中找到更多關於使用鍵盤控制網頁的相關資訊](/zh-TW/docs/Learn_web_development/Core/Accessibility/Tooling#Using_native_keyboard_accessibility)。

統計數據顯示，許多人有行動障礙。 美國疾病控制和預防中心的[殘疾統計數據（涵蓋範圍為非法人的 18 歲以上成人）](http://www.cdc.gov/nchs/fastats/disability.htm)顯示，在美國，有身體機能障礙者佔成人人口的 15.1% 。

### 認知障礙

最後一類，可能是最廣泛出現的殘疾——認知障礙。認知障礙廣義可涵蓋從精神疾病到學習困難，包含[ADHD（注意缺陷多動障礙）](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd/index.shtml)、[自閉症](https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd/index.shtml)患者、[思覺失調](https://www.nimh.nih.gov/health/topics/schizophrenia/index.shtml)以及許多其他相關疾病。這些與記憶、解決問題能力、理解能力與注意力等問題相關的疾病，都大大影響病患的日常生活。

這些疾病會影響病患使用網站，而最常見的問題就是他們會在理解如何完成網頁操作、記憶以往完成網頁操作的過程、以及經歷各種不同的操作流程與不一致的佈局/導覽列/其他頁面功能時，增加許許多多的挫敗感。

與其他網路無障礙問題不同，我們無法快速解決認知障礙引起的網路操作問題；
你唯一能做的就是設計網站時，盡可能符合邏輯性、一致性與可用性，例如：

- 頁面一致 － 導覽列、頁眉、頁腳和主要內容區塊在每一個頁面都位在相同的位置。
- 網站內工具設計精良，易於使用。
- 多個階段的流程（例如註冊），被細分有邏輯性的步驟，並提醒使用者如何進行流程，以及他需要多長的時間才能完成流程。
- 工作流程是合乎邏輯的、簡單的，並且盡可能減少需要與網站互動的流程
  例如：註冊和登入網站常常就是很複雜且不必要的。
- 適量呈現頁面資訊，盡量讓頁面呈現的資訊不要過多或過密。
- 適當的用語，頁面呈現的用語須標準或通俗易懂，不要充滿不必要的行話或俚語。
- 內容的重點處適時以某些方式（例如：使用螢光色標示）突顯出來。
- 使用者操作錯誤的地方也需要標示出來，並且提供相關訊息或解決方法，幫助使用者解決錯誤。

上述這些並不是「無障礙技術」，但他們是很好的設計理念。他們會讓使用者受益良多，因此他們應該成為你開發網站的工作標準之一。

康乃爾大學 [2014 年的殘疾報告](http://www.disabilitystatistics.org/StatusReports/2014-PDF/2014-StatusReport_US.pdf)顯示，2014 年美國 21 歲至 64 歲的人中，有 4.5% 的人有認知障礙。

> [!NOTE]
> WebAIM 的[認知頁面](https://webaim.org/articles/cognitive/)提供了更多資訊，值得一讀

## 專案引入無障礙

有一個很常見的迷思，就是在專案管理方面，無障礙屬於昂貴的「外加」成本。如果有以下情形的話，這個迷思*的確會*發生：

- 針對明顯有障礙的網站，想要「重寫」為無障礙網站。
- 在專案後期才想到無障礙網頁相關問題時。

如果在專案初期就考慮到無障礙網頁，大多數無障礙內容的成本可以最小化。

當在規劃專案時，將無障礙測試納入你的測試中，就像測試其他功能一樣（例如：移動裝置 UI 測試）。
及早測試、經常測試，理想情況是運行自動化測試以檢測缺少的功能（例如：圖片缺少[替代文字](/zh-TW/docs/Learn_web_development/Core/Accessibility/Tooling#Text_alternatives)、不好的連結文字 － 請參見 [Element relationships and context](/zh-TW/docs/Learn_web_development/Core/Accessibility/Tooling#Element_relationships_and_context)），並做一些測試，為了讓殘疾人士能夠操作更複雜的網站功能。例如：

- 日期選擇器是否可以提供給螢幕閱讀器的人使用？
- 如果內容動態更新了，視障人士是否能馬上收到資訊？
- 使用鍵盤或觸控式介面的人能順利操作我的 UI 按鈕嗎？

你應該記錄自己網站中有問題的地方，並努力讓這些地方變成無障礙或考慮解決方案 / 替代方案，並持續進行測試。文字內容（你可以在下一章看到更多資訊）要做到無障礙很簡單，但是如你想要在網站中放上更多絢麗的 3D 圖形，那應該要怎麼做呢？
你應該評估專案的預算，並考慮有什麼解決方案可以讓這些絢麗的 3D 圖形容易被存取。
例如：你可以支付高額的費用，讓那些多媒體內容轉錄成無障礙設備可存取的資訊，雖然昂貴，卻是可行的方案。

雖然要實現 100% 無障礙網頁是一種難以達成的理想，世事難料，你總是會遇到一些不常見的問題，導致某個使用者難以使用網頁，但你還是應該盡可能做到無障礙網頁。如果你打算使用 WebGL 製作的炫麗的 3D 圓餅圖，可以撰寫替代的文字，來傳達圖表的資訊。或者你可以只使用表格來傳達資訊而不使用 3D 圓餅圖，這樣每個人都可以一目了然表格傳達的資訊、網頁傳輸編碼更快、CPU 使用率更低，並且更容易維護。

但是如果你是一個有趣的 3D 藝術畫廊網站開發者，那麼期待這些藝術品能夠傳達給視障人士，就不太合理，因為圖畫這類的藝術品本身就是透過視覺作為傳達訊息的媒介。

為了表明你對無障礙網頁的關心，請在你的網站上發佈無障礙網頁聲明，並詳細說明你為無障礙網頁做了哪些事情、採取了哪些步驟。如果有人抱怨你的網站存在無障礙問題，請他們回報給你們，並嘗試解決。

> [!NOTE]
> 我們的 [Handling common accessibility problems article](/zh-TW/docs/Learn_web_development/Core/Accessibility/Tooling) 包含了應該進行詳細測試的無障礙網頁規範。

總而言之：

- 在專案初期就考量到無障礙網頁、還要測試得早而多。一如其他錯誤，無障礙網頁問題在越晚發現時，麻煩也越大。
- 謹記無障礙網頁，是對大家都有利的。例如說，精實的語意標記不只對螢幕閱讀有利，也利於快速載入與效能，從而對大家有利，尤其對行動設備、或是網速過慢的人。
- 再網站上標明支援無障礙網頁，並鼓勵身心障礙者參與。

## 無障礙網頁的指引與法律

有一些針對無障礙網頁的檢查清單和指引能夠用做測試，它們乍看之下可能令人眼花撩亂。我們建議你只要專注熟悉的基本領域、並理解指引裡面，與你最相關的高層次結構。

- 首先，W3C 針對無障礙網頁的一致性，發布了龐大而詳盡、並包含精確而不講明具體技術的準則文件。它們通常稱作 [Web Content Accessibility Guidelines](https://www.w3.org/WAI/intro/wcag.php)（WCAG，無障礙網頁內容指引），無論從哪個角度來說，讀起來都不是普通的長。整個準則能分為以下四大類：它指定如何實做可感知、可操作、可理解、還有健壯（perceivable, operable, understandable, robust）的內容。要取得簡易指引並開始學習，可以去參閱 [WCAG at a Glance](https://www.w3.org/WAI/WCAG20/glance/Overview.html)。你不需要學習 WCAG 的一切：只要了解主要的關注領域，並使用各種技術和工具來高亮任何不符 WCAG 標準的領域就型（參閱以下）。
- 你的國家或地區可能有特別立法，以管理這方面人口的需求：例如美國的 [Section 508 of the Rehabilitation Act](http://www.section508.gov/content/learn)、德國的 [Federal Ordinance on Barrier-Free Information Technology](https://www.einfach-fuer-alle.de/artikel/bitv_english/)、英國的 [Equality Act](http://www.legislation.gov.uk/ukpga/2010/15/contents)、義大利的 [Accessibilità](http://www.agid.gov.it/agenda-digitale/pubblica-amministrazione/accessibilita)、還有澳洲的 [Disability Discrimination Act](https://www.humanrights.gov.au/world-wide-web-access-disability-discrimination-act-advisory-notes-ver-41-2014)……等等。
  （譯註：針對繁體中文，台灣有[基於《身心障礙者權益保障法》的無障礙網頁開發規範](https://www.handicap-free.nat.gov.tw)、香港有[基於《殘疾歧視條例》的無障礙設計指引](https://www.ogcio.gov.hk/tc/community/web_mobileapp_accessibility/promulgating_resources/handbook/doc/Web_Accessibility_Handbook.pdf)）

因此，儘管 WCAG 有所指引，你的國家可能還是有管理無障礙網頁、或最少針對公眾無障礙服務（可能包含了網站、電視、物理空間……等等）的法案。最好先看看所處地區的法律管轄權。如果不好好檢查內容是否無障礙，當身心障礙者投訴時，你可能會面臨法律問題。

聽起來很可怕，但只要在開發時，如上所述地把無障礙網頁議題當作高度優先就可以了。如果真的有疑問，請諮詢合格的專業律師。我們不是律師，所以不會提供更深入的意見。

## 無障礙網頁 API

瀏覽器使用特殊的**accessibility API**（由各自的作業系統底層提供）對輔助技術（AT）提供有用的信息：輔助技術傾向使用語義訊息，因此這種訊息不包含樣式化資訊、或是 JavaScript。這種資訊建構成一個稱為 **accessibility tree** 的訊息樹（tree of information）。

不同的作業系統有不同的 accessibility API：

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- Mac OS X: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

如果由 web app 裡面，HTML 元素提供的原生語意訊息出問題了，你可以把它用做 [WAI-ARIA 規範](https://www.w3.org/TR/wai-aria/)的補充：它會把語意訊息添加到 accessibility tree 以增進無障礙功能。你可以在 [WAI-ARIA 基礎](/zh-TW/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)文章學習 WAI-ARIA。

## 結論

本文應當使你對無障礙網頁有著概括性的認知、明白其重要性、並在知道如何在工作流程中安排它。你也該對知道如何實做無障礙網頁的細節有興趣。我們將在下個章節開始闡明為什麼 HTML 是無障礙網頁的好基礎。

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
