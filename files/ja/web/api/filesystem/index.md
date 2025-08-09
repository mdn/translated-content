---
title: FileSystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("File and Directory Entries API")}}

ファイルとディレクトリー項目 API の **`FileSystem`** インターフェイスは、ファイルシステムを表現するために使用されます。これらのオブジェクトは、任意のファイルシステム項目の {{domxref("FileSystemEntry.filesystem", "filesystem")}} プロパティから取得できます。ブラウザーによっては、ファイルシステムを作成・管理するための追加の API を提供しているものもあります。例えば Chrome では {{domxref("Window.requestFileSystem", "requestFileSystem()")}} メソッドなどがあります。

このインターフェイスは、ユーザーのファイルシステムへのアクセスを許可しません。その代わり、ブラウザーのサンドボックス内に「仮想ドライブ」を構築します。ユーザーのファイルシステムにアクセスするには、 Chrome 拡張機能をインストールするなどしてユーザーを呼び出す必要があります。関連する Chrome API は[こちら](https://developer.chrome.com/docs/apps/reference/fileSystem)を参照してください。

## 基本概念

`FileSystem` オブジェクトにアクセスするには、2 つの方法があります。

1. `window.requestFileSystem()` を呼び出すことで、このウェブアプリのためだけに作成されたサンドボックス化されたファイルシステムを直接要求することができます。呼び出しが成功した場合、コールバックハンドラーが実行され、ファイルシステムを記述する `FileSystem` オブジェクトを引数として受け取ります。
2. ファイルシステム項目オブジェクトの {{domxref("FileSystemEntry.filesystem", "filesystem")}} プロパティから取得できます。

## インスタンスプロパティ

- {{domxref("FileSystem.name")}} {{ReadOnlyInline}}
  - : ファイルシステム名を表す文字列です。この名前は、公開されたファイルシステムのリスト全体の中で一意です。
- {{domxref("FileSystem.root")}} {{ReadOnlyInline}}
  - : ファイルシステムのルートディレクトリーを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクト。このオブジェクトを使用すると、ファイルシステム内のすべてのファイルとディレクトリーにアクセスすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_System_API)
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, {{domxref("FileSystemDirectoryEntry")}}
