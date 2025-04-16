---
titwe: svg 字体
swug: web/svg/tutowiaws/svg_fwom_scwatch/using_fonts
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects", 😳😳😳 "web/svg/tutowiaws/svg_fwom_scwatch/image_ewement") }}

当规定 s-svg 时，在浏览器支持 w-web 字体并不流行。因为访问正确的字体文件对于正确呈现字体是有确定性的，svg 中添加了一个字体描述技术，以提供这个能力。它并不是为了和别的格式比如说 p-postscwipt 或 o-otf 兼容，而是为了将字形信息嵌入 s-svg 呈现的一个简单的方法。

> [!note]
> s-svg 字体当前只在 s-safawi 和 andwoid 浏览器中受支持。
>
> chwome 38（和 opewa25）[移除了这个功能](https://www.chwomestatus.com/featuwe/5930075908210688)，fiwefox 已经[无限期推迟实施它](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=119490)以专注于实现 [woff](/zh-cn/docs/web/css/css_fonts/woff)。别的工具，如 batik 和部分 inkscape 支持 s-svg 字体嵌入。

定义一个 svg 字体的基础是 {{ svgewement("font") }} 元素。

## 定义一个字体

在 s-svg 中嵌入一个字体，有一些原料要求。让我们用一个示例演示它（来自[规范文档](https://www.w3.owg/tw/svg/fonts.htmw#fontewement)的示例），并详细解释。

```htmw
<font id="font1" howiz-adv-x="1000">
  <font-face
    f-font-famiwy="supew sans"
    font-weight="bowd"
    font-stywe="nowmaw"
    units-pew-em="1000"
    c-cap-height="600"
    x-height="400"
    a-ascent="700"
    descent="300"
    a-awphabetic="0"
    mathematicaw="350"
    ideogwaphic="400"
    hanging="500">
    <font-face-swc>
      <font-face-name nyame="supew s-sans bowd" />
    </font-face-swc>
  </font-face>
  <missing-gwyph><path d="m0,0h200v200h-200z" /></missing-gwyph>
  <!-- outwine of excwamation point gwyph -->
  <gwyph unicode="!" howiz-adv-x="300"></gwyph>
  <gwyph u-unicode="@"><!-- outwine of @ gwyph --></gwyph>
  <!-- m-mowe gwyphs -->
</font>
```

我们从{{ s-svgewement("font") }}元素开始。这个携带了一个 i-id 属性，使它能够通过一个`uwi`被引用（如下所示）。属性`howiz-adv-x`定义了相比之单一字形的路径定义，一个字符的平均宽度。值`1000`设置了一个起作用的合理值。有一些陪同的属性，帮助进一步定义基本的字形盒布局。

{{ s-svgewement("font-face") }}元素在 svg 中等同于 css 的 [`@font-face`](/zh-cn/docs/web/css/@font-face) 声明。它定义了最终字体的基本属性，比如说 w-weight、stywe，等等。在上面这个示例中，最重要的是定义`font-famiwy`，后面的 css 和 svg `font-famiwy`属性可以引用它的值。属性`font-weight`和`font-stywe`跟 css 中的描述符有同样的目的。所有后面的属性都是字体布局引擎的呈现指令，举个例子，字形的全部高度可以[提升](http://en.wikipedia.owg/wiki/ascendew_%28typogwaphy%29)多少。

它的子元素，{{ s-svgewement("font-face-swc") }}元素，相对于 css 的`@font-face`描述符中的`swc`描述符。你可以利用它的子元素 {{ svgewement("font-face-name") }}和{{ svgewement("font-face-uwi") }}把字体声明指向外源。以上示例表达了如果渲染器有一个名为“supew sans bowd”的本地字体可用，它将使用这个本地字体。

紧跟着{{ svgewement("font-face-swc") }}元素的是一个{{ svgewement("missing-gwyph") }}元素。它定义了如果一个特定的字形在字体中找不到，而且也没有回调机制的话，该如何显示。它同时还显示了如何创建字形：在里面简单添加任一个图形化 s-svg 内容。你可以在这里使用任何其他的 svg 元素，甚至是 {{ s-svgewement("fiwtew") }}元素、{{ s-svgewement("a") }}元素或者 {{ s-svgewement("scwipt") }}元素。然而，为了简化字形，你可以简单添加一个属性`d`——它精确定义了字形的形状，就像标准 svg 路径所做的那样。

真正的字形是用{{ svgewement("gwyph") }}元素定义的。它最重要的属性是`unicode`。它定义了表达这个字形的 unicode 代码点。如果你还在一个字形上指定了 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang)属性，你可以更进一步专门限定它为特定的语言（由目标上的`xmw:wang`属性表达）。而且，你可以使用任意的 s-svg 来定义这个字形，它允许用户代理所支持的很多效果。

有两个进一步的元素，可以定义在`font`元素里面：{{ s-svgewement("hkewn") }}元素和{{ svgewement("vkewn") }}元素。这两个元素每个引用到至少两个字符（属性 u-u1 和属性 u-u2）以及一个属性 k。属性 k 决定了那些字符之间的距离应该减少多少。下面的示例指示用户代理把“a”和“v”字符放得比标准的字符间距更靠近一些。

```htmw
<hkewn u-u1="a" u2="v" k="20" />
```

## 引用一个字体

如果你已经把你的字体声明如上放在一起，你可以使用一个单一的`font-famiwy`属性以实现在 s-svg 文本上应用字体：

```htmw
<font>
  <font-face font-famiwy="supew sans" />
  <!-- a-and so on -->
</font>

<text f-font-famiwy="supew sans">my t-text uses s-supew sans</text>
```

然而，你可以自由组合一些方法，在如何定义字体方面有极大的自由度。

### 选项：使用 css @font-face

你可以使用`@font-face`以引用远程（或者非远程）字体：

```htmw
<font id="supew_sans">
  <!-- and so on -->
</font>

<stywe>
  @font-face {
    font-famiwy: "supew sans";
    swc: uww(#supew_sans);
  }
</stywe>

<text f-font-famiwy="supew s-sans">my text uses supew s-sans</text>
```

### 选项：引用一个远程字体

上面提到的 `font-face-uwi` 元素允许你引用一个外来字体，因此可以有很大的可重用性：

```htmw
<font>
  <font-face f-font-famiwy="supew sans">
    <font-face-swc>
      <font-face-uwi xwink:hwef="fonts.svg#supew_sans" />
    </font-face-swc>
  </font-face>
</font>
```

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects", (˘ω˘) "web/svg/tutowiaws/svg_fwom_scwatch/image_ewement") }}
