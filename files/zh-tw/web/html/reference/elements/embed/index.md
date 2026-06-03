---
title: <embed>：嵌入外部內容元素
slug: Web/HTML/Reference/Elements/embed
---

**`<embed>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於在文件中指定的位置嵌入外部內容。這個內容是由外部應用程序或其他互動內容來源（如瀏覽器插件）提供的。

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="video/mp4"
  src="/shared-assets/videos/flower.mp4"
  width="250"
  height="200" />
```

> [!NOTE]
> 本主題僅記錄了作為 [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) 一部分所定義的元素。它不涉及元素的早期、非標準化實現。

請注意，大多數現代瀏覽器已經停用並移除了對瀏覽器插件的支援，因此如果你希望你的網站在普通用戶的瀏覽器上能夠正常運作，依賴 `<embed>` 是不明智的。

## 屬性

該元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `height`
  - : 資源的顯示高度，單位為 [CSS 像素](https://drafts.csswg.org/css-values/#px)。這必須是一個絕對值；不允許百分比。
- `src`
  - : 被嵌入資源的 URL。
- `type`
  - : 用於選擇要實例化的插件的 {{glossary("MIME type", "MIME 類型")}}。
- `width`
  - : 資源的顯示寬度，單位為 [CSS 像素](https://drafts.csswg.org/css-values/#px)。這必須是一個絕對值；不允許百分比。

## 使用注意事項

你可以使用 {{cssxref("object-position")}} 屬性來調整嵌入對象在元素框中的位置，並使用 {{cssxref("object-fit")}} 屬性來控制對象大小如何調整以適應元素框。

## 範例

```html
<embed
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Title of my video" />
```

## 無障礙議題

在 `embed` 元素上使用 [`title` 屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes/title) 來標記其內容，以便使用輔助技術（如螢幕閱讀器）導航的人能夠理解其內容。標題的值應該簡要描述嵌入內容。如果沒有標題，他們可能無法確定其嵌入內容是什麼。這種上下文轉換可能令人困惑且耗時，特別是如果 `embed` 元素包含像視頻或音頻這樣的互動內容。

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
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#嵌入型內容"
          >嵌入型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#互動型內容"
          >互動型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>無，它是一個{{Glossary("void element", "置空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>必須有開始標籤，不能有結束標籤。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>任何接受嵌入內容的元素。</td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLEmbedElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 用於嵌入各種類型內容的其他元素包括 {{HTMLElement("audio")}}、{{HTMLElement("canvas")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}}、{{MathMLElement("math")}}、{{HTMLElement("object")}}、{{SVGElement("svg")}} 和 {{HTMLElement("video")}}。
- 在其框架內定位和調整嵌入內容的大小：{{cssxref("object-position")}} 和 {{cssxref("object-fit")}}
