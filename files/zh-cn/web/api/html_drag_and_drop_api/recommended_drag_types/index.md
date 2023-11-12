---
title: 推荐拖动类型
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML 拖放支持拖动各种类型的数据，包括纯文本，URL，HTML 代码，文件等。该文档描述了拖放常见数据类型的最佳做法。

> **警告：** 本文档中包含一个**moz**前缀的所有方法和属性 (如**mozSetDataAt()**) 是 Gecko 的具体接口。这些接口仅适用于基于 Gecko 的浏览器。

## 拖动文字

拖动文字时请使用 `text/plain` 类型，那么数据必须是字符串，例如：

```
event.dataTransfer.setData("text/plain", "This is text to drag")
```

拖动文本框中的文字和页面选中部分的文字是自动完成的，所以你不需要手动处理这些拖动。

如果应用和拖动目标不支持其他类型，推荐你使用 `text/plain` 类型的数据进行填充，否则将没有默认的替代文字。建议总是在最后添加原始文字类型的数据做为备选项（译者 plter 注：如果拖动开始时没有设置数据，则在有些浏览器中后续拖动相关事件可能不会触发）。

注：在旧代码中，可能会使用 `text/unicode` 或者 `Text` 类型，这两个与 `text/plain` 是一样的，并且应该被替换用于存储和提取数据。

## 拖动链接

Links should include data of two types; the first should be the URL using the type `text/uri-list`, and the second is the URL using the `text/plain` type. Both types should use the same data, the URL of the link. For example:

```
var dt = event.dataTransfer;
dt.setData("text/uri-list", "http://www.mozilla.org");
dt.setData("text/plain", "http://www.mozilla.org");
```

As usual, set the `text/plain` type last as it is less specific than the uri type.

Note: the URL type is `uri-list` with an 'I', not with an 'L'.

