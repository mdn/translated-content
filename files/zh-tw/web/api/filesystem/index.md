---
title: FileSystem
slug: Web/API/FileSystem
---

{{APIRef("File System API")}} {{non-standard_header}}

**`FileSystem`** 實作文件和目錄介面，描述一個檔案系統。在任何檔案系統上，這個物件包含 {{domxref("FileSystemEntry.filesystem", "filesystem")}}的特性。某些網頁瀏覽器提供額外的 API 去創建和管理檔案系統，如 Google Chrome 的{{domxref("LocalFileSystem.requestFileSystem", "requestFileSystem()")}}函式。

> **備註：** 此介面並非標準 API, 代表規格並未依造標準制定, 因此必須注意並非所有網頁瀏覽器都有實作此介面, 有實作的網頁瀏覽器可能只有實作一小部分. 請在[Browser compatibility](#browser_compatibility) 查看更多細節.

## 基礎概念

存取 `FileSystem` 物件的兩種方法:

1. 你可以直接要求一個使用`window.requestFileSystem()，`只用在你的網頁應用程式的沙盒類型 `FileSystem 物件。如果要求成功，將會執行`callback handler 去接收描述檔案系統的`FileSystem物件參數。`
2. 你可以從檔案系統接口物件取得，透過他的{{domxref("FileSystemEntry.filesystem", "filesystem")}}特性

## 屬性

- {{domxref("FileSystem.name")}} {{ReadOnlyInline}}
  - : {{domxref("USVString")}} 代表檔案系統的名稱. 此名稱在整個已宣告的檔案系統清單中是唯一的。
- {{domxref("FileSystem.root")}} {{ReadOnlyInline}}
  - : {{domxref("FileSystemDirectoryEntry")}} 物件表示檔案系統的根目錄。 透過此物件, 你可以取得權限存取所有檔案系統中的文件和目錄

## 規範

{{Specifications}}

This API has no official W3C or WHATWG specification.

## 瀏覽器相容性

{{Compat}}

## 參見

- [File and Directory Entries API](/zh-TW/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/zh-TW/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, and {{domxref("FileSystemDirectoryEntry")}}
- MSDN 文章: [WebKitFileSystem object](https://msdn.microsoft.com/library/mt732564)
