---
title: HTML 程式碼範例寫作指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

以下指南說明如何為 MDN Web 文件撰寫 HTML 範例程式碼。

## HTML 程式碼範例通用指南

### 格式選擇

對於正確的縮排、空白與單行長度的看法一直存在爭議。這類議題的討論往往會分散對內容創作與維護的注意力。

在 MDN Web 文件，我們使用 [Prettier](https://prettier.io/) 作為程式碼格式化工具，以保持一致的程式碼風格（並避免無關緊要的討論）。你可以參考我們的[設定檔](https://github.com/mdn/content/blob/main/.prettierrc.json)來了解目前的規則，並閱讀 [Prettier 文件](https://prettier.io/docs/index.html) 以獲取更多資訊。

Prettier 會格式化所有程式碼並保持風格一致。不過，還有些額外規則需要遵守。

## 完整的 HTML 文件

> [!NOTE]
> 本節指南僅適用於需要顯示完整 HTML 文件的情境。通常，程式碼片段便足以展示某項功能。使用 [EmbedLiveSample 巨集](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) 時，只須包含 HTML 片段，顯示時它將自動插入完整的 HTML 文件中。

### 文件型態宣告

請使用 HTML5 文件型態宣告（`doctype`）。它簡潔、好記，並向後相容。

```html example-good
<!doctype html>
```

### 文件語言

請在 {{htmlelement("html")}} 元素上使用 [`lang`](/zh-TW/docs/Web/HTML/Global_attributes/lang) 屬性來設定文件語言：

```html example-good
<html lang="zh-TW"></html>
```

這有助於提升無障礙體驗與搜尋引擎優化（SEO），也能幫助內容本地化，並提醒開發者遵循**最佳實踐**。

### 文件編碼

你也應該這樣定義文件的字元編碼：

```html example-good
<meta charset="utf-8" />
```

請使用 UTF-8，除非有極特殊理由不這麼做。UTF-8 幾乎涵蓋所有語言的字元需求，確保文件的正確顯示與相容性。

### 視口 `meta` 標籤

最後，你應該在 HTML 文件的 {{HTMLElement("head")}} 內加入視口 `meta` 標籤，以確保程式碼範例在行動裝置上能夠正確顯示。你的文件應包含至少以下內容，並可根據需求進一步修改：

```html example-good
<meta name="viewport" content="width=device-width" />
```

詳情請參閱[使用視口 `meta` 標籤控制行動瀏覽器的版面配置](/zh-TW/docs/Web/HTML/Viewport_meta_tag)。

## 屬性

所有屬性（attribute）的值應使用雙引號包覆。雖然 HTML5 允許省略引號，但包含引號可使標記更整潔易讀。例如，以下寫法較佳：

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…比這種寫法更好：

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

省略引號可能會導致問題。在上述範例中，`alt` 屬性將被解讀為多個獨立屬性，因為沒有引號來確保 `"A circular globe icon"` 作為單一屬性值。

## 布林屬性

不要為布林屬性指定值（但{{glossary("enumerated", "枚舉")}}屬性仍須指定值）；僅須寫出屬性名稱即可啟用該屬性。例如，可以這樣寫：

```html example-good
<input required />
```

這種寫法易於理解且能正常運作。若 HTML 布林屬性存在，其值即為 `true`。雖然手動指定值仍可運行，但這是不必要也不正確的：

```html example-bad
<input required="required" />
```

## 大小寫

請用小寫來表示所有元素名稱及屬性名稱/值，這可使標記更整潔，並提高撰寫速度。例如：

```html example-good
<p class="nice">這樣看起來整齊又清楚</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">為什麼我的標記在「大喊」？</P>
```

## class 與 id 名稱

請使用具語意性的 `class`/`id` 名稱，並使用 `-`（{{Glossary("kebab_case", "連字號命名法（kebab case）")}}）來分隔多個單字。別使用{{Glossary("camel_case", "駝峰命名法（camel case）")}}。例如：

```html example-good
<p class="editorial-summary">這裡是摘要內容</p>
```

```html example-bad
<p class="bigRedBox">這裡是錯誤範例</p>
```

## 字元參考

盡量別使用{{glossary("character reference", "字元參考")}}，而應盡量使用原始字元（但仍須轉義如角括號與引號等特殊字元）。

例如，你可以直接這樣寫：

```html example-good
<p>© 2018 Me</p>
```

而不是：

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML 元素

在 MDN Web 文件撰寫 HTML 元素時，有些規則需要遵循。遵守這些規則可確保元素及其元件的描述一致，並確保正確連結到詳細文件。

- **元素名稱**：請使用 [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) 巨集，該巨集會自動產生連結至 MDN Web 文件的對應頁面。例如，撰寫 `\{{HTMLElement("title")}}` 會產生 {{HTMLElement("title")}}。若想建立連結，則請**使用角括號**包覆元素名稱，並使用「行內程式碼」樣式（例如 `<title>`）。
- **屬性名稱**：請使用「行內程式碼」樣式來標示屬性名稱，使其顯示為 `程式碼字體`。此外，當屬性名稱首次出現在頁面中，或與其功能說明相關時，請用**粗體**標示。
- **屬性值**：請使用「行內程式碼」樣式（`<code>`）來標示屬性值，並且不要為字串型屬性值加上引號，除非程式碼範例的語法要求使用。例如：「當 `<input>` 元素的 `type` 屬性設定為 `email` 或 `tel` 時……」。
