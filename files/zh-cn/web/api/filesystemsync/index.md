---
title: FileSystemSync
slug: Web/API/FileSystemSync
---

{{APIRef("File System API")}} {{non-standard_header}}

在 [文件系统 API](/zh-CN/DOM/File_API/File_System_API) 中， `FileSystemSync` 对象表示文件系统。它有两个属性。

## 关于这个文档

这个文档最后更新与 2012 年 3 月 2 日，并且遵循 [W3C 规范（工作草案）](http://www.w3.org/TR/file-system-api/)，起草于 2011 年 4 月 19 日。

规范目前已废弃，没有得到大量的关注。

## 基本概念

`FileSystemSync` 对象是整个 API 的必经之路，你会大量使用它。所以一旦你获得了引用，将对象缓存在全局变量或类属性中。

## 属性

| Attribute | Type                  | Description                                              |
| --------- | --------------------- | -------------------------------------------------------- |
| `name`    | `只读` `DOMString`    | 文件系统的名称。名称在开放的文件系统列表中必须是唯一的。 |
| `root`    | `只读 DirectoryEntry` | 文件系统的根目录。                                       |

## 浏览器兼容性

{{Compat}}

## 参见

规范：[File API: Directories and System Specification](http://dev.w3.org/2009/dap/file-system/pub/FileSystem/)

参考： [文件系统 API](/zh-CN/DOM/File_API/File_System_API)

简介：[文件系统 API 的基本概念](/zh-CN/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
