---
title: FileSystemHandle：remove() 方法
slug: Web/API/FileSystemHandle/remove
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}{{Non-standard_header}}

{{domxref("FileSystemHandle")}} 接口的 **`remove()`** 方法用于向底层文件系统请求移除句柄所代表的的条目。

`remove()` 方法允许你用对应的句柄直接移除一个文件或一个目录。如果没有这个方法，你就必须先获取句柄的父目录，然后调用其上的 {{domxref("FileSystemDirectoryHandle.removeEntry()")}} 来移除文件或目录。

你也可以在[源私有文件系统](/zh-CN/docs/Web/API/File_System_API#源私有文件系统)的根目录上调用 `remove()` 来清除其内容，此后一个新的空源私有文件系统会被创建。

## 语法

```js-nolint
remove(options)
```

### 参数

- `options` {{optional_inline}}
  - : 一个对象，指定移除操作的选项，可包含以下属性：
    - `recursive` {{optional_inline}}
      - : 布尔值，默认为 `false`。当设为 `true` 并且条目是一个目录时，目录的内容将会被递归移除。

### 返回值

一个 {{jsxref("Promise")}} 对象，会兑现一个 `undefined` 值。

### 异常

- `InvalidModificationError` {{domxref("DOMException")}}
  - : 如果 `recursive` 被设为 `false` 并且要移除的条目是包含子项的目录时，会抛出此异常。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 如果浏览器无法获得该条目的独占锁定，则抛出此异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus')}} 不为 `granted`，抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果找不到该条目则抛出此异常。

## 示例

我们的 [FileSystemHandle.remove() 演示](https://filesystemhandle-remove.glitch.me/)（参阅[源代码](https://glitch.com/edit/#!/filesystemhandle-remove)）是个用于创建文件的应用。你可以在 {{htmlelement("textarea")}} 中输入文本然后按下“Save file” {{htmlelement("button")}}，然后应用会打开一个文件选择器以允许你将输入的文本保存到你在你的本地文件系统中选择的文件。你还可以删除你创建的文件。

这个应用不能让你查看创建出的文件的内容，也无法在重载或关闭页面后仍然保持与底层文件系统同步。也就是说，如果你不在重载或关闭标签页前删除你创建的文件，那这些文件仍然会存留于你的文件系统中。

如果你要创建一个新文件，所出现的文件选择器、文件句柄以及文件本身都是通过 {{domxref("window.showSaveFilePicker()")}} 创建的。文件的文本则是通过 {{domxref("FileSystemFileHandle.createWritable()")}} 写入的。

一旦在文件系统上创建了一个文件，应用便会创建一个条目（参阅源代码中的 `processNewFile()`）：

- 对文件句柄的引用存放在一个名为 `savedFileRefs` 的数组中，以便此后引用。
- UI 中的“Saved files”标题下会添加一个列表项，上面会显示文件名，旁边还有一个“Delete”按钮。

当按下“Delete”按钮时，会执行 `deleteFile()` 函数，其内容如下：

```js
async function deleteFile(e) {
  for (const handle of savedFileRefs) {
    if (handle.name === e.target.id + ".txt") {
      await handle.remove();
      savedFileRefs = savedFileRefs.filter(
        (handle) => handle.name !== e.target.id + ".txt",
      );
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
}
```

流程如下：

1. 对于每个保存在 `savedFileRefs` 数组中的文件句柄，我们会检查其名称是否与触发事件的按钮的 `id` 属性相符。
2. 当找到一个相符项时，我们在对应句柄上执行 `FileSystemHandle.remove()` 以从底层文件系统中移除文件。
3. 我们也要从 `savedFileRefs` 数组中移除对应的句柄。
4. 最后，我们从 UI 中移除与该文件相关的列表项。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [FileSystemHandle.remove() 演示](https://filesystemhandle-remove.glitch.me/)
