---
title: XMLHttpRequest.upload
slug: Web/API/XMLHttpRequest/upload
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.upload 属性返回一个** {{domxref("XMLHttpRequestUpload")}}对象，用来表示上传的进度。这个对象是不透明的，但是作为一个{{domxref("XMLHttpRequestEventTarget")}}，可以通过对其绑定事件来追踪它的进度。

可以被绑定在 upload 对象上的事件监听器如下：

| 事件          | 相应属性的信息类型               |
| ------------- | -------------------------------- |
| `onloadstart` | 获取开始                         |
| `onprogress`  | 数据传输进行中                   |
| `onabort`     | 获取操作终止                     |
| `onerror`     | 获取失败                         |
| `onload`      | 获取成功                         |
| `ontimeout`   | 获取操作在用户规定的时间内未完成 |
| `onloadend`   | 获取完成（不论成功与否）         |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
