---
title: <acronym>
slug: Web/HTML/Element/acronym
---

{{HTMLSidebar}}{{deprecated_header}}

**`<acronym>`** [HTML](/zh-TW/docs/Web/HTML) 元素允許作者清楚地指示一系列字元，這些字元構成一個詞的縮寫或簡稱。

> [!WARNING]
> 請勿使用此元素。請改用 {{HTMLElement("abbr")}} 元素。

## 屬性

此元素僅具有[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)，這些屬性對所有元素都是共通的。

## DOM 介面

此元素實現了 {{domxref('HTMLElement')}} 介面。

## 範例

```html
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only a component of the
  Internet.
</p>
```

### 結果

{{EmbedLiveSample('範例')}}

## 默認樣式

雖然此標籤的目的純粹是為了方便作者，但其默認樣式因瀏覽器而異：

- Opera、Firefox、Chrome 和一些其他瀏覽器會對元素的內容添加虛線下劃線。
- 一些瀏覽器不僅會添加虛線下劃線，還會將其設置為小型大寫字母；要避免此樣式，可以在 CSS 中添加類似 {{cssxref('font-variant')}}`: none` 的屬性。

因此建議 Web 作者要麼明確地為此元素添加樣式，要麼接受一些跨瀏覽器的變化。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("abbr")}} 元素
