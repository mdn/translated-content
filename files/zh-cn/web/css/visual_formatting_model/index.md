---
title: 视觉格式化模型
slug: Web/CSS/Visual_formatting_model
---

{{CSSRef}}

CSS 视觉格式化模型（*visual formatting model）*是用来处理和在视觉媒体上显示文档时使用的计算规则。该模型是 CSS 的基础概念之一。

视觉格式化模型会根据[CSS 盒子模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)将文档中的元素转换为一个个盒子，每个盒子的布局由以下因素决定：

- 盒子的尺寸：精确指定、由约束条件指定或没有指定
- 盒子的类型：行内盒子（inline）、行内级盒子（inline-level）、原子行内级盒子（atomic inline-level）、块盒子（block）
- [定位方案（positioning scheme）](/zh-CN/docs/CSS/Box_positioning_scheme)：普通流定位、浮动定位或绝对定位
- 文档树中的其他元素：即当前盒子的子元素或兄弟元素
- {{glossary("viewport", "视口")}}尺寸与位置
- 所包含的图片的尺寸
- 其他的某些外部因素

该模型会根据盒子的包含块（*containing block）的*边界来渲染盒子。通常，盒子会创建一个包含其后代元素的包含块，但是盒子并不由包含块所限制，当盒子的布局跑到包含块的外面时称为溢出（_overflow）_。

> **备注：** 译注：本文有很多相近的术语，阅读时需仔细，否则容易造成误解。为了方便读者，这里我将其整理一下。
>
> - **块**：block，一个抽象的概念，一个块在文档流上占据一个独立的区域，块与块之间在垂直方向上按照顺序依次堆叠。
> - **包含块**：containing block，包含其他盒子的块称为包含块。
> - **盒子**：box，一个抽象的概念，由 CSS 引擎根据文档中的内容所创建，主要用于文档元素的定位、布局和格式化等用途。盒子与元素并不是一一对应的，有时多个元素会合并生成一个盒子，有时一个元素会生成多个盒子（如匿名盒子）。
> - **块级元素**：block-level element，元素的 `display` 为 `block`、`list-item`、`table` 时，该元素将成为块级元素。元素是否是块级元素仅是元素本身的属性，并不直接用于格式化上下文的创建或布局。
> - **块级盒子**：block-level box，由块级元素生成。一个块级元素至少会生成一个块级盒子，但也有可能生成多个（例如列表项元素）。
> - **块盒子**：block box，如果一个块级盒子同时也是一个块容器盒子（见下），则称其为块盒子。除具名块盒子之外，还有一类块盒子是匿名的，称为匿名块盒子（Anonymous block box），匿名盒子无法被 CSS 选择符选中。
> - **块容器盒子**：block container box 或 block containing box，块容器盒子侧重于当前盒子作为“容器”的这一角色，它不参与当前块的布局和定位，它所描述的仅仅是当前盒子与其后代之间的关系。换句话说，块容器盒子主要用于确定其子元素的定位、布局等。
>
> 注意：盒子分为“块盒子”和“块级盒子”两种，但元素只有“块级元素”，而没有“块元素”。下面的“行内级元素”也是一样。
>
> - **行内级元素**：inline-level element，`display` 为 `inline`、`inline-block`、`inline-table` 的元素称为行内级元素。与块级元素一样，元素是否是行内级元素仅是元素本身的属性，并不直接用于格式化上下文的创建或布局。
> - **行内级盒子**：inline-level box，由行内级元素生成。行内级盒子包括行内盒子和原子行内级盒子两种，区别在于该盒子是否参与行内格式化上下文的创建。
> - **行内盒子**：inline box，参与行内格式化上下文创建的行内级盒子称为行内盒子。与块盒子类似，行内盒子也分为具名行内盒子和匿名行内盒子（anonymous inline box）两种。
> - **原子行内级盒子**：atomic inline-level box，不参与行内格式化上下文创建的行内级盒子。原子行内级盒子一开始叫做原子行内盒子（atomic inline box），后被修正。原子行内级盒子的内容不会拆分成多行显示。
>
> 另外，本文的英文原文仍未最后定稿，因此部分内容并不完整。待英文原文更新后应及时更新译文。

## 盒子的生成

盒子的生成是 CSS 视觉格式化模型的一部分，用于从文档元素生成盒子。盒子有不同的类型，不同类型的盒子的格式化方法也有所不同。盒子的类型取决于 CSS {{ cssxref("display") }} 属性。

### 块级元素与块盒子

当元素的 {{ cssxref("display") }} 为 `block`、`list-item` 或 `table` 时，该元素将成为块级元素。一个块级元素会被格式化成一个块（例如文章的一个段落），默认按照垂直方向依次排列。

每个块级盒子都会参与[块格式化上下文（block formatting context）](/zh-CN/docs/CSS/block_formatting_context)的创建，而每个块级元素都会至少生成一个块级盒子，即主块级盒子（_principal block-level_ *box）。有*一些元素，比如列表项会生成额外的盒子来放置项目符号，而那些会生成列表项的元素可能会生成更多的盒子。不过，多数元素只生成一个主块级盒子。

