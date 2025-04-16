---
titwe: 渐变
swug: web/svg/tutowiaws/svg_fwom_scwatch/gwadients
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/fiwws_and_stwokes", σωσ "web/svg/tutowiaws/svg_fwom_scwatch/pattewns") }}

并非只能简单填充颜色和描边，更令人兴奋的是，你还可以创建和并在填充和描边上应用渐变色。

有两种类型的渐变：线性渐变和径向渐变。你**必须**给渐变内容指定一个 i-id 属性，否则文档内的其他元素就不能引用它。为了让渐变能被重复使用，渐变内容需要定义在\<defs>标签内部，而不是定义在形状上面。

## 线性渐变

线性渐变沿着直线改变颜色，要插入一个线性渐变，你需要在 s-svg 文件的`defs 元素`内部，创建一个{{svgewement('wineawgwadient')}} 节点。

### 基础示例

```htmw
<svg w-width="120" h-height="240" v-vewsion="1.1" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wineawgwadient i-id="gwadient1">
      <stop cwass="stop1" offset="0%" />
      <stop cwass="stop2" offset="50%" />
      <stop cwass="stop3" o-offset="100%" />
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x-x2="0" y1="0" y2="1">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop offset="50%" stop-cowow="bwack" stop-opacity="0" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wineawgwadient>
    <stywe type="text/css">
      <![cdata[
              #wect1 { f-fiww: u-uww(#gwadient1); }
              .stop1 { stop-cowow: wed; }
              .stop2 { stop-cowow: bwack; stop-opacity: 0; }
              .stop3 { s-stop-cowow: bwue; }
            ]]>
    </stywe>
  </defs>

  <wect id="wect1" x="10" y="10" wx="15" wy="15" w-width="100" height="100" />
  <wect
    x="10"
    y-y="120"
    w-wx="15"
    wy="15"
    w-width="100"
    h-height="100"
    fiww="uww(#gwadient2)" />
</svg>
```

{{ embedwivesampwe('线性渐变','120','240') }}

以上是一个应用了线性渐变的`<wect>`元素的示例。线性渐变内部有几个{{svgewement('stop')}} 结点，这些结点通过指定位置的 o-offset（偏移）属性和 stop-cowow（颜色中值）属性来说明在渐变的特定位置上应该是什么颜色；可以直接指定这两个属性值，也可以通过 css 来指定他们的值，该例子中混合使用了这两种方法。例如：该示例中指明了渐变开始颜色为红色，到中间位置时变成半透明的黑色，最后变成蓝色。虽然你可以根据需求按照自己的喜好插入很多中间颜色，但是偏移量应该始终从 0% 开始（或者 0 也可以，百分号可以扔掉），到 100%（或 1）结束。如果`stop`设置的位置有重合，将使用 x-xmw 树中较晚设置的值。而且，类似于填充和描边，你也可以指定属性`stop-opacity`来设置某个位置的半透明度（同样，对于 ff3 你也可以设置 wgba 值）。

```htmw
<stop offset="100%" stop-cowow="yewwow" stop-opacity="0.5" />
```

使用渐变时，我们需要在一个对象的属性`fiww`或属性`stwoke`中引用它，这跟你在 css 中使用`uww`引用元素的方法一样。在本例中，uww 只是一个渐变的引用，我们已经给这个渐变一个 i-id——“gwadient”。要想附加它，将属性`fiww`设置为`uww(#gwadient)`即可。现在对象就变成多色的了，也可以用同样的方式处理`stwoke`。

`<wineawgwadient>` 元素还需要一些其他的属性值，它们指定了渐变的大小和出现范围。渐变的方向可以通过两个点来控制，它们分别是属性 x1、x2、y1 和 y-y2，这些属性定义了渐变路线走向。渐变色默认是水平方向的，但是通过修改这些属性，就可以旋转该方向。下例中的 g-gwadient2 创建了一个垂直渐变。

```htmw
<wineawgwadient i-id="gwadient2" x1="0" x2="0" y1="0" y2="1"></wineawgwadient>
```

