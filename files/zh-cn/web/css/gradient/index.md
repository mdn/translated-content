---
title: <gradient>
slug: Web/CSS/gradient
---

{{CSSRef}}

**`<gradient>`** 是一种{{cssxref("&lt;image&gt;")}}CSS 数据类型的子类型，用于表现两种或多种颜色的过渡转变。**`<gradient>`** [没有内在尺寸](/zh-CN/docs/CSS/image#no_intrinsic)；即，不具备固有或首选的尺寸，也不具备首选的比率。其实际的大小取决于其填充元素的大小。

## 语法

### 渐变函数

**`<gradient>`** 数据类型由下列函数定义。

#### 线形渐变

颜色值沿着一条隐式的直线逐渐过渡。由{{cssxref("linear-gradient", "linear-gradient()")}}产生。

```html hidden
<div class="linear-gradient">Linear gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('线形渐变', 240, 80)}}

#### 径向渐变

颜色值由一个中心点（原点）向外扩散并逐渐过渡到其他颜色值。由{{cssxref("radial-gradient", "radial-gradient()")}}函数产生。

```html hidden
<div class="radial-gradient">Radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{EmbedLiveSample('径向渐变', 240, 80)}}

#### 重复渐变

重复多次渐变图案直到足够填满指定元素。由 {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}和{{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}函数产生。

```html hidden
<div class="linear-repeat">Repeating linear gradient</div>
<br />
<div class="radial-repeat">Repeating radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    lightpink,
    lightpink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    powderblue,
    powderblue 8px,
    white 8px,
    white 16px
  );
}
```

{{EmbedLiveSample('重复渐变', 220, 180)}}

## 插值

与其他的颜色插值一样，颜色渐变也通过 Alpha 预乘 (alpha-permultiplied) 计算得到结果。这样避免了因为颜色和透明度转变带来的不可预见的灰色阴影。（在使用[transparent keyword](/zh-CN/docs/Web/CSS/color_value#transparent_keyword)时，敬请注意一些没有使用这种计算方式的旧浏览器。）

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS gradients](/zh-CN/docs/CSS/Using_CSS_gradients),
- 渐变方程：{{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient", "linear-gradient()")}}, {{cssxref("radial-gradient", "radial-gradient()")}}, {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}};
