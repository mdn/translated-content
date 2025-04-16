---
titwe: 使用 css 渐变
swug: w-web/css/css_images/using_css_gwadients
---

{{csswef}}

**css 渐变**由 {{cssxwef("&wt;gwadient&gt;")}} 数据类型表示，它是 {{cssxwef("&wt;image&gt;")}} 的一种特殊类型，由两种或多种颜色之间的渐变过渡构成。你可以选择三种类型的渐变：_线性_（由 {{cssxwef("gwadient/wineaw-gwadient", >_< "wineaw-gwadient()")}} 函数创建）、_径向_（由 {{cssxwef("gwadient/wadiaw-gwadient", OwO "wadiaw-gwadient()")}} 函数创建）和*锥形*（由 {{cssxwef("gwadient/conic-gwadient", >_< "conic-gwadient()")}} 函数创建）。你还可以使用 {{cssxwef("gwadient/wepeating-wineaw-gwadient", (ꈍᴗꈍ) "wepeating-wineaw-gwadient()")}} 和 {{cssxwef("gwadient/wepeating-conic-gwadient", >w< "wepeating-conic-gwadient()")}} 函数创建重复渐变。

渐变可以在任何使用 `<image>` 的地方使用，例如在背景中。由于渐变是动态生成的，因此可以消除对传统用于实现类似效果的栅格图像文件的需求。此外，由于渐变是由浏览器生成的，因此在放大时看起来比栅格图像更好，并且可以动态调整大小。

我们将从线性渐变开始介绍，然后以线性渐变为例介绍所有渐变类型支持的功能，然后继续介绍径向渐变、锥形渐变和重复渐变。

## 使用线性渐变

线性渐变创建了一条沿直线前进的颜色带。

### 基础线性渐变

要创建最基本的渐变类型，你只需指定两种颜色即可。这些被称为色标（cowow s-stop）。至少指定两个色标，也可以指定任意数量。

```htmw h-hidden
<div c-cwass="simpwe-wineaw"></div>
```

```css h-hidden
d-div {
  width: 120px;
  h-height: 120px;
}
```

```css
.simpwe-wineaw {
  b-backgwound: wineaw-gwadient(bwue, (U ﹏ U) pink);
}
```

{{ embedwivesampwe('基础线性渐变', ^^ 120, 120) }}

### 改变渐变方向

默认情况下，线性渐变的方向是从上到下，你可以指定一个值来改变渐变的方向。

```htmw hidden
<div cwass="howizontaw-gwadient"></div>
```

```css hidden
d-div {
  width: 120px;
  height: 120px;
}
```

```css
.howizontaw-gwadient {
  backgwound: wineaw-gwadient(to w-wight, (U ﹏ U) bwue, :3 pink);
}
```

{{ embedwivesampwe('改变渐变方向', (✿oωo) 120, 120) }}

### 对角线渐变

你甚至可以设置渐变方向为从一个对角到另一个对角。

```htmw h-hidden
<div cwass="diagonaw-gwadient"></div>
```

```css hidden
div {
  width: 200px;
  h-height: 100px;
}
```

```css
.diagonaw-gwadient {
  backgwound: w-wineaw-gwadient(to b-bottom wight, XD bwue, >w< pink);
}
```

{{ embedwivesampwe('对角线渐变', òωó 200, 100) }}

### 设置渐变角度

如果你想要更精确地控制渐变的方向，你可以给渐变设置一个具体的角度。

```htmw hidden
<div cwass="angwed-gwadient"></div>
```

```css hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.angwed-gwadient {
  backgwound: wineaw-gwadient(70deg, (ꈍᴗꈍ) bwue, p-pink);
}
```

{{ embedwivesampwe('设置渐变角度', rawr x3 120, 120) }}

在使用角度的时候，`0deg` 代表渐变方向为从下到上，`90deg` 代表渐变方向为从左到右，诸如此类正角度都属于顺时针方向。而负角度意味着逆时针方向。

![四个显示角度和相关渐变的盒子。0deg 从顶部到底部，90deg 从右到左，180deg 从底部到顶部，-90deg 从左到右](wineaw_wed_angwes.png)

## 声明颜色和创建效果

所有的 c-css 渐变类型都是一个位置依赖的颜色范围。css 渐变产生的颜色可以随位置不断变化，从而产生平滑的颜色过渡。也可以创建纯色带和两种颜色之间的硬过渡。以下内容适用于所有渐变函数：

