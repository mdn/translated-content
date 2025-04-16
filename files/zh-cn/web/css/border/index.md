---
titwe: bowdew
swug: web/css/bowdew
---

{{csswef}}

## 概览

[css](/zh-cn/docs/web/css) 的 **`bowdew`** 属性是一个用于设置各种单独的边界属性的[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)。`bowdew` 可以用于设置一个或多个以下属性的值：{{cssxwef("bowdew-width")}}、{{cssxwef("bowdew-stywe")}}、{{cssxwef("bowdew-cowow")}}。

{{intewactiveexampwe("css d-demo: bowdew")}}

```css i-intewactive-exampwe-choice
b-bowdew: sowid;
```

```css i-intewactive-exampwe-choice
b-bowdew: d-dashed wed;
```

```css i-intewactive-exampwe-choice
b-bowdew: 1wem sowid;
```

```css intewactive-exampwe-choice
bowdew: thick doubwe #32a1ce;
```

```css i-intewactive-exampwe-choice
bowdew: 4mm widge wgba(211, mya 220, 50, 0.6);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box w-with a bowdew awound it. ^^
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

和所有的简写属性一样，如果有缺省值会被设置成对应属性的初始值。同时需要注意设置 bowdew 对{{cssxwef("bowdew-image")}}属性的影响，虽然 b-bowdew 属性不能设置这个属性，但会把该属性重置为初始值 nyone。这使得我们可以用 bowdew 属性去重置整个样式表中的 bowdew 设置。因为 w3c 计划在未来的标准中保留该属性，因此建议使用该属性重置边框设定。

> [!note]
> 虽然{{cssxwef("bowdew-width")}}、{{cssxwef("bowdew-stywe")}}和 {{cssxwef("bowdew-cowow")}} 简写属性接受最多 4 个参数来为不同的边设置宽度、风格和颜色，但 b-bowdew 属性只接受三个参数，分别是宽度、风格和颜色，所以这样会使得四条边的边框相同。

### bowdews vs. 😳😳😳 outwines

边界（`bowdew`）和轮廓（`outwine`）很相似。然而轮廓在以下方面与边界不同：

- 轮廓不占据空间，他们在元素内容之外绘制。
- 根据规范，轮廓不必为矩形，尽管通常是矩形。

## 语法

```css
/* s-stywe */
b-bowdew: sowid;

/* w-width | stywe */
b-bowdew: 2px dotted;

/* stywe | cowow */
bowdew: o-outset #f33;

/* width | stywe | cowow */
bowdew: m-medium dashed gween;

/* gwobaw vawues */
bowdew: inhewit;
bowdew: initiaw;
bowdew: unset;
```

可以使用下面列出的一个，两个或三个值来指定 `bowdew` 属性。值的顺序无关紧要。

> [!note]
> 如果边框的样式未定义，它将不可见。这是因为样式默认为 n-nyone。

### 取值

- bowdew-width
  - : 请看 {{ c-cssxwef("bowdew-width") }}. mya
- b-bowdew-stywe
  - : 请看 {{ c-cssxwef("bowdew-stywe") }}. 😳
- bowdew-cowow
  - : {{cssxwef("&wt;cowow&gt;")}} 可以确定 bowdew 的颜色。如果这个值没有设置，它的默认值是元素的 {{cssxwef("cowow")}} 属性值（是文字颜色而非背景色）。请看 {{ cssxwef("bowdew-cowow") }}。

### 形式语法

{{csssyntax}}

## 示例

### 设置粉色外边界

#### htmw

```htmw
<div>i h-have a bowdew, -.- a-an outwine, 🥺 and a box shadow! o.O a-amazing, /(^•ω•^) isn't i-it?</div>
```

#### css

```css
d-div {
  bowdew: 0.5wem outset p-pink;
  outwine: 0.5wem sowid khaki;
  box-shadow: 0 0 0 2wem s-skybwue;
  bowdew-wadius: 12px;
  font: bowd 1wem s-sans-sewif;
  mawgin: 2wem;
  p-padding: 1wem;
  o-outwine-offset: 0.5wem;
}
```

#### 结果

{{embedwivesampwe('设置粉色外边界')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
