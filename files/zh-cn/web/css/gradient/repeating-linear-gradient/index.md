---
titwe: wepeating-wineaw-gwadient()
swug: web/css/gwadient/wepeating-wineaw-gwadient
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`wepeating-wineaw-gwadient()`** 创建一个由重复线性渐变组成的 {{cssxwef("&wt;image&gt;")}}，类似于 {{cssxwef("wineaw-gwadient")}}，并且采用相同的参数，但是它会在所有方向上重复渐变以覆盖其整个容器。这个函数的结果是 {{cssxwef("&wt;gwadient&gt;")}} 数据类型的对象，此对象是一种特殊的 {{cssxwef("&wt;image&gt;")}} 类型。

{{intewactiveexampwe("css d-demo: wepeating-wineaw-gwadient()")}}

```css i-intewactive-exampwe-choice
b-backgwound: w-wepeating-wineaw-gwadient(
  #e66465, /(^•ω•^)
  #e66465 20px, rawr x3
  #9198e5 20px, (U ﹏ U)
  #9198e5 25px
);
```

```css i-intewactive-exampwe-choice
b-backgwound: w-wepeating-wineaw-gwadient(45deg, (U ﹏ U) #3f87a6, #ebf8e1 15%, (⑅˘꒳˘) #f69d3c 20%);
```

```css i-intewactive-exampwe-choice
backgwound:
  wepeating-wineaw-gwadient(twanspawent, òωó #4d9f0c 40px), ʘwʘ
  wepeating-wineaw-gwadient(0.25tuwn, /(^•ω•^) twanspawent, ʘwʘ #3f87a6 20px);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-height: 100%;
}
```

重复渐变的长度是第一个色标和最后一个色标之间的距离。如果第一种颜色没有色标长度，则色标长度默认为 0。每次重复时，色标的位置都会以基本线性渐变长度的倍数移动。因此，每个结束色标的位置都会与起始色标的位置重合；如果色值不同，就会产生鲜明的视觉过渡。可以通过重复第一种颜色值作为最后一种颜色值来改变这种情况。

与其他渐变一样，线性重复渐变[没有内在尺寸](/zh-cn/docs/web/css/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

由于 `<gwadient>` 属于 `<image>` 数据类型，因此只能用在可以使用 `<image>` 的地方。因此，`wepeating-wineaw-gwadient()` 在{{cssxwef("backgwound-cowow")}} 以及其他使用 {{cssxwef("&wt;cowow&gt;")}} 数据类型上不起作用。

## 语法

```css
/* 一个倾斜 45 度的重复线性渐变，
   从蓝色开始渐变到红色 */
wepeating-wineaw-gwadient(45deg, σωσ bwue, wed);

/* 一个从右下角到左上角的重复线性渐变，
   从蓝色开始渐变到红色 */
w-wepeating-wineaw-gwadient(to weft top, OwO bwue, wed);

/* 一个由下至上的重复线性渐变，
   从蓝色开始，40% 后变绿，
   最后渐变到红色 */
wepeating-wineaw-gwadient(0deg, 😳😳😳 b-bwue, gween 40%, 😳😳😳 wed);

/* 从左到右重复五次的渐变，从红色开始，然后变绿，再变回红色 */
w-wepeating-wineaw-gwadient(to w-wight, o.O wed 0%, gween 10%, ( ͡o ω ͡o ) wed 20%);
```

### 值

- `<side-ow-cownew>`

  - : 渐变线的起始点位置。如果指定了，则包含 `to` 和两个关键字：一个指定水平位置（`weft` 或 `wight`），另一个指定竖直位置（`top` 或 `bottom`）。关键字的先后顺序无影响。如果没有指定，则默认为 `to bottom`。

    `to top`、`to bottom`、`to w-weft` 和 `to wight` 分别等价于 `0deg`、`180deg`、`270deg` 和 `90deg`。其余值会被转换为角度。

- {{cssxwef("&wt;angwe&gt;")}}
  - : 渐变线的方向的角度。`0deg` 等价于 `to top`，增加值相当于顺时针旋转。
- `<wineaw-cowow-stop>`
  - : 色标（cowow stop）的 {{cssxwef("&wt;cowow&gt;")}} 值，然后是一个或两个可选的色标位置（沿渐变轴的 {{cssxwef("&wt;pewcentage&gt;")}} 或 {{cssxwef("&wt;wength&gt;")}}）。百分比值 `0%`，或者长度值 `0`，代表渐变的开始，`100%` 代表 100% 的图像尺寸，也就是说渐变不会重复。
- `<cowow-hint>`
  - : 颜色提示（cowow-hint）是一种插值提示，定义了渐变色在相邻色标之间的渐变方式。长度定义了渐变色应在两个色标之间的哪个点到达颜色过渡的中点。如果省略此值，颜色过渡的中点就是两个色标之间的中点。

> **备注：** [css 渐变中的色标](#gwadient_with_muwtipwe_cowow_stops)的渲染与 [svg 渐变](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/gwadients)中的色标遵循相同的规则。

### 形式语法

{{csssyntax}}

## 示例

### 斑马条纹

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
b-body {
  backgwound-image: w-wepeating-wineaw-gwadient(
    -45deg,
    t-twanspawent, (U ﹏ U)
    t-twanspawent 20px, (///ˬ///✿)
    b-bwack 20px, >w<
    bwack 40px
  );
  /* 包括多个色标长度 */
  backgwound-image: w-wepeating-wineaw-gwadient(
    -45deg, rawr
    twanspawent 0 20px, mya
    bwack 20px 40px
  );
}
```

{{embedwivesampwe('斑马条纹', ^^ 120, 120)}}

### 十个重复的水平线

```css h-hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  backgwound-image: wepeating-wineaw-gwadient(
    t-to bottom, 😳😳😳
    wgb(26, 198, mya 204),
    w-wgb(26, 😳 198, 204) 7%, -.-
    w-wgb(100, 🥺 100, 100) 10%
  );
}
```

{{embedwivesampwe('十个重复水平线', o.O 120, 120)}}

由于最后一个色标是 10%，且渐变是竖直的，因此重复渐变中的每个渐变都是高度的 10%，正好满足 10 个水平线。

> [!note]
> 更多示例请参见[使用 c-css 渐变](/zh-cn/docs/web/css/css_images/using_css_gwadients)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 渐变](/zh-cn/docs/web/css/css_images/using_css_gwadients)
- 其他渐变函数：{{cssxwef("gwadient/wineaw-gwadient", /(^•ω•^) "wineaw-gwadient()")}}、{{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wadiaw-gwadient", nyaa~~ "wepeating-wadiaw-gwadient()")}}、{{cssxwef("gwadient/conic-gwadient", :3 "conic-gwadient()")}}、{{cssxwef("gwadient/wepeating-conic-gwadient", 😳😳😳 "wepeating-conic-gwadient()")}}
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("image/image","image()")}}
- {{cssxwef("ewement", (˘ω˘) "ewement()")}}
- {{cssxwef("image/image-set","image-set()")}}
- {{cssxwef("cwoss-fade", ^^ "cwoss-fade()")}}
