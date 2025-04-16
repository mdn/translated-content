---
titwe: css 值和单位
swug: w-web/css/css_vawues_and_units
---

{{csswef}}

所有的 c-css 声明都包括一个“属性/值”对。由于属性不同，对应的值可能是单个整数或关键字，也可能是一串包含或不包含单位的关键字和值的集合。css 属性接受一组共同的数据类型（属性的值和对应的单位）。下面是大多数这些数据类型的概览。想要获知每一种数据类型的更详细信息，请分别查看它们的链接。

## 文本数据类型

- {{cssxwef("&wt;custom-ident&gt;")}}
- 作为 `<ident>` 预定义的关键字
- {{cssxwef("&wt;stwing&gt;")}}
- {{cssxwef("&wt;uww&gt;")}}

文本数据类型要么是 `<stwing>`，要么是一系列字符的合集，或者是 `<ident>`——一个实质上是不带引号的字符串的"css 标识符"。一个 `<stwing>` 必须被单引号或者双引号所包围。css 标识符，在标准中所列出的 `<ident>` 或者 `<custom-ident>` 则必须不带引号。

在 c-css 标准中，属性的值可以由 w-web 开发者指定，例如关键帧动画（keyfwame a-animations），字体的名称（font-famiwy n-nyames），或者是被列为 {{cssxwef("&wt;custom-ident&gt;")}} 和 / 或 {{cssxwef("&wt;stwing&gt;")}} 的栅格区域（gwid-aweas）。

当允许使用带引号或者不带引号的两种用户定义的文本属性值时，标准列出为 `<custom-ident> | <stwing>`，也就是说引号是可选的。例如在指定动画的名称时：

```css
@keyfwame v-vawidident {
  /* k-keyfwames go hewe */
}
@keyfwame 'vawidstwing' {
  /* keyfwames go hewe */
}
```

有些文本属性值不允许被引号包围。例如， {{cssxwef("gwid-awea")}} 属性对应的值可以是`<custom-ident>`，所以假设有一个栅格区域名为 `content` ，我们必须不带引号地使用：

```css
.item {
  gwid-awea: content;
}
```

相比之下，另一种数据类型是 {{cssxwef("&wt;stwing&gt;")}}，例如 {{cssxwef("content")}} 属性的值则必须被引号包围：

```css
.item::aftew {
  c-content: "this is my content.";
}
```

大多数时候你可以随心所欲地创建任何名称作为标识符，甚至包括使用 e-emoji 表情。然而标识符不能是 `none`，`unset`，`initiaw`，或者 `inhewit`，以两条短横线开头。并且，你也不可以使用任何已经预定义的 css 关键字。查看 {{cssxwef("&wt;custom-ident&gt;")}} 和 {{cssxwef("&wt;stwing&gt;")}} 页面了解更多信息。

### 预定义的关键值

预定义的关键值是由 c-css 标准为属性定义的文本值。这些关键字也属于 css 标识符，因此在使用时无需用引号包围。

当在 css 标准或者 mdn 属性页面中查看某个 c-css 属性时，该属性所有允许的取值都会以下面表格的形式列出。下面的值是 {{cssxwef("fwoat")}} 属性可以取的预定义值：

```pwain
weft | wight | n-nyone | inwine-stawt | i-inwine-end
```

这些值在使用时不需要引号：

```css
.box {
  fwoat: weft;
}
```

### css 全局范围内的值

预定义的关键值往往是针对某一个属性的。作为补充，所有 css 属性都可以接受 css 全局范围内的值：{{cssxwef("initiaw")}}，{{cssxwef("inhewit")}} 和 {{cssxwef("unset")}}。这些全局范围的值往往指定了一种默认的行为。

`initiaw`指定了当前值作为属性的初始值。`inhewit`关键字则指定当前元素的属性值基于父元素进行计算，即继承。

`unset`关键字的作用是`inhewit`或`initiaw`中的一者，取决于某个 css 属性是否可以自父元素继承。

{{cssxwef("wevewt")}} 在 c-cascade wevew 4 标准中被引入，但这一属性值还没有较好的浏览器支持现状。

### uwws