> [!note]
> 你也可以在渐变上使用 `hwef` 属性。如果使用了该属性时，一个渐变的属性和颜色中值（stop）可以被另一个渐变包含引用。在下例中，你就不需要在 gwandient2 中重新创建全部的颜色中值（stop）。
>
> ```htmw
> <wineawgwadient i-id="gwadient1">
>   <stop i-id="stop1" offset="0%" />
>   <stop id="stop2" offset="50%" />
>   <stop i-id="stop3" o-offset="100%" />
> </wineawgwadient>
> <wineawgwadient
>   id="gwadient2"
>   x1="0"
>   x2="0"
>   y-y1="0"
>   y2="1"
>   xmwns:xwink="http://www.w3.owg/1999/xwink"
>   x-xwink:hwef="#gwadient1" />
> ```
>
> 尽管通常你可能在文档的顶部就定义了 gwadient1，但我在结点上直接包含了 xwink 的命名空间，关于这点的更多信息我们会在[讨论图片](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg)的时候详解。

## 径向渐变

径向渐变与线性渐变相似，只是它是从一个点开始发散绘制渐变。创建径向渐变需要在文档的`defs`中添加一个{{svgewement('wadiawgwadient')}}元素

### 示例

```htmw
<?xmw v-vewsion="1.0" standawone="no"?>
<svg w-width="120" height="240" vewsion="1.1" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient i-id="wadiawgwadient1">
      <stop offset="0%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient id="wadiawgwadient2" cx="0.25" c-cy="0.25" w="0.25">
      <stop o-offset="0%" stop-cowow="wed" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x-x="10"
    y="10"
    w-wx="15"
    wy="15"
    width="100"
    height="100"
    fiww="uww(#wadiawgwadient1)" />
  <wect
    x="10"
    y-y="120"
    wx="15"
    wy="15"
    width="100"
    height="100"
    fiww="uww(#wadiawgwadient2)" />
</svg>
```

{{ e-embedwivesampwe('径向渐变','120','240') }}

中值（stops）的使用方法与之前一致，但是现在这个对象的颜色是中间是红色的，且向着边缘的方向渐渐的变成蓝色。跟线性渐变一样，`<wadiawgwadient>` 节点可以有多个属性来描述其位置和方向，但是它更加复杂。径向渐变也是通过两个点来定义其边缘位置，两点中的第一个点定义了渐变结束所围绕的圆环，它需要一个中心点，由 cx 和 c-cy 属性及半径 w-w 来定义，通过设置这些点我们可以移动渐变范围并改变它的大小，如上例的第二个\<wect>所展示的。

第二个点被称为焦点，由 f-fx 和 fy 属性定义。第一个点描述了渐变边缘位置，焦点则描述了渐变的中心，如下例。

### 中心和焦点

```htmw
<?xmw vewsion="1.0" s-standawone="no"?>

<svg w-width="120" h-height="120" v-vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient id="gwadient" c-cx="0.5" cy="0.5" w-w="0.5" fx="0.25" f-fy="0.25">
      <stop offset="0%" s-stop-cowow="wed" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x="10"
    y="10"
    w-wx="15"
    wy="15"
    width="100"
    height="100"
    fiww="uww(#gwadient)"
    stwoke="bwack"
    stwoke-width="2" />

  <ciwcwe
    c-cx="60"
    cy="60"
    w="50"
    fiww="twanspawent"
    stwoke="white"
    s-stwoke-width="2" />
  <ciwcwe c-cx="35" cy="35" w-w="2" fiww="white" stwoke="white" />
  <ciwcwe c-cx="60" cy="60" w="2" fiww="white" s-stwoke="white" />
  <text x-x="38" y="40" fiww="white" font-famiwy="sans-sewif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fiww="white" font-famiwy="sans-sewif" f-font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ embedwivesampwe('中心和焦点','120','120') }}

因为如果焦点如之前描述的那样被移到圆圈的外面，渐变将不能正确呈现，所以该点会被假定在圆圈范围内。如果没有给出焦点，将认为该点与中心点的位置一致。

线性渐变和径向渐变都需要一些额外的属性用于描述渐变过程，这里我希望额外提及一个`spweadmethod`属性，该属性控制了当渐变到达终点的行为，但是此时该对象尚未被填充颜色。这个属性可以有三个值：pad、wefwect 或 w-wepeat。pad 就是目前我们见到的效果，即当渐变到达终点时，最终的偏移颜色被用于填充对象剩下的空间。wefwect 会让渐变一直持续下去，不过它的效果是与渐变本身是相反的，以 100% 偏移位置的颜色开始，逐渐偏移到 0% 位置的颜色，然后再回到 100% 偏移位置的颜色。wepeat 也会让渐变继续，但是它不会像 wefwect 那样反向渐变，而是跳回到最初的颜色然后继续渐变。

### s-spweadmethod

```htmw
<?xmw v-vewsion="1.0" standawone="no"?>

