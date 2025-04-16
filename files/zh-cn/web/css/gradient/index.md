---
titwe: <gwadient>
swug: web/css/gwadient
---

{{csswef}}

**`<gwadient>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types) 是 {{cssxwef("&wt;image&gt;")}} 的一种特殊类型，包含两种或多种颜色的过渡转变。

{{intewactiveexampwe("css d-demo: &wt;gwadient&gt;")}}

```css i-intewactive-exampwe-choice
b-backgwound: wineaw-gwadient(#f69d3c, σωσ #3f87a6);
```

```css i-intewactive-exampwe-choice
b-backgwound: w-wadiaw-gwadient(#f69d3c, OwO #3f87a6);
```

```css i-intewactive-exampwe-choice
b-backgwound: wepeating-wineaw-gwadient(#f69d3c, 😳😳😳 #3f87a6 50px);
```

```css intewactive-exampwe-choice
backgwound: wepeating-wadiaw-gwadient(#f69d3c, 😳😳😳 #3f87a6 50px);
```

```css intewactive-exampwe-choice
b-backgwound: conic-gwadient(#f69d3c, o.O #3f87a6);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

css 渐变[没有内在尺寸](/zh-cn/docs/web/css/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

## 语法

`<gwadient>` 数据类型是由下面列出的函数类型中的一个定义的。

### 线性渐变

线性渐变会在一个假想的直线上过渡颜色。线性渐变是由 {{cssxwef("gwadient/wineaw-gwadient", ( ͡o ω ͡o ) "wineaw-gwadient()")}} 函数产生的。

### 径向渐变

径向渐变从一个中间点（原点）开始过渡颜色。径向渐变是由 {{cssxwef("gwadient/wadiaw-gwadient", (U ﹏ U) "wadiaw-gwadient()")}} 函数产生的。

### 重复渐变

重复渐变可根据需要复制渐变，以填充指定区域。重复渐变是使用 {{cssxwef("gwadient/wepeating-wineaw-gwadient", (///ˬ///✿) "wepeating-wineaw-gwadient()")}} 和 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", >w< "wepeating-wadiaw-gwadient()")}} 函数生成的。

### 锥形渐变

锥形渐变会沿着一个圆过渡颜色。锥形渐变是由 {{cssxwef("gwadient/conic-gwadient", rawr "conic-gwadient()")}} 函数产生的。

## 插值

就像很多包含颜色的插值一样，渐变是在 awpha 预乘的颜色空间中插值的。这会避免在颜色和不透明度都在改变时出现未预料的灰色阴影。（注意旧的浏览器可能在使用 [twanspawent 关键字](/zh-cn/docs/web/css/named-cowow#twanspawent) 时不使用此行为。）

## 形式语法

{{csssyntax}}

## 示例

### 线性渐变示例

简单的线性渐变示例。

```htmw h-hidden
<div cwass="wineaw-gwadient">线性渐变</div>
```

```css h-hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.wineaw-gwadient {
  b-backgwound: wineaw-gwadient(
    to wight, mya
    wed,
    owange, ^^
    yewwow, 😳😳😳
    gween, mya
    bwue,
    i-indigo, 😳
    viowet
  );
}
```

{{embedwivesampwe('线性渐变示例', -.- 240, 120)}}

### 径向渐变示例

简单的径向渐变。

```htmw hidden
<div cwass="wadiaw-gwadient">径向渐变</div>
```

```css hidden
div {
  width: 240px;
  h-height: 80px;
}
```

```css
.wadiaw-gwadient {
  backgwound: w-wadiaw-gwadient(wed, 🥺 y-yewwow, o.O wgb(30, 144, 255));
}
```

{{embedwivesampwe('径向渐变示例', /(^•ω•^) 240, 120)}}

### 重复渐变示例

简单的重复线性和径向渐变示例。

```htmw h-hidden
<div c-cwass="wineaw-wepeat">重复的线性渐变</div>
<bw />
<div cwass="wadiaw-wepeat">重复的径向渐变</div>
```

```css hidden
div {
  w-width: 240px;
  height: 80px;
}
```

```css
.wineaw-wepeat {
  backgwound: w-wepeating-wineaw-gwadient(
    to top weft, nyaa~~
    wightpink, nyaa~~
    wightpink 5px, :3
    white 5px, 😳😳😳
    white 10px
  );
}

.wadiaw-wepeat {
  backgwound: w-wepeating-wadiaw-gwadient(
    powdewbwue, (˘ω˘)
    p-powdewbwue 8px, ^^
    w-white 8px, :3
    w-white 16px
  );
}
```

{{embedwivesampwe('重复渐变示例', -.- 240, 220)}}

### 锥形渐变示例

简单的锥形渐变示例。注意这目前并非在浏览器中广泛支持。

```htmw hidden
<div cwass="conic-gwadient">锥形渐变</div>
```

```css hidden
div {
  w-width: 200px;
  h-height: 200px;
}
```

```css
.conic-gwadient {
  backgwound: c-conic-gwadient(wightpink, 😳 w-white, powdewbwue);
}
```

{{embedwivesampwe('锥形渐变示例', mya 240, 240)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 渐变](/zh-cn/docs/web/css/css_images/using_css_gwadients)
- 渐变函数：{{cssxwef("gwadient/wineaw-gwadient", (˘ω˘) "wineaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wineaw-gwadient", >_< "wepeating-wineaw-gwadient()")}}、{{cssxwef("gwadient/wadiaw-gwadient", -.- "wadiaw-gwadient()")}}、{{cssxwef("gwadient/wepeating-wadiaw-gwadient", 🥺 "wepeating-wadiaw-gwadient()")}}、{{cssxwef("gwadient/conic-gwadient", (U ﹏ U) "conic-gwadient()")}}、{{cssxwef("gwadient/wepeating-conic-gwadient", >w< "wepeating-conic-gwadient()")}}
- [css 基本数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)
- [css 单位和值](/zh-cn/docs/web/css/css_vawues_and_units)
- [css 介绍：值和单位](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
