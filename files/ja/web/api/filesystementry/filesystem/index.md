---
title: "FileSystemEntry: filesystem プロパティ"
short-title: filesystem
slug: Web/API/FileSystemEntry/filesystem
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

**`filesystem`** は {{domxref("FileSystemEntry")}} インターフェイスの読み取り専用プロパティで、この項目が存在するファイルシステムを表す {{domxref("FileSystem")}} オブジェクトが入ります。

## 値

{{domxref("FileSystem")}} で、この `FileSystemEntry` で記述されているファイルまたはディレクトリーがあるファイルシステムを表します。

## 例

この例は、ファイルを格納するファイルシステムのルートディレクトリーの {{domxref("FileSystemDirectoryEntry")}} を取得します。

```js
let rootDirEntry = fileEntry.filesystem.root;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}
