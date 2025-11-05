---
title: :-moz-locale-dir(ltr)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_ltr
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:-moz-locale-dir(ltr)`** 是一个用于在用户界面为从左到右显示时，匹配元素的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)。其判断依据是首选项 `intl.uidirection.locale`（其中 `locale` 表示当前区域设置）被设置为“ltr”。

> [!NOTE]
> 这个选择器主要由扩展和主题使用，用于根据用户的语言环境来适配用户界面。（这种情况可能会因窗口不同，甚至因标签页不同而变化。）它还允许扩展在不支持用户默认语言环境的情况下正常工作，因为扩展可以同时支持从左到右和从右到左的布局，而不依赖具体的语言环境。

> [!WARNING]
> 这个选择器在 HTML 中不能正常工作；无论用户界面语言环境是从左到右还是从右到左，它都会始终匹配。

## 语法

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## 示例

这个示例如果不是在 Firefox 中使用将无法运行，即便在 Firefox 中也可能无法正常工作，因为选择器在处理 HTML 内容时存在问题。它的设计初衷是用于 `XUL`。

### HTML

```html
<p>如果你正在使用从左到右的界面，这段文字应该显示为红色。</p>
```

### CSS

```css
p:-moz-locale-dir(ltr) {
  color: red;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何标准。

## 参见

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