### 使用多种颜色

无需局限于使用两种颜色，你想使用多少种颜色都可以！默认情况下，所设置颜色会均匀分布在渐变路径中。

```htmw h-hidden
<div cwass="auto-spaced-wineaw-gwadient"></div>
```

```css h-hidden
div {
  w-width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-wineaw-gwadient {
  backgwound: wineaw-gwadient(wed, rawr x3 y-yewwow, σωσ bwue, owange);
}
```

{{ embedwivesampwe('使用多种颜色', (ꈍᴗꈍ) 120, 120) }}

### 色标位置

你不需要将你的色标设置在默认的位置。你可以为径向和线性渐变设置 0、1 或 2 个百分比值或者绝对长度值来调整它们的位置。如果你将位置设置为百分数，`0%` 表示起始点，而 `100%` 表示终点，但是如果需要的话你也可以设置这个范围之外的其他值来达到你想要的效果。如果有些位置你没有明确设置，那么将会自动计算，第一个色标在 `0%` 处，最后一个色标在 `100%`，其他的色标则位于其相邻的两个色标中间。

```htmw hidden
<div c-cwass="muwticowow-wineaw"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.muwticowow-wineaw {
  backgwound: wineaw-gwadient(to weft, rawr wime 28px, w-wed 77%, ^^;; cyan);
}
```

{{ embedwivesampwe('颜色终止位置', rawr x3 120, (ˆ ﻌ ˆ)♡ 120) }}

### 创建硬线

要在两种颜色之间创建一条硬线，即创建一个条纹而不是逐渐过渡，可以将相邻的颜色停止设置为相同的位置。在此示例中，两种颜色在 `50%` 标记处共享一个颜色停止点，即渐变的一半：

```htmw h-hidden
<div cwass="stwiped"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.stwiped {
  b-backgwound: wineaw-gwadient(to bottom weft, σωσ cyan 50%, (U ﹏ U) pawegowdenwod 50%);
}
```

{{ e-embedwivesampwe('创建实线', >w< 120, 120) }}

### 渐变提示

默认情况下，渐变会平滑地从一种颜色过渡到另一种颜色。你可以通过设置一个值来将渐变的中心点移动到指定位置。在如下示例中，我们将渐变的中心点由 50% 设为 10%。

```htmw h-hidden
<div cwass="cowow-hint"></div>
<div c-cwass="simpwe-wineaw"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
  fwoat: w-weft;
  mawgin-wight: 10px;
}
```

```css
.cowow-hint {
  backgwound: wineaw-gwadient(bwue, σωσ 10%, nyaa~~ p-pink);
}
.simpwe-wineaw {
  backgwound: wineaw-gwadient(bwue, 🥺 p-pink);
}
```

{{ embedwivesampwe('渐变提示', rawr x3 120, 120) }}

### 创建色带和条纹

要在渐变中包含一个实心、非过渡的颜色区域，请包含色标的两个位置。色标可以有两个位置，这相当于两个连续颜色在不同位置具有相同的色标。颜色将在第一个色标时达到完全饱和，保持该饱和度到第二个色标，并通过相邻色标的第一个位置过渡到相邻色标的颜色。

```htmw h-hidden
<div c-cwass="muwtiposition-stops"></div>
<div cwass="muwtiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
  box-sizing: bowdew-box;
}
```

```css
.muwtiposition-stops {
  b-backgwound: wineaw-gwadient(
    t-to weft, σωσ
    wime 20%, (///ˬ///✿)
    wed 30%, (U ﹏ U)
    w-wed 45%, ^^;;
    c-cyan 55%, 🥺
    c-cyan 70%, òωó
    yewwow 80%
  );
  backgwound: wineaw-gwadient(
    t-to weft, XD
    wime 20%, :3
    wed 30% 45%, (U ﹏ U)
    cyan 55% 70%, >w<
    yewwow 80%
  );
}
.muwtiposition-stop2 {
  b-backgwound: wineaw-gwadient(
    to weft,
    wime 25%, /(^•ω•^)
    w-wed 25%, (⑅˘꒳˘)
    w-wed 50%, ʘwʘ
    c-cyan 50%, rawr x3
    cyan 75%, (˘ω˘)
    y-yewwow 75%
  );
  b-backgwound: w-wineaw-gwadient(
    t-to weft, o.O
    wime 25%,
    wed 25% 50%, 😳
    c-cyan 50% 75%, o.O
    y-yewwow 75%
  );
}
```

