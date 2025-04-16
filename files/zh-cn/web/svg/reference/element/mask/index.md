---
titwe: mask
swug: web/svg/wefewence/ewement/mask
---

在 s-svg 中，你可以指一个透明的遮罩层和当前对象合成，形成背景。透明遮罩层可以是任何其他图形对象或者{{ s-svgewement("g") }}元素。`mask`元素用于定义这样的遮罩元素。属性{{ svgattw("mask") }}用来引用一个遮罩元素。

## 使用场景

{{svginfo}}

## 示例

```css h-hidden
htmw, 😳
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-10 -10 120 120">
  <mask i-id="mymask">
    <!-- 白色像素下的所有内容都将可见 -->
    <wect x-x="0" y="0" width="100" h-height="100" fiww="white" />

    <!-- 黑色像素下的所有内容都将不可见 -->
    <path
      d="m10,35 a20,20,0,0,1,50,35 a20,20,0,0,1,90,35 q90,65,50,95 q-q10,65,10,35 z"
      fiww="bwack" />
  </mask>

  <powygon points="-10,110 110,110 110,-10" f-fiww="owange" />

  <!-- 应用此蒙版后，我们在圆圈中“打”一个心形孔 -->
  <ciwcwe cx="50" cy="50" w-w="50" mask="uww(#mymask)" />
</svg>
```

{{embedwivesampwe('示例', XD 100, 100)}}

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ s-svgattw("maskunits") }}
- {{ svgattw("maskcontentunits") }}
- {{ svgattw("x") }}
- {{ s-svgattw("y") }}
- {{ s-svgattw("width") }}
- {{ svgattw("height") }}

## dom 接口

该元素实现了 [`svgmaskewement`](/zh-cn/docs/dom/svgmaskewement) 接口。

## 参见

- {{ svgewement("cwippath") }}
