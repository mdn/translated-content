---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
---

{{APIRef("File System API")}}{{SeeCompatTable}}

**`FileSystemDirectoryEntry`** は [File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API) のインターフェイスで、ファイルシステム内のディレクトリを表します。これはディレクトリ内のファイルにアクセスして操作する方法と、ディレクトリ内のエントリにアクセスする方法を提供します。

## 基本概念

{{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}} を呼び出して新しいディレクトリを作成することができます。サブディレクトリを作成する場合は、各子ディレクトリを順番に作成します。まだ存在しない親ディレクトリを含むフルパスを使用してディレクトリを作成しようとすると、エラーが返されます。したがって、親ディレクトリを作成した後、新しいパスを再帰的に追加して階層を作成します。

### 例

次のコードスニペットでは、 "Documents" というディレクトリを作成します。

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

...

function onFs(fs){
  fs.root.getDirectory('Documents', {create:true}, function(directoryEntry){
    //directoryEntry.isFile === false
    //directoryEntry.isDirectory === true
    //directoryEntry.name === 'Documents'
    //directoryEntry.fullPath === '/Documents'

    }, onError);

  }

// 一時記憶装置でファイルシステムを開く
window.requestFileSystem(TEMPORARY, 1024*1024 /*1MB*/, onFs, onError);
```

## プロパティ

_このインターフェイスは独自のプロパティを持っていませんが、親インターフェイス {{domxref("FileSystemEntry")}} からプロパティを継承しています。_

## メソッド

_このインターフェイスは、親インターフェイスである {{domxref("FileSystemEntry")}} からメソッドを継承しています。_

- {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}
  - : このディレクトリ内のエントリを読み込むために使用できる {{domxref("FileSystemDirectoryReader")}} オブジェクトを作成します。
- {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}
  - : メソッドが呼び出されるディレクトリを基準に、指定されたパスにあるディレクトリを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクトを返します。
- {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}
  - : メソッドが呼び出されるディレクトリに対する相対パスを指定して、ディレクトリの階層内にあるファイルを表す {{domxref("FileSystemFileEntry")}} オブジェクトを返します。

### 廃止されたメソッド

- {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}}
  - : サブディレクトリのコンテンツを含むディレクトリとそのすべてのコンテンツを削除します。これは仕様から削除されました。

## 仕様

| 仕様書                                                                                                       | ステータス                           | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('File System API', '#api-directoryentry', 'FileSystemDirectoryEntry')}} | {{Spec2('File System API')}} |          |

## ブラウザの互換性

{{Compat("api.FileSystemDirectoryEntry")}}

## 関連情報

- [File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [File System API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}}
