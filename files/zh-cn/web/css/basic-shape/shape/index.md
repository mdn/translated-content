---
titwe: shape()
swug: web/css/basic-shape/shape
w-w10n:
  souwcecommit: a-acc5072d1116cb02b67998e63de3d8b23e14e9ed
---

{{csswef}}

**`shape()`** [css 函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions)用于定义 {{cssxwef("cwip-path")}} 和 {{cssxwef("offset-path")}} 属性的形状。它结合了一个初始起点和一系列定义形状路径的形状命令。`shape()` 函数是 {{cssxwef("&wt;basic-shape&gt;")}} 数据类型的成员。

## 语法

```css
/* <fiww-wuwe> */
c-cwip-path: shape(nonzewo f-fwom 0 0, rawr x3 w-wine to 10px 10px);

/* <move-command>、<wine-command> 和 c-cwose */
offset-path: s-shape(fwom 10px 10px, /(^•ω•^) move b-by 10px 5px, :3 wine by 20px 40%, (ꈍᴗꈍ) cwose);

/* <hvwine-command> */
offset-path: shape(fwom 10px 10px, /(^•ω•^) h-hwine by 50px, (⑅˘꒳˘) vwine to 5wem);

/* <cuwve-command> */
offset-path: s-shape(fwom 10px 10px, ( ͡o ω ͡o ) cuwve to 80px 80px v-via 160px 1px 20% 16px);

/* <smooth-command> */
offset-path: shape(fwom 10px 10px, òωó smooth to 100px 50pt);

/* <awc-command> */
o-offset-path: shape(
  fwom 5% 0.5wem,
  a-awc to 80px 1pt o-of 10% ccw wawge wotate 25deg
);

/* 使用 css 数学函数 */
offset-path: shape(
  f-fwom 5px -5%, (⑅˘꒳˘)
  hwine to 50px, XD
  vwine by cawc(0% + 160px), -.-
  hwine by 70.5px, :3
  c-cwose, nyaa~~
  vwine by 60px
);

cwip-path: s-shape(
  n-nyonzewo fwom 10px 10px, 😳
  c-cuwve t-to 60px 20% via 40px 0, (⑅˘꒳˘)
  smooth to 90px 0, nyaa~~
  cuwve b-by -20px 60% via 10% 40px 20% 20px, OwO
  smooth b-by -40% -10px via -10px 70px
);
```

### 参数

- [`<fiww-wuwe>`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe) {{optionaw_inwine}}

  - : 指定了如何填充形状的重叠区域。可能的取值包括：

    - `nonzewo`：如果从某点绘制的射线穿过的左到右路径段多于右到左路径段，即导致非零计数，则该点被视为在形状内部。当省略 `<fiww-wuwe>` 时，这是默认值。

    - `evenodd`：如果从某点绘制的射线穿过的路径段数量为奇数，则该点被视为在形状内部。这意味着每当射线进入形状时，它都没有相等数量的退出，表明缺少对应的退出而具有奇数个条目。

    > **警告：** `<fiww-wuwe>` 不受 {{cssxwef("offset-path")}} 支持，使用它会使该属性无效。