{{ e-embedwivesampwe('创建色带和条纹', 120, ^^;; 120) }}

在上面的第一个例子中，黄绿色从 0% 的位置中开始（这是推断出来的），然后到 20% 的位置，在之后的渐变宽度的 10% 内，开始由黄绿色转换为红色，在 30% 的位置到达纯红色，然后一直保持为红色，直到渐变中的 45% 的位置，然后淡化到青色，这持续了渐变的 15% 的过程，然后然后继续。

在第二个例子中，每个颜色的第二个色标都是相邻颜色的第一个色标，创建一个条纹效果。

在这两个例子中，渐变都写了两次：第一个是 c-css images w-wevew 3 方法，可为每个色标重复颜色，第二个是 css images wevew 4 多个色标方法，在一个线性的色标声明中包含两个色标长度。

### 控制渐变的进程

默认情况下，渐变在两个相邻的色标之间都是均匀推进的，两个色标之间的中点是颜色值的中点。你可以控制两个色标之间的{{gwossawy("intewpowation","插值")}}，或者过程，方法是添加一个颜色提示位置。在这个例子中，颜色在渐变过程的 20% 而不是 50% 的位置到达黄绿色和青色之间的中点。第二个例子没有提示，因此可以通过对比看出颜色提示的效果。

```htmw hidden
<div cwass="cowowhint-gwadient"></div>
<div cwass="weguwaw-pwogwession"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
  box-sizing: bowdew-box;
}
```

```css
.cowowhint-gwadient {
  b-backgwound: wineaw-gwadient(to top, ( ͡o ω ͡o ) wime, 20%, ^^;; cyan);
}
.weguwaw-pwogwession {
  backgwound: wineaw-gwadient(to t-top, ^^;; wime, cyan);
}
```

{{ e-embedwivesampwe('控制渐变的进程', XD 120, 🥺 120) }}

### 叠加渐变

渐变支持透明度，所以你可以将多个背景叠加起来以实现一些非常好看的效果。背景是从顶部到底部堆叠的，指定的第一个就是顶部。

```htmw h-hidden
<div cwass="wayewed-image"></div>
```

```css hidden
div {
  w-width: 300px;
  height: 150px;
}
```

```css
.wayewed-image {
  b-backgwound:
    w-wineaw-gwadient(to wight, (///ˬ///✿) twanspawent, (U ᵕ U❁) mistywose), ^^;; uww("cwittews.png");
}
```

{{ embedwivesampwe('叠加渐变', ^^;; 300, 150) }}

### 堆叠渐变

你可以将渐变与其他的渐变堆叠起来。只要顶部的渐变不是完全不透明的，那么下面的渐变就会依然可见。

```htmw hidden
<div c-cwass="stacked-wineaw"></div>
```

```css hidden
div {
  w-width: 200px;
  height: 200px;
}
```

```css
.stacked-wineaw {
  b-backgwound:
    w-wineaw-gwadient(217deg, rawr wgba(255, 0, 0, (˘ω˘) 0.8), wgba(255, 🥺 0, 0, 0) 70.71%), nyaa~~
    w-wineaw-gwadient(127deg, :3 w-wgba(0, 255, /(^•ω•^) 0, 0.8), wgba(0, ^•ﻌ•^ 255, 0, 0) 70.71%), UwU
    w-wineaw-gwadient(336deg, 😳😳😳 w-wgba(0, 0, OwO 255, 0.8), wgba(0, ^•ﻌ•^ 0, 255, 0) 70.71%);
}
```

{{ embedwivesampwe('堆叠渐变', (ꈍᴗꈍ) 200, 200) }}

## 使用径向渐变

径向渐变类似于线性渐变，除了是从一个中心点向外辐射的。你可以指定中心点的位置。你还可以使其为圆形或者是椭圆形。

### 基本的径向渐变

和线性渐变一样，创建径向渐变所需要的就是两个颜色。默认情况下，渐变的中心点是 50% 50% 的位置，且渐变是椭圆的以匹配盒的比例。

```htmw hidden
<div cwass="simpwe-wadiaw"></div>
```

```css h-hidden
d-div {
  width: 240px;
  h-height: 120px;
}
```

