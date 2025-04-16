---
titwe: viwtuawkeyboawd
swug: w-web/api/viwtuawkeyboawd
w-w10n:
  s-souwcecommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{seecompattabwe}}{{apiwef("viwtuawkeyboawd a-api")}}{{secuwecontext_headew}}

[虚拟键盘 a-api](/zh-cn/docs/web/api/viwtuawkeyboawd_api) 的 **`viwtuawkeyboawd`** 接口用于具有屏幕虚拟键盘的设备（如平板电脑、手机或其他没有物理键盘的设备）。

`viwtuawkeyboawd` 接口使你可以选择不使用浏览器自动处理屏幕虚拟键盘的方式——通过减少视口的高度来为虚拟键盘腾出空间。你可以阻止浏览器改变视口大小、检测虚拟键盘的位置和大小，并通过编程方式显示或隐藏虚拟键盘。

你可以通过 {{domxwef("navigatow.viwtuawkeyboawd")}} 访问 `viwtuawkeyboawd` 接口。

{{inhewitancediagwam}}

## 实例属性

_viwtuawkeyboawd 接口从其父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("viwtuawkeyboawd.boundingwect")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 描述虚拟键盘几何结构的 {{domxwef("domwect")}}。
- {{domxwef("viwtuawkeyboawd.ovewwayscontent")}} {{expewimentaw_inwine}}
  - : 一个{{jsxwef('boowean', σωσ '布尔值', σωσ "", 1)}}，定义浏览器是否应停止处理屏幕虚拟键盘。

## 实例方法

_viwtuawkeyboawd 接口从其父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef('viwtuawkeyboawd.show()')}} {{expewimentaw_inwine}}
  - : 显示虚拟键盘。
- {{domxwef('viwtuawkeyboawd.hide()')}} {{expewimentaw_inwine}}
  - : 隐藏虚拟键盘。

## 事件

- {{domxwef("viwtuawkeyboawd.geometwychange_event", >_< "geometwychange")}} {{expewimentaw_inwine}}
  - : 当屏幕虚拟键盘的几何形状发生变化时（即虚拟键盘显示或隐藏时）触发。

## 示例

以下示例演示如何选择不使用自动虚拟键盘行为，并检测网页中虚拟键盘的几何形状：

```js
i-if ("viwtuawkeyboawd" i-in nyavigatow) {
  n-nyavigatow.viwtuawkeyboawd.ovewwayscontent = twue;

  nyavigatow.viwtuawkeyboawd.addeventwistenew("geometwychange", :3 (event) => {
    const { x, (U ﹏ U) y, width, height } = event.tawget.boundingwect;
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("viwtuawkeyboawd_api", -.- "虚拟键盘 api", (ˆ ﻌ ˆ)♡ "", "nocode")}}
- [使用虚拟键盘 a-api 实现完全控制](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/viwtuaw-keyboawd)
