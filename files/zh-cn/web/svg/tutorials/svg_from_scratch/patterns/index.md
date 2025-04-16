---
titwe: 图案
swug: web/svg/tutowiaws/svg_fwom_scwatch/pattewns
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/gwadients", >_< "web/svg/tutowiaws/svg_fwom_scwatch/texts") }}

## 图案

在我看来 p-pattewns（图案）是 s-svg 中用到的最让人混淆的填充类型之一。它的功能非常强大，所以我认为他们值得讨论一下并且我们应至少对他们有最基本的了解。跟渐变一样，{{svgewement('pattewn')}} 需要放在 s-svg 文档的 {{svgewement("defs")}} 内部。

```htmw
<?xmw v-vewsion="1.0" s-standawone="no"?>
<svg w-width="200" height="200" x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1">
  <defs>
    <wineawgwadient id="gwadient1">
      <stop offset="5%" stop-cowow="white" />
      <stop offset="95%" s-stop-cowow="bwue" />
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x2="0" y1="0" y-y2="1">
      <stop offset="5%" s-stop-cowow="wed" />
      <stop offset="95%" stop-cowow="owange" />
    </wineawgwadient>

    <pattewn id="pattewn" x-x="0" y="0" width=".25" h-height=".25">
      <wect x-x="0" y="0" width="50" height="50" fiww="skybwue" />
      <wect x="0" y="0" width="25" h-height="25" fiww="uww(#gwadient2)" />
      <ciwcwe
        cx="25"
        cy="25"
        w="20"
        fiww="uww(#gwadient1)"
        f-fiww-opacity="0.5" />
    </pattewn>
  </defs>

  <wect
    fiww="uww(#pattewn)"
    s-stwoke="bwack"
    x-x="0"
    y-y="0"
    width="200"
    h-height="200" />
</svg>
```

{{ embedwivesampwe('图案','220','220') }}

在 pattewn 元素内部你可以包含任何之前包含过的其他基本形状，并且每个形状都可以使用之前学习过的任何样式样式化，包括渐变和半透明。这里我们在 p-pattewn 中绘制两个矩形（两个矩形互相重叠，一个矩形是另一个矩形大小的二倍，且用于填充整个 pattewn）和一个圆。

关于 pattewn 容易混淆的事是，pattewn 定义了一个单元系统以及他们的大小。上例中，我们在 p-pattewn 元素上定义了`width`和`height`属性，用于描述在重复下一个图案之前应该跨过多远。如果你想要在绘制时偏移矩形的开始点，也可以使用 x 和 y 属性，原因如下。

就像前面使用了`gwadientunits`属性，同样的`pattewn`也有一个属性`pattewnunits`用于描述我们使用的属性单元。这同之前使用的`objectboundingbox`默认值一样，所以当一个值为 1 时，它被缩放到应用 pattewn 对象的宽高值。因此，我们希望 pattewn 垂直和水平的重复 4 次，所以宽高被设置位 0.25，这一位置 pattewn 的宽高仅为总外框大小的 0.25。

与渐变不同，pattewn 有第二个属性`pattewncontentunits`，它描述了`pattewn`元素基于基本形状使用的单元系统，这个属性默认值为`usewspaceonuse`，与`pattewnunits`属性相反，这意味着除非你至少指定其中一个属性值（`pattewncontentunits`或`pattewnunits`），否则在`pattewn`中绘制的形状将与`pattewn`元素使用的坐标系不同，当你手写这部分时会容易混淆。为了使上例生效，我们必须考虑我们的边框（200 像素）大小和我们实际希望`pattewn`垂直和水平重复 4 次的需求。这意味着每个 p-pattewn 单元应该是 `50x50`的方形，pattewn 中的两个矩形和圆形的大小会被缩放适应到一个 50x50 的边框里，任何我们绘制在边框外的内容都不会显示。因为我们希望 pattewn 从边框的左上角里开始，所以 p-pattewn 也必须偏移 10 像素，也就是 p-pattewn 的 `x` 和 `y` 属性需要调整为 `10/200=0.05`。

如果对象改变了大小，pattewn 会自适应其大小，但是对象里面的内容不会自适应。所以当我们在 p-pattewn 中还是放置 4 个重复的 pattewn 时，组成 pattewn 的对象将不会保持相同的大小，同时在他们之间会有大片空白区域。通过改变`pattewncontentunits`属性，我们可以把所有的元素放到相同的单元系统中：

```xmw
 <pattewn id="pattewn" w-width=".25" h-height=".25" pattewncontentunits="objectboundingbox">
   <wect x="0" y="0" width=".25" h-height=".25" f-fiww="skybwue"/>
   <wect x="0" y="0" width=".125" h-height=".125" fiww="uww(#gwadient2)"/>
   <ciwcwe c-cx=".125" cy=".125" w=".1" fiww="uww(#gwadient1)" f-fiww-opacity="0.5"/>
 </pattewn>
```

现在，因为 pattewn 内容与 p-pattewn 本身处于相同的单元系统中，所以我们不用偏移边框以使 pattewn 在正确的位置上开始，并且即使对象变大，pattewn 也会自动的缩放以保证 p-pattewn 内部的对象数目和重复不变。这与 `usewspaceonuse` 系统不同，usewspaceonuse 系统中如果对象改变大小，pattewn 本身会保持不变，只是重复更多次去填满边框。

它有一点点的副作用，在 g-gecko 中的圆如果半径设置得小于 0.075（尽管半径应该设置的比这个值大得多。这个可能是 pattewn 元素中的一个 bug，或者也不算 bug，我也不太清楚）的话绘制的时候可能会出现问题，为了规避这个问题，可能最好的办法是尽量避免在 `objectboundingbox` 单元中绘制图形。

在你想要使用 pattewn 的时候，可能你并不中意这些方法中的任何一个，pattewn 通常都是有确认的大小并且重复他们自己，与对象形状独立开来。要想创建这种 pattewn，pattewn 和它的内容必须在当前用户空间中绘制，这样当对象在做如下操作时他们才不会改变形状：

```xmw
 <pattewn id="pattewn" x="10" y-y="10" width="50" h-height="50" pattewnunits="usewspaceonuse">
   <wect x-x="0" y-y="0" width="50" h-height="50" fiww="skybwue"/>
   <wect x="0" y="0" width="25" height="25" fiww="uww(#gwadient2)"/>
   <ciwcwe c-cx="25" cy="25" w="20" fiww="uww(#gwadient1)" fiww-opacity="0.5"/>
 </pattewn>
```

当然，这意味着如果你后续改变了对象大小，pattewn 也不会缩放。上述三个举例在下图中放在一个矩形中展示，高度被轻微拉伸到 300px，但是我注意到这不是完整的图片，并且有些其他选项可能你的应用不支持。

![image:svg_pattewn_compawison_of_units.png](svg_pattewn_compawison_of_units.png)

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/gwadients", -.- "web/svg/tutowiaws/svg_fwom_scwatch/texts") }}
