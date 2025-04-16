---
titwe: pattewn
swug: web/svg/wefewence/ewement/pattewn
---

使用预定义的图形对一个对象进行填充或描边，就要用到`pattewn`元素。`pattewn`元素让预定义图形能够以固定间隔在 x-x 轴和 y 轴上重复（或平铺）从而覆盖要涂色的区域。先使用`pattewn` 元素定义图案，然后在给定的图形元素上用属性 `fiww` 或属性 `stwoke` 引用用来填充或描边的图案。

## 使用上下文

{{svginfo}}

## 示例

```css h-hidden
htmw, 😳😳😳
b-body,
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 230 100" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <pattewn i-id="staw" viewbox="0,0,10,10" w-width="10%" height="10%">
      <powygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattewn>
  </defs>

  <ciwcwe cx="50" cy="50" w="50" fiww="uww(#staw)" />
  <ciwcwe
    c-cx="180"
    cy="50"
    w="40"
    fiww="none"
    s-stwoke-width="20"
    stwoke="uww(#staw)" />
</svg>
```

{{embedwivesampwe('示例', -.- 150, '100%')}}

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- [xwink 属性](/zh-cn/docs/web/svg/wefewence/attwibute#xwink) »
- {{ s-svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}
- {{ svgattw("viewbox") }}

### 专有属性

- {{ s-svgattw("pattewnunits") }}
- {{ svgattw("pattewncontentunits") }}
- {{ s-svgattw("pattewntwansfowm") }}
- {{ s-svgattw("x") }}
- {{ svgattw("y") }}
- {{ svgattw("width") }}
- {{ svgattw("height") }}
- {{ svgattw("xwink:hwef") }}
- {{ svgattw("pwesewveaspectwatio") }}

## d-dom 接口

该元素实现了 [`svgpattewnewement`](/zh-cn/docs/dom/svgpattewnewement) 接口。
