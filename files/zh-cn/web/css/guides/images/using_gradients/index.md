---
title: 使用 CSS 渐变
slug: Web/CSS/Guides/Images/Using_gradients
---

**CSS 渐变**由 {{cssxref("&lt;gradient&gt;")}} 数据类型表示，它是 {{cssxref("&lt;image&gt;")}} 的一种特殊类型，由两种或多种颜色之间的渐变过渡构成。你可以选择三种类型的渐变：_线性_（由 {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 函数创建）、_径向_（由 {{cssxref("gradient/radial-gradient", "radial-gradient()")}} 函数创建）和*锥形*（由 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 函数创建）。你还可以使用 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 和 {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 函数创建重复渐变。

渐变可以在任何使用 `<image>` 的地方使用，例如在背景中。由于渐变是动态生成的，因此可以消除对传统用于实现类似效果的栅格图像文件的需求。此外，由于渐变是由浏览器生成的，因此在放大时看起来比栅格图像更好，并且可以动态调整大小。

我们将从线性渐变开始介绍，然后以线性渐变为例介绍所有渐变类型支持的功能，然后继续介绍径向渐变、锥形渐变和重复渐变。

## 使用线性渐变

线性渐变创建了一条沿直线前进的颜色带。

### 基础线性渐变

要创建最基本的渐变类型，你只需指定两种颜色即可。这些被称为色标（color stop）。至少指定两个色标，也可以指定任意数量。

```html hidden
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('基础线性渐变', 120, 120) }}

### 改变渐变方向

默认情况下，线性渐变的方向是从上到下，你可以指定一个值来改变渐变的方向。

```html hidden
<div class="horizontal-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
```

{{ EmbedLiveSample('改变渐变方向', 120, 120) }}

### 对角线渐变

你甚至可以设置渐变方向为从一个对角到另一个对角。

```html hidden
<div class="diagonal-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 100px;
}
```

```css
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
```

{{ EmbedLiveSample('对角线渐变', 200, 100) }}

### 设置渐变角度

如果你想要更精确地控制渐变的方向，你可以给渐变设置一个具体的角度。

```html hidden
<div class="angled-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
```

{{ EmbedLiveSample('设置渐变角度', 120, 120) }}

在使用角度的时候，`0deg` 代表渐变方向为从下到上，`90deg` 代表渐变方向为从左到右，诸如此类正角度都属于顺时针方向。而负角度意味着逆时针方向。

![四个显示角度和相关渐变的盒子。0deg 从顶部到底部，90deg 从右到左，180deg 从底部到顶部，-90deg 从左到右](linear_red_angles.png)

## 声明颜色和创建效果

所有的 CSS 渐变类型都是一个位置依赖的颜色范围。CSS 渐变产生的颜色可以随位置不断变化，从而产生平滑的颜色过渡。也可以创建纯色带和两种颜色之间的硬过渡。以下内容适用于所有渐变函数：

### 使用多种颜色

无需局限于使用两种颜色，你想使用多少种颜色都可以！默认情况下，所设置颜色会均匀分布在渐变路径中。

```html hidden
<div class="auto-spaced-linear-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
```

{{ EmbedLiveSample('使用多种颜色', 120, 120) }}

### 色标位置

你不需要将你的色标设置在默认的位置。你可以为径向和线性渐变设置 0、1 或 2 个百分比值或者绝对长度值来调整它们的位置。如果你将位置设置为百分数，`0%` 表示起始点，而 `100%` 表示终点，但是如果需要的话你也可以设置这个范围之外的其他值来达到你想要的效果。如果有些位置你没有明确设置，那么将会自动计算，第一个色标在 `0%` 处，最后一个色标在 `100%`，其他的色标则位于其相邻的两个色标中间。

```html hidden
<div class="multicolor-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.multicolor-linear {
  background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

{{ EmbedLiveSample('颜色终止位置', 120, 120) }}

### 创建硬线

要在两种颜色之间创建一条硬线，即创建一个条纹而不是逐渐过渡，可以将相邻的颜色停止设置为相同的位置。在此示例中，两种颜色在 `50%` 标记处共享一个颜色停止点，即渐变的一半：

```html hidden
<div class="striped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.striped {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{ EmbedLiveSample('创建实线', 120, 120) }}

### 渐变提示

默认情况下，渐变会平滑地从一种颜色过渡到另一种颜色。你可以通过设置一个值来将渐变的中心点移动到指定位置。在如下示例中，我们将渐变的中心点由 50% 设为 10%。

```html hidden
<div class="color-hint"></div>
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
}
```

```css
.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('渐变提示', 120, 120) }}

### 创建色带和条纹

