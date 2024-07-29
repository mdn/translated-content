---
title: <big>：更大文字元素
slug: Web/HTML/Element/big
---

{{HTMLSidebar}}{{deprecated_header}}

**`<big>`** [HTML](/zh-TW/docs/Web/HTML) 廢棄的元素會將所包含的文字呈現為比周圍文字大一個級別的字體大小（例如 `medium` 變為 `large`）。該大小限制在瀏覽器允許的最大字體大小之內。

> [!WARNING]
> 這個元素已從規範中刪除，不應再使用。請使用 CSS {{cssxref("font-size")}} 屬性來調整字體大小。

## 屬性

這個元素除了[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)之外，沒有其他屬性，這些屬性對所有元素都通用。

## 範例

這裡展示了使用 `<big>` 的範例，後面的範例展示了如何使用現代 CSS 語法達到相同的效果。

### 使用 big

這個範例使用過時的 `<big>` 元素來增大一些文字的尺寸。

#### HTML

```html
<p>
  This is the first sentence.
  <big>This whole sentence is in bigger letters.</big>
</p>
```

#### 結果

{{EmbedLiveSample("使用 big", 640, 60)}}

### 使用 CSS `font-size`

這個範例使用 CSS {{cssxref("font-size")}} 屬性將字體大小增加一個級別。

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  This is the first sentence.
  <span class="bigger">This whole sentence is in bigger letters.</span>
</p>
```

#### 結果

{{EmbedLiveSample("使用 CSS `font-size`", 640, 60)}}

## DOM 介面

這個元素實現了 {{domxref('HTMLElement')}} 介面。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- CSS：{{cssxref("font-size")}}、{{cssxref("font")}}
- HTML：{{htmlelement("small")}}、{{htmlelement("font")}}、{{htmlelement("style")}}
- HTML 4.01 規範：[字體樣式](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
