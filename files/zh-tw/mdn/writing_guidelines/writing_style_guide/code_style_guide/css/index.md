---
title: CSS 程式碼範例寫作指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

以下指南說明如何為 MDN Web 文件撰寫 CSS 範例程式碼。

## CSS 程式碼範例通用指南

### 格式選擇

對於正確的縮排、空白與單行長度的看法一直存在爭議。這類議題的討論往往會分散對內容創作與維護的注意力。

在 MDN Web 文件，我們使用 [Prettier](https://prettier.io/) 作為程式碼格式化工具，以保持一致的程式碼風格（並避免無關緊要的討論）。你可以參考我們的[設定檔](https://github.com/mdn/content/blob/main/.prettierrc.json)來了解目前的規則，並閱讀 [Prettier 文件](https://prettier.io/docs/index.html) 以獲取更多資訊。

Prettier 會格式化所有程式碼並保持風格一致。不過，還有些額外規則需要遵守。

### 規畫你的 CSS

在開始撰寫大量 CSS 之前，請先仔細規劃你的樣式。哪些通用樣式是必要的？你需要設計哪些不同的版面配置？哪些特定的覆寫需要被建立？這些覆寫可否重覆使用？最重要的是，你應該**避免過度覆寫**。若你不斷發現自己定義了樣式，幾條規則後又將其取消，這可能表示你需要重新思考你的設計策略。

### 使用彈性/相對單位

為了在最廣裝置範圍內提供最大靈活性，建議使用相對單位來設定容器（container）、內距（padding）等大小，例如 `em`、`rem`，或使用百分比與視口單位（viewport units），以根據視口寬度動態調整。你可以在我們的 [CSS 值與單位指南](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units)中閱讀更多相關資訊。

### 別使用預處理器

請別在範例程式碼中使用預處理器（preprocessor）語法，諸如 [Sass](https://sass-lang.com/)、[Less](https://lesscss.org/) 或 [Stylus](https://stylus-lang.com/)。在 MDN Web 文件，我們記錄的是純（vanilla）CSS 語言。使用預處理器可能增加範例理解難度，進而困惑讀者。

### 別使用特定的 CSS 方法學

與前述指南相同，在 MDN Web 文件撰寫範例程式碼時，別使用特定的 CSS 方法學，例如 [BEM](https://getbem.com/naming/) 或 [SMACSS](https://smacss.com/)。盡管這些命名規則符合 CSS 語法，對於不熟悉這些方法學的讀者來說很容易混淆。

### 別使用重置

為了在不同平台上都能最大程度控制 CSS，許多人過去會使用 CSS 重置（reset）來移除所有樣式，然後再自行重新定義。這種做法雖然有其優點，但在現代開發環境中，CSS 重置可能過猶不及，導致額外時間都浪費在重新實作本來沒有問題的樣式，例如預設的邊距（margin）、清單樣式等。

如果你真的認為需要使用 CSS 重置，建議考慮使用 [Nicolas Gallagher 的 normalize.css](https://necolas.github.io/normalize.css/)。它的目標是讓不同瀏覽器之間的樣式更一致，移除一些常見的預設問題（例如 `<body>` 的邊距），並修正一些瀏覽器錯誤。

## !important

`!important` 應作為最後手段，通常只在必須覆寫某些樣式且別無他法時才使用。使用 `!important` 屬於**不良實踐**，應盡量避免使用。

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS 註解

請使用 CSS 樣式的註解來標註不易理解的程式碼。此外，請注意應在星號與註解之間留一格空白。

```css example-good
/* 這是一個 CSS 樣式的註解 */
```

請將註解放在與其對應程式碼的前一行，如下所示：

```css example-good
h3 {
  /* 建立紅色陰影，偏移 1px 右下，模糊半徑為 2px */
  text-shadow: 1px 1px 2px red;
  /* 設定字型大小為文件預設字型大小的兩倍 */
  font-size: 2rem;
}
```

## 包圍值的雙括號

當需要或應該使用引號時，請務必使用，並統一使用雙引號。例如：

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## 完整寫法與縮寫規則

在講解 CSS 語法細節時，通常使用完整屬性（longhand properties）比起簡寫屬性（shorthand properties）更清楚易懂（除非範例的目的正是解釋簡寫語法）。請記住，MDN Web 文件的範例是為了教學，而非追求精簡或高效。因此，我們建議使用完整屬性，原因如下：

- 簡寫屬性通常較難理解。例如，在下方範例中，解析 {{cssxref("font")}} 簡寫屬性的確切作用要花點時間。

  ```css
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  相較之下，以下的完整屬性寫法更清楚：

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- 使用 CSS 簡寫屬性可能帶來額外風險——當你未明確指定某些值時，瀏覽器會為這些屬性設定預設值，這可能導致先前定義的值意外重置，或產生預期外效果。例如，{{cssxref("grid")}} 屬性會為未指定的項目設定以下預設值：

  - {{cssxref("grid-template-rows")}}：`none`
  - {{cssxref("grid-template-columns")}}：`none`
  - {{cssxref("grid-template-areas")}}：`none`
  - {{cssxref("grid-auto-rows")}}：`auto`
  - {{cssxref("grid-auto-columns")}}：`auto`
  - {{cssxref("grid-auto-flow")}}：`row`
  - {{cssxref("column-gap")}}：`0`
  - {{cssxref("row-gap")}}：`0`
  - {{cssxref("column-gap")}}：`normal`
  - {{cssxref("row-gap")}}：`normal`

- 某些簡寫屬性僅在值的組成部分按照特定順序排列時才能正常運作。例如，在 CSS 動畫中，值的順序必須符合規定。以下範例中，註解標示了值的正確順序：

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  在此範例中，第一個能解析為 [`<time>`](/zh-TW/docs/Web/CSS/time) 的值會被指定給 [`animation-duration`](/zh-TW/docs/Web/CSS/animation-duration) 屬性，而第二個能解析為時間的值則會被指定給 [`animation-delay`](/zh-TW/docs/Web/CSS/animation-delay)。（欲了解更多資訊，請參閱[動畫語法](/zh-TW/docs/Web/CSS/animation#syntax) 詳細說明。）

## 行動裝置優先的媒體查詢（media query）

在樣式表中，若包含針對不同目標視口（viewport）大小的[媒體查詢](/zh-TW/docs/Web/CSS/CSS_media_queries/Using_media_queries)樣式，應先定義窄螢幕/行動裝置的樣式，再逐步增加媒體查詢來新增較寬視口的樣式。遵循這個原則能帶來許多優勢，詳情請參閱[回應式設計](/zh-TW/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)。

```css example-good
/* 預設樣式：適用於窄螢幕 */

@media (min-width: 480px) {
  /* 適用於中等寬度螢幕的 CSS */
}

@media (min-width: 800px) {
  /* 適用於寬螢幕的 CSS */
}

@media (min-width: 1100px) {
  /* 適用於超寬螢幕的 CSS */
}
```

## 選擇器（selector）

- 不要使用 id 選擇器，因為它們：

  - 較沒彈性；若後續需要更多相同選擇器，id 無法重覆使用。
  - 具有比類別選擇器（class）更高的優先權，導致覆寫變得更困難。

  ```css example-good
  .editorial-summary {
    /* 類別選擇器是建議寫法 */
  }
  ```

  ```css example-bad
  #editorial-summary {
    /* id 選擇器是不建議寫法 */
  }
  ```

## 關閉屬性的值

當需要關閉邊框（或其它可接受 `0` 或 `none` 作為值的屬性）時，請使用 `0` 而非 `none`：

```css example-good
border: 0;
```

## 參見

[CSS 參考索引](/zh-TW/docs/Web/CSS/Reference#index)——瀏覽我們的 CSS 屬性參考頁面，以查看一些優秀、簡潔且具意義的 CSS 片段。我們在「試試看（Try it）」區段的互動範例，基本遵循本頁描述的指南。
