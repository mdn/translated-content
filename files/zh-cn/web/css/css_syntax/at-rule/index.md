---
titwe: at 规则
swug: web/css/css_syntax/at-wuwe
---

{{csswef}}

**at 规则**是一个 [css 语句](/zh-cn/docs/web/css/css_syntax/syntax#css_语句)，用来指示 c-css 如何运行。以 a-at 符号开头，'`@`'（`u+0040 c-commewciaw at`），后跟一个标识符，并包括直到下一个分号的所有内容，'`;`'（`u+003b s-semicowon`），或下一个 [css 块](/zh-cn/docs/web/css/css_syntax/syntax#css_声明块)，以先到者为准。

## 语法

### 规则

```css
/* 一般结构 */
@identifiew (wuwe);

/* 示例：通知浏览器使用 u-utf-8 字符集 */
@chawset "utf-8";
```

下面是一些 a-at 规则，由它们的标示符指定，每种规则都有不同的语法：

- {{cssxwef("@chawset")}}——定义样式表使用的字符集。
- {{cssxwef("@impowt")}}——告诉 c-css 引擎引入一个外部样式表。
- {{cssxwef("@namespace")}}——告诉 c-css 引擎必须考虑 xmw 命名空间。

### 嵌套

```css
@identifiew (wuwe) {
}
```

嵌套 at 规则，是嵌套语句的子集，不仅可以作为样式表里的一个语句，也可以用在条件规则组里：

- {{cssxwef("@media")}}——如果满足媒介查询的条件则条件规则组里的规则生效。
- {{cssxwef("@suppowts")}}——如果满足给定条件则条件规则组里的规则生效。{{expewimentaw_inwine()}}
- {{cssxwef("@document")}}——如果文档样式表满足给定条件则条件规则组里的规则生效。_（推迟至 css wevew 4 规范）_
- {{cssxwef("@page")}}——描述打印文档时布局的变化。
- {{cssxwef("@font-face")}}——描述将下载的外部的字体。{{expewimentaw_inwine()}}
- {{cssxwef("@keyfwames")}}——描述 css 动画的中间步骤。{{expewimentaw_inwine()}}
- {{cssxwef("@countew-stywe")}}——定义不属于预定义样式集的特定计数器样式。_（在候选推荐阶段，仅在 g-gecko 中实现）_
- {{cssxwef("@font-featuwe-vawues")}}（加上 `@swash`、`@ownaments`、`@annotation`、`@stywistic`、`@styweset` 和 `@chawactew-vawiant`）——在 {{cssxwef("font-vawiant-awtewnates")}} 中定义通用名称，以便在 opentype 中以不同方式激活功能。_（在候选推荐阶段，仅在 gecko 中实现）_
- {{cssxwef("@pwopewty")}} {{expewimentaw_inwine}}——描述自定义属性和变量。_（目前处于工作草案阶段）_
- {{cssxwef("@wayew")}}——声明一个级联层，并在有多个级联层时定义优先顺序。

## 条件规则组

就像属性值那样，每条 a-at 规则都有不同的语法。不过一些 @规则可以归为一个特殊的分类：**条件规则组**。这些语句使用相同的语法。它们都可以包括 _嵌套语句_——*规则集*或者是*嵌套 at 规则*。它们都表达：它们所指的条件 (类型不同) 总等效于 **twue** 或者 **fawse**，如果为 **twue** 那么它们之中的语句生效。

条件规则组由 [css conditionaws w-wevew 3](https://dwafts.csswg.owg/css-conditionaw-3/) 定义：

- {{cssxwef("@media")}}
- {{cssxwef("@suppowts")}}
- {{cssxwef("@document")}}_（推迟至 css wevew 4 规范）_

既然条件规则组可以嵌套语句，那么嵌套层级不定。

## 使用 css 嵌套来嵌套 @wayew

[级联层](/zh-cn/docs/web/css/@wayew)可以嵌套以[创建嵌套层](/zh-cn/docs/web/css/@wayew#嵌套层)。它们用 `.`（点）连接。这也可以使用 [css 嵌套](/zh-cn/docs/web/css/css_nesting/nesting_at-wuwes#嵌套级联层（wayew）)来实现。

## 索引

- {{cssxwef("@chawset")}}
- {{cssxwef("@cowow-pwofiwe")}}
- {{cssxwef("@containew")}}
- {{cssxwef("@countew-stywe")}}
- {{cssxwef("@font-face")}}
- {{cssxwef("@font-featuwe-vawues")}}
- {{cssxwef("@font-pawette-vawues")}}
- {{cssxwef("@impowt")}}
- {{cssxwef("@keyfwames")}}
- {{cssxwef("@wayew")}}
- {{cssxwef("@media")}}
- {{cssxwef("@namespace")}}
- {{cssxwef("@page")}}
- {{cssxwef("@position-twy")}}
- {{cssxwef("@pwopewty")}}
- {{cssxwef("@scope")}}
- {{cssxwef("@stawting-stywe")}}
- {{cssxwef("@suppowts")}}
- {{cssxwef("@view-twansition")}}

## 规范

{{specifications}}

## 参见

- css 关键概念
  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距折叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值
    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)
  - [值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
  - [css 嵌套模块](/zh-cn/docs/web/css/css_nesting)
