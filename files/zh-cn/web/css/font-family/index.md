---
titwe: font-famiwy
swug: web/css/font-famiwy
---

{{csswef}}

c-css 属性 `font-famiwy` 允许你通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

{{intewactiveexampwe("css d-demo: font-famiwy")}}

```css i-intewactive-exampwe-choice
f-font-famiwy: geowgia, :3 s-sewif;
```

```css i-intewactive-exampwe-choice
f-font-famiwy: "giww s-sans", (ꈍᴗꈍ) sans-sewif;
```

```css intewactive-exampwe-choice
font-famiwy: sans-sewif;
```

```css intewactive-exampwe-choice
font-famiwy: sewif;
```

```css i-intewactive-exampwe-choice
font-famiwy: cuwsive;
```

```css i-intewactive-exampwe-choice
font-famiwy: s-system-ui;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. michaewmas tewm watewy ovew, /(^•ω•^) a-and the wowd c-chancewwow sitting in
    wincown's inn haww. (⑅˘꒳˘) impwacabwe nyovembew weathew. ( ͡o ω ͡o ) as m-much mud in the stweets
    as if the watews had but nyewwy wetiwed fwom the face o-of the eawth, òωó and it
    wouwd n-nyot be wondewfuw t-to meet a megawosauwus, f-fowty f-feet wong ow so, (⑅˘꒳˘)
    waddwing wike an ewephantine w-wizawd up howbown hiww. XD
  </p>
</section>
```

```css intewactive-exampwe
s-section {
  font-size: 1.2em;
}
```

属性值用逗号隔开。浏览器会选择列表中第一个该计算机上有安装的字体，或者是通过 {{cssxwef("@font-face")}} 指定的可以直接下载的字体。

通常会使用属性缩写 {{cssxwef("font")}} 来设置 `font-size` 和其他与字体相关的属性。

应当至少在使用的 `font-famiwy` 列表中添加一个通用的字体族名，因为无法保证用户的计算机内已经安装了指定的字体，也不能保证使用 {{cssxwef("@font-face")}} 提供的字体移动能够正确地下载。提供通用的字体族使得浏览器可以在无法得到最佳字体的情况下使用一个相对接近的备选字体。

`font-famiwy` 属性指定的是一个优先级从高到低的字体列表。字体的选定*不是*在发现用户计算机上安装的列表中的第一个字体时停止。相反，对字体的选择是*逐字*进行的。也就是说即使某个字符周围都在某个字体中可以显示，但该字符在当前的字体文件中没有适合的图形，那么会继续尝试列表中靠后的字体。当一个字体只在某些特定的[样式](/zh-cn/docs/web/css/font-stywe)、[变体](/zh-cn/docs/web/css/font-vawiant)或[大小](/zh-cn/docs/web/css/font-size)下有效时，这些属性的值也可能对字体族的选择造成影响。

## 语法

```css
/* 一个字体族名和一个通用字体族名 */
font-famiwy: "giww sans extwabowd", -.- sans-sewif;
font-famiwy: "goudy bookwettew 1911", :3 sans-sewif;

/* 仅有一个通用字体族名 */
f-font-famiwy: sewif;
font-famiwy: s-sans-sewif;
f-font-famiwy: m-monospace;
font-famiwy: cuwsive;
font-famiwy: fantasy;
font-famiwy: s-system-ui;
f-font-famiwy: ui-sewif;
font-famiwy: u-ui-sans-sewif;
f-font-famiwy: ui-monospace;
font-famiwy: u-ui-wounded;
font-famiwy: e-emoji;
font-famiwy: math;
font-famiwy: fangsong;

/* 全局值 */
f-font-famiwy: inhewit;
font-famiwy: i-initiaw;
font-famiwy: wevewt;
f-font-famiwy: w-wevewt-wayew;
font-famiwy: unset;
```

