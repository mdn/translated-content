---
title: text-decoration
slug: Web/CSS/text-decoration
l10n:
  sourceCommit: b782b7d57e7040d5d9644a19017f4683044b5c90
---

{{CSSRef}}

**`text-decoration`** [CSS](/zh-CN/docs/Web/CSS) [简写](/zh-CN/docs/Web/CSS/Shorthand_properties)属性设置文本上的装饰性线条的外观。它是 {{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-style")}} 和较新的 {{cssxref("text-decoration-thickness")}} 属性的缩写。

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

文本装饰会覆盖子文本元素。这意味着如果一个元素指定了文本装饰，那么子元素无法去除这个装饰。例如，在标记 `<p>这段文字中有<em>一些强调词</em>。</p>` 中，样式规则 `p { text-decoration: underline; }` 会导致整个段落包含下划线。样式规则 `em { text-decoration: none; }` 不会有任何变化；整个段落仍然会包含下划线。但是，规则 `em { text-decoration: overline; }` 会导致“一些强调词”上出现上划线。

## 属性构成

该属性是以下 CSS 属性的简写：

- [`text-decoration-color`](/zh-CN/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/zh-CN/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/zh-CN/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/zh-CN/docs/Web/CSS/text-decoration-thickness)

## 语法

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* 全局值 */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;
```

`text-decoration` 属性由一个或多个用空格分隔的值组成，表示各种普通文本装饰属性。

### 值

- {{cssxref("text-decoration-line")}}
  - : 设置使用的装饰类型，例如 `underline` 或 `line-through`。
- {{cssxref("text-decoration-color")}}
  - : 设置装饰的颜色。
- {{cssxref("text-decoration-style")}}
  - : 设置装饰的线条的样式，例如 `solid`、`wavy` 或 `dashed`。
- {{cssxref("text-decoration-thickness")}}
  - : 设置装饰的线条粗细。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### text-decoration 值的演示

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">此文本下方有一行线。</p>
<p class="over">此文本上面有一行线。</p>
<p class="line">此文本有一条线穿过它。</p>
<p>
  此<a class="plain" href="#">链接不会具有下划线</a
  >，因为链接默认加下划线。移除锚点上的文本装饰时要小心，因为用户通常依赖下划线来表示超链接
</p>
<p class="underover">此文本在其上方<em>和</em>下方都有线条。</p>
<p class="thick">在浏览器支持的情况下，此文本具有非常粗的紫色下划线。</p>
<p class="blink">此文本可能会为你闪烁，具体取决于你使用的浏览器。</p>
```

{{EmbedLiveSample('text-decoration 值的演示','auto','320')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 包括的文本装饰属性分别是 {{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-style")}} 和 {{cssxref("text-decoration-thickness")}}。
- {{cssxref("text-decoration-skip-ink")}}、{{cssxref("text-underline-offset")}} 和 {{cssxref("text-underline-position")}} 属性也会影响文本装饰，但不包括在该简写属性中。
- {{cssxref("list-style")}} 属性控制 {{HTMLElement("ol")}} 和 {{HTMLElement("ul")}} 列表的每一项的外观。
