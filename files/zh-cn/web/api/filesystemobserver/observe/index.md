---
title: FileSystemObserver：observe() 方法
slug: Web/API/FileSystemObserver/observe
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

{{domxref("FileSystemObserver")}} 接口的 **`observe()`** 方法要求观察器开始观察给定文件或目录的变化。

## 语法

```js-nolint
observe(handle)
observe(handle, options)
```

### 参数

- `handle`
  - : 表示要观察的文件或目录的文件系统条目的句柄。
    - 对于用户可观察的文件系统，这可以是 {{domxref("FileSystemFileHandle")}} 或 {{domxref("FileSystemDirectoryHandle")}}。
    - 对于[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)（OPFS），它可以是 {{domxref("FileSystemFileHandle")}}、{{domxref("FileSystemDirectoryHandle")}} 或 {{domxref("FileSystemSyncAccessHandle")}}。

- `options` {{optional_inline}}
  - : 指定 `observe()` 调用的选项的对象。它可以包含以下属性：
    - `recursive`
      - : 一个布尔值，指定是否要递归观察目录的更改。如果设置为 `true`，则会观察目录本身及其包含的所有子目录和文件的更改。如果设置为 `false`，则仅观察目录本身及其直接包含的文件的更改（即，不包括子目录中的文件）。默认为 `false`。如果 `handle` 表示文件，则此属性无效。

### 返回值

兑现为 {{jsxref('undefined')}} 的 {{jsxref("Promise")}}。

### 异常

- `NotFoundError` {{domxref("DOMException")}}
  - : 如果找不到 `handle` 所表示的文件或目录，则抛出此异常。

## 示例

### 观察文件或目录

假设 `FileSystemObserver` 实例可用，你可以通过调用 `observe()` 开始观察文件系统条目的变化。

你可以通过向 `observe()` 传入 {{domxref("FileSystemFileHandle")}} 或 {{domxref("FileSystemDirectoryHandle")}} 来观察用户可观察文件系统或[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)（OPFS）中的文件或目录。例如，当要求用户使用 {{domxref("Window.showSaveFilePicker()")}} 或 {{domxref("Window.showDirectoryPicker()")}} 选择文件或目录时，可以返回这些对象的实例：

```js
// 观察文件
async function observeFile() {
  const fileHandle = await window.showSaveFilePicker();

  await observer.observe(fileHandle);
}

// 观察目录
async function observeDirectory() {
  const directoryHandle = await window.showDirectoryPicker();

  await observer.observe(directoryHandle);
}
```

你还可以通过将 {{domxref("FileSystemSyncAccessHandle")}} 传递给 `observe()` 来观察 OPFS 的变化：

```js
// 观察 OPFS 文件系统条目
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const syncHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(syncHandle);
}
```

### 递归观察目录

要递归地观察目录，请调用 `observe()` 并将 `recursive` 选项设置为 `true`：

```js
// 递归观察目录
async function observeDirectory() {
  const directoryHandle = await window.showDirectoryPicker();

  await observer.observe(directoryHandle, { recursive: true });
}
```

## 规范

目前不属于任何规范。相关规范 PR 请参阅 [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165)。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- developer.chrome.com 上的[文件系统观察器 API 源试用](https://developer.chrome.google.cn/blog/file-system-observer#stop-observing-the-file-system)（2024）
