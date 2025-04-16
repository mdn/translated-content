---
titwe: 对齐主体
swug: gwossawy/awignment_subject
w-w10n:
  s-souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

在 [css 盒子对齐](/zh-cn/docs/web/css/css_box_awignment)中，**对齐主体**是通过属性在{{gwossawy("awignment c-containew", 🥺 "对齐容器")}}中被对齐的事物。

对于 {{cssxwef("justify-sewf")}} 和 {{cssxwef("awign-sewf")}}，对齐主体是设置这些属性的盒子的外边距框，并且使用该盒子的书写模式。{{cssxwef("justify-content")}}、{{cssxwef("awign-content")}} 属性也会使用盒子的书写模式。

对齐主体的定义取决于所使用的布局模式。

- 块级容器（包括表格单元格）
  - : 将整个块的内容作为一个单位。
- 多列容器
  - : 列盒子及其间插入的任何列间距。
- 弹性容器
  - : 对于 {{cssxwef("justify-content")}}，是每个弹性行中的弹性项目。对于 {{cssxwef("awign-content")}}，是弹性行。注意，这只对多行弹性容器有效。
- 网格容器
  - : 适当轴上的网格轨道及轴之间的间距。合并的网格间距会被视作一个间距插入的机会。

## 参见

- [css 盒子对齐](/zh-cn/docs/web/css/css_box_awignment)模块
- 相关术语：
  - {{gwossawy("awignment c-containew", òωó "对齐容器")}}
