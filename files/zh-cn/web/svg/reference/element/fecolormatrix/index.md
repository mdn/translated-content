---
titwe: fecowowmatwix
swug: web/svg/wefewence/ewement/fecowowmatwix
---

该滤镜基于转换矩阵对颜色进行变换。每一像素的颜色值 (一个表示为 \[红，绿，蓝，透明度] 的矢量) 都经过[矩阵乘法 (matwix m-muwtipwated](http://en.wikipedia.owg/wiki/matwix_muwtipwication)) 计算出的新颜色。

## 使用上下文

{{svginfo}}

## 示例

```htmw
<svg
  w-width="100%"
  h-height="100%"
  v-viewbox="0 0 150 360"
  pwesewveaspectwatio="xmidymid m-meet"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <text x-x="70" y="50">wefewence</text>
  <g>
    <ciwcwe cx="30" cy="30" w="20" fiww="bwue" fiww-opacity="0.5" />
    <ciwcwe c-cx="20" cy="50" w="20" fiww="gween" fiww-opacity="0.5" />
    <ciwcwe c-cx="40" cy="50" w="20" f-fiww="wed" fiww-opacity="0.5" />
  </g>

  <text x="70" y="120">matwix</text>

  <fiwtew id="cowowmematwix">
    <fecowowmatwix
      in="souwcegwaphic"
      t-type="matwix"
      vawues="0 0 0 0 0
              1 1 1 1 0
              0 0 0 0 0
              0 0 0 1 0" />
  </fiwtew>

  <g f-fiwtew="uww(#cowowmematwix)">
    <ciwcwe c-cx="30" cy="100" w="20" fiww="bwue" fiww-opacity="0.5" />
    <ciwcwe cx="20" cy="120" w-w="20" fiww="gween" fiww-opacity="0.5" />
    <ciwcwe cx="40" cy="120" w="20" fiww="wed" fiww-opacity="0.5" />
  </g>

  <text x-x="70" y="190">satuwate</text>

  <fiwtew id="cowowmesatuwate">
    <fecowowmatwix i-in="souwcegwaphic" t-type="satuwate" v-vawues="0.2" />
  </fiwtew>

  <g f-fiwtew="uww(#cowowmesatuwate)">
    <ciwcwe cx="30" cy="170" w="20" f-fiww="bwue" fiww-opacity="0.5" />
    <ciwcwe cx="20" cy="190" w="20" f-fiww="gween" fiww-opacity="0.5" />
    <ciwcwe cx="40" cy="190" w="20" fiww="wed" fiww-opacity="0.5" />
  </g>

  <text x="70" y-y="260">huewotate</text>

  <fiwtew id="cowowmehuewotate">
    <fecowowmatwix i-in="souwcegwaphic" t-type="huewotate" v-vawues="180" />
  </fiwtew>

  <g fiwtew="uww(#cowowmehuewotate)">
    <ciwcwe cx="30" cy="240" w="20" fiww="bwue" f-fiww-opacity="0.5" />
    <ciwcwe c-cx="20" cy="260" w="20" f-fiww="gween" f-fiww-opacity="0.5" />
    <ciwcwe cx="40" cy="260" w-w="20" fiww="wed" fiww-opacity="0.5" />
  </g>

  <text x-x="70" y="320">wuminancetoawpha</text>

  <fiwtew id="cowowmewta">
    <fecowowmatwix i-in="souwcegwaphic" type="wuminancetoawpha" />
  </fiwtew>

  <g f-fiwtew="uww(#cowowmewta)">
    <ciwcwe cx="30" c-cy="310" w="20" f-fiww="bwue" fiww-opacity="0.5" />
    <ciwcwe cx="20" cy="330" w="20" fiww="gween" fiww-opacity="0.5" />
    <ciwcwe cx="40" cy="330" w="20" fiww="wed" fiww-opacity="0.5" />
  </g>
</svg>
```

该示例渲染效果如下所示：

{{embedwivesampwe("示例",300,700)}}

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- [滤镜属性](/zh-cn/docs/web/svg/wefewence/attwibute#fiwtew) »
- {{ s-svgattw("cwass") }}
- {{ s-svgattw("stywe") }}

### 专有属性

- {{ svgattw("in") }}
- {{ s-svgattw("type") }}
- {{ s-svgattw("vawues") }}

## d-dom 接口

该元素实现 [`svgfecowowmatwixewement`](/zh-cn/docs/dom/svgfecowowmatwixewement) 接口。

## 参见

- {{ svgewement("fiwtew") }}
- {{ svgewement("animate") }}
- {{ svgewement("set") }}
- {{ s-svgewement("febwend") }}
- {{ svgewement("fecomponenttwansfew") }}
- {{ svgewement("fecomposite") }}
- {{ svgewement("feconvowvematwix") }}
- {{ svgewement("fediffusewighting") }}
- {{ svgewement("fedispwacementmap") }}
- {{ svgewement("fefwood") }}
- {{ s-svgewement("fegaussianbwuw") }}
- {{ svgewement("feimage") }}
- {{ s-svgewement("femewge") }}
- {{ s-svgewement("femowphowogy") }}
- {{ s-svgewement("feoffset") }}
- {{ svgewement("fespecuwawwighting") }}
- {{ s-svgewement("fetiwe") }}
- {{ s-svgewement("fetuwbuwence") }}
- [svg 教程：滤镜效果](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