主块级盒子包含由后代元素生成的盒子以及内容，同时它也会参与[定位方案](/zh-CN/docs/CSS/Positioning_scheme)。

一个块级盒子可能也是一个块容器盒子。块容器盒子（*block container box）要么*只包含其他块级盒子，要么只包含行内盒子并同时创建一个行内[格式化上下文（inline formatting context）](/zh-CN/docs/CSS/Inline_formatting_context)。

能够注意到块级盒子与块容器盒子是不同的这一点很重要。前者描述了元素与其父元素和兄弟元素之间的行为，而后者描述了元素跟其后代之间的行为。有些块级盒子并不是块容器盒子，比如表格；而有些块容器盒子也不是块级盒子，比如非替换行内块和非替换表格单元格。

一个同时是块容器盒子的块级盒子称为块盒子（_block box）。_

#### 匿名块盒子

在某些情况下进行视觉格式化时，需要添加一些增补性的盒子，这些盒子不能用 CSS 选择符选中，因此称为匿名盒子（_anonymous boxes）_。

CSS 选择器不能作用于匿名盒子 (_anonymous boxes_)，所以它不能被样式表赋予样式。也就是说，此时所有可继承的 CSS 属性值都为 `inherit` ，而所有不可继承的 CSS 属性值都为 `initial`。

块包含盒子可能只包含行内级盒子，也可能只包含块级盒子，但通常的文档都会同时包含两者，在这种情况下，就会在相邻的行内级盒子外创建匿名块盒子。

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-flex.html", '100%', 720)}}

对这两个匿名盒子来说，程序员无法像 {{ HTMLElement("p") }} 元素那样控制它们的样式，因此它们会从 {{ HTMLElement("div") }} 那里继承那些可继承的属性，如 {{ cssxref("color") }}。其他不可继承的属性则会设置为 `initial`，比如，因为没有为它们指定 {{ cssxref("background-color") }}，因此其具有默认的透明背景，而 `<p>` 元素的盒子则能够用 CSS 指定背景颜色。类似地，两个匿名盒子的文本颜色总是一样的。

另一种会创建匿名块盒子的情况是一个行内盒子中包含一或多个块盒子。此时，包含块盒子的盒子会拆分为两个行内盒子，分别位于块盒子的前面和后面。块盒子前面的所有行内盒子会被一个匿名块盒子包裹，块盒子后面的行内盒子也是一样。因此，块盒子将成为这两个匿名块盒子的兄弟盒子。

如果有多个块盒子，而它们中间又没有行内元素，则会在这些盒子的前面和后面创建两个匿名块盒子。

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-block.html", '100%', 720)}}

### 行内级元素和行内盒子

如果一个元素的 {{ cssxref("display") }} 属性为 `inline`、`inline-block` 或 `inline-table`，则称该元素为行内级元素。显示时，它不会生成内容块，但是可以与其他行内级内容一起显示为多行。一个典型的例子是包含多种格式内容（如强调文本、图片等）的段落，就可以由行内级元素组成。

> **警告：** 该图使用了过时的术语，见下面的“注意”（译注：指图中的“Atomic inline boxes”）。除此之外该图还有一个错误，右边的黄色部分应该完全包含左侧的椭圆（类似于数学上的超集），因为标准所说的是“如果行内级元素生成的盒子参与行内格式化上下文的创建，则该盒子为一个行内级盒子”，见“CSS 2.2 标准的 9.2.2 节”。

行内级元素会生成行内级盒子，该盒子同时会参与行内格式化上下文（[inline formatting context](/zh-CN/docs/CSS/Inline_formatting_context)）的创建。行内盒子既是行内级盒子，也是一个其内容会参与创建其容器的行内格式化上下文的盒子，比如所有具有 `display:inline` 样式的非替换盒子。如果一个行内级盒子的内容不参与行内格式化上下文的创建，则称其为原子行内级盒子。而通过替换行内级元素或 `display` 值为 `inline-block` 或 `inline-table` 的元素创建的盒子不会像行内盒子一样可以被拆分为多个盒子。

> **备注：** 开始的时候，原子行内级盒子叫做原子行内盒子，这并不准确，因为它们并不是行内盒子。后来在一次勘误时修正了这一问题。不过，当你见到某些文章中使用了“原子行内盒子”的时候，你尽可以将其理解为“原子行内级盒子”，因为这仅仅是一个名字的修改。

{{EmbedGHLiveSample("css-examples/visual-formatting/line-boxes.html", '100%', 720)}}

#### 匿名行内盒子

类似于块盒子，CSS 引擎有时候也会自动创建一些行内盒子。这些行内盒子无法被选择符选中，因此是匿名的，它们从父元素那里继承那些可继承的属性，其他属性保持默认值 `initial`。一种常见的情况是 CSS 引擎会自动为直接包含在块盒子中的文本创建一个行内格式化上下文，在这种情况下，这些文本会被一个足够大的匿名行内盒子所包含。但是如果仅包含空格则有可能不会生成匿名行内盒子，因为空格有可能会由于 {{ cssxref("white-space") }} 的设置而被移除，从而导致最终的实际内容为空。

