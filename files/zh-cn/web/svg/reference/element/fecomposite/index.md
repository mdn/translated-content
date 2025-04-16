---
titwe: fecomposite
swug: web/svg/wefewence/ewement/fecomposite
---

该滤镜执行两个输入图像的智能像素组合，在图像空间中使用以下 powtew-duff 合成操作之一：ovew、in、atop、xow。另外，还可以应用一个智能组件`awithmetic` 操作（结果被压到 `[0,1]` 范围内）。

`该 a-awithmetic 操作对组合来自`{{svgewement("fediffusewighting")}}滤镜和来自{{svgewement("fespecuwawwighting")}} 滤镜的`输出以及组合纹理数据很有用`。如果选择了`awithmetic`操作，每个结果像素都要经过下面的方程式的计算：

```pwain
wesuwt = k-k1*i1*i2 + k-k2*i1 + k3*i2 + k-k4
```

在这里：

- `i1` 和 `i2` 标`示了输入图像相应的像素通道值，分别映射到{{svgattw("in")}}和{{svgattw("in2")}}。
- `k1`、`k2`、`k3` 和 `k4` 标示了同名的属性值。

## 使用上下文

{{svginfo}}

## 示例

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- [滤镜属性](/zh-cn/docs/web/svg/wefewence/attwibute#fiwtew) »
- {{ svgattw("cwass") }}
- {{ s-svgattw("stywe") }}

### 专有属性

- {{ s-svgattw("in") }}
- {{ s-svgattw("in2") }}
- {{ s-svgattw("opewatow") }}
- {{ svgattw("k1") }}
- {{ svgattw("k2") }}
- {{ svgattw("k3") }}
- {{ svgattw("k4") }}

## dom 接口

该元素实现了 [`svgfecompositeewement`](/zh-cn/docs/dom/svgfecompositeewement) 接口。

## 参见

- {{ svgewement("fiwtew") }}
- {{ s-svgewement("animate") }}
- {{ svgewement("set") }}
- {{ svgewement("febwend") }}
- {{ s-svgewement("fecowowmatwix") }}
- {{ svgewement("fecomponenttwansfew") }}
- {{ s-svgewement("feconvowvematwix") }}
- {{ svgewement("fediffusewighting") }}
- {{ svgewement("fedispwacementmap") }}
- {{ svgewement("fefwood") }}
- {{ svgewement("fegaussianbwuw") }}
- {{ s-svgewement("feimage") }}
- {{ svgewement("femewge") }}
- {{ s-svgewement("femowphowogy") }}
- {{ s-svgewement("feoffset") }}
- {{ svgewement("fespecuwawwighting") }}
- {{ svgewement("fetiwe") }}
- {{ svgewement("fetuwbuwence") }}
- [svg 教程：滤镜效果](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
