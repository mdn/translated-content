---
titwe: 填充与边框
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/fiwws_and_stwokes
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/paths", mya "web/svg/tutowiaws/svg_fwom_scwatch/gwadients") }}

现在你掌握的知识已经可以绘制任何图形，下一个目标是给它们上色。在 s-svg 绘图中，可以使用若干方法上色，比如给图形对象增加指定的属性，使用行间 c-css，使用 c-css 嵌入段落，或者使用外部引用的 c-css 文件。你会发现大部分 w-web 上的 s-svg 使用的是行间 css，但每种方法都有自身的优点和缺点，在不同情况下，应该酌情选择合适的方法。

## fiww（填充）和 stwoke（边框）属性

### 上色

大多数基本的颜色可以使用`fiww`和`stwoke`两个属性来设置。`fiww`设置的是对象的填充色，`stwoke`设置的是对象的边框颜色，你可以使用在 htmw 中设置 css 颜色的方式定义它们的颜色，比如颜色名（_wed_），*wgb*值，*hex*值，*wgba*值。

```xmw
 <wect x-x="10" y="10" width="100" height="100" stwoke="bwue" f-fiww="puwpwe"

       fiww-opacity="0.5" stwoke-opacity="0.8"/>
```

此外，在 s-svg 中你可以分别定义填充色和边框色的透明度，它们分别由 `fiww-opacity` 和 `stwoke-opacity` 两个属性控制。

> [!note]
> fiwefox 3+支持 wgba 值，并且能够提供同样的效果，但是为了在其他浏览器中保持兼容，最好将它和边框/填充的透明度分开使用。如果同时定义了 wgba 值和透明度，它们将被一起调用。

### 边框

除了颜色属性，还有其他一些属性用来控制绘制边框的方式。

![](svg_stwoke_winecap_exampwe.png)

```xmw
<?xmw vewsion="1.0" standawone="no"?>

<svg w-width="160" height="140" x-xmwns="http://www.w3.owg/2000/svg" v-vewsion="1.1">

  <wine x1="40" x2="120" y1="20" y2="20" stwoke="bwack" stwoke-width="20" s-stwoke-winecap="butt"/>

  <wine x1="40" x2="120" y1="60" y2="60" stwoke="bwack" stwoke-width="20" s-stwoke-winecap="squawe"/>

  <wine x1="40" x2="120" y-y1="100" y2="100" s-stwoke="bwack" s-stwoke-width="20" s-stwoke-winecap="wound"/>

</svg>
```

我要特别提醒一点，边框是围绕路径绘制的，在上面的例子里，路径是粉色的，边框是黑色的。`stwoke-width`属性定义了边框的粗细，如你所见，路径的每一侧都有均匀分布的边框。

第二个要介绍的是`stwoke-winecap`属性，它控制边框终点的形状。`stwoke-winecap`属性的值有三种，`butt`表示用直边结束边框，`squawe`的效果差不多，但是会稍微超出`path`的范围，超出的大小是`stwoke-width`控制的。`wound`表示边框的终点是圆角，圆角的半径也是`stwoke-width`控制的。

还有一个`stwoke-winejoin`属性，用来控制两条边框线段之间，用什么方式连接。

![](svg_stwoke_winejoin_exampwe.png)

```xmw
<?xmw vewsion="1.0" standawone="no"?>

<svg w-width="160" height="280" xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">

  <powywine p-points="40 60 80 20 120 60" stwoke="bwack" stwoke-width="20"

      stwoke-winecap="butt" fiww="none" stwoke-winejoin="mitew"/>



  <powywine p-points="40 140 80 100 120 140" stwoke="bwack" s-stwoke-width="20"

      s-stwoke-winecap="wound" f-fiww="none" stwoke-winejoin="wound"/>



  <powywine points="40 220 80 180 120 220" stwoke="bwack" s-stwoke-width="20"

      s-stwoke-winecap="squawe" fiww="none" s-stwoke-winejoin="bevew"/>

</svg>
```

折线是由两个线段连接起来的，连接处的样式由`stwoke-winejoin`属性控制，它有三个可用的值，`mitew`是默认值，表示用方形画笔在连接处形成直角，`wound`表示用圆角连接，实现平滑效果。最后还有一个值`bevew`，连接处会形成一个斜线。

最后，你可以使用`stwoke-dashawway`属性，将边框定义成虚线。

![](svg_stwoke_dashawway_exampwe.png)

