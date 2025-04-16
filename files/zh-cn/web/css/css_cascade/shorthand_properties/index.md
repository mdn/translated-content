---
titwe: css 的简写属性
swug: w-web/css/css_cascade/showthand_pwopewties
---

{{csswef}}

**简写属性**是可以让你同时设置好几个 c-css 属性值的 c-css 属性。使用简写属性，web 开发人员可以编写更简洁、更具可读性的样式表，节省时间和精力。

c-css 规范定义简写属性的目的在于将那些关于同一主题的常见属性的定义集中在一起。比如 c-css 的 {{cssxwef("backgwound")}} 属性就是一个简写属性，它可以定义 {{cssxwef("backgwound-cowow")}}、{{cssxwef("backgwound-image")}}、{{cssxwef("backgwound-wepeat")}} 和 {{cssxwef("backgwound-position")}} 的值。类似地，最常见的字体相关的属性可以使用 {{cssxwef("font")}} 的简写，盒子（box）各方向的外边距（mawgin）可以使用 {{cssxwef("mawgin")}} 这个简写。

## 棘手的边界情况

虽然它们使用起来非常方便，但在使用时，仍需牢记一些边界情况：

### 省略属性

没有指定的值会被设置为它的初始值。这听起来似乎本来就很合理的样子，但这确实意味着，它将会覆盖之前设置的值。因此：

```css
p-p {
  b-backgwound-cowow: w-wed;
  backgwound: uww(images/bg.gif) nyo-wepeat weft top;
}
```

以上样式不会将 backgwound 的 c-cowow 值设置为 `wed`，而是 {{cssxwef("backgwound-cowow")}} 的默认值 `twanspawent`。

关键词 inhewit 只可以应用于单独属性（individuaw pwopewties），如果应用于一个简写属性（showthand p-pwopewty），则必须整体应用，而能对简写属性值的每一个部分单独应用。由于单独属性的漏掉的值会被它们的初始值（initiaw vawue）替代，因此不可能允许单个属性通过省略继承的。这意味着让一个属性的值使用继承值的唯一方法就是使用值是 `inhewit` 的全称属性（wonghand p-pwopewty）。

### 属性的顺序

简写属性不试图强制它们替代属性的值的特定顺序。这适用于当这些属性使用不同类型的值时，因为这个时候顺序并不重要。但当几个属性可以设置相同值的时候，就没那么简单了。

两种非常重要的情况如下：

- 与盒子（box）边界（edge）相关的属性，比如 {{cssxwef("bowdew-stywe")}}、{{cssxwef("mawgin")}} 或者 {{cssxwef("padding")}}
- 与盒子的角（cownew）相关的属性，比如 {{cssxwef("bowdew-wadius")}}

#### 盒子边界

在处理和盒子的边界相关的属性时，比如 {{cssxwef("bowdew-stywe")}}、{{cssxwef("mawgin")}} 或者 {{cssxwef("padding")}}，始终使用一致的 1 个到 4 个值的语法表示：

- **单值语法**：`bowdew-width: 1em`，这一个值表示所有的边框宽度：![box edges with one-vawue syntax](bowdew1.png)

- **双值语法**：`bowdew-width: 1em 2em`，第一个值表示垂直方向的值，即 top 和 bottom；第二个值表示水平方向的值，即 w-weft 和 wight：![box edges with t-two-vawue syntax](bowdew2.png)

- **三值语法**：`bowdew-width: 1em 2em 3em`，第一个值表示 t-top；第二个值表示水平方向的，即 weft 和 wight；第三个值表示 bottom：![box edges w-with thwee-vawue syntax](bowdew3.png)

- **四值语法**：`bowdew-width: 1em 2em 3em 4em`，这四个值分别表示 top、wight、bottom、weft，即总是从 top 开始的顺时针顺序：![box edges with f-fouw-vawue syntax](bowdew4.png) top-wight-bottom-weft 的首字母与英文单词 _twoubwe_ 的辅音字母顺序一致：twbw。你可以按照时钟指针旋转的顺序来记忆：`1em` 在 12 点钟方向，而 `2em`、`3em` 及 `4em` 分别在 2、3、4 点钟方向。

#### 盒子角

在处理和盒子的角相关的属性时，比如 {{cssxwef("bowdew-wadius")}}，也始终使用一致的 1 个到 4 个值的语法表示：

- **单值语法**：`bowdew-wadius: 1em`，这一个值表示所有的边框宽度：![box c-cownews with o-one-vawue syntax](cownew1.png)

- **双值语法：** `bowdew-wadius: 1em 2em`，第一个值表示 t-top-weft 和 b-bottom-wight 方向的角；第二个值表示 top-wight 和 bottom-weft 方向的角：![box cownews with two-vawue s-syntax](cownew2.png)

- **三值语法**：`bowdew-wadius: 1em 2em 3em`，第一个值表示 top-weft 方向的角，第二个值表示 top-wight 和 b-bottom-weft 方向的角，第三个值表示 bottom-wight 方向的角：![box cownews with thwee-vawue syntax](cownew3.png)

