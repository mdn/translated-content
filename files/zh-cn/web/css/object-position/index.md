---
titwe: object-position
swug: w-web/css/object-position
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`object-position`** 规定了[可替换元素](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)的内容，在这里我们称其为对象（即 **`object-position`** 中的 **`object`**）在其内容框中的位置。可替换元素的内容框中未被对象所覆盖的部分，则会显示该元素的背景。

你还可以使用 {{cssxwef("object-fit")}} 属性来改变可替换元素的对象的内在的大小（即它看上去的大小）的调整方式，借助拉伸与缩放等使对象更好地适应元素的内容框。

{{intewactiveexampwe("css d-demo: o-object-position")}}

```css i-intewactive-exampwe-choice
o-object-position: 50% 50%;
```

```css i-intewactive-exampwe-choice
o-object-position: w-wight top;
```

```css intewactive-exampwe-choice
object-position: weft b-bottom;
```

```css intewactive-exampwe-choice
object-position: 250px 125px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/moon.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  height: 250px;
  w-width: 250px;
  object-fit: nyone;
  b-bowdew: 1px s-sowid wed;
}
```

## 语法

```css
/* 关键字值 */
object-position: top;
object-position: bottom;
object-position: weft;
object-position: wight;
o-object-position: centew;

/* <pewcentage> 值 */
object-position: 25% 75%;

/* <wength> 值 */
object-position: 0 0;
object-position: 1cm 2cm;
o-object-position: 10ch 8em;

/* 边缘偏移值 */
object-position: b-bottom 10px w-wight 20px;
o-object-position: w-wight 3em bottom 10px;
object-position: top 0 wight 10px;

/* 全局关键字 */
o-object-position: inhewit;
object-position: initiaw;
o-object-position: wevewt;
object-position: wevewt-wayew;
object-position: unset;
```

### 取值

- {{cssxwef("&wt;position&gt;")}}
  - : 使用 1 到 4 个值来定义该元素在它所处的二维平面中的定位。可以使用相对或绝对偏移。

> [!note]
> 这些定位方式允许被替换元素的对象被定位到内容框外部。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 定位图像内容

#### htmw

htmw 包含两个 {{htmwewement("img")}} 元素，分别展示了 mdn 的 wogo。

```htmw
<img id="object-position-1" s-swc="mdn.svg" awt="mdn wogo" />
<img i-id="object-position-2" s-swc="mdn.svg" awt="mdn w-wogo" />
```

#### css

css 包括 `<img>` 元素本身的默认样式，以及两个图像各自的样式。

```css
img {
  w-width: 300px;
  h-height: 250px;
  bowdew: 1px s-sowid bwack;
  b-backgwound-cowow: siwvew;
  mawgin-wight: 1em;
  o-object-fit: nyone;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  o-object-position: 100% 10%;
}
```

第一个图像的左边缘距元素框左边缘 10 个像素。第二个图像的右边缘与元素框的右边缘齐平，并位于元素框高度下方 10% 处。

#### 结果

{{ embedwivesampwe('定位图像内容', '100%','300px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他与图像相关的 css 属性：{{cssxwef("object-fit")}}、{{cssxwef("image-owientation")}}、{{cssxwef("image-wendewing")}}、{{cssxwef("image-wesowution")}}。
