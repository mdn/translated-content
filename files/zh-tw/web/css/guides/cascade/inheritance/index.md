---
title: 繼承
slug: Web/CSS/Guides/Cascade/Inheritance
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

在 CSS 中，**繼承**控制了當元素上的屬性未指定值時會發生什麼事。

CSS 屬性可以分為兩種類型：

- **繼承屬性**，預設會設定為其父元素的[計算值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算值)。
- **非繼承屬性**，預設會設定為該屬性的[初始值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)。

請參閱[任何 CSS 屬性](/zh-TW/docs/Web/CSS/Reference#索引)的定義，以查看特定屬性預設是否繼承（「Inherited: yes」）或不繼承（「Inherited: no」）。

## 繼承屬性

當元素上未指定**繼承屬性**的值時，該元素會取得其父元素上該屬性的[計算值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算值)。只有文件的根元素會取得屬性摘要中給定的[初始值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)。

繼承屬性的一個典型範例是 [`color`](/zh-TW/docs/Web/CSS/Reference/Properties/color) 屬性。請看以下樣式規則和標記：

```css
p {
  color: green;
}
```

```html
<p>這個段落裡有<em>強調文字</em>。</p>
```

{{EmbedLiveSample("繼承屬性","",40)}}

「強調文字」這幾個字會顯示為綠色，因為 `em` 元素從 `p` 元素繼承了 [`color`](/zh-TW/docs/Web/CSS/Reference/Properties/color) 屬性的值。它*不會*取得該屬性的初始值（也就是當頁面未指定顏色時，根元素所使用的顏色）。

## 非繼承屬性

當元素上未指定**非繼承屬性**的值時，該元素會取得該屬性的[初始值](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)（如屬性摘要中所指定）。

非繼承屬性的一個典型範例是 {{ Cssxref("border") }} 屬性。請看以下樣式規則和標記：

```css
p {
  border: medium solid;
}
```

```html
<p>這個段落裡有<em>強調文字</em>。</p>
```

{{EmbedLiveSample("非繼承屬性","",40)}}

「強調文字」這幾個字不會有另一個邊框（因為 [`border-style`](/zh-TW/docs/Web/CSS/Reference/Properties/border-style) 的初始值是 `none`）。

## 備註

[`inherit`](/zh-TW/docs/Web/CSS/Reference/Values/inherit) 關鍵字允許作者明確指定繼承。它對繼承和非繼承屬性都有效。

你可以使用 [`all`](/zh-TW/docs/Web/CSS/Reference/Properties/all) 簡寫屬性一次控制所有屬性的繼承，它會將其值應用於所有屬性。例如：

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

這會將段落的 [`font`](/zh-TW/docs/Web/CSS/Reference/Properties/font) 屬性樣式還原為使用者代理程式的預設值，除非存在使用者樣式表，在這種情況下會改用使用者樣式表。然後它會將字體大小加倍，並應用 `"bold"` 的 [`font-weight`](/zh-TW/docs/Web/CSS/Reference/Properties/font-weight)。

### 覆寫繼承範例

使用我們先前關於 [`border`](/zh-TW/docs/Web/CSS/Reference/Properties/border) 的範例，如果我們用 `inherit` 明確設定繼承，我們會得到以下結果：

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>這個段落裡有<em>強調文字</em>。</p>
```

{{EmbedLiveSample("覆寫繼承範例","",40)}}

我們可以在這裡看到「強調文字」這個詞周圍有另一個邊框。

## 規範

{{Specifications}}

## 參見

- 用於控制繼承的 CSS 值：[`inherit`](/zh-TW/docs/Web/CSS/Reference/Values/inherit)、[`initial`](/zh-TW/docs/Web/CSS/Reference/Values/initial)、[`revert`](/zh-TW/docs/Web/CSS/Reference/Values/revert)、[`revert-layer`](/zh-TW/docs/Web/CSS/Reference/Values/revert-layer) 和 [`unset`](/zh-TW/docs/Web/CSS/Reference/Values/unset)
- [CSS 錯誤處理](/zh-TW/docs/Web/CSS/Guides/Syntax/Error_handling)
- [CSS 層疊介紹](/zh-TW/docs/Web/CSS/Guides/Cascade/Introduction)
- [學習：處理衝突](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [學習：層疊層](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS 層疊與繼承](/zh-TW/docs/Web/CSS/Guides/Cascade)模組
- [CSS 語法](/zh-TW/docs/Web/CSS/Guides/Syntax/Introduction)指南
- [CSS 語法](/zh-TW/docs/Web/CSS/Guides/Syntax)模組
- [At 規則](/zh-TW/docs/Web/CSS/Guides/Syntax/At-rules)
- [初始](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)、[計算](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算值)、[應用](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#應用值)和[實際](/zh-TW/docs/Web/CSS/Guides/Cascade/Property_value_processing#實際值)值
- [值定義語法](/zh-TW/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [CSS 巢狀模組](/zh-TW/docs/Web/CSS/Guides/Nesting)
