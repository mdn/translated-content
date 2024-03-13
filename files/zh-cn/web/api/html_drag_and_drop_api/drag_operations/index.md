---
title: 拖拽操作
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

本文描述了拖放操作中发生的步骤。

本文档中描述的拖动操作使用 {{domxref("DataTransfer")}} 接口。本文档不使用 {{domxref("DataTransferItem")}} 接口和 {{domxref("DataTransferItemList")}} 接口。

## 可拖拽（`draggable`）属性

在一个网页中，有几种特定情况会使用默认拖拽行为，其中包括拖拽选中文本、拖拽图像和拖拽链接。当一个图像或链接被拖拽时，图像或链接的 URL 被设定为拖拽数据。对于其他元素，只当它们是被选中的一部分时，才会触发默认拖拽行为。如果想看看拖拽实际的样子，可以选中网页的一部分，然后按住鼠标，拖动选中的目标。选中的部分根据系统的不同会有不同的渲染效果，并在拖拽时跟随着鼠标指针。然而，这只是默认拖拽行为的效果，此时没有监听程序调整拖拽数据。

在 HTML 中，除了图像、链接和选择的文本默认的可拖拽行为之外，其他元素在默认情况下是不可拖拽的。

要使其他的 HTML 元素可拖拽，必须做三件事：