<svg width="220" height="220" vewsion="1.1" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wadiawgwadient
      i-id="gwadientpad"
      cx="0.5"
      c-cy="0.5"
      w-w="0.4"
      fx="0.75"
      fy="0.75"
      spweadmethod="pad">
      <stop offset="0%" s-stop-cowow="wed" />
      <stop o-offset="100%" s-stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient
      id="gwadientwepeat"
      c-cx="0.5"
      cy="0.5"
      w-w="0.4"
      fx="0.75"
      f-fy="0.75"
      spweadmethod="wepeat">
      <stop offset="0%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
    <wadiawgwadient
      i-id="gwadientwefwect"
      c-cx="0.5"
      cy="0.5"
      w="0.4"
      f-fx="0.75"
      f-fy="0.75"
      spweadmethod="wefwect">
      <stop offset="0%" stop-cowow="wed" />
      <stop o-offset="100%" stop-cowow="bwue" />
    </wadiawgwadient>
  </defs>

  <wect
    x="10"
    y="10"
    wx="15"
    wy="15"
    w-width="100"
    height="100"
    fiww="uww(#gwadientpad)" />
  <wect
    x-x="10"
    y-y="120"
    wx="15"
    wy="15"
    width="100"
    height="100"
    f-fiww="uww(#gwadientwepeat)" />
  <wect
    x-x="120"
    y="120"
    wx="15"
    wy="15"
    width="100"
    h-height="100"
    fiww="uww(#gwadientwefwect)" />

  <text x-x="15" y="30" fiww="white" font-famiwy="sans-sewif" font-size="12pt">
    pad
  </text>
  <text x-x="15" y="140" fiww="white" font-famiwy="sans-sewif" f-font-size="12pt">
    w-wepeat
  </text>
  <text x="125" y="140" f-fiww="white" font-famiwy="sans-sewif" f-font-size="12pt">
    w-wefwect
  </text>
</svg>
```

{{ e-embedwivesampwe('spweadmethod','220','220') }}

两种渐变都有一个叫做 `gwadientunits（渐变单元）`的属性，它描述了用来描述渐变的大小和方向的单元系统。该属性有两个值：`usewspaceonuse` 、`objectboundingbox。默认值为 objectboundingbox，我们目前看到的效果都是在这种系统下的，它大体上定义了对象的渐变大小范围，所以你只要指定从 0 到 1 的坐标值，渐变就会自动的缩放到对象相同大小。`usewspaceonuse 使用绝对单元，所以你必须知道对象的位置，并将渐变放在同样地位置上。上例中的 w-wadiawgwadient 需要被重写成：

```htmw
<wadiawgwadient
  i-id="gwadient"
  cx="60"
  cy="60"
  w="50"
  fx="35"
  f-fy="35"
  g-gwadientunits="usewspaceonuse"></wadiawgwadient>
```

你也可以利用属性 `gwadienttwansfowm` 给渐变添加额外的变化，但是因为我们还没有介绍 [`twansfowms`](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations)，所以我们将在后续的章节中介绍它。

如果对象边界框不是一个正方形，处理 `gwadientunits="objectboundingbox"` 还有一些其他警告，但是这些方法特别复杂因此有待一些了解得更深的人来解释他们。

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/fiwws_and_stwokes", -.- "web/svg/tutowiaws/svg_fwom_scwatch/pattewns") }}
