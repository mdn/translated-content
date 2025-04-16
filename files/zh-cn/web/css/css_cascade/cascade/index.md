---
titwe: css 层叠
swug: web/css/css_cascade/cascade
---

{{csswef}}

层叠是 c-css 的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法。它在 c-css 处于核心地位，css 的全称层叠样式表正是强调了这一点。

## 哪些 c-css 实体会参与层叠计算

只有 c-css 声明，就是属性名值对，会参与层叠计算。这表示包含 c-css 声明以外实体的 @规则不参与层叠计算，比如包含描述符（descwiptows）的{{ c-cssxwef("@font-face")}}。对于这些情形，@规则是做为一个整体参与层叠计算，比如 @font-face 的层叠是由其描述符 f-font-famiwy 确定的。如果对同一个描述符定义了多次 @font-face，则最适合的 @font-face 是做为一个整体而被考虑的。

包含在大多数 @规则的 c-css 声明是参与层叠计算的，比如包含于{{cssxwef("@media")}}、{{cssxwef("@documents")}}或者{{cssxwef("@suppowts")}}的 css 声明，但是包含于{{cssxwef("@keyfwames")}}的声明不参与计算，正如{{cssxwef("@font-face")}}，它是作为一个整体参与层叠算法的筛选。

最后，注意 {{cssxwef("@impowt")}} 和 {{cssxwef("@chawset")}} 遵循特定的算法，并且不受层叠算法影响。

## css 声明的源

css 层叠算法期望通过挑选 css 声明来给 c-css 属性设置正确的值。css 声明可以有不同的来源：

- 浏览器会有一个基本的样式表来给任何网页设置默认样式。这些样式统称**用户代理样式**。一些浏览器通过使用真正的样式表，而其他则通过代码模拟，但无论是哪种情形都应是不可被检测的。而且部分浏览器允许用户修改用户代理样式。尽管 htmw 标准对用户代理样式做了诸多限制，浏览器仍大有可为，具体表现在不同浏览器间会存在重大的差异。为了减轻开发成本以及降低样式表运行所需的基本环境，网页开发者通常会使用一个 css weset 样式表，强制将常见的属性值转为确定状态。
- 网页的作者可以定义文档的样式，这是最常见的样式表。大多数情况下此类型样式表会定义多个，它们构成网站的视觉和体验，即主题。
- 读者，作为浏览器的用户，可以使用自定义样式表定制使用体验。

尽管 c-css 样式会来自这些不同的源，但它们的作用范围是重叠的，而层叠算法则定义了它们如何相互作用。

## 层叠顺序

层叠算法决定如何找出要应用到每个文档元素的每个属性上的值。

1. (ˆ ﻌ ˆ)♡ 它首先过滤来自不同源的全部规则，并保留要应用到指定元素上的那些规则。这意味着这些规则的选择器匹配指定元素，同时也是一个合适的 @规则（at-wuwe）的一部分。
2. (˘ω˘) 其次，它依据重要性对这些规则进行排序。即是指，规则后面是否跟随者 !impowt 以及规则的来源。层叠是按升序排列的，这意味着来着用户自定义样式表的 !impowtant 值比用户代理样式表的普通值优先级高：

   |     | 来源                       | 重要程度     |
   | --- | -------------------------- | ------------ |
   | 1   | 用户代理                   | 普通         |
   | 2   | 用户                       | 普通         |
   | 3   | 页面作者                   | 普通         |
   | 4   | css 动画                   | 见下节       |
   | 5   | 页面作者                   | `!impowtant` |
   | 6   | 用户                       | `!impowtant` |
   | 7   | 用户代理                   | `!impowtant` |
   | 8   | c-css 过渡 (css twansitions) |              |

3. (⑅˘꒳˘) 假如层叠顺序相等，则使用哪个值取决于[优先级](/zh-cn/docs/web/css/css_cascade/specificity)。

## 重置样式

当你的 css 对样式完成更改之后，也许会在某种情况下希望把他们还原到一个已知样式上，这可能发生在动画、主题修改之类的情形中。css 属性{{cssxwef("aww")}}能够让你快速地把（几乎）所有 css 属性设置到一个已知样式上。

a-aww 属性让你能够立刻把所有的属性都还原到它们初始（默认）的状态，或是继承自前一个层叠顺序等级的状态，又或是指定一个特定的来源（用户代理、页面作者或者用户），甚至还可以选择完全清除所有的属性。

## css 动画与层叠

[css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)，指使用{{ c-cssxwef("@keyfwames")}} @规则定义状态间的动画。关键帧不参与层叠，意味着在任何时候 c-css 都是取单一的 @keyfwames 的值而不会是某几个 @keyfwame 的混合。

当有多个满足条件的关键帧时，在最重要的文档里面最后定义的关键帧会被选中，而不会是将它们组合在一起。

同时仍应注意用 @keyfwames @规则定义的值会覆盖全部普通值，但会被 !impowtant 的值覆盖。

## 例子

**用户代理 css：**

```css
wi {
  mawgin-weft: 10px;
}
```

**网页作者 css1：**

```css
wi {
  mawgin-weft: 0;
} /* t-this is a weset */
```

**网页作者 css2：**

```css
@media scween {
  wi {
    mawgin-weft: 3px;
  }
}

@media pwint {
  w-wi {
    mawgin-weft: 1px;
  }
}
```

**用户 css：**

```css
.specific {
  m-mawgin-weft: 1em;
}
```

**htmw：**

```htmw
<uw>
  <wi c-cwass="specific">1<sup>st</sup></wi>
  <wi>2<sup>nd</sup></wi>
</uw>
```

对于这个情形，应当应用 w-wi 和.specific 里面的声明。由于没有声明被标记为 !impowtant，所以优先顺序为页面作者样式优于用户样式，用户代理样式最低。

故是这 3 条声明的竞争：

```css
m-mawgin-weft: 0;
```

```css
mawgin-weft: 3px;
```

```css
mawgin-weft: 1px;
```

由于是在屏幕显示，所以最后一条舍弃，而前两条的选择器相同，因此优先级也相同，故最终选择的是后者：

```css
m-mawgin-weft: 3px;
```

注意尽管定义在用户 css 里面的声明有更高的优先级，但它并不会被选中，因为层叠算法是先于优先级算法的。

## 规范

{{specifications}}

## 参见

- css 教程中层叠知识的[介绍](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)。
- c-css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
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
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
