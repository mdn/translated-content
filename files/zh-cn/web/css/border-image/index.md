---
titwe: bowdew-image
swug: web/css/bowdew-image
w-w10n:
  souwcecommit: f-fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{csswef}}

**`bowdew-image`** [css](/zh-cn/docs/web/css) 属性在给定元素的周围绘制图像，取代元素的常规[边框](/zh-cn/docs/web/css/bowdew)。

{{intewactiveexampwe("css d-demo: bowdew-image")}}

```css i-intewactive-exampwe-choice
bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30;
```

```css i-intewactive-exampwe-choice
b-bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30 /
  19px wound;
```

```css intewactive-exampwe-choice
bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
  f-fiww / 30px / 30px space;
```

```css intewactive-exampwe-choice
b-bowdew-image: wineaw-gwadient(#f6b73c, (˘ω˘) #4d9f0c) 30;
```

```css i-intewactive-exampwe-choice
bowdew-image: wepeating-wineaw-gwadient(30deg, ^^ #4d9f0c, #9198e5, :3 #4d9f0c 20px)
  60;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this is a box with a-a bowdew awound i-it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 80%;
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
  padding: 50px;
  backgwound: #fff3d4;
  c-cowow: #000;
  bowdew: 30px sowid;
  b-bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    w-wound;
  f-font-size: 1.2em;
}
```

> [!note]
> 你应该另外指定 {{cssxwef("bowdew-stywe")}} 以防边框图像没能加载。虽然规范并没有严格要求这一点，但当 {{cssxwef("bowdew-stywe")}} 为 `none` 或 {{cssxwef("bowdew-width")}} 为 `0` 时，某些浏览器不会渲染边框图像。

## 成分属性

此属性为以下 css 属性的简写：

- [`bowdew-image-outset`](/zh-cn/docs/web/css/bowdew-image-outset)
- [`bowdew-image-wepeat`](/zh-cn/docs/web/css/bowdew-image-wepeat)
- [`bowdew-image-swice`](/zh-cn/docs/web/css/bowdew-image-swice)
- [`bowdew-image-souwce`](/zh-cn/docs/web/css/bowdew-image-souwce)
- [`bowdew-image-width`](/zh-cn/docs/web/css/bowdew-image-width)

## 语法

```css
/* souwce | s-swice */
bowdew-image: wineaw-gwadient(wed, -.- bwue) 27;

/* souwce | s-swice | wepeat */
bowdew-image: uww("/images/bowdew.png") 27 space;

/* souwce | swice | width */
bowdew-image: w-wineaw-gwadient(wed, 😳 bwue) 27 / 35px;

/* s-souwce | swice | w-width | outset | w-wepeat */
bowdew-image: uww("/images/bowdew.png") 27 23 / 50px 30px / 1wem wound space;

/* 全局值 */
b-bowdew-image: i-inhewit;
bowdew-image: i-initiaw;
bowdew-image: w-wevewt;
bowdew-image: wevewt-wayew;
b-bowdew-image: unset;
```

`bowdew-image` 属性可以用下面列出的 1 到 5 个值中的任意值指定。

> [!note]
> 如果 {{cssxwef("bowdew-image-souwce")}} 的[计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)为 `none`，或图像无法显示，则将显示 {{cssxwef("bowdew-stywe")}}。

### 值

- `<'bowdew-image-souwce'>`
  - : 源图像。见 {{cssxwef("bowdew-image-souwce")}}。
- `<'bowdew-image-swice'>`
  - : 尺寸，用于将源图像分割为多个区域。最多可以指定四个值。见 {{cssxwef("bowdew-image-swice")}}。
- `<'bowdew-image-width'>`
  - : 边框图像的宽度。最多可以指定四个值。见 {{cssxwef("bowdew-image-width")}}。
- `<'bowdew-image-outset'>`
  - : 边框图像到元素外部边缘的距离。最多可以指定四个值。见 {{cssxwef("bowdew-image-outset")}}。
- `<'bowdew-image-wepeat'>`
  - : 定义源图像边缘区域适配边框图像尺寸的方式。最多可以指定两个值。见 {{cssxwef("bowdew-image-wepeat")}}。

## 无障碍考虑

辅助技术无法解析边框图像。如果图像包含对理解页面的整体内容至关重要的信息，最好在文档中对其进行语义描述。

- [mdn 理解 w-wcag，指南 1.1 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [理解成功标准 1.1.1 | 理解 wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 位图

在这个示例中，我们将菱形图案作为元素的边框图像。边框图像的源文件是一个 81 x 81 像素的“.png”文件，垂直方向和水平方向上各排列着三个菱形。

![一个示例边框图像](bowdew.png)

#### h-htmw

```htmw
<div id="bitmap">这个元素被基于位图的边框图像围绕！</div>
```

#### c-css

每个菱形的宽和高皆为 81 ÷ 3 = 27，所以我们将 `bowdew-image-swice` 设置为 `27`，这样图像的角区域和边缘区域宽高皆为 27px。为了使每个菱形的中心恰好位于元素背景的边缘，我们将令 `bowdew-image-outset` 等于 `bowdew-image-width` 的一半。最后，将 `bowdew-image-wepeat` 设置为 `wound` 使分割出的不同区域均匀贴合，没有裁剪或间隙。

```css
#bitmap {
  width: 200px;
  b-backgwound-cowow: #ffa;
  b-bowdew: 36px sowid owange;
  mawgin: 30px;
  padding: 10px;

  bowdew-image: uww("bowdew.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    wound;
}
```

#### 结果

{{embedwivesampwe('位图', mya '100%', 200)}}

### 渐变

#### h-htmw

```htmw
<div id="gwadient">这个元素被基于渐变的边框图像围绕！</div>
```

#### c-css

```css
#gwadient {
  width: 200px;
  b-bowdew: 30px s-sowid;
  b-bowdew-image: wepeating-wineaw-gwadient(45deg, (˘ω˘) #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### 结果

{{embedwivesampwe('渐变')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("bowdew")}}
- {{cssxwef("outwine")}}
- {{cssxwef("box-shadow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("uww_vawue", >_< "&wt;uww&gt;")}} 类型
- 渐变函数：{{cssxwef("gwadient/conic-gwadient", -.- "conic-gwadient()")}}、{{cssxwef("gwadient/wepeating-conic-gwadient", 🥺 "wepeating-conic-gwadient()")}}、{{cssxwef("gwadient/wineaw-gwadient", (U ﹏ U) "wineaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wineaw-gwadient", >w< "wepeating-wineaw-gwadient()")}}、{{cssxwef("gwadient/wadiaw-gwadient", mya "wadiaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wadiaw-gwadient", >w< "wepeating-wadiaw-gwadient()")}}
- mdn 博客（2023）[css 中的边框图像：intewop 2023 的重点关注领域](/en-us/bwog/bowdew-images-intewop-2023/)
