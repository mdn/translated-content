---
title: File drag and drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML 拖放接口使得 web 应用能够在网页中拖放文件。这篇文档介绍了 web 应用如何接受从底层平台的文件管理器拖动一个或多个文件到网页的操作。

拖放的主要步骤是为 [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件定义一个*释放区*(释放文件的目标元素) 和为[`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event)事件定义一个事件处理程序。下面描述了这些步骤，包括示例程序片段。完整的源码在[MDN's drag-and-drop repository](https://github.com/mdn/dom-examples/tree/master/drag-and-drop) (欢迎提交 pull requests 和/或 issues).

注意：{{domxref("HTML_Drag_and_Drop_API","HTML drag and drop")}}定义了两套不同的 API 来支持拖放文件。一个{{domxref("DataTransfer")}}接口和另一个{{domxref("DataTransferItem")}}与{{domxref("DataTransferItemList")}}接口。这个示例介绍了这两种 API 的用法 (没有使用任何 Gecko 专用的接口)。

## 定义拖放区域

触发 [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件的目标元素需要一个{{domxref("GlobalEventHandlers.ondrop","ondrop")}} 事件处理函数。下面这一段代码以一个 {{HTMLelement("div")}} 元素为例展示了这些工作是如何完成的：

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this Drop Zone ...</p>
</div>
```

一般来说，在实际应用中需要定义一个 [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件的处理函数并在其中加入关闭浏览器默认拖放行为的代码。你需要定义一个 {{domxref("GlobalEventHandlers.ondragover","ondragover")}} 事件处理函数：

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this Drop Zone ...</p>
</div>
```

最后，在实际应用中可能需要给实现释放文件的元素加些样式来从视觉上向使用者说明这是一个有效释放区域。在这个示例中，实现释放文件的元素将使用如下样式：

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **备注：** 注意当执行将文件拖入浏览器的操作时操作系统并不会触发 `dragstart` 和 `dragend` 事件。

## 执行释放事件

当用户释放文件时 [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件将会被触发。在下面的 drop 处理函数中，如果浏览器支持 {{domxref("DataTransferItemList")}} 接口，则可以使用 {{domxref("DataTransferItem.getAsFile","getAsFile()")}} 来获取每个文件；否则使用 {{domxref("DataTransfer")}} 接口的 {{domxref("DataTransfer.files","files")}} 属性来获取每个文件。

这个示例展示了如何讲每个被拖动的文件的名字输出到控制台。在实际应用中可能会用到 {{domxref("File","File API")}} 来处理一个文件。

注意在这个例子中，任何被拖动的非文件内容都会被忽略。

```js
function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === "file") {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log("... file[" + i + "].name = " + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log(
        "... file[" + i + "].name = " + ev.dataTransfer.files[i].name,
      );
    }
  }
}
```

## 阻止浏览器的默认释放行为

下面的 [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件处理函数调用 {{domxref("Event.preventDefault","preventDefault()")}} 来关闭浏览器的默认拖动和释放行为。

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

## 参见

- [HTML Drag and Drop API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/zh-CN/docs/Web/Guide/HTML/Drag_operations)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