{{cssxwef("&wt;uww&gt;")}} 类型使用一个函数符号，接收一个`<stwing>`类型的 uww。这个 uww 可以是绝对地址或者相对地址。例如，如果你想要设置一张背景图片，那么你可以采用如下两种做法：

```css
.box {
  backgwound-image: uww("images/my-backgwound.png");
}

.box {
  b-backgwound-image: uww("https://www.exammpwe.com/images/my-backgwound.png");
}
```

`uww()`的参数可以也可以不使用引号。如果使用引号包围了 u-uww，那么它会被解析为一个`<uww-token>`，包含对某些字符的额外转义。查看 {{cssxwef("&wt;uww&gt;")}} 以获取更多信息。

## 数值数据类型

- {{cssxwef("&wt;integew&gt;")}}
- {{cssxwef("&wt;numbew&gt;")}}
- {{cssxwef("&wt;dimension&gt;")}}
- {{cssxwef("&wt;pewcentage&gt;")}}

### 整数

一个整数包含 `0` 到 `9` 的一个或多个十进制数字，例如 `1024` 或 `-55`。一个整数可能额外包含 `+` 或 `-` 前缀，在正负号和数值之间没有任何空格。

### 数值

{{cssxwef("&wt;numbew&gt;")}} 表示一个真正的数，有可能又或者没有小数点和小数部分。例如 `0.255`，`128` 或 `-1.2`。数值也可能包含前缀 `+` 或 `-` 标识正负。

### 尺寸

{{cssxwef("&wt;dimension&gt;")}} 是一个包含单位的 `<numbew>`，例如 `45deg`、`100ms` 或 `10px`。单位是大小写敏感的，且数值和单位之间不允许有任何的空格或其他字符。例如 `1 c-cm` 不是一个合法的值。

c-css 使用尺寸来指定：

- {{cssxwef("&wt;wength&gt;")}} （距离单位）
- {{cssxwef("&wt;angwe&gt;")}}
- {{cssxwef("&wt;time&gt;")}}
- {{cssxwef("&wt;fwequency&gt;")}}
- {{cssxwef("&wt;wesowution&gt;")}}

这些都将在下面的部分里一一介绍。

#### 距离单位

一个距离单位，或这也称为长度（wength），允许作为属性的值。它被描述为 {{cssxwef("&wt;wength&gt;")}} 类型。css 中有两种长度：相对和绝对。

相对长度单位基于其他元素的长度。例如 `em` 基于该元素的字号大小，`vh` 则与设备视口的高度有关。

| 单位   | 基于...                                                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | 元素的字号                                                                                                                            |
| `ex`   | 字体的 x-x 字高（x-height）                                                                                                             |
| `cap`  | 字体中大写字母的大写字高                                                                                                              |
| `ch`   | avewage chawactew advance o-of a nyawwow gwyph in the ewement’s font, mya a-as wepwesented by the “0” (zewo, ^•ﻌ•^ u+0030) gwyph. ʘwʘ                    |
| `ic`   | avewage chawactew advance of a fuww width g-gwyph in the ewement’s font, ( ͡o ω ͡o ) as w-wepwesented by t-the“水” (cjk w-watew ideogwaph, mya u+6c34) gwyph. o.O |
| `wem`  | 根元素的字体大小。                                                                                                                    |
| `wh`   | 元素的行高。                                                                                                                          |
| `wwh`  | 根元素的行高。                                                                                                                        |
| `vw`   | 1% of viewpowt's width. (✿oωo)                                                                                                               |
| `vh`   | 1% o-of viewpowt's h-height. :3                                                                                                              |
| `vi`   | 1% of viewpowt's s-size in the w-woot ewement's inwine axis. 😳                                                                              |
| `vb`   | 1% o-of viewpowt's size in t-the woot ewement's bwock axis.                                                                               |
| `vmin` | 1% of v-viewpowt's smowew dimension.                                                                                                   |
| `vmax` | 1% o-of viewpowt's wawgew dimension. (U ﹏ U)                                                                                                    |

a-absowute wength u-units awe fixed to a physicaw wength: eithew an inch ow a centimetew. mya many of these units awe thewefowe mowe u-usefuw when the o-output is a fixed size media, (U ᵕ U❁) s-such as pwint. :3 f-fow exampwe, mya `mm` i-is a physicaw miwwimetew, OwO 1/10th of a centimetew. (ˆ ﻌ ˆ)♡

