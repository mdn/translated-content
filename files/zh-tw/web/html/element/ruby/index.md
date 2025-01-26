---
title: <ruby>
slug: Web/HTML/Element/ruby
---

{{HTMLSidebar}}

**HTML `<ruby>` 元素**的意思是旁註標記。旁註標記用於標示東亞文字的發音。

{{EmbedInteractiveExample("pages/tabbed/ruby.html", "tabbed-shorter")}}

| [內容類型](/zh-TW/docs/Web/HTML/Content_categories) | [流內容](/zh-TW/docs/Web/HTML/Content_categories#flow_content)、[段落型內容](/zh-TW/docs/Web/HTML/Content_categories#phrasing_content)、捫及內容 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 允許內容                                            | [段落型內容](/zh-TW/docs/Web/HTML/Content_categories#phrasing_content)                                                                           |
| 標籤省略                                            | 不允許，開始和結束標籤都是必須的。                                                                                                               |
| 允許父元素                                          | Any element that accepts [phrasing content](/zh-TW/docs/Web/HTML/Content_categories#phrasing_content)                                            |
| DOM 介面                                            | {{domxref("HTMLElement")}}                                                                                                                       |

## 屬性

這個元素只支援[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 範例

### 範例一：字

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

### 範例二：詞

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{HTMLElement("rbc")}}
- {{CSSxRef("text-transform")}}: full-size-kana
