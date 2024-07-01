---
title: Window：online 事件
slug: Web/API/Window/online_event
---

{{APIRef}}

当浏览器能够访问网络，且 {{domxref("Navigator.onLine")}} 的值被设为 `true` 时，{{domxref("Window")}} 接口的 **`online`** 事件将被触发。

> **备注：** 该事件不能用于确定某个网站可否访问。网站自身问题或防火墙都有可能阻止对特定网站的访问。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.ononline", "ononline")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

```js
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`offline`](/zh-CN/docs/Web/API/Window/offline_event)
