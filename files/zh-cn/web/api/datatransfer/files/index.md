---
title: DataTransfer.files
slug: Web/API/DataTransfer/files
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.files`**属性在拖动操作中表示{{domxref("FileList","文件列表")}}。如果操作不包含文件，则此列表为空。

此功能可用于将文件从用户桌面拖动到浏览器。

## 语法

```plain
dataTransfer.files;
```

### 返回值

拖动操作中的文件{{domxref("FileList","列表")}}，操作中每个文件的一个列表项。如果拖动操作没有文件，此列表为空。

## 举个例子

这个接口有两个实例：

- 只针对 Firfox: <https://jsfiddle.net/9C2EF/>
- 所有浏览器：[https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
