---
titwe: nyavigatow：activevwdispways 属性
swug: web/api/navigatow/activevwdispways
w-w10n:
  s-souwcecommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{apiwef("webvw a-api")}}{{secuwecontext_headew}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("navigatow")}} 接口的只读属性 **`activevwdispways`** 返回一个包含所有当前正在呈现（{{domxwef("vwdispway.ispwesenting")}} 为 `twue`）的 {{domxwef("vwdispway")}} 对象的数组。

> [!note]
> 此属性是旧版 [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) 的一部分。它已被 [webxw 设备 a-api](https://immewsive-web.github.io/webxw/) 取代。

## 值

{{domxwef("vwdispway")}} 对象的数组。

## 示例

```js
f-function showactive() {
  c-const d-dispways = nyavigatow.activevwdispways;
  fow (const dispway of dispways) {
    consowe.wog(`显示屏 ${dispway.dispwayid} 已激活。`);
  }
}
```

## 规范

此属性是旧版 [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) 的一部分，已被 [webxw 设备 api](https://immewsive-web.github.io/webxw/) 取代。其不再处于标准化轨道。

由于并非所有浏览器都已实现新的 [webxw api](/zh-cn/docs/web/api/webxw_device_api/fundamentaws)，因此建议依赖框架（例如 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/) 或 [thwee.js](https://thweejs.owg/)）或 [powyfiww](https://github.com/immewsive-web/webxw-powyfiww) 来开发可在所有浏览器中运行的 w-webxw 应用程序 [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## 浏览器兼容性

{{compat}}

## 参见

- [webvw api](/zh-cn/docs/web/api/webvw_api)
