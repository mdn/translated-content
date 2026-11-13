---
title: FileSystemObserver：FileSystemObserver() 构造函数
slug: Web/API/FileSystemObserver/FileSystemObserver
l10n:
  sourceCommit: 800e317d342b7ad0e5eca37d3d17e53bbcd1dc41
---

{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

**`FileSystemObserver()`** 构造函数创建一个新的 {{domxref("FileSystemObserver")}} 对象实例。

## 语法

```js-nolint
new FileSystemObserver(callback)
```

### 参数

- `callback`
  - : 用户定义的回调函数，当观察器观察到其被要求观察的文件系统条目发生变化时（通过 {{domxref("FileSystemObserver.observe()")}} 指定），该函数将被调用。回调函数将传递以下两个参数：
    - `records`
      - : 包含所有观察到的更改的详细信息的 {{domxref("FileSystemChangeRecord")}} 对象数组。
    - `observer`
      - : 对当前 `FileSystemObserver` 对象的引用，例如，当你想在使用 {{domxref('FileSystemObserver.disconnect()')}} 方法接收当前记录后停止观察时，可以使用该引用。

### 返回值

一个新的 {{domxref("FileSystemObserver")}} 对象。

## 示例

> [!NOTE]
> 有关完整的工作示例，请查看[文件系统观察器示例](https://mdn.github.io/dom-examples/filesystemobserver/)（[源代码](https://github.com/mdn/dom-examples/tree/main/filesystemobserver)）。

### 初始化 `FileSystemObserver`

在开始观察文件或目录更改之前，你需要初始化一个 `FileSystemObserver` 来处理这些观察结果。

```js
const observer = new FileSystemObserver(callback);
```

你可以指定回调函数主体，以任何你想要的方式返回和处理文件更改观察结果：

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

## 规范

目前不属于任何规范。相关规范 PR 请参阅 [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165)。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- developer.chrome.com 上的[文件系统观察器 API 源试用](https://developer.chrome.google.cn/blog/file-system-observer#stop-observing-the-file-system)（2024）
