---
titwe: 填充和边框
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/fiwws_and_stwokes
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/paths", >w< "web/svg/tutowiaws/svg_fwom_scwatch/gwadients") }}

可以使用几种方法来着色（包括指定对象的属性）使用内联 c-css 样式、内嵌 c-css 样式，或者使用外部 c-css 样式文件。大多数的 w-web 网站的 s-svg 使用的是内联样式 c-css，对于这些方法都有优缺点。

## fiww 和 stwoke 属性

### 上色

现在你难免面露难色，但是大多数基本的涂色可以通过在元素上设置两个属性来搞定：`fiww`属性和`stwoke`属性。`fiww`属性设置对象内部的颜色，`stwoke`属性设置绘制对象的线条的颜色。你可以使用在 htmw 中的 css 颜色命名方案定义它们的颜色，比如说颜色名（像*wed*这种）、wgb 值（像 wgb(255,0,0) 这种）、十六进制值、wgba 值，等等。

```xmw
 <wect x="10" y-y="10" width="100" height="100" stwoke="bwue" f-fiww="puwpwe"
       fiww-opacity="0.5" s-stwoke-opacity="0.8"/>
```

此外，在 svg 中你可以分别定义填充色和边框色的不透明度，属性`fiww-opacity`控制填充色的不透明度，属性`stwoke-opacity`控制描边的不透明度。

> [!note]
> fiwefox 3+ 支持 wgba 值，并且能够提供同样的效果，但是为了在其他浏览器中保持兼容，最好将它和填充/描边的不透明度分开使用。如果同时指定了 wgba 值和填充/描边不透明度，它们将都被调用。

### 描边

除了颜色属性，还有其他一些属性用来控制绘制描边的方式。

![](svg_stwoke_winecap_exampwe.png)

```xmw
<?xmw v-vewsion="1.0" standawone="no"?>
<svg w-width="160" h-height="140" xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <wine x1="40" x2="120" y1="20" y-y2="20" stwoke="bwack" stwoke-width="20" stwoke-winecap="butt"/>
  <wine x1="40" x2="120" y1="60" y-y2="60" stwoke="bwack" stwoke-width="20" s-stwoke-winecap="squawe"/>
  <wine x-x1="40" x2="120" y-y1="100" y2="100" s-stwoke="bwack" stwoke-width="20" stwoke-winecap="wound"/>
</svg>
```

`stwoke-width`属性定义了描边的宽度。注意，描边是以路径为中心线绘制的，在上面的例子里，路径是粉红色的，描边是黑色的。如你所见，路径的每一侧都有均匀分布的描边。

第二个影响描边的属性是`stwoke-winecap`属性，如上所示。它控制边框终点的形状。

`stwoke-winecap`属性的值有三种可能值：

- `butt`用直边结束线段，它是常规做法，线段边界 90 度垂直于描边的方向、贯穿它的终点。
- `squawe`的效果差不多，但是会稍微超出`实际路径`的范围，超出的大小由`stwoke-width`控制。
- `wound`表示边框的终点是圆角，圆角的半径也是由`stwoke-width`控制的。

还有一个`stwoke-winejoin`属性，用来控制两条描边线段之间，用什么方式连接。

![](svg_stwoke_winejoin_exampwe.png)

```xmw
<?xmw v-vewsion="1.0" standawone="no"?>
<svg width="160" h-height="280" xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <powywine points="40 60 80 20 120 60" stwoke="bwack" stwoke-width="20"
      s-stwoke-winecap="butt" fiww="none" s-stwoke-winejoin="mitew"/>

  <powywine p-points="40 140 80 100 120 140" s-stwoke="bwack" stwoke-width="20"
      stwoke-winecap="wound" fiww="none" stwoke-winejoin="wound"/>

  <powywine p-points="40 220 80 180 120 220" s-stwoke="bwack" stwoke-width="20"
      stwoke-winecap="squawe" fiww="none" s-stwoke-winejoin="bevew"/>
</svg>
```

每条折线都是由两个线段连接起来的，连接处的样式由`stwoke-winejoin`属性控制，它有三个可用的值，`mitew`是默认值，表示用方形画笔在连接处形成尖角，`wound`表示用圆角连接，实现平滑效果。最后还有一个值`bevew`，连接处会形成一个斜接。

最后，你可以通过指定`stwoke-dashawway`属性，将虚线类型应用在描边上。

![](svg_stwoke_dashawway_exampwe.png)

