---
title: 拖拽和放置多个项目
slug: Web/API/HTML_Drag_and_Drop_API/Multiple_items
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

> **警告：** 所有带有 **moz** 前缀的属性和方法（例如 **mozSetDataAt()** ）都是 Gecko 浏览器引擎所特有的接口。这些接口只能在基于 Gecko 引擎的浏览器上使用。

Mozilla 提供了一些额外的非标准方法来支持多个元素的拖拽。这些方法中映射了 {{domxref("DataTransfer.types","types")}} 属性以及 {{domxref("DataTransfer.getData","getData()")}}，{{domxref("DataTransfer.setData","setData()")}} 和 {{domxref("DataTransfer.clearData","clearData()")}} 方法。不过，这些方法可以接受额外的参数来指定需要获取、修改或是移除的元素的下标。

本文中描述的拖拽过程均使用 {{domxref("DataTransfer")}} 接口。该过程不会使用 {{domxref("DataTransferItem")}} 接口，也不会使用 {{domxref("DataTransferItemList")}} 接口。

## 基于索引的添加和获取

{{domxref("DataTransfer.mozSetDataAt","mozSetDataAt()")}} 方法可以让你在 {{event("dragstart")}} 事件里添加多个元素。该函数功能类似于 {{domxref("DataTransfer.setData","setData()")}}。

```
var dt = event.dataTransfer;
dt.mozSetDataAt("text/plain", "Data to drag", 0);
dt.mozSetDataAt("text/plain", "Second data to drag", 1);
```

上面这个例子添加了两个可拖拽元素的各一条数据项。函数的最后一个参数表示元素的索引。你应该按照从零开始的顺序依次指定元素的索引，但是你可以使用你已经添加过的索引来替换已有的元素。使用 0 当作索引就相当于调用 {{domxref("DataTransfer.setData","setData()")}}。

你可以使用 {{domxref("DataTransfer.mozClearDataAt","mozClearDataAt()")}} 方法来移除一个拖拽元素上的一个数据项。

```
event.dataTransfer.mozClearDataAt("text/plain", 1);
```

注意：移除一个元素中的全部类型的数据项后将会使整个元素移除，导致后面的元素往前移动，索引将会产生变化（相应减小）。例如：

```
var dt = event.dataTransfer;
dt.mozSetDataAt("text/uri-list", "URL1", 0);
dt.mozSetDataAt("text/plain",    "URL1", 0);
dt.mozSetDataAt("text/uri-list", "URL2", 1);
dt.mozSetDataAt("text/plain",    "URL2", 1);
dt.mozSetDataAt("text/uri-list", "URL3", 2);
dt.mozSetDataAt("text/plain",    "URL3", 2);
// [item1] data=URL1, index=0
// [item2] data=URL2, index=1
// [item3] data=URL3, index=2
```

当你添加完三个元素，且每个元素中包含两种数据类型，

```
dt.mozClearDataAt("text/uri-list", 1);
dt.mozClearDataAt("text/plain", 1);
```

当你移除了第二个元素中的所有数据项时，第二个元素就会被整个移除，原来的第三个元素变成了新的第二个元素，索引也相应变成了 2。

```
// [item1] data=URL1, index=0
// [item2] data=URL3, index=1
```

幸运的是，你基本不需要进行移除数据项的操作；通常情况下你只需在必要的时候把它加入其中。

比较常见的使用多元素拖拽的场景，例如多个文件或者多个书签的拖拽中，记得给每个元素设置合适的数据项类型。尽管不是必须的，但你应该为所有元素设置一致的数据项类型，这可以确保目标元素接收到和预期一致的数据。

你可以通过检查 {{domxref("DataTransfer.mozItemCount","mozItemCount")}} 属性来判断是否有多个元素被拖拽。该属性的值等于当前被拖拽的元素的个数。如果某个拖拽的目标元素只接受单个拖拽元素，它可以直接拒绝这次拖拽操作或者只接受其中的第一个元素。若需要拒绝这些元素，你可以不阻止 {{event("dragover")}} 事件，或者设置 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性为 `none`。最好将两者结合使用，因为有可能另一个监听函数已经阻止了事件。

若只接受拖拽的第一个元素，可以使用 {{domxref("DataTransfer.getData","getData()")}} 方法，就和处理单个元素一样。拖拽的目标只需支持单个元素的拖拽而无需任何额外的操作就可以适用于这个场景。

