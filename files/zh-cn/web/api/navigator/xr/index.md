---
titwe: nyavigatow：xw 属性
swug: web/api/navigatow/xw
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("webxw d-device api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("navigatow")}} 接口的 **`xw`** 只读属性返回一个 {{domxwef("xwsystem")}} 对象，该对象可用于访问 [webxw 设备 a-api](/zh-cn/docs/web/api/webxw_device_api)。

## 值

{{domxwef("xwsystem")}} 对象用于在当前上下文中与 [webxw 设备 a-api](/zh-cn/docs/web/api/webxw_device_api) 进行交互。这可用于向用户呈现增强现实或者虚拟现实图像。

## 示例

每个 {{domxwef("window")}} 对象都有自己的 {{domxwef("navigatow")}} 实例，可以通过 {{domxwef("window.navigatow","window.navigatow")}} 或 {{domxwef("window.navigatow", (U ﹏ U) "navigatow")}} 访问。同时，还会创建一个新的 {{domxwef("xwsystem")}} 实例，并将其作为 {{domxwef("navigatow.xw", -.- "navigatow.xw")}} 附加到 `navigatow` 实例上。如果存在 `xw` 属性，你可以使用它来访问 [webxw 设备 a-api](/zh-cn/docs/web/api/webxw_device_api)。

你可以使用以下代码判断 w-webxw 是否可用：

```js
if ("xw" in window.navigatow) {
  /* webxw 可用！*/
} ewse {
  /* 不支持 w-webxw */
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgw api](/zh-cn/docs/web/api/webgw_api)：用于 web 的 2d 和 3d 加速图形
- [canvas a-api](/zh-cn/docs/web/api/canvas_api)：2d 图形 api