To drag multiple links, you can also separate each link with a linebreak. A line that begins with a number sign (#) is a comment and should not be considered a valid URL. You can use a comment to indicate the purpose of a link, or to hold the title associated with a link. The `text/plain` version of the drag data should include all links but should not include the comments.

For example:

```
http://www.mozilla.org
#A second link
http://www.example.com
```

This sample `text/uri-list` data contains two links and a comment.

When retrieving a dropped link, you should ensure you handle the case where multiple links may have been dragged, including any comments that appear in the data. For convenience, the special type `URL` may be used to refer to the first valid link within the data for the `text/uri-list` type. You should not add data using the `URL` type; attempting to do so will just set the value of the `text/uri-list` type instead.

```
var url = event.dataTransfer.getData("URL");
```

You may also see data using the Mozilla specific type `text/x-moz-url`. If it appears, it should be used before the `text/uri-list` type. It holds the URL of the link followed by the title of the link, separated by a linebreak. For example:

```
http://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## 拖动 HTML 和 XML

HTML content may use the `text/html` type. The data for this type should be the serialized HTML to drag. For instance, it would be suitable to set the data value for this type to the value of the {{domxref("Element.innerHTML","innerHTML")}} property of an element.

XML content may use the `text/xml` type, but you should ensure that the data value is well-formed XML.

You may also include a plain text representation of the HTML or XML data using the `text/plain` type. The data should be just the text and should not include any of the source tags or attributes. For instance:

```
var dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

## 拖动文件

A local file is dragged using the `application/x-moz-file` type with a data value that is an [nsIFile](/zh-CN/XPCOM_Interface_Reference/nsIFile) object. Non-privileged web pages are not able to retrieve or modify data of this type. Because a file is not a string, you must use the {{domxref("DataTransfer.mozSetDataAt","mozSetDataAt()")}} method to assign the data. Similarly, when retrieving the data, you must use the {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} method.

```
event.dataTransfer.mozSetDataAt("application/x-moz-file", file, 0);
```

If possible, you may also include the file URL of the file using both the `text/uri-list` and/or `text/plain` types. These types should be added last so that the more specific `application/x-moz-file` type has higher priority.

The following example shows how to create an area for receiving dropped files:

```
<listbox ondragenter="return checkDrag(event)"
         ondragover="return checkDrag(event)"
         ondrop="doDrop(event)"/>

<script>
function checkDrag(event)
{
  return event.dataTransfer.types.contains("application/x-moz-file");
}

function doDrop(event)
{
  var file = event.dataTransfer.mozGetDataAt("application/x-moz-file", 0);
  if (file instanceof Components.interfaces.nsIFile)
    event.currentTarget.appendItem(file.leafName);
}
</script>
```

In this example, the event returns false only if the data transfer contains the `application/x-moz-file` type. During the drop event, the data associated with the file type is retrieved, and the filename of the file is added to the listbox. Note that the `instanceof` operator is used here as the {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} method will return an `nsISupports` that needs to be checked and converted into an nsIFile. This is also a good extra check in case someone made a mistake and added a non-file for this type.

### 更新 DataTransfer.types

Note that the latest spec now dictates that {{domxref("DataTransfer.types")}} should return a frozen array of {{domxref("DOMString")}}s rather than a {{domxref("DOMStringList")}} (this is supported in Firefox 52 and above).

As a result, the [contains](/zh-CN/docs/Web/API/Node/contains) method no longer works on the property; the [includes](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method should be used instead to check if a specific type of data is provided, using code like the following:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

You could always use some feature detection to determine which method is supported on `types`, and run code as appropriate.

## 拖动图像

Direct image dragging is not commonly done. In fact, Mozilla does not support direct image dragging on Mac or Linux platforms. Instead, images are usually dragged only by their URLs. To do this, use the `text/uri-list` type as with other URL links. The data should be the URL of the image or a data URL if the image is not stored on a web site or disk. For more information about data URLs, see [the data URL scheme](/zh-CN/data_URIs).

As with other links, the data for the `text/plain` type should also contain the URL. However, a data URL is not usually as useful in a text context, so you may wish to exclude the `text/plain` data in this situation.

In chrome or other privileged code, you may also use the `image/jpeg`, `image/png` or `image/gif` types, depending on the type of image. The data should be an object which implements the [nsIInputStream](/zh-CN/XPCOM_Interface_Reference/nsIInputStream) interface. When this stream is read, it should provide the data bits for the image, as if the image was a file of that type.

You should also include the `application/x-moz-file` type if the image is located on disk. In fact, this a common way in which image files are dragged.

It is important to set the data in the right order, from most specific to least specific. The image type such as `image/jpeg` should come first, followed by the `application/x-moz-file` type. Next, you should set the `text/uri-list` data and finally the `text/plain` data. For example:

```
var dt = event.dataTransfer;
dt.mozSetDataAt("image/png", stream, 0);
dt.mozSetDataAt("application/x-moz-file", file, 0);
dt.setData("text/uri-list", imageurl);
dt.setData("text/plain", imageurl);
```

Note the {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} method is used for non-text data. As some contexts may only include some of these types, it is important to check which type is made available when receiving dropped images.

## 拖动节点

Nodes and elements in a document may be dragged using the `application/x-moz-node` type. The data for the type should be a DOM node. This allows the drop target to receive the actual node where the drag was started from. Note that callers from a different domain will not be able to access the node even when it has been dropped.

You should always include a plain text alternative for the node.

## 拖动自定义数据

You can also use other types that you make up for custom purposes. You should strive to always include a plain text alternative unless that object being dragged is specific to a particular site or application. In this case, the custom type ensures that the data cannot be dropped elsewhere.

## 将文件拖动到一个操作系统文件夹

There are cases in which you may want to add a file to an existing drag event session, and you may also want to write the file to disk when the drop operation happens over a folder in the operating system when your code receives notification of the target folder's location. This only works in extensions (or other privileged code) and the data type "application/moz-file-promise" should be used. The following sample offers an overview of this advanced case:

```js
// currentEvent is a given existing drag operation event

currentEvent.dataTransfer.setData("text/x-moz-url", URL);
currentEvent.dataTransfer.setData("application/x-moz-file-promise-url", URL);
currentEvent.dataTransfer.setData(
  "application/x-moz-file-promise-dest-filename",
  leafName,
);
currentEvent.dataTransfer.mozSetDataAt(
  "application/x-moz-file-promise",
  new dataProvider(success, error),
  0,
  Components.interfaces.nsISupports,
);

function dataProvider() {}

dataProvider.prototype = {
  QueryInterface: function (iid) {
    if (
      iid.equals(Components.interfaces.nsIFlavorDataProvider) ||
      iid.equals(Components.interfaces.nsISupports)
    )
      return this;
    throw Components.results.NS_NOINTERFACE;
  },
  getFlavorData: function (aTransferable, aFlavor, aData, aDataLen) {
    if (aFlavor == "application/x-moz-file-promise") {
      var urlPrimitive = {};
      var dataSize = {};

      aTransferable.getTransferData(
        "application/x-moz-file-promise-url",
        urlPrimitive,
        dataSize,
      );
      var url = urlPrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;
      console.log("URL file orignal is = " + url);

      var namePrimitive = {};
      aTransferable.getTransferData(
        "application/x-moz-file-promise-dest-filename",
        namePrimitive,
        dataSize,
      );
      var name = namePrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;

      console.log("target filename is = " + name);

      var dirPrimitive = {};
      aTransferable.getTransferData(
        "application/x-moz-file-promise-dir",
        dirPrimitive,
        dataSize,
      );
      var dir = dirPrimitive.value.QueryInterface(
        Components.interfaces.nsILocalFile,
      );

      console.log("target folder is = " + dir.path);

      var file = Cc["@mozilla.org/file/local;1"].createInstance(
        Components.interfaces.nsILocalFile,
      );
      file.initWithPath(dir.path);
      file.appendRelativePath(name);

      console.log("output final path is =" + file.path);

      // now you can write or copy the file yourself...
    }
  },
};
```

## 参见

- [HTML Drag and Drop API (Overview)](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/zh-CN/docs/Web/Guide/HTML/Drag_operations)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
