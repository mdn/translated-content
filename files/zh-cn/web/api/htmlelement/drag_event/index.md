---
title: GlobalEventHandlers.ondrag
slug: Web/API/HTMLElement/drag_event
---
{{ApiRef("HTML DOM")}}

一个{{event("drag")}}事件的{{domxref("GlobalEventHandlers","global event handler")}}。

## 语法

```plain
var dragHandler = targetElement.ondrag;
```

### 返回值

- `dragHandler`
  - : 元素 `targetElement`的*drag*事件 handler。

## 例子

这个例子展示了使用*ondrag*属性 handler 设置一个元素的*drag*事件 handler。

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of using the ondrag Global Event Attribute</title>
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
</head>
<script>
function drag_handler(ev) {
 console.log("Drag");
}

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
}

function drop_handler(ev) {
 console.log("Drop");
 ev.currentTarget.style.background = "lightyellow";

 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
</script>
<body>
<h1>Examples of <code>ondrag</code>, <code>ondrop</code>, <code>ondragstart</code>, <code>ondragover</code></h1>
 <div> <!-- <div class="source"> -->
   <p id="source" ondrag="drag_handler(event);" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.GlobalEventHandlers.ondrag")}}

## 参考

- {{event("drag")}}
