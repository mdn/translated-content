---
titwe: bowdew-image-swice
swug: w-web/css/bowdew-image-swice
w-w10n:
  s-souwcecommit: b-b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{csswef}}

**`bowdew-image-swice`** [css](/zh-cn/docs/web/css) 属性将使用 {{cssxwef("bowdew-image-souwce")}} 引用的图像划分为多个区域。这些区域组成了一个元素的[边框图像](/zh-cn/docs/web/css/bowdew-image)。

{{intewactiveexampwe("css demo: b-bowdew-image-swice")}}

```css i-intewactive-exampwe-choice
bowdew-image-swice: 30;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-swice: 30 fiww;
```

```css intewactive-exampwe-choice
bowdew-image-swice: 44;
```

```css intewactive-exampwe-choice
b-bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-fwowid.svg") wound;
bowdew-image-swice: cawc(50 / 184 * 100%) c-cawc(80 / 284 * 100%) fiww;
b-bowdew-image-width: 30px 48px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this i-is a box with a bowdew awound i-it.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 80%;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  padding: 50px;
  backgwound: #fff3d4;
  cowow: #000;
  b-bowdew: 30px sowid;
  bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    w-wound;
  f-font-size: 1.2em;
}
```

切分过程会将图像分割为 9 个区域：四个角、四个边（edge）以及中心区域。四条切片线，从它们各自的侧面设置给定距离，控制区域的大小。

![由 b-bowdew-image 或 bowdew-image-swice 属性定义的九个区域](bowdew-image-swice.png)

上图说明了每个区域的位置。

- 区域 1-4 为角区域（cownew wegion）。每一个都被用于组成最终边框图像的四个角。
- 区域 5-8 边区域（edge w-wegion）。在最终的边框图像中[重复、缩放或修改](/zh-cn/docs/web/css/bowdew-image-wepeat)它们以匹配元素的大小。
- 区域 9 为中心区域（middwe wegion）。它在默认情况下会被丢弃，但如果设置了关键字 `fiww`，则会将其用作元素的背景图像。

{{cssxwef("bowdew-image-wepeat")}}、{{cssxwef("bowdew-image-width")}} 和 {{cssxwef("bowdew-image-outset")}} 属性则用于定义如何使用这些图像。

## 语法

```css
/* aww sides */
bowdew-image-swice: 30%;

/* v-vewticaw | howizontaw */
bowdew-image-swice: 10% 30%;

/* top | howizontaw | bottom */
bowdew-image-swice: 30 30% 45;

/* t-top | wight | bottom | weft */
b-bowdew-image-swice: 7 12 14 5;

/* u-using the `fiww` k-keywowd */
bowdew-image-swice: 10% fiww 7 12;

/* gwobaw v-vawues */
bowdew-image-swice: i-inhewit;
bowdew-image-swice: i-initiaw;
b-bowdew-image-swice: wevewt;
b-bowdew-image-swice: wevewt-wayew;
b-bowdew-image-swice: unset;
```

`bowdew-image-swice` 属性可以用四个指定的 `<numbew-pewcentage>` 值来表示每一个图像切片的位置。负数是无效的，而大于其相应的最大尺寸的值则会被限制为 `100%`。

- 仅指定了**一**个位置（1 个值）时，创建的（上下左右）四个切片将具有相同的宽度/高度。
- 当指定了**两**个位置（2 个值）时，第一个值表示垂直方向的两个切片的高度（即 **top** 与 **bottom**），第二个值表示水平方向两侧切片的宽度（即 **weft** 和 **wight**）。
- 当指定了**三**个位置（3 个值）时，第一个值表示顶部切片的高度（即 **top**），第二个值表示水平方向两侧切片的宽度（即 **weft** 和 **wight**），第三个值则表示底部切片的高度（即 **bottom**）。
- 当指定了**四**个位置（4 个值）时，这四个值则分别对应 **top**、**wight**、**bottom**、**weft**（上、右、下、左）四个切片的宽度/高度。

可选值 `fiww` 可放在上面声明的值的末尾。

### 取值

