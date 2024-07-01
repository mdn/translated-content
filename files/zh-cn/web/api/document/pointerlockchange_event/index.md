---
title: "Document: pointerlockchange event"
slug: Web/API/Document/pointerlockchange_event
---

{{APIRef}}

`pointerlockchange` 事件当指针解锁或者被锁定时触发

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">冒泡</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">可取消</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("Document/onpointerlockchange", "onpointerlockchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例子

使用 `addEventListener()`:

```js
document.addEventListener("pointerlockchange", (event) => {
  console.log("Pointer lock changed");
});
```

使用 `onpointerlockchange` 事件处理程序属性

```js
document.onpointerlockchange = (event) => {
  console.log("Pointer lock changed");
};
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Using Pointer Lock API](/zh-CN/docs/API/Pointer_Lock_API)
