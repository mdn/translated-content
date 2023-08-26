---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

`DirectoryEntrySync` インターフェイスは、ファイルシステム内のディレクトリーを表します。ディレクトリー内のファイルの作成、読み込み、検索、および再帰的に削除するためのメソッドが含まれています。

> **メモ:** このインターフェイスは非推奨で、標準路線ではなくなりました。
> _もう使用しないでください。_ 代わりに[ファイルおよびディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)を使用してください。

## 基本的なコンセプト

サブディレクトリーを作成する場合は、順番に各子ディレクトリーを作成する必要があります。まだ存在しない親ディレクトリーを含むフルパスを使用してディレクトリーを作成しようとすると、エラーが発生します。したがって、親ディレクトリーを作成した後、新しいパスを再帰的に追加して階層を作成します。

### 例

`getFile()` メソッドは、ファイルシステム内のファイルを表す `FileEntrySync` を返します。以下は、ルートディレクトリーに `logs.txt` という名前の空のファイルを作成します。

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

`getDirectory()` メソッドは、ファイルシステム内のファイルを表す `DirectoryEntrySync` を返します。以下は、ルートディレクトリーに `project_dir` という新しいディレクトリーを作成します。

```js
const dirEntry = fs.root.getDirectory("project_dir", { create: true });
```

## メソッド概要

- <a href="#createreader">createReader()</a>
- <a href="#getfile">getFile()</a>
- <a href="#getdirectory">getDirectory()</a>
- <a href="#removerecursively">removeRecursively()</a>

## メソッド

### createReader()

このディレクトリーから項目を読み込むための新しい `DirectoryReaderSync` を作成します。

#### 構文

```
DirectoryReaderSync createReader (
) raises (FileException);
```

##### 返値

- [`DirectoryReaderSync`](/ja/docs/Web/API/DirectoryReaderSync)
  - : ファイルシステム内のディレクトリーを表します。

##### 引数

なし

##### 例外

このメソッドは、次のコードで {{domxref("DOMException")}} が発生する場合があります。

