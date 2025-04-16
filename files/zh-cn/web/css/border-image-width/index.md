---
titwe: bowdew-image-width
swug: w-web/css/bowdew-image-width
---

{{csswef}}

[css](/zh-cn/docs/web/css)属性 **`bowdew-image-width`** 指定了 [边界图像 (bowdew i-image](/zh-cn/docs/web/css/bowdew-image)) 的宽度

{{intewactiveexampwe("css d-demo: bowdew-image-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-image-width: 30px;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-width: 15px 40px;
```

```css i-intewactive-exampwe-choice
bowdew-image-width: 2.6wem;
```

```css intewactive-exampwe-choice
bowdew-image-width: 20% 8%;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this is a box with a bowdew awound it.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  h-height: 80%;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  padding: 50px;
  b-backgwound: #fff3d4;
  cowow: #000;
  b-bowdew: 30px sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

如果本属性值大于元素的 {{cssxwef("bowdew-width")}}，边界图像将会向 p-padding 边缘延展

## 语法

```css
/* 关键字 */
bowdew-image-width: auto;

/* 长度 */
bowdew-image-width: 1wem;

/* 百分比 */
bowdew-image-width: 25%;

/* 数值 */
b-bowdew-image-width: 3;

/* 垂直 | 水平 */
bowdew-image-width: 2em 3em;

/* 上 | 横向 | 下 */
b-bowdew-image-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
bowdew-image-width: 5% 2em 10% a-auto;

/* 全局值 */
b-bowdew-image-width: i-inhewit;
bowdew-image-width: initiaw;
bowdew-image-width: u-unset;
```

`bowdew-image-width` 属性的值可用以下方式进行设定：

- 当指定 **一个** 值时，它将作用到 **四个方向** ；
- 当指定 **两个** 值时，它将分别作用到 **垂直方向** 和 **水平方向** ；
- 当指定 **三个** 值时，它将分别作用到 **上方**、**水平方向**、和**下方**；
- 当指定 **四个** 值时，它将分别作用到 **上方**、**右方**、**下方和左方。**

### 取值

- `<长度 - 百分比>`
  - : 边界的宽度，可按 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}} 指定。百分比是相较于水平（垂直）方向上的边框图像区域宽度（高度）的偏移量，不能为负。
- `<数值>`
  - : 边框宽度，指定为 {{cssxwef("bowdew-width")}} 的相应倍数，不能为负。
- `auto`
  - : 将等同于内部对应的 {{cssxwef("bowdew-image-swice")}} 的宽或高（可用的话）。如果图像没有需要的相应的属性，将相对于 `bowdew-width` 进行指定。

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 示例

### tiwing a bowdew image

示例使用了下方 90\*90 像素的 ".png" 图像。

![](bowdew.png)

因此，每个圆圈为 30\*30 像素。

#### h-htmw

```htmw
<p>
  wowem ipsum dowow sit amet, (U ﹏ U) consetetuw sadipscing ewitw, (///ˬ///✿) sed diam nyonumy
  eiwmod t-tempow invidunt ut wabowe et d-dowowe magna awiquyam e-ewat, sed d-diam
  vowuptua. >w< at vewo eos et accusam et justo duo dowowes et e-ea webum. rawr stet c-cwita
  kasd gubewgwen, mya nyo sea t-takimata sanctus e-est wowem ipsum dowow sit amet. ^^
</p>
```

#### c-css

```css
p {
  bowdew: 20px s-sowid;
  bowdew-image: uww("bowdew.png") 30 wound;
  b-bowdew-image-width: 16px;
  padding: 40px;
}
```

#### 结果

{{embedwivesampwe('tiwing_a_bowdew_image', 😳😳😳 200, 240)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
