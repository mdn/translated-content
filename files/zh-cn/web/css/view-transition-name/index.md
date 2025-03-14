---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{CSSRef}}{{SeeCompatTable}}

**`view-transition-name`** [CSS](/zh-CN/docs/Web/CSS) 属性为选中的元素提供了一个独特的标识名称（一个 {{cssxref("custom-ident")}}），并使其参与与根视图过渡分开的[视图过渡](/zh-CN/docs/Web/API/View_Transitions_API)——或者如果指定了 `none` 值，则不参与任何视图过渡。

## 语法

```css
/* <custom-ident> 值示例 */
view-transition-name: header;
view-transition-name: figure-caption;

/* 关键字值 */
view-transition-name: none;
```

### 值

- {{cssxref("custom-ident")}}
  - : 一个独特的标识名称，使选中的元素参与与根视图过渡不同的[视图过渡](/zh-CN/docs/Web/API/View_Transitions_API)。标识符必须是唯一的。如果两个渲染元素在同一时间具有相同的 `view-transition-name`，{{domxref("ViewTransition.ready")}} 将被拒绝，过渡将被跳过。
- `none`
  - : 所选元素将不参与视图过渡。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

```css
figcaption {
  view-transition-name: figure-caption;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [视图过渡 API](/zh-CN/docs/Web/API/View_Transitions_API)
- [使用视图过渡 API 实现简单的平滑过渡效果](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
