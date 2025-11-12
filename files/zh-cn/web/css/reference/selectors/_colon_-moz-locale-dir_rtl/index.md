---
title: :-moz-locale-dir(rtl)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:-moz-locale-dir(rtl)`** 是一个用于在用户界面为从右到左显示时，匹配元素的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)。其判断依据是首选项 `intl.uidirection.locale`（其中 `locale` 表示当前语言环境）被设置为“rtl”。

> [!NOTE]
> 这个选择器主要由扩展和主题使用，用于根据用户的语言环境来适配用户界面。（这种情况可能会因窗口不同，甚至因标签页不同而变化。）它还允许扩展在不支持用户默认语言环境的情况下正常工作，因为扩展可以同时支持从左到右和从右到左的布局，而不依赖具体的语言环境。

> [!WARNING]
> 这个选择器在 HTML 中无法正常工作；无论用户界面语言环境是从左到右还是从右到左，它都不会匹配。

## 语法

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## 示例

如果你没有使用 Firefox，这个示例将无法运行；即使在 Firefox 中，也可能无法正常工作，因为在 HTML 中使用该选择器存在问题。

### HTML

```html
<p>如果你正在使用从右到左的界面，这段文字应该显示为红色。</p>
```

### CSS

```css
p:-moz-locale-dir(rtl) {
  color: red;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何标准。

## 参见

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
