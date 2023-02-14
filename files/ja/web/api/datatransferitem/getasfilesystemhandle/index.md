---
title: DataTransferItem.getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{securecontext_header}}{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}

**`getAsFileSystemHandle()`** は {{domxref("DataTransferItem")}} インターフェイスのメソッドで、ドラッグ中の項目がファイルであれば {{domxref('FileSystemFileHandle')}} を、ドラッグ中の項目がディレクトリーであれば {{domxref('FileSystemDirectoryHandle')}} を返します。

## 構文

```js-nolint
getAsFileSystemHandle()
```

### 引数

なし。

### 返値

{{jsxref('Promise')}} で、 {{domxref('FileSystemFileHandle')}} または {{domxref('FileSystemDirectoryHandle')}} で履行されます。

### 例外

なし。

## 例

この例では、`getAsFileSystemHandle` メソッドを使用して、ドロップした項目に対して {{domxref('FileSystemHandle','file handles')}} を返します。

```js
elem.addEventListener('dragover', (e) => {
  // Prevent navigation.
  e.preventDefault();
});
elem.addEventListener('drop', async (e) => {
  // Prevent navigation.
  e.preventDefault();

  // Process all of the items.
  for (const item of e.dataTransfer.items) {
    // kind will be 'file' for file/directory entries.
    if (item.kind === 'file') {
    const entry = await item.getAsFileSystemHandle();
      if (entry.kind === 'file') {
        // run code for if entry is a file
      } else if (entry.kind === 'directory') {
        // run code for is entry is a directory
      }
    }
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステムアクセス API](/ja/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