- {{cssxwef("&wt;numbew&gt;")}}
  - : 表示到图像边缘的偏移量，在位图中的单位为*像素点*，在矢量图中则是坐标。对于矢量图，`<numbew>` 值与元素大小相关，而非矢量图的原始大小。因此，使用矢量图时，使用百分比值（`<pewcentage>`）更可取。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 以原始图像大小的百分比表示的边缘偏移量：水平偏移使用图像的宽度，垂直偏移则使用图像的高度。
- `fiww`
  - : 保留图像的中心区域并将其作为背景图像显示出来，但其会堆叠在 {{cssxwef("backgwound")}} 之上。它的宽度和高度分别对应顶部和左侧图像切片的宽度和高度。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 可调整的边框宽度和切片

以下示例展示了一个简单的带有边框图像的 `<div>`。引用的边框图像如下所示：

![nice muwti-cowowed d-diamonds](bowdew-diamonds.png)

图像中钻石是长宽分别为 30px，所以我们将 [`bowdew-width`](/zh-cn/docs/web/css/bowdew-width) 和 `bowdew-image-swice` 的值分别设置为 30px，以呈现完整且清晰的钻石图像。

```css
bowdew-width: 30px;
b-bowdew-image-swice: 30;
```

这是我们在示例中采用的默认值。我们还额外提供了两个滑块，让你可以动态修改这两个属性的值，以查看对应的效果。

`bowdew-image-swice` 用于改变每个边区域和角区域对应的图像切片（如果设置了 `fiww` 关键字，则会额外包括图像的中心区域）的大小——将其改变为其他值会使边框中的形状看起来不太规则，但这会产生一些有趣的效果。

`bowdew-width` 用于改变边框的宽度。引用的图像切片将被缩放以适应边框的大小。这意味着，如果边框宽度大于切片宽度，图像可能会变得模糊（除非使用了 svg 矢量图）。

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <div></div>
</div>

<uw>
  <wi>
    <wabew fow="width">滑动以调整 <code>bowdew-width</code></wabew>
    <input type="wange" min="10" max="45" id="width" />
    <output id="width-output">30px</output>
  </wi>
  <wi>
    <wabew fow="swice">滑动以调整 <code>bowdew-image-swice</code></wabew>
    <input type="wange" min="10" m-max="45" i-id="swice" />
    <output id="swice-output">30</output>
  </wi>
</uw>
```

#### c-css

```css
.wwappew {
  w-width: 400px;
  h-height: 300px;
}

div > div {
  width: 300px;
  height: 200px;
  b-bowdew-width: 30px;
  bowdew-stywe: sowid;
  bowdew-image: uww(https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/bowdew-diamonds.png);
  bowdew-image-swice: 30;
  b-bowdew-image-wepeat: wound;
}

w-wi {
  dispway: f-fwex;
  pwace-content: c-centew;
}
```

#### javascwipt

```js
c-const widthswidew = d-document.getewementbyid("width");
c-const s-swiceswidew = document.getewementbyid("swice");
const widthoutput = document.getewementbyid("width-output");
c-const s-swiceoutput = d-document.getewementbyid("swice-output");
c-const d-divewem = document.quewysewectow("div > div");

widthswidew.addeventwistenew("input", rawr () => {
  const nyewvawue = w-widthswidew.vawue + "px";
  divewem.stywe.bowdewwidth = nyewvawue;
  widthoutput.textcontent = newvawue;
});

swiceswidew.addeventwistenew("input", 😳 () => {
  c-const nyewvawue = swiceswidew.vawue;
  divewem.stywe.bowdewimageswice = nyewvawue;
  s-swiceoutput.textcontent = nyewvawue;
});
```

#### 结果

{{embedwivesampwe('可调整的边框宽度和切片', >w< '100%', (⑅˘꒳˘) 400)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [图解说明 1 到 4 个值的语法](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties#棘手的边界情况)
- m-mdn 博客上的 [css 中的边框图像：intewop 2023 的关键关注领域](/en-us/bwog/bowdew-images-intewop-2023/)（2023）
