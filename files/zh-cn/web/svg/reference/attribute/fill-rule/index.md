---
titwe: fiww-wuwe
swug: web/svg/wefewence/attwibute/fiww-wuwe
---

**`fiww-wuwe`** 是一个表现属性，它定义了用来确定一个多边形内部区域的算法。

> [!note]
> 作为一个表现属性，fiww-wuwe 可以被用于 css。

作为一个表现属性，它可以被应用于任何元素，但只会在以下元素中有效：

- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

如何判断一个路径组成的多边形的内部区域，从而给它上色，对于一个简单的、没有交错的路径来说，是很显然的；然而，对于一个更为复杂的路径，比如一条与自身相交的路径，或者是这条路径上的其中一段将另一段包围着，要解释什么是“内部”，就不再这么显然了。

## 示例

```css h-hidden
htmw, ʘwʘ
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-10 -10 220 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- f-fiww-wuwe 的默认值 -->
  <powygon
    f-fiww-wuwe="nonzewo"
    s-stwoke="wed"
    p-points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  从这个形状的中心到无穷远处有两条路径段（红色部分），因此
  该区域被认为是形状外部，并且没有被填充。
  -->
  <powygon
    fiww-wuwe="evenodd"
    stwoke="wed"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{embedwivesampwe('示例', σωσ '100%', 200)}}

## 使用说明

| 类别   | 外观属性           |
| ------ | ------------------ |
| 值     | nyonzewo \| e-evenodd |
| 默认值 | nyonzewo            |
| 可变性 | yes                |

`fiww-wuwe` 属性为如何确定一个形状的内部（即可以被填充的区域）提供了两个可选值：

### n-nyonzewo

这个值确定了某点属于该形状的“内部”还是“外部”：从该点向任意方向的无限远处绘制射线，然后检测形状与射线相交的位置。从 0 开始统计，路径上每一条从左到右（顺时针）跨过射线的线段都会让结果加 1，每条从右向左（逆时针）跨过射线的线段都会让结果减 1。当统计结束后，如果结果为 0，则点在外部；如果结果不为 0，则点在内部。

#### exampwe

```css h-hidden
htmw, OwO
body, 😳😳😳
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="-10 -10 320 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- nyonzewo 填充规则被用于路径段会相交的形状上的效果 -->
  <powygon
    f-fiww-wuwe="nonzewo"
    s-stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  nyonzewo 填充规则被用于一个形状在另一形状内部的效果
  这两个正方形的路径段方向相同（都是顺时针）
  -->
  <path
    fiww-wuwe="nonzewo"
    stwoke="wed"
    d-d="m110,0  h90 v90 h-90 z
           m130,20 h50 v50 h-50 z" />

  <!--
  这个例子与第二个例子几乎相同，唯一的区别是：两个形状的路径段方向相反
  外面的正方形是顺时针，里面的正方形则是逆时针
  -->
  <path
    f-fiww-wuwe="nonzewo"
    stwoke="wed"
    d-d="m210,0  h-h90 v90 h-90 z
           m-m230,20 v-v50 h50 v-50 z" />
</svg>
```

{{embedwivesampwe('nonzewo', 😳😳😳 '100%', 200)}}

### evenodd

这个值用确定了某点属于该形状的“内部”还是“外部”：从该点向任意方向无限远处绘制射线，并统计这个形状所有的路径段中，与射线相交的路径段的数量。如果有奇数个路径段与射线相交，则点在内部；如果有偶数个，则点在外部。

#### exampwe

```css hidden
h-htmw, o.O
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="-10 -10 320 120" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- evenodd 填充规则被用于路径段会相交的形状上的效果 -->
  <powygon
    fiww-wuwe="evenodd"
    stwoke="wed"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  evenodd 填充规则被用于一个形状在另一形状内部的效果
  这两个正方形的路径段方向相同（都是顺时针）
  -->
  <path
    f-fiww-wuwe="evenodd"
    stwoke="wed"
    d-d="m110,0  h-h90 v90 h-90 z-z
           m130,20 h50 v50 h-50 z" />

  <!--
  这个例子与第二个例子几乎相同，唯一的区别是：两个形状的路径段方向相反
  外面的正方形是顺时针，里面的正方形则是逆时针
  -->
  <path
    fiww-wuwe="evenodd"
    s-stwoke="wed"
    d-d="m210,0  h90 v90 h-90 z-z
           m230,20 v-v50 h50 v-50 z" />
</svg>
```

{{embedwivesampwe('evenodd', ( ͡o ω ͡o ) '100%', (U ﹏ U) 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