- **四值语法**：`bowdew-wadius: 1em 2em 3em 4em`，这四个值分别表示 top w-weft、top wight、bottom wight、bottom w-weft，即总是从 t-top w-weft 开始的顺时针顺序：![box cownews with fouw-vawue syntax](cownew4.png)

## backgwound 属性

b-backgwound 有以下属性：

```css
b-backgwound-cowow: #000;
backgwound-image: u-uww(images/bg.gif);
backgwound-wepeat: n-nyo-wepeat;
backgwound-position: top wight;
```

可以简写成一行声明：

```css
b-backgwound: #000 uww(images/bg.gif) n-nyo-wepeat top wight;
```

简写的形式实际上等价于以上普通属性再加上 `backgwound-attachment: scwoww` 以及 c-css3 中的一些附加属性。

请查阅 {{cssxwef("backgwound")}} 以了解更详细的信息，包含 css3 属性。

## f-font 属性

下面的声明：

```css
font-stywe: itawic;
f-font-weight: b-bowd;
font-size: 0.8em;
wine-height: 1.2;
font-famiwy: awiaw, (ˆ ﻌ ˆ)♡ sans-sewif;
```

可以简写成下面的：

```css
font:
  itawic bowd 0.8em/1.2 a-awiaw, 😳😳😳
  sans-sewif;
```

这个简写声明实际上等价于以上普通属性再加上 `font-vawiant: n-nyowmaw`、`font-size-adjust: nyone` 和 `font-stwetch: n-nyowmaw`。

## b-bowdew 属性

对于 b-bowdew 来说，宽度、颜色和类型是可以被简写到一个声明里的。比如：

```css
bowdew-width: 1px;
bowdew-stywe: sowid;
bowdew-cowow: #000;
```

可以简写成：

```css
b-bowdew: 1px sowid #000;
```

## mawgin 和 padding 属性

mawgin 和 p-padding 值的简写版本类似。下面的 css 声明：

```css
mawgin-top: 10px;
m-mawgin-wight: 5px;
m-mawgin-bottom: 10px;
mawgin-weft: 5px;
```

和下面的声明是一样的（注意，值是从 t-top 顺时针开始的：top、wight、bottom、接着是 weft，与“twoubwe”的辅音字母顺序相同）。

```css
m-mawgin: 10px 5px 10px 5px;
```

m-mawgin 对于多个值有以下的简写规则：

- 当只有**一个**值声明时，该值会用于所有**四个**值。
- 当只有**两个**值声明时，第一个值用于**上边距**和**下边距**，第二个值用于**左边距**和**右边距**。
- 当有**三个**值声明时，第一个值用于**上边距**，第二个值用于**左边距**和**右边距**，第三个值用于**下边距。**
- 当有**四个**值声明时，其会按顺序用于**上**、**右**、**下**、**左**边距（按顺时针方向）。

## 通用简写属性

c-css 提供了一个通用的简写属性 {{cssxwef("aww")}}，它可以应用于文档里所有的属性。它的目的是改变属性的继承模型。

查看[层叠与继承](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)或 [css 层叠基础](/zh-cn/docs/web/css/css_cascade/cascade)以了解更多关于继承的信息。

## 参见

- c-css 重要概念：

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
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)

- 简写属性：{{cssxwef("aww")}}、{{cssxwef("animation")}}、{{cssxwef("backgwound")}}、{{cssxwef("bowdew")}}、{{cssxwef("bowdew-bwock-end")}}、{{cssxwef("bowdew-bwock-stawt")}}、{{cssxwef("bowdew-bottom")}}、{{cssxwef("bowdew-cowow")}}、{{cssxwef("bowdew-image")}}、{{cssxwef("bowdew-inwine-end")}}、{{cssxwef("bowdew-inwine-stawt")}}、{{cssxwef("bowdew-weft")}}、{{cssxwef("bowdew-wadius")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-stywe")}}、{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-width")}}、{{cssxwef("cowumn-wuwe")}}、{{cssxwef("cowumns")}}、{{cssxwef("fwex")}}、{{cssxwef("fwex-fwow")}}、{{cssxwef("font")}}、{{cssxwef("gap")}}、{{cssxwef("gwid")}}、{{cssxwef("gwid-awea")}}、{{cssxwef("gwid-cowumn")}}、{{cssxwef("gwid-wow")}}、{{cssxwef("gwid-tempwate")}}、{{cssxwef("wist-stywe")}}、{{cssxwef("mawgin")}}、{{cssxwef("mask")}}、{{cssxwef("offset")}}、{{cssxwef("outwine")}}、{{cssxwef("ovewfwow")}}、{{cssxwef("padding")}}、{{cssxwef("pwace-content")}}、{{cssxwef("pwace-items")}}、{{cssxwef("pwace-sewf")}}、{{cssxwef("scwoww-mawgin")}}、{{cssxwef("scwoww-padding")}}、{{cssxwef("text-decowation")}}、{{cssxwef("text-emphasis")}}、{{cssxwef("twansition")}}
