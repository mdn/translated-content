---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
---

{{APIRef("File System API")}}{{Non-standard_header}}

[File System API](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction) の `DirectoryEntrySync` インターフェイスは、ファイルシステム内のディレクトリを表します。ディレクトリ内のファイルの作成、読み込み、検索、および再帰的に削除するためのメソッドが含まれています。

> **メモ:** このインターフェイスは放棄されました。これは標準的なトラックにあり、良い考えではありません。もう使用しないでください。

## このドキュメントについて

このドキュメントは 2012 年 3 月 2 日に最後に更新され、2011 年 4 月 19 日に作成された [W3C の仕様 (作業中のドラフト)](http://www.w3.org/TR/file-system-api/) に準拠しています。

この仕様はかなり放棄されており、大きな牽引力には達していません。

## 基本的なコンセプト

サブディレクトリを作成する場合は、順番に各子ディレクトリを作成する必要があります。まだ存在しない親ディレクトリを含むフルパスを使用してディレクトリを作成しようとすると、エラーが発生します。したがって、親ディレクトリを作成した後、新しいパスを再帰的に追加して階層を作成します。

#### 例

`getFile()` メソッドは、ファイルシステム内のファイルを表す `FileEntrySync` を返します。以下は、ルートディレクトリに `seekrits.txt` という名前の空のファイルを作成します。

```js
var fileEntry = fs.root.getFile('seekrits.txt', {create: true});
```

`getDirectory()` メソッドは、ファイルシステム内のファイルを表す `DirectoryEntrySync` を返します。以下は、ルートディレクトリに `superseekrit` という新しいディレクトリを作成します。

```
var dirEntry = fs.root.getDirectory('superseekrit', {create: true});
```

## メソッド概要

| `DirectoryReaderSync createReader () raises (FileException);`                                            |
| -------------------------------------------------------------------------------------------------------- |
| `FileEntrySync getFile (in DOMString path, in optional Flags options) raises (FileException);`           |
| `DirectoryEntrySync getDirectory (in DOMString path, in optional Flags options) raises (FileException);` |
| `void removeRecursively () raises (FileException);`                                                      |

## メソッド

### createReader()

このディレクトリからエントリを読み込むための新しい `DirectoryReaderSync` を作成します。

```
DirectoryReaderSync createReader (
) raises (FileException);
```

##### 戻り値

- [`DirectoryReaderSync`](/ja/DOM/File_API/File_System_API/DirectoryReaderSync)
  - : ファイルシステム内のディレクトリを表します。

##### 引数

なし

##### 例外

このメソッドは、次のコードで FileException が発生する場合があります。

| 例外            | 説明                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR` | ディレクトリが存在しません。                                                                    |
| `SECURITY_ERR`  | ブラウザはメタデータを検索するのは安全ではないと判断しました。\[ TODO: 理由を説明してください ] |

### getFile()

`options` パラメータをどのように設定したかに応じて、このメソッドはファイルを作成するか、既存のファイルを検索します。

```
void getFile (
  in DOMString path, in optional Flags options
) raises (FileException);
```

##### パラメータ

- path
  - : 検索または作成するファイルへのディレクトリからの絶対パスまたは相対パス。直属の親が存在しないファイルを作成することはできません。最初に親ディレクトリを作成してください。
- options
  - : メソッドの動作を記述するオブジェクトリテラル。ファイルが存在しない場合は作成されます。

| オブジェクトリテラル                       | 条件                                   | 結果                                                                         |
| ------------------------------------------ | -------------------------------------- | ---------------------------------------------------------------------------- |
| `create: true` `exclusive: true`           | パスは既に存在する                     | エラーが発生します。                                                         |
| `create: true` `exclusive: false`          | パスが存在せず、他のエラーが発生しない | ファイルが作成されます。ファイルが既に存在する場合は、エラーは発生しません。 |
| `create: false` (`exclusive` は無視される) | パスが存在する                         | ファイルが返されます。                                                       |
| `create: false` (`exclusive` は無視される) | パスが存在しない                       | エラーが発生します。                                                         |
| `create: false` (`exclusive` は無視される) | パスは存在するが、ディレクトリである   | エラーが発生します。                                                         |

##### 戻り値

- [`FileEntrySync`](/ja/DOM/File_API/File_System_API/FileEntrySync)
  - : ファイルシステム内のファイルを表します。

##### 例外

このメソッドは、以下のコードで [FileException](/ja/docs/Web/API/FileException) が発生する可能性があります。

| 例外                          | 説明                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | 指定されたパスは無効です。                                                                                    |
| `NOT_FOUND_ERR`               | パスは構造的には正しいのですが、存在しないリソースを参照しています。                                          |
| `NO_MODIFICATION_ALLOWED_ERR` | これはパーミッションの問題です。対象のディレクトリまたはファイルは書き込み可能ではありません。                |
| `PATH_EXISTS_ERR`             | ファイルは既に存在しています。同じパスで別のファイルを作成することはできません。                              |
| `QUOTA_EXCEEDED_ERROR`        | この操作により、アプリケーションがストレージのクォータを超えてしまいます。                                    |
| `SECURITY_ERR`                | アプリケーションは path で参照される要素にアクセスする権限を持っていません。\[ todo: 理由を説明してください ] |
| `TYPE_MISMATCH_ERR`           | 指定されたパスは存在しますが、ディレクトリではありません。                                                    |

### getDirectory()

ディレクトリを作成または検索します。このメソッドは DirectoryEntrySync が渡される `getFile()` に似ています。

```
void getDirectory (
  in DOMString path, in optional Flags options
) raises (FileException);
```

##### Parameter

- path
  - : 検索または作成するファイルへのディレクトリからの絶対パスまたは相対パス。直属の親が存在しないファイルを作成することはできません。最初に親ディレクトリを作成してください。
- options
  - : ファイルが存在しない場合のメソッドの動作を記述するオブジェクトリテラル。

| オブジェクトリテラル                       | 条件                                   | 結果                                                                           |
| ------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------------ |
| `create: true` `exclusive: true`           | パスは既に存在する                     | エラーが発生します。                                                           |
| `create: true` `exclusive: false`          | パスが存在せず、他のエラーが発生しない | ディレクトリが作成されます。既にファイルが存在する場合はエラーは発生しません。 |
| `create: false` (`exclusive` は無視される) | パスが存在する                         | ディレクトリが返されます。                                                     |
| `create: false` (`exclusive` は無視される) | パスが存在しない                       | エラーが発生します。                                                           |
| `create: false` (`exclusive` は無視される) | パスは存在するが、ディレクトリである   | エラーが発生します。                                                           |

##### Returns

- [`DirectoryEntrySync`](/ja/DOM/File_API/File_System_API/DirectoryReaderSync)
  - : ファイルシステム内のディレクトリを表します。

##### Exceptions

このメソッドは、以下のコードで [FileException](/ja/docs/Web/API/FileException) が発生する可能性があります。

| 例外                          | 説明                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | 指定されたパスは無効です。                                                                                    |
| `NOT_FOUND_ERR`               | パスは構造的には正しいのですが、存在しないリソースを参照しています。                                          |
| `NO_MODIFICATION_ALLOWED_ERR` | これはパーミッションの問題です。対象のディレクトリまたはファイルは書き込み可能ではありません。                |
| `PATH_EXISTS_ERR`             | ファイルは既に存在しています。同じパスで別のファイルを作成することはできません。                              |
| `QUOTA_EXCEEDED_ERROR`        | この操作により、アプリケーションがストレージのクォータを超えてしまいます。                                    |
| `SECURITY_ERR`                | アプリケーションは path で参照される要素にアクセスする権限を持っていません。\[ todo: 理由を説明してください ] |
| `TYPE_MISMATCH_ERR`           | 指定されたパスは存在しますが、ディレクトリではありません。                                                    |

### removeRecursively()

ディレクトリとそのすべての内容を削除します。ファイルシステムのルートディレクトリは削除できません。

削除できないファイルを含むディレクトリを削除した場合や、削除中にエラーが発生した場合、内容の一部が削除されないことがあります。このような場合は、エラーコールバックでキャッチし、削除を再試行してください。

```
void removeRecursively (
)  raises (FileException);
```

##### 引数

なし

##### 戻り値

`void`

##### 例外

このメソッドは、以下のコードで [FileException](/ja/docs/Web/API/FileException) が発生する可能性があります。

| 例外                          | 説明                                                                                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`               | 対象となるディレクトリが存在しません。                                                                                             |
| `INVALID_STATE_ERR`           | このディレクトリは、削除された以外の何らかの理由で有効でなくなっています。\[todo: 説明してください]                                |
| `NO_MODIFICATION_ALLOWED_ERR` | ディレクトリ、その親ディレクトリ、ディレクトリ内のコンテンツの一部が書き込み不可となります。                                       |
| `SECURITY_ERR`                | このアプリケーションは、ターゲットディレクトリ、その親ディレクトリ、またはそのコンテンツの一部にアクセスする権限を持っていません。 |

## ブラウザの互換性

{{Compat("api.DirectoryEntrySync")}}

## あわせて参照

仕様書: {{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

リファレンス: [File System API](/ja/DOM/File_API/File_System_API)

イントロダクション: [Basic Concepts About the File System API](/ja/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
