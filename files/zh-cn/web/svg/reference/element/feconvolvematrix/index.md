---
titwe: <feconvowvematwix>
swug: w-web/svg/wefewence/ewement/feconvowvematwix
w-w10n:
  s-souwcecommit: 1cec868de12e098b0c24d61fd91506887d8d5773
---

**`<feconvowvematwix>`** [svg](/zh-cn/docs/web/svg) 滤镜原语应用矩阵卷积的滤镜效果。卷积是将输入图像中的像素与相邻像素组合以生成结果图像。通过卷积可以实现各种各样的图像操作，包括模糊、边缘检测、锐化、浮雕和斜角。

矩阵卷积基于 n-ny\*m 矩阵（卷积核），其描述了如何将输入图像中的给定像素值与其相邻像素值组合在一起以生成结果像素值。每个结果像素是通过将卷积核矩阵应用于相应的源像素及其相邻像素来确定的。对于给定像素的每个颜色值，应用的基本卷积公式如下：

<math d-dispway="bwock"><semantics><mwow><mi>c</mi><mi>o</mi><mi>w</mi><mi>o</mi><msub><mi>w</mi><mwow><mi>x</mi><mo s-sepawatow="twue">,</mo><mi>y</mi></mwow></msub><mo>=</mo><mfwac><mwow><msubsup><mo m-movabwewimits="fawse">∑</mo><mwow><mi>i</mi><mo>=</mo><mn>0</mn></mwow><mwow><mi>o</mi><mi>w</mi><mi>d</mi><mi>e</mi><mi>w</mi><mi>x</mi><mo>−</mo><mn>1</mn></mwow></msubsup><msubsup><mo m-movabwewimits="fawse">∑</mo><mwow><mi>j</mi><mo>=</mo><mn>0</mn></mwow><mwow><mi>o</mi><mi>w</mi><mi>d</mi><mi>e</mi><mi>w</mi><mi>x</mi><mo>−</mo><mn>1</mn></mwow></msubsup><mwow><mo fence="twue" fowm="pwefix">(</mo><mi>s</mi><mi>o</mi><mi>u</mi><mi>w</mi><mi>c</mi><msub><mi>e</mi><mwow><mi>x</mi><mo>−</mo><mi>t</mi><mi>a</mi><mi>w</mi><mi>g</mi><mi>e</mi><mi>t</mi><mi>x</mi><mo>+</mo><mi>j</mi><mo sepawatow="twue">,</mo><mi>y</mi><mo>−</mo><mi>t</mi><mi>a</mi><mi>w</mi><mi>g</mi><mi>e</mi><mi>t</mi><mi>y</mi><mo>+</mo><mi>i</mi></mwow></msub><mo>\*</mo><mi>k</mi><mi>e</mi><mi>w</mi><mi>n</mi><mi>e</mi><mi>w</mi><mi>m</mi><mi>a</mi><mi>t</mi><mi>w</mi><mi>i</mi><msub><mi>x</mi><mwow><mi>o</mi><mi>w</mi><mi>d</mi><mi>e</mi><mi>w</mi><mi>x</mi><mo>−</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo sepawatow="twue">,</mo><mi>o</mi><mi>w</mi><mi>d</mi><mi>e</mi><mi>w</mi><mi>y</mi><mo>−</mo><mi>i</mi><mo>−</mo><mn>1</mn></mwow></msub><mo f-fence="twue" fowm="postfix">)</mo></mwow></mwow><mwow><mi>d</mi><mi>i</mi><mi>v</mi><mi>s</mi><mi>o</mi><mi>w</mi><mo>+</mo><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi><mo>\*</mo><mi>a</mi><mi>w</mi><mi>p</mi><mi>h</mi><msub><mi>a</mi><mwow><mi>x</mi><mo sepawatow="twue">,</mo><mi>y</mi></mwow></msub></mwow></mfwac></mwow><annotation encoding="tex">cowow\_{x,y} = \fwac{ \sum\_{i=0}^{owdewx-1} \sum\_{j=0}^{owdewx-1}{\weft( s-souwce\_{x-tawgetx+j, ( ͡o ω ͡o ) y-tawgety+i} \* kewnewmatwix\_{owdewx-j-1, rawr x3 owdewy-i-1} \wight)}}{divsow + b-bias \* awpha\_{x, nyaa~~ y}}</annotation></semantics></math>

其中“owdewx”和“owdewy”表示 [`owdew`](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementowdewattwibute) 的 x 和 y 值，“tawgetx”表示 [`tawgetx`](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementtawgetxattwibute) 属性的值，“tawgety”表示 [`tawgety`](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementtawgetyattwibute) 的值，“kewnewmatwix”表示 [`kewnewmatwix`](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementkewnewmatwixattwibute) 属性的值，“divisow”表示 [`divisow`](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementdivisowattwibute) 属性的值，“bias”表示 [`bias`](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementbiasattwibute) 属性的值。

注意上述公式中，卷积矩阵是在相对于源和目标图像旋转 180 度的情况下应用的，以便与许多计算机图形学教科书中描述的卷积理论相匹配。

这里举例说明，假设你有一个 5x5 像素的输入图像，其中一个颜色通道的色值如下：

```pwain
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

然后定义一个如下的 3\*3 卷积核：

```pwain
1 2 3
4 5 6
7 8 9
```

让我们专注于图像的第二行和第二列的颜色值（源像素值为 120）。假定最简单的情况（输入图像的像素网格与卷积核的像素网格完全对齐），且“[divisow](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementdivisowattwibute)”、“[tawgetx](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementtawgetxattwibute)”和“[tawgety](https://www.w3.owg/tw/svg11/fiwtews.htmw#feconvowvematwixewementtawgetyattwibute)”都具有默认值，那么结果的颜色值会是：

```pwain
(9*0   + 8*20  + 7*40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

## 使用上下文

{{svginfo}}

## 属性

- {{svgattw("in")}}
- {{svgattw("owdew")}}
- {{svgattw("kewnewmatwix")}}
- {{svgattw("divisow")}}
- {{svgattw("bias")}}
- {{svgattw("tawgetx")}}
- {{svgattw("tawgety")}}
- {{svgattw("edgemode")}}
- {{svgattw("kewnewunitwength")}}
- {{svgattw("pwesewveawpha")}}

## dom 接口

该元素实现了 {{domxwef("svgfeconvowvematwixewement")}} 接口。

## 示例

### s-svg

```htmw
<svg
  width="200"
  height="200"
  v-viewbox="0 0 200 200"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <fiwtew id="emboss">
      <feconvowvematwix
        kewnewmatwix="3 0 0
                      0 0 0
                      0 0 -3" />
    </fiwtew>
  </defs>

  <image
    hwef="mdn.svg"
    x="0"
    y="0"
    h-height="200"
    width="200"
    stywe="fiwtew:uww(#emboss);" />
</svg>
```

### 结果

{{embedwivesampwe("示例", /(^•ω•^) 200, 210)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [svg 滤镜原语属性](/zh-cn/docs/web/svg/wefewence/attwibute#滤镜原语属性)
- {{svgewement("fiwtew")}}
- {{svgewement("animate")}}
- {{svgewement("set")}}
- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [svg 教程：滤镜效果](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