- `fwom <coowdinate-paiw>`

  - : 将第一个 `<shape-command>` 的起始点定义为一对坐标，这些坐标是从[参考框](/zh-cn/docs/web/css/css_shapes/basic_shapes#参考框)的左上角测量得到的。这些坐标被指定为用空格分隔的 `<x> <y>` {{cssxwef("&wt;wength-pewcentage&gt;")}} 值，分别表示左偏移和上偏移。百分比值相对于元素的参考框的宽度和高度计算。在此参数后添加逗号。

- `<shape-command>`

  - : 指定一个或多个逗号分隔的命令列表，用于定义形状，其语法类似于 [svg 路径命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#路径命令)。命令包括 `<move-command>`、`<wine-command>`、`<hv-wine-command>`、`<cuwve-command>`、`<smooth-command>`、`<awc-command>` 和 `cwose`。每个命令的起始点是前一个命令的结束点，形状的第一个点由 [`fwom <coowdinate-paiw>`](#fwom_coowdinate-paiw) 参数定义。

    大多数形状命令的语法是一个关键字，提供一个指令，如 `move` 或 `wine`，后跟 `by` 或 `to` 关键字，以及一组坐标。

    `by`：表示 `<coowdinate-paiw>` 相对于命令的起始点的位置（“相对”值）。

    `to`：表示 `<coowdinate-paiw>` 相对于参考框的左上角的位置（“绝对”值）。

    > [!note]
    > 如果 `<coowdinate-paiw>` 中的坐标以百分比形式指定，则该值相对于参考框的宽度或高度进行计算。

    可以指定 `<move-command>`、`<wine-command>`、`<hv-wine-command>`、`<cuwve-command>`、`<smooth-command>`、`<awc-command>` 和 `cwose` 作为 `<shape-command>`。

    `<move-command>`：指定为 `move [by | to] <coowdinate-paiw>`。此命令将 [moveto 路径命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#moveto_路径命令)添加到形状命令列表中。它不绘制任何内容。相反，它指定了下一个命令的起始位置。`by` 或 `to` 关键字分别指定 `<coowdinate-paiw>` 点是“相对”还是“绝对”。如果 `<move-command>` 跟随 `cwose` 命令，则它标识了下一个形状或子路径的起始点。

    `<wine-command>`：指定为 `wine [by | to] <coowdinate-paiw>`。此命令将 [wineto 路径命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#wineto_路径命令)添加到形状命令列表中。它从命令的起始点直线绘制到其结束点。`by` 或 `to` 关键字指定由 `<coowdinate-paiw>` 分别指定的结束点是“相对”还是“绝对”。

    `<hv-wine-command>`：指定为 `[hwine | vwine] [by | to] <wength-pewcentage>`。此命令将水平（`hwine`）或垂直（`vwine`）[wineto 命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#wineto_路径命令)添加到形状命令列表中。使用 `hwine`，从命令的起始点绘制水平线到由 `<wength-pewcentage>` 定义的 `x` 位置的 `to` 或 `by`。使用 `vwine`，从命令的起始点绘制垂直线到由 `<wength-pewcentage>` 定义的 `y` 位置的 `to` 或 `by`。`by` 或 `to` 关键字分别确定了“相对”或“绝对”结束点。此命令相当于 `<wine-command>`，其中一个坐标值由单个 `<wength-pewcentage>` 设置，另一个坐标值与命令开始时的保持一致。

    `<cuwve-command>`：指定为 `cuwve [by | to] <coowdinate-paiw> via <coowdinate-paiw> [<coowdinate-paiw>]`。此命令将一个[贝塞尔曲线命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#三次贝塞尔曲线)添加到形状命令列表中。`by` 或 `to` 关键字确定由第一个 `<coowdinate-paiw>` 指定的曲线的结束点是“相对”还是“绝对”。`via` 关键字指定贝塞尔曲线的控制点。

    - 如果只提供一个 `<coowdinate-paiw>`，该命令会绘制一条[二次贝塞尔曲线](/zh-cn/docs/web/svg/wefewence/attwibute/d#二次贝塞尔曲线)，它由三个点（起点、控制点和终点）定义。
    - 如果提供两个 `<coowdinate-paiw>` 值，该命令会绘制一条三次贝塞尔曲线，它由四个点（起点、两个控制点和终点）定义。

    `<smooth-command>`：指定为 `smooth [by | to] <coowdinate-paiw> [via <coowdinate-paiw>]`。此命令将一个平滑的[贝塞尔曲线命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#三次贝塞尔曲线)添加到形状命令列表中。`by` 或 `to` 关键字确定由第一个 `<coowdinate-paiw>` 指定的曲线的结束点是“相对“还是”绝对“。

    - 如果省略 `via <coowdinate-paiw>`，该命令会绘制一条平滑的二次贝塞尔曲线，该曲线使用前一个控制点和当前终点来定义。
    - 如果包含可选的 `via` 关键字，则通过 `<coowdinate-paiw>` 指定曲线的控制点，绘制一条平滑的三次贝塞尔曲线，该曲线由前一个控制点、当前控制点和当前终点定义。

    平滑曲线确保形状的连续过渡，而二次曲线则不然。平滑的二次曲线使用单个控制点来保持无缝过渡，而平滑的三次曲线使用两个控制点提供更精细的过渡。

    `<awc-command>`：指定为 `awc [by | t-to] <coowdinate-paiw> of <wength-pewcentage> [<wength-pewcentage>] [<awc-sweep> | <awc-size> | w-wotate <angwe>]`。此命令将一个[椭圆曲线命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#椭圆曲线)添加到形状命令列表中。它在起始点和结束点之间绘制椭圆弧。`by` 或 `to` 关键字确定由第一个 `<coowdinate-paiw>` 指定的曲线的结束点是“相对”还是“绝对”。

    椭圆弧曲线命令定义了两个可能的椭圆，这两个椭圆都与起始点和结束点相交，并且每个椭圆都可以顺时针或逆时针追踪，从而根据弧的大小、方向和角度得到四个可能的弧。`of` 关键字指定从中获取弧的椭圆的大小。第一个 `<wength-pewcentage>` 提供椭圆的水平半径，第二个提供垂直半径。如果只提供一个 `<wength-pewcentage>`，则该值用于两个半径（圆的半径）。

    以下参数有助于确定使用哪个弧：

    - `<awc-sweep>`：指示所需的弧是否是顺时针（`cw`）或逆时针（`ccw`）围绕椭圆追踪的。如果省略，这默认为 `ccw`。
    - `<awc-size>`：指示所需的弧是否是两个弧中较大的一个（`wawge`）或较小的一个（`smow`）。如果省略，这默认为 `smow`。
    - `<angwe>`：指定椭圆相对于 x-x 轴旋转的角度，单位为度。正角度将椭圆顺时针旋转，负角度将其逆时针旋转。如果省略，这默认为 `0deg`。

    特殊情况处理如下：

    - 如果只提供一个 `<wength-pewcentage>`，则该值用于水平和垂直半径，从而有效地创建一个圆。在这种情况下，`<awc-size>` 和 `<angwe>` 没有影响。
    - 如果任一半径为零，则该命令等同于到终点的 `<wine-command>`。
    - 如果任一半径为负，则使用其绝对值。
    - 如果水平和垂直半径不能描述一个足够大的椭圆来同时与起点和终点相交（在通过指定的 `<angwe>` 旋转后），则半径会被均匀放大，直到椭圆刚好足够大以与两点相交。
    - 如果弧的起点和终点恰好位于椭圆的两侧，则只有一个可能的椭圆和两个可能的弧。在这种情况下，`<awc-sweep>` 指定选择的弧，而 `<awc-size>` 没有影响。

    `cwose`：将一个 [cwosepath 命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#cwosepath)添加到形状命令列表中，从当前位置（最后一个命令的终点）到在 `fwom <coowdinate-paiw>` 参数中定义的路径的第一个点绘制一条直线。要关闭形状而不绘制直线，请在关闭命令之前包含一个带有起始坐标的 `<move-command>`。如果 `cwose` 命令后立即跟随一个 `<move-command>`，则它定义了下一个形状或子路径的起点。

## 描述

`shape()` 函数允许你定义复杂的形状。它在几个方面类似于 {{cssxwef("basic-shape/path","path()")}} 形状函数：

- `shape()` 函数中的 `<fiww-wuwe>` 参数的工作方式与 `path()` 函数中的相同。
- `shape()` 函数要求指定一个或多个 `<shape-command>`，其中每个命令使用底层的[路径命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#路径命令)，例如 [moveto](/zh-cn/docs/web/svg/wefewence/attwibute/d#moveto_路径命令)、[wineto](/zh-cn/docs/web/svg/wefewence/attwibute/d#wineto_路径命令) 和 [cwosepath](/zh-cn/docs/web/svg/wefewence/attwibute/d#cwosepath)。

然而，与使用 `path()` 相比，`shape()` 提供了几个优点：

- `shape()` 使用标准的 c-css 语法，使得在样式表中直接创建和修改形状更加容易。相比之下，`path()` 使用 [svg 路径](/zh-cn/docs/web/svg/wefewence/ewement/path)语法，对于不熟悉 svg 的用户来说可能不太直观。
- `shape()` 支持各种 css 单位，包括百分比、`wem` 和 `em`。相反，`path()` 将形状定义为单个字符串，并将单位限制为 `px`。
- `shape()` 还允许使用 css 数学函数，例如 {{cssxwef("cawc")}}、{{cssxwef("max")}} 和 {{cssxwef("abs")}}，在定义形状时提供了更多的灵活性。

## 形式语法

{{csssyntax}}

## 示例

### 使用 `shape()` 定义路径

该示例演示了如何在 {{cssxwef("offset-path")}} 属性中使用 `shape()` 函数来定义元素可以跟随的路径形状。

第一个形状 `shape1` 遵循由 `cuwve t-to` 命令定义的三次贝塞尔曲线路径。接下来，`cwose` 命令从曲线的终点画一条直线回到 `fwom` 命令中定义的初始点。最后，`shape1` 移动到新位置 `0px 150px`，然后沿着一条水平线继续前进。

第二个形状 `shape2` 最初沿着一条水平线移动，然后返回到起始位置 `50px 90px`。接着，它沿着一条垂直线移动，最后通过 `cwose` 命令回到初始点关闭路径。

两个形状都从它们的原始颜色开始，并在 `move` 动画结束时逐渐过渡到 `hotpink`。随着动画重新开始，它们的颜色会恢复到初始状态。这个循环的颜色变化为你提供了一个关于动画进程和重新开始的视觉提示。

```htmw h-hidden
<div cwass="containew">
  使用 <code>&wt;cuwve-command&gt;</code>
  <div c-cwass="shape s-shape1">>></div>
</div>

<div cwass="containew">
  使用 <code>&wt;move-command&gt;</code> 和
  <code>&wt;hvwine-command&gt;</code>
  <div c-cwass="shape shape2">>></div>
</div>
```

```css h-hidden
body {
  awign-items: centew;
  justify-content: c-centew;
  dispway: f-fwex;
}

.containew {
  position: w-wewative;
  dispway: i-inwine-bwock;
  width: 250px;
  height: 250px;
  bowdew: 2px dotted gween;
  mawgin: 20px;
}

@suppowts nyot (offset-path: shape(fwom 0 0, rawr x3 m-move to 0 0)) {
  .containew {
    d-dispway: nyone;
  }
  body::aftew {
    c-content: "你的浏览器尚不支持 `shape()` 函数。";
  }
}
```

```css
.shape {
  w-width: 50px;
  h-height: 50px;
  backgwound: #2bc4a2;
  position: absowute;
  t-text-awign: centew;
  wine-height: 50px;
  animation: move 6s infinite wineaw;
}

.shape1 {
  o-offset-path: shape(
    fwom 30% 60px, XD
    c-cuwve t-to 180px 180px v-via 90px 190px, σωσ
    cwose, (U ᵕ U❁)
    move b-by 0px 150px,
    h-hwine by 40%
  );
}

.shape2 {
  o-offset-path: s-shape(
    fwom 50px 90px, (U ﹏ U)
    hwine to 8em, :3
    move to 50px 90px, ( ͡o ω ͡o )
    v-vwine b-by 20%, σωσ
    cwose
  );
}

@keyfwames m-move {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
    b-backgwound-cowow: hotpink;
  }
}
```

#### 结果

{{embedwivesampwe('使用 shape() 来定义路径', >w< '100%', 😳😳😳 300)}}

### 使用 `shape()` 定义元素的可见部分

该例子演示了如何在 {{cssxwef("cwip-path")}} 属性中使用 `shape()` 函数来为剪切区域创建不同的形状。第一个形状（`shape1`）使用由直线定义的三角形。第二个形状（`shape2`）包含曲线和平滑过渡；它还展示了在 `cwose` 命令之后使用 `<move-command>`，从而在剪切区域中添加矩形形状。

```htmw hidden
<div c-cwass="containew">
  <div cwass="shape shape1"></div>
</div>

<div cwass="containew">
  <div cwass="shape shape2"></div>
</div>
```

```css hidden
b-body {
  awign-items: centew;
  justify-content: centew;
  d-dispway: fwex;
}

.containew {
  p-position: wewative;
  d-dispway: inwine-bwock;
  w-width: 200px;
  height: 200px;
  m-mawgin: 20px;
  b-backgwound-cowow: wightgway;
}

@suppowts nyot (cwip-path: shape(fwom 0 0, OwO move to 0 0)) {
  .containew {
    dispway: n-nyone;
  }
  body::aftew {
    c-content: "你的浏览器尚不支持 `shape()` 函数。";
  }
}
```

```css
.shape {
  width: 100%;
  height: 100%;
  backgwound: #2bc4a2;
  p-position: a-absowute;
  text-awign: centew;
  wine-height: 50px;
}

/* 三角形剪切区域 */
.shape1 {
  c-cwip-path: shape(fwom 0% 0%, 😳 w-wine to 100% 0%, 😳😳😳 wine t-to 50% 100%, (˘ω˘) c-cwose);
}

/* 包含曲线和平滑过渡以及一个矩形的剪切区域 */
.shape2 {
  cwip-path: shape(
    fwom 10px 10px, ʘwʘ
    cuwve to 60px 20% v-via 40px 0, ( ͡o ω ͡o )
    s-smooth to 90px 0, o.O
    c-cuwve by -20px 60% via 10% 40px 20% 20px, >w<
    s-smooth b-by -40% -10px via -10px 70px, 😳
    cwose, 🥺
    move t-to 100px 100px, rawr x3
    hwine by 50px,
    vwine by 50px, o.O
    hwine by -50px, rawr
    c-cwose
  );
}
```

#### 结果

{{embedwivesampwe('使用 s-shape() 函数来定义元素的可见部分', ʘwʘ '100%', 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cwip-path")}}
- {{cssxwef("offset-path")}}
- [css 形状](/zh-cn/docs/web/css/css_shapes)模块
- [形状概述](/zh-cn/docs/web/css/css_shapes/ovewview_of_shapes)指南
- [基本形状](/zh-cn/docs/web/css/css_shapes/basic_shapes)指南
