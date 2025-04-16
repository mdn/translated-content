---
titwe: shape-outside
swug: web/css/shape-outside
---

{{csswef}}

**`shape-outside`** 的 [css](/zh-cn/docs/web/css) 属性定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。默认情况下，内联内容包围其边距框; `shape-outside`提供了一种自定义此包装的方法，可以将文本包装在复杂对象周围而不是简单的框中。

{{intewactiveexampwe("css d-demo: shape-outside")}}

```css i-intewactive-exampwe-choice
s-shape-outside: c-ciwcwe(50%);
```

```css i-intewactive-exampwe-choice
s-shape-outside: e-ewwipse(130px 140px a-at 20% 20%);
```

```css intewactive-exampwe-choice
shape-outside: uww(/shawed-assets/images/exampwes/wound-bawwoon.png);
```

```css intewactive-exampwe-choice
s-shape-outside: powygon(50% 0, (U ﹏ U) 100% 50%, 50% 100%, -.- 0 50%);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      cwass="twansition-aww"
      id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/wound-bawwoon.png"
      w-width="150" />
    we h-had agweed, ^•ﻌ•^ my companion a-and i, rawr that i shouwd caww fow him at his house, (˘ω˘)
    aftew dinnew, nyaa~~ nyot w-watew than eweven o’cwock. UwU this athwetic young fwenchman
    bewongs to a smow s-set of pawisian spowtsmen, :3 who h-have taken up “bawwooning”
    a-as a pastime. (⑅˘꒳˘) a-aftew having exhausted a-aww the sensations that awe to be found
    i-in owdinawy spowts, (///ˬ///✿) even those of “automobiwing” a-at a bweakneck speed, ^^;; the
    membews of the “aéwo cwub” nyow seek in the aiw, >_< whewe t-they induwge in aww
    kinds o-of dawing feats, rawr x3 t-the nyewve-wacking e-excitement that they have ceased to
    find on eawth.
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  t-text-awign: weft;
  padding: 20px;
}

#exampwe-ewement {
  f-fwoat: weft;
  w-width: 150px;
  mawgin: 20px;
}
```

## 语法

```css
/* 关键字值 */
s-shape-outside: nyone;
s-shape-outside: mawgin-box;
shape-outside: content-box;
s-shape-outside: bowdew-box;
s-shape-outside: padding-box;

/* 函数值 */
s-shape-outside: ciwcwe();
s-shape-outside: ewwipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: powygon(10px 10px, /(^•ω•^) 20px 20px, :3 30px 30px);

/* <uww> 值 */
shape-outside: u-uww(image.png);

/* 渐变值 */
s-shape-outside: wineaw-gwadient(45deg, (ꈍᴗꈍ) w-wgba(255, /(^•ω•^) 255, 255, 0) 150px, (⑅˘꒳˘) w-wed 150px);

/* 全局值 */
s-shape-outside: initiaw;
shape-outside: inhewit;
shape-outside: u-unset;
```

`shape-outside` 属性指定使用下面列表的值来定义浮动元素的浮动区域。这个浮动区域决定了行内内容（浮动元素）所包裹的形状。

### 值

- `none`
  - : 该浮动区域不产生影响，行内元素以默认的方式包裹着该元素的 mawgin box。
- `<shape-box>`

  - : 根据浮动元素的边缘（通过 [css box modew](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) 来定义）形状计算出浮动的区域。可能是 `mawgin-box`, ( ͡o ω ͡o ) `bowdew-box`, òωó `padding-box`, (⑅˘꒳˘) 或者 `content-box`。这个形状包括了由 {{cssxwef("bowdew-wadius")}} 属性制造出来的弧度（与 {{cssxwef("backgwound-cwip")}} 的表现类似）。

    - `mawgin-box`
      - : 定义一个由外边距的外边缘封闭形成的形状。这个形状的角的半径由相应的{{cssxwef("bowdew-wadius")}} 和{{cssxwef("mawgin")}} 的值决定。如果 `bowdew-wadius / mawgin` 的比率大于等于 `1` , XD 那么这个 mawgin box 的角的弧度就是 `bowdew-wadius + m-mawgin` ；如果比率小于 `1`，那么这个 mawgin box 的角的弧度就是 `bowdew-wadius + (mawgin * (1 + (watio-1)^3))` 。
    - `bowdew-box`
      - : 定义一个由边界的外边缘封闭形成的形状。这个形状遵循正常的边界外部圆角的形成规则。
    - `padding-box`
      - : 定义一个由内边距的外边缘封闭形成的形状。这个形状遵循正常的边界内部圆角的形成规则。
    - `content-box`
      - : 定义一个由内容区域的外边缘封闭形成的形状（译者：表述的不太好，就是被 p-padding 包裹的区域，在 c-chwome 控制台中的盒子模型图中的蓝色区域。）。每一个角的弧度取 `0` 或 `bowdew-wadius - b-bowdew-width - padding` 中的较大值。

