---
title: LockedFile
slug: Web/API/IDBFileHandle
---

{{APIRef("File System API")}} {{non-standard_header}}

## 概要

`LockedFile` 接口提供了处理给定文件的所有必要锁定工具

## 属性

- {{domxref("LockedFile.fileHandle")}} {{readonlyinline}}
  - : 从被打开的锁定文件返回一个 {{domxref("FileHandle")}} 对象。
- {{domxref("LockedFile.mode")}} {{readonlyinline}}
  - : 访问文件的方式; 返回 `readonly` 或 `readwrite`。
- {{domxref("LockedFile.active")}} {{readonlyinline}}
  - : 指示文件是否可以访问，返回 true 或 false。
- {{domxref("LockedFile.location")}}
  - : 读/写指针在文件中的位置。

### 事件处理

- {{domxref("LockedFile.oncomplete")}}
  - : 每次读取或写入操作成功时触发 {{event("complete")}} 事件。
- {{domxref("LockedFile.onabort")}}
  - : 每次调用{{domxref("LockedFile.abort()","abort()")}} 方法时会触发{{event("abort")}}事件。
- {{domxref("LockedFile.onerror")}}
  - : 在每次出现问题时触发{{event("error")}}事件。

## 方法

- {{domxref("LockedFile.getMetadata()")}}
  - : 允许检索文件元数据（上次修改的大小和日期）。返回{{domxref("FileRequest")}}对象。
- {{domxref("LockedFile.readAsArrayBuffer()")}}
  - : 允许以{{domxref("ArrayBuffer")}}形式检索文件内容的一部分。返回{{domxref("FileRequest")}}对象。
- {{domxref("LockedFile.readAsText()")}}
  - : 允许以字符串形式检索文件内容的一部分。返回{{domxref("FileRequest")}}对象。
- {{domxref("LockedFile.write()")}}
  - : 允许从{{domxref("LockedFile.location","location")}} 偏移量开始在文件中写入一些数据。返回{{domxref("FileRequest")}}对象。
- {{domxref("LockedFile.append()")}}
  - : 允许从文件末尾写入一些数据。返回{{domxref("FileRequest")}}对象。
- {{domxref("LockedFile.truncate()")}}
  - : 允许截断文件的内容。返回{{domxref("FileRequest")}}对象。
- {{domxref("LockedFile.flush()")}}
  - : 允许保证任何缓冲的数据已被传输到磁盘。
- {{domxref("LockedFile.abort()")}}
  - : 使 LockedFile 无效并取消所有正在进行的操作。

## 标准

不属于任何现行的规范，也不再有望成为标准。

## 另见

- {{domxref("FileHandle")}}
- {{domxref("FileRequest")}}
