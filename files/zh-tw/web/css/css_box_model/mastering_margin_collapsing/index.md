---
title: 精通外距摺疊
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

區塊的[上](/zh-TW/docs/Web/CSS/margin-top)外距和[下](/zh-TW/docs/Web/CSS/margin-bottom)外距有時會合併（摺疊）成一個單一外距，其大小為個別外距中最大的那個（如果相等，則為其中一個的大小），這種行為稱為**外距摺疊**。請注意，[浮動](/zh-TW/docs/Web/CSS/float)和[絕對定位](/zh-TW/docs/Web/CSS/position#絕對定位)元素的外距永不摺疊。

外距摺疊發生在三種基本情況下：

- 相鄰的同層級元素
  - : 相鄰同層級元素的外距會摺疊（除非後面的同層級元素需要[清除](/zh-TW/docs/Web/CSS/clear)浮動）。
- 沒有內容分隔父元素和後代元素
  - : 如果沒有邊框、內距、行內部分、建立的[區塊格式化上下文](/zh-TW/docs/Web/CSS/CSS_display/Block_formatting_context)或[_清除_](/zh-TW/docs/Web/CSS/clear)來分隔區塊的 {{cssxref("margin-top")}} 與其一個或多個後代區塊的 {{cssxref("margin-top")}}；或者沒有邊框、內距、行內內容、{{cssxref("height")}} 或 {{cssxref("min-height")}} 來分隔區塊的 {{cssxref("margin-bottom")}} 與其一個或多個後代區塊的 {{cssxref("margin-bottom")}}，那麼這些外距就會摺疊。摺疊後的外距最終會跑到父元素外面。
- 空區塊
  - : 如果沒有邊框、內距、行內內容、{{cssxref("height")}} 或 {{cssxref("min-height")}} 來分隔一個區塊的 {{cssxref("margin-top")}} 和其 {{cssxref("margin-bottom")}}，那麼它的上外距和下外距就會摺疊。

一些注意事項：

- 當上述情況結合時，會發生更複雜的外距摺疊（超過兩個外距）。
- 這些規則也適用於零外距，所以無論父元素的外距是否為零，後代元素的外距最終都會根據上述規則跑到父元素外面。
- 當涉及負外距時，摺疊後的外距大小是最大的正外距和最小的（最負的）負外距的總和。
- 當所有外距都是負值時，摺疊後的外距大小是最小的（最負的）那個外距。這適用於相鄰元素和巢狀元素。
- 外距摺疊只與垂直方向有關。
- 在 `display` 設定為 `flex` 或 `grid` 的容器中，外距不會摺疊。

## 範例

### HTML

```html
<p>此段落的下外距被摺疊…</p>
<p>…與此段落的上外距一起，產生了 <code>1.2rem</code> 的間距。</p>

<div>
  這個父元素包含兩個段落！
  <p>此段落與上方文字之間有 <code>.4rem</code> 的外距。</p>
  <p>我的下外距與父元素摺疊，產生了 <code>2rem</code> 的下外距。</p>
</div>

<p>我在上方元素的下方 <code>2rem</code> 處。</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### 結果

{{EmbedLiveSample('範例', 'auto', 350)}}

## 參見

- CSS 關鍵概念：
  - [CSS 語法](/zh-TW/docs/Web/CSS/CSS_syntax/Syntax)
  - [At 規則](/zh-TW/docs/Web/CSS/CSS_syntax/At-rule)
  - [註解](/zh-TW/docs/Web/CSS/CSS_syntax/Comments)
  - [權重](/zh-TW/docs/Web/CSS/CSS_cascade/Specificity)
  - [繼承](/zh-TW/docs/Web/CSS/CSS_cascade/Inheritance)
  - [盒模型](/zh-TW/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [排版模式](/zh-TW/docs/Glossary/Layout_mode)
  - [視覺化格式模型](/zh-TW/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - 值
    - [初始值](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#初始值)
    - [計算值](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#計算值)
    - [應用值](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#應用值)
    - [實際值](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#實際值)
  - [值定義語法](/zh-TW/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [簡寫屬性](/zh-TW/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{glossary("Replaced elements", "替換元素")}}
