---
title: timeout
slug: Web/API/XMLHttpRequest/timeout_event
---

当进度由于预定时间到期而终止时，会触发 `timeout` 事件。

<table class="properties">
  <tbody>
    <tr>
      <td>冒泡</td>
      <td>否</td>
    </tr>
    <tr>
      <td>可取消</td>
      <td>否</td>
    </tr>
    <tr>
      <td>目标对象</td>
      <td>{{domxref("XMLHttpRequest")}}</td>
    </tr>
    <tr>
      <td>接口</td>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
  </tbody>
</table>

## 示例

```js
var client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.ontimeout = function (e) {
  console.error("Timeout!!");
};
client.send();
```

## 继承

`timeout` 事件实现了 {{domxref("ProgressEvent")}} 接口，它继承自 {{domxref("Event")}} — 它拥有在这个接口上定义的属性和方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)
