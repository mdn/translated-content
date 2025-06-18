---
title: Firefox 2 技術文件
slug: Mozilla/Firefox/Releases/2
---

{{FirefoxSidebar}}

## Firefox 2 的開發相關特色

Firefox 2 有許多新的特色及功能，本文提供各項新特色的相關文章連結。

### 給網頁設計師及開發者

- [即時摘要](https://wiki.mozilla.org/Microsummaries)
  - : 即時摘要能定期顯示網頁中的關鍵訊息。網站或其他第三方開發者都能提供即時摘要來源，而後使用者能選擇在書籤上顯示即時摘要或網頁標題。
- [製作即時摘要](zh_tw/%e8%a3%bd%e4%bd%9c%e5%8d%b3%e6%99%82%e6%91%98%e8%a6%81)
  - : 即時摘要來源的製作教學。
- [即時摘要 XML 語法參考](zh_tw/%e5%8d%b3%e6%99%82%e6%91%98%e8%a6%81_XML_%e8%aa%9e%e6%b3%95%e5%8f%83%e8%80%83)
  - : 即時摘要來源之 XML 語法參考指南。
- [製作 OpenSearch 搜尋模組](zh_tw/%e8%a3%bd%e4%bd%9c_OpenSearch_%e6%90%9c%e5%b0%8b%e6%a8%a1%e7%b5%84)
  - : Firefox 2 支援 OpenSearch 搜尋模組格式。
- [製作 MozSearch 搜尋模組](zh_tw/%e8%a3%bd%e4%bd%9c_MozSearch_%e6%90%9c%e5%b0%8b%e6%a8%a1%e7%b5%84)
  - : Firefox 2 支援擴充版的 OpenSearch 格式，名為 MozSearch。但此非標準，故僅建議用於程式內部。
- [讓搜尋模組支援搜尋建議](zh_tw/%e8%ae%93%e6%90%9c%e5%b0%8b%e6%a8%a1%e7%b5%84%e6%94%af%e6%8f%b4%e6%90%9c%e5%b0%8b%e5%bb%ba%e8%ad%b0)
  - : 讓你的 MozSearch 模組支援搜尋建議功能，此功能將於搜尋欄中以下拉選單顯示建議關鍵字。
- [JavaScript 1.7 新功能](zh_tw/JavaScript_1.7_%e6%96%b0%e5%8a%9f%e8%83%bd)
  - : Firefox 2 支援 JavaScript 1.7，包含新的 `let` 表達式、跨結構指定(destructuring assignment)、產生器 (generators)、迴圈器 (iterators) 和陣列簡約式 (array comprehensions)。
- [WHATWG 於用戶端儲存工作階段資料](https://www.whatwg.org/specs/web-apps/current-work/#scs-client-side)
  - : 於用戶端儲存工作階段資料技術可讓網路應用程式於用戶端儲存結構化資料。
- [Firefox 中的 SVG](zh_tw/Firefox_%e4%b8%ad%e7%9a%84_SVG)
  - : Firefox 2 提升支援 Scalable Vector Graphics (SVG) 的程度，實作了 `<textPath>` 元素、也開始支援某些從前無法妥善處理的屬性。
- [控制 HTML 表單中的拼字檢查功能](zh_tw/%e6%8e%a7%e5%88%b6_HTML_%e8%a1%a8%e5%96%ae%e4%b8%ad%e7%9a%84%e6%8b%bc%e5%ad%97%e6%aa%a2%e6%9f%a5%e5%8a%9f%e8%83%bd)
  - : Firefox 2 支援文字輸入區的即時拼字檢查，本文描述撰寫 HTML 表單元素時啟用或停用此功能的方法。
- [Firefox 2 的安全功能](zh_tw/Firefox_2_%e7%9a%84%e5%ae%89%e5%85%a8%e5%8a%9f%e8%83%bd)
  - : 某些與安全相關之協定的預設啟用情形，在 Firefox 2 有了更動。

### 給 XUL 與擴充套件開發者

- [讓擴充套件升級至 Firefox 2](zh_tw/%e8%ae%93%e6%93%b4%e5%85%85%e5%a5%97%e4%bb%b6%e5%8d%87%e7%b4%9a%e8%87%b3_Firefox_2)
  - : 描述讓現有擴充套件升級以便支援 Firefox 2 的方法。
- [跨連線儲存 (Session store) API](zh_tw/%e8%b7%a8%e9%80%a3%e7%b7%9a%e5%84%b2%e5%ad%98_API)
  - : Firefox 現在支援跨連線 (Session) 儲存或復原資料。
- [消息來源內容存取 API](zh_tw/%e6%b6%88%e6%81%af%e4%be%86%e6%ba%90%e5%85%a7%e5%ae%b9%e5%ad%98%e5%8f%96_API)
  - : 讓開發者存取、解析 RSS 或 Atom 消息來源的 API。
- [SAX 支援](zh_tw/SAX)
  - : 事件驅動式的 XML 解析 API。
- [自網頁添加搜尋引擎](zh_tw/%e8%87%aa%e7%b6%b2%e9%a0%81%e6%b7%bb%e5%8a%a0%e6%90%9c%e5%b0%8b%e5%bc%95%e6%93%8e)
  - : Firefox 能以 JavaScript 新增搜尋引擎模組，模組可為 OpenSearch 或 Sherlock 格式。
- [於 XUL 中使用拼字檢查](zh_tw/%e6%96%bc_XUL_%e4%b8%ad%e4%bd%bf%e7%94%a8%e6%8b%bc%e5%ad%97%e6%aa%a2%e6%9f%a5)
  - : 如何使用拼字檢查功能及怎樣取得建議拼字清單的程式碼。
- [新增偽造網站清單來源](zh_tw/%e6%96%b0%e5%a2%9e%e5%81%bd%e9%80%a0%e7%b6%b2%e7%ab%99%e6%b8%85%e5%96%ae%e4%be%86%e6%ba%90)
  - : Firefox 可以新增額外的詐騙網站資料來源，藉此提升偵測偽造網站的能力。
- [新增消息來源閱讀工具](zh_tw/%e6%96%b0%e5%a2%9e%e6%b6%88%e6%81%af%e4%be%86%e6%ba%90%e9%96%b1%e8%ae%80%e5%b7%a5%e5%85%b7)
  - : 你可以用網頁或程式新增 Firefox 的消息來源閱讀工具。
- [Storage](zh_tw/Storage)
  - : Firefox 2 新增 mozStorage 功能，為基於 sqlite 的資料庫結構。
- [Firefox 2 佈景主題之更動](zh_tw/Firefox_2_%e4%bd%88%e6%99%af%e4%b8%bb%e9%a1%8c%e4%b9%8b%e6%9b%b4%e5%8b%95)
  - : 討論現有佈景主題更新以便支援 Firefox 2 的方法。

## 給廣大使用者的新功能

Firefox 2 提供比上個版本更簡潔的操作介面，強化的安全隱私保護，讓你上網更安全方便。

### 使用操作體驗

- **文字欄內拼字檢查** 讓你在填寫表單時更安心。
- **即時摘要 (Microsummaries)** 提供另一種書籤顯示的方式，可以用網頁上的某段文字作為書籤標題，並自動更新以監視最新動態。這對股票族、網拍狂等非常有用。
- **擴充套件管理員操作介面** 更友善。
- **搜尋引擎管理員** 讓你可以重新排列順序或移除搜尋欄中的搜尋引擎。
- **強化的分頁瀏覽** 在每個分頁上加入了關閉鈕、調整了關閉分頁後的切換行為及簡化的分頁選項。
- **自動偵測搜尋引擎** 可讓你瀏覽到提供搜尋引擎的網站時直接安裝該引擎。
- **搜尋建議** 會在你於搜尋欄中搜尋時，即時提供搜尋建議。

### 安全隱私保護

- **詐騙網站防護** 會在你瀏覽偽造網站時發出警告。
