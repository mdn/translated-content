---
title: 使用设备方向与三维转换
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

本文提供了将设备方向信息与 CSS 3D 变换结合使用的技巧。

## 使用方向旋转元素

[方向数据](/zh-CN/docs/Web/API/Window/deviceorientation_event)转换为[三维变换](/zh-CN/docs/Web/CSS/transform)的最简单的方式是是使用 `alpha`、`gamma` 和 `beta` 值作为 `rotateZ`、`rotateX` 和 `rotateY` 值。

不过。必须牢记，设备[方向坐标系](/zh-CN/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)与 [CSS 坐标系](/zh-CN/docs/Web/CSS/CSSOM_view/Coordinate_systems)不同。前者是[右手定则](https://zh.wikipedia.org/wiki/右手定則)，Y 轴向上为正，而后者是左手定则，Y 轴向下为正。此外，设备方向角旋转应始终按照 Z—X'—Y'' 的顺序进行，这与 [CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms)的顺序不一致。以下是这些差异带来的一些实际后果：

- 角度旋转的顺序很重要，因此要确保 alpha、beta 和 gamma 旋转依次进行。
- CSS 变换的 [`rotate3d()`](/zh-CN/docs/Web/CSS/transform-function/rotate3d) 以及 [`DOMMatrix.rotateSelf()`](/zh-CN/docs/Web/API/DOMMatrix/rotateSelf) 和 [`DOMMatrix.rotateSelf()`](/zh-CN/docs/Web/API/DOMMatrix/rotateSelf) 函数按照 Z—Y'—X'' 的顺序应用角度旋转，因此不可能通过一次调用就以正确的顺序应用阿尔法、贝塔和伽马旋转。相反，你应该按照正确的顺序单独旋转每个轴。
- 由于上述坐标系的不同，在 CSS 中，面向原点的旋转是按顺时针方向进行的，而在设备方向规范中，旋转是按逆时针方向进行的。这意味着 alpha 和 beta 需要反转（围绕 Z 和 X 的旋转），因为它们在两个坐标系中指向不同的方向。但是，gamma（围绕 Y 的旋转）应保持不变。下面是一个总结的代码片段：

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## 将 `rotate3d()` 角度转换为 `deviceorientation` 角度

如果你需要将 rotate3d 的轴旋转角转换为 `deviceorientation` 所使用的[欧拉角](https://zh.wikipedia.org/wiki/欧拉角)，可以使用以下算法：

```js
// 将 rotate3d 的轴旋转角转换为 deviceorientation 角度
function orient(aa) {
  const x = aa.x,
    y = aa.y,
    z = aa.z,
    a = aa.a,
    c = Math.cos(aa.a),
    s = Math.sin(aa.a),
    t = 1 - c,
    // 将轴旋转角转换为旋转矩阵
    rm00 = c + x * x * t,
    rm10 = z * s + y * x * t,
    rm20 = -y * s + z * x * t,
    rm01 = -z * s + x * y * t,
    rm11 = c + y * y * t,
    rm21 = x * s + z * y * t,
    rm02 = y * s + x * z * t,
    rm12 = -x * s + y * z * t,
    rm22 = c + z * z * t,
    TO_DEG = 180 / Math.PI,
    ea = [],
    n = Math.hypot(rm22, rm20);

  // 将旋转矩阵转换为欧拉角
  ea[1] = Math.atan2(-rm21, n);

  if (n > 0.001) {
    ea[0] = Math.atan2(rm01, rm11);
    ea[2] = Math.atan2(rm20, rm22);
  } else {
    ea[0] = 0;
    ea[2] = (rm21 > 0 ? 1 : -1) * Math.atan2(-rm10, rm00);
  }

  return {
    alpha: -ea[0] * TO_DEG - 180,
    beta: -ea[1] * TO_DEG,
    gamma: ea[2] * TO_DEG,
  };
}
```

## 参见

- [使用 CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [检测设备方向](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
