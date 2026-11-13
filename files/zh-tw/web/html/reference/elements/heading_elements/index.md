---
title: <h1>–<h6>：HTML 章節標題元素
slug: Web/HTML/Reference/Elements/Heading_Elements
---

**`<h1>`** 到 **`<h6>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表六個級別的章節標題。`<h1>` 是最高的章節級別，`<h6>` 是最低的。默認情況下，所有標題元素在佈局中創建一個[區塊級](/zh-TW/docs/Glossary/Block-level_content)區域，從新行開始並佔據其包含區塊中可用的全部寬度。

{{InteractiveExample("HTML Demo: &lt;h1-h6&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Beetles</h1>
<h2>External morphology</h2>
<h3>Head</h3>
<h4>Mouthparts</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
```

```css interactive-example
h1,
h2,
h3,
h4 {
  margin: 0.1rem 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  padding-left: 20px;
}

h3 {
  font-size: 1.2rem;
  padding-left: 40px;
}

h4 {
  font-size: 1rem;
  font-style: italic;
  padding-left: 60px;
}
```

## 屬性

這些元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

- 標題信息可供用戶代理自動構建文件的目錄。
- 不要使用標題元素調整文本大小。而應使用 {{glossary("CSS")}} 的 {{cssxref("font-size")}} 屬性。
- 不要跳過標題級別：始終從 `<h1>` 開始，然後是 `<h2>` 等等。

### 避免在一頁上使用多個 `<h1>` 元素

雖然 HTML 標準允許在一個頁面上使用多個 `<h1>` 元素（只要它們不是[嵌套](#嵌套)的），但這不被認為是最佳實踐。一個頁面通常應該只有一個 `<h1>` 元素，用於描述頁面的內容（類似於文件的 [`<title> 元素`](/zh-TW/docs/Web/HTML/Reference/Elements/title)）。

> [!NOTE]
> 在舊版 HTML 標準中允許將多個 `<h1>` 元素嵌套在嵌套的[章節元素](/zh-TW/docs/Web/HTML/Reference/Elements#content_sectioning)中。然而，這從未被視為最佳實踐，現在已不符合規範。詳情請參見 [There Is No Document Outline Algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html)。

請優先使用每頁僅有一個 `<h1>`，並且[嵌套標題](#嵌套)而不跳級。

## 範例

### 所有標題

以下代碼展示了所有標題級別的使用。

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

{{EmbedLiveSample('所有標題', '280', '300')}}

### 範例頁面

以下代碼展示了一些帶有內容的標題。

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here…</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here…</p>

<h3>Example 2</h3>
<p>Some text here…</p>

<h2>See also</h2>
<p>Some text here…</p>
```

{{EmbedLiveSample('範例頁面', '280', '480')}}

## 無障礙議題

### 導航

對於使用螢幕閱讀軟體的用戶來說，一種常見的導航技術是快速跳轉到各個標題以自動確定頁面的內容。因此，不要跳過一個或多個標題級別是很重要的。這樣做可能會造成混淆，因為以這種方式導航的人可能會想知道缺失的標題在哪裡。

**不要這樣做：**

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

**請這樣做：**

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### 嵌套

標題可以嵌套為子節以反映頁面內容的組織結構。大多數螢幕閱讀器也可以生成頁面上所有標題的有序列表，這可以幫助人們快速確定內容的層次結構：

1. `h1` 甲蟲
   1. `h2` 語源
   2. `h2` 分佈與多樣性
   3. `h2` 進化
      1. `h3` 晚古生代
      2. `h3` 侏羅紀
      3. `h3` 白堊紀
      4. `h3` 新生代

   4. `h2` 外部形態
      1. `h3` 頭部
         1. `h4` 口器

      2. `h3` 胸部
         1. `h4` 前胸
         2. `h4` 中胸

      3. `h3` 腿部
      4. `h3` 翅膀
      5. `h3` 腹部

當標題嵌套時，關閉子節時可能會「跳過」標題級別。

- [標題 • 頁面結構 • WAI Web 無障礙教學](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN 了解 WCAG，第 1.3 條解釋](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [理解成功標準 1.3.1 | W3C 了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN 了解 WCAG，第 2.4 條解釋](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [理解成功標準 2.4.1 | W3C 了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [理解成功標準 2.4.6 | W3C 了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [理解成功標準 2.4.10 | W3C 了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### 標記章節內容

另一種螢幕閱讀軟體用戶常見的導航技術是生成[章節內容](/zh-TW/docs/Web/HTML/Reference/Elements#content_sectioning)的列表並用它來確定頁面的佈局。

可以使用 `aria-labelledby` 和 `id` 屬性的組合為章節內容進行標記，標籤簡要描述章節內容的目的。此技術適用於同一頁面上有多個章節元素的情況。

#### 章節內容範例

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primary navigation</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- page content -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Footer navigation</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

{{EmbedLiveSample('章節內容範例')}}

在這個例子中，螢幕閱讀技術會宣佈有兩個 `nav` 章節，一個叫「主導航」，一個叫「頁腳導航」。如果沒有提供標籤，使用螢幕閱讀軟體的人可能需要調查每個 `nav` 元素的內容來確定它們的目的。

- [使用 aria-labelledby 屬性](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [標記區域 • 頁面結構 • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#標題型內容"
          >標題型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> 或
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