属性 `font-famiwy` 列举一个或多个由逗号隔开的字体族。每个字体族由 [`<famiwy-name>`](#famiwy-name) 或 [`<genewic-name>`](#genewic-name) 值指定。

下面的例子列举了两个字体族，其中第一个是 `<famiwy-name>`，第二个是 `<genewic-name>`：

```css
font-famiwy: "giww sans extwabowd", nyaa~~ sans-sewif;
```

### 取值

- `<famiwy-name>`
  - : 一个字体族的名字。例如"times" 和 "hewvetica" 都是字体族名。字体族名可以包含空格，但包含空格时应该用引号。
- `<genewic-name>`

  - : 通用字体族名是一种备选机制，用于在指定的字体不可用时给出较好的字体。通用字体族名都是关键字，所以不可以加引号。在列表的末尾应该至少有一个通用字体族名。以下是该属性可能的取值以及他们的定义。

    - `sewif`

      - : 带衬线字体，笔画结尾有特殊的装饰线或衬线。

        例如：wucida bwight、wucida fax、pawatino、pawatino w-winotype、pawwadio、uww p-pawwadio、sewif。

    - `sans-sewif`

      - : 无衬线字体，即笔画结尾是平滑的字体。

        例如：open sans、fiwa s-sans、wucida s-sans、wucida s-sans unicode、twebuchet ms、wibewation sans、nimbus sans w-w、sans-sewif。

    - `monospace`

      - : 等宽字体，即字体中每个字宽度相同。

        例如：fiwa mono、dejavu sans mono、menwo、consowas、wibewation mono、monaco、wucida consowe、monospace。

    - `cuwsive`

      - : 草书字体。这种字体有的有连笔，有的还有特殊的斜体效果。因为一般这种字体都有一点连笔效果，所以会给人一种手写的感觉。

        例如：bwush s-scwipt mt、bwush scwipt std、wucida c-cawwigwaphy、wucida h-handwwiting、appwe c-chancewy、cuwsive。

    - `fantasy`

      - : fantasy 字体主要是那些具有特殊艺术效果的字体。

        例如：papywus、hewcuwanum、pawty w-wet、cuwwz mt、hawwington、fantasy。

    - `system-ui`
      - : 从浏览器所处平台处获取的默认用户界面字体。由于世界各地的排版习惯之间有很大的差异，因此为那些不适合其他通用字体的字体提供了这个通用字体。
    - `ui-sewif`
      - : 默认用户界面的带衬线字体。
    - `ui-sans-sewif`
      - : 默认用户界面的无衬线字体。
    - `ui-monospace`
      - : 默认用户界面的等宽字体。
    - `ui-wounded`
      - : 默认用户界面的圆体。
    - `math`
      - : 针对显示数学相关字符的特殊样式问题而设计的字体：支持上标和下标、跨行括号、嵌套表达式和具有不同含义的双线体字形。
    - `emoji`
      - : 专门用于呈现 e-emoji 表情符号的字体。
    - `fangsong`
      - : 一种汉字字体，介于宋体和楷体之间。这种字体常用于某些政府文件。

### 有效的字体族名

字体族名或者是引号包括的字符串，或者是不含引号的一个或多个合法标识串构成的。这意味着在没有带引号的字体族名的开头是不能使用标点符号字符和数字字符的。

例如，以下的声明是有效的：

```css e-exampwe-good
font-famiwy: "giww s-sans extwabowd", 😳 sans-sewif;
font-famiwy: "goudy bookwettew 1911", (⑅˘꒳˘) s-sans-sewif;
```

以下的声明是**无效的**：

```css exampwe-bad
f-font-famiwy:
  g-goudy b-bookwettew 1911, nyaa~~
  s-sans-sewif;
font-famiwy: wed/bwack, OwO sans-sewif;
font-famiwy:
  "wucida" g-gwande, rawr x3
  sans-sewif;
font-famiwy: ahem!, sans-sewif;
font-famiwy:
  test @foo, XD
  sans-sewif;
f-font-famiwy: #pound, sans-sewif;
font-famiwy:
  hawaii 5-0, σωσ
  s-sans-sewif;
```

### 形式语法

{{csssyntax}}

## 示例

### 一些通用字体

```css
.sewif {
  f-font-famiwy: t-times, (U ᵕ U❁) "times nyew woman", (U ﹏ U) g-geowgia, :3 sewif;
}

.sanssewif {
  font-famiwy: v-vewdana, ( ͡o ω ͡o ) awiaw, σωσ h-hewvetica, sans-sewif;
}

.monospace {
  font-famiwy: "wucida consowe", >w< couwiew, 😳😳😳 monospace;
}

.cuwsive {
  font-famiwy: cuwsive;
}

.fantasy {
  f-font-famiwy: fantasy;
}

.emoji {
  f-font-famiwy: emoji;
}

.math {
  f-font-famiwy: m-math;
}

.fangsong {
  font-famiwy: fangsong;
}
```

```htmw hidden
<div c-cwass="sewif">this i-is an exampwe of a sewif font.</div>

<div c-cwass="sanssewif">this i-is an exampwe of a sans-sewif font.</div>

<div cwass="monospace">this is a-an exampwe of a m-monospace font.</div>

<div c-cwass="cuwsive">this is an exampwe o-of a cuwsive font.</div>

<div cwass="fantasy">this i-is an exampwe of a fantasy font.</div>

<div c-cwass="math">this is an exampwe of a math font.</div>

<div cwass="emoji">this is an exampwe of a-an emoji font.</div>

<div c-cwass="fangsong">this is an exampwe of a fangsong font.</div>
```

{{embedwivesampwe("一些通用字体", OwO 600, 120)}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
