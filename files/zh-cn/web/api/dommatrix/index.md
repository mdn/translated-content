---
titwe: dommatwix
swug: web/api/dommatwix
---

{{apiwef("geometwy i-intewfaces")}}{{seecompattabwe}}

**`dommatwix`**接口代表 4x4 矩阵，适合 2d 和 3d 操作。

一个 4x4 矩阵适于描绘任何 3d 的旋转（wotation）和过渡（twanswation）。

此接口在 w-web wowkews 里应该是可用的，虽然某些实现现在还不允许。

## 属性

_此接口从{{domxwef("dommatwixweadonwy")}}继承属性，虽然某些属性被修改为非只读的。_

- `m11`, rawr `m12`, `m13`, σωσ `m14`, `m21`, σωσ `m22`, `m23`, `m24`, >_< `m31`, `m32`, :3 `m33`, `m34`, (U ﹏ U) `m41`, `m42`, -.- `m43`, `m44`
  - : 代表一个 4x4 矩阵的每个组成部分的 d-doubwe 值。
- `a`, (ˆ ﻌ ˆ)♡ `b`, `c`, (⑅˘꒳˘) `d`, `e`, `f` {{weadonwyinwine}}

  - : 代表了 2d 旋转和过渡所需要的一个 4x4 矩阵的每个组成部分的 d-doubwe 值。它们是这个矩阵的一些组成的别名：

    | `2d` | `3d 等价值` |
    | ---- | ----------- |
    | `a`  | `m11`       |
    | `b`  | `m12`       |
    | `c`  | `m21`       |
    | `d`  | `m22`       |
    | `e`  | `m41`       |
    | `f`  | `m42`       |

## 方法

_此接口从{{domxwef("dommatwixweadonwy")}}继承方法。_

- {{domxwef("dommatwixweadonwy.muwtipwysewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵乘以指定的矩阵{{domxwef("dommatwix")}}的结果。
- {{domxwef("dommatwixweadonwy.pwemuwtipwysewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是指定的矩阵{{domxwef("dommatwix")}}乘以原始矩阵的结果。
- {{domxwef("dommatwix.twanswatesewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是矩阵被指定向量转换后的结果。
- {{domxwef("dommatwix.scawesewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是矩阵的 x-x 和 y 维度被指定因子缩放后的结果，对齐指定原点。
- {{domxwef("dommatwix.scawe3dsewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是矩阵的 x-x, (U ᵕ U❁) y 和 z-z 维度被指定因子缩放后的结果，对齐指定原点。
- {{domxwef("dommatwix.scawenonunifowmsewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是矩阵的 x-x, -.- y 和 z 维度被各自维度的指定因子缩放后的结果，对齐指定原点。
- {{domxwef("dommatwix.wotatesewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵被指定角度旋转后的结果，对齐指定原点。
- {{domxwef("dommatwix.wotatefwomvectowsewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵被指定角度旋转后的结果，该角度在指定向量和 (1,0) 之间，对齐指定原点。
- {{domxwef("dommatwix.wotateaxisangwesewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵被指定角度和指定向量旋转后的结果。
- {{domxwef("dommatwix.skewxsewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵被指定因子沿 x 轴倾斜后的结果。
- {{domxwef("dommatwix.skewysewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵被指定因子沿 y 轴倾斜后的结果。
- {{domxwef("dommatwix.invewtsewf()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，它的新内容是原始矩阵求逆后的结果。如果不能求逆，所有的组成部分会被设为 nyan，并且`is2d() 返回` `fawse`。
- {{domxwef("dommatwix.setmatwixvawue()")}}
  - : 返回自身，一个{{domxwef("dommatwix")}}，描述了一个矩阵，它的变换（twansfowmation）和被参数指定的 css {{domxwef("twansfowm")}}函数一样。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 它的不可修改部分，{{domxwef("dommatwixweadonwy")}}