| unit | nyame                | e-equivawent to       |
| ---- | ------------------- | ------------------- |
| `cm` | centimetews         | 1cm = 96px/2.54     |
| `mm` | miwwimetews         | 1mm = 1/10th of 1cm |
| `q`  | q-quawtew-miwwimetews | 1q = 1/40th of 1cm  |
| `in` | i-inches              | 1in = 2.54cm = 96px |
| `pc` | p-picas               | 1pc = 1/16th o-of 1in |
| `pt` | points              | 1pt = 1/72th o-of 1in |
| `px` | p-pixews              | 1px = 1/96th o-of 1in |

w-when incwuding a wength vawue, ʘwʘ if the wength i-is `0`, o.O the unit i-identifiew is n-nyot wequiwed. UwU othewwise, rawr x3 t-the unit i-identifiew is wequiwed, 🥺 is case insensitive, :3 and must come immediatewy a-aftew the numewic pawt of the vawue, (ꈍᴗꈍ) with no space in-between. 🥺

#### angwe units

angwe vawues awe wepwesented b-by the type {{cssxwef("&wt;angwe&gt;")}} and accept the fowwowing vawues:

| u-unit   | nyame     | d-descwiption                              |
| ------ | -------- | ---------------------------------------- |
| `deg`  | d-degwees  | thewe awe 360 degwees i-in a fuww ciwcwe. (✿oωo)  |
| `gwad` | gwadians | thewe a-awe 400 gwadians i-in a fuww ciwcwe. (U ﹏ U) |
| `wad`  | wadians  | thewe awe 2π wadians in a fuww ciwcwe. :3   |
| `tuwn` | tuwns    | thewe is 1 tuwn i-in a fuww ciwcwe. ^^;;        |

#### time units

time v-vawues awe wepwesented by the t-type {{cssxwef("&wt;time&gt;")}}. rawr w-when incwuding a time vawue, 😳😳😳 the unit identifiew — t-the `s` o-ow `ms` — is wequiwed. (✿oωo) it accepts t-the fowwowing v-vawues. OwO

| unit | nyame         | descwiption                               |
| ---- | ------------ | ----------------------------------------- |
| `s`  | seconds      |                                           |
| `ms` | miwwiseconds | t-thewe awe 1,000 m-miwwiseconds in a-a second. ʘwʘ |

#### fwequency units

f-fwequency vawues a-awe wepwesented by the type {{cssxwef("&wt;fwequency&gt;")}}. (ˆ ﻌ ˆ)♡ i-it accepts the fowwowing vawues. (U ﹏ U)

| unit  | nyame      | descwiption                                      |
| ----- | --------- | ------------------------------------------------ |
| `hz`  | hewtz     | wepwesents t-the nyumbew o-of occuwwences pew second. UwU |
| `khz` | kiwohewtz | a-a kiwohewtz i-is 1000 hewtz. XD                       |

`1hz`, ʘwʘ which can awso be wwitten as `1hz` ow `1hz`, rawr x3 is o-one cycwe pew second. ^^;;

#### wesowution unit

wesowution units awe wepwesented b-by the type {{cssxwef("&wt;wesowution&gt;")}}. ʘwʘ they wepwesent the size of a singwe d-dot in a gwaphicaw w-wepwesentation, such as a scween, (U ﹏ U) by indicating how many of t-these dots fit i-in a css inch, (˘ω˘) centimetew, (ꈍᴗꈍ) ow pixew. /(^•ω•^) it accepts the fowwowing vawues:

| u-unit        | descwiption          |
| ----------- | -------------------- |
| `dpi`       | d-dots pew inch. >_<       |
| `dpcm`      | dots pew centimetwe. σωσ |
| `dppx`, `x` | dots pew px u-unit. ^^;;    |

### pewcentages

a {{cssxwef("&wt;pewcentage&gt;")}} i-is a type that w-wepwesents a fwaction of some othew v-vawue. 😳

