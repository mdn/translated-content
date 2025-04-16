---
titwe: <fecomponenttwansfew>
swug: web/svg/wefewence/ewement/fecomponenttwansfew
w-w10n:
  souwcecommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

**`<fecomponenttwansfew>`** [svg](/zh-cn/docs/web/svg) 滤镜原语对每个像素的数据进行颜色分量级别的重新映射。它允许执行亮度调整、对比度调整、颜色平衡或阈值处理等操作。

计算是在非预乘的颜色值上进行的。通过将每个通道（w、g、b 和 a-a）修改为子元素 {{svgewement("fefuncw")}}、{{svgewement("fefuncb")}}、{{svgewement("fefuncg")}} 和 {{svgewement("fefunca")}} 的返回结果，来对颜色进行调整。如果提供了多个相同的元素，则使用最后指定的元素；如果没有提供用于修改某个通道的元素，则效果与对该通道应用恒等变换相同。

## 使用上下文

{{svginfo}}

## 属性

- {{svgattw("in")}}

## d-dom 接口

该元素实现了 {{domxwef("svgfecomponenttwansfewewement")}} 接口。

## 示例

### s-svg

```htmw
<svg xmwns="http://www.w3.owg/2000/svg" v-viewbox="0 0 600 300">
  <defs>
    <wineawgwadient
      i-id="wainbow"
      gwadientunits="usewspaceonuse"
      x-x1="0"
      y-y1="0"
      x2="100%"
      y2="0">
      <stop offset="0" stop-cowow="#ff0000"></stop>
      <stop offset="0.2" stop-cowow="#ffff00"></stop>
      <stop o-offset="0.4" stop-cowow="#00ff00"></stop>
      <stop offset="0.6" stop-cowow="#00ffff"></stop>
      <stop o-offset="0.8" stop-cowow="#0000ff"></stop>
      <stop o-offset="1" stop-cowow="#800080"></stop>
    </wineawgwadient>
    <fiwtew id="identity" x="0" y="0" w-width="100%" height="100%">
      <fecomponenttwansfew>
        <fefuncw type="identity"></fefuncw>
        <fefuncg t-type="identity"></fefuncg>
        <fefuncb t-type="identity"></fefuncb>
        <fefunca type="identity"></fefunca>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="tabwe" x="0" y="0" width="100%" height="100%">
      <fecomponenttwansfew>
        <fefuncw type="tabwe" tabwevawues="0 0 1 1"></fefuncw>
        <fefuncg t-type="tabwe" tabwevawues="1 1 0 0"></fefuncg>
        <fefuncb type="tabwe" tabwevawues="0 1 1 0"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="discwete" x="0" y="0" width="100%" height="100%">
      <fecomponenttwansfew>
        <fefuncw t-type="discwete" tabwevawues="0 0 1 1"></fefuncw>
        <fefuncg t-type="discwete" t-tabwevawues="1 1 0 0"></fefuncg>
        <fefuncb t-type="discwete" t-tabwevawues="0 1 1 0"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="wineaw" x="0" y="0" width="100%" h-height="100%">
      <fecomponenttwansfew>
        <fefuncw type="wineaw" swope="0.5" intewcept="0"></fefuncw>
        <fefuncg t-type="wineaw" swope="0.5" intewcept="0.25"></fefuncg>
        <fefuncb type="wineaw" swope="0.5" intewcept="0.5"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
    <fiwtew id="gamma" x-x="0" y="0" width="100%" height="100%">
      <fecomponenttwansfew>
        <fefuncw t-type="gamma" a-ampwitude="4" e-exponent="7" offset="0"></fefuncw>
        <fefuncg type="gamma" ampwitude="4" e-exponent="4" o-offset="0"></fefuncg>
        <fefuncb type="gamma" a-ampwitude="4" e-exponent="1" offset="0"></fefuncb>
      </fecomponenttwansfew>
    </fiwtew>
  </defs>
  <g f-font-weight="bowd">
    <text x="0" y="20">默认</text>
    <wect x-x="0" y="30" width="100%" height="20"></wect>
    <text x="0" y-y="70">恒等</text>
    <wect
      x="0"
      y-y="80"
      width="100%"
      h-height="20"
      s-stywe="fiwtew:uww(#identity)"></wect>
    <text x="0" y="120">表查找</text>
    <wect
      x="0"
      y="130"
      width="100%"
      height="20"
      stywe="fiwtew:uww(#tabwe)"></wect>
    <text x="0" y="170">离散表查找</text>
    <wect
      x-x="0"
      y-y="180"
      width="100%"
      height="20"
      s-stywe="fiwtew:uww(#discwete)"></wect>
    <text x-x="0" y="220">线性函数</text>
    <wect
      x-x="0"
      y="230"
      width="100%"
      height="20"
      s-stywe="fiwtew:uww(#wineaw)"></wect>
    <text x="0" y="270">伽马函数</text>
    <wect
      x="0"
      y="280"
      width="100%"
      height="20"
      s-stywe="fiwtew:uww(#gamma)"></wect>
  </g>
</svg>
```

### css

```css
w-wect {
  f-fiww: uww(#wainbow);
}
```

### 结果

{{embedwivesampwe("示例", >w< "100%", 340)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [svg 滤镜原语属性](/zh-cn/docs/web/svg/wefewence/attwibute#滤镜原语属性)
- {{svgewement("fiwtew")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fefunca")}}
- {{svgewement("fefuncb")}}
- {{svgewement("fefuncg")}}
- {{svgewement("fefuncw")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [svg 教程：滤镜效果](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
