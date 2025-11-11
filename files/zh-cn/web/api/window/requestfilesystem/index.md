---
title: Window.requestFileSystem()
slug: Web/API/Window/requestFileSystem
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

这个非标准 {{domxref("Window")}} **`requestFileSystem()`** 方法是谷歌浏览器内核用来让 web 站点或 app 获得通过沙箱访问文件系统 . 它返回 {{domxref("FileSystem")}} 然后就可以和 [file system APIs](/zh-CN/docs/Web/API/File_and_Directory_Entries_API) 一起使用了

> [!NOTE]
> 在所有实现该方法的浏览器中，其都带有 `webkit` 前缀。

## 语法

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### 参数

- `type`
  - : 要请求的存储类型。指定`Window.TEMPORARY` 浏览器自行决定要不要删除文件，例如低内存，或者`Window.PERSISTENT` 如果你需要文件保持在这个地方必须用户或站点或 app 明确许可。持久存储要求用户授予站点配额
- `size`
  - : 你希望你的 app 被允许的使用空间大小。
- `successCallback`
  - : 成功获取文件系统时调用的函数。回调接收单个参数：一个 {{domxref("FileSystem")}} 表示应用程序有权使用的文件系统的对象。
- `errorCallback` {{optional_inline}}
  - : 一个可选参数，指定在试图获取文件系统时发生错误或用户拒绝创建或访问文件系统的权限时调用的函数。回调接收单个参数作为输入：一个{{domxref("FileError")}}用来描述错误的对象

### 返回值

无返回值

## 示例

## 规范

此方法已从 [文件与目录条目 API](https://wicg.github.io/entries-api/) 提案中移除，因此它没有成为 W3C 或者 WHATWG 的官方规范。它不再有望成为标准。

## 浏览器兼容性

{{Compat}}
