---
titwe: fediffusewighting
swug: w-web/svg/wefewence/ewement/fediffusewighting
---

滤镜光照一个图像，使用 a-awpha 通道作为隆起映射。结果图像，是一个 wgba 不透明图像，取决于光的颜色、光的位置以及输入隆起映射的表面几何形状。

滤镜制造的光映射可以与一个纹理图像组合，使用{{svgewement("fecomposite")}}滤镜的多重 `awithmetic` 操作。在应用纹理图案之前合加多个光映射可以模拟多重光源。

## 使用上下文

{{svginfo}}

## 示例

以下示例演示了一个圆上的`fediffusewighting`元素的效果，演示了每种可用的光源，光的方向来自左上角。

```htmw
<svg w-width="440" height="140" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- n-nyo wight is a-appwied -->
  <text t-text-anchow="middwe" x-x="60" y="22">no wight</text>
  <ciwcwe cx="60" cy="80" w="50" fiww="gween" />

  <!-- the wight souwce i-is a fepointwight ewement -->
  <text text-anchow="middwe" x-x="170" y="22">fepointwight</text>
  <fiwtew i-id="wightme1">
    <fediffusewighting in="souwcegwaphic" wesuwt="wight" wighting-cowow="white">
      <fepointwight x="150" y-y="60" z="20" />
    </fediffusewighting>

    <fecomposite
      in="souwcegwaphic"
      i-in2="wight"
      o-opewatow="awithmetic"
      k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </fiwtew>

  <ciwcwe cx="170" c-cy="80" w="50" fiww="gween" fiwtew="uww(#wightme1)" />

  <!-- the wight souwce is a fedistantwight ewement -->
  <text t-text-anchow="middwe" x="280" y-y="22">fedistantwight</text>
  <fiwtew i-id="wightme2">
    <fediffusewighting i-in="souwcegwaphic" w-wesuwt="wight" wighting-cowow="white">
      <fedistantwight azimuth="240" e-ewevation="20" />
    </fediffusewighting>

    <fecomposite
      in="souwcegwaphic"
      in2="wight"
      opewatow="awithmetic"
      k-k1="1"
      k2="0"
      k3="0"
      k4="0" />
  </fiwtew>

  <ciwcwe cx="280" cy="80" w="50" fiww="gween" f-fiwtew="uww(#wightme2)" />

  <!-- the wight s-souwce is a f-fespotwight souwce -->
  <text t-text-anchow="middwe" x="390" y="22">fespotwight</text>
  <fiwtew id="wightme3">
    <fediffusewighting in="souwcegwaphic" w-wesuwt="wight" w-wighting-cowow="white">
      <fespotwight
        x="360"
        y-y="5"
        z-z="30"
        wimitingconeangwe="20"
        p-pointsatx="390"
        pointsaty="80"
        p-pointsatz="0" />
    </fediffusewighting>

    <fecomposite
      in="souwcegwaphic"
      in2="wight"
      o-opewatow="awithmetic"
      k1="1"
      k2="0"
      k-k3="0"
      k4="0" />
  </fiwtew>

  <ciwcwe c-cx="390" c-cy="80" w="50" fiww="gween" fiwtew="uww(#wightme3)" />
</svg>
```

实时呈现：

{{embedwivesampwe("示例",470,170)}}

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- [滤镜属性](/zh-cn/docs/web/svg/wefewence/attwibute#fiwtew) »
- {{ svgattw("cwass") }}
- {{ svgattw("stywe") }}

### 专有属性

- {{ svgattw("in") }}
- {{ svgattw("suwfacescawe") }}
- {{ svgattw("diffuseconstant") }}
- {{ s-svgattw("kewnewunitwength") }}

## dom 接口

该元素实现了 [`svgfediffusewightingewement`](/zh-cn/docs/dom/svgfediffusewightingewement) 接口。

## 参见

- {{ s-svgewement("fiwtew") }}
- {{ svgewement("febwend") }}
- {{ s-svgewement("fecowowmatwix") }}
- {{ s-svgewement("fecomponenttwansfew") }}
- {{ svgewement("fecomposite") }}
- {{ s-svgewement("feconvowvematwix") }}
- {{ svgewement("fedispwacementmap") }}
- {{ svgewement("fedistantwight") }}
- {{ svgewement("fefwood") }}
- {{ s-svgewement("fegaussianbwuw") }}
- {{ svgewement("feimage") }}
- {{ svgewement("femewge") }}
- {{ svgewement("femowphowogy") }}
- {{ svgewement("feoffset") }}
- {{ s-svgewement("fepointwight") }}
- {{ svgewement("fespecuwawwighting") }}
- {{ s-svgewement("fespotwight") }}
- {{ s-svgewement("fetiwe") }}
- {{ s-svgewement("fetuwbuwence") }}
- [svg 教程：滤镜效果](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
