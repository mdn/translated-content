---
title: "Element: contextmenu event"
slug: Web/API/Element/contextmenu_event
---

{{APIRef}}

**`contextmenu`** 事件会在用户尝试打开上下文菜单时被触发。该事件通常在鼠标点击右键或者按下键盘上的菜单键时被触发，如果使用菜单键，该上下文菜单会被展示 到所聚焦元素的左下角，但是如果该元素是一棵 DOM 树的话，上下文菜单便会展示在当前这一行的左下角。

任何没有被禁用的鼠标右击事件 (通过调用事件的 {{domxref("Event.preventDefault", "preventDefault()")}} 方法) 将会使得 `contextmenu` 事件在目标元素上被触发。

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles（冒泡）</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable（可撤销）</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface（接口）</th>
      <td>{{DOMxRef("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property（事件处理器）</th>
      <td>
        {{domxref("GlobalEventHandlers.oncontextmenu", "oncontextmenu")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

在下面的例子中，第一段内容被触发的 `contextmenu` 事件的默认行为被 `preventDefault()` 取消了，因此，在第一段右击鼠标时什么也不会发生，但是右键单击第二段内容时，则会出现标准的菜单内容，与平时右击普通页面出现的菜单内容一致。

### HTML

```html
<p id="noContextMenu">这个段落右键菜单已被禁用。</p>
<p>但是这个段落没有被禁用。</p>
```

### JavaScript

```js
noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件介绍](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
