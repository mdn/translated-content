---
title: 复合操作
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

在 CSS 中，CSS 规则中属性的值是该属性的*基础值*（underlying value），而在 [keyframe](/zh-CN/docs/Web/CSS/Reference/At-rules/@keyframes) 中相同属性的值是其*效果值*。

**复合操作**是将效果值与基础值组合以产生最终关键帧效果值的特定操作。有三种类型的合成操作：

- **replace**：效果值替换基础值。在这种情况下，最终的效果值就是原始的效果值本身。
- **add**：效果值加到基础值上。
- **accumulate**：效果值与基础值相结合。

> [!NOTE]
> CSS 中的合成操作仅适用于动画。

## 参见

- [`animation-composition`](/zh-CN/docs/Web/CSS/Reference/Properties/animation-composition)
- [`KeyframeEffect.composite`](/zh-CN/docs/Web/API/KeyframeEffect/composite)
