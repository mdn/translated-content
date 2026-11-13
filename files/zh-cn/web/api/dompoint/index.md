---
title: DOMPoint
slug: Web/API/DOMPoint
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMPoint`** 对象表示坐标系统中的一个二维或三维点；它包含最多三个维度的坐标值以及一个可选的透视值。`DOMPoint` 基于 {{domxref("DOMPointReadOnly")}}，但允许修改其属性的值。

一般而言，`x` 的正值表示位于原点右侧的位置，`y` 的正值表示位于原点下方，而 `z` 的正值表示从屏幕向外（即朝向用户）的方向。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("DOMPoint.DOMPoint","DOMPoint()")}}
  - : 根据零个或多个坐标分量值（以及可选的透视值 `w`）创建并返回一个新的 `DOMPoint` 对象。你也可以通过调用 {{domxref("DOMPoint.fromPoint_static", "DOMPoint.fromPoint()")}} 静态方法，使用现有的 `DOMPoint`、`DOMPointReadOnly` 或具有相同属性的对象来创建一个新的点。

## 实例属性

_`DOMPoint` 还继承父接口 {{domxref("DOMPointReadOnly")}} 的属性。_

- {{domxref("DOMPoint.x")}}
  - : `DOMPoint` 的 `x` 坐标。
- {{domxref("DOMPoint.y")}}
  - : `DOMPoint` 的 `y` 坐标。
- {{domxref("DOMPoint.z")}}
  - : `DOMPoint` 的 `z` 坐标。
- {{domxref("DOMPoint.w")}}
  - : `DOMPoint` 的透视值。

## 实例方法

_`DOMPoint` 继承父接口 {{domxref("DOMPointReadOnly")}} 的实例方法。_

## 静态方法

_`DOMPoint` 还可能继承父接口 {{domxref("DOMPointReadOnly")}} 的静态方法。_

- {{domxref("DOMPoint/fromPoint_static", "DOMPoint.fromPoint()")}}
  - : 根据一个已有的点（或包含相应属性的对象）创建一个新的可变 `DOMPoint` 对象，并使用该点的属性值进行初始化。

## 示例

在 [WebXR 设备 API](/zh-CN/docs/Web/API/WebXR_Device_API) 中，`DOMPointReadOnly` 值用于表示位置和方向。在以下代码片段中，可以在 {{domxref("XRSession")}} 的动画帧回调中，通过调用 {{domxref("XRFrame.getViewerPose()")}} 来获取 XR 设备（例如 VR 头显或具备 AR 功能的手机）的姿态。返回的 {{domxref("XRPose")}} 对象的 {{domxref("XRPose.transform","transform")}} 属性包含两个 `DOMPointReadOnly` 类型的属性：{{domxref("XRRigidTransform.position","position")}}（表示位置向量）和 {{domxref("XRRigidTransform.orientation","orientation")}}（表示四元数方向）。

```js
function onXRFrame(time, xrFrame) {
  let viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  if (viewerPose) {
    let position = viewerPose.transform.position;
    let orientation = viewerPose.transform.orientation;

    console.log(
      `XR 视图位置：{x: ${roundToTwo(position.x)}, y: ${roundToTwo(
        position.y,
      )}, z: ${roundToTwo(position.z)}}`,
    );

    console.log(
      `XR 视图方向：{x: ${roundToTwo(orientation.x)}, y: ${roundToTwo(
        orientation.y,
      )}, z: ${roundToTwo(orientation.z)}, w: ${roundToTwo(orientation.w)}}`,
    );
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