> **备注：** 示例 TBD

### 其他类型的盒子

#### 行盒子

行盒子由行内格式化上下文创建，用来显示一行文本。在块盒子内部，行盒子总是从块盒子的一边延伸到另一边（译注：即占据整个块盒子的宽度）。当有浮动元素时，行盒子会从向左浮动的元素的右边缘延伸到向右浮动的元素的左边缘。

行盒子更多是以技术性目的而存在的，Web 开发者通常不需要关心。

#### Run-in 盒子

Run-in 盒子通过 `display:run-in` 来定义，它可以是块盒子，也可以是行内盒子，这取决于紧随其后的盒子的类型。Run-in 盒子可以用来在可能的情况下将标题嵌入文章的第一个段落中。

> **备注：** Run-in 盒子已经在 CSS 2.1 的标准中移除了，但可能会在 CSS 3 中作为一个实验性的内容再次加入。因此最好不要将其用于正式项目。

#### 由其他模型引入的盒子

除了行内格式化上下文和块格式化上下文之外，CSS 还定义了几种内容模型，这些模型同样可以应用于元素。这些模型一般用来描述布局，它们可能会定义一些额外的盒子类型：

- [表格内容模型](/zh-CN/docs/CSS/table-layout)可能会创建一个表格包装器盒子和一个表格盒子，以及多个其他盒子如表格标题盒子等
- [多列内容模型](/zh-CN/docs/CSS/Using_CSS_multi-column_layouts)可能会在容器盒子和内容之间创建多个列盒子
- 实验性的网格内容模型或 flex-box 内容模型同样会创建一些其他种类的盒子

#### 定位规则

一旦生成了盒子以后，CSS 引擎就需要定位它们以完成布局。下面是定位盒子时所使用的规则：

- 普通流：按照次序依次定位每个盒子
- 浮动：将盒子从普通流中单独拎出来，将其放到外层盒子的某一边
- 绝对定位：按照绝对位置来定位盒子，其位置根据盒子的包含元素所建立的绝对坐标系来计算，因此绝对定位元素有可能会覆盖其他元素

### 普通流

在普通流中，盒子会依次放置。在块格式化上下文中，盒子在垂直方向依次排列；而在行内格式化上下文中，盒子则水平排列。当 CSS 的 {{ cssxref("position") }} 属性为 `static` 或 `relative`，并且 {{ cssxref("float") }} 为 `none` 时，其布局方式为普通流。

### 示例

> **备注：** 在普通流的块格式化上下文中，盒子会垂直依次排列：
>
> \[TODO 图片]
>
> 在普通流的行内格式化上下文中，盒子会水平依次排列：
>
> \[TODO 图片]

> **备注：** 普通流又有两种情况：静态定位和相对定位：
>
> {{ cssxref("position") }} 为 `static` 时为静态定位，此时每个盒子根据普通流所计算出的确切位置来定位。
>
> \[TODO 图片]
>
> 当 {{ cssxref("position") }} 为 `relative` 时为相对定位，此时每个盒子还会根据 {{ cssxref("top") }}、{{ cssxref("bottom") }}、{{ cssxref("left") }} 和 {{ cssxref("right") }} 属性的值在其原本所在的位置上产生指定大小的偏移。

### 浮动

在浮动定位中，浮动盒子会浮动到当前行的开始或尾部位置。这会导致普通流中的文本及其他内容会“流”到浮动盒子的边缘处，除非元素通过 {{ cssxref("clear") }} 清除了前面的浮动。

一个盒子的 {{ cssxref("float") }} 值不为 `none`，并且其 {{ cssxref("position") }} 为 `static` 或 `relative` 时，该盒子为浮动定位。如果将 {{ cssxref("float") }} 设置为 `left`，浮动盒子会定位到当前行盒子的开始位置（左侧），如果设置为 `right`，浮动盒子会定位到当前行盒子的尾部位置（右侧）。不管是左浮动还是右浮动，行盒子都会伸缩以适应浮动盒子的大小。

\[TODO 图片]

### 绝对定位

在绝对定位中，盒子会完全从当前流中移除，并且不会再与其有任何联系（译注：此处仅指定位和位置计算，而绝对定位的元素在文档树中仍然与其他元素有父子或兄弟等关系），其位置会使用 {{ cssxref("top") }}、{{ cssxref("bottom") }}、{{ cssxref("left") }} 和 {{ cssxref("right") }} 相对其[包含块](/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)进行计算。

如果元素的 {{ cssxref("position") }} 为 `absolute` 或 `fixed`，该元素为绝对定位。

对固定位置的元素来说，其包含块为整个视口，该元素相对视口进行绝对定位，因此滚动时元素的位置并不会改变。

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
