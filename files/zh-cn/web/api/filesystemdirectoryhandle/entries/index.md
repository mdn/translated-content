---
title: FileSystemDirectoryHandle：entries() 方法
slug: Web/API/FileSystemDirectoryHandle/entries
---

{{securecontext_header}}{{APIRef("File System API")}}

{{domxref("FileSystemDirectoryHandle")}} 接口的 **`entries()`** 方法返回一个异步迭代器，用于迭代给定对象自身可枚举属性`[键, 值]`对，迭代顺序与 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环的迭代顺序一致（不同之处在于 for-in 循环还会枚举原型链中的属性）。

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

迭代给定的 `FileSystemDirectoryHandle` 对象自身可枚举属性`[键, 值]`对的异步迭代器。

## 示例

```js
const dirHandle = await window.showDirectoryPicker();

for await (const [key, value] of dirHandle.entries()) {
  console.log({ key, value });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化本地文件访问](https://web.dev/file-system-access/)
