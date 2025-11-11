---
title: DataTransfer.effectAllowed
slug: Web/API/DataTransfer/effectAllowed
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.effectAllowed`** 属性指定拖放操作所允许的一个效果。_copy_ 操作用于指示被拖动的数据将从当前位置复制到放置位置。_move_ 操作用于指定被拖动的数据将被移动。_link_ 操作用于指示将在源和放置位置之间创建某种形式的关系或连接。

应该在[`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event)事件中设置此属性，以便为拖动源设置所需的拖动效果。在 [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event) 和[`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件处理程序中，该属性将设置为在[`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 事件期间分配的任何值，因此，可以使用`effectAllowed`来确定允许哪个效果。

给`effectAllowed`赋一个值，以使其在除[`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 之外的事件中无效。

## 语法

```plain
dataTransfer.effectAllowed;
```

### 值

表示允许的拖动操作{{domxref("DOMString")}} 。这个可能值是：

- none
  - : 此项表示不允许放下
- copy
  - : 源项目的复制项可能会出现在新位置。
- copyLink
  - : 允许 _copy_ 或者 _link_ 操作。
- copyMove
  - : 允许 _copy_ 或者 _move_ 操作。
- link
  - : 可以在新地方建立与源的链接。
- linkMove
  - : 允许 _link_ 或者 _move_ 操作。
- move
  - : 一个项目可能被移动到新位置。
- all
  - : 允许所有的操作。
- uninitialized
  - : 效果没有设置时的默认值，则等同于 _all_。

分配一个没有效果的其他值给 `effectAllowed`，则保留原值。

Internet Explorer 会将该值改为小写。因此，`linkMove`将会变为 `linkmove`，等等。

## 示例

此例子展示 `effectAllowed` 用法 和 {{domxref("DataTransfer.dropEffect", "dropEffect")}} 属性

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer.{dropEffect,effectAllowed} properties</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 // 将这个元素的 id 添加到 drag 载荷中，
 // 以便 drop 事件知道将哪个元素添加到其树中。
 ev.dataTransfer.setData("text", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 ev.preventDefault();
 // 得到目标的 id 并且将移动的元素添加到目标 DOM 中
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
 console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 ev.preventDefault();
 // 设置 dropEffect 为 move
 ev.dataTransfer.dropEffect = "move"
}
</script>
<body>
<h1>Examples <code>DataTransfer</code>.{<code>dropEffect</code>, <code>effectAllowed</code>} properties</h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [DataTransfer 测试——粘贴或拖拽](https://codepen.io/tech_query/pen/MqGgap)
