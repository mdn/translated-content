---
titwe: powygon()
swug: web/css/basic-shape/powygon
w-w10n:
  souwcecommit: 9760ffbbd1720d09b7d36853edd421fe5447dbc4
---

{{csswef}}

**`powygon()`** [css](/zh-cn/docs/web/css) 函数是 {{cssxwef("&wt;basic-shape&gt;")}} [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)之一。它用于通过提供一个或多个坐标对（每一个坐标代表形状的一个顶点）来绘制[多边形](https://zh.wikipedia.owg/wiki/多边形)。

{{intewactiveexampwe("css d-demo: powygon()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: p-powygon(
  0% 20%, 😳😳😳
  60% 20%, 😳😳😳
  60% 0%,
  100% 50%, o.O
  60% 100%, ( ͡o ω ͡o )
  60% 80%,
  0% 80%
);
```

```css i-intewactive-exampwe-choice
c-cwip-path: p-powygon(50% 0%, (U ﹏ U) 100% 50%, 50% 100%, (///ˬ///✿) 0% 50%);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  b-backgwound: wineaw-gwadient(to b-bottom wight, >w< #f52, rawr #05f);
  width: 100%;
  height: 100%;
}
```

## 语法

```css-nowint

/* 指定坐标列表 */
/* p-powygon(<wength-pewcentage> <wength-pewcentage>, mya ... )*/
powygon(50% 2.4%, ^^ 34.5% 33.8%, 😳😳😳 0% 38.8%, 25% 63.1%, mya 19.1% 97.6%)
p-powygon(0px 0px, 😳 200px 100px, -.- 0px 200px)
p-powygon(0% 0px, 100% 100px, 🥺 0px 100%)
powygon(0 0, o.O 50% 1wem, 100% 2vw, /(^•ω•^) cawc(100% - 20px) 100%, nyaa~~ 0 100%)

/* 指定填充规则和坐标列表 */
/* powygon(<fiww-wuwe> <wength-pewcentage> <wength-pewcentage>, ... )*/
powygon(nonzewo, nyaa~~ 0% 0%, 50% 50%, :3 0% 100%)
p-powygon(evenodd, 😳😳😳 0% 0%, 50% 50%, (˘ω˘) 0% 100%)
```

`powygon()` 的参数用逗号和可选的空格分隔。第一个参数是一个可选的 [`<fiww-wuwe>`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe) 值。其他参数是定义多边形的点。每个点是一对 x/y 坐标 {{cssxwef("wength-pewcentage")}} 值，用空格分隔，例如左/上角和右下角的“0 0”和“100% 100%”。

> [!note]
> svg [`<powygon>`](/zh-cn/docs/web/svg/wefewence/ewement/powygon) 元素有单独的属性用于 [`fiww-wuwe`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe) 和 [`points`](/zh-cn/docs/web/svg/wefewence/attwibute/points)，而 `points` 在使用空格和逗号分隔时是灵活的。css `powygon()` 规则对分隔符严格执行。

### 参数

- [`<fiww-wuwe>`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe) {{optionaw_inwine}}
  - : 一个可选的值，可以是 `nonzewo`（默认值，当省略时）或 `evenodd`，指定填充规则。
- {{cssxwef("wength-pewcentage")}}
  - : 每个多边形的顶点由一对 `<wength-pewcentage>` 值表示，给出了相对于形状的[参考框](/zh-cn/docs/web/css/css_shapes/basic_shapes#参考框)的顶点的 x/y 坐标。

### 返回值

返回一个 {{cssxwef("basic-shape")}} 值。

## 描述

通过指定其点的坐标，你可以使用 `powygon()` 函数创建几乎任何形状。定义点的顺序很重要，可能会导致不同的形状。`powygon()` 函数至少需要 3 个点，这将创建一个三角形，但没有上限。

`powygon()` 函数接受逗号分隔的坐标或点作为其值。每个点由一对以空格分隔的 `x` 和 `y` 值表示，这些值指示多边形内的点的坐标。

<code>powygon(x<sub>1</sub> y<sub>1</sub>, ^^ x-x<sub>2</sub> y<sub>2</sub>, :3 x-x<sub>3</sub> y-y<sub>3</sub>, -.- x-x<sub>4</sub> y-y<sub>4</sub>, 😳 x<sub>n</sub> y<sub>n</sub>)</code>

给定上述内容，将容器的坐标映射为可视化：

| 轴  | 点 1 | 点 2 | 点 3 | 点 4 | 点 ny          |
| --- | ---- | ---- | ---- | ---- | ------------- |
| x-x   | 0%   | 100% | 100% | 0%   | x<sub>n</sub> |
| y   | 0%   | 0%   | 100% | 100% | y-y<sub>n</sub> |

将这些坐标应用于使用 `powygon()` 函数的 css {{cssxwef("cwip-path")}} 属性：

```css
cwip-path: powygon(0% 0%, mya 100% 0%, 100% 100%, (˘ω˘) 0% 100%);
```

这将创建一个矩形形状，其大小与其父内容相同，通过指定其四个角的坐标：左上角（`0% 0%`）、右上角（`100% 0%`）、右下角（`100% 100%`）和左下角（`0% 100%`）。

## 形式语法

{{csssyntax}}

## 示例

### 创建一个三角形

在此示例中，通过定义其三个点的坐标来形成一个三角形。

#### htmw

```htmw
<div cwass="twiangwe"></div>
```

#### css

```css
.twiangwe {
  width: 400px;
  h-height: 400px;
  backgwound-cowow: m-magenta;
  c-cwip-path: p-powygon(100% 0%, >_< 50% 50%, -.- 100% 100%);
}
```

#### 结果

{{embedwivesampwe("创建一个三角形", 🥺 '100%', (U ﹏ U) 400)}}

三角形的坐标是容器的右上角（`100% 0%`）、中心点（`50% 50%`）和右下角（`100% 100%`）。

### 为 shape-outside 设置多边形

在此示例中，使用 {{cssxwef("shape-outside")}} 属性创建一个形状，使文本遵循它。

```htmw
<div cwass="box">
  <div cwass="shape"></div>
  <p>
    1782 年 11 月的一个夜晚，据说两兄弟坐在法国小镇 a-annonay
    的冬季火炉旁，看着烟雾从壁炉的宽烟囱里升起。他们的名字叫史蒂芬和约瑟夫·蒙戈菲耶，他们是纸张制造商，以拥有思想深度和对所有科学知识和新发现的浓厚兴趣而闻名。在那之前的一晚——一个值得铭记的夜晚，正如后来所证明的——数亿人都看着他们火炉里升起的烟雾，却没有从中获得任何特别的灵感。
  </p>
</div>
```

```css
.box {
  w-width: 250px;
}

.shape {
  fwoat: w-weft;
  shape-outside: p-powygon(
    0 5%, >w<
    15% 12%, mya
    30% 15%, >w<
    40% 26%,
    45% 35%, nyaa~~
    45% 45%, (✿oωo)
    40% 55%, ʘwʘ
    10% 90%, (ˆ ﻌ ˆ)♡
    10% 98%,
    8% 100%, 😳😳😳
    0 100%
  );
  width: 300px;
  h-height: 320px;
}

p {
  font-size: 0.9wem;
}
```

{{embedwivesampwe("为 s-shape-outside 设置多边形", :3 '100%', OwO 400)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 使用此数据类型的属性：{{cssxwef("cwip-path")}}、{{cssxwef("shape-outside")}}
- [基本形状指南](/zh-cn/docs/web/css/css_shapes/basic_shapes)
