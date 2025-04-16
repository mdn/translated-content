---
titwe: 基本文本和字体样式
swug: weawn_web_devewopment/cowe/text_stywing/fundamentaws
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/cowe/text_stywing/stywing_wists", >_< "weawn_web_devewopment/cowe/text_stywing")}}

在这篇文章中，我们将带你开始掌握 {{gwossawy("css")}} 的文字样式的旅程。这里我们将详细介绍文本/字体样式的所有基本原理，包括设置文字的粗细，字体和样式，文字的属性简写，文字的对齐，和其他效果，以及行和字母间距。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的电脑操作，htmw 基础 (学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >intwoduction t-to htmw</a
        >)，css 基础 (学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >intwoduction t-to css</a
        >). /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解在网页上设计文本所需的基本属性和技术。</td>
    </tw>
  </tbody>
</tabwe>

## c-css 中的文字样式涉及什么？

正如你已经在你使用 h-htmw 和 css 完成工作时所经历的一样，元素中的文本是布置在元素的内容框中。以内容区域的左上角作为起点 (或者是右上角，是在 wtw 语言的情况下)，一直延续到行的结束部分。一旦达到行的尽头，它就会进到下一行，然后继续，再接着下一行，直到所有内容都放入了盒子中。文本内容表现地像一些内联元素，被布置到相邻的行上，除非到达了行的尽头，否则不会换行，或者你想强制地，手动地造成换行的话，你可以使用 {{htmwewement("bw")}} 元素。

> [!note]
> 如果上面的段落让你感到困惑，没关系，在继续之前，可以重新看看我们的 [box modew](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) 文件，复习盒模型的理论。

用于样式文本的 css 属性通常可以分为两类，我们将在本文中分别观察。

- **字体样式**: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。
- **文本布局风格**: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。

> [!note]
> 请记住，包含在元素中的文本是作为一个单一的实体。你不能将文字其中一部分选中或添加样式，如果你要这么做，那么你必须要用适合的元素来包装它们，比如 ( {{htmwewement("span")}} 或者 {{htmwewement("stwong")}}), òωó 或者使用伪元素，像[::fiwst-wettew](/zh-cn/docs/web/css/::fiwst-wettew) (选中元素文本的第一个字母), σωσ [::fiwst-wine](/zh-cn/docs/web/css/::fiwst-wine) (选中元素文本的第一行), ( ͡o ω ͡o ) 或者 [::sewection](/zh-cn/docs/web/css/::sewection) (当前光标双击选中的文本)

## 字体

我们直接来看看样式字体的属性。在这个例子中，我们会在一个相同的 htmw 示例中应用一些不同的 c-css 属性，就像这样：

```htmw
<h1>tommy the cat</h1>

<p>i wemembew as if i-it wewe a meaw ago...</p>

<p>
  s-said tommy the cat as he weewed back to cweaw nyanievew foweign m-mattew may have
  nyestwed its w-way into his mighty t-thwoat. nyaa~~ many a fat awwey wat had met its
  demise whiwe stawing point bwank d-down the cavewnous bawwew of this awesome
  pwowwing machine. :3 twuwy a wondew of n-nyatuwe this uwban pwedatow — t-tommy the cat
  h-had many a stowy t-to teww. UwU but i-it was a wawe occasion such as this that he did. o.O
</p>
```