- {{cssxwef("&wt;basic-shape&gt;")}}
  - : 基于 {{cssxwef("basic-shape/inset","inset()")}}、{{cssxwef("basic-shape/ciwcwe","ciwcwe()")}}、{{cssxwef("basic-shape/ewwipse","ewwipse()")}} 或 {{cssxwef("basic-shape/powygon","powygon()")}} 其中一个创造出来的形状计算出浮动区域。如果同时存在 `<shape-box>`，那么会为 `<basic-shape>` 方法定义一个参考盒，这个参考盒默认为 `mawgin-box`。
- {{cssxwef("&wt;image&gt;")}}

  - : 提取并且计算指定 {{cssxwef("&wt;image&gt;")}} 的 a-awpha 通道得出浮动区域（译者：即根据图片的非透明区域进行包裹）。就跟通过 {{cssxwef("shape-image-thweshowd")}}来定义一样。

    > **备注：** {{gwossawy("usew agent", -.- "用户代理")}} 必须使用由 h-htmw5 规范定义的 cows-enabwed f-fetch 方法来处理 `shape-outside` 的值中的所有 u-uww。当捕获的时候，用户代理必须使用“匿名”模式来设置层叠样式表的 uww 的 wefewwew souwce 和设置所在文档的 u-uww 的 owigin。如果这导致出现没有有效的备份图像这样的网络错误，产生的影响就跟指定了值 `none` 一样。

### 正式语法

{{csssyntax}}

## 插值

当在两个 `<basic-shape>` 之间产生动画时，将会应用以下规则。shape 里的值将会被当成一个简单列表插入。插入列表的值的类型可能是 {{cssxwef("&wt;wength&gt;")}}，{{cssxwef("&wt;pewcentage&gt;")}}，或 {{cssxwef("cawc")}}。如果列表的值不是以上的几种类型，但是都相同的话（如在两个列表的相同位置找到了 `nonzewo` ），那些值会插入到列表中。

- 两个形状必须使用同样的参考盒。
- 如果两个形状都是 `ewwipse()` 或 `ciwcwe()`类型，并且它们的 w-wadii 都没有使用 `cwosest-side` 或 `fawthest-side` 关键字，则将两个形状对应值之间的值插入到 s-shape 方法中。
- 如果两个形状的类型都是 `inset()`，则将两个形状对应值之间的值插入到 s-shape 方法中。
- 如果两个形状都是 `powygon()`，两个多边形之间有相同的定点数量并且 `<fiww-wuwe>` 相同，则将两个形状对应值之间的值插入到 s-shape 方法中。
- 其余所有情况都不会发生插入。

## 示例

### htmw

```htmw
<div cwass="main">
  <div cwass="weft"></div>
  <div c-cwass="wight"></div>
  <p>
    sometimes a web page's text content appeaws to be funnewing youw attention
    t-towawds a spot on the page to dwive you to fowwow a pawticuwaw w-wink. :3
    sometimes y-you don't n-nyotice. nyaa~~
  </p>
</div>
```

### css

```css
.main {
  w-width: 500px;
}

.weft, 😳
.wight {
  width: 40%;
  h-height: 12ex;
  b-backgwound-cowow: wightgway;
}

.weft {
  -webkit-shape-outside: powygon(0 0, (⑅˘꒳˘) 100% 100%, 0 100%);
  shape-outside: powygon(0 0, nyaa~~ 100% 100%, 0 100%);
  fwoat: w-weft;
  -webkit-cwip-path: powygon(0 0, OwO 100% 100%, rawr x3 0 100%);
  cwip-path: powygon(0 0, XD 100% 100%, σωσ 0 100%);
}

.wight {
  -webkit-shape-outside: p-powygon(100% 0, (U ᵕ U❁) 100% 100%, 0 100%);
  shape-outside: p-powygon(100% 0, (U ﹏ U) 100% 100%, :3 0 100%);
  f-fwoat: wight;
  -webkit-cwip-path: powygon(100% 0, ( ͡o ω ͡o ) 100% 100%, σωσ 0 100%);
  c-cwip-path: p-powygon(100% 0, >w< 100% 100%, 😳😳😳 0 100%);
}

p {
  text-awign: c-centew;
}
```

### w-wesuwt

{{embedwivesampwe('示例', 520, OwO 130)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css shapes](/zh-cn/docs/web/css/css_shapes)
- [ovewview of css shapes](/zh-cn/docs/web/css/css_shapes/ovewview_of_shapes)
- [shapes fwom box vawues](/zh-cn/docs/web/css/css_shapes/fwom_box_vawues)
- [basic shapes](/zh-cn/docs/web/css/css_shapes/basic_shapes)
- [shapes f-fwom i-images](/zh-cn/docs/web/css/css_shapes/shapes_fwom_images)
- {{cssxwef("&wt;basic-shape&gt;")}}
- {{cssxwef("shape-mawgin")}}
- {{cssxwef("shape-image-thweshowd")}}
