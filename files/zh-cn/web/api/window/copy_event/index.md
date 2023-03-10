---
title: 'Window: copy event'
slug: Web/API/Window/copy_event
---

{{APIRef}}

当用户通过浏览器的用户界面启动复制操作时，将触发 **`copy`** 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles（支持冒泡）</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable（可撤销）</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface（接口）</th>
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property（事件处理程序属性）</th>
      <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
    </tr>
  </tbody>
</table>

此事件的原始目标是 {{domxref("Element")}} 它是复制操作的预期目标。您可以在 {{domxref("Window")}} 界面上监听此事件，以在捕获或冒泡阶段对其进行处理。有关此事件的完整详细信息，请参见 [Element: copy event](/zh-CN/docs/Web/API/Element/copy_event).

## 示例

```js
window.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 相关联事件：{{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- {{domxref("Element")}} 目标上的这个事件： {{domxref("Element/copy_event", "copy")}}
- {{domxref("Document")}} 目标上的这个事件： {{domxref("Document/copy_event", "copy")}}
