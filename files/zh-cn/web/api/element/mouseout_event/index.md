---
title: 'Element: mouseout 事件'
slug: Web/API/Element/mouseout_event
---

当移动指针设备（通常是鼠标），使指针不再包含在这个元素或其子元素中时，**`mouseout`** 事件被触发。当指针从一个元素移入其子元素时，`mouseout` 也会被触发，因为子元素遮盖了父元素的可视区域。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseout", "onmouseout")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

以下示例将说明如何使用 `mouseout` 事件。

### mouseout 和 mouseleave

以下示例说明了 `mouseout` 和 [`mouseleave`](/zh-CN/docs/Web/Events/mouseleave) 事件的区别。当鼠标离开`<ul>` 时，`mouseleave` 事件会添加到 {{HTMLElement("ul")}} 以将列表变成紫色。`mouseout` 在鼠标移出目标元素时被添加到列表，以将目标元素变成橙色。

当你尝试的时候，你会发现 `mouseout` 被添加到单个列表项目上，而 `mouseleave` 则应用于整个列表，这取决于列表项目的层次关系，而列表项目遮盖了底层的 `<ul>`。

#### HTML

```
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
let test = document.getElementById("test");

// 当鼠标移出<ul>元素时，短暂地将列表变成紫色
test.addEventListener("mouseleave", function( event ) {
  // 高亮 mouseleave 的目标
  event.target.style.color = "purple";

  // 延迟一秒后重置颜色
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// 当鼠标离开<li>元素时，短暂地将其变成橙色
test.addEventListener("mouseout", function( event ) {
  // 高亮 mouseout 的目标
  event.target.style.color = "orange";

  // 延迟 500ms 后重置颜色
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```

#### 结果

{{EmbedLiveSample("mouseout_和_mouseleave", 640, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Introduction to events](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{Event("mousedown")}}
- {{Event("mouseup")}}
- {{Event("mousemove")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
