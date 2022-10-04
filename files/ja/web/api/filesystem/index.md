---
title: FileSystem
slug: Web/API/FileSystem
---

{{APIRef("File System API")}}{{SeeCompatTable}}

File and Directory Entries API インターフェイスの **`FileSystem`** は、ファイルシステムを表現するために使用されます。これらのオブジェクトは、任意のファイルシステムエントリの {{domxref("FileSystemEntry.filesystem", "filesystem")}} プロパティから取得できます。ブラウザによっては、ファイルシステムを作成・管理するための追加の API を提供しているものもあり、例えば Chrome の {{domxref("Window.requestFileSystem", "requestFileSystem()")}} メソッドのようなものがあります。

このインターフェイスは、ユーザーのファイルシステムへのアクセスを許可しません。その代わり、ブラウザのサンドボックス内に「仮想ドライブ」が存在します。ユーザーのファイルシステムにアクセスするには、Chrome 拡張機能をインストールするなどしてユーザーを呼び出す必要があります。関連する Chrome API は[こちら](https://developer.chrome.com/apps/fileSystem)を参照してください。

## 基本コンセプト

`FileSystem` オブジェクトにアクセスするには、2 つの方法があります。

1. `window.requestFileSystem()` を呼び出すことで、Web アプリのためだけに作成されたサンドボックス化されたファイルシステムを直接要求することができます。その呼び出しが成功した場合、コールバックハンドラが実行され、ファイルシステムを記述する `FileSystem` オブジェクトをパラメータとして受け取ります
2. ファイルシステムエントリオブジェクトの {{domxref("FileSystemEntry.filesystem", "filesystem")}} プロパティから取得できます

## プロパティ

- {{domxref("FileSystem.name")}} {{ReadOnlyInline}}
  - : ファイルシステム名を表す {{domxref("USVString")}}。この名前は、公開されたファイルシステムのリスト全体の中で一意です。
- {{domxref("FileSystem.root")}} {{ReadOnlyInline}}
  - : ファイルシステムのルートディレクトリを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクト。このオブジェクトを使用すると、ファイルシステム内のすべてのファイルとディレクトリにアクセスすることができます。

## 仕様

| 仕様書                                                                                   | ステータス                           | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('File System API', '#api-domfilesystem', 'FileSystem')}} | {{Spec2('File System API')}} |          |

## ブラウザの互換性

{{Compat("api.FileSystem")}}

## あわせて参照

- [File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, 及び {{domxref("FileSystemDirectoryEntry")}}
- MSDN の記事: [WebKitFileSystem object](https://msdn.microsoft.com/library/mt732564)