同时，你也可以使用 {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} 方法来获取指定的拖拽元素。下面这个例子展示了如何获取到拖拽元素中的所有文件类型数据，并将他们加入到一个数组中。

```
function onDrop(event)
{
  var files = [];
  var dt = event.dataTransfer;
  for (var i = 0; i < dt.mozItemCount; i++)
    files.push(dt.mozGetDataAt("application/x-moz-file", i));
}
```

如果你想知道指定的类型在某个元素上是否存在，你可以使用 {{domxref("DataTransfer.mozTypesAt","mozTypesAt")}} 方法。与{{domxref("DataTransfer.types","types")}} 属性类似，它返回元素的数据类型列表。访问 {{domxref("DataTransfer.types","types ")}} 属性就相当于取索引为 0 的元素的数据类型列表。

```
var types = event.dataTransfer.mozTypesAt(1);
```

## 拖拽非字符串的数据

上述方法不仅限于字符串类型的数据；你可以为数据指定任意类型。例如，文件数据使用 [application/x-moz-file](/En/DragDrop/Recommended_Drag_Types#file) 类型，存储为 [nsIFile](/zh-CN/XPCOM_Interface_Reference/nsIFile) 对象。但是因为 {{domxref("DataTransfer.setData","setData()")}} 方法只支持字符串，所以在这种情况下不能用来指定文件。应该使用的是 {{domxref("DataTransfer.mozSetDataAt","mozSetDataAt()")}} 方法。

```
dt.mozSetDataAt("application/x-moz-file", file, 0);
```

通过使用这个方法，你可以传输任意的对象，尽管你可能不需要支持多元素的拖拽，但还是应该传入 0 当作索引。

同样的，你将需要使用 {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} 方法来获取这个文件对象或是任何其他对象。如果你使用 {{domxref("DataTransfer.getData","getData()")}} 方法，非字符类型数据将可能会使你得到一个空字符串。不过一些简单类型，像数字，是可以被转换成字符串的，所以在这种情况下使用 {{domxref("DataTransfer.getData","getData()")}} 是安全的。

## 举个例子

下面这个例子中，实现了一个盒子可以把拖拽到上面的元素以及他们的类型都展示出来。

```
<html>
<head>
<script>

function dodrop(event)
{
  var dt = event.dataTransfer;
  var count = dt.mozItemCount;
  output("Items: " + count + "\n");

  for (var i = 0; i < count; i++) {
    output(" Item " + i + ":\n");
    var types = dt.mozTypesAt(i);
    for (var t = 0; t < types.length; t++) {
      output("  " + types[t] + ": ");
      try {
        var data = dt.mozGetDataAt(types[t], i);
        output("(" + (typeof data) + ") : <" + data + " >\n");
      } catch (ex) {
        output("<<error>>\n");
        dump(ex);
      }
    }
  }
}

function output(text)
{
  document.getElementById("output").textContent += text;
  dump(text);
}

</script>
</head>
<body>

<div id="output" style="min-height: 100px; white-space: pre; border: 1px solid black;"
     ondragenter="document.getElementById('output').textContent = ''; event.stopPropagation(); event.preventDefault();"
     ondragover="event.stopPropagation(); event.preventDefault();"
     ondrop="event.stopPropagation(); event.preventDefault(); dodrop(event);">

<div>

 Fix</div>
</div>

</body>
</html>
```

这个例子中通过调用 {{domxref("Event.preventDefault","preventDefault()")}} 方法，阻止了 `{{event("dragenter")}}` 和 `{{event("dragover")}}` 事件。这使放置事件可以在该的元素上被触发。

当放下一个元素时， `dodrop` 事件处理函数将会被调用。它会检查 {{domxref("DataTransfer.mozItemCount","mozItemCount")}} 属性来获取有多少元素被放下并且遍历他们。对于每个元素，都会通过调用 {{domxref("DataTransfer.mozTypesAt","mozTypesAt()")}} 方法来获得类型列表。数据类型列表也将被遍历以获取到所有和被拖拽元素相关的信息。

当你希望检查所有拖拽元素含有的数据时，这个流程是很有用的。只需要将元素拖拽到目标上就可以看到被拖拽元素本身以及它的类型和包含的数据。

## See also

- [HTML Drag and Drop API (Overview)](/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](Web/Guide/HTML/Drag_operations)
- [Recommended Drag Types](/Web/Guide/HTML/Recommended_Drag_Types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
