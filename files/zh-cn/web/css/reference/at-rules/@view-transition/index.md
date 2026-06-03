---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

**`@view-transition`** [CSS](/zh-CN/docs/Web/CSS) [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)用于在跨文档导航的情况下选择当前文档和目标文档进行[视图过渡](/zh-CN/docs/Web/API/View_Transition_API)。

要使跨文档视图过渡正常工作，导航的当前文档和目标文档也需要同源。

## 语法

```css
@view-transition {
  navigation: auto;
}
```

### 描述符

- `navigation`
  - : 指定此规则对文档的视图过渡行为的影响。可能的值包括：
    - `auto`：如果导航是同源的，没有跨源重定向，并且其 {{domxref("NavigateEvent.navigationType", "navigationType")}} 为 `traverse`、`push` 或 `replace`，则文档在参与导航时将经历视图过渡。对于 `push` 或 `replace`，导航必须由用户与页面内容交互来发起，而不是由浏览器 UI 功能发起。

    - `none`：该文档将不会经历视图过渡。

## 形式语法

{{csssyntax}}

## 示例

### 页面视图过渡

以下代码片段展示了页面过渡演示中使用的关键概念。该演示使用跨文档视图过渡；在网站的两个页面之间导航时发生的半秒的过渡。有关完整演示，请参阅[视图过渡多页应用演示](https://mdn.github.io/dom-examples/view-transitions/mpa/)。

在 CSS 中为导航的当前文档和目标文档指定 `@view-transition` at 规则，以将它们都加入到视图过渡中：

```css
@view-transition {
  navigation: auto;
}
```

除了 `@view-transition` at 规则之外，我们还使用 {{cssxref("@keyframes")}} at 规则定义两个关键帧动画，并使用 {{cssxref("animation")}} 简写属性将这些关键帧动画应用于我们想要动画的离开（{{cssxref("::view-transition-old()")}}）和进入（{{cssxref("::view-transition-new()")}}）页面中的元素。

```css
/* 创建自定义动画 */
@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* 将自定义动画应用于新旧页面状态 */
::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

查看此[过渡多页应用](https://mdn.github.io/dom-examples/view-transitions/mpa/)实时演示。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
- [CSS at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS at 规则函数](/zh-CN/docs/Web/CSS/Reference/At-rules/At-rule_functions)