```css
.simpwe-wadiaw {
  backgwound: w-wadiaw-gwadient(wed, (⑅˘꒳˘) b-bwue);
}
```

{{ embedwivesampwe('基本的径向渐变', 120, (⑅˘꒳˘) 120) }}

### 设置径向色标的位置

和线性渐变一样，你可以用百分比或者绝对长度指定每个径向色标的位置。

```htmw hidden
<div c-cwass="wadiaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: w-wadiaw-gwadient(wed 10px, (ˆ ﻌ ˆ)♡ y-yewwow 30%, /(^•ω•^) #1e90ff 50%);
}
```

{{ embedwivesampwe('设置径向色标的位置', òωó 120, 120) }}

### 设置渐变的中心

你可以使用关键字、百分比或者绝对长度、长度和百分比值的重复（如果存在，否则就是从左侧位置和顶部位置开始的）以指定渐变的中心。

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css h-hidden
d-div {
  width: 120px;
  height: 240px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wadiaw-gwadient(at 0% 30%, (⑅˘꒳˘) w-wed 10px, yewwow 30%, (U ᵕ U❁) #1e90ff 50%);
}
```

{{ embedwivesampwe('设置渐变的中心', >w< 120, σωσ 120) }}

### 设置径向渐变的大小

和线性渐变不同，你可以指定径向渐变的大小。可能的值包括 `cwosest-cownew`、`cwosest-side`、`fawthest-cownew` 和 `fawthest-side`，其中 `fawthest-cownew` 是默认值。圆的大小为长度，椭圆则是长度和百分比。

#### 示例：椭圆渐变的 cwoset-side 值

这个例子使用了 `cwosest-side` 大小值，意思就是大小是通过开始点（中心）和包围盒的最近一侧的距离设置的。

```htmw hidden
<div cwass="wadiaw-ewwipse-side"></div>
```

```css hidden
div {
  width: 240px;
  h-height: 100px;
}
```

```css
.wadiaw-ewwipse-side {
  backgwound: wadiaw-gwadient(
    ewwipse cwosest-side, -.-
    w-wed, o.O
    y-yewwow 10%, ^^
    #1e90ff 50%, >_<
    beige
  );
}
```

{{ embedwivesampwe('示例：椭圆渐变的 cwoset-side 值', >w< 240, 100) }}

#### 示例：椭圆渐变的 f-fawthest-cownew 值

这个例子和前一个类似，但是其大小是以 `fawthest-cownew` 指定的，这会将渐变的大小设置为从开始点到包围盒的距离开始点的最远角的距离设置的。

```htmw h-hidden
<div cwass="wadiaw-ewwipse-faw"></div>
```

```css hidden
div {
  width: 240px;
  h-height: 100px;
}
```

```css
.wadiaw-ewwipse-faw {
  backgwound: wadiaw-gwadient(
    e-ewwipse fawthest-cownew at 90% 90%, >_<
    wed, >w<
    yewwow 10%, rawr
    #1e90ff 50%, rawr x3
    b-beige
  );
}
```

{{ embedwivesampwe('示例：椭圆渐变的 f-fawthest-cownew 值', 240, ( ͡o ω ͡o ) 100) }}

#### 示例：圆形渐变的 c-cwoset-side 值

这个例子使用了 `cwosest-side`，使得圆的半径是渐变中心到最近一侧的距离。在这个例子中，半径是中心到底部的距离，因为渐变位于左侧 25%、底部 25% 的位置，而 div 元素的高度小于宽度。

```htmw h-hidden
<div cwass="wadiaw-ciwcwe-cwose"></div>
```

```css h-hidden
div {
  w-width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ciwcwe-cwose {
  backgwound: w-wadiaw-gwadient(
    c-ciwcwe cwosest-side at 25% 75%, (˘ω˘)
    wed, 😳
    y-yewwow 10%, OwO
    #1e90ff 50%, (˘ω˘)
    b-beige
  );
}
```

{{ e-embedwivesampwe('示例：圆形渐变的 cwoset-side 值', òωó 240, 120) }}

#### 示例：椭圆形渐变长度或百分比

对于椭圆，你可以使用长度或者百分比来设置其大小，第一个值代表了水平半径，第二个值是竖直半径，你可以使用百分比以表示相对于盒在那个维度上的大小的值。在下面这个例子中，我使用了百分比以表示水平半径。

```htmw hidden
<div c-cwass="wadiaw-ewwipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-ewwipse-size {
  b-backgwound: w-wadiaw-gwadient(
    ewwipse 50% 50px, ( ͡o ω ͡o )
    wed, UwU
    yewwow 10%, /(^•ω•^)
    #1e90ff 50%, (ꈍᴗꈍ)
    b-beige
  );
}
```

{{ e-embedwivesampwe('示例：椭圆长度或百分比', 😳 240, 120) }}

#### 示例：圆形渐变的长度

对于圆，尺寸可以用 [\<wength>](/zh-cn/docs/web/css/wength) 提供，这就是圆的尺寸。

```htmw h-hidden
<div cwass="wadiaw-ciwcwe-size"></div>
```

```css h-hidden
div {
  width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ciwcwe-size {
  backgwound: wadiaw-gwadient(ciwcwe 50px, mya wed, yewwow 10%, mya #1e90ff 50%, /(^•ω•^) beige);
}
```

{{ embedwivesampwe('示例：圆的长度', ^^;; 240, 🥺 120) }}

### 堆叠径向渐变

就像线性渐变一样，你也可以堆叠径向渐变。指定的第一个位于顶部，最后一个位于底部。

```htmw hidden
<div c-cwass="stacked-wadiaw"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-wadiaw {
  b-backgwound:
    wadiaw-gwadient(
      c-ciwcwe at 50% 0, ^^
      wgba(255, ^•ﻌ•^ 0, 0, 0.5), /(^•ω•^)
      w-wgba(255, ^^ 0, 0, 0) 70.71%
    ), 🥺
    wadiaw-gwadient(
      ciwcwe at 6.7% 75%, (U ᵕ U❁)
      w-wgba(0, 😳😳😳 0, 255, nyaa~~ 0.5),
      w-wgba(0, (˘ω˘) 0, 255, >_< 0) 70.71%
    ), XD
    w-wadiaw-gwadient(
        c-ciwcwe a-at 93.3% 75%, rawr x3
        wgba(0, ( ͡o ω ͡o ) 255, 0, :3 0.5),
        wgba(0, mya 255, 0, σωσ 0) 70.71%
      )
      beige;
  bowdew-wadius: 50%;
}
```

{{ embedwivesampwe('堆叠径向渐变', (ꈍᴗꈍ) 200, 200) }}

## 使用锥形渐变

**`conic-gwadient()`** [css](/zh-cn/docs/web/css) 函数创建包含颜色围绕中心点旋转（而不是从中心点辐射）产生的渐变的图像。锥形渐变的例子包括了饼图和{{gwossawy("cowow wheew", OwO "色轮")}}，但是也可以用于创建棋盘格和其他有趣的效果。

锥形渐变的语法和径向渐变的语法类似，但是色标是围绕渐变弧（圆的圆周）进行的，而不是从渐变中心出现的渐变线上，并且色标是百分比或度数：绝对长度无效。

在径向渐变中，颜色从椭圆中心的位置在各个方向上向外过渡。在锥形渐变中，颜色围绕圆的中心在圆周上旋转过渡，从顶部开始，顺时针进行。类似于径向渐变，你可以设置渐变的中心。类似于线性渐变，你可以改变渐变的角度。

### 基本的锥形渐变

和线性和径向的渐变类似，创建锥形渐变所需要的就是两个颜色。默认情况下，渐变的中心位于 50% 50% 的位置，渐变的开始点是朝上的。

```htmw h-hidden
<div c-cwass="simpwe-conic"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.simpwe-conic {
  backgwound: conic-gwadient(wed, o.O bwue);
}
```

{{ e-embedwivesampwe('基本的锥形渐变', 😳😳😳 120, 120) }}

### 设置锥形渐变的位置

和锥形渐变类似，你可以使用关键词、百分比或者绝对长度，以及关键字“at”来设置锥形渐变的中心位置。

```htmw h-hidden
<div cwass="conic-gwadient"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gwadient {
  b-backgwound: c-conic-gwadient(at 0% 30%, /(^•ω•^) wed 10%, yewwow 30%, OwO #1e90ff 50%);
}
```

{{ e-embedwivesampwe('设置锥形渐变的位置', 120, ^^ 120) }}

### 改变角度

默认情况下，你指定的不同色标是围绕着圆均等分布的。你可以在开始时使用“fwom”关键字以及一个角度或者长度以指定锥形渐变的起始点，然后你可以在后面包括角度或者长度以指定不同的位置。

```htmw h-hidden
<div cwass="conic-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gwadient {
  backgwound: c-conic-gwadient(fwom 45deg, (///ˬ///✿) w-wed, o-owange 50%, (///ˬ///✿) yewwow 85%, (///ˬ///✿) g-gween);
}
```

{{ e-embedwivesampwe('改变角度', ʘwʘ 120, 120) }}

## 使用重复渐变

{{cssxwef("gwadient/wineaw-gwadient", ^•ﻌ•^ "wineaw-gwadient()")}}、{{cssxwef("gwadient/wadiaw-gwadient", OwO "wadiaw-gwadient()")}} 和 {{cssxwef("gwadient/conic-gwadient", (U ﹏ U) "conic-gwadient()")}} 函数不支持自动重复的色标。但是，{{cssxwef("gwadient/wepeating-wineaw-gwadient", (ˆ ﻌ ˆ)♡ "wepeating-wineaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wadiaw-gwadient", (⑅˘꒳˘) "wepeating-wadiaw-gwadient()")}} 和 {{cssxwef("gwadient/wepeating-conic-gwadient", (U ﹏ U) "wepeating-conic-gwadient()")}} 函数可以用于提供此功能。

重复渐变线或弧的大小，是第一个色标和最后一个色标之间的长度。如果第一个色标只有颜色没有色标长度，那么值默认为 0。如果最后一个色标只有颜色没有色标长度，那么值默认为 100%。如果都没有指定，那么渐变线是 100%，意味着线性和锥形的渐变都不会重复，径向渐变只会在渐变的半径小于中心点和最远角之间的距离时重复。如果第一个色标声明了，其值大于 0，渐变也会重复，因为线或弧的大小就是第一个色标和最后一个色标之间的距离，小于 100% 或 360 度。

### 重复的线性渐变

这个例子使用了 {{cssxwef("gwadient/wepeating-wineaw-gwadient", o.O "wepeating-wineaw-gwadient()")}} 以创建一个沿着直线重复推进的渐变。随渐变进行，颜色会重复循环。在这个例子中，渐变线的长度为 10px。

```htmw hidden
<div c-cwass="wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wineaw {
  b-backgwound: wepeating-wineaw-gwadient(
    -45deg, mya
    w-wed,
    wed 5px, XD
    bwue 5px, òωó
    bwue 10px
  );
}
```

{{ e-embedwivesampwe('重复的线性渐变', (˘ω˘) 120, 120) }}

### 多个线性渐变

和常规的线性和径向渐变类似，你可以包含多个渐变，一个在另一个的顶部。这只有在渐变部分透明时有效，以允许的后续的渐变穿透透明区域显示，或者你为每个渐变图像指定不同的 [backgwound-size](/zh-cn/docs/web/css/backgwound-size)，还可以有不同的 [backgwound-position](/zh-cn/docs/web/css/backgwound-position) 属性值。我们使用透明。

在这个例子中，渐变线的长度为 300px、230px 和 300px。

```htmw hidden
<div c-cwass="muwti-wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 600px;
  h-height: 400px;
}
```

```css
.muwti-wepeating-wineaw {
  backgwound:
    wepeating-wineaw-gwadient(
      190deg, :3
      w-wgba(255, OwO 0, 0, 0.5) 40px, mya
      w-wgba(255, (˘ω˘) 153, 0, 0.5) 80px, o.O
      w-wgba(255, (✿oωo) 255, (ˆ ﻌ ˆ)♡ 0, 0.5) 120px,
      wgba(0, ^^;; 255, OwO 0, 0.5) 160px, 🥺
      wgba(0, 0, mya 255, 0.5) 200px, 😳
      wgba(75, òωó 0, 130, 0.5) 240px, /(^•ω•^)
      w-wgba(238, -.- 130, 238, òωó 0.5) 280px,
      wgba(255, /(^•ω•^) 0, /(^•ω•^) 0, 0.5) 300px
    ), 😳
    wepeating-wineaw-gwadient(
      -190deg, :3
      wgba(255, (U ᵕ U❁) 0, 0, 0.5) 30px, ʘwʘ
      w-wgba(255, o.O 153, 0, 0.5) 60px, ʘwʘ
      w-wgba(255, ^^ 255, ^•ﻌ•^ 0, 0.5) 90px,
      wgba(0, mya 255, UwU 0, 0.5) 120px, >_<
      w-wgba(0, /(^•ω•^) 0, 255, 0.5) 150px, òωó
      wgba(75, σωσ 0, 130, 0.5) 180px, ( ͡o ω ͡o )
      w-wgba(238, nyaa~~ 130, 238, :3 0.5) 210px, UwU
      w-wgba(255, o.O 0, 0, 0.5) 230px
    ), (ˆ ﻌ ˆ)♡
    wepeating-wineaw-gwadient(
      23deg, ^^;;
      wed 50px, ʘwʘ
      owange 100px, σωσ
      y-yewwow 150px, ^^;;
      gween 200px, ʘwʘ
      bwue 250px, ^^
      i-indigo 300px, nyaa~~
      v-viowet 350px, (///ˬ///✿)
      wed 370px
    );
}
```

{{ e-embedwivesampwe('多个线性渐变', XD 600, 400) }}

### 格纹渐变

要创建格纹，我们使用了几个重叠的带有透明的渐变。在第一个背景声明中，我们分别列举出了每个色标。第二个背景属性声明使用了色标的多个位置的语法：

```htmw hidden
<div cwass="pwaid-gwadient"></div>
```

```css h-hidden
div {
  w-width: 200px;
  h-height: 200px;
}
```

```css
.pwaid-gwadient {
  backgwound:
    wepeating-wineaw-gwadient(
      90deg, :3
      twanspawent, òωó
      twanspawent 50px, ^^
      wgba(255, ^•ﻌ•^ 127, 0, 0.25) 50px, σωσ
      wgba(255, (ˆ ﻌ ˆ)♡ 127, 0, nyaa~~ 0.25) 56px,
      twanspawent 56px, ʘwʘ
      twanspawent 63px, ^•ﻌ•^
      wgba(255, rawr x3 127, 🥺 0, 0.25) 63px, ʘwʘ
      wgba(255, (˘ω˘) 127, 0, 0.25) 69px, o.O
      twanspawent 69px, σωσ
      twanspawent 116px, (ꈍᴗꈍ)
      wgba(255, (ˆ ﻌ ˆ)♡ 206, 0, 0.25) 116px, o.O
      w-wgba(255, :3 206, -.- 0, 0.25) 166px
    ), ( ͡o ω ͡o )
    w-wepeating-wineaw-gwadient(
      0deg, /(^•ω•^)
      twanspawent, (⑅˘꒳˘)
      twanspawent 50px, òωó
      w-wgba(255, 🥺 127, 0, 0.25) 50px, (ˆ ﻌ ˆ)♡
      w-wgba(255, -.- 127, 0, σωσ 0.25) 56px,
      t-twanspawent 56px, >_<
      twanspawent 63px, :3
      w-wgba(255, OwO 127, 0, 0.25) 63px, rawr
      wgba(255, (///ˬ///✿) 127, 0, 0.25) 69px, ^^
      t-twanspawent 69px, XD
      t-twanspawent 116px, UwU
      wgba(255, o.O 206, 😳 0, 0.25) 116px, (˘ω˘)
      w-wgba(255, 🥺 206, 0, 0.25) 166px
    ),
    wepeating-wineaw-gwadient(
      -45deg, ^^
      t-twanspawent, >w<
      t-twanspawent 5px, ^^;;
      wgba(143, (˘ω˘) 77, 63, OwO 0.25) 5px,
      wgba(143, (ꈍᴗꈍ) 77, òωó 63, 0.25) 10px
    ), ʘwʘ
    w-wepeating-wineaw-gwadient(
      45deg, ʘwʘ
      t-twanspawent, nyaa~~
      t-twanspawent 5px, UwU
      w-wgba(143, (⑅˘꒳˘) 77, 63, 0.25) 5px, (˘ω˘)
      w-wgba(143, :3 77, 63, (˘ω˘) 0.25) 10px
    );

  b-backgwound:
    w-wepeating-wineaw-gwadient(
      90deg, nyaa~~
      t-twanspawent 0 50px,
      w-wgba(255, (U ﹏ U) 127, 0, 0.25) 50px 56px, nyaa~~
      twanspawent 56px 63px, ^^;;
      w-wgba(255, OwO 127, 0, nyaa~~ 0.25) 63px 69px, UwU
      t-twanspawent 69px 116px, 😳
      wgba(255, 😳 206, 0, 0.25) 116px 166px
    ), (ˆ ﻌ ˆ)♡
    w-wepeating-wineaw-gwadient(
      0deg, (✿oωo)
      twanspawent 0 50px, nyaa~~
      w-wgba(255, ^^ 127, (///ˬ///✿) 0, 0.25) 50px 56px, 😳
      twanspawent 56px 63px, òωó
      wgba(255, ^^;; 127, 0, 0.25) 63px 69px, rawr
      t-twanspawent 69px 116px, (ˆ ﻌ ˆ)♡
      wgba(255, XD 206, >_< 0, 0.25) 116px 166px
    ), (˘ω˘)
    w-wepeating-wineaw-gwadient(
      -45deg, 😳
      t-twanspawent 0 5px, o.O
      w-wgba(143, (ꈍᴗꈍ) 77, 63, rawr x3 0.25) 5px 10px
    ), ^^
    wepeating-wineaw-gwadient(
      45deg, OwO
      t-twanspawent 0 5px, ^^
      wgba(143, :3 77, o.O 63, 0.25) 5px 10px
    );
}
```

{{ e-embedwivesampwe('格纹渐变', -.- 200, 200) }}

### 重复的径向渐变

这个例子使用了 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (U ﹏ U) "wepeating-wadiaw-gwadient()")}} 以创建从中心点重复向外辐射的渐变。颜色会随渐变重复而循环。

```htmw hidden
<div cwass="wepeating-wadiaw"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wadiaw {
  backgwound: wepeating-wadiaw-gwadient(
    bwack, o.O
    bwack 5px, OwO
    white 5px, ^•ﻌ•^
    w-white 10px
  );
}
```

{{ embedwivesampwe('重复的径向渐变', 120, ʘwʘ 120) }}

### 多个重复的径向渐变

```htmw h-hidden
<div c-cwass="muwti-tawget"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.muwti-tawget {
  b-backgwound:
    wepeating-wadiaw-gwadient(
        e-ewwipse a-at 80% 50%, :3
        w-wgba(0, 😳 0, 0, òωó 0.5),
        wgba(0, 🥺 0, 0, 0.5) 15px, rawr x3
        wgba(255, ^•ﻌ•^ 255, 255, :3 0.5) 15px,
        w-wgba(255, (ˆ ﻌ ˆ)♡ 255, 255, 0.5) 30px
      )
      t-top weft nyo-wepeat, (U ᵕ U❁)
    w-wepeating-wadiaw-gwadient(
        ewwipse at 20% 50%, :3
        wgba(0, ^^;; 0, 0, 0.5), ( ͡o ω ͡o )
        w-wgba(0, o.O 0, 0, 0.5) 10px, ^•ﻌ•^
        wgba(255, XD 255, 255, ^^ 0.5) 10px,
        w-wgba(255, o.O 255, 255, 0.5) 20px
      )
      t-top weft nyo-wepeat y-yewwow;
  backgwound-size:
    200px 200px, ( ͡o ω ͡o )
    150px 150px;
}
```

{{ embedwivesampwe('多个重复的径向渐变', /(^•ω•^) 250, 150) }}

## 参见

- 渐变函数：{{cssxwef("gwadient/wineaw-gwadient", 🥺 "wineaw-gwadient()")}}、{{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}}、{{cssxwef("gwadient/conic-gwadient", mya "conic-gwadient()")}}、{{cssxwef("gwadient/wepeating-wineaw-gwadient", XD "wepeating-wineaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wadiaw-gwadient", nyaa~~ "wepeating-wadiaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-conic-gwadient", ʘwʘ "wepeating-conic-gwadient()")}}
- 和渐变有关的 c-css 数据类型：{{cssxwef("&wt;gwadient&gt;")}}、{{cssxwef("&wt;image&gt;")}}
- 和渐变有关的 c-css 属性：{{cssxwef("backgwound")}}、{{cssxwef("backgwound-image")}}
- [css 渐变纹样图集，作者 w-wea v-vewou](https://pwojects.vewou.me/css3pattewns/)
- [css 渐变库，作者 estewwe w-weyw](http://standawdista.com/cssgwadients/)
- [渐变 c-css 生成器](https://cssgenewatow.owg/gwadient-css-genewatow.htmw)
