---
title: 程式碼範例寫作指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

本文所述的指南適用於程式碼範例的風格與格式設定，無論使用何種程式語言。關於撰寫程式碼範例時應包含哪些內容，請參閱[寫作風格指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples)。

如需特定技術的指南，請參閱以下文章：

- [HTML 程式碼範例寫作指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS 程式碼範例寫作指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript 程式碼範例寫作指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell 提示字程式碼範例寫作指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## 通用最佳實踐

本節提供建立易於理解的最小化程式碼範例的**最佳實踐**，用於展示特定功能或函式的用法。

你在 MDN Web 文件上新增的程式碼範例應該：

- 簡單到讓讀者容易理解
- 複雜到能執行有趣並具實用性的功能。

有一項關鍵考量需要牢記：**讀者可能會直接複製貼上程式碼範例到他們的專案中，甚至用於正式環境。**

因此，你應確保程式碼範例可用、符合普遍接受的**最佳實踐**，並且**不會**導致應用程式產生安全性問題、效能極差、過度冗長或無法存取的情況。如果程式碼範例無法執行或不適合用於正式環境，請務必在註解和說明文字中標示警告。例如，如果範例僅為程式碼片段而非完整範例，請明確說明。此外，你應提供**所有**必要資訊，以確保範例可執行，包括任何相依性和設定資訊。

程式碼範例應儘量自我包含且易於理解。目標並非產出高效或花俏的程式碼來取悅專家，而是提供簡化且可運作的範例，讓讀者能快速理解其運作方式。

一些通用**最佳實踐**包括：

- 程式碼範例應簡潔，理想情況下僅展示你關注的功能。
- **僅**包含必要程式碼。過多無關的程式碼容易讓讀者分心或感到困惑。若要提供完整且較長的範例，可放入我們的 [GitHub 倉儲](https://github.com/mdn/)（或 JS Bin、CodePen 等類似工具），然後在範例上方或下方提供完整版本的連結。
- 不要包含不必要的伺服器端程式碼、函式庫、框架、預處理器或其它相依內容。這種內容會降低程式碼的可攜性，使其更難運行與理解。請儘量使用純 JavaScript（vanilla code）。
- 不要預設讀者熟悉任何函式庫、框架、預處理器及其它非原生功能。例如，命名類別時，請使用符合範例內容的名稱，而非針對 BEM 或 Bootstrap 使用者的命名方式。
- 撰寫程式碼時應保持清晰易懂，即使這不是最有效率的寫法。
- 在程式碼範例中應考慮包容性，MDN 的讀者來自世界各地，涵蓋不同種族、宗教、年齡、性別等。請確保範例文本能反映這種多樣性與包容性。
- **不要**為了簡潔而採用**不良實踐**（例如使用 {{HTMLElement("big")}} 這類表現元素，或 {{domxref("Document.write", "document.write()")}}），應遵循正確的做法。
- 在 API 示範中，若同時使用多個 API，請標明包含哪些 API 以及各功能的來源。

## 排版指南

對於正確的縮排、空白與單行長度的看法一直存在爭議。這類議題的討論往往會分散對內容創作與維護的注意力。

在 MDN Web 文件，我們使用 [Prettier](https://prettier.io/) 作為程式碼格式化工具，以保持一致的程式碼風格（並避免無關緊要的討論）。你可以參考我們的[設定檔](https://github.com/mdn/content/blob/main/.prettierrc.json)來了解目前的規則，並閱讀 [Prettier 文件](https://prettier.io/docs/index.html) 以獲取更多資訊。

Prettier 會格式化所有程式碼並保持風格一致。不過，還有些額外規則需要遵守。

這些 MDN Web 文件程式碼範例排版指南，同樣是撰寫程式碼時的**最佳實踐**。

### 選擇語法語言

為了確保程式碼區塊的正確排版與語法突顯，撰寫者必須明確指定程式碼區塊的語言。請參閱 [MDN Markdown 中的程式碼區塊範例](/zh-TW/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)，了解 MDN 支援哪些語言，以及如何申請新增語言的詳細資訊。

如果程式碼區塊為偽程式碼、指令輸出，或非程式語言的內容，請明確將語言設定為 `plain`。

> [!WARNING]
> 如果 MDN 尚未支援所需語言，請**不要**將程式碼區塊的語言設定為近似語言，這可能導致 Prettier 格式化與語法突顯產生意想不到的副作用。

### 程式碼單行長度

- 程式碼一行不應過長，以致需要水平滾動才能閱讀。
- 建議的**最佳實踐**是將程式碼一行限制在 80 個字元內（[互動範例](https://github.com/mdn/interactive-examples) 的上限則為 64 個字元）。
- 為提升可讀性，應在自然的斷點拆分過長的行，但不應犧牲**最佳實踐**來達成此目的。

例如，這種寫法不好：

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

這種寫法比較好，但有點奇怪：

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

最好使用樣板字面值（template literal）：

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

```js example-good
if (
  obj.CONDITION ||
  obj.OTHER_CONDITION ||
  obj.SOME_OTHER_CONDITION ||
  obj.YET_ANOTHER_CONDITION
) {
  /* 做某些事 */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### 程式碼區塊高度

程式碼區塊應該保持必要的長度，但不要過長。理想情況下，應控制在 15 到 25 行之間。如果程式碼區塊過長，請考慮僅展示最重要的部分，並提供完整範例連結，例如放置在 GitHub 倉儲或 CodePen 上。

#### 行內程式碼排版

請使用行內程式碼語法（\`）來標記函式名稱、變數名稱與方法名稱。例如：「`frenchText()` 函式」。

**方法名稱後應加上一對括號**，例如 `doSomethingUseful()`。括號有助於區分方法與其它程式碼術語。

## 正確渲染指南

請遵循這些指南，以確保你撰寫的程式碼範例能夠在 MDN Web 文件上正確顯示。此外，也應考量響應式設計，使程式碼範例在行動裝置上同樣實用。

### 渲染後的程式碼範例大小

- **將寬度設為 100%**：在桌面版 MDN Web 文件上，主要內容區寬度約為 700px，因此嵌入的程式碼範例必須在此寬度下仍能正常顯示。
- **將高度保持在 700px 以下**：建議將渲染後的程式碼範例高度控制在此範圍內，以確保螢幕上的可讀性最佳化。

### 渲染後的程式碼範例顏色

- 對於主要顏色及其它基本顏色，請使用關鍵字，例如：

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- 對於較複雜的顏色（包括半透明色），請使用 `rgb()`：

  ```css example-good
  color: rgb(0 0 0 / 50%);
  color: rgb(248 242 230);
  ```

- 對於十六進位色碼，請在適當情況下使用簡寫格式：

  ```css example-good
  color: #058ed9;
  color: #a39a92c1;
  color: #ff0;
  color: #fbfa;
  ```

  ```css-nolint example-bad
  color: #ffff00;
  color: #ffbbffaa;
  ```

### 標記渲染後的範例為良好（good）或不良（bad）

你會注意到，在本頁面中，代表**最佳實踐**的程式碼區塊右上角會顯示綠色打勾，而展示**不良實踐**的程式碼區塊則會顯示紅色圓圈內的白色打叉。

在撰寫程式碼範例時，你可以遵循相同風格。這個樣式不必套用至所有頁面，僅須用在要特別強調**最佳實踐**與**不良實踐**的頁面。

要實現這種渲染效果，請使用「程式碼框」（code fences）來標示程式碼區塊，並在後方加上語言資訊字串。例如：

```js
function myFunc() {
  console.log("你好！");
}
```

若要將程式碼區塊標示為良好或不良範例，請在語言字串後加上 `example-good` 或 `example-bad`，如下所示：

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

這些將被渲染為：

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