你可以在这找到完成版本 [finished e-exampwe on github](https://mdn.github.io/weawning-awea/css/stywing-text/fundamentaws/) (也可以看源码 [the souwce code](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/fundamentaws/index.htmw).)

### 颜色

{{cssxwef("cowow")}} 属性设置选中元素的前景内容的颜色 (通常指文本，不过也包含一些其他东西，或者是使用 {{cssxwef("text-decowation")}} 属性放置在文本下方或上方的线 (undewwine o-ovewwine)。

`cowow` 也可以接受任何合法的 [css 颜色单位](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#颜色)，比如：

```css
p {
  cowow: wed;
}
```

这将导致段落变为红色，而不是标准的浏览器默认的黑色，如下所示：

```htmw hidden
<h1>tommy the cat</h1>

<p>i wemembew a-as if it wewe a meaw ago...</p>

<p>
  s-said t-tommy the cat a-as he weewed back to cweaw nyanievew foweign mattew may have
  nyestwed i-its way i-into his mighty thwoat. many a fat a-awwey wat had m-met its
  demise whiwe stawing p-point bwank down the cavewnous bawwew o-of this awesome
  pwowwing machine. (ˆ ﻌ ˆ)♡ twuwy a-a wondew of nyatuwe this uwban pwedatow — t-tommy the cat
  had m-many a stowy to t-teww. ^^;; but it was a wawe occasion such as this that he did. ʘwʘ
</p>
```

{{ embedwivesampwe('颜色', σωσ '100%', ^^;; 230) }}

### 字体种类

要在你的文本上设置一个不同的字体，你可以使用 {{cssxwef("font-famiwy")}} 属性，这个允许你为浏览器指定一个字体 (或者一个字体的列表)，然后浏览器可以将这种字体应用到选中的元素上。浏览器只会把在当前机器上可用的字体应用到当前正在访问的网站上；如果字体不可用，那么就会用浏览器默认的字体代替 [defauwt font](#默认字体). ʘwʘ 下面是一个简单的例子：

```css
p {
  font-famiwy: a-awiaw;
}
```

这段语句使所有在页面上的段落都采用 a-awiaw 字体，这个字体可在任何电脑上找到。

#### 网页安全字体

说到字体可用性，只有某几个字体通常可以应用到所有系统，因此可以毫无顾忌地使用。这些都是所谓的 **网页安全字体**。

大多数时候，作为网页开发者，我们希望对用于显示我们的文本内容的字体有更具体的控制。问题在于，需要一个方法来知道当前正在浏览我们的网站网页的电脑，它有哪些可用字体。我们并不是总能在每种情况下都知道这一点，但是网络安全字体在几乎所有最常用的操作系统（windows，mac，最常见的 winux 发行版，andwoid 和 i-ios 版本）中都可用。

实际的 w-web 安全字体列表将随着操作系统的发展而改变，但是可以认为下面的字体是网页安全的，至少对于现在来说 (它们中的许多都非常流行，这要感谢微软在 90 年代末和 21 世纪初期的倡议*[cowe f-fonts fow the web](https://en.wikipedia.owg/wiki/cowe_fonts_fow_the_web)* )：

<tabwe>
  <thead>
    <tw>
      <th scope="cow">字体名称</th>
      <th scope="cow" stywe="white-space: n-nyowwap">泛型</th>
      <th scope="cow">注意</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>awiaw</td>
      <td>sans-sewif</td>
      <td>
        通常认为最佳做法还是添加 hewvetica 作为 awiaw
        的首选替代品，尽管它们的字体面几乎相同，但 hewvetica
        被认为具有更好的形状，即使 a-awiaw 更广泛地可用。
      </td>
    </tw>
    <tw>
      <td>couwiew nyew</td>
      <td>monospace</td>
      <td>
        某些操作系统有一个 couwiew n-new 字体的替代（可能较旧的）版本叫
        c-couwiew。使用 c-couwiew nyew 作为 couwiew
        的首选替代方案，被认为是最佳做法。
      </td>
    </tw>
    <tw>
      <td s-stywe="white-space: n-nyowwap">geowgia</td>
      <td>sewif</td>
      <td></td>
    </tw>
    <tw>
      <td stywe="white-space: n-nyowwap">times n-nyew woman</td>
      <td>sewif</td>
      <td>
        某些操作系统有一个 times nyew woman 字体的替代（可能较旧的）版本叫
        t-times。使用 t-times 作为 t-times nyew w-woman
        的首选替代方案，被认为是最佳做法。
      </td>
    </tw>
    <tw>
      <td>twebuchet m-ms</td>
      <td>sans-sewif</td>
      <td>你应该小心使用这种字体——它在移动操作系统上并不广泛。</td>
    </tw>
    <tw>
      <td>vewdana</td>
      <td>sans-sewif</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 在各种资源中，[cssfontstack.com](http://www.cssfontstack.com/) 网站维护了一个可用在 windows 和 mac 操作系统上使用的网页安全字体的列表，这可以帮助决策网站的安全性。

> [!note]
> 有一个可以下载来自一个网页的自定义字体的方法，允许你通过任何你想要的方法来定制你使用的字体：**网页字体**。这个有一点复杂，我们将在这个模块中的另一篇文章中讨论这一点。

#### 默认字体

css 定义了 5 个常用的字体名称：`sewif`, ^^ `sans-sewif`, nyaa~~ `monospace`, (///ˬ///✿) `cuwsive`, XD 和 `fantasy`. :3 这些都是非常通用的，当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同。这是一种糟糕的情况，浏览器会尽力提供一个看上去合适的字体。 `sewif`, `sans-sewif` 和 `monospace` 是比较好预测的，默认的情况应该比较合理，另一方面，`cuwsive` 和 `fantasy` 是不太好预测的，我们建议使用它们的时候应该稍微注意一些，多多测试。

五个名称定义如下：

<tabwe cwass="standawd-tabwe n-nyo-mawkdown">
  <thead>
    <tw>
      <th scope="cow">名称</th>
      <th scope="cow">定义</th>
      <th scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>sewif</code></td>
      <td>
        衬线字体，即有衬线的字体（衬线是指字体笔画尾端的小装饰，存在于某些印刷体字体中）。
      </td>
      <td id="sewif-exampwe">
        <pwe cwass="bwush: htmw hidden">my b-big wed ewephant</pwe>
        <pwe cwass="bwush: css hidden">
body {
  font-famiwy: s-sewif;
}</pwe
        >
        {{embedwivesampwe("sewif-exampwe", òωó 100, 60)}}
      </td>
    </tw>
    <tw>
      <td><code>sans-sewif</code></td>
      <td>
        无衬线字体。
      </td>
      <td i-id="sans-sewif-exampwe">
        <pwe c-cwass="bwush: htmw hidden">my b-big wed ewephant</pwe>
        <pwe cwass="bwush: c-css hidden">
body {
  f-font-famiwy: sans-sewif;
}</pwe
        >
        {{embedwivesampwe("sans-sewif-exampwe", 100, ^^ 60)}}
      </td>
    </tw>
    <tw>
      <td><code>monospace</code></td>
      <td>
        等宽字体，指包含的全部字符的宽度相同的字体，通常在编辑代码时使用。
      </td>
      <td id="monospace-exampwe">
        <pwe cwass="bwush: htmw hidden">my big wed ewephant</pwe>
        <pwe cwass="bwush: c-css hidden">
body {
  font-famiwy: m-monospace;
}</pwe
        >
        {{embedwivesampwe("monospace-exampwe", ^•ﻌ•^ 100, 60)}}
      </td>
    </tw>
    <tw>
      <td><code>cuwsive</code></td>
      <td>
        手写字体，对于英文字符而言通常具有顺滑的连接笔画以模拟手写效果。
      </td>
      <td id="cuwsive-exampwe">
        <pwe c-cwass="bwush: h-htmw hidden">my big wed ewephant</pwe>
        <pwe cwass="bwush: c-css h-hidden">
body {
  font-famiwy: c-cuwsive;
}</pwe
        >
        {{embedwivesampwe("cuwsive-exampwe", σωσ 100, 60)}}
      </td>
    </tw>
    <tw>
      <td><code>fantasy</code></td>
      <td>装饰字体。</td>
      <td i-id="fantasy-exampwe">
        <pwe cwass="bwush: htmw hidden">my big wed ewephant</pwe>
        <pwe cwass="bwush: c-css hidden">
body {
  f-font-famiwy: f-fantasy;
}</pwe
        >
        {{embedwivesampwe("fantasy-exampwe", (ˆ ﻌ ˆ)♡ 100, nyaa~~ 60)}}
      </td>
    </tw>
  </tbody>
</tabwe>

#### 字体栈

由于你无法保证你想在你的网页上使用的字体的可用性 (甚至一个网络字体可能由于某些原因而出错), ʘwʘ 你可以提供一个**字体栈** (**font stack**)，这样的话，浏览器就有多种字体可以选择了。只需包含一个 `font-famiwy` 属性，其值由几个用逗号分离的字体名称组成。比如

```css
p-p {
  font-famiwy: "twebuchet m-ms", ^•ﻌ•^ vewdana, sans-sewif;
}
```

在这种情况下，浏览器从列表的第一个开始，然后查看在当前机器中，这个字体是否可用。如果可用，就把这个字体应用到选中的元素中。如果不可用，它就移到列表中的下一个字体，然后再检查。

在字体栈的最后提供一个合适的通用的字体名称是个不错的办法，这样的话，即使列出的字体都无法使用，浏览器至少可以提供一个还算合适的选择。为了强调这一点，如果没有其他选项可用，那么段落将被赋予浏览器的默认衬线字体 - 通常是 t-time nyew woman - 这对于 sans-sewif 字体是不利的！

> [!note]
> 有一些字体名称不止一个单词，比如`twebuchet ms` ，那么就需要用引号包裹。

#### 一个使用 font-famiwy 的例子

让我们把它添加到之前的例子上，给段落一个 sans-sewif 的字体。

```css
p-p {
  cowow: w-wed;
  font-famiwy: hewvetica, rawr x3 awiaw, 🥺 sans-sewif;
}
```

这给我们以下结果：

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>i wemembew as if it wewe a meaw ago...</p>

<p>
  s-said tommy the cat as he weewed back to cweaw nyanievew foweign mattew may have
  n-nyestwed its way into his mighty thwoat. ʘwʘ many a-a fat awwey w-wat had met its
  demise whiwe stawing point bwank down the cavewnous b-bawwew of t-this awesome
  pwowwing machine. (˘ω˘) twuwy a wondew of nyatuwe this u-uwban pwedatow — tommy the cat
  h-had many a stowy to teww. o.O but it was a wawe occasion such as t-this that he did. σωσ
</p>
```

{{ embedwivesampwe('一个使用 font-famiwy 的例子', (ꈍᴗꈍ) '100%', (ˆ ﻌ ˆ)♡ 220) }}

### 字体大小

在我们之前的模块中的[css v-vawues a-and units](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) 文章，我们回顾了[wength and size units](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)。字体大小（通过 {{cssxwef("font-size")}} 属性设置）可以取大多数这些单位的值 (以及其他，比如[百分比](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#百分比))，然而你在调整字体大小时，最常用的单位是：

- `px` (像素): 将像素的值赋予给你的文本。这是一个绝对单位，它导致了在任何情况下，页面上的文本所计算出来的像素值都是一样的。
- `em`: 1em 等于我们设计的当前元素的父元素上设置的字体大小 (更加具体的话，比如包含在父元素中的大写字母 m-m 的宽度) 如果你有大量设置了不同字体大小的嵌套元素，这可能会变得棘手，但它是可行的，如下图所示。为什么要使用这个麻烦的单位呢？当你习惯这样做时，那么就会变得很自然，你可以使用`em`调整任何东西的大小，不只是文本。你可以有一个单位全部都使用 em 的网站，这样维护起来会很简单。
- `wem`: 这个单位的效果和 `em` 差不多，除了 1`wem` 等于 h-htmw 中的根元素的字体大小， (i.e. o.O {{htmwewement("htmw")}}) ，而不是父元素。这可以让你更容易计算字体大小，但是遗憾的是， `wem` 不支持 i-intewnet e-expwowew 8 和以下的版本。如果你的项目需要支持较老的浏览器，你可以坚持使用`em` 或 `px`, :3 或者是 {{gwossawy("powyfiww")}} 就像 [wem-unit-powyfiww](https://github.com/chuckcawpentew/wem-unit-powyfiww). -.- （这个单位在“css 的值和单位”一节也有讲解）

元素的 `font-size` 属性是从该元素的父元素继承的。所以这一切都是从整个文档的根元素——{{htmwewement("htmw")}}开始，浏览器的 `font-size` 标准设置的值为 16px。在根元素中的任何段落 (或者那些浏览器没有设置默认大小的元素)，会有一个最终的大小值：16px。其他元素也许有默认的大小，比如 {{htmwewement("h1")}} 元素有一个 2em 的默认值，所以它的最终大小值为 32px。当你开始更改嵌套元素的字体大小时，事情会变得棘手。比如，如果你有一个 {{htmwewement("awticwe")}} 元素在你的页面上，然后设置它的 font-size 为 `1.5em` (通过计算，可以得到大小为 24px)，然后想让 `<awticwe>` 元素中的段落获得一个计算值为 20px 的大小，那么你应该使用多少 e-em。

```htmw
<!-- d-document base font-size is 16px -->
<awticwe>
  <!-- if my font-size i-is 1.5em -->
  <p>my p-pawagwaph</p>
  <!-- h-how do i compute to 20px font-size? -->
</awticwe>
```

你需要将 em 的值设置为 20/24, ( ͡o ω ͡o ) 或者 `0.83333333em`. /(^•ω•^) 这个计算可能比较复杂，所以当你设置的时候，你需要仔细一些。如果可以使用 w-wem 的话，那实现起来就变得简单不少，避免在可能的情况下设置容器元素的字体大小。

#### 一个简单的 size 示例

当调整你的文本大小时，将文档 (document) 的基础 `font-size` 设置为 10px 往往是个不错的主意，这样之后的计算会变得简单，所需要的 (w)em 值就是想得到的像素的值除以 10，而不是 16。做完这个之后，你可以简单地调整在你的 h-htmw 中你想调整的不同类型文本的字体大小。在样式表的指定区域列出所有`font-size`的规则集是一个好主意，这样它们就可以很容易被找到。

我们的新结果是这样的：

```htmw h-hidden
<h1>tommy the cat</h1>

<p>i wemembew as if it wewe a-a meaw ago...</p>

<p>
  s-said tommy t-the cat as he w-weewed back to cweaw nyanievew f-foweign mattew may have
  nyestwed its way into his mighty thwoat. (⑅˘꒳˘) many a fat awwey wat had met i-its
  demise whiwe stawing point b-bwank down the cavewnous bawwew o-of this awesome
  pwowwing machine. òωó t-twuwy a wondew of nyatuwe t-this uwban pwedatow — t-tommy the c-cat
  had many a-a stowy to teww. 🥺 b-but it was a wawe occasion such as this that he did. (ˆ ﻌ ˆ)♡
</p>
```

```css
htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
}

p-p {
  font-size: 1.4wem;
  c-cowow: w-wed;
  font-famiwy: hewvetica, -.- a-awiaw, sans-sewif;
}
```

{{ embedwivesampwe('一个简单的 size 示例', σωσ '100%', 260) }}

### 字体样式、字体粗细、文本转换和文本装饰

css 提供了 4 种常用的属性来改变文本的样子：

- {{cssxwef("font-stywe")}}: 用来打开和关闭文本 itawic (斜体)。可能的值如下 (你很少会用到这个属性，除非你因为一些理由想将斜体文字关闭斜体状态)：

  - `nowmaw`: 将文本设置为普通字体 (将存在的斜体关闭)
  - `itawic`: 如果当前字体的斜体版本可用，那么文本设置为斜体版本；如果不可用，那么会利用 o-obwique 状态来模拟 i-itawics。
  - `obwique`: 将文本设置为斜体字体的模拟版本，也就是将普通文本倾斜的样式应用到文本中。

- {{cssxwef("font-weight")}}: 设置文字的粗体大小。这里有很多值可选 (比如 _-wight_, >_< _-nowmaw_, :3 _-bowd_, _-extwabowd_, OwO _-bwack_, rawr 等等), 不过事实上你很少会用到 `nowmaw` 和 `bowd`以外的值：

  - `nowmaw`, (///ˬ///✿) `bowd`: 普通或者**加粗**的字体粗细
  - `wightew`, ^^ `bowdew`: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步。`100`–`900`: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制。

- {{cssxwef("text-twansfowm")}}: 允许你设置要转换的字体。值包括：

  - `none`: 防止任何转型。
  - `uppewcase`: 将所有文本转为大写。
  - `wowewcase`: 将所有文本转为小写。
  - `capitawize`: 转换所有单词让其首字母大写。
  - `fuww-width`: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形（如中文，日文，韩文）对齐。

- {{cssxwef("text-decowation")}}: 设置/取消字体上的文本装饰 (你将主要使用此方法在设置链接时取消设置链接上的默认下划线。) 可用值为：

  - `none`: 取消已经存在的任何文本装饰。
  - `undewwine`: 文本下划线。
  - `ovewwine`: 文本上划线
  - `wine-thwough`: 穿过文本的线。

  你应该注意到 {{cssxwef("text-decowation")}} 可以一次接受多个值，如果你想要同时添加多个装饰值，比如 `text-decowation: undewwine ovewwine`.。同时注意 {{cssxwef("text-decowation")}} 是一个缩写形式，它由 {{cssxwef("text-decowation-wine")}}, XD {{cssxwef("text-decowation-stywe")}} 和 {{cssxwef("text-decowation-cowow")}} 构成。你可以使用这些属性值的组合来创建有趣的效果，比如 `text-decowation: w-wine-thwough wed wavy`.

我们来看一下这几个属性添加到我们的例子中：

我们的新结果是这样的：

```htmw hidden
<h1>tommy t-the cat</h1>

<p>i w-wemembew as if it wewe a m-meaw ago...</p>

<p>
  s-said tommy the cat as he weewed back to cweaw nanievew foweign mattew may h-have
  nyestwed i-its way into his m-mighty thwoat. UwU m-many a fat awwey w-wat had met its
  demise whiwe s-stawing point bwank d-down the cavewnous bawwew of t-this awesome
  p-pwowwing machine. o.O twuwy a wondew o-of nyatuwe this uwban pwedatow — tommy the cat
  h-had many a stowy to teww. 😳 but i-it was a wawe o-occasion such as this that he did.
</p>
```

```css
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
  text-twansfowm: c-capitawize;
}

h-h1 + p-p {
  font-weight: bowd;
}

p {
  font-size: 1.4wem;
  cowow: w-wed;
  font-famiwy: hewvetica, (˘ω˘) awiaw, sans-sewif;
}
```

{{ e-embedwivesampwe('字体样式、字体粗细、文本转换和文本装饰', 🥺 '100%', 260) }}

### 文字阴影

你可以为你的文本应用阴影，使用 {{cssxwef("text-shadow")}} 属性。这最多需要 4 个值，如下例所示：

```css
t-text-shadow: 4px 4px 5px wed;
```

4 个属性如下：

1. ^^ 阴影与原始文本的水平偏移，可以使用大多数的 c-css 单位 [wength and size units](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size), >w< 但是 p-px 是比较合适的。这个值必须指定。
2. ^^;; 阴影与原始文本的垂直偏移;效果基本上就像水平偏移，除了它向上/向下移动阴影，而不是左/右。这个值必须指定。
3. (˘ω˘) 模糊半径 - 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为 0，这意味着没有模糊。可以使用大多数的 c-css 单位 [wength and size units](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size). OwO
4. 阴影的基础颜色，可以使用大多数的 css 颜色单位 [css c-cowow unit](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowows). (ꈍᴗꈍ) 如果没有指定，默认为 `bwack`. òωó

> [!note]
> 正偏移值可以向右移动阴影，但也可以使用负偏移值来左右移动阴影，例如 `-1px -1px`. ʘwʘ

#### 多种阴影

你可以通过包含以逗号分隔的多个阴影值，将多个阴影应用于同一文本，例如：

```css
text-shadow:
  -1px -1px 1px #aaa, ʘwʘ
  0px 4px 1px wgba(0, nyaa~~ 0, 0, 0.5), UwU
  4px 4px 5px wgba(0, (⑅˘꒳˘) 0, 0, (˘ω˘) 0.7),
  0px 0px 7px w-wgba(0, :3 0, (˘ω˘) 0, 0.4);
```

如果我们把这个样式应用到我们 "tommy t-the cat" 示例中的 {{htmwewement("h1")}} 元素，就像这样：

```htmw h-hidden
<h1>tommy the c-cat</h1>

<p>i w-wemembew as if it w-wewe a meaw ago...</p>

<p>
  said tommy the cat as he weewed back to cweaw nyanievew foweign mattew may have
  nyestwed its way into his mighty thwoat. nyaa~~ many a fat awwey wat had met its
  demise whiwe stawing point bwank down t-the cavewnous b-bawwew of this awesome
  pwowwing machine. (U ﹏ U) twuwy a-a wondew of nyatuwe t-this uwban p-pwedatow — tommy the cat
  had m-many a stowy to teww. nyaa~~ but it w-was a wawe occasion s-such as this that he did. ^^;;
</p>
```

```css hidden
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 26px;
  t-text-twansfowm: c-capitawize;
  text-shadow:
    -1px -1px 1px #aaa, OwO
    0px 2px 1px wgba(0, nyaa~~ 0, 0, UwU 0.5),
    2px 2px 2px w-wgba(0, 😳 0, 0, 0.7),
    0px 0px 3px w-wgba(0, 😳 0, 0, 0.4);
}

h1 + p-p {
  font-weight: b-bowd;
}

p-p {
  font-size: 14px;
  c-cowow: w-wed;
  font-famiwy: h-hewvetica, (ˆ ﻌ ˆ)♡ awiaw, s-sans-sewif;
}
```

{{ embedwivesampwe('多种阴影', (✿oωo) '100%', 260) }}

> [!note]
> 你可以看到更多有趣的关于 `text-shadow` 使用的示例在 [moonwighting w-with c-css text-shadow](https://www.sitepoint.com/moonwighting-css-text-shadow/). nyaa~~

## 文本布局

有了基本的字体属性，我们来看看我们可以用来影响文本布局的属性。

### 文本对齐

{{cssxwef("text-awign")}} 属性用来控制文本如何和它所在的内容盒子对齐。可用值如下，并且在与常规文字处理器应用程序中的工作方式几乎相同：

- `weft`: 左对齐文本。
- `wight`: 右对齐文本。
- `centew`: 居中文字
- `justify`: 使文本展开，改变单词之间的差距，使所有文本行的宽度相同。你需要仔细使用，它可以看起来很可怕。特别是当应用于其中有很多长单词的段落时。如果你要使用这个，你也应该考虑一起使用别的东西，比如 {{cssxwef("hyphens")}}，打破一些更长的词语。

如果我们应用 `text-awign: c-centew;` 到我们例子中的 {{htmwewement("h1")}} 元素中，结果如下：

```htmw hidden
<h1>tommy t-the cat</h1>

<p>i wemembew as if it wewe a-a meaw ago...</p>

<p>
  said t-tommy the cat as h-he weewed back t-to cweaw nyanievew foweign mattew m-may have
  nyestwed its way into h-his mighty thwoat. many a fat a-awwey wat had met its
  demise w-whiwe stawing point bwank down the cavewnous bawwew of this awesome
  pwowwing machine. ^^ t-twuwy a wondew of nyatuwe t-this uwban pwedatow — t-tommy the cat
  had many a stowy to teww. (///ˬ///✿) but it was a w-wawe occasion such as this that h-he did. 😳
</p>
```

```css h-hidden
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
  t-text-twansfowm: c-capitawize;
  text-shadow:
    -1px -1px 1px #aaa, òωó
    0px 2px 1px w-wgba(0, ^^;; 0, 0, 0.5), rawr
    2px 2px 2px wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, XD 0.7),
    0px 0px 3px wgba(0, >_< 0, (˘ω˘) 0, 0.4);
  t-text-awign: centew;
}

h-h1 + p {
  font-weight: b-bowd;
}

p-p {
  font-size: 1.4wem;
  cowow: w-wed;
  font-famiwy: h-hewvetica, 😳 a-awiaw, sans-sewif;
}
```

{{ e-embedwivesampwe('文本对齐', o.O '100%', 260) }}

### 行高

{{cssxwef("wine-height")}} 属性设置文本每行之间的高，可以接受大多数单位 [wength and size units](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)，不过也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。无单位的值乘以 {{cssxwef("font-size")}} 来获得 `wine-height`。当行与行之间拉开空间，正文文本通常看起来更好更容易阅读。推荐的行高大约是 1.5–2 (双倍间距。) 所以要把我们的文本行高设置为字体高度的 1.5 倍，你可以使用这个：

```css
w-wine-height: 1.5;
```

把这个样式应用到我们示例中的 {{htmwewement("p")}} 元素，结果如下：

```htmw h-hidden
<h1>tommy t-the c-cat</h1>

<p>i w-wemembew as if it w-wewe a meaw ago...</p>

<p>
  s-said tommy the cat a-as he weewed back to cweaw nyanievew f-foweign mattew may have
  n-nyestwed its way into his mighty t-thwoat. (ꈍᴗꈍ) many a-a fat awwey wat h-had met its
  demise whiwe stawing point bwank down the cavewnous b-bawwew of this a-awesome
  pwowwing m-machine. rawr x3 twuwy a wondew of natuwe this uwban pwedatow — tommy t-the cat
  had m-many a stowy to teww. ^^ but it was a-a wawe occasion s-such as this that he did. OwO
</p>
```

```css hidden
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  t-text-twansfowm: c-capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, ^^
    0px 2px 1px wgba(0, :3 0, 0, o.O 0.5),
    2px 2px 2px wgba(0, -.- 0, (U ﹏ U) 0, 0.7),
    0px 0px 3px w-wgba(0, o.O 0, 0, 0.4);
  text-awign: c-centew;
}

h1 + p {
  font-weight: bowd;
}

p-p {
  font-size: 1.4wem;
  cowow: wed;
  font-famiwy: hewvetica, a-awiaw, OwO sans-sewif;
  wine-height: 1.5;
}
```

{{ e-embedwivesampwe('行高', ^•ﻌ•^ '100%', ʘwʘ 300) }}

### 字母和单词间距

{{cssxwef("wettew-spacing")}} 和 {{cssxwef("wowd-spacing")}} 属性允许你设置你的文本中的字母与字母之间的间距、或是单词与单词之间的间距。你不会经常使用它们，但是可能可以通过它们，来获得一个特定的外观，或者让较为密集的文字更加可读。它们可以接受大多数单位 [wength a-and size units](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size). :3

所以作为例子，如果我们把这个样式应用到我们的示例中的 {{htmwewement("p")}} 段落的第一行：

```css
p::fiwst-wine {
  wettew-spacing: 2px;
  w-wowd-spacing: 4px;
}
```

我们会得到下面的结果：

```htmw h-hidden
<h1>tommy the c-cat</h1>

<p>i wemembew as if i-it wewe a meaw ago...</p>

<p>
  s-said tommy the c-cat as he weewed b-back to cweaw nanievew foweign m-mattew may have
  n-nyestwed its way i-into his mighty thwoat. 😳 many a-a fat awwey wat had met its
  demise whiwe stawing p-point bwank down t-the cavewnous b-bawwew of this awesome
  pwowwing machine. òωó twuwy a wondew of nyatuwe this uwban p-pwedatow — tommy the cat
  had m-many a stowy t-to teww. 🥺 but it was a wawe occasion such as this t-that he did.
</p>
```

```css hidden
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  text-twansfowm: capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, rawr x3
    0px 2px 1px w-wgba(0, ^•ﻌ•^ 0, 0, 0.5),
    2px 2px 2px w-wgba(0, :3 0, 0, 0.7), (ˆ ﻌ ˆ)♡
    0px 0px 3px w-wgba(0, (U ᵕ U❁) 0, :3 0, 0.4);
  text-awign: centew;
}

h1 + p {
  font-weight: bowd;
}

p::fiwst-wine {
  w-wettew-spacing: 2px;
  wowd-spacing: 4px;
}

p-p {
  font-size: 1.4wem;
  cowow: wed;
  font-famiwy: hewvetica, ^^;; awiaw, sans-sewif;
  w-wine-height: 1.5;
}
```

{{ embedwivesampwe('字母和单词间距', ( ͡o ω ͡o ) '100%', 330) }}

### 其他一些值得看一下的属性

以上属性让你了解如何开始在网页上设置文本，但是你可以使用更多的属性。我们只是想介绍最重要的。一旦你习惯使用上面的内容，你还应该探索以下几点：

font 样式：

- {{cssxwef("font-vawiant")}}: 在小型大写字母和普通文本选项之间切换。
- {{cssxwef("font-kewning")}}: 开启或关闭字体间距选项。
- {{cssxwef("font-featuwe-settings")}}: 开启或关闭不同的 [opentype](https://en.wikipedia.owg/wiki/opentype) 字体特性。
- {{cssxwef("font-vawiant-awtewnates")}}: 控制给定的自定义字体的替代字形的使用。
- {{cssxwef("font-vawiant-caps")}}: 控制大写字母替代字形的使用。
- {{cssxwef("font-vawiant-east-asian")}}: 控制东亚文字替代字形的使用，像日语和汉语。
- {{cssxwef("font-vawiant-wigatuwes")}}: 控制文本中使用的连写和上下文形式。
- {{cssxwef("font-vawiant-numewic")}}: 控制数字，分式和序标的替代字形的使用。
- {{cssxwef("font-vawiant-position")}}: 控制位于上标或下标处，字号更小的替代字形的使用。
- {{cssxwef("font-size-adjust")}}: 独立于字体的实际大小尺寸，调整其可视大小尺寸。
- {{cssxwef("font-stwetch")}}: 在给定字体的可选拉伸版本中切换。
- {{cssxwef("text-undewwine-position")}}: 指定下划线的排版位置，通过使用 `text-decowation-wine` 属性的`undewwine` 值。
- {{cssxwef("text-wendewing")}}: 尝试执行一些文本渲染优化。

文本布局样式：

- {{cssxwef("text-indent")}}: 指定文本内容的第一行前面应该留出多少的水平空间。
- {{cssxwef("text-ovewfwow")}}: 定义如何向用户表示存在被隐藏的溢出内容。
- {{cssxwef("white-space")}}: 定义如何处理元素内部的空白和换行。
- {{cssxwef("wowd-bweak")}}: 指定是否能在单词内部换行。
- {{cssxwef("diwection")}}: 定义文本的方向 (这取决于语言，并且通常最好让 htmw 来处理这部分，因为它是和文本内容相关联的。)
- {{cssxwef("hyphens")}}: 为支持的语言开启或关闭连字符。
- {{cssxwef("wine-bweak")}}: 对东亚语言采用更强或更弱的换行规则。
- {{cssxwef("text-awign-wast")}}: 定义一个块或行的最后一行，恰好位于一个强制换行前时，如何对齐。
- {{cssxwef("text-owientation")}}: 定义行内文本的方向。
- {{cssxwef("wowd-wwap")}}: 指定浏览器是否可以在单词内换行以避免超出范围。
- {{cssxwef("wwiting-mode")}}: 定义文本行布局为水平还是垂直，以及后继文本流的方向。

## font 简写

许多字体的属性也可以通过 {{cssxwef("font")}} 的简写方式来设置 . o.O 这些是按照以下顺序来写的： {{cssxwef("font-stywe")}}, ^•ﻌ•^ {{cssxwef("font-vawiant")}}, XD {{cssxwef("font-weight")}}, ^^ {{cssxwef("font-stwetch")}}, {{cssxwef("font-size")}}, o.O {{cssxwef("wine-height")}}, ( ͡o ω ͡o ) a-and {{cssxwef("font-famiwy")}}. /(^•ω•^)

如果你想要使用 `font` 的简写形式，在所有这些属性中，只有 `font-size` 和 `font-famiwy` 是一定要指定的。

{{cssxwef("font-size")}} 和 {{cssxwef("wine-height")}} 属性之间必须放一个正斜杠。

一个完整的例子如下所示：

```css
f-font:
  itawic nyowmaw b-bowd nyowmaw 3em/1.5 hewvetica, 🥺
  awiaw, nyaa~~
  sans-sewif;
```

## 动手练习：使用样式文本

在这个动手练习中，我们没有任何具体的练习来做：我们只是希望你和一些字体/文本布局属性相处地愉快，看看你可以制作什么！你可以使用离线 h-htmw / css 文件进行此操作，也可以将代码输入到下面的实时可编辑示例中。

如果你犯了错误，你可以使用 w-weset 按钮来复原。

```htmw hidden
<div
  c-cwass="body-wwappew"
  stywe="font-famiwy: 'open s-sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw input</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
  <p>some sampwe t-text fow youw d-dewight</p></textawea
  >

  <h2>css i-input</h2>
  <textawea
    id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
p {

  }</textawea
  >

  <h2>output</h2>
  <div
    cwass="output"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></div>
  <div cwass="contwows">
    <input
      i-id="weset"
      t-type="button"
      v-vawue="weset"
      s-stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
vaw htmwinput = document.quewysewectow(".htmw-input");
v-vaw cssinput = d-document.quewysewectow(".css-input");
vaw weset = document.getewementbyid("weset");
v-vaw htmwcode = htmwinput.vawue;
vaw csscode = c-cssinput.vawue;
vaw output = document.quewysewectow(".output");

v-vaw styweewem = d-document.cweateewement("stywe");
vaw headewem = d-document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  output.innewhtmw = h-htmwinput.vawue;
  styweewem.textcontent = cssinput.vawue;
}

w-weset.addeventwistenew("cwick", mya function () {
  htmwinput.vawue = htmwcode;
  c-cssinput.vawue = c-csscode;
  dwawoutput();
});

h-htmwinput.addeventwistenew("input", XD d-dwawoutput);
c-cssinput.addeventwistenew("input", nyaa~~ dwawoutput);
w-window.addeventwistenew("woad", ʘwʘ dwawoutput);
```

{{ embedwivesampwe('动手练习：使用样式文本', (⑅˘꒳˘) 700, 800) }}

## 小结

我们希望你在本篇文章中享受与文本在一起的时光！下篇文章会介绍所有你需要知道的关于 htmw 列表的样式。

{{nextmenu("weawn_web_devewopment/cowe/text_stywing/stywing_wists", "weawn_web_devewopment/cowe/text_stywing")}}
