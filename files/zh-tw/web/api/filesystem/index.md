---
title: FileSystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("File and Directory Entries API")}}

檔案與目錄 API 的 **`FileSystem`** 介面用來表示檔案系統。這些物件可從任何檔案系統項目上的 {{domxref("FileSystemEntry.filesystem", "filesystem")}} 屬性取得。某些網頁瀏覽器提供額外的 API 去建立和管理檔案系統，例如 Google Chrome 的 {{domxref("Window.requestFileSystem", "requestFileSystem()")}} 方法。

此介面並不會讓你直接存取使用者電腦的檔案系統，而是在瀏覽器的沙盒內建立一個「虛擬磁碟」讓你操作。如果要直接操作使用者的檔案系統，需要向使用者請求，像是安裝 Google Chrome 擴充功能之類的。相關的 Chrome API 可[在此](https://developer.chrome.com/docs/apps/reference/fileSystem)找到。

## 基礎概念

存取 `FileSystem` 物件的兩種方法：

1. 你可以呼叫 `window.requestFileSystem()`，為你的網頁應用程式建立一個檔案系統的沙盒。如果呼叫成功，將會執行回呼函式，該回呼函式會有個 `FileSystem` 參數來描述檔案系統。
2. 從檔案系統項目物件的 {{domxref("FileSystemEntry.filesystem", "filesystem")}} 屬性中取得。

## 實例屬性

- {{domxref("FileSystem.name")}} {{ReadOnlyInline}}
  - : 代表檔案系統名稱的字串。此名稱在整個檔案的清單中是唯一的。
- {{domxref("FileSystem.root")}} {{ReadOnlyInline}}
  - : 為一個 {{domxref("FileSystemDirectoryEntry")}} 物件，用來表示檔案系統的根目錄。透過此物件，你可以取得檔案系統中的所有的檔案與目錄。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [檔案與目錄 API](/zh-TW/docs/Web/API/File_and_Directory_Entries_API)
- [檔案與目錄 API 介紹](/zh-TW/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}、{{domxref("FileSystemFileEntry")}}、{{domxref("FileSystemDirectoryEntry")}}
