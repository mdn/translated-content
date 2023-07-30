---
title: DataTransfer.setData()
slug: Web/API/DataTransfer/setData
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.setData()`** 方法用来设置拖放操作的{{domxref("DataTransfer","drag data")}}到指定的数据和类型。

如果给定类型的数据不存在，则将其添加到拖动数据存储的末尾，使得 {{domxref("DataTransfer.types","types")}} 列表中的最后一个项目将是新类型。

如果给定类型的数据已经存在，现有数据将被替换为相同的位置。也就是说，替换相同类型的数据时 {{domxref("DataTransfer.types","types")}}列表的顺序不会更改。

示例数据类型为："`text/plain`" 和 "`text/uri-list`".

## 语法

```
void dataTransfer.setData(format, data);
```

### 参数

- _format_
  - : 一个{{domxref("DOMString")}} 表示要添加到 {{domxref("DataTransfer","drag object")}}的拖动数据的类型。
- _data_
  - : 一个 {{domxref("DOMString")}}表示要添加到 {{domxref("DataTransfer","drag object")}}的数据。

### 返回值

无

## 示例

此示例显示了使用 {{domxref("DataTransfer")}} 对象的 {{domxref("DataTransfer.getData","getData()")}}, {{domxref("DataTransfer.setData","setData()")}} }和{{domxref("DataTransfer.clearData","clearData()")}} 方法。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>DataTransfer.setData()/.getData()/.clearData()</title>
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
  <body>
    <section>
      <h1>
        <code>DataTransfer.setData()</code> <br />
        <code>DataTransfer.getData()</code> <br />
        <code>DataTransfer.clearData()</code>
      </h1>
      <div>
        <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
          Select this element, drag it to the Drop Zone and then release the
          selection to move the element.
        </p>
      </div>
      <div
        id="target"
        ondrop="drop_handler(event);"
        ondragover="dragover_handler(event);">
        Drop Zone
      </div>
    </section>
    <!-- js -->
    <script>
      function dragstart_handler(ev) {
        console.log("dragStart");
        // Change the source element's background color to signify drag has started
        ev.currentTarget.style.border = "dashed";
        // Set the drag's format and data. Use the event target's id for the data
        ev.dataTransfer.setData("text/plain", ev.target.id);
      }

      function dragover_handler(ev) {
        console.log("dragOver");
        // prevent Default event
        ev.preventDefault();
      }

      function drop_handler(ev) {
        console.log("Drop");
        ev.preventDefault();
        // Get the data, which is the id of the drop target
        var data = ev.dataTransfer.getData("text");
        // appendChild
        ev.target.appendChild(document.getElementById(data));
        // Clear the drag data cache (for all formats/types)
        ev.dataTransfer.clearData();
      }
    </script>
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
