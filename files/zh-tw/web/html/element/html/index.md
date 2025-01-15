---
title: <html>：HTML 文件/根元素
slug: Web/HTML/Element/html
---

{{HTMLSidebar}}

**`<html>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表 HTML 文件的根（頂層元素），因此它也被稱為*根元素*。所有其他元素都必須是這個元素的後代。

## 屬性

此元素包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `version` {{deprecated_inline}}
  - : 指定了管理當前文件的 HTML {{glossary("Doctype", "文件類型定義")}}的版本。這個屬性是不必要的，因為它與文件類型聲明中的版本訊息是多餘的。
- `xmlns`
  - : 指定了文件的 {{glossary("XML")}} {{glossary("Namespace", "命名空間")}}。預設值是 `"http://www.w3.org/1999/xhtml"`。在使用 XML {{glossary("parser", "解析器")}}解析的文件中是必需的，在 text/html 文件中是可選的。

## 範例

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```

## 無障礙議題

雖然 HTML 不要求作者指定 `<html>` 元素的開始和結束標籤，但作者這樣做是很重要的，因為這樣可以允許他們為網頁指定 [`lang`](/zh-TW/docs/Web/HTML/Global_attributes#lang)。在 `<html>` 元素上提供一個具有有效語言標籤的 `lang` 屬性，根據 {{RFC(5646, "語言識別標籤（或稱 BCP 47）")}}，將有助於螢幕閱讀技術確定正確的語言來宣佈。語言識別標籤應該描述頁面內容的大多數使用的語言。如果沒有，螢幕閱讀器通常會默認使用操作系統設置的語言，這可能導致發音錯誤。

在 `<html>` 元素上包含有效的 `lang` 声明也確保了頁面的 {{HTMLElement("head")}} 中包含的重要元數據，例如頁面的 {{HTMLElement("title")}}，也被正確宣告。

- [MDN理解 WCAG，指南3.1解釋](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [理解成功標準3.1.1 | W3C理解 WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        一個 {{HTMLElement("head")}} 元素，後跟一個 {{HTMLElement("body")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果 <code>&#x3C;html></code> 元素內部的第一個東西不是註釋，則開始標籤可以省略。<br>如果 <code>&#x3C;html></code> 元素後面不是立即跟著註釋，則結束標籤可以省略。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>無。這是文件的根元素。</td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/document_role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- MathML 的頂層元素：{{MathMLElement("math")}}
- SVG 的頂層元素：{{SVGElement("svg")}}