- 将想要拖拽的元素的 [`draggable`](/zh-CN/docs/Web/HTML/Global_attributes#draggable) 属性设置成 `"true"`。
- 为 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件添加一个监听程序。
- 在上一步定义的监听程序中 {{domxref("DataTransfer.setData","设置拖拽数据")}}。

下面的例子允许拖拽一个段落的内容：

```
<p draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</p>
```

属性 [`draggable`](/zh-CN/docs/Web/HTML/Global_attributes#draggable) 设置为 `"true"`，所以这个元素变成可拖拽的。如果该属性被省略或被设置为 `"false"`，则该元素将不可拖拽，此时拖拽只会选中文本。

[`draggable`](/zh-CN/docs/Web/HTML/Global_attributes#draggable) 属性可在任意元素上设置，包括图像和链接。然而，对于后两者，该属性的默认值是 `true`，所以你只会在禁用这二者的拖拽时使用到 [`draggable`](/zh-CN/docs/Web/HTML/Global_attributes#draggable) 属性，将其设置为 `false`。

> **备注：** 当一个元素被设置成可拖拽时，元素中的文本和其他子元素不能再以正常的方式（通过鼠标点击和拖拽）被选中。用户必须按住 <kbd>alt</kbd> 键，再用鼠标选择文本，或者使用键盘选择。

## 开始拖拽操作

这个例子使用 {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} 属性为 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件添加监听程序。

```
<p draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</p>
```

当用户开始拖拽时，会触发 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件。

在这个例子中，{{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件监听程序被添加到可拖拽元素本身；然而，你可以监听一个祖先元素，因为就像大多数其他事件一样，拖拽事件会冒泡。

在 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件中，你可以指定拖拽数据、反馈图像和拖拽效果，所有这些都将在下面描述。不过，我们只需要设置拖拽数据，因为在大多数情况下默认的图像和拖拽效果都是适用的。

## 拖拽数据

所有{{domxref("DragEvent","拖拽事件")}}都有一个名为 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 的属性，它持有拖拽数据（`dataTransfer` 是一个 {{domxref("DataTransfer")}} 对象）。

当拖拽发生时，数据必须与被拖拽的项目相关联。例如，当在文本框中拖拽选定的文本时，与拖拽数据项相关联的数据就是文本本身。类似地，当在 Web 页面上拖拽链接时，拖拽数据项就是链接的 URL。

{{domxref("DataTransfer")}} 包含两个信息，数据的类型（或格式）和数据值。格式是一个类型字符串（例如文本数据的格式是 [`text/plain`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#text)），值是一个文本字符串。拖拽开始时，你提供数据类型和数据值。在拖拽过程中，在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 和 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件监听程序中，你使用拖拽数据的类型来检查是否允许放置（drop）。例如，接受链接的放置目标将检查链接类型 [`text/uri-list`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#link)。在放置事件中，监听程序将取回拖拽数据，并将其插入到放置位置。

{{domxref("DataTransfer")}} 的 {{domxref("DataTransfer.types","types")}} 属性返回一个类似 {{domxref("DOMString")}} 的 MIME-type 的列表，如 [`text/plain`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#text) 或 [`image/jpeg`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#image)。你还可以创建自己的类型。最常用的类型列在文章 [推荐拖拽类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) 中。

一次拖拽可能包括几个不同类型的数据项。这使得数据可以更具体的类型提供，通常是自定义类型，但若放置目标不支持这些具体类型，则会提供回退（fallback）数据。通常情况下，最不具体的类型是 [`text/plain`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#text) 类型的普通文本数据，即一些简单的文本表示。

要在 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 中设置拖拽数据项，使用 {{domxref("DataTransfer.setData","setData()")}} 方法。这个方法接收两个参数，即数据类型和数据值。例如：

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

在这个例子中，数据值是“Text to drag”，数据类型是 [`text/plain`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#text) 格式。

你可以提供多种格式的数据。要做到这一点，可以用不同的格式多次调用 {{domxref("DataTransfer.setData","setData()")}} 方法。你应该传入尽量具体的格式。

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "http://www.mozilla.org");
dt.setData("text/plain", "http://www.mozilla.org");
```

在这里，数据被添加到三种不同的类型中。第一个类型 `application/x-bookmark` 是一种自定义类型。其他应用程序不会支持这个类型，但你可以在同一站点或同以应用程序之间使用自定义类型。

通过提供其他类型的数据，我们还可使用不那么具体的形式支持拖拽到其他应用程序。`application/x.bookmark` 类型可以提供更多的数据，以便在应用程序中使用，而另两个类型则只包含一个 URL 或文本版本。

注意，在本例中，[`text/uri-list`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#link) 和 [`text/plain`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#text) 包含相同的数据。这通常是正确的，但不一定要这么做。

如果你试图以相同的格式添加两次数据，那么新的数据将替换旧的数据。你可以使用 {{domxref("DataTransfer.clearData","clearData()")}} 方法清除这些数据，该方法接收一个参数，即要删除的数据类型。

```js
event.dataTransfer.clearData("text/uri-list");
```

{{domxref("DataTransfer.clearData","clearData()")}} 方法的 `type` 参数是可选的。如果没有声明 `type`，则所有类型的数据都会被删除。如果拖拽不包含拖拽数据项，或者所有的数据项都被清除，那么就不会出现拖拽行为。

## 设置拖拽反馈图像

当拖拽发生时，会生成拖拽目标的一个半透明图像（触发"{{domxref("HTMLElement/dragstart_event", "dragstart")}}" 事件的元素），并在拖拽过程中跟踪鼠标指针。这个图像是自动创建的，所以你不需要自己创建它。但是，你可以使用 {{domxref("DataTransfer.setDragImage","setDragImage()")}} 方法来自定义拖拽反馈图像。

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

这三个参数都是必要的。第一个是图像的引用。这个引用通常是一个 `<img>` 元素，但也可以是 `<canvas>` 或任何其他元素。生成的反馈图像就是该图像在屏幕上的样子，以图像原始的大小绘制。{{domxref("DataTransfer.setDragImage","setDragImage()")}} 方法的第二、三个参数是图像位置相对于鼠标指针位置的偏移量。

也可以使用不在文档中的图像和画布。这种技术在使用 canvas 元素绘制自定义的拖拽反馈图像时非常有用，如下面的例子：

```js
function dragWithCustomImage(event) {
  var canvas = document.createElementNS(
    "http://www.w3.org/1999/xhtml",
    "canvas",
  );
  canvas.width = canvas.height = 50;

  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  var dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(canvas, 25, 25);
}
```

在这个例子中，我们做了一个是画布的拖拽图像。当画布宽 50 像素，高 50 像素时，我们使用一半的偏移量（25 和 25），这样鼠标指针即为图像中心。

## 拖拽效果

拖拽过程中可能会执行一些操作。`copy` 操作用来指示被拖拽的数据将从当前位置复制到放置位置。`move` 操作指示被拖拽的数据会被移动，`link` 操作表示在源和放置位置之间将会创建某种形式的关系或连接。

你可以在 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件监听程序中设置 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性以指定允许拖拽源头执行三种操作中的哪几种。

```js
event.dataTransfer.effectAllowed = "copy";
```

在这个例子中，只允许复制操作。

你可以不同的方式组合这些值：

- `none`
  - : 不允许操作
- `copy`
  - : 只复制
- `move`
  - : 只移动
- `link`
  - : 只链接
- `copyMove`
  - : 复制或移动
- `copyLink`
  - : 复制或链接
- `linkMove`
  - : 链接或移动
- `all`
  - : 复制、移动或链接

注意，这些值必须像上面列出的那样使用。例如，将 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性设置为 `copyMove` 允许复制或移动操作，但阻止用户执行链接操作。属性默认允许以上所有的操作（all），所以你不需要调整这个属性，除非你想要排除某个特定操作。

在拖拽操作期间，{{domxref("HTMLElement/dragenter_event", "dragenter")}} 或 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件的监听程序可以检查 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性，以查看哪些操作是允许的。相关的 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性应该在其中的一个事件中设置，来指定应该执行哪一个单项操作。{{domxref("DataTransfer.dropEffect","dropEffect")}} 是 `none`、`copy`、`move` 或 `link`。这个属性不使用上述的组合值。

在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 和 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件中，{{domxref("DataTransfer.dropEffect","dropEffect")}} 属性被初始化为用户请求的效果。用户可以通过按下修饰键来修改为所需的效果。尽管使用什么修饰键取决于不同的平台，但典型情况下，<kbd>Shift</kbd> 和 <kbd>Ctrl</kbd> 键用于在复制、移动和链接之间切换。鼠标指针会改变样式以指示需要的操作；例如，对于"复制"操作，光标可能会在旁边出现加号。

你可以在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 或 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件期间修改 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性，例如将某个放置目标设置为只支持某些操作。你可以修改 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性来覆盖用户指定的效果，并强制修改为一个特定的放置操作。注意，这个效果必须是 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性中的一个。否则，它将被设置为允许的替代值。

```js
event.dataTransfer.dropEffect = "copy";
```

在这个例子中，放置效果是复制。

你可以使用 `none` 表示在这个位置不允许任何放置，尽管在这种情况下，最好不要取消事件。

在 {{domxref("HTMLElement/drop_event", "drop")}} 和 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件中，你可以检查 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性，以确定最终选择了哪种效果。如果所选的效果是 `"move"`，那么应该在 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件中从拖拽源头删除拖拽数据。

## 指定放置目标

{{domxref("HTMLElement/dragenter_event", "dragenter")}} 或 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件的监听程序用于表示有效的放置目标，也就是被拖拽项目可能放置的地方。网页或应用程序的大多数区域都不是放置数据的有效位置。因此，这些事件的默认处理是不允许放置。

如果你想要允许放置，你必须取消 `dragenter` 和 `dragover` 事件来阻止默认的处理。你可以在属性定义的事件监听程序返回 `false`，或者调用事件的 {{domxref("Event.preventDefault","preventDefault()")}} 方法来实现这一点。在一个独立脚本中的定义的函数里，可能后者更可行。

```html
<div ondragover="return false"></div>
<div ondragover="event.preventDefault()"></div>
```

在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 和 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件中调用 {{domxref("Event.preventDefault","preventDefault()")}} 方法将表明在该位置允许放置。但是，你通常希望只在某些情况下调用 {{domxref("Event.preventDefault","preventDefault()")}} 方法（如只当拖拽的是链接时）。

要做到这一点，调用一个函数以检查条件，并且只在满足条件时取消事件。如果条件未满足，则不取消事件，此时用户释放鼠标按钮不会执行放置。

最常见的是根据数据传输中拖拽数据的类型来接受或拒绝放置——例如，允许放置图像或链接，或者都允许。你可以检查 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性的 {{domxref("DataTransfer.types","types")}} 属性来查看哪些类型允许放置。{{domxref("DataTransfer.types","types")}} 属性返回一个字符串类型的数组，这些字符串类型是在拖拽开始时添加的，顺序是从最重要到最不重要。

```js
function contains(list, value) {
  for (var i = 0; i < list.length; ++i) {
    if (list[i] === value) return true;
  }
  return false;
}

function doDragOver(event) {
  var isLink = contains(event.dataTransfer.types, "text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

在本例中，我们使用 `includes` 方法来检查 [`text/uri-list`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#link) 是否出现在类型列表中。如果出现了，我们将取消这个事件以允许放置。如果拖拽数据不包含链接，则不取消事件，此位置也不允许放置。

如果你希望更具体地限制操作类型，你可能还需要设置 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 或 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性，或者两者都设置。当然，如果你不取消这个事件，改变这两个属性不会有任何效果。

## 放置反馈

有几种方法可以向用户表明哪个位置允许放置。鼠标指针将根据 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性的值做必要的更新。鼠标指针具体的外观取决于用户平台，典型的如加号图标会出现在 '`copy`' 中，而不允许放置时，会出现禁止放置的图标。在许多情况下，鼠标指针反馈就足够了。

但是，你还可以根据需要更新用户界面，如添加一个插入标记或使用高亮显示。对于简单的高亮显示，你可以在放置目标上使用 `-moz-drag-over` CSS 伪类。

```css
.droparea:-moz-drag-over {
  border: 1px solid black;
}
```

在这个例子中，当带有 `droparea` 类的元素是一个有效的放置目标时，即在该元素的 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 事件中调用 {{domxref("Event.preventDefault","preventDefault()")}} 方法时，元素会出现一个 1 像素的黑色轮廓。

> **备注：** 要使这个伪类生效，你必须在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 事件中调用 {{domxref("Event.preventDefault","preventDefault()")}} 方法，因为这个伪类状态不会检查 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件（译者注：即在 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件中调用 {{domxref("Event.preventDefault","preventDefault()")}} 方法也不会使伪类生效，尽管这个伪类叫做“-moz-drag-over”）。

对于更复杂的视觉效果，你可以在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 事件中执行其他操作。例如在放置位置插入一个元素，这样的元素可以表示一个插入标记，或表示被拖拽的元素移动到了新位置。为此你可以在 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 事件中创建一个新元素，然后将其插入到文档中。

{{domxref("HTMLElement/dragover_event", "dragover")}} 事件在鼠标指向的元素上触发。自然，你可能需要将插入标记移动到事件发生的位置附近。你可以使用事件的 {{domxref("MouseEvent.clientX","clientX")}} 和 {{domxref("MouseEvent.clientY","clientY")}} 属性，还有其他鼠标事件的属性来确定鼠标的位置。

最后，{{domxref("HTMLElement/dragleave_event", "dragleave")}} 事件会在拖拽离开元素时在该元素上触发。这是移除插入标记或高亮的好时机。你不需要取消这个事件（译者注：即不需要使用 {{domxref("Event.preventDefault","preventDefault()")}}）。使用 `-moz-drag-over` 伪类设置的高亮或其他视觉效果会被自动移除。即使拖拽被取消了，{{domxref("HTMLElement/dragleave_event", "dragleave")}} 事件也会照常触发，所以你可以确保在这个事件中对任何插入标记的清除操作都一定可以完成。

## 执行放置

当用户放开鼠标，拖放操作就会结束。

如果在有效的放置目标元素（即取消了 {{domxref("HTMLElement/dragenter_event", "dragenter")}} 或 {{domxref("HTMLElement/dragover_event", "dragover")}} 的元素）上放开鼠标，放置会成功实现，{{domxref("HTMLElement/drop_event", "drop")}} 事件在目标元素上被触发。否则，拖拽会被取消，不会触发 {{domxref("HTMLElement/drop_event", "drop")}} 事件。

在 {{domxref("HTMLElement/drop_event", "drop")}} 事件中，你应该取回放置的数据并将其插入到放置的位置。你可以使用 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性来确定需要哪种拖拽操作。

在所有拖拽操作相关的事件中，事件的 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性会一直保存着拖拽数据。可使用 {{domxref("DataTransfer.getData","getData()")}} 方法来取回数据。

```
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

{{domxref("DataTransfer.getData","getData()")}} 方法接收一个参数，取回数据的类型。这个方法会返回拖拽操作开始时调用 {{domxref("DataTransfer.setData","setData()")}} 方法设置的字符串值。如果不存在传入类型的数据，则会返回空字符串。自然，你应该知道哪种类型的数据可用，因为之前你应该已经在 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件中检查过数据类型了。

在上面的例子中，我们一取回数据就把它作为文本内容插入到目标中。实际效果就是拖拽文本被插入到放置位置，假设放置目标是文本区域，例如 `p` 或 `div` 元素。

在一个网页中，如果你想接收一个放置，不想让浏览器的默认处理程序处理放置数据，你应该调用事件的 {{domxref("Event.preventDefault","preventDefault()")}} 方法。例如，当拖拽一个链接到网页时，Firefox 会打开这个链接。而你可以通过取消事件来阻止这样的行为。

你可以取回其他类型的数据。如果数据是一个链接，其类型应为 [`text/uri-list`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#link)。你可以将链接插入到内容中。

```
function doDrop(event) {
  const lines = event.dataTransfer.getData("text/uri-list").split("\n");
  lines.filter(line => !line.startsWith("#"))
    .forEach(line => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      event.target.appendChild(link);
    })
  event.preventDefault();
}
```

这个例子使用拖拽数据插入链接。顾名思义，[`text/uri-list`](/zh-CN/docs/DragDrop/Recommended_Drag_Types#link) 类型可包含一个 URL 列表，每行一个 URL。在上述代码中，我们使用 [split](/zh-CN/docs/JavaScript/Reference/Global_Objects/String/split) 方法将字符串按行分割，然后迭代列表的每一行，将每一个链接都插入到文档中。注意到我们跳过了井号（#）开头的链接，因为那些只是注释。

在简单的情况中，你可以使用一个特别的类型 `URL` 来取回列表中第一个有效的 URL。例如：

```js
var link = event.dataTransfer.getData("URL");
```

这样就不需要检查注释或者迭代每一行了。但这样就只能取回列表中的第一个 URL。

`URL` 类型是一个特别的类型，只作为简写类型，不在 {{domxref("DataTransfer.types","types")}} 属性规定的类型列表中出来。

有时你可能支持不同的格式，而你希望取回数据的格式是支持格式中最具体的一种。在这个例子中，放置目标支持三种格式。

下面的例子返回格式支持最佳的数据：

```
function doDrop(event) {
  const supportedTypes = ["application/x-moz-file", "text/uri-list", "text/plain"];
  const types = event.dataTransfer.types.filter(type => supportedTypes.includes(type));
  if (types.length) {
    const data = event.dataTransfer.getData(types[0]);
  }
  event.preventDefault();
}
```

## 完成拖拽

一旦拖拽完成，{{domxref("HTMLElement/dragend_event", "dragend")}} 事件会在拖拽源头（即触发 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 的元素）上发生。无论拖拽是成功还是被取消，这个事件都会被触发。然而，你可以使用 {{domxref("DataTransfer.dropEffect","dropEffect")}} 属性来决定执行什么放置操作。

如果在 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件中，{{domxref("DataTransfer.dropEffect","dropEffect")}} 属性值为 `none`，则拖拽会被取消。否则，这个属性会规定需要执行什么操作。源头元素可使用这个信息以在拖拽操作完成后从原来的位置移除被拖拽的项目。{{domxref("DataTransfer.mozUserCancelled","mozUserCancelled")}} 属性会在用户取消拖拽（按下 Esc 键）时设置为 true，在拖拽因为其他原因如无效放置目标等被取消时，或拖拽成功时，则设置为 false。

放置可发生在同一窗口或另一个应用程序中。两种情况都会触发 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件。事件的 {{domxref("MouseEvent.screenX","screenX")}} 和 {{domxref("MouseEvent.screenY","screenY")}} 属性会被设置为放置发生时鼠标在屏幕上的坐标。

{{domxref("HTMLElement/dragend_event", "dragend")}} 事件结束后，整个拖放操作就完成了。

\[1] 在 Gecko 内核中，如果源头节点在拖拽过程中（如放置或 {{domxref("HTMLElement/dragover_event", "dragover")}} 中）被移动或移除了，则不会触发 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件。参见 [bug 460801](https://bugzilla.mozilla.org/show_bug.cgi?id=460801)。

## 参见

- [HTML Drag and Drop API (Overview)](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [Recommended Drag Types](/zh-CN/docs/Web/Guide/HTML/Recommended_Drag_Types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
