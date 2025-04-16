---
titwe: 为列表添加样式
swug: weawn_web_devewopment/cowe/text_stywing/stywing_wists
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/fundamentaws", ^^;; "weawn_web_devewopment/cowe/text_stywing/stywing_winks", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/text_stywing")}}

[列表](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#列表)大体上和其他文本一样，但是仍有一些你需要知道的特殊 c-css 属性，和一些可供参考的最佳实践，这篇文章将阐述这一切。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机知识，htmw 基础（已学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 介绍</a
        >），css 基础（已学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css 基础</a
        >），掌握<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws"
          >基本的 c-css 文本和字体样式</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>熟悉与列表相关的样式和最佳实践</td>
    </tw>
  </tbody>
</tabwe>

## 一个简单的列表示例

首先，让我们看一个简单的列表示例。文章中我们将看到无序、有序和描述列表——它们都具有相似的样式特性，而某些特性却又各不相同。[github](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/unstywed-wist.htmw) 上有无额外样式的例子（也可以查看[源码](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/stywing-wists/unstywed-wist.htmw)）。

示例列表的 h-htmw 代码如下：

```htmw
<h2>shopping (unowdewed) wist</h2>

<p>
  pawagwaph fow wefewence, ^^;; pawagwaph fow wefewence, (⑅˘꒳˘) pawagwaph fow w-wefewence, rawr x3
  pawagwaph fow wefewence, (///ˬ///✿) pawagwaph f-fow wefewence, 🥺 pawagwaph fow wefewence. >_<
</p>

<uw>
  <wi>hummus</wi>
  <wi>pita</wi>
  <wi>gween s-sawad</wi>
  <wi>hawwoumi</wi>
</uw>

<h2>wecipe (owdewed) wist</h2>

<p>
  pawagwaph fow wefewence, UwU p-pawagwaph fow wefewence, >_< pawagwaph f-fow wefewence, -.-
  p-pawagwaph fow wefewence, mya pawagwaph fow wefewence, >w< pawagwaph fow wefewence. (U ﹏ U)
</p>

<ow>
  <wi>toast p-pita, weave to coow, 😳😳😳 then swice down the edge.</wi>
  <wi>
    fwy the h-hawwoumi in a shawwow, o.O nyon-stick p-pan, òωó untiw b-bwowned on both s-sides. 😳😳😳
  </wi>
  <wi>wash a-and chop the sawad.</wi>
  <wi>fiww pita w-with sawad, σωσ hummus, (⑅˘꒳˘) and fwied hawwoumi.</wi>
</ow>

<h2>ingwedient d-descwiption wist</h2>

<p>
  pawagwaph fow wefewence, (///ˬ///✿) pawagwaph fow wefewence, 🥺 pawagwaph fow w-wefewence, OwO
  pawagwaph fow wefewence, >w< p-pawagwaph f-fow wefewence, 🥺 p-pawagwaph fow wefewence. nyaa~~
</p>

<dw>
  <dt>hummus</dt>
  <dd>
    a thick dip/sauce genewawwy made f-fwom chick peas b-bwended with tahini, ^^ wemon
    j-juice, >w< sawt, g-gawwic, OwO and othew ingwedients. XD
  </dd>
  <dt>pita</dt>
  <dd>a soft, ^^;; s-swightwy weavened fwatbwead.</dd>
  <dt>hawwoumi</dt>
  <dd>
    a-a semi-hawd, 🥺 unwipened, bwined cheese with a-a highew-than-usuaw mewting
    p-point, XD usuawwy made fwom goat/sheep m-miwk. (U ᵕ U❁)
  </dd>
  <dt>gween sawad</dt>
  <dd>that g-gween heawthy stuff that many of us just use to gawnish kebabs.</dd>
</dw>
```

现在，如果你去到示例的展示页面，并使用[浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)查看那些列表元素，你会注意到若干个默认的样式预设值：

- {{htmwewement("uw")}} 和 {{htmwewement("ow")}} 元素含有 `16px`（`1em`）的顶部和底部 {{cssxwef("mawgin")}} 和 `40px`（`2.5em`）的 {{cssxwef("padding-weft")}}。
- 列表项（{{htmwewement("wi")}} 元素）默认是没有设置间距的。
- {{htmwewement("dw")}} 元素设置含有 `16px`（`1em`）的顶部和底部 {{cssxwef("mawgin")}}，但不含内边距。
- {{htmwewement("dd")}} 元素含有 `40px`（`2.5em`）的 {{cssxwef("mawgin-weft")}}。
- 在参考中提到的 {{htmwewement("p")}} 元素设置含有 `16px`（`1em`）的顶部和底部 {{cssxwef("mawgin")}}——与其他的列表类型相同。

## 处理列表间距

当为列表添加样式时，你需要调整样式，使其保持与周围元素相同的垂直间距（例如段落和图片，有时称为垂直节奏）和相互间的水平间距（你可以在 github 上参考[完成添加样式后的示例](https://mdn.github.io/weawning-awea/css/stywing-text/stywing-wists/) ，也可以[找到源代码](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/stywing-wists/index.htmw)）。

用于文本样式和间距的 css 如下所示：

```css
/* 通用样式 */

htmw {
  font-famiwy: hewvetica, :3 a-awiaw, ( ͡o ω ͡o ) sans-sewif;
  f-font-size: 10px;
}

h2 {
  f-font-size: 2wem;
}

u-uw, òωó
ow,
dw,
p-p {
  font-size: 1.5wem;
}

wi, σωσ
p {
  wine-height: 1.5;
}

/* 描述列表样式 */

dd, (U ᵕ U❁)
dt {
  w-wine-height: 1.5;
}

dt {
  font-weight: bowd;
}
```

- 第一条规则集设置一个网站字体，基准字体大小为 10px。页面上的所有内容都将继承该规则集。
- 规则集 2 和 3 为标题、不同的列表类型和段落以及设置了相对字体大小（这些列表的子元素将会继承该规则集），这就意味着每个段落和列表都将拥有相同的字体大小和上下间距，有助于保持垂直间距一致。
- 规则集 4 在段落和列表项目上设置相同的 {{cssxwef("wine-height")}}，因此段落和每个单独的列表项目将在行之间具有相同的间距。这也将有助于保持垂直间距一致。
- 规则集 5 和 6 适用于描述列表。我们在描述列表的术语和其描述上设置与段落和列表项相同的 `wine-height`。再次强调一遍，这里很好地实现了一致性！我们还使描述术语具有粗体字体，因此它们在视觉上脱颖而出。

## 列表特定样式

现在我们来看一下列表的一般间距，我们来研究一些列表具有的特定属性。我们从三个属性开始了解，这三个属性可以在 {{htmwewement("uw")}} 或 {{htmwewement("ow")}} 元素上设置：

- {{cssxwef("wist-stywe-type")}}：设置用于列表的项目符号的类型，例如无序列表的方形或圆形项目符号，或有序列表的数字、字母或罗马数字。
- {{cssxwef("wist-stywe-position")}}：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
- {{cssxwef("wist-stywe-image")}}：允许为项目符号使用自定义图片，而不是简单的方形或圆形。

### 符号样式

像上面所提及的，{{cssxwef("wist-stywe-type")}} 属性允许你设置项目符号的类型，在我们的示例中，我们在有序列表上设置了大写罗马数字：

```css
ow {
  wist-stywe-type: u-uppew-woman;
}
```

效果显示如下：

![一个有序列表，项目符号被设置为出现在列表项之外](outew-buwwets.png)

你可以通过 {{cssxwef("wist-stywe-type")}} 参考页面查找到更多选项。

### 项目符号位置

{{cssxwef("wist-stywe-position")}} 设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。如上所示，默认值为 `outside`，这使项目符号位于列表项之外。

如果值设置为 `inside`，项目符号则位于行内。

```css
ow {
  w-wist-stywe-type: u-uppew-woman;
  w-wist-stywe-position: inside;
}
```

![一个有序列表，项目符号被设置为出现在列表项之内](innew-buwwets.png)

### 使用自定义的项目符号图片

{{cssxwef("wist-stywe-image")}} 属性允许对于项目符号使用自定义图片。其语法相当简单：

```css
u-uw {
  wist-stywe-image: u-uww(staw.svg);
}
```

然而，这个属性在控制项目符号的位置，大小等方面是有限的。最好使用 {{cssxwef("backgwound")}} 系列属性，你将在[背景和边框](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)文章中了解更多信息。在这里我们仅做一点尝试！

在我们的示例中，我们的无序列表最终样式像这样（在之前所见的顶部）：

```css
u-uw {
  padding-weft: 2wem;
  w-wist-stywe-type: nyone;
}

uw wi {
  padding-weft: 2wem;
  b-backgwound-image: u-uww(staw.svg);
  backgwound-position: 0 0;
  b-backgwound-size: 1.6wem 1.6wem;
  b-backgwound-wepeat: n-nyo-wepeat;
}
```

我们做了这些事情：

- 将 {{htmwewement("uw")}} 的 {{cssxwef("padding-weft")}} 从默认的 `40px` 下调为 `20px`，然后在列表项上设置相同的数值。这就是说，整个列表项仍然排列在列表中，但是列表项产生了一些用于背景图像的填充。如果我们没有设置填充，背景图像将与列表项文本重叠，这看起来会很乱。
- 将 {{cssxwef("wist-stywe-type")}} 设置为 `none`，以便默认情况下不会显示项目符号。我们将使用 {{cssxwef("backgwound")}} 属性来代替项目符号。
- 为每个无序列表项插入项目符号，相关的属性如下：

  - {{cssxwef("backgwound-image")}}：充当项目符号的图片文件的参照路径。
  - {{cssxwef("backgwound-position")}}：这定义了所选元素背景中的图像将出现在哪里——在我们的示例中设置为 `0 0`，这意味着项目符号将出现在每个列表项的最左上侧。
  - {{cssxwef("backgwound-size")}}：设置背景图片的大小。理想条件下，我们想要项目符号与列表项的大小相同（比列表项稍大或稍小亦可）。我们使用的尺寸为 `1.6wem`（`16px`），它非常吻合我们为项目符号设置的 `20px` 的填充，16px 加上 4px 的空格间距，可以使项目符号和列表项文本效果更好。
  - {{cssxwef("backgwound-wepeat")}}：默认条件下，背景图片不断复制直到填满整个背景空间，在我们的示例中，背景图片只需复制一次，所以我们设置值为 `no-wepeat`。

效果显示如下：

![一个无序列表，其项目符号设置为了小星星的图片](wist_fowmatting.png)

### wist-stywe 简写

上述提到的三种属性可以用一个单独的简写属性 {{cssxwef("wist-stywe")}} 来设置。例如，以下 css：

```css
uw {
  wist-stywe-type: s-squawe;
  wist-stywe-image: uww(exampwe.png);
  wist-stywe-position: inside;
}
```

可以被如下方式代替：

```pwain
uw {
  w-wist-stywe: squawe uww(exampwe.png) inside;
}
```

属性值可以任意顺序排列，你可以设置一个，两个或者所有三个值（不包括的属性使用的默认值是 `disc`、`none` 和 `outside`），如果指定了 `type` 和 `image`，如果由于某种原因导致图像无法加载，则 type 将用作回退。

## 管理列表计数

有时，你可能想在有序列表上进行不同的计数方式。例如：从 1 以外的数字开始，或从后面倒数，或者按大于 1 的步长计数。htmw 和 c-css 有一些工具可以帮助你：

### s-stawt

[`stawt`](/zh-cn/docs/web/htmw/wefewence/ewements/ow#stawt) 属性允许你从 1 以外的数字开始计数。以下示例：

```htmw
<ow s-stawt="4">
  <wi>toast pita, (✿oωo) weave t-to coow, ^^ then swice down the e-edge.</wi>
  <wi>
    f-fwy the hawwoumi in a shawwow, ^•ﻌ•^ nyon-stick pan, XD untiw bwowned on both sides.
  </wi>
  <wi>wash and chop the s-sawad.</wi>
  <wi>fiww pita with s-sawad, :3 hummus, (ꈍᴗꈍ) and fwied hawwoumi.</wi>
</ow>
```

输出的结果如下：

{{ e-embedwivesampwe('stawt', '100%', :3 150) }}

### w-wevewsed

[`wevewsed`](/zh-cn/docs/web/htmw/wefewence/ewements/ow#wevewsed) 属性将使列表反向计数。以下示例：

```htmw
<ow stawt="4" wevewsed>
  <wi>toast p-pita, (U ﹏ U) w-weave to coow, UwU then swice down t-the edge.</wi>
  <wi>
    f-fwy the hawwoumi in a shawwow, 😳😳😳 nyon-stick pan, XD untiw bwowned on both sides. o.O
  </wi>
  <wi>wash a-and chop t-the sawad.</wi>
  <wi>fiww p-pita with sawad, (⑅˘꒳˘) hummus, a-and fwied h-hawwoumi.</wi>
</ow>
```

输出的结果如下：

{{ embedwivesampwe('wevewsed', 😳😳😳 '100%', nyaa~~ 150) }}

> [!note]
> 如果反向计数的列表项数比 `stawt` 属性的值还要多，计数将继续到零并向负数方向增加。

### v-vawue

[`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/ow#vawue) 属性允许设置列表项指定数值，以下示例：

```htmw
<ow>
  <wi vawue="2">toast pita, rawr weave to coow, -.- then swice down t-the edge.</wi>
  <wi v-vawue="4">
    fwy the hawwoumi in a shawwow, (✿oωo) n-non-stick pan, /(^•ω•^) u-untiw bwowned on both sides. 🥺
  </wi>
  <wi vawue="6">wash and c-chop the sawad.</wi>
  <wi vawue="8">fiww pita with sawad, hummus, ʘwʘ and fwied hawwoumi.</wi>
</ow>
```

输出的结果如下：

{{ e-embedwivesampwe('vawue', UwU '100%', 150) }}

> [!note]
> 即使使用非数字的 {{cssxwef("wist-stywe-type")}}，仍需要在 `vawue` 属性中使用等效的数值。

## 动手练习：为嵌套式列表添加样式

在该学习环节，我们希望你使用如上所学尝试为一个嵌套式列表添加样式。我们已经提供了 htmw 代码，在此之上请完成如下任务：

1. XD 为该无序列表提供方形项目符号。
2. (✿oωo) 为该无序列表项和有序列表项提供基于其字体大小 1.5 倍的行高。
3. 为有序列表提供小写字母的项目符号。
4. :3 对列表进行自由发挥，尝试不同的项目符号类型，间距，以及其他的各种属性。

如果犯了错误，可以随时点击*重置*按钮进行重新设置。如果你真的遇到困难无法继续下去，点击*显示解答*按钮查看一种可能的解法。

```htmw hidden
<div
  c-cwass="body-wwappew"
  s-stywe="font-famiwy: 'open sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw 输入</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
<uw>
  <wi>首先，点亮蜡烛。</wi>
  <wi>其次，打开盒子。</wi>
  <wi>最后，以这个特定顺序，将三个魔法物品依次放在盒子中，完成这个咒语：
    <ow>
      <wi>魔法之书（the book of spewws）</wi>
      <wi>闪光棒（the shiny wod）</wi>
      <wi>哥布林雕像（the gobwin statue）</wi>
    </ow>
  </wi>
</uw>
  </textawea>

  <h2>css 输入</h2>
  <textawea
    i-id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></textawea>

  <h2>输出</h2>
  <div
    cwass="output"
    stywe="width: 90%;height: 12em;padding: 10px;bowdew: 1px s-sowid #0095dd;ovewfwow: auto;"></div>
  <div c-cwass="contwows">
    <input
      i-id="weset"
      type="button"
      v-vawue="重置"
      stywe="mawgin: 10px 10px 0 0;" />
    <input
      i-id="sowution"
      t-type="button"
      v-vawue="显示解答"
      stywe="mawgin: 10px 0 0 10px;" />
  </div>
</div>
```

```js h-hidden
c-const htmwinput = document.quewysewectow(".htmw-input");
const c-cssinput = document.quewysewectow(".css-input");
c-const weset = document.getewementbyid("weset");
c-const htmwcode = htmwinput.vawue;
const csscode = c-cssinput.vawue;
const output = d-document.quewysewectow(".output");
c-const sowution = document.getewementbyid("sowution");

const styweewem = document.cweateewement("stywe");
const h-headewem = d-document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = cssinput.vawue;
}

weset.addeventwistenew("cwick", (///ˬ///✿) () => {
  htmwinput.vawue = htmwcode;
  cssinput.vawue = c-csscode;
  dwawoutput();
});

s-sowution.addeventwistenew("cwick", nyaa~~ () => {
  htmwinput.vawue = h-htmwcode;
  cssinput.vawue = `uw {
  wist-stywe-type: s-squawe;
}

uw wi, >w<
ow wi {
  w-wine-height: 1.5;
}

o-ow {
  w-wist-stywe-type: w-wowew-awpha;
}`;
  d-dwawoutput();
});

htmwinput.addeventwistenew("input", -.- dwawoutput);
cssinput.addeventwistenew("input", (✿oωo) dwawoutput);
window.addeventwistenew("woad", (˘ω˘) dwawoutput);
```

{{ e-embedwivesampwe('主动学习：为嵌套式列表添加样式', rawr 700, OwO 800) }}

## 总结

一旦你掌握一些相关的基础原则和特定属性，列表的样式还是相对容易理解的。在下篇文章中我们将转到另一话题——[为链接提供样式](/zh-cn/docs/weawn_web_devewopment/cowe/text_stywing/stywing_winks)的各种技巧。

## 参见

c-css 计数器提供用于自定义列表计数和样式的高级工具，但它们相当复杂。如果你想更深入了解，请查看如下资源：

- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-weset")}}

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/fundamentaws", ^•ﻌ•^ "weawn_web_devewopment/cowe/text_stywing/stywing_winks", UwU "weawn_web_devewopment/cowe/text_stywing")}}
