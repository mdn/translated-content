---
title: DataTransfer.types
slug: Web/API/DataTransfer/types
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.types`** 是只读属性。它返回一个我们在[`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event)事件中设置的拖动数据格式 (如 {{domxref("DOMString","字符串")}}) 的数组。格式顺序与拖动操作中包含的数据顺序相同。

这些格式是指定数据类型或格式的 Unicode 字符串，通常由 MIME 类型给出。一些非 MIME 类型的值是由于历史遗留原因（例如“text”）而特殊设置的。

## 语法

```plain
dataTransfer.types;
```

### 返回值

拖动操作中使用的数据格式数组。每种格式都是{{domxref("DOMString","字符串")}}类型。如果拖动操作不包含数据，则此数组列表将为空。如果拖动操作中包含任何文件，则其中一个类型将是 `Files`。

## 示例

这个例子展示 `types` 和 {{domxref("DataTransfer.items","items")}} 属性的用法

```html
<!doctype html>
<html lang="en">
  <title>Examples of DataTransfer.{types,items} properties</title>
  <meta content="width=device-width" />
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

      // Add this element's id to the drag payload so the drop handler will
      // know which element to add to its tree
      ev.dataTransfer.setData("text/plain", ev.target.id);
      ev.dataTransfer.effectAllowed = "move";
    }

    function drop_handler(ev) {
      console.log("drop: target.id = " + ev.target.id);
      ev.preventDefault();

      // Get the id of the target and add the moved element to the target's DOM
      const data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));

      // Print each format type
      for (let i = 0; i < ev.dataTransfer.types.length; i++) {
        console.log(`… types[${i}] = ${ev.dataTransfer.types[i]}`);
      }

      // Print each item's "kind" and "type"
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        console.log(
          `… items[${i}].kind = ${ev.dataTransfer.items[i].kind}; type = ${ev.dataTransfer.items[i].type}`,
        );
      }
    }

    function dragover_handler(ev) {
      console.log("dragOver");
      ev.preventDefault();
      // Set the dropEffect to move
      ev.dataTransfer.dropEffect = "move";
    }
  </script>
  <body>
    <h1>
      Examples of <code>DataTransfer</code>.{<code>types</code>,
      <code>items</code>} properties
    </h1>
    <ul>
      <li id="i1" ondragstart="dragstart_handler(event);" draggable="true">
        Drag Item 1 to the Drop Zone
      </li>
      <li id="i2" ondragstart="dragstart_handler(event);" draggable="true">
        Drag Item 2 to the Drop Zone
      </li>
    </ul>
    <div
      id="target"
      ondrop="drop_handler(event);"
      ondragover="dragover_handler(event);">
      Drop Zone
    </div>
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
- [推荐的拖拽类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 测试——粘贴或拖拽](https://codepen.io/tech_query/pen/MqGgap)
