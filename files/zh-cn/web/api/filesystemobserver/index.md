---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
l10n:
  sourceCommit: 800e317d342b7ad0e5eca37d3d17e53bbcd1dc41
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

{{domxref("File System API", "文件系统 API", "", "nocode")}} 的 **`FileSystemObserver`** 接口提供了一种可以观察用户可观察的文件系统和[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)（OPFS）的变化的机制。这意味着 Web 应用程序无需轮询文件系统来查找文件或文件夹结构的更改，从而避免耗时和浪费资源。

## 构造函数

- {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 创建一个新的 `FileSystemObserver` 对象实例。

## 实例方法

- {{domxref("FileSystemObserver.disconnect", "disconnect()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 停止观察文件系统。
- {{domxref("FileSystemObserver.observe", "observe()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 开始观察给定文件或目录的变化。

## 示例

> [!NOTE]
> 有关完整的工作示例，请查看[文件系统观察器示例](https://mdn.github.io/dom-examples/filesystemobserver/)（[源代码](https://github.com/mdn/dom-examples/tree/main/filesystemobserver)）。

### 初始化 `FileSystemObserver`

在开始观察文件或目录更改之前，你需要初始化一个 `FileSystemObserver` 来处理这些观察结果。这可以通过 {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} 构造函数来完成，该构造函数接受一个回调函数作为参数：

```js
const observer = new FileSystemObserver(callback);
```

你可以指定[回调函数](/zh-CN/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)主体，以任何你想要的方式返回和处理文件更改观察结果：

```js
const callback = (records, observer) => {
  for (const record of records) {
    console.log("检测到的变化：", record);
    const reportContent = `观察到的变更为 ${record.changedHandle.kind} ${record.changedHandle.name}。类型：${record.type}。`;
    sendReport(reportContent); // 某种用户定义的报告函数
  }

  observer.disconnect();
};
```

### 观察文件或目录

一旦 `FileSystemObserver` 实例可用，你就可以通过调用 {{domxref("FileSystemObserver.observe()")}} 方法开始观察文件系统条目的变化。

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

### 停止观察文件系统

当你想要停止观察文件系统条目的变化时，可以调用 {{domxref("FileSystemObserver.disconnect()")}}：

```js
observer.disconnect();
```

## 规范

目前不属于任何规范。相关规范 PR 请参阅 [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165)。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- developer.chrome.com 上的[文件系统观察器 API 源试用](https://developer.chrome.google.cn/blog/file-system-observer#stop-observing-the-file-system)（2024）
