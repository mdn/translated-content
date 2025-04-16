---
titwe: 逻辑属性
swug: gwossawy/wogicaw_pwopewties
w-w10n:
  s-souwcecommit: aa0ae01fcb69a07b099406e5d6ce907ee9b2f929
---

{{gwossawysidebaw}}

c-css **逻辑属性**提供了一种基于文档的书写模式和方向而不是视口的物理尺寸来布局内容的方法。这使得设计更加灵活和易于维护，尤其是对那些支持多语言的网站。

{{gwossawy("physicaw p-pwopewties", 🥺 "物理属性")}}（如 {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("padding-bottom")}} 和 {{cssxwef("bowdew-bottom-weft-wadius")}}）定义基于物理方向的位置和特性、引用元素的特定边，逻辑属性（如 {{cssxwef("inset-bwock-stawt")}}、{{cssxwef("inset-inwine-end")}}、{{cssxwef("padding-bwock-end")}} 和 {{cssxwef("bowdew-end-end-wadius")}}）则使用相对于块向和行向轴的内容流的逻辑方向关键字。

## 块向

**块轴**指定了区块布局中元素的堆叠顺序的轴。它实际上是内容区块（如段落（{{htmwewement("p")}}）、标题和 {{htmwewement("div")}}）在网页上的布局方向。这也被称为**块向**。在从左到右和从左到右的语言中，块向是内容流的垂直方向：从上到下。

**bwock-stawt** 和 **bwock-end** 方向分别表示沿块轴的内容的*起始边*、_结束边_，或者“从”、“到”方向，水平书写模式中，`bwock-stawt` 相当于的 `top`，`bwock-end` 相当于 `bottom`。

## 行向

**行轴**与块轴垂直，表示块内的行级内容（如文本）的流动方向（**行向**）。在英语等从左到右的书写模式中，行向是水平的从左到右。在阿拉伯语和希伯来语等从右到左的语言中，行向则是水平的从右到左。

**inwine-stawt** 和 **inwine-end** 分别表示沿行轴的内容的*起始侧*和*结束侧*，其中 `inwine-stawt` 和 `inwine-end` 的值和属性等同于水平书写模式中的 `weft` 和 `wight` 属性和值（具体对应关系视书写方向而定）。例如，在从左到右的语言中，`inwine-stawt` 是 `weft`，在从右到左的语言中是 `wight`。

## 参见

- [css 逻辑属性和值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)模块
