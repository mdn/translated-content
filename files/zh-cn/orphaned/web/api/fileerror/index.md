---
title: FileError
slug: orphaned/Web/API/FileError
original_slug: Web/API/FileError
---
{{APIRef("File System API")}}

## 概述

用来表示在使用{{ domxref("FileReader") }}接口时发生的错误。

## 属性

| 属性名 | 类型             | 描述                                                  |
| ------ | ---------------- | ----------------------------------------------------- |
| `code` | `unsigned short` | The [error code](/zh-CN/nsIDOMFileError#Error_codes). |

## Error codes

| 常量               | 值  | 描述                                                               |
| ------------------ | --- | ------------------------------------------------------------------ |
| `ABORT_ERR`        | 3   | 文件的操作命令被取消，可能是由于调用了`FileReader`的`abort()方法`. |
| `ENCODING_ERR`     | 5   | 文件数据不能准确的被表示为一个 data URI.                           |
| `NOT_FOUND_ERR`    | 1   | 找不到文件。                                                       |
| `NOT_READABLE_ERR` | 4   | 文件无法被读取。                                                   |
| `SECURITY_ERR`     | 2   | 由于安全原因，文件不能被访问。                                     |

## 相关链接

- {{ domxref("FileReader") }}
- {{ domxref("File") }}
- {{ domxref("Blob") }}
- [Specification: FileAPI FileError](https://www.w3.org/TR/FileAPI/#FileErrorInterface)
