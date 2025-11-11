---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}

**`FileSystemDirectoryEntry`** は[ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API) のインターフェイスで、ファイルシステム内のディレクトリーを表します。これはディレクトリー内のファイルにアクセスして操作する方法と、ディレクトリー内のエントリーにアクセスする方法を提供します。

{{InheritanceDiagram}}

## 基本概念

{{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}} を呼び出して新しいディレクトリーを作成することができます。サブディレクトリーを作成する場合は、各子ディレクトリーを順番に作成します。まだ存在しない親ディレクトリーを含むフルパスを使用してディレクトリーを作成しようとすると、エラーが返されます。したがって、親ディレクトリーを作成した後、新しいパスを再帰的に追加して階層を作成します。

### 例

次のコードスニペットでは、 "Documents" というディレクトリーを作成します。

```js
// ブラウザー固有の接頭辞を取る
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

// …

function onFs(fs) {
  fs.root.getDirectory(
    "Documents",
    { create: true },
    (directoryEntry) => {
      //directoryEntry.isFile === false
      //directoryEntry.isDirectory === true
      //directoryEntry.name === 'Documents'
      //directoryEntry.fullPath === '/Documents'
    },
    onError,
  );
}

// 一時記憶装置でファイルシステムを開く
window.requestFileSystem(TEMPORARY, 1024 * 1024 /*1MB*/, onFs, onError);
```

## プロパティ

_このインターフェイスは独自のプロパティを持っていませんが、親インターフェイス {{domxref("FileSystemEntry")}} からプロパティを継承しています。_

## メソッド

_このインターフェイスは、親インターフェイスである {{domxref("FileSystemEntry")}} からメソッドを継承しています。_

- {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}
  - : このディレクトリー内のエントリーを読み込むために使用できる {{domxref("FileSystemDirectoryReader")}} オブジェクトを作成します。
- {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}
  - : メソッドが呼び出されるディレクトリーを基準に、指定されたパスにあるディレクトリーを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクトを返します。
- {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}
  - : メソッドが呼び出されるディレクトリーに対する相対パスを指定して、ディレクトリーの階層内にあるファイルを表す {{domxref("FileSystemFileEntry")}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_System_API)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}}
