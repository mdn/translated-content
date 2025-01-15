---
title: <gradient>
slug: Web/CSS/gradient
---

{{CSSRef}}

**`<gradient>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) 是 {{cssxref("&lt;image&gt;")}} 的一种特殊类型，包含两种或多种颜色的过渡转变。

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

CSS 渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

## 语法

`<gradient>` 数据类型是由下面列出的函数类型中的一个定义的。

### 线性渐变

线性渐变会在一个假想的直线上过渡颜色。线性渐变是由 {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 函数产生的。

### 径向渐变

径向渐变从一个中间点（原点）开始过渡颜色。径向渐变是由 {{cssxref("gradient/radial-gradient", "radial-gradient()")}} 函数产生的。

### 重复渐变

重复渐变可根据需要复制渐变，以填充指定区域。重复渐变是使用 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 和 {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} 函数生成的。

### 锥形渐变

锥形渐变会沿着一个圆过渡颜色。锥形渐变是由 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 函数产生的。

## 插值

就像很多包含颜色的插值一样，渐变是在 alpha 预乘的颜色空间中插值的。这会避免在颜色和不透明度都在改变时出现未预料的灰色阴影。（注意旧的浏览器可能在使用 [transparent 关键字](/zh-CN/docs/Web/CSS/named-color#transparent) 时不使用此行为。）

## 形式语法

{{csssyntax}}

## 示例

### 线性渐变示例

简单的线性渐变示例。

```html hidden
<div class="linear-gradient">线性渐变</div>
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

{{EmbedLiveSample('线性渐变示例', 240, 120)}}

### 径向渐变示例

简单的径向渐变。

```html hidden
<div class="radial-gradient">径向渐变</div>
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

{{EmbedLiveSample('径向渐变示例', 240, 120)}}

### 重复渐变示例

简单的重复线性和径向渐变示例。

```html hidden
<div class="linear-repeat">重复的线性渐变</div>
<br />
<div class="radial-repeat">重复的径向渐变</div>
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

{{EmbedLiveSample('重复渐变示例', 240, 220)}}

### 锥形渐变示例

简单的锥形渐变示例。注意这目前并非在浏览器中广泛支持。

```html hidden
<div class="conic-gradient">锥形渐变</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(lightpink, white, powderblue);
}
```

{{EmbedLiveSample('锥形渐变示例', 240, 240)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 渐变函数：{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS 基本数据类型](/zh-CN/docs/Web/CSS/CSS_Types)
- [CSS 单位和值](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 介绍：值和单位](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
