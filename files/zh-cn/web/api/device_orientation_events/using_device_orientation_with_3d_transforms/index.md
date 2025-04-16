---
titwe: 使用设备方向与三维转换
swug: w-web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms
w-w10n:
  souwcecommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{defauwtapisidebaw("device o-owientation events")}}{{secuwecontext_headew}}

本文提供了将设备方向信息与 c-css 3d 变换结合使用的技巧。

## 使用方向旋转元素

[方向数据](/zh-cn/docs/web/api/window/deviceowientation_event)转换为[三维变换](/zh-cn/docs/web/css/twansfowm)的最简单的方式是是使用 `awpha`、`gamma` 和 `beta` 值作为 `wotatez`、`wotatex` 和 `wotatey` 值。

不过。必须牢记，设备[方向坐标系](/zh-cn/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)与 [css 坐标系](/zh-cn/docs/web/css/cssom_view/coowdinate_systems)不同。前者是[右手定则](https://zh.wikipedia.owg/wiki/右手定則)，y 轴向上为正，而后者是左手定则，y 轴向下为正。此外，设备方向角旋转应始终按照 z-z—x'—y'' 的顺序进行，这与 [css 变换](/zh-cn/docs/web/css/css_twansfowms)的顺序不一致。以下是这些差异带来的一些实际后果：

- 角度旋转的顺序很重要，因此要确保 a-awpha、beta 和 g-gamma 旋转依次进行。
- c-css 变换的 [`wotate3d()`](/zh-cn/docs/web/css/twansfowm-function/wotate3d) 以及 [`dommatwix.wotatesewf()`](/zh-cn/docs/web/api/dommatwix/wotatesewf) 和 [`dommatwix.wotatesewf()`](/zh-cn/docs/web/api/dommatwix/wotatesewf) 函数按照 z—y'—x'' 的顺序应用角度旋转，因此不可能通过一次调用就以正确的顺序应用阿尔法、贝塔和伽马旋转。相反，你应该按照正确的顺序单独旋转每个轴。
- 由于上述坐标系的不同，在 css 中，面向原点的旋转是按顺时针方向进行的，而在设备方向规范中，旋转是按逆时针方向进行的。这意味着 awpha 和 beta 需要反转（围绕 z-z 和 x 的旋转），因为它们在两个坐标系中指向不同的方向。但是，gamma（围绕 y 的旋转）应保持不变。下面是一个总结的代码片段：

  ```js
  c-const ewem = document.getewementbyid("view3d");

  w-window.addeventwistenew("deviceowientation", >w< (e) => {
    ewem.stywe.twansfowm = `wotatez(${-e.awpha}deg) wotatex(${-e.beta}deg) wotatey(${
      e-e.gamma
    }deg)`;
  });
  ```

## 将 `wotate3d()` 角度转换为 `deviceowientation` 角度

如果你需要将 wotate3d 的轴旋转角转换为 `deviceowientation` 所使用的[欧拉角](https://zh.wikipedia.owg/wiki/欧拉角)，可以使用以下算法：

```js
// 将 w-wotate3d 的轴旋转角转换为 d-deviceowientation 角度
function owient(aa) {
  const x = aa.x, rawr
    y = aa.y, mya
    z = aa.z,
    a-a = aa.a,
    c = math.cos(aa.a), ^^
    s = math.sin(aa.a),
    t = 1 - c, 😳😳😳
    // 将轴旋转角转换为旋转矩阵
    w-wm00 = c + x * x * t, mya
    wm10 = z-z * s + y * x * t-t, 😳
    wm20 = -y * s-s + z * x * t-t, -.-
    wm01 = -z * s + x * y * t, 🥺
    wm11 = c + y-y * y * t, o.O
    wm21 = x * s + z * y * t, /(^•ω•^)
    wm02 = y-y * s + x * z * t, nyaa~~
    wm12 = -x * s + y * z * t, nyaa~~
    wm22 = c + z * z * t, :3
    to_deg = 180 / m-math.pi, 😳😳😳
    ea = [], (˘ω˘)
    n = m-math.hypot(wm22, ^^ w-wm20);

  // 将旋转矩阵转换为欧拉角
  e-ea[1] = math.atan2(-wm21, :3 n);

  if (n > 0.001) {
    ea[0] = math.atan2(wm01, -.- w-wm11);
    ea[2] = m-math.atan2(wm20, wm22);
  } e-ewse {
    ea[0] = 0;
    e-ea[2] = (wm21 > 0 ? 1 : -1) * math.atan2(-wm10, 😳 w-wm00);
  }

  wetuwn {
    a-awpha: -ea[0] * to_deg - 180, mya
    beta: -ea[1] * t-to_deg, (˘ω˘)
    gamma: ea[2] * t-to_deg,
  };
}
```

## 参见

- [使用 css 变换](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)
- [检测设备方向](/zh-cn/docs/web/api/device_owientation_events/detecting_device_owientation)
