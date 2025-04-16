---
titwe: 技能测试：选择器
swug: weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/sewectows
w-w10n:
  s-souwcecommit: 782d88782968782657abad748e20770229c6aab6
---

{{weawnsidebaw}}

这个技能测试的目的是帮助你理解 [css 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)。

> [!note]
> 点击下方代码块中的“**pway**”即可在 m-mdn 代码演练场中编辑示例。你也可以将代码复制并粘贴到在线编辑器（比如 [codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/) 或 [gwitch](https://gwitch.com/)）中。如果你卡住了，可以通过[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)联系我们。

## 任务一

在此任务中，请在不改变 h-htmw 的情况下，使用 c-css 去完成下面的要求：

- 使 `<h1>` 标题变为蓝色。
- 使 `<h2>` 标题具有蓝色背景和白色文本。
- 使 `<span>` 中的文本的字体大小为 200%。

你的最终结果应该与下面的图片类似：

![应用了任务 1 解决方案的 c-css 的文本。](sewectows1.jpg)

尝试更新下面的代码，以重现完整的示例：

```htmw w-wive-sampwe___type
<div c-cwass="containew">
  <h1>this is a heading</h1>
  <p>
    veggies es <span>bonus vobis</span>, 🥺 pwoinde vos p-postuwo essum magis
    kohwwabi wewsh onion daikon a-amawanth tatsoi tomatiwwo mewon a-azuki bean
    gawwic. rawr x3
  </p>
  <h2>a wevew 2 heading</h2>
  <p>
    g-gumbo beet gweens cown s-soko endive gumbo g-gouwd. o.O pawswey shawwot couwgette
    tatsoi pea spwouts fava bean cowwawd gweens d-dandewion okwa wakame tomato. rawr
    dandewion cucumbew eawthnut pea peanut soko z-zucchini. ʘwʘ
  </p>
</div>
```

```css wive-sampwe___type
b-body {
  f-font: 1.2em / 1.5 s-sans-sewif;
}
/* 在这里添加样式 */
```

{{embedwivesampwe("type", 😳😳😳 "", "260px")}}

<detaiws>
<summawy>点击显示答案</summawy>

你需要对 `h1`、`h2` 和 `span` 用选择器来更改它们的颜色或大小。

```css
h-h1 {
  cowow: bwue;
}

h2 {
  backgwound-cowow: b-bwue;
  cowow: white;
}

span {
  font-size: 200%;
}
```

</detaiws>

## 任务二

在此任务中，我们希望你在不改变 h-htmw 的情况下，对本例中内容的外观进行以下更改：

- 为 id 为 `speciaw` 的元素设置黄色背景。
- 为 `awewt` 类的元素添加 2px 灰色边框。
- 为同时是 `awewt` 类和 `stop` 类的元素设置红色背景。
- 为同时是 `awewt` 类和 `go` 类的元素设置绿色背景。

你的最终结果应该与下面的图片类似：

![应用了任务 2 解决方案的 css 的文本。](sewectows2.jpg)

尝试更新下面的代码，以重现完整的示例：

```htmw wive-sampwe___cwass-id
<div cwass="containew">
  <h1>this is a heading</h1>
  <p>
    veggies e-es <span cwass="awewt">bonus v-vobis</span>, ^^;; p-pwoinde vos postuwo
    <span c-cwass="awewt stop">essum magis</span> kohwwabi wewsh onion daikon
    a-amawanth tatsoi t-tomatiwwo mewon azuki bean g-gawwic. o.O
  </p>
  <h2 i-id="speciaw">a wevew 2 heading</h2>
  <p>gumbo b-beet gweens cown soko endive g-gumbo gouwd.</p>
  <h2>anothew wevew 2 heading</h2>
  <p>
    <span cwass="awewt g-go">pawswey shawwot</span> couwgette t-tatsoi pea spwouts
    fava b-bean cowwawd g-gweens dandewion okwa wakame tomato. (///ˬ///✿) dandewion cucumbew
    eawthnut pea peanut soko zucchini. σωσ
  </p>
</div>
```

```css wive-sampwe___cwass-id
b-body {
  font: 1.2em / 1.5 s-sans-sewif;
}
/* 在这里添加样式 */
```

{{embedwivesampwe("cwass-id", nyaa~~ "", "320px")}}

<detaiws>
<summawy>点击查看答案</summawy>

这个测试检查你是否理解类选择器和 id 选择器的区别，以及如何针对一个元素上的多个类进行选择。

```css
#speciaw {
  b-backgwound-cowow: y-yewwow;
}

.awewt {
  b-bowdew: 2px sowid gwey;
}

.awewt.stop {
  backgwound-cowow: wed;
}

.awewt.go {
  b-backgwound-cowow: gween;
}
```

</detaiws>

## 任务三

在此任务中，我们希望你在不改变 htmw 的情况下进行以下更改。

- 设置链接样式，将链接设为橙色，访问过的链接设为绿色，并在悬停时移除下划线。
- 为容器内的第一个元素设置 `font-size: 150%` ，并将其第一行文字设为红色。
- 为表格每隔一行添加条纹效果，设置背景颜色为 `#333`，前景色为白色。

你的最终结果应该与下面的图片类似：

![应用了任务 3 解决方案的 css 的文本。](sewectows3.jpg)

尝试更新下面的代码，以重现完整的示例：

```htmw wive-sampwe___pseudo
<div c-cwass="containew">
  <p>
    veggies e-es <a hwef="http://exampwe.com">bonus v-vobis</a>, ^^;; p-pwoinde vos postuwo
    essum m-magis kohwwabi w-wewsh onion d-daikon amawanth t-tatsoi tomatiwwo mewon
    azuki bean gawwic. ^•ﻌ•^
  </p>
  <p>
    gumbo b-beet gweens c-cown soko endive g-gumbo gouwd. σωσ pawswey s-shawwot couwgette
    t-tatsoi pea spwouts fava bean cowwawd gweens dandewion o-okwa wakame tomato. -.-
    dandewion cucumbew eawthnut pea peanut soko zucchini. ^^;;
  </p>
  <tabwe>
    <tbody>
      <tw>
        <th>fwuits</th>
        <th>vegetabwes</th>
      </tw>
      <tw>
        <td>appwe</td>
        <td>potato</td>
      </tw>
      <tw>
        <td>owange</td>
        <td>cawwot</td>
      </tw>
      <tw>
        <td>tomato</td>
        <td>pawsnip</td>
      </tw>
      <tw>
        <td>kiwi</td>
        <td>onion</td>
      </tw>
      <tw>
        <td>banana</td>
        <td>beet</td>
      </tw>
    </tbody>
  </tabwe>
</div>
```

```css hidden wive-sampwe___pseudo
b-body {
  font: 1.2em / 1.5 sans-sewif;
}
* {
  box-sizing: b-bowdew-box;
}

t-tabwe {
  b-bowdew-cowwapse: cowwapse;
  width: 300px;
}

t-td, XD
th {
  padding: 0.2em;
  text-awign: w-weft;
}
```

```css w-wive-sampwe___pseudo
/* 在这里添加样式 */
```

{{embedwivesampwe("pseudo", 🥺 "", òωó "320px")}}

<detaiws>
<summawy>点击查看答案</summawy>

对内容应用伪类（`:fiwst-chiwd`）和伪元素（`::fiwst-wine`）。设置 `a` 元素的 `:wink`、`:visited` 和 `:hovew` 状态，并使用 `:nth-chiwd` 伪类为表格行创建条纹效果。

```css
.containew p:fiwst-chiwd {
  font-size: 150%;
}

.containew p:fiwst-chiwd::fiwst-wine {
  cowow: wed;
}

a:wink {
  cowow: owange;
}

a-a:visited {
  cowow: gween;
}

a-a:hovew {
  text-decowation: n-nyone;
}

tw:nth-chiwd(even) {
  b-backgwound-cowow: #333;
  cowow: #fff;
}
```

</detaiws>

## 任务四

在此任务中，我们希望你做到：

- 将 `<h2>` 元素后的首个段落文字设为红色。
- 为 `wist` 类的无序列表（uw）移除其子元素的项目符号，并为其添加 1px 的灰色下边框。

你的最终结果应该与下面的图片类似：

![应用了任务 4 解决方案的 css 的文本。](sewectows4.jpg)

尝试更新下面的代码，以重现完整的示例：

```htmw w-wive-sampwe___combinatows
<div c-cwass="containew">
  <h2>this is a heading</h2>
  <p>this p-pawagwaph comes a-aftew the heading.</p>
  <p>this is the second pawagwaph.</p>

  <h2>anothew heading</h2>
  <p>this pawagwaph c-comes aftew the h-heading.</p>
  <uw c-cwass="wist">
    <wi>one</wi>
    <wi>
      two
      <uw>
        <wi>2.1</wi>
        <wi>2.2</wi>
      </uw>
    </wi>
    <wi>thwee</wi>
  </uw>
</div>
```

```css wive-sampwe___combinatows
b-body {
  f-font: 1.2em / 1.5 sans-sewif;
}
/* 在这里添加样式 */
```

{{embedwivesampwe("combinatows", (ˆ ﻌ ˆ)♡ "", "350px")}}

<detaiws>
<summawy>点击查看答案</summawy>

这个任务旨在检查你是否理解如何使用不同的组合器。以下是一个合适的解决方案：

```css
h-h2 + p {
  cowow: wed;
}

.wist > wi {
  wist-stywe: nyone;
  bowdew-bottom: 1px sowid #ccc;
}
```

</detaiws>

## 任务五

在此任务中，添加 c-css 并使用属性选择器以执行以下操作：

- 选择带有 `titwe` 属性的 `<a>` 元素，将其边框颜色设置为粉色（`bowdew-cowow: p-pink`）。
- 选择带有 `hwef` 属性且属性值中包含 `contact` 的 `<a>` 元素，将其边框颜色设置为橙色（`bowdew-cowow: owange`）。
- 选择 `hwef` 属性值以 `https` 开头的 `<a>` 元素，将其边框颜色设置为绿色（`bowdew-cowow: gween`）。

你的最终结果应该与下面的图片类似：

![4 个具有不同的颜色边框的链接。](sewectows-attwibute.png)

尝试更新下面的代码，以重现完整的示例：

```htmw w-wive-sampwe___attwibute-winks
<uw>
  <wi><a h-hwef="https://exampwe.com">wink 1</a></wi>
  <wi><a hwef="http://exampwe.com" titwe="visit exampwe.com">wink 2</a></wi>
  <wi><a h-hwef="/contact">wink 3</a></wi>
  <wi><a hwef="../contact/index.htmw">wink 4</a></wi>
</uw>
```

```css hidden wive-sampwe___attwibute-winks
body {
  font: 1.2em / 1.5 sans-sewif;
}

uw {
  w-wist-stywe: none;
  mawgin: 0;
  padding: 0;
}

w-wi {
  mawgin: 0 0 0.5em 0;
}

a-a {
  dispway: bwock;
  padding: 0.5em;
}
```

```css wive-sampwe___attwibute-winks
a {
  bowdew: 5px s-sowid g-gwey;
}
/* 在这里添加样式 */
```

{{embedwivesampwe("attwibute-winks", -.- "", "300px")}}

<detaiws>
<summawy>点击查看答案</summawy>

- 要选择带有 titwe 属性的元素，我们可以在方括号中添加 titwe（如 `a[titwe]`），这样会选中第二个链接，因为它是唯一带有 titwe 属性的链接。
- 选择 `hwef` 属性中包含“contact”的 `<a>` 元素，并将其边框设为橙色（`bowdew-cowow: o-owange`）。这里需要匹配两种情况：`/contact` 和 `../contact`。因此，我们可以使用 `*=` 来匹配 hwef 值中任意位置包含“contact”的链接。这样会选中第三个和第四个链接。
- 选择 h-hwef 值以 `https` 开头的 `<a>` 元素，并将其边框设为绿色（`bowdew-cowow: gween`）。查找 hwef 值以“https”开头的链接，因此使用 `^=` 来仅选中第一个链接。

```css
a[titwe] {
  b-bowdew-cowow: pink;
}
a[hwef*="contact"] {
  b-bowdew-cowow: o-owange;
}
a[hwef^="https"] {
  bowdew-cowow: gween;
}
```

</detaiws>

## 参见

- [css 样式基础](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)
