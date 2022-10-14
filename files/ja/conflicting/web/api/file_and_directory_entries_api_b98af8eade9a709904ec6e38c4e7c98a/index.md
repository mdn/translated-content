---
title: LocalFileSystemSync
slug: conflicting/Web/API/File_and_Directory_Entries_API_b98af8eade9a709904ec6e38c4e7c98a
original_slug: Web/API/LocalFileSystemSync
---

{{APIRef("File System API")}}{{non-standard_header()}}

The `LocalFileSystemSync` interface of the [File System API](/ja/DOM/File_API/File_System_API) gives you access to a sandboxed file system. It is intended to be used with [WebWorkers](/ja/DOM/Worker). The methods are implemented by [worker](/ja/DOM/Worker) objects.

## この文書について

このドキュメントは 2012 年 3 月 2 日に最後に更新され、2011 年 4 月 19 日に作成された [W3C の仕様 (作業中のドラフト)](http://www.w3.org/TR/file-system-api/) に準拠しています。

この仕様は現在放棄されており、大きな牽引力を得ることはできません。

## 基本概念

Web Worker 内から `LocalFileSystemSync` オブジェクトを要求することで、サンドボックス化されたファイルシステムへのアクセスを要求することができます。`window` オブジェクトの `requestFileSystemSync()` メソッドと `resolveLocalFileSystemSyncURL()` メソッドのグローバル メソッドは、Worker のグローバル スコープに公開されます。`window.requestFileSystemSync()` を呼び出すと、Web アプリのための新しいストレージが作成されます。

より多くの概念については、[非同期 API の対応する記事](/ja/docs/Web/API/LocalFileSystem#Basic_concepts)を参照してください。

### 例

```js
// ブラウザ固有のプレフィックスの扱い
window.requestFileSystemSync  = window.requestFileSystemSync || window.webkitRequestFileSystemSync;

// The first parameter defines the type of storage: persistent or temporary
// Next, set the size of space needed (in bytes)
// initFs is the success callback
// And the last one is the error callback
// for denial of access and other errors.

var fs = requestFileSystemSync(TEMPORARY, 1024*1024 /*1MB*/);
```

同期 API を使用しているので、成功とエラーのコールバックは必要ありません。

## メソッド概要

| `FileSystemSync requestFileSystemSync (in unsigned short type, in long long size) raises FileException;` |
| -------------------------------------------------------------------------------------------------------- |
| `EntrySync resolveLocalFileSystemSyncURL (in DOMString url) raises FileException;`                       |

## 定数

| 定数         | 値  | 説明                                                         |
| ------------ | --- | ------------------------------------------------------------ |
| `TEMPORARY`  | `0` | ブラウザの裁量で削除できる過渡的なストレージ。               |
| `PERSISTENT` | `1` | ユーザーやアプリが削除しない限り、ブラウザに残るストレージ。 |

## メソッド

### requestFileSystemSync()

データが保存されるべきファイルシステムを要求します。このグローバル メソッド `window.requestFileSystemSync()` を使用して、Web ワーカー内から `LocalFileSystemSync` オブジェクトを要求することで、サンドボックス化されたファイルシステムにアクセスします。\[ RESEARCH ]

```
FileSystemSync requestFileSystemSync(
  in unsigned short type,
  in unsigned long long size
);
```

##### パラメータ

- type
  - : ファイルシステムのストレージタイプ。値は、[`TEMPORARY`](/ja/docs/Web/API/LocalFileSystemSync#const_temporary) または [`PERSISTENT`](/ja/docs/Web/API/LocalFileSystemSync#const_persistent) のいずれかです。
- size
  - : アプリに必要なストレージ容量 (バイト単位)。

##### 戻り値

- [`FileSystemSync`](/ja/DOM/File_API/File_System_API/FileSystemSync)
  - : ファイルシステムを表すオブジェクト。

##### 例外

このメソッドは、以下のコードで [FileException](/ja/docs/Web/API/FileException) が発生する可能性があります。

| 例外             | 説明                                                                                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SECURITY_ERROR` | このアプリケーションは、ファイルシステムインターフェイスにアクセスする権限を持っていません。例えば、`file://` からは実行できません。詳細については、[基本的な考え方の記事](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction#You_cannot_run_your_app_from_file:.2F.2F)を参照してください。 |

### resolveLocalFileSystemSyncURL()

ローカル URL で参照されたファイルやディレクトリの `Entry` を検索します。

```
void resolveLocalFileSystemURL(
  in DOMString url
);
```

##### パラメータ

- url
  - : ファイルシステム内のローカルファイルの URL。

##### 戻り値

- [`EntrySync`](/ja/DOM/File_API/File_System_API/EntrySync)
  - : ファイルシステム内のエントリを表すオブジェクト。

##### 例外

このメソッドは、以下のコードで [FileException](/ja/docs/Web/API/FileException) が発生する可能性があります。

| 例外            | 説明                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`  | URL の構文が無効でした。                                                                     |
| `NOT_FOUND_ERR` | URL は構造的には正しいのですが、存在しないリソースを参照しています。                         |
| `SECURITY_ERR`  | このアプリケーションは、ファイルシステムインターフェイスにアクセスする権限を持っていません。 |

## ブラウザの互換性

{{Compat("api.LocalFileSystemSync")}}

## あわせて参照

Specification:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

Reference: [File System API](/ja/DOM/File_API/File_System_API)

Introduction: [Basic Concepts About the File System API](/ja/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
