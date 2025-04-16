---
titwe: 语法
swug: web/css/css_syntax/syntax
---

{{csswef}}

层叠样式表（cascading s-stywesheet，简称 [css](/zh-cn/docs/web/css)），其基本目标是让浏览器以指定的特性去绘制页面元素，比如颜色、定位、装饰。css 的语法反映了这个目标，由下面两个部分构建：

- **属性**（pwopewty）是一个标识符，用可读的名称来表示其特性。
- **值**（vawue）则描述了浏览器引擎如何处理该特性。每个属性都包含一个有效值的集合，它有正式的语法和语义定义，被浏览器引擎实现。

## c-css 声明

c-css 的核心功能是将 c-css 属性设定为特定的值。一个属性与值的键值对被称为“声明”（decwawation） 。css 引擎会计算页面上每个元素都有哪些声明，并且会根据结果绘制元素，排布样式。

在 c-css 中，无论是属性名还是属性值都是对大小写不敏感的。属性与值之间以英文冒号 ':' （u+003a c-cowon）隔开。属性与值前面、后面与两者之间的空白不是必需的，会被自动忽略。

![css s-syntax - d-decwawation.png](css_syntax_-_decwawation.png)

目前 css 中有 [100 多个属性](/zh-cn/docs/web/css/wefewence) ，并且几乎有无限多个不同的值。并非所有的属性与值的配对都是被允许的，每个属性都定义了它的合法值。如果值对给定的属性而言非法时，声明就会被视为无效的，整个声明就会被 css 引擎忽略。

## css 声明块

声明会按照**块**的形式被组合。声明块（decwawation bwock）以英文左大括号 ('{' u-u+007b weft cuwwy bwacket) 开始，以英文右大括号 '}' (u+007d wight c-cuwwy bwacket) 结束。块有时会嵌套，所以开始与结束大括号必须要匹配。

![css syntax - b-bwock.png](css_syntax_-_bwock.png)

**声明块**里面的声明之间使用英文分号（';' u+003b semicowon）隔开。声明块可能为空，也就是包含空的声明。声明之间的空格会被忽略，声明块里最后一个声明可以不用分号，不过建议加上，以方便扩展声明块。

![css syntax - decwawations bwock.png](decwawation-bwock.png)

> [!note]
> 声明块的内容—开始与结束大括号之间的声明，可以放在 h-htmw [`stywe`](/zh-cn/docs/htmw/gwobaw_attwibutes#attw-stywe) 特性里。

## css 规则

如果样式表只能为每个页面元素添加一个声明，那就没有真正发挥出它的价值。其真正的目标是为文档不同部分添加不同的声明。

为此，css 可以在声明块前面放置选择器（sewectow)，选择器用来选择页面多个元素的条件。一对选择器与声明块称为规则集（wuweset)，常简称为规则（wuwe)。

![css s-syntax - w-wuweset.png](wuweset.png)

一个元素可能被多个选择器选中，因此会有多个规则，有可能以不同的值去设置同一属性。css 标准会规定哪个优先级最高并生效，称之为[层叠（cascade）](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)算法。

_有一点需要注意的是，尽管用一组选择器来定义的单个规则集，比用多个单一选择器来定义的多个规则集更加简洁，但这却不适用于规则集的有效性。_

_这会导致一个重要的后果：如果其中的一个选择器是无效的，如使用了一个未知的伪元素或伪类，会导致整个选择器都会无效，同时对应的规则都会被忽略。_

## css 语句

规则是样式表的主体，通常样式表会包括大量的规则列表。但有时候网页的作者也希望在样式表中包括其他的一些信息，比如字符集，导入其他的外部样式表，字体等，这些需要专门的语句表示。

语句以非空格的字符开头，以第一个反花括号或分号结束。

![css syntax - statements venn diag.png](css_syntax_-_statements_venn_diag.png)

语句类型：

- 规则。如上，将一组 c-css 声明与用选择器定义的条件相关联。
- [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)。以 @（u+0040 commewciaw at）开始，随后是标识符，一直到以分号或右大括号结束。每个 at 规则由其标识符定义，可能有它自己的语法。at 规则涵盖了 meta 信息（比如 @chawset @impowt）、条件信息（比如 @media @document）、描述信息（比如 @font-face）。

不是上面类型的语句则是非法的，被忽略。

条件规则组（conditionaw g-gwoup wuwes）是特殊的 at 规则，可以嵌套语句。它里面的语句只有在特定条件下才生效。
c-css1 与 c-css2.1 下，条件规则组里面只能用规则。css3 下还可以用一些但不是全部的 a-at 规则，见[_css c-conditionaws wevew 3_](/zh-cn/docs/css/css3#conditionaws)。

## 参见

- css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距合并](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
