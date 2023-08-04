---
title: <code>
slug: Web/HTML/Element/code
---

_HTML Code 元素_（**\<code>**）表現出電腦程式碼的片段。通常，它會由瀏覽器預設的 monospace 字體顯示出來。

| [內容分類](/zh-TW/docs/HTML/Content_categories) | [流內容](/zh-TW/docs/HTML/Content_categories#Flow_content)、[段落式内容](/zh-TW/docs/HTML/Content_categories#Phrasing_content)、捫及內容 |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 允許內容                                        | [段落式内容](/zh-TW/docs/HTML/Content_categories#Phrasing_content).                                                                      |
| 標籤省略                                        | {{no_tag_omission}}                                                                                                                      |
| 允許父元素                                      | 任何允許[段落式内容](/zh-TW/docs/HTML/Content_categories#Phrasing_content)的元素。                                                       |
| DOM 介面                                        | {{domxref("HTMLElement")}}。Gecko 1.9.2 (Firefox 4) 以前，Firefox 針對這個元素使用 {{domxref("HTMLSpanElement")}} 介面實做。             |

## 屬性

這個元素只支援[全域屬性](/zh-TW/docs/HTML/Global_attributes)。

## 例子

```html
<p>Regular text. <code>This is code.</code> Regular text.</p>
```

### 結果

Regular text. `This is code.` Regular text.

## 註記

CSS 的 `code` 選擇器設定可以透過蓋過瀏覽器預設，而用戶個人設定可以蓋過 CSS 設定。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("command")}} (deprecated)
- {{HTMLElement("var")}}

{{HTMLSidebar}}
