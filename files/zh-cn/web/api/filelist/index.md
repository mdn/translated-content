---
title: FileList
slug: Web/API/FileList
---

{{APIRef("File API")}}

一个 FileList 对象通常来自于一个 HTML {{HTMLElement("input")}} 元素的 `files` 属性，你可以通过这个对象访问到用户所选择的文件。该类型的对象还有可能来自用户的拖放操作，查看 [`DataTransfer`](/zh-CN/docs/DragDrop/DataTransfer) 对象了解详情。

> **备注：** 在 Gecko 1.9.2 之前，通过 `input` 元素，每次只能选择一个文件，这意味着该 `input` 元素的 `files` 属性上的 FileList 对象无论如何都只能包含一个文件。从 Gecko 1.9.2 开始，如果一个 `input` 元素拥有 `multiple` 属性，则可以用它来选择多个文件。

## 使用 FileList

所有 type 属性 (attribute) 为 file 的 `<input>` 元素都有一个 files 属性 (property),用来存储用户所选择的文件。例如：

```
<input id="fileItem" type="file">
```

下面的一行代码演示如何获取到一个 FileList 对象中的第一个文件 ([`File`](/zh-CN/docs/Web/API/File) 对象):

```js
var file = document.getElementById("fileItem").files[0];
```

## 方法概述

```
File item(index);
```

## 属性

| 属性名   | 类型      | 描述                                         |
| -------- | --------- | -------------------------------------------- |
| `length` | `integer` | 一个只读的整数值，用来返回列表中的文件数量。 |

## 方法

### `item()`

根据给定的索引值，返回 FileList 对象中对应的 [`File`](/zh-CN/docs/Web/API/File) 对象。

```
 File item(
   index
 );
```

###### 参数

- `index`
  - : File 对象在 FileList 对象中的索引值，从 0 开始。

###### 返回值

所请求的[`File`](/zh-CN/docs/Web/API/File)对象。

## 示例

这个例子迭代了用户通过一个 `input` 元素选择的多个文件：

```js
// fileInput 是一个 HTML input 元素：<input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files 是一个 FileList 对象 (类似于 NodeList 对象)
var files = fileInput.files;
var file;

// 遍历所有文件
for (var i = 0; i < files.length; i++) {
  // 取得一个文件
  file = files.item(i);
  // 这样也行
  file = files[i];
  // 取得文件名
  alert(file.name);
}
```

下面是一个更完整的例子。

```html
<!doctype html>
<html>
  <head> </head>
  <body>
    <!-- multiple 属性允许用户选择多个文件 -->

    <input id="myfiles" multiple type="file" />
  </body>

  <script>
    var pullfiles = function () {
      // love the query selector
      var fileInput = document.querySelector("#myfiles");
      var files = fileInput.files;
      // 获取所选文件数量
      var fl = files.length;
      var i = 0;

      while (i < fl) {
        // localize file var in the loop
        var file = files[i];
        alert(file.name);
        i++;
      }
    };

    // 设置 change 事件处理函数
    document.querySelector("#myfiles").onchange = pullfiles;
  </script>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [如何在 Web 应用程序中使用文件](/zh-CN/docs/Using_files_from_web_applications)
- [`File`](/zh-CN/docs/DOM/File)
- [`FileReader`](/zh-CN/docs/DOM/FileReader)
