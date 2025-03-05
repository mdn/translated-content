---
title: <title>
slug: Web/HTML/Element/title
---

{{HTMLSidebar}}

[HTML](/zh-TW/docs/Web/HTML) **`<title>`** 元素定義了顯示在{{glossary("Browser", "瀏覽器")}}標題欄或頁面標籤上的文件標題。它僅包含文本，元素內的標籤會被忽略。

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#metadata_content"
          >後設資料內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        不包含元素間{{glossary("whitespace")}}的文字。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        開起標籤和關閉標籤都是必需的。請注意，如果省略 <code>&#x3C;/title></code> 標籤，瀏覽器將忽略頁面的其餘內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        不包含其他 {{ HTMLElement("title") }} 元素的 {{ HTMLElement("head") }} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## 屬性

這個元件屬性含有[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用筆記

`<title>` 元素始終用於網頁的 {{HTMLElement("head")}} 區塊中。

### 網頁標題與 SEO

網頁標題的內容對搜索引擎優化（{{glossary("SEO")}}）可能會有重要的影響。一般來說，長而具描述性的標題比簡短或通用的標題效果更好。標題的內容是搜索引擎算法用來決定在搜索結果中列出網頁的順序的元素之一。此外，標題是吸引讀者注意力的第一個「鉤子」，用來吸引他們瀏覽搜索結果頁面。

以下是一些撰寫好的標題的指南和建議：

- 避免使用單個詞或兩個詞的標題。使用一個具有描述性的短語，或者在詞彙表或參考頁面中使用詞語和定義的配對。
- 搜索引擎通常會顯示頁面標題的前55-60個字符。超出這個範圍的文本可能會被截斷，因此盡量不要使用超過這個長度的標題。如果必須使用較長的標題，請確保重要的部分位於前面，並且不要讓關鍵內容出現在可能被截斷的部分。
- 不要使用「關鍵詞堆疊」。如果標題只是一個詞語列表，算法通常會導致網頁在搜索結果中的排名下降。
- 盡量確保標題在網站內是獨一無二的。重複或幾乎重複的標題可能導致不準確的搜索結果。

## 範例

```html
<title>Awesome interesting stuff</title>
```

這個範例建立了一個網頁，其標題（顯示在視窗頂部或視窗標籤中）為「Awesome interesting stuff」。

## 無障礙議題

提供準確且簡潔的標題來描述網頁的用途非常重要。

對於輔助技術使用者來說，一種常見的導航技巧是閱讀網頁標題，然後推測網頁包含的內容。這是因為進入網頁以確定其內容可能是一個耗時且可能令人困惑的過程。網站的每個頁面標題都應該是獨一無二的，最好首先顯示頁面的主要目的，然後是網站的名稱。遵循這種模式將有助於確保螢幕閱讀器首先宣佈網頁的主要目的。這比讓使用者在訪問同一個網站的每個頁面時先聽到網站名稱然後才是獨特的頁面標題，提供了更好的使用體驗。

### 範例

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

如果表單提交包含錯誤並且提交導致當前頁面重新呈現，則可以使用標題來幫助用戶了解其提交中的任何錯誤。例如，更新頁面`title`的值以反映重要的頁面狀態變化（像是表單驗證問題）。

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> 目前，動態更新頁面標題不會被螢幕閱讀器自動宣佈。如果要更新頁面標題以反映頁面狀態的重大變化，則可能需要使用 [ARIA Live Region](/zh-TW/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)。

- [MDN Understanding WCAG, Guideline 2.4 explanations](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- SVG [`<title>`](/zh-TW/docs/Web/SVG/Element/title) 元素
