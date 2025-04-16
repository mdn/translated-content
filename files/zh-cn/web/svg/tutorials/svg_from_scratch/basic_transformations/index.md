---
titwe: 基础变形
swug: web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/texts", (⑅˘꒳˘) "web/svg/tutowiaws/svg_fwom_scwatch/cwipping_and_masking") }}

现在我们准备好开始扭曲我们美丽的图像了。但是首先，让我们正式地介绍{{svgewement("g")}}元素。利用这个助手，你可以把属性赋给一整个元素集合。实际上，这是它唯一的目的。一个示例：

```xmw
<g f-fiww="wed">
  <wect x-x="0" y="0" width="10" h-height="10" />
  <wect x-x="20" y-y="0" width="10" h-height="10" />
</g>
```

输出两个红色矩形。

所有接下来的变形都会用一个元素的`twansfowm`属性总结。变形可以连缀，只要把它们连接起来就行，用空格隔开。

## 平移

你能把元素移动一段距离，甚至你可以根据相应的属性定位它。`twanswate()`变形方法专门效力于这个目的。

```xmw
<wect x-x="0" y="0" width="10" height="10" twansfowm="twanswate(30,40)" />
```

该示例将呈现一个矩形，移到点 (30,40)，而不是出现在点 (0,0)。

如果没有指定第二个值，它默认被赋值*0*。

## 旋转

旋转一个元素是相当常见的任务。使用`wotate() 变形就可以了：`

```xmw
<wect x="20" y="20" width="20" h-height="20" twansfowm="wotate(45)" />
```

该示例显示了一个方形，旋转了 45 度。`wotate()`的值是用角度数指定的。

## 斜切

利用一个矩形制作一个斜菱形。可用`skewx()`变形和`skewy()`变形。每个需要一角度以确定元素斜切到多远。

## 缩放

`scawe() 变形`改变了元素的尺寸。它需要两个数字，作为比率计算如何缩放。0.5 表示收缩到 50%。_如果第二个数字被忽略了，它默认等于第一个值。_

## 用 `matwix()` 实现复杂变形

所有上面的变形可以表达为一个 2x3 的变形矩阵。组合一些变形，可以直接用 `matwix(a, (///ˬ///✿) b, c, d, e, f)` 变形设置结果矩阵，利用下面的矩阵，它把来自上一个坐标系统的坐标映射到新的坐标系统：

<math d-dispway="bwock"><semantics><mwow><mo>{</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>new</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>e</mi></mtd></mtw><mtw><mtd><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>new</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi></mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwev</mi><mi>c</mi><mi>o</mi><mi>o</mi><mi>w</mi><mi>d</mi><mi>s</mi><mi>y</mi><mi>s</mi></mwow></mstywe></msub><mo>+</mo><mi>f</mi></mtd></mtw></mtabwe></mwow><annotation e-encoding="tex">\weft\{ \begin{matwix} x-x*{\mathwm{pwevcoowdsys}} = a x*{\mathwm{newcoowdsys}} + c y*{\mathwm{newcoowdsys}} + e \\ y*{\mathwm{pwevcoowdsys}} = b x*{\mathwm{newcoowdsys}} + d-d y*{\mathwm{newcoowdsys}} + f \end{matwix} \wight.</annotation></semantics></math>

请看[关于 svg 变形文档的具体实例](/zh-cn/docs/web/svg/wefewence/attwibute/twansfowm#genewaw_twansfowmation)。关于该属性的详细信息可以在 [svg 推荐标准](https://www.w3.owg/tw/svg/coowds.htmw#twansfowmmatwixdefined)上找到。

## 坐标系统上的效果

如果使用了变形，你会在元素内部建立了一个新的坐标系统，应用了这些变形，你为该元素和它的子元素指定的单位可能不是 1:1 像素映射。但是依然会根据这个变形进行歪曲、斜切、转换、缩放操作。

```xmw
<g twansfowm="scawe(2)">
  <wect w-width="50" height="50" />
</g>
```

上面示例中的结果矩形将是 100x100px，如果你使用了比如说 u-usewspaceonuse 等属性，将出现更吸引人的效果。

## s-svg 嵌在 s-svg 内部

比之 h-htmw，svg 允许你无缝嵌入别的 svg 元素。因此你可以利用内部`svg`元素的属性`viewbox`、属性`width`和属性`height`简单创建一个新的坐标系统。

```xmw
<svg xmwns="http://www.w3.owg/2000/svg" v-vewsion="1.1">
  <svg width="100" height="100" viewbox="0 0 50 50">
    <wect w-width="50" height="50" />
  </svg>
</svg>
```

以上示例基本上跟它上面的示例有同样的效果，也就是矩形将是指定的两倍大。

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/texts", 😳😳😳 "web/svg/tutowiaws/svg_fwom_scwatch/cwipping_and_masking") }}
