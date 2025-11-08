---
title: FileSystemChangeRecord
slug: Web/API/FileSystemChangeRecord
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{APIRef("File System API")}}

{{domxref("File System API", "文件系统 API", "", "nocode")}} 的 **`FileSystemChangeRecord`** 字典包含 {{domxref("FileSystemObserver")}} 观察到的单个更改的详细信息。

传递给 {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} 构造函数的回调函数的 `records` 参数是一个由 `FileSystemChangeRecord` 对象组成的数组。

## 实例属性

- `changedHandle`
  - : 对观察到变化的文件系统句柄的引用。
    - 对于用户可观察的文件系统，这可以是 {{domxref("FileSystemFileHandle")}} 或 {{domxref("FileSystemDirectoryHandle")}}。
    - 对于[源私有文件系统](/zh-CN/docs/Web/API/File_System_API/Origin_private_file_system)（OPFS），它可以是 {{domxref("FileSystemFileHandle")}}、{{domxref("FileSystemDirectoryHandle")}} 或 {{domxref("FileSystemSyncAccessHandle")}}。

    对于 `"disappeared"`、`"errored"` 或 `"unknown"` 类型的记录，此属性将为 `null`。

- `relativePathComponents`
  - : 包含从 `root` 到 `changedHandle` 的相对文件路径的路径组件的数组，其中包括 `changedHandle` 文件名。
- `relativePathMovedFrom`
  - : 对于 `"moved"` 类型的观测值，此数组包含构成从 `root` 到 `changedHandle` 先前位置的相对文件路径的路径组件。如果类型不是 `"moved"`，则此属性为 `null`。
- `root`
  - : 对根文件系统句柄的引用，即传递给启动观察的 `observe()` 调用的句柄。同样，它可以是 {{domxref("FileSystemFileHandle")}}、{{domxref("FileSystemDirectoryHandle")}} 或 {{domxref("FileSystemSyncAccessHandle")}}。
- `type`
  - : 表示观察到的变化类型的字符串。可能的值包括：
    - `appeared`
      - : 该文件或目录已创建或移动到 `root` 文件结构中。
    - `disappeared`
      - : 文件或目录已被删除或移出 `root` 文件结构。要查明哪个文件或目录消失了，你可以查询 `relativePathComponents` 属性。
    - `errored`
      - : 观察到的目录中出现了错误状态。以下情况可能导致此错误：
        - 观察不再有效。当观察的句柄（即观察的 `root`）被删除或移动时，可能会发生这种情况。在这种情况下，系统会记录一个 `"disappeared"` 的观察，然后记录一个 `"errored"` 的观察。在这种情况下，你可能希望使用 {{domxref("FileSystemObserver.disconnect()")}} 停止观察文件系统。
        - 已达到每个源的观测数量上限。此限制取决于操作系统，且无法提前知晓。如果发生这种情况，网站可能会决定重试，但无法保证操作系统是否已释放足够的资源。
        - 访问目录或文件句柄的权限已被删除。
    - `modified`
      - : 文件或目录已被修改。
    - `moved`
      - : 文件或目录已在根文件结构内移动。
        > [!NOTE]
        > 在 Windows 上，目录之间不支持 `"moved"` 的观察结果。它们在源目录中会被报告为 `"disappeared"` 的观察结果，在目标目录中则会被报告为 `"appeared"` 的观察结果。
    - `unknown`
      - : 表示部分观测数据缺失。如果你希望了解缺失观测数据中发生了哪些变化，可以回退到轮询被观测的目录。

根据操作系统的不同，并非所有观察结果都会以相同的详细程度进行报告，例如，当目录内容递归更改时。在最好的情况下，网站会收到一条详细的更改记录，其中包含更改类型和受影响路径的句柄。在最坏的情况下，网站会收到一条更通用的更改记录（即 `"unknown"` 类型），但仍然需要枚举目录才能确定哪个句柄发生了更改。

这仍然比轮询有所改进，因为目录枚举可以从回调函数按需启动，而无需定期轮询更改。

## 示例

### 初始化 `FileSystemObserver`

在开始观察文件或目录更改之前，你需要初始化一个 `FileSystemObserver` 来处理这些观察结果。这可以通过 {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} 构造函数来完成，该构造函数接受一个回调函数作为参数：

```js
const observer = new FileSystemObserver(callback);
```

你可以指定[回调函数](/zh-CN/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)主体，以任何你想要的方式返回和处理文件更改观察结果。`records` 数组中的每个对象都是一个 `FileSystemChangeRecord` 对象：

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

## 参见

- {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} 构造函数
- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- developer.chrome.com（2024）上的[文件系统观察器 API 源试用](https://developer.chrome.google.cn/blog/file-system-observer#stop-observing-the-file-system)
