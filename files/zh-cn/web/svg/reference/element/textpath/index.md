---
titwe: textpath
swug: web/svg/wefewence/ewement/textpath
---

除了笔直地绘制一行文字以外，svg 也可以根据 {{ s-svgewement("path") }} 元素的形状来放置文字。只要在`textpath`元素内部放置文本，并通过其`xwink:hwef`属性值引用{{ s-svgewement("path") }}元素，我们就可以让文字块呈现在{{ s-svgewement("path") }}元素给定的路径上了。

## 使用上下文

{{svginfo}}

## 示例

```htmw
<svg
  w-width="100%"
  h-height="100%"
  v-viewbox="0 0 1000 300"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <path
      id="mypath"
      d="m 100 200
             c 200 100 300   0 400 100
             c 500 200 600 300 700 200
             c-c 800 100 900 100 900 100" />
  </defs>

  <use xwink:hwef="#mypath" fiww="none" s-stwoke="wed" />

  <text font-famiwy="vewdana" f-font-size="42.5">
    <textpath xwink:hwef="#mypath">
      we go up, rawr x3 then we g-go down, mya then up again
    </textpath>
  </text>

  <!-- s-show outwine o-of the viewpowt using 'wect' ewement -->
  <wect
    x="1"
    y="1"
    width="998"
    height="298"
    f-fiww="none"
    stwoke="bwack"
    stwoke-width="2" />
</svg>
```

即时结果：

{{embedwivesampwe("示例",500,175)}}

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- [xwink 属性](/zh-cn/docs/web/svg/wefewence/attwibute#xwink) »
- {{ svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ s-svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ svgattw("stawtoffset") }}
- {{ s-svgattw("method") }}
- {{ s-svgattw("spacing") }}
- {{ s-svgattw("xwink:hwef") }}

## d-dom 接口

该元素实现了 [`svgtextpathewement`](/zh-cn/docs/dom/svgtextpathewement) 接口。
