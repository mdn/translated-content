---
title: <nav>
slug: Web/HTML/Reference/Elements/nav
---

**HTML \<nav> 元素**代表一個網頁中提供導航欄連結的區域，不管是當前網頁或者其他網頁，還是這個連結最終抵達的只是當前網頁的某個區塊，或者會抵達其他網頁，常見的導航欄範例有菜單、內容的表單，以及頁面本身。

| [Content categories](/zh-TW/docs/Web/HTML/Guides/Content_categories) | [流內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#flow_content)、[sectioning content](/zh-TW/docs/Web/HTML/Guides/Content_categories#sectioning_content)、palpable content. |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許內容                                                             | [流內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#flow_content)。                                                                                                           |
| 標籤省略                                                             | 不允許，開始和結束標籤都是必須的。                                                                                                                                                |
| Permitted parents                                                    | Any element that accepts [flow content](/zh-TW/docs/Web/HTML/Guides/Content_categories#flow_content).                                                                             |
| Permitted ARIA roles                                                 | None                                                                                                                                                                              |
| DOM interface                                                        | {{domxref("HTMLElement")}}                                                                                                                                                        |

## 屬性

此元素只有[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用筆記

- 不是所有的文件連結都需要在 `<nav>` 元素裡面，它僅適用於主要的導航鏈接塊。一般來說 {{HTMLElement("footer")}} 元素常常有一個不需要在 {{HTMLElement("nav")}} 元素裡面的的鏈接列表。
- 文件可以有很多個 {{HTMLElement("nav")}} 元素。例如說，一個用做網站導覽、另一個用做頁內導覽。
- 面向身障用戶的螢幕閱讀器的用戶代理（User agent），可以決定要不要在初始渲染時省略這個元素的內容。

## 範例

在這個範例，`<nav>` 區塊用於包含連結的無序清單 ({{HTMLElement("ul")}})。透過合適的 CSS，它能夠顯示為 sidebar、導覽列、以及下拉式選單。

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/zh-TW/docs/Sections_and_Outlines_of_an_HTML5_document).
