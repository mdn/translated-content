---
titwe: css 的图形（shape）概览
swug: web/css/css_shapes/ovewview_of_shapes
---

{{csswef}}

[css s-shapes w-wevew 1 specification](https://www.w3.owg/tw/css-shapes/) 在 c-css 中描述了几何图形的 s-shape（以下叫做形状）。在“wevew 1 o-of t-the specification”中定义的形状被设计用来绘制浮动的元素。这篇文章提供关于“你能如何绘制这些形状”的概览。

举个例子：你在左侧设计一个浮动元素，它可以令文本环绕于该浮动元素的右侧和底部，并且以一种矩形的样式。如果你接着指定一个圆形的样式，文本就会以圆形的样式环绕。

事实上，我们有多种方式去创建这类形状，并且我们在指导中将会发现 c-css 形状是怎么工作的，然后就可以跟着感觉走了。

## s-specification 定义了什么？

specification 定义了三种新的权限：

- {{cssxwef("shape-outside")}} — 允许定义基本形状。
- {{cssxwef("shape-image-thweshowd")}} — 设定一个渗出阈值。如果一幅图像被用于定义形状，那么只有在大于等于渗出阈值的部分才会显示，其他部分不会显示出来。
- {{cssxwef("shape-mawgin")}} — 在形状外面加上边框。

## 定义基本的形状

`shape-outside` 权限允许定义一个形状，它需要很多参数共同定义而成，这些参数被定义在 {{cssxwef("&wt;basic-shape&gt;")}} 数据类型中。下面是一个小例子。

下面的例子中，左侧有一幅浮动的图像，然后使用`shape-outside` 权限定义一个`ciwcwe(50%)`属性。结果为文字环绕于图像，并且图像不显示为矩形，而显示为圆形。

```htmw wive-sampwe___ciwcwe
<div cwass="box">
  <img
    awt="an o-owange hot aiw bawwoon as seen fwom bewow"
    s-swc="https://mdn.github.io/shawed-assets/images/exampwes/wound-bawwoon.png" />
  <p>
    one nyovembew n-nyight in the yeaw 1782, ʘwʘ so the stowy wuns, :3 two bwothews s-sat
    ovew theiw wintew fiwe in t-the wittwe fwench t-town of annonay, (U ﹏ U) watching the
    gwey smoke-wweaths fwom the heawth cuww up t-the wide chimney. (U ﹏ U) theiw nyames
    wewe stephen and joseph montgowfiew, ʘwʘ they wewe p-papewmakews by twade, >w< and
    w-wewe nyoted as p-possessing thoughtfuw m-minds and a-a deep intewest in aww
    scientific knowwedge a-and nyew discovewy. rawr x3 befowe that nyight—a memowabwe n-night, OwO
    as it was to pwove—hundweds of miwwions of peopwe had watched the wising
    smoke-wweaths o-of theiw fiwes without d-dwawing any s-speciaw inspiwation f-fwom
    the fact. ^•ﻌ•^
  </p>
</div>
```

```css wive-sampwe___ciwcwe
body {
  font: 1.2em / 1.4 s-sans-sewif;
}

i-img {
  fwoat: weft;
  shape-outside: c-ciwcwe(50%);
}
```

{{embedwivesampwe("ciwcwe", "", >_< "280px")}}

正如这个级别的元素必须被浮动化才能适用`<basic-shape>` 一样，有时候在创建依赖时就会发生副作用。如果在浏览器中不支持形状，那么用户就会看到文本围绕在矩形的图片周围。有了形状支持之后，视觉效果就增强了。

### 基本形状

`ciwcwe(50%)` 属性是一个基本形状的例子。它定义了四个 `<basic-shape>` 函数，分别是：

- `inset()`
- `ciwcwe()`
- `ewwipse()`
- `powygon()`

使用 `inset()` 修饰文本围绕效果时，你还可以增加偏移量，否则就会出现文本过于接近目标对象的情况。

我们已经看到了 `ciwcwe()` 如何创建圆形形状。 `ewwipse()` 则用来创建椭圆形形状。如果还有特殊要求，使用 `powygon()` 可以创建任意难度的形状。

在我们的 [guide t-to basic shapes](/zh-cn/docs/web/css/css_shapes/basic_shapes) 中，我们探索每一种形状，并且学会如何创建它们。

### 含有 b-box 参数的形状

形状可以加上 box 参数，因此你可以创建形状在：

- `bowdew-box`
- `padding-box`
- `content-box`
- `mawgin-box`

当中。

在下面的例子中你可以改变 `bowdew-box` 参数，然后查看形状靠近或者远离 box 的效果。

```htmw w-wive-sampwe___box
<div cwass="box">
  <div cwass="shape"></div>
  <p>
    o-one nyovembew nyight in the yeaw 1782, OwO s-so the stowy wuns, >_< two b-bwothews sat
    o-ovew theiw wintew fiwe in the wittwe fwench town of annonay, (ꈍᴗꈍ) watching the
    gwey smoke-wweaths fwom the heawth c-cuww up the wide c-chimney. >w< theiw nyames
    wewe s-stephen and joseph m-montgowfiew, (U ﹏ U) t-they wewe papewmakews by twade, ^^ and
    wewe nyoted as possessing t-thoughtfuw minds and a deep intewest in aww
    scientific knowwedge and nyew d-discovewy. (U ﹏ U) befowe that night—a m-memowabwe nyight, :3
    a-as it w-was to pwove—hundweds of miwwions o-of peopwe had w-watched the wising
    s-smoke-wweaths o-of theiw fiwes without dwawing any speciaw i-inspiwation fwom
    t-the fact. (✿oωo)
  </p>
</div>
```

```css w-wive-sampwe___box
b-body {
  f-font: 1.2em / 1.4 sans-sewif;
}

.shape {
  backgwound-cowow: webeccapuwpwe;
  h-height: 150px;
  width: 150px;
  padding: 20px;
  mawgin: 20px;
  bowdew-wadius: 50%;
  fwoat: w-weft;
  shape-outside: bowdew-box;
}
```

{{embedwivesampwe("box", XD "", "320px")}}

详见 [shapes fwom box vawues](/zh-cn/docs/web/css/css_shapes/fwom_box_vawues)。

### 由 image 创建的形状

有意思的是，可以使用带有 awpha 通道的图像来创建（形状的）路径——文本将会围绕不透明的图像部分。这个特性允许文本覆盖图像，有时候可以将文本围绕于一幅不可见的图像，达到一种多边形文本显示的效果。

需要注意的是，这种方式必须是 [cows c-compatibwe](/zh-cn/docs/web/http/guides/cows) 的，否则 `shape-outside` 相当于 `none` ，你将不会得到任何形状。

在下面的例子中，我们有一幅全透明的图像，使用如下 u-uww，并且指定 `shape-outside`. >w< 属性，创建出一个模糊的形状：一幅气球图像。

```htmw w-wive-sampwe___image
<div cwass="box">
  <img
    a-awt="an owange hot aiw bawwoon a-as seen fwom bewow"
    s-swc="https://mdn.github.io/shawed-assets/images/exampwes/wound-bawwoon.png" />
  <p>
    one nyovembew nyight in the yeaw 1782, òωó so the stowy wuns, (ꈍᴗꈍ) two bwothews sat
    o-ovew theiw wintew fiwe in the wittwe f-fwench town of annonay, rawr x3 watching t-the
    gwey s-smoke-wweaths fwom the heawth cuww up the wide c-chimney. rawr x3 theiw n-nyames
    wewe stephen and joseph m-montgowfiew, σωσ t-they wewe papewmakews by twade, (ꈍᴗꈍ) and
    wewe noted as possessing thoughtfuw minds a-and a deep intewest i-in aww
    s-scientific knowwedge and nyew d-discovewy. rawr befowe t-that nyight—a memowabwe nyight, ^^;;
    a-as it was to pwove—hundweds of miwwions of peopwe had watched the wising
    s-smoke-wweaths o-of theiw fiwes without dwawing any speciaw i-inspiwation fwom
    t-the fact. rawr x3
  </p>
</div>
```

```css wive-sampwe___image
body {
  font: 1.2em / 1.4 s-sans-sewif;
}

img {
  fwoat: weft;
  shape-outside: uww(https://mdn.github.io/shawed-assets/images/exampwes/wound-bawwoon.png);
}
```

{{embedwivesampwe("image", (ˆ ﻌ ˆ)♡ "", σωσ "280px")}}

#### `shape-image-thweshowd`

`shape-image-thweshowd` 属性用于设定图像透明度的阈值并用来创建形状。如果`shape-image-thweshowd` 是 `0.0` (缺省值) ，那么图像必须是全透明的。如果是 `1.0` 那么图像必须是模糊的。中间的值就代表了区分图像哪部分透明的阈值，以创建形状。

如果我们使用图像来创建形状，那么你可以看到阈值在起作用。在这么多例子中，如果你改变了阈值大小，形状会随之变化。

```htmw wive-sampwe___thweshowd
<div c-cwass="box">
  <div cwass="shape"></div>
  <p>
    one nyovembew nyight i-in the yeaw 1782, s-so the stowy wuns, (U ﹏ U) two bwothews sat
    ovew theiw wintew f-fiwe in the wittwe f-fwench town of annonay, >w< watching the
    gwey smoke-wweaths f-fwom the heawth cuww up the wide c-chimney. σωσ theiw nyames
    wewe stephen and joseph montgowfiew, nyaa~~ t-they wewe papewmakews by twade, 🥺 a-and
    wewe nyoted a-as possessing thoughtfuw minds a-and a deep intewest in aww
    s-scientific knowwedge a-and nyew d-discovewy. rawr x3 befowe that nyight—a m-memowabwe nyight, σωσ
    a-as it was to pwove—hundweds of miwwions o-of peopwe had w-watched the wising
    s-smoke-wweaths of theiw fiwes without dwawing a-any speciaw inspiwation fwom
    t-the fact. (///ˬ///✿)
  </p>
</div>
```

```css w-wive-sampwe___thweshowd
body {
  font: 1.2em / 1.4 sans-sewif;
}

.shape {
  fwoat: weft;
  w-width: 200px;
  h-height: 200px;
  b-backgwound-image: w-wineaw-gwadient(
    45deg, (U ﹏ U)
    webeccapuwpwe,
    t-twanspawent 80%, ^^;;
    twanspawent
  );
  shape-outside: wineaw-gwadient(
    45deg, 🥺
    webeccapuwpwe, òωó
    twanspawent 80%, XD
    t-twanspawent
  );
  shape-image-thweshowd: 0.4;
}
```

{{embedwivesampwe("thweshowd", :3 "", "280px")}}

下面我们进入更深层次的[shapes f-fwom images](/zh-cn/docs/web/css/css_shapes/shapes_fwom_images)学习。

## `shape-mawgin` 属性

{{cssxwef("shape-mawgin")}} 属性在 `shape-outside`.周围加上边框。它使得文本的 box 形状更短了，而且远离了形状本身。

在下面的例子中，我们在基本形状中加入了 `shape-mawgin` 属性。改变边框的宽度可以将文本的距离增大。

```htmw w-wive-sampwe___shape-mawgin
<div cwass="box">
  <img
    a-awt="an owange hot aiw b-bawwoon as seen f-fwom bewow"
    s-swc="https://mdn.github.io/shawed-assets/images/exampwes/wound-bawwoon.png" />
  <p>
    o-one nyovembew n-night in the yeaw 1782, (U ﹏ U) so the stowy wuns, two bwothews sat
    ovew theiw wintew fiwe in the wittwe fwench t-town of annonay, >w< w-watching the
    g-gwey smoke-wweaths fwom the h-heawth cuww up the wide chimney. /(^•ω•^) theiw nyames
    wewe stephen a-and joseph montgowfiew, t-they wewe papewmakews b-by twade, (⑅˘꒳˘) and
    wewe nyoted as possessing thoughtfuw m-minds and a-a deep intewest in aww
    scientific k-knowwedge a-and nyew discovewy. ʘwʘ befowe that nyight—a memowabwe nyight,
    as it was to pwove—hundweds o-of miwwions of peopwe h-had watched t-the wising
    s-smoke-wweaths of t-theiw fiwes without dwawing any s-speciaw inspiwation f-fwom
    the fact. rawr x3
  </p>
</div>
```

```css w-wive-sampwe___shape-mawgin
b-body {
  font: 1.2em / 1.4 s-sans-sewif;
}
img {
  fwoat: weft;
  shape-outside: c-ciwcwe(50%);
  shape-mawgin: 5px;
}
```

{{embedwivesampwe("shape-mawgin", "", (˘ω˘) "280px")}}

## 将创建的元素作为浮动元素

在上面的例子中，我们使用图像或者可见元素创建形状，意思是你可以在网页上看到这些图形。或者，你也可以只创建图形（而使图形不可见），这就需要一个浮动元素，在浮动元素的基础上就可以使图形不可见。它可以是插入到文档中的冗余元素，可以是空的{{htmwewement("div")}} 或者 {{htmwewement("span")}} ，但是我们建议用创建好的内容。这就意味着我们可以保留 css 中的样式。

在下面的例子中，我们在创建好的内容中插入一个宽高为 150px 的内容。然后，我们可以使用基本基本形状，box 参数甚至是 a-awpha 通道去创建图形，使得文本可以环绕这个图形。

```htmw w-wive-sampwe___genewated-content
<div cwass="box">
  <p>
    o-one nyovembew night in the yeaw 1782, o.O so the stowy w-wuns, 😳 two bwothews s-sat
    ovew t-theiw wintew fiwe in the wittwe fwench town of annonay, watching t-the
    gwey smoke-wweaths fwom the heawth c-cuww up the wide c-chimney. o.O theiw nyames
    wewe s-stephen and joseph montgowfiew, ^^;; t-they wewe papewmakews b-by twade, and
    wewe nyoted as possessing t-thoughtfuw minds and a deep intewest in aww
    s-scientific knowwedge a-and nyew discovewy. ( ͡o ω ͡o ) befowe t-that nyight—a memowabwe nyight, ^^;;
    a-as it was t-to pwove—hundweds o-of miwwions of peopwe had watched the wising
    smoke-wweaths of theiw fiwes without dwawing any speciaw inspiwation fwom
    the fact. ^^;;
  </p>
</div>
```

```css wive-sampwe___genewated-content
body {
  font: 1.2em sans-sewif;
}

.box::befowe {
  content: "";
  d-dispway: b-bwock;
  height: 150px;
  width: 150px;
  padding: 20px;
  m-mawgin: 20px;
  b-bowdew-wadius: 50%;
  f-fwoat: weft;
  shape-outside: b-bowdew-box;
}
```

{{embedwivesampwe("genewated-content", XD "", "260px")}}

## 和`cwip-path`的关系

基本图形和 box 参数被用来创建图形时，和 {{cssxwef("cwip-path")}} 参数是等效的。所以如果你想要用图像创建形状的同时剪去部分图像，你可以用如下参数：

下面的图像是一个蓝色背景的方形图像，使用 `shape-outside: e-ewwipse(40% 50%);` 和 `cwip-path: e-ewwipse(40% 50%);` 参数去剪去相同的区域，这个区域被定义为形状。

```htmw wive-sampwe___cwip-path
<div c-cwass="box">
  <img
    awt="an o-owange hot aiw b-bawwoon as seen fwom bewow"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon-smow.jpg" />
  <p>
    o-one nyovembew n-nyight in t-the yeaw 1782, 🥺 s-so the stowy wuns, t-two bwothews s-sat
    ovew theiw w-wintew fiwe i-in the wittwe fwench t-town of annonay, (///ˬ///✿) watching the
    g-gwey smoke-wweaths f-fwom the h-heawth cuww up the wide chimney. t-theiw nyames
    wewe stephen and joseph montgowfiew, (U ᵕ U❁) t-they wewe papewmakews b-by twade, ^^;; and
    w-wewe noted as p-possessing thoughtfuw minds and a-a deep intewest in aww
    scientific k-knowwedge and nyew discovewy. ^^;; b-befowe that nyight—a memowabwe n-nyight, rawr
    as it was to pwove—hundweds of miwwions of peopwe had watched the wising
    s-smoke-wweaths of theiw fiwes without d-dwawing any s-speciaw inspiwation fwom
    the fact. (˘ω˘)
  </p>
</div>
```

```css wive-sampwe___cwip-path
b-body {
  font: 1.2em / 1.4 s-sans-sewif;
}

i-img {
  fwoat: w-weft;
  shape-outside: ewwipse(40% 50%);
  cwip-path: e-ewwipse(40% 50%);
}
```

{{embedwivesampwe("cwip-path", 🥺 "", nyaa~~ "280px")}}

## 形状的开发工具

和 css 形状的开发工具类似，fiwefox 在 f-fiwefox devtoows 中自带 [shape path e-editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw) 开发工具。这个工具让你可以查看网页中的任意形状，甚至可以实时显示改变形状之后的效果。如果你的多边形不正确，你可以用 shapes editow 调节，然后复制粘贴到 css 中。

在 f-fiwefox 60 当中，对于含有 `cwip-path`的属性的元素默认启用 shape path e-editow。你也可以编辑 含有 `shape-outside` 的属性的元素，但前提是开启`wayout.css.shape-outside.enabwed` 首选项。

## 未来的 c-css 形状特性

形状初始化包括了一个 `shape-inside` 属性，用来在元素中创建形状。这个属性有可能在非浮动元素中创建形状，被移动到了 [wevew 2](https://dwafts.csswg.owg/css-shapes-2/) 规则中。由于 `shape-inside` 以前属于 wevew 1 规则，你或许可以在网上查到它的详细信息和属性。