要在渐变中包含一个实心、非过渡的颜色区域，请包含色标的两个位置。色标可以有两个位置，这相当于两个连续颜色在不同位置具有相同的色标。颜色将在第一个色标时达到完全饱和，保持该饱和度到第二个色标，并通过相邻色标的第一个位置过渡到相邻色标的颜色。

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.multiposition-stops {
  background: linear-gradient(
    to left,
    lime 20%,
    red 30%,
    red 45%,
    cyan 55%,
    cyan 70%,
    yellow 80%
  );
  background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.multiposition-stop2 {
  background: linear-gradient(
    to left,
    lime 25%,
    red 25%,
    red 50%,
    cyan 50%,
    cyan 75%,
    yellow 75%
  );
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
```

{{ EmbedLiveSample('创建色带和条纹', 120, 120) }}

在上面的第一个例子中，黄绿色从 0% 的位置中开始（这是推断出来的），然后到 20% 的位置，在之后的渐变宽度的 10% 内，开始由黄绿色转换为红色，在 30% 的位置到达纯红色，然后一直保持为红色，直到渐变中的 45% 的位置，然后淡化到青色，这持续了渐变的 15% 的过程，然后然后继续。

在第二个例子中，每个颜色的第二个色标都是相邻颜色的第一个色标，创建一个条纹效果。

在这两个例子中，渐变都写了两次：第一个是 CSS Images Level 3 方法，可为每个色标重复颜色，第二个是 CSS Images Level 4 多个色标方法，在一个线性的色标声明中包含两个色标长度。

### 控制渐变的进程

默认情况下，渐变在两个相邻的色标之间都是均匀推进的，两个色标之间的中点是颜色值的中点。你可以控制两个色标之间的{{Glossary("interpolation","插值")}}，或者过程，方法是添加一个颜色提示位置。在这个例子中，颜色在渐变过程的 20% 而不是 50% 的位置到达黄绿色和青色之间的中点。第二个例子没有提示，因此可以通过对比看出颜色提示的效果。

```html hidden
<div class="colorhint-gradient"></div>
<div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.colorhint-gradient {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, lime, cyan);
}
```

{{ EmbedLiveSample('控制渐变的进程', 120, 120) }}

### 叠加渐变

渐变支持透明度，所以你可以将多个背景叠加起来以实现一些非常好看的效果。背景是从顶部到底部堆叠的，指定的第一个就是顶部。

```html hidden
<div class="layered-image"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.layered-image {
  background:
    linear-gradient(to right, transparent, mistyrose), url("critters.png");
}
```

{{ EmbedLiveSample('叠加渐变', 300, 150) }}

### 堆叠渐变

你可以将渐变与其他的渐变堆叠起来。只要顶部的渐变不是完全不透明的，那么下面的渐变就会依然可见。

```html hidden
<div class="stacked-linear"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-linear {
  background:
    linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}
```

{{ EmbedLiveSample('堆叠渐变', 200, 200) }}

## 使用径向渐变

径向渐变类似于线性渐变，除了是从一个中心点向外辐射的。你可以指定中心点的位置。你还可以使其为圆形或者是椭圆形。

### 基本的径向渐变

和线性渐变一样，创建径向渐变所需要的就是两个颜色。默认情况下，渐变的中心点是 50% 50% 的位置，且渐变是椭圆的以匹配盒的比例。

```html hidden
<div class="simple-radial"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.simple-radial {
  background: radial-gradient(red, blue);
}
```

{{ EmbedLiveSample('基本的径向渐变', 120, 120) }}

### 设置径向色标的位置

和线性渐变一样，你可以用百分比或者绝对长度指定每个径向色标的位置。

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('设置径向色标的位置', 120, 120) }}

### 设置渐变的中心

你可以使用关键字、百分比或者绝对长度、长度和百分比值的重复（如果存在，否则就是从左侧位置和顶部位置开始的）以指定渐变的中心。

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('设置渐变的中心', 120, 120) }}

### 设置径向渐变的大小

和线性渐变不同，你可以指定径向渐变的大小。可能的值包括 `closest-corner`、`closest-side`、`farthest-corner` 和 `farthest-side`，其中 `farthest-corner` 是默认值。圆的大小为长度，椭圆则是长度和百分比。

#### 示例：椭圆渐变的 closet-side 值

这个例子使用了 `closest-side` 大小值，意思就是大小是通过开始点（中心）和包围盒的最近一侧的距离设置的。

```html hidden
<div class="radial-ellipse-side"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-side {
  background: radial-gradient(
    ellipse closest-side,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('示例：椭圆渐变的 closet-side 值', 240, 100) }}

#### 示例：椭圆渐变的 farthest-corner 值

这个例子和前一个类似，但是其大小是以 `farthest-corner` 指定的，这会将渐变的大小设置为从开始点到包围盒的距离开始点的最远角的距离设置的。

```html hidden
<div class="radial-ellipse-far"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-far {
  background: radial-gradient(
    ellipse farthest-corner at 90% 90%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('示例：椭圆渐变的 farthest-corner 值', 240, 100) }}

#### 示例：圆形渐变的 closet-side 值

这个例子使用了 `closest-side`，使得圆的半径是渐变中心到最近一侧的距离。在这个例子中，半径是中心到底部的距离，因为渐变位于左侧 25%、底部 25% 的位置，而 div 元素的高度小于宽度。

```html hidden
<div class="radial-circle-close"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-close {
  background: radial-gradient(
    circle closest-side at 25% 75%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('示例：圆形渐变的 closet-side 值', 240, 120) }}

#### 示例：椭圆形渐变长度或百分比

对于椭圆，你可以使用长度或者百分比来设置其大小，第一个值代表了水平半径，第二个值是竖直半径，你可以使用百分比以表示相对于盒在那个维度上的大小的值。在下面这个例子中，我使用了百分比以表示水平半径。

```html hidden
<div class="radial-ellipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-ellipse-size {
  background: radial-gradient(
    ellipse 50% 50px,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('示例：椭圆长度或百分比', 240, 120) }}

#### 示例：圆形渐变的长度

对于圆，尺寸可以用 [\<length>](/zh-CN/docs/Web/CSS/Reference/Values/length) 提供，这就是圆的尺寸。

```html hidden
<div class="radial-circle-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-size {
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('示例：圆的长度', 240, 120) }}

