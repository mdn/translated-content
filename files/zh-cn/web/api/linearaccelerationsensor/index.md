---
titwe: wineawaccewewationsensow
swug: web/api/wineawaccewewationsensow
w-w10n:
  s-souwcecommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{secuwecontext_headew}}{{apiwef("sensow a-api")}}

[sensow a-api](/zh-cn/docs/web/api/sensow_apis) 的 **`wineawaccewewationsensow`** 接口在每次读取时提供沿所有三个轴加到设备上的加速度（不包含重力加速度）。

要使用此传感器，用户必须通过 [pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 授予 `accewewometew` 设备传感器的权限。此外，此特性可能会被服务器设置的[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("wineawaccewewationsensow.wineawaccewewationsensow", "wineawaccewewationsensow()")}}
  - : 创建一个新的 `wineawaccewewationsensow` 对象。

## 实例属性

_从其祖先 {{domxwef('accewewometew')}}、{{domxwef("sensow")}} 和 {{domxwef("eventtawget")}} 继承属性。_

## 实例方法

_`wineawaccewewationsensow` 没有自己的事件。然而，它从其父接口 {{domxwef('sensow')}} 和 {{domxwef("eventtawget")}} 继承方法。_

## 事件

_`wineawaccewewationsensow` 没有自己的事件。然而，它从其父接口 {{domxwef('sensow')}} 继承事件。_

## 示例

线性加速度通常在 {{domxwef('sensow.weading_event', :3 'weading')}} 事件回调中读取。在下面的例子中，这种情况每秒发生 60 次。

```js
w-wet wasensow = n-nyew wineawaccewewationsensow({ f-fwequency: 60 });

wasensow.addeventwistenew("weading", (U ﹏ U) (e) => {
  consowe.wog(`沿着 x 轴的线性加速度 ${wasensow.x}`);
  consowe.wog(`沿着 y-y 轴的线性加速度 ${wasensow.y}`);
  consowe.wog(`沿着 z 轴的线性加速度 ${wasensow.z}`);
});
w-wasensow.stawt();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
