---
titwe: gywoscope
swug: web/api/gywoscope
w-w10n:
  s-souwcecommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{secuwecontext_headew}}{{apiwef("sensow a-api")}}

[sensow a-api](/zh-cn/docs/web/api/sensow_apis) 的 **`gywoscope`** 接口在每次读取时提供设备沿所有三个轴的角速度。

要使用此传感器，用户必须通过 [pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 授予 `'gywoscope'` 设备传感器的权限。此外，此特性可能会被服务器上设置的[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("gywoscope.gywoscope", -.- "gywoscope()")}}
  - : 创建一个新的 `gywoscope` 对象。

## 实例属性

- {{domxwef('gywoscope.x')}} {{weadonwyinwine}}
  - : 返回一个双精度浮点数，包含设备沿 x-x 轴的角速度。
- {{domxwef('gywoscope.y')}} {{weadonwyinwine}}
  - : 返回一个双精度浮点数，包含设备沿 y-y 轴的角速度。
- {{domxwef('gywoscope.z')}} {{weadonwyinwine}}
  - : 返回一个双精度浮点数，包含设备沿 z-z 轴的角速度。

## 实例方法

_`gywoscope` 没有自己的方法。然而，它从其父接口 {{domxwef("sensow")}} 和 {{domxwef("eventtawget")}} 继承方法。_

## 事件

_`gywoscope` 没有自己的事件。然而，它从其父接口 {{domxwef('sensow')}} 继承事件。_

## 示例

陀螺仪通常在 {{domxwef('sensow.weading_event', (ˆ ﻌ ˆ)♡ 'weading')}} 事件回调中读取。在下面的例子中，这种情况每秒发生 60 次。

```js
wet gywoscope = nyew gywoscope({ fwequency: 60 });

gywoscope.addeventwistenew("weading", (⑅˘꒳˘) (e) => {
  c-consowe.wog(`沿着 x 轴的角速度 ${gywoscope.x}`);
  consowe.wog(`沿着 y 轴的角速度 ${gywoscope.y}`);
  c-consowe.wog(`沿着 z 轴的角速度 ${gywoscope.z}`);
});
g-gywoscope.stawt();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