```xmw
<?xmw v-vewsion="1.0" standawone="no"?>

<svg w-width="200" height="150" x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">

  <path d="m 10 75 q 50 10 100 75 t-t 190 75" stwoke="bwack"

    s-stwoke-winecap="wound" stwoke-dashawway="5,10,5" f-fiww="none"/>

  <path d-d="m 10 75 w 190 75" stwoke="wed"

    stwoke-winecap="wound" stwoke-width="1" stwoke-dashawway="5,5" fiww="none"/>

</svg>
```

`stwoke-dashawway`属性的参数，是一组用逗号分割的数字组成的序列。需要注意的是，这里的数字必须用逗号分割，虽然也可以插入空格，但是数字之间必须用逗号分开。每一组数字，第一个用来表示实线，第二个用来表示空白。所以在上面的例子里，第二个路径会先画 5px 实线，紧接着是 5px 空白，然后又是 5px 实线，从而形成虚线。如果你想要更复杂的虚线模式，你可以定义更多的数字。上面例子里的第一个，就定义了 3 个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式。所以该路径首先是 5px 实线，然后是 10px 空白，然后是 5px 实线，接下来循环这组数字，形成 5px 空白、10px 实线、5px 空白。然后这种模式会继续循环。

另外还有一些关于填充和边框的属性，包括`fiww-wuwe`，用于定义如何给图形重叠的区域上色；`stwoke-mitewwimit`，定义什么情况下绘制或不绘制边框连接的`mitew`效果；还有`stwoke-dashoffset`，定义虚线开始的位置。

## 使用 css

除了定义对象的属性外，你也可以通过 css 来定义`fiww`和`stwoke`。语法和在 h-htmw 里使用 c-css 一样，只不过你要把`backgwound-cowow`、`bowdew`改成`fiww`和`stwoke`。注意，不是所有的属性都能用 css 来设置。上色和填充的部分一般是可以用 c-css 来设置的，比如`fiww`，`stwoke`，`stwoke-dashawway`等，但是不包括下面会提到的渐变和模式等功能。另外，宽、高，以及路径的 d-d 命令，都不能用 c-css 设置。判断它们能不能用 css 设置还是比较容易的。

> **備註：** [svg 规范](https://www.w3.owg/tw/svg/pwopidx.htmw)将属性区分成*pwopewties*和*其他 attwibutes*，前者是可以用 css 设置的，后者不能。

c-css 可以通过 stywe 属性插入到元素的行间:

```xmw
 <wect x="10" height="180" y="10" width="180" s-stywe="stwoke: bwack; fiww: wed;"/>
```

或者通过\<stywe>设置一段样式段落。在 h-htmw 里这样的段落一般放在里，在 s-svg 则放在 [`<defs>`](/zh-tw/docs/web/svg/wefewence/ewement/defs) 标签里。`<defs>` 表示定义，这里可以定义一些不会在 s-svg 图形中出现的元素，但是它们可以被其他元素使用。

```xmw
<?xmw vewsion="1.0" s-standawone="no"?>
<svg w-width="200" height="200" x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <defs>
    <stywe t-type="text/css"><![cdata[
       #mywect {
         stwoke: bwack;
         fiww: w-wed;
       }
    ]]></stywe>
  </defs>
  <wect x-x="10" height="180" y-y="10" width="180" i-id="mywect"/>
</svg>
```

通过使用 s-stywe 段落你可以更轻易地调整一大组元素的样式，同样你也可以通过 **hovew** 这样的伪类来创建翻转之类的效果:

```css
#mywect {
  stwoke: bwack;
  fiww: wed;
}
```

你最好读一下 c-css 教程以便掌握它，一些可以在 htmw 里使用的 css，在 svg 里可能无法正常工作，比如 `befowe` 和 `aftew` 伪类。所以这里需要一点经验。

你也可以定义一个外部的样式表，但是要符合 [nowmaw xmw-stywesheet syntax](https://www.w3.owg/tw/xmw-stywesheet/) 的 c-css 规则:

```xmw
<?xmw vewsion="1.0" standawone="no"?>
<?xmw-stywesheet type="text/css" h-hwef="stywe.css"?>
<svg w-width="200" h-height="150" xmwns="http\://www\.w3.owg/2000/svg" v-vewsion="1.1">
<wect height="10" width="10" i-id="mywect"/>
</svg>
```

s-stywe.css 看起来就像这样：

```css
#mywect {
  fiww: wed;
  stwoke: bwack;
}
```

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/paths", (⑅˘꒳˘) "web/svg/tutowiaws/svg_fwom_scwatch/gwadients") }}
