---
title: Navigator.activeVRDisplays
slug: Web/API/Navigator/activeVRDisplays
translation_of: Web/API/Navigator/activeVRDisplays
---
{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

**`activeVRDisplays`** 是 {{domxref("Navigator")}} 接口返回的数组中每个 {{domxref("VRDisplay")}} 对象中的的只读属性 ({{domxref("VRDisplay.ispresenting")}}为`true`).

## 语法

```plain
var myActiveDisplays = navigator.activeVRDisplays;
```

### 返回值

{{domxref("VRDisplay")}} 对象数组。

## 例子

```js
function showActive() {
  var displays = navigator.activeVRDisplays;
  for(var i = 0; i < displays.length; i++) {
    console.log('Display ' + displays[i].displayId + ' is active.');
  }
}
```

## 浏览器兼容性

{{Compat("api.Navigator.activeVRDisplays")}}

## 相关链接

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — 示例，下载和其他在 Mozilla VR 团队的资源。
