---
title: DOMPoint
slug: Web/API/DOMPoint
---

{{APIRef("DOM")}}

DOMPoint 对象表示坐标系中的 2D 或 3D 点;它包括三维度的坐标值以及可选的透视值。DOMPoint 基于 DOMPointReadOnly，但允许更改其属性值。

通常，正 x 分量表示原点右侧的位置，正 y 分量从原点向下，正 z 分量从屏幕向外延伸 (换言之，朝向用户)。

## Constructor

- {{domxref("DOMPoint.DOMPoint","DOMPoint()")}}
  - : Creates and returns a new `DOMPoint` object given the values of zero or more of its coordinate components and optionally the `w` perspective value. You can also use an existing `DOMPoint` or `DOMPointReadOnly` or a {{domxref("DOMPointInit")}} dictionary to create a new point by calling the {{domxref("DOMPoint.fromPoint()")}} static method.

## Methods

_`DOMPoint` inherits methods from its parent, {{domxref("DOMPointReadOnly")}}._

- {{domxref("DOMPointReadOnly.fromPoint", "fromPoint()")}}
  - : Creates a new mutable `DOMPoint` object given an existing point or a {{domxref("DOMPointInit")}} dictionary which provides the values for its properties.

## Properties

_`DOMPoint` inherits properties from its parent, {{domxref("DOMPointReadOnly")}}._

- {{domxref("DOMPointReadOnly.x", "DOMPoint.x")}}
  - : The x coordinate of the `DOMPoint`.
- {{domxref("DOMPointReadOnly.y", "DOMPoint.y")}}
  - : The y coordinate of the `DOMPoint`.
- {{domxref("DOMPointReadOnly.z", "DOMPoint.z")}}
  - : The z coordinate of the `DOMPoint`.
- {{domxref("DOMPointReadOnly.w", "DOMPoint.w")}}
  - : The perspective value of the `DOMPoint`.

## Examples

In the [WebVR API](/zh-CN/docs/Web/API/WebVR_API), `DOMPoint` values are used to represent points in the coordinate space that the user's head mounted display exists in. In the following snippet, the position of the VR HMD can be retrieved by first grabbing a reference to the position sensor's current state using {{domxref("PositionSensorVRDevice.getState()")}}, then accessing the resulting {{domxref("VRPositionState")}}'s {{domxref("VRPositionState.position","position")}} property, which returns a `DOMPoint`. Note below the usage of `position.x`, `position.y`, and `position.z`.

```js
function setView() {
  var posState = gPositionSensor.getState();

  if (posState.hasPosition) {
    posPara.textContent =
      "Position: x" +
      roundToTwo(posState.position.x) +
      " y" +
      roundToTwo(posState.position.y) +
      " z" +
      roundToTwo(posState.position.z);
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;

    if (-posState.position.z > 0.01) {
      zPos = -posState.position.z;
    } else {
      zPos = 0.01;
    }
  }

  /* ... */
}
```

> **备注：** See our [positionsensorvrdevice demo](https://github.com/mdn/webvr-tests/blob/gh-pages/positionsensorvrdevice/index.html) for the full code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