### 堆叠径向渐变

就像线性渐变一样，你也可以堆叠径向渐变。指定的第一个位于顶部，最后一个位于底部。

```html hidden
<div class="stacked-radial"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-radial {
  background:
    radial-gradient(
      circle at 50% 0,
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(0, 255, 0, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      )
      beige;
  border-radius: 50%;
}
```

{{ EmbedLiveSample('堆叠径向渐变', 200, 200) }}

## 使用锥形渐变

**`conic-gradient()`** [CSS](/zh-CN/docs/Web/CSS) 函数创建包含颜色围绕中心点旋转（而不是从中心点辐射）产生的渐变的图像。锥形渐变的例子包括了饼图和{{glossary("color wheel", "色轮")}}，但是也可以用于创建棋盘格和其他有趣的效果。

锥形渐变的语法和径向渐变的语法类似，但是色标是围绕渐变弧（圆的圆周）进行的，而不是从渐变中心出现的渐变线上，并且色标是百分比或度数：绝对长度无效。

在径向渐变中，颜色从椭圆中心的位置在各个方向上向外过渡。在锥形渐变中，颜色围绕圆的中心在圆周上旋转过渡，从顶部开始，顺时针进行。类似于径向渐变，你可以设置渐变的中心。类似于线性渐变，你可以改变渐变的角度。

### 基本的锥形渐变

和线性和径向的渐变类似，创建锥形渐变所需要的就是两个颜色。默认情况下，渐变的中心位于 50% 50% 的位置，渐变的开始点是朝上的。

```html hidden
<div class="simple-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-conic {
  background: conic-gradient(red, blue);
}
```

{{ EmbedLiveSample('基本的锥形渐变', 120, 120) }}

### 设置锥形渐变的位置

和锥形渐变类似，你可以使用关键词、百分比或者绝对长度，以及关键字“at”来设置锥形渐变的中心位置。

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('设置锥形渐变的位置', 120, 120) }}

### 改变角度

