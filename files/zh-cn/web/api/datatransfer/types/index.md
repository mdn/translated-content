---
title: DataTransfer.types
slug: Web/API/DataTransfer/types
translation_of: Web/API/DataTransfer/types
---
{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.types`** 是只读属性。它返回一个我们在{{event("dragstart")}}事件中设置的拖动数据格式 (如 {{domxref("DOMString","字符串")}}) 的数组。 格式顺序与拖动操作中包含的数据顺序相同。

这些格式是指定数据类型或格式的 Unicode 字符串，通常由 MIME 类型给出。 一些非 MIME 类型的值是由于历史遗留原因（例如“text”）而特殊设置的。

## 语法

```plain
dataTransfer.types;
```

### 返回值

拖动操作中使用的数据格式数组。每种格式都是{{domxref("DOMString","字符串")}}类型。如果拖动操作不包含数据，则此数组列表将为空。如果拖动操作中包含任何文件，则其中一个类型将是`Files。`

## 举个例子

这个例子展示`types`和{{domxref("DataTransfer.items","items")}} 属性的用法

```plain
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer.{types,items} properties</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart: target.id = " + ev.target.id);
 // 将这个元素的 id 添加到 drag 载荷中，
 // 以便 drop 事件知道将哪个元素添加到其树中。
 ev.dataTransfer.setData("text/plain", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: target.id = " + ev.target.id);
 ev.preventDefault();
 // 得到目标的 id 并且将移动的元素添加到目标 DOM 中
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // 打印每种格式类型
 if (ev.dataTransfer.types != null) {
   for (var i=0; i < ev.dataTransfer.types.length; i++) {
     console.log("... types[" + i + "] = " + ev.dataTransfer.types[i]);
   }
 }
 // 打印每个 item 的“kind”和“type”属性值
 if (ev.dataTransfer.items != null) {
   for (var i=0; i < ev.dataTransfer.items.length; i++) {
     console.log("... items[" + i + "].kind = " + ev.dataTransfer.items[i].kind + " ; type = " + ev.dataTransfer.items[i].type);
   }
 }
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
 // 设置 dropEffect 属性值为 move
 ev.dataTransfer.dropEffect = "move"
}
</script>
<body>
<h1>Examples of <code>DataTransfer</code>.{<code>types</code>, <code>items</code>} properties</h1>
 <ul>
   <li id="i1" ondragstart="dragstart_handler(event);" draggable="true">Drag Item 1 to the Drop Zone</li>
   <li id="i2" ondragstart="dragstart_handler(event);" draggable="true">Drag Item 2 to the Drop Zone</li>
 </ul>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考链接

{{page("/en-US/docs/Web/API/DataTransfer", "See also")}}
