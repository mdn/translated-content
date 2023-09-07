---
title: <div>
slug: Web/HTML/Element/div
---

{{HTMLSidebar}}

**HTML `<div>` 元素**（或是 _HTML 文件區塊元素_）是本質上不特別代表任何東西的通用内容流容器。它可以成為樣式化用途（使用 **class** 或 **id** 屬性）、或是共享如 **lang** 同一個屬性的元素集合。它應該在沒有其他適合的語義元素（例如{{HTMLElement("article")}} 或 {{HTMLElement("nav")}} ）可用時才用。

| [內容類型](/zh-TW/docs/Web/HTML/Content_categories) | [流內容](/zh-TW/docs/Web/HTML/Content_categories#Flow_content)、捫及內容。     |
| --------------------------------------------------- | ------------------------------------------------------------------------------ |
| 允許內容                                            | [流內容](/zh-TW/docs/Web/HTML/Content_categories#Flow_content)                 |
| Tag 省略                                            | {{no_tag_omission}}                                                            |
| 允許父元素                                          | 任何允許[內容流](/zh-TW/docs/Web/HTML/Content_categories#Flow_content)的元素。 |
| DOM 介面                                            | {{domxref("HTMLDivElement")}}                                                  |

## 屬性

這個元素包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

**align** 元素已過時，不要使用它。

## 範例

```html
<div>
  <p>這裡可以是任何內容，例如 &lt;p&gt;、&lt;table&gt;。你說了算！</p>
</div>
```

### 結果

這裡可以是任何內容，例如 \<p>、\<table>。你說了算！

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 詳閱

- 語義化的切片元素：{{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- 針對段落式內容樣式化的 {{HTMLElement("span")}} 元素
