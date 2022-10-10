---
title: LocalFileSystem
slug: conflicting/Web/API/File_and_Directory_Entries_API_330e25ac325178c58fd9fba0601787e1
original_slug: Web/API/LocalFileSystem
---

{{APIRef("File System API")}}{{non-standard_header()}}

[File System API](/ja/DOM/File_API/File_System_API) の `LocalFileSystem` インターフェイスを使用すると、サンドボックスファイルシステムにアクセスできます。 これらのメソッドは、[window](/ja/docs/Web/API/Window) オブジェクトと [worker](/ja/docs/Web/API/Worker) オブジェクトによって実装されます。

## 基本のコンセプト

このセクションには、メソッドの主要な概念がいくつか含まれています。

### 新しいストレージの作成

`window.requestFileSystem()` を呼び出すことで、サンドボックス化されたファイルシステムへのアクセスを要求します。コールバックに成功した場合の引数は [`FileSystem`](/ja/docs/Web/API/FileSystem) オブジェクトで、ファイルシステムの名前とルートの 2 つのプロパティを持ちます。

一時的なものと永続的なものの 2 つのファイルシステムを作成したい場合は、このメソッドを複数回呼び出すことができます。(ストレージの種類についての詳細は、[基本コンセプト](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction#Restrictions)の記事を参照してください)。ほとんどの場合、ファイルシステムを作成する必要があるのは 1 つだけですが、いくつかのケースでは 2 つ目のファイルシステムを作成した方が便利な場合もあります。例えば、メールアプリを作成する場合、パフォーマンスを高速化するためにアセット (画像や添付ファイルなど) をキャッシュするための一時的なストレージを作成し、一方で、オフラインで作成されたメールの下書きなど、クラウドにバックアップする前に失われてはならない固有のデータのために永続的なストレージを作成することができます。

### 永続的なストレージの使用

`requestFileSystem()` メソッドでは、[`PERSISTENT` または `TEMPORARY` ストレージ](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction#The_File_System_API_can_use_different_storage_types)を要求することができます。永続的ストレージとは、アプリまたはユーザーが削除しない限り、ブラウザに保存されるストレージですが、使用するにはユーザーの許可が必要です。対照的に、一時的なストレージは、ユーザーの許可なしに自動的に許可されますが、ブラウザによっていつでも削除することができます。

ファイルシステム API で `PERSISTENT` ストレージを使用するには、Chrome は requestQuota API を公開しています。そのため、ストレージをリクエストするには、次のようなことを行う必要があります。

```
var requestedBytes = 1024*1024*10; // 10MB

navigator.webkitPersistentStorage.requestQuota (
    requestedBytes, function(grantedBytes) {
        window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);

    }, function(e) { console.log('Error', e); }
);
```

アプリが永続的ストレージを使用する前に、ユーザーがアプリにデータをローカルに保存する許可を与える必要があります。ユーザーが許可したら、`requestQuota()` を再度呼び出す必要はありません。それ以降の呼び出しは noop です。

もう 1 つの API、クォータ管理 API では、`window.webkitPersistentStorage.queryUsageAndQuota()` を使用してオリジンの現在のクォータの使用量と割り当てを問い合わせることができます。詳細については、この [StackOverflow のアンサー](http://stackoverflow.com/a/29662985/89484)を参照してください。(API の古いバージョンについては、[HTML5 オフライン ストレージの管理](https://developer.chrome.com/apps/offline_storage?csw=1)で説明しています)。

### 単一のオリジン内での作業

ファイルシステムは、単一のオリジンにサンドボックス化されています。これは、アプリが他のアプリのファイルを読み取ったり、書き込んだりすることができないことを意味します。アプリは、ユーザーのハード ドライブ上の任意のフォルダ（マイ ピクチャ、マイ ドキュメントなど）内のファイルにアクセスすることもできません。制限の詳細については、[基本コンセプト](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction#Restrictions)の記事を参照してください。

### 例

以下は、ファイルシステムのストレージを要求する方法を示すコードスニペットです。

```js
//Taking care of the browser-specific prefix
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

// The first parameter defines the type of storage: persistent or temporary
// Next, set the size of space needed (in bytes)
// initFs is the success callback
// And the last one is the error callback
// for denial of access and other errors.

window.requestFileSystem(window.PERSISTENT, 1024*1024,onInitFs,errorHandler);
```

## メソッド概要

| `void requestFileSystem (in unsigned short type, in unsigned long long size, in FileSystemCallback successCallback, in optional ErrorCallback errorCallback);` |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `void resolveLocalFileSystemURL (in DOMString url, in EntryCallback successCallback, in optional ErrorCallback errorCallback);`                                |

## 定数

| 定数         | 値  | 説明                                                                                                                                                                         |
| ------------ | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TEMPORARY`  | `0` | 一時的なストレージで、ブラウザの裁量で削除することができます。                                                                                                               |
| `PERSISTENT` | `1` | ユーザーまたはアプリがそれを消去しない限り、ブラウザに保存されているストレージ。アプリがこのタイプのストレージを使用するには、その前にユーザーに許可を与える必要があります。 |

## メソッド

### requestFileSystem()

データが保存されるべきファイル システムを要求します。サンドボックス化されたファイルシステムにアクセスするには、このグローバルメソッド `window.requestFileSystem()` を使用して `LocalFileSystem` オブジェクトを要求します。

```
void requestFileSystem(
  in unsigned short type,
  in unsigned long long size,
  in FileSystemCallback successCallback,
  in ErrorCallback errorCallback
);
```

##### パラメータ

- type
  - : ファイルシステムのストレージタイプ。値は [`TEMPORARY`](#const_temporary) または [`PERSISTENT`](#const_persistent) のいずれかです。
- size
  - : アプリに必要なストレージ容量 (バイト単位)。
- successCallback

  - : ブラウザがファイルシステムを提供したときに呼び出される成功コールバック。その引数は、2 つのプロパティを持つ [`FileSystem`](/ja/docs/Web/API/FileSystem) オブジェクトです。

    - name - ブラウザがファイルシステムに割り当てる一意の名前
    - root - ファイルシステムのルートを表す読み取り専用の `DirectoryEntry` オブジェクト

- opt_errorCallback
  - : エラーが発生したとき、またはファイルシステムの取得要求が拒否されたときに呼び出されるエラーコールバックです。引数は `FileError` オブジェクトです。

##### 戻り値

<dl><dt><code>void</code></dt></dl>

##### 例外

このメソッドは、以下のコードで [FileError](/ja/docs/Web/API/FileError) が発生する可能性があります。

| 例外             | 説明                                                                                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SECURITY_ERROR` | このアプリケーションは、ファイルシステムインターフェイスにアクセスする権限を持っていません。例えば、`file://` からは実行できません。詳細については、[基本的な考え方の記事](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction#You_cannot_run_your_app_from_file:.2F.2F)を参照してください。 |

### resolveLocalFileSystemURL()

ローカル URL でファイルやディレクトリのエントリを検索できます。

```
void resolveLocalFileSystemURL(
  in DOMString url,
  in EntryCallback successCallback,
  in optional ErrorCallback errorCallback
);
```

##### パラメータ

- url
  - : ファイルシステム内のローカルファイルの URL。
- successCallback
  - : ブラウザが指定した URL のファイルまたはディレクトリを提供したときに呼び出される success コールバック。
- errorCallback
  - : エラーが発生したとき、またはエントリオブジェクトの取得要求が拒否されたときに呼び出される error コールバック。

##### 戻り値

<dl><dt><code>void</code></dt></dl>

##### 例外

このメソッドは、以下のコードで [FileError](/ja/docs/Web/API/FileError) が発生する可能性があります。

| 例外            | 説明                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`  | URL の構文が無効でした。                                                                     |
| `NOT_FOUND_ERR` | URL は構造的には正しいのですが、存在しないリソースを参照しています。                         |
| `SECURITY_ERR`  | このアプリケーションは、ファイルシステムインターフェイスにアクセスする権限を持っていません。 |

## ブラウザの互換性

{{Compat("api.LocalFileSystem")}}

## あわせて参照

仕様書:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

リファレンス: [File System API](/ja/DOM/File_API/File_System_API)

イントロダクション: [Basic Concepts About the File System API](/ja/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
