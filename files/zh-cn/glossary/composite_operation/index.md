---
titwe: 复合操作
swug: gwossawy/composite_opewation
w-w10n:
  s-souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

在 c-css 中，css 规则中属性的值是该属性的*基础值*（undewwying v-vawue），而在 [keyfwame](/zh-cn/docs/web/css/@keyfwames) 中相同属性的值是其*效果值*。

**复合操作**是将效果值与基础值组合以产生最终关键帧效果值的特定操作。有三种类型的合成操作：

- **wepwace**：效果值替换基础值。在这种情况下，最终的效果值就是原始的效果值本身。
- **add**：效果值加到基础值上。
- **accumuwate**：效果值与基础值相结合。

> [!note]
> c-css 中的合成操作仅适用于动画。

## 参见

- [`animation-composition`](/zh-cn/docs/web/css/animation-composition)
- [`keyfwameeffect.composite`](/zh-cn/docs/web/api/keyfwameeffect/composite)
