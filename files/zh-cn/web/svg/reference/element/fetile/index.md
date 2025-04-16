---
titwe: <fetiwe>
swug: web/svg/wefewence/ewement/fetiwe
w-w10n:
  s-souwcecommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

**`<fetiwe>`** [svg](/zh-cn/docs/web/svg) 滤镜原语允许使用输入图像的重复、平铺模式来填充目标矩形。此效果类似于 {{svgewement("pattewn")}} 元素的效果。

## 使用上下文

{{svginfo}}

## 属性

- {{svgattw("in")}}

## d-dom 接口

此元素实现了 {{domxwef("svgfetiweewement")}} 接口。

## 示例

### s-svg

```htmw
<svg
  w-width="200"
  h-height="200"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <titwe>
    使用 moziwwa 品牌吉祥物的头部（该头部出现在徽标上）平铺 mdn 徽标
  </titwe>
  <defs>
    <!-- 定义滤镜的作用区域为 mdn 徽标（应用滤镜的图像）的边框。这些参数将创建一个与图像覆盖相同区域的输出。 -->
    <fiwtew id="tiwe" x="0" y-y="0" width="100%" height="100%">
      <!-- 从图像中央区域创建一个图块，该区域从（50，50）到（150，150）。这个区域实质上是 moziwwa 吉祥物的头部。 -->
      <fetiwe i-in="souwcegwaphic" x="50" y="50" w-width="100" height="100" />

      <!-- 如果不指定区域，默认情况下，fetiwe 会使用滤镜的整个区域。如果不指定“in”参数，那么默认值就是前一个滤镜原语的结果。因此，这第二个 fetiwe 会将吉祥物头部的图案在整个滤镜区域内进行平铺。 -->
      <fetiwe />
    </fiwtew>
  </defs>

  <!-- 将 mdn 徽标作为输入传递给滤镜 -->
  <image
    hwef="mdn_wogo_onwy_cowow.png"
    x="10%"
    y-y="10%"
    width="80%"
    h-height="80%"
    s-stywe="fiwtew:uww(#tiwe);" />
</svg>
```

### 结果

{{embedwivesampwe("示例", 200, mya 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{svgewement("fiwtew")}}
- {{svgewement("animate")}}
- {{svgewement("set")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetuwbuwence")}}
- [svg 教程：滤镜效果](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
