---
title: <q>
slug: Web/HTML/Reference/Elements/q
---

_HTML 引文元素_ (**\<q>**) 指示一段元素內的文字，屬於行內引文。這個元素適用於不須換行的短引文，針對長引文，請使用 {{HTMLElement("blockquote")}} 元素。

| [內容類別](/zh-TW/docs/Web/HTML/Guides/Content_categories) | [流內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#flow_content)、[段落式內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#phrasing_content)、捫及內容。 |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許內容                                                   | [段落式內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#phrasing_content)                                                                                    |
| 標籤省略                                                   | 不允許，開始和結束標籤都是必須的。                                                                                                                               |
| 允許父元素                                                 | 任何允許[段落式內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#phrasing_content)的元素                                                                      |
| DOM 介面                                                   | {{domxref("HTMLQuoteElement")}}                                                                                                                                  |

> [!NOTE]
> 多數現代標準瀏覽器，如 Mozilla Firefox, Opera, Safari 會在 `<q>` 元素周圍添加引號；但有些瀏覽器（如 Internet Explorer）可能不會針對引用添加任何樣式，不過這些都可以透過樣式規則套用。

## 屬性

這個元素包含 [全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `cite`
  - : 這個屬性值為可以指定引用文件、或信息來源的 URL。這個屬性預期導向信息說明的上下文、或是引文參照。

## 範例

### HTML 內容

```html
<p>
  每當阿尼掛掉的時候，屎蛋會說：
  <q
    cite="https://zh.wikipedia.org/zh-tw/%E8%82%AF%E5%B0%BC%C2%B7%E9%BA%A6%E5%85%8B%E5%BA%B7%E7%B1%B3%E5%85%8B">
    我的天啊！阿尼他被掛掉了！ </q
  >.
</p>
```

{{ EmbedLiveSample('範例') }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- 針對長引文的 {{HTMLElement("blockquote")}} 元素
- 針對引用來源的 {{HTMLElement("cite")}} 元素
