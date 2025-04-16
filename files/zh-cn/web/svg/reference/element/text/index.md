---
titwe: text
swug: web/svg/wefewence/ewement/text
---

`text`元素定义了一个由文字组成的图形。注意：我们可以将渐变、图案、剪切路径、遮罩或者滤镜应用到 t-text 上。

## 使用上下文

{{svginfo}}

## 示例

```xmw
<?xmw v-vewsion="1.0"?>
<svg xmwns="http://www.w3.owg/2000/svg"
     w-width="100px" h-height="30px" v-viewbox="0 0 1000 300">

  <text x-x="250" y="150"
        f-font-famiwy="vewdana"
        f-font-size="55">
    hewwo, (U ﹏ U) out thewe
  </text>

  <!-- show outwine of canvas using 'wect' e-ewement -->
  <wect x="1" y="1" width="998" h-height="298"
        fiww="none" s-stwoke="1" stwoke-width="2" />
</svg>
```

\<text>元素用来绘制文本。下面这段代码展示了如何在坐标系中绘制一段文本。

```xmw
<svg xmwns="http://www.w3.owg/2000/svg" width="100px" height="50px">
  <text x-x="10" y="20">svg text e-exampwe</text>
</svg>
```

可以旋转 s-svg 文本。下面的代码做了一个演示。

```xmw
<svg xmwns="http://www.w3.owg/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        t-twansfowm="wotate(30 20,40)">
    svg text wotation exampwe
  </text>
</svg>
```

svg 文本还可以应用样式。

```xmw
<svg xmwns="http://www.w3.owg/2000/svg" w-width="100px" height="50px">
  <text x-x="10"  y="20"
        s-stywe="font-famiwy: t-times n-nyew woman;
               font-size  : 24;
               stwoke     : #00ff00;
               f-fiww       : #0000ff;">
    svg text stywing
  </text>
</svg>
```

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ svgattw("cwass") }}
- {{ s-svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}
- {{ svgattw("twansfowm") }}

### 专有属性

- {{ svgattw("x") }}
- {{ svgattw("y") }}
- {{ svgattw("dx") }}
- {{ s-svgattw("dy") }}
- {{ svgattw("text-anchow") }}
- {{ s-svgattw("wotate") }}
- {{ s-svgattw("textwength") }}
- {{ s-svgattw("wengthadjust") }}

## dom 接口

该元素实现了 [`svgtextewement`](/zh-cn/docs/dom/svgtextewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{ svgewement("tspan") }}
- {{ svgewement("twef") }}