| 例外            | 説明                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR` | ディレクトリーが存在しません。                                                                  |
| `SECURITY_ERR`  | ブラウザはメタデータを検索するのは安全ではないと判断しました。\[ TODO: 理由を説明してください ] |

### getFile()

`options` 引数をどのように設定したかに応じて、このメソッドはファイルを作成するか、既存のファイルを検索します。

#### 構文

```
getFile(path)
getFile(path, options)
```

##### 引数

- `path`
  - : 検索または作成するファイルへのディレクトリーからの絶対パスまたは相対パス。直属の親が存在しないファイルを作成することはできません。最初に親ディレクトリーを作成してください。
- `options`
  - : メソッドの動作を記述するオブジェクトリテラル。ファイルが存在しない場合は作成されます。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">オブジェクトリテラル</th>
      <th scope="col">条件</th>
      <th scope="col">結果</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>パスが既に存在する</td>
      <td>エラーが発生します。</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>パスが存在せず、他のエラーが発生していない</td>
      <td>ファイルが作成されます。ファイルが既に存在していれば、エラーが発生しません。</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> は無視)
      </td>
      <td>パスが存在する</td>
      <td>ファイルが返されます。</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> は無視)
      </td>
      <td>パスが存在しない</td>
      <td>エラーが発生します。</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> は無視)
      </td>
      <td>パスが存在しますが、ディレクトリーです。</td>
      <td>エラーが発生します。</td>
    </tr>
  </tbody>
</table>

##### 返値

- [`FileEntrySync`](/ja/docs/Web/API/FileEntrySync)
  - : ファイルシステム内のファイルを表します。

##### 例外

このメソッドは、次のコードで {{domxref("DOMException")}} が発生する場合があります。

| 例外                          | 説明                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | 指定されたパスは無効です。                                                                                    |
| `NOT_FOUND_ERR`               | パスは構造的には正しいのですが、存在しないリソースを参照しています。                                          |
| `NO_MODIFICATION_ALLOWED_ERR` | これはパーミッションの問題です。対象のディレクトリーまたはファイルは書き込み可能ではありません。              |
| `PATH_EXISTS_ERR`             | ファイルは既に存在しています。同じパスで別のファイルを作成することはできません。                              |
| `QUOTA_EXCEEDED_ERROR`        | この操作により、アプリケーションがストレージのクォータを超えてしまいます。                                    |
| `SECURITY_ERR`                | アプリケーションは path で参照される要素にアクセスする権限を持っていません。\[ todo: 理由を説明してください ] |
| `TYPE_MISMATCH_ERR`           | 指定されたパスは存在しますが、ディレクトリーではありません。                                                  |

### getDirectory()

ディレクトリーを作成または検索します。このメソッドは DirectoryEntrySync が渡される `getFile()` に似ています。

#### 構文

```
getDirectory(path)
getDirectory(path, options)
```

##### 引数

- `path`
  - : 検索または作成するファイルへのディレクトリーからの絶対パスまたは相対パス。直属の親が存在しないファイルを作成することはできません。最初に親ディレクトリーを作成してください。
- `options`
  - : （オプション）ファイルが存在しない場合のメソッドの動作を記述するオブジェクトリテラル。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">オブジェクトリテラル</th>
      <th scope="col">条件</th>
      <th scope="col">結果</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>パスが既に存在する</td>
      <td>エラーが発生します。</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>パスが存在せず、他のエラーが発生しない</td>
      <td>
        ディレクトリーが作成されます。既にファイルが存在する場合はエラーは発生しません。
      </td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> は無視される)
      </td>
      <td>パスが存在する</td>
      <td>ディレクトリーが返されます。</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> は無視される)
      </td>
      <td>パスが存在しない</td>
      <td>エラーが発生します。</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> は無視される)
      </td>
      <td>パスが存在するが、ディレクトリーである</td>
      <td>エラーが発生します。</td>
    </tr>
  </tbody>
</table>

##### 返値

- [`DirectoryEntrySync`](/ja/docs/Web/API/DirectoryReaderSync)
  - : ファイルシステム内のディレクトリーを表します。

##### 例外

このメソッドは、次のコードで {{domxref("DOMException")}} が発生する場合があります。

| 例外                          | 説明                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | 指定されたパスは無効です。                                                                                    |
| `NOT_FOUND_ERR`               | パスは構造的には正しいのですが、存在しないリソースを参照しています。                                          |
| `NO_MODIFICATION_ALLOWED_ERR` | これはパーミッションの問題です。対象のディレクトリーまたはファイルは書き込み可能ではありません。              |
| `PATH_EXISTS_ERR`             | ファイルは既に存在しています。同じパスで別のファイルを作成することはできません。                              |
| `QUOTA_EXCEEDED_ERROR`        | この操作により、アプリケーションがストレージのクォータを超えてしまいます。                                    |
| `SECURITY_ERR`                | アプリケーションは path で参照される要素にアクセスする権限を持っていません。\[ todo: 理由を説明してください ] |
| `TYPE_MISMATCH_ERR`           | 指定されたパスは存在しますが、ディレクトリーではありません。                                                  |

### removeRecursively()

ディレクトリーとそのすべての内容を削除します。ファイルシステムのルートディレクトリーは削除できません。

削除できないファイルを含むディレクトリーを削除した場合や、削除中にエラーが発生した場合、内容の一部が削除されないことがあります。このような場合は、エラーコールバックでキャッチし、削除を再試行してください。

#### 構文

```
removeRecursively()
```

##### 引数

なし

##### 返値

{{jsxref('undefined')}}

##### 例外

このメソッドは、次のコードで {{domxref("DOMException")}} が発生する場合があります。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>対象となるディレクトリーが存在しません。</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_STATE_ERR</code></td>
      <td>
        このディレクトリーは、削除された以外の何らかの理由で有効ではありません。
        <p>[todo: 説明してください ]</p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        ディレクトリー、その親ディレクトリー、ディレクトリー内のコンテンツの一部が書き込み不可です。
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        このアプリケーションは、ターゲットディレクトリー、その親ディレクトリー、またはそのコンテンツの一部にアクセスする権限を持っていません。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定はありません。
代わりに[ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API) を使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルおよびディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルおよびディレクトリー項目 API 入門](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
