---
title: DOMMatrix
slug: Web/API/DOMMatrix
---

{{APIRef("Geometry Interfaces")}}{{SeeCompatTable}}

**`DOMMatrix`**接口代表 4x4 矩阵，适合 2D 和 3D 操作。

一个 4x4 矩阵适于描绘任何 3D 的旋转（rotation）和过渡（translation）。

此接口在 Web workers 里应该是可用的，虽然某些实现现在还不允许。

## 属性

_此接口从{{domxref("DOMMatrixReadOnly")}}继承属性，虽然某些属性被修改为非只读的。_

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : 代表一个 4x4 矩阵的每个组成部分的 double 值。
- `a`, `b`, `c`, `d`, `e`, `f` {{ReadOnlyInline}}
  - : 代表了 2D 旋转和过渡所需要的一个 4x4 矩阵的每个组成部分的 double 值。它们是这个矩阵的一些组成的别名：

    | `2D` | `3D 等价值` |
    | ---- | ----------- |
    | `a`  | `m11`       |
    | `b`  | `m12`       |
    | `c`  | `m21`       |
    | `d`  | `m22`       |
    | `e`  | `m41`       |
    | `f`  | `m42`       |

## 方法

_此接口从{{domxref("DOMMatrixReadOnly")}}继承方法。_

- {{domxref("DOMMatrixReadOnly.multiplySelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵乘以指定的矩阵{{domxref("DOMMatrix")}}的结果。
- {{domxref("DOMMatrixReadOnly.preMultiplySelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是指定的矩阵{{domxref("DOMMatrix")}}乘以原始矩阵的结果。
- {{domxref("DOMMatrix.translateSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是矩阵被指定向量转换后的结果。
- {{domxref("DOMMatrix.scaleSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是矩阵的 x 和 y 维度被指定因子缩放后的结果，对齐指定原点。
- {{domxref("DOMMatrix.scale3dSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是矩阵的 x, y 和 z 维度被指定因子缩放后的结果，对齐指定原点。
- {{domxref("DOMMatrix.scaleNonUniformSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是矩阵的 x, y 和 z 维度被各自维度的指定因子缩放后的结果，对齐指定原点。
- {{domxref("DOMMatrix.rotateSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵被指定角度旋转后的结果，对齐指定原点。
- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵被指定角度旋转后的结果，该角度在指定向量和 (1,0) 之间，对齐指定原点。
- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵被指定角度和指定向量旋转后的结果。
- {{domxref("DOMMatrix.skewXSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵被指定因子沿 x 轴倾斜后的结果。
- {{domxref("DOMMatrix.skewYSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵被指定因子沿 y 轴倾斜后的结果。
- {{domxref("DOMMatrix.invertSelf()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，它的新内容是原始矩阵求逆后的结果。如果不能求逆，所有的组成部分会被设为 NaN，并且`is2D() 返回` `false`。
- {{domxref("DOMMatrix.setMatrixValue()")}}
  - : 返回自身，一个{{domxref("DOMMatrix")}}，描述了一个矩阵，它的变换（transformation）和被参数指定的 CSS {{domxref("transform")}}函数一样。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它的不可修改部分，{{domxref("DOMMatrixReadOnly")}}