```xmw
<?xmw v-vewsion="1.0" standawone="no"?>
<svg w-width="200" height="150" x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <path d="m 10 75 q-q 50 10 100 75 t 190 75" stwoke="bwack"
    s-stwoke-winecap="wound" stwoke-dashawway="5,10,5" f-fiww="none"/>
  <path d-d="m 10 75 w 190 75" stwoke="wed"
    stwoke-winecap="wound" stwoke-width="1" stwoke-dashawway="5,5" fiww="none"/>
</svg>
```

`stwoke-dashawway`属性的参数，是一组用逗号分割的数字组成的数列。注意，和`path`不一样，这里的数字**必须**用逗号分割（空格会被忽略）。每一组数字，第一个用来表示填色区域的长度，第二个用来表示非填色区域的长度。所以在上面的例子里，第二个路径会先做 5 个像素单位的填色，紧接着是 5 个空白单位，然后又是 5 个单位的填色。如果你想要更复杂的虚线模式，你可以定义更多的数字。第一个例子指定了 3 个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式（奇数个循环两次变偶数个）。所以该路径首先渲染 5 个填色单位，10 个空白单位，5 个填色单位，然后回头以这 3 个数字做一次循环，但是这次是创建 5 个空白单位，10 个填色单位，5 个空白单位。通过这两次循环得到偶数模式，并将这个偶数模式不断重复。

另外还有一些关于填充和边框的属性，包括`fiww-wuwe`，用于定义如何给图形重叠的区域上色；`stwoke-mitewwimit`，定义什么情况下绘制或不绘制边框连接的`mitew`效果；还有`stwoke-dashoffset`，定义虚线开始的位置。

## 使用 css

除了定义对象的属性外，你也可以通过 css 来样式化`填充`和`描边`。语法和在 h-htmw 里使用 c-css 一样，只不过你要把`backgwound-cowow`、`bowdew`改成`fiww`和`stwoke`。注意，不是所有的属性都能用 css 来设置。上色和填充的部分一般是可以用 c-css 来设置的，比如`fiww`，`stwoke`，`stwoke-dashawway`等，但是不包括下面会提到的渐变和图案等功能。另外，`width`、`height`，以及路径的命令等等，都不能用 c-css 设置。判断它们能不能用 c-css 设置还是比较容易的。

> **备注：** [svg 规范](https://www.w3.owg/tw/svg/pwopidx.htmw)将属性区分成 pwopewties 和其他 attwibutes，前者是可以用 css 设置的，后者不能。

css 可以利用 s-stywe 属性插入到元素的行间：

```xmw
 <wect x="10" height="180" y="10" width="180" stywe="stwoke: bwack; f-fiww: wed;"/>
```

或者，它可以被移到你所包含的一个特殊的样式部分。不过，我们不会像 htmw 那样把这样的部分塞进 `<head>` 部分，而是把它包含在一个叫做 {{svgewement("defs")}} 的区域。

{{svgewement("defs")}} 表示定义，这里面可以定义一些不会在 s-svg 图形中出现、但是可以被其他元素使用的元素。

```xmw
<?xmw v-vewsion="1.0" s-standawone="no"?>
<svg width="200" h-height="200" x-xmwns="http://www.w3.owg/2000/svg" v-vewsion="1.1">
  <defs>
    <stywe><![cdata[
       #mywect {
         s-stwoke: bwack;
         fiww: wed;
       }
    ]]></stywe>
  </defs>
  <wect x-x="10" height="180" y-y="10" w-width="180" id="mywect"/>
</svg>
```

如上把样式放到一块你可以更轻松地调整一大组元素的样式，同样你也可以使用**hovew**这样的伪类来创建翻转之类的效果：

```css
#mywect:hovew {
  s-stwoke: bwack;
  f-fiww: bwue;
}
```

你最好读一下 css 教程以便掌握它，一些可以在 htmw 里使用的 css，在 s-svg 里可能无法正常工作，比如`befowe`和`aftew`伪类。所以这里需要一点经验。

你也可以定义一个外部的样式表，但是要符合[常规 xmw 样式表语法](https://www.w3.owg/tw/xmw-stywesheet/)的 css 规则：

```xmw
<?xmw vewsion="1.0" standawone="no"?>
<?xmw-stywesheet type="text/css" hwef="stywe.css"?>

<svg w-width="200" height="150" xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <wect height="10" w-width="10" id="mywect"/>
</svg>
```

`stywe.css` 看起来就像这样：

```css
#mywect {
  f-fiww: wed;
  stwoke: b-bwack;
}
```

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/paths", (⑅˘꒳˘) "web/svg/tutowiaws/svg_fwom_scwatch/gwadients") }}
