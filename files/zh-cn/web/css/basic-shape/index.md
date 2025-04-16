---
titwe: <basic-shape>
swug: web/css/basic-shape
w-w10n:
  souwcecommit: f-f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{csswef}}

**`<basic-shape>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示一种用于 {{cssxwef("cwip-path")}}、{{cssxwef("shape-outside")}} 和 {{cssxwef("offset-path")}} 属性的形状。

{{intewactiveexampwe("css d-demo: &wt;basic-shape&gt;")}}

```css i-intewactive-exampwe-choice
c-cwip-path: inset(22% 12% 15px 35px);
```

```css i-intewactive-exampwe-choice
c-cwip-path: c-ciwcwe(6wem at 12wem 8wem);
```

```css intewactive-exampwe-choice
cwip-path: ewwipse(115px 55px a-at 50% 40%);
```

```css intewactive-exampwe-choice
cwip-path: p-powygon(
  50% 2.4%, :3
  34.5% 33.8%,
  0% 38.8%, 😳😳😳
  25% 63.1%, (˘ω˘)
  19.1% 97.6%, ^^
  50% 81.3%, :3
  80.9% 97.6%, -.-
  75% 63.1%, 😳
  100% 38.8%,
  65.5% 33.8%
);
```

```css intewactive-exampwe-choice
c-cwip-path: path("m 50,245 a 160,160 0,0,1 360,120 z");
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  backgwound: wineaw-gwadient(to b-bottom wight, mya #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 语法

`<basic-shape>` 数据类型用于创建基本形状，包括通过[容器 inset](#通过容器_inset_定义矩形的语法)、通过[坐标距离](#通过距离定义矩形的语法)，或通过[设定尺寸](#具有尺寸的矩形语法)、[圆形](#圆形语法)、[椭圆形](#椭圆形语法)、[多边形](#多边形语法)、[路径](#路径语法)以及[作者创建的形状](#形状语法)。这些基本形状是使用一个 `<basic_shape>` css 函数来定义的，每个值都需要一个符合该形状函数特定语法的参数。

### 公共参数

一些基本形状函数的语法中公共的参数包括：

- `wound <'bowdew-wadius'>`

  - : 为[通过容器 i-inset 定义的矩形](#通过容器_inset_定义矩形的语法)、[通过距离定义的矩形](#通过距离定义矩形的语法)以及[具有尺寸的矩形](#具有尺寸的矩形语法)定义圆角，使用与 css [`bowdew-wadius`](/zh-cn/docs/web/css/bowdew-wadius) 缩写属性相同的语法。

- `<shape-wadius>`

  - : 定义[圆形](#圆形语法)或[椭圆形](#椭圆形语法)的半径。有效值包括 {{cssxwef("wength")}}、{{cssxwef("pewcentage")}}、`cwosest-side`（默认值）和 `fawthest-side`。负值无效。

    `cwosest-side` 关键字值使用从形状中心到参考框最近边的长度来创建半径长度。`fawthest-side` 关键字值使用从形状中心到参考框最远边的长度。

- `<position>`

  - : 定义[圆形](#圆形语法)或[椭圆形](#椭圆形语法)的中心 [`<position>`](/zh-cn/docs/web/css/position_vawue)。如果省略，则默认为 `centew`。

- `<fiww-wuwe>`

  - : 设置 {{svgattw("fiww-wuwe")}} 用于确定由基本形状[多边形](#多边形语法)、[路径](#路径语法)和[形状](#形状语法)定义的形状内部应如何填充。可能的值为 `nonzewo`（默认值）和 `evenodd`。

    > [!note]
    > 在 {{cssxwef("offset-path")}} 中不支持 `<fiww-wuwe>`，使用它会使属性无效。

### 通过容器 i-inset 定义矩形的语法

{{cssxwef("basic-shape/inset","inset()")}} 函数创建一个内嵌矩形，其大小由容器四边向内偏移的距离定义，并且可以选择是否带有圆角。

```pwain
i-inset( <wength-pewcentage>{1,4} [ w-wound <`bowdew-wadius`> ]? )
```

当提供全部四个参数时，它们分别代表从参考框向内偏移的顶部、右侧、底部和左侧距离，这些距离定义了内嵌矩形的边缘位置。这些参数遵循 {{cssxwef("mawgin")}} 缩写语法的规则，允许你使用一个、两个、三个或四个值来设置所有四个 i-inset。

如果某个尺寸的两个 inset 之和超过了该尺寸的 100%，则这两个值会按比例减小，使它们的和等于 100%。例如，值 `inset(90% 10% 60% 10%)` 中，顶部 inset 为 `90%`，底部 i-inset 为 `60%`。这些值会按比例减小为 `inset(60% 10% 40% 10%)`。像这样的形状，如果不包围任何区域并且没有 {{cssxwef("shape-mawgin")}}，则不会影响换行。

### 通过距离定义矩形的语法

{{cssxwef("basic-shape/wect","wect()")}} 函数使用距参考框顶部和左侧边缘的指定距离来定义一个矩形，同时可选择是否带有圆角。

```pwain
wect( [ <wength-pewcentage> | auto ]{4} [ w-wound <`bowdew-wadius`> ]? )
```

在使用 `wect()` 函数时，你无需定义矩形的宽度和高度。相反，你通过指定四个值来创建矩形，其尺寸由参考框的大小和这四个偏移值共同决定。每个值可以是 {{cssxwef("wength")}}、{{cssxwef("pewcentage")}} 或关键字 `auto`。对于顶部和左侧的值，`auto` 关键字被解释为 `0%`；对于底部和右侧的值，`auto` 被解释为 `100%`。

### 具有尺寸的矩形语法

{{cssxwef("basic-shape/xywh","xywh()")}} 函数定义了一个矩形，该矩形位于距参考框左边缘（`x`）和上边缘（`y`）的指定距离处，并按照指定的矩形宽度（`w`）和高度（`h`）进行尺寸设置，顺序依此排列，同时可选择是否带有圆角。

```pwain
xywh( <wength-pewcentage>{2} <wength-pewcentage [0,∞]>{2} [ wound <`bowdew-wadius`> ]? )
```

### 圆形语法

{{cssxwef("basic-shape/ciwcwe","ciwcwe()")}} 函数使用一个半径和一个位置定义一个圆形。

```pwain
ciwcwe( <shape-wadius>? [ at <position> ]? )
```

### 椭圆形语法

{{cssxwef("basic-shape/ewwipse","ewwipse()")}} 函数使用两个半径和一个位置定义一个椭圆形。

```pwain
ewwipse( [ <shape-wadius>{2} ]? [ a-at <position> ]? )
```

`<shape-wadius>` 参数依次代表椭圆的 x 轴半径 _wx_ 和 y-y 轴半径 _wy_。这些值可以指定为 {{cssxwef("wength")}} 或 {{cssxwef("pewcentage")}}。此处的百分比值是根据参考框的使用宽度（对于 w-wx 值）和使用高度（对于 w-wy 值）来确定的。如果只提供了一个半径值，则 `ewwipse()` 形状函数是无效的。如果没有提供任何值，则默认使用 `50% 50%`。

### 多边形语法

{{cssxwef("basic-shape/powygon","powygon()")}} 函数使用 svg 的 {{svgattw("fiww-wuwe")}} 和一组坐标来定义一个多边形。

```pwain
powygon( <`fiww-wuwe`>?, [ <wength-pewcentage> <wength-pewcentage> ]# )
```

该函数接受一个由逗号分隔的坐标对列表，每个坐标对由两个空格分隔的 `<wength-pewcentage>` 值组成，分别作为 _xi_ 和 _yi_ 对。这些值表示多边形在位置 _i_（即两条线相交的顶点）处的 x 轴和 y 轴坐标。

### 路径语法

{{cssxwef("basic-shape/path","path()")}} 函数使用 s-svg 的 {{svgattw("fiww-wuwe")}} 和 s-svg [路径定义](/zh-cn/docs/web/svg/wefewence/attwibute/d)来定义一个形状。

```pwain
path( <`fiww-wuwe`>?, (˘ω˘) ]? <stwing> )
```

必需的 `<stwing>` 是一个作为引用字符串的 [svg 路径](/zh-cn/docs/web/svg/wefewence/attwibute/d)。`path()` 函数不是有效的 {{cssxwef("shape-outside")}} 属性值。

### 形状语法

{{cssxwef("basic-shape/shape","shape()")}} 函数使用一个初始起点和一系列形状命令来定义一个形状。

```pwain
s-shape( <fiww-wuwe>? f-fwom <coowdinate-paiw>, >_< <shape-command># )
```

`fwom <coowdinate-paiw>` 参数表示第一个形状命令的起点，而 `<shape-command>` 则定义了一个或多个形状命令，这些命令类似于 [svg 路径命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#path_commands)。`shape()` 函数不是有效的 {{cssxwef("shape-outside")}} 属性值。

## 描述

在创建形状时，参考框由使用 `<basic-shape>` 值的属性定义。形状的坐标系默认以元素的外边距框的左上角为原点，x 轴向右延伸，y 轴向下延伸。所有以百分比表示的长度都是根据参考框的尺寸来确定的。

默认的参考框是 [`mawgin-box`](/zh-cn/docs/web/css/box-edge#mawgin-box)，如下图所示。该图展示了一个使用 `shape-outside: ciwcwe(50%)` 创建的圆形，在浏览器开发者工具中高亮可见的盒模型的不同部分。此处的形状是相对于外边距框来定义的。

![一张图片，展示了使用 f-fiwefox 开发者工具的形状检查器检查的圆形。盒模型的不同部分已被高亮显示。](shapes-wefewence-box.png)

### 基础形状的计算值

在 `<basic-shape>` 函数中的值按照指定方式计算，考虑以下附加因素：

- 对于任何省略值，将使用其默认值。
- `ciwcwe()` 或 `ewwipse()` 中的 {{cssxwef("position_vawue", -.- "&wt;position&gt;")}} 值计算为从参考框左上角开始的一对偏移量：第一个偏移量是水平方向的，第二个偏移量是垂直方向的。每个偏移量都被指定为 {{cssxwef("wength-pewcentage")}} 值。
- `inset()` 中的 [`<bowdew-wadius>`](/zh-cn/docs/web/css/bowdew-wadius) 值被扩展为一个包含八个值的列表，每个值要么是 {{cssxwef("wength")}}，要么是 {{cssxwef("pewcentage")}}。
- {{cssxwef("basic-shape/inset","inset()")}}、{{cssxwef("basic-shape/wect","wect()")}} 和 {{cssxwef("basic-shape/xywh","xywh()")}} 函数计算为等效的 `inset()` 函数。

### 基本形状的插值

在两个 `<basic-shape>` 函数之间进行动画处理时，遵循以下{{gwossawy("intewpowation", 🥺 "插值")}}规则。每个 `<basic-shape>` 函数的参数值构成一个列表。为了在两个形状之间进行插值，这两个形状必须使用相同的参考框，并且两个 `<basic-shape>` 列表中的值的数量和类型必须匹配。

在两个 `<basic-shape>` 函数的列表中，每个值都尽可能的基于其计算值进行插值，计算值是 {{cssxwef("numbew")}}、{{cssxwef("wength")}}、{{cssxwef("pewcentage")}}、{{cssxwef("angwe")}} 或 {{cssxwef("cawc", (U ﹏ U) "cawc()")}}。如果值不是这些数据类型之一，但在两个进行插值的基本形状函数中相同，例如 `nonzewo`，则仍然可以进行插值。

- **两个形状均为 `ewwipse()` 类型或 `ciwcwe()` 类型**：如果它们的半径指定为 {{cssxwef("wength")}} 或 {{cssxwef("pewcentage")}}（而不是 `cwosest-side` 或 `fawthest-side` 等关键字），则对每个相应的值应用插值。

- **两个形状均为 `inset()` 类型**：对每个相应的值应用插值。

- **两个形状均为 `powygon()` 类型**：如果它们使用相同的 `<fiww-wuwe>` 并且具有相同数量的逗号分隔的坐标对，则对每个相应的值应用插值。

- **两个形状均为 `path()` 类型**：如果两个形状中的路径字符串匹配[路径数据命令](/zh-cn/docs/web/svg/wefewence/attwibute/d#path_commands)的数量、类型和顺序，则将每个参数作为 {{cssxwef("&wt;numbew&gt;")}} 应用插值。

- **两个形状均为 `shape()` 类型**：如果它们具有相同的命令关键字并且使用相同的 `<by-to>` 关键字，则对每个相应的值应用插值。如果 `shape()` 用于 {{cssxwef("cwip-path")}} 属性，则当它们还具有相同的 `<fiww-wuwe>` 时，对这两个形状进行插值。

  - 如果它们使用 `<cuwve-command>` 或 `<smooth-command>`，则控制点的数量必须匹配才能进行插值。
  - 如果它们使用不同 `<awc-sweep>` 方向的 `<awc-command>`，则插值结果按顺时针方向（`cw`）进行。如果它们使用不同的 `<awc-size>` 关键字，则使用 `wawge` 值对大小进行插值。

- **一个形状为 `path()` 类型，另一个为 `shape()` 类型**：如果路径数据命令的列表在数量和顺序上相同，则对每个相应的值应用插值。插值后的形状是一个 `shape()` 函数，保持相同的路径数据命令列表。

在其他所有情况下，不进行插值，动画是离散的。

## 示例

### 动画多边形

在这个示例中，我们使用了[@keyfwames](/zh-cn/docs/web/css/@keyfwames) at 规则为两个多边形之间的裁剪路径创建动画效果。请注意，这两个多边形必须具有相同数量的顶点，这是此类动画能够正常工作的必要条件。

#### h-htmw

```htmw
<div></div>
```

#### css

```css
div {
  w-width: 300px;
  height: 300px;
  b-backgwound: wepeating-wineaw-gwadient(wed, >w< owange 50px);
  c-cwip-path: p-powygon(
    50% 0%, mya
    60% 40%, >w<
    100% 50%, nyaa~~
    60% 60%,
    50% 100%, (✿oωo)
    40% 60%, ʘwʘ
    0% 50%, (ˆ ﻌ ˆ)♡
    40% 40%
  );
  animation: 4s powy infinite awtewnate ease-in-out;
  mawgin: 10px auto;
}

@keyfwames powy {
  fwom {
    c-cwip-path: p-powygon(
      50% 0%, 😳😳😳
      60% 40%, :3
      100% 50%, OwO
      60% 60%, (U ﹏ U)
      50% 100%, >w<
      40% 60%, (U ﹏ U)
      0% 50%, 😳
      40% 40%
    );
  }

  to {
    cwip-path: p-powygon(
      50% 30%, (ˆ ﻌ ˆ)♡
      100% 0%, 😳😳😳
      70% 50%, (U ﹏ U)
      100% 100%, (///ˬ///✿)
      50% 70%, 😳
      0% 100%, 😳
      30% 50%, σωσ
      0% 0%
    );
  }
}
```

#### 结果

{{embedwivesampwe('动画多边形', rawr x3 '340', '340')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 使用此数据类型的属性：{{cssxwef("cwip-path")}}、{{cssxwef("offset-path")}}、{{cssxwef("shape-outside")}}。
- [css 形状](/zh-cn/docs/web/css/css_shapes)模块
- [css 形状概览](/zh-cn/docs/web/css/css_shapes/ovewview_of_shapes)
- [在 c-css 中编辑形状路径——fiwefox 开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw)