默认情况下，你指定的不同色标是围绕着圆均等分布的。你可以在开始时使用“from”关键字以及一个角度或者长度以指定锥形渐变的起始点，然后你可以在后面包括角度或者长度以指定不同的位置。

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}
```

{{ EmbedLiveSample('改变角度', 120, 120) }}

## 使用重复渐变

{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/radial-gradient", "radial-gradient()")}} 和 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 函数不支持自动重复的色标。但是，{{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} 和 {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 函数可以用于提供此功能。

重复渐变线或弧的大小，是第一个色标和最后一个色标之间的长度。如果第一个色标只有颜色没有色标长度，那么值默认为 0。如果最后一个色标只有颜色没有色标长度，那么值默认为 100%。如果都没有指定，那么渐变线是 100%，意味着线性和锥形的渐变都不会重复，径向渐变只会在渐变的半径小于中心点和最远角之间的距离时重复。如果第一个色标声明了，其值大于 0，渐变也会重复，因为线或弧的大小就是第一个色标和最后一个色标之间的距离，小于 100% 或 360 度。

### 重复的线性渐变

这个例子使用了 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 以创建一个沿着直线重复推进的渐变。随渐变进行，颜色会重复循环。在这个例子中，渐变线的长度为 10px。

```html hidden
<div class="repeating-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-linear {
  background: repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
}
```

{{ EmbedLiveSample('重复的线性渐变', 120, 120) }}

### 多个线性渐变

和常规的线性和径向渐变类似，你可以包含多个渐变，一个在另一个的顶部。这只有在渐变部分透明时有效，以允许的后续的渐变穿透透明区域显示，或者你为每个渐变图像指定不同的 [background-size](/zh-CN/docs/Web/CSS/Reference/Properties/background-size)，还可以有不同的 [background-position](/zh-CN/docs/Web/CSS/Reference/Properties/background-position) 属性值。我们使用透明。

在这个例子中，渐变线的长度为 300px、230px 和 300px。

```html hidden
<div class="multi-repeating-linear"></div>
```

```css hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.multi-repeating-linear {
  background:
    repeating-linear-gradient(
      190deg,
      rgba(255, 0, 0, 0.5) 40px,
      rgba(255, 153, 0, 0.5) 80px,
      rgba(255, 255, 0, 0.5) 120px,
      rgba(0, 255, 0, 0.5) 160px,
      rgba(0, 0, 255, 0.5) 200px,
      rgba(75, 0, 130, 0.5) 240px,
      rgba(238, 130, 238, 0.5) 280px,
      rgba(255, 0, 0, 0.5) 300px
    ),
    repeating-linear-gradient(
      -190deg,
      rgba(255, 0, 0, 0.5) 30px,
      rgba(255, 153, 0, 0.5) 60px,
      rgba(255, 255, 0, 0.5) 90px,
      rgba(0, 255, 0, 0.5) 120px,
      rgba(0, 0, 255, 0.5) 150px,
      rgba(75, 0, 130, 0.5) 180px,
      rgba(238, 130, 238, 0.5) 210px,
      rgba(255, 0, 0, 0.5) 230px
    ),
    repeating-linear-gradient(
      23deg,
      red 50px,
      orange 100px,
      yellow 150px,
      green 200px,
      blue 250px,
      indigo 300px,
      violet 350px,
      red 370px
    );
}
```

{{ EmbedLiveSample('多个线性渐变', 600, 400) }}

### 格纹渐变

要创建格纹，我们使用了几个重叠的带有透明的渐变。在第一个背景声明中，我们分别列举出了每个色标。第二个背景属性声明使用了色标的多个位置的语法：

```html hidden
<div class="plaid-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.plaid-gradient {
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px
    );

  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 50px,
      rgba(255, 127, 0, 0.25) 50px 56px,
      transparent 56px 63px,
      rgba(255, 127, 0, 0.25) 63px 69px,
      transparent 69px 116px,
      rgba(255, 206, 0, 0.25) 116px 166px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0 50px,
      rgba(255, 127, 0, 0.25) 50px 56px,
      transparent 56px 63px,
      rgba(255, 127, 0, 0.25) 63px 69px,
      transparent 69px 116px,
      rgba(255, 206, 0, 0.25) 116px 166px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0 5px,
      rgba(143, 77, 63, 0.25) 5px 10px
    ),
    repeating-linear-gradient(
      45deg,
      transparent 0 5px,
      rgba(143, 77, 63, 0.25) 5px 10px
    );
}
```

{{ EmbedLiveSample('格纹渐变', 200, 200) }}

### 重复的径向渐变

这个例子使用了 {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} 以创建从中心点重复向外辐射的渐变。颜色会随渐变重复而循环。

```html hidden
<div class="repeating-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-radial {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{ EmbedLiveSample('重复的径向渐变', 120, 120) }}

### 多个重复的径向渐变

```html hidden
<div class="multi-target"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.multi-target {
  background:
    repeating-radial-gradient(
        ellipse at 80% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 15px,
        rgba(255, 255, 255, 0.5) 15px,
        rgba(255, 255, 255, 0.5) 30px
      )
      top left no-repeat,
    repeating-radial-gradient(
        ellipse at 20% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 10px,
        rgba(255, 255, 255, 0.5) 10px,
        rgba(255, 255, 255, 0.5) 20px
      )
      top left no-repeat yellow;
  background-size:
    200px 200px,
    150px 150px;
}
```

{{ EmbedLiveSample('多个重复的径向渐变', 250, 150) }}

## 参见

- 渐变函数：{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- 和渐变有关的 CSS 数据类型：{{cssxref("&lt;gradient&gt;")}}、{{cssxref("&lt;image&gt;")}}
- 和渐变有关的 CSS 属性：{{cssxref("background")}}、{{cssxref("background-image")}}
- [CSS 渐变纹样图集，作者 Lea Verou](https://projects.verou.me/css3patterns/)
- [CSS 渐变库，作者 Estelle Weyl](http://standardista.com/cssgradients/)
- [渐变 CSS 生成器](https://cssgenerator.org/gradient-css-generator.html)