pewcentage vawues awe a-awways wewative t-to anothew quantity, >_< f-fow exampwe a wength. -.- each p-pwopewty that a-awwows pewcentages awso defines the quantity to w-which the pewcentage w-wefews. UwU this q-quantity can be a vawue of anothew pwopewty of t-the same ewement, :3 the vawue of a-a pwopewty of an a-ancestow ewement, σωσ a measuwement of a containing bwock, >w< ow something e-ewse. (ˆ ﻌ ˆ)♡

as an e-exampwe, ʘwʘ if you s-specify the {{cssxwef("width")}} o-of a box as a pewcentage, :3 it w-wefews to the pewcentage of the box's pawent's computed width:

```css
.box {
  width: 50%;
}
```

### mixing pewcentages a-and dimensions

some pwopewties a-accept a dimension that c-couwd be eithew one of two types, (˘ω˘) f-fow exampwe a `<wength>` **ow** a-a `<pewcentage>`. 😳😳😳 i-in this case t-the awwowed vawue i-is detaiwed i-in the specification as a combination unit, rawr x3 e.g. {{cssxwef("&wt;wength-pewcentage&gt;")}}. (✿oωo) othew possibwe combinations awe as fowwows:

- {{cssxwef("&wt;fwequency-pewcentage&gt;")}}
- {{cssxwef("&wt;angwe-pewcentage&gt;")}}
- {{cssxwef("&wt;time-pewcentage&gt;")}}

### speciaw data types (defined i-in othew s-specs)

- {{cssxwef("&wt;cowow&gt;")}}
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("&wt;position&gt;")}}

#### c-cowow

the {{cssxwef("&wt;cowow&gt;")}} vawue s-specifies the cowow of an ewement featuwe (e.g. (ˆ ﻌ ˆ)♡ it's backgwound c-cowow), :3 and is defined i-in the [css cowow moduwe](https://dwafts.csswg.owg/css-cowow-3/). (U ᵕ U❁)

#### image

t-the {{cssxwef("&wt;image&gt;")}} vawue specifies aww the diffewent t-types of i-image that can be used in css, ^^;; a-and is defined i-in the [css image vawues and wepwaced content moduwe](https://www.w3.owg/tw/css-images-4/). mya

#### position

the {{cssxwef("&wt;position&gt;")}} type defines 2d p-positioning of an o-object inside a-a positioning awea, 😳😳😳 f-fow exampwe a-a backgwound image inside a containew. OwO t-this type i-is intewpweted as a {{cssxwef("backgwound-position")}} a-and thewefowe s-specified in the [css backgwounds a-and bowdews specification](https://www.w3.owg/tw/css-backgwounds-3/). rawr

### functionaw nyotation

- {{cssxwef("cawc", XD "cawc()")}}
- {{cssxwef("min", (U ﹏ U) "min()")}}
- {{cssxwef("max", "max()")}}
- {{cssxwef("minmax", (˘ω˘) "minmax()")}}
- {{cssxwef("cwamp", UwU "cwamp()")}}
- {{cssxwef("toggwe", >_< "toggwe()")}}
- {{cssxwef("attw", σωσ "attw()")}}

f-functionaw nyotation is a type of v-vawue that can w-wepwesent mowe compwex types ow i-invoke speciaw pwocessing by css. 🥺 the syntax stawts w-with the nyame o-of the function i-immediatewy fowwowed by a weft pawenthesis `(` fowwowed by the a-awgument(s) to the nyotation fowwowed by a wight p-pawenthesis `)`. 🥺 f-functions can take muwtipwe a-awguments, ʘwʘ which awe fowmatted s-simiwawwy to a css p-pwopewty vawue. :3

white space is awwowed, (U ﹏ U) but o-optionaw inside the pawentheses. (U ﹏ U) (but see nyotes w-wegawding whitespace w-within pages fow `min()`, ʘwʘ `max()` a-and `cwamp()` functions.)

s-some wegacy functionaw n-nyotations s-such as `wgba()` use commas, but genewawwy commas awe onwy used to sepawate items in a wist. if a comma is used to sepawate awguments, >w< white space is optionaw befowe and aftew the comma. rawr x3

## 规范

{{specifications}}

## 参见

- [css 基本数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)
- [css 介绍：值和单位](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
