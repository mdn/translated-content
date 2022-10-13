---
title: FileSystemEntrySync
slug: conflicting/Web/API/File_and_Directory_Entries_API_14742f14781741be7bc237d4ec1399a0
original_slug: Web/API/FileSystemEntrySync
---

{{APIRef("File System API")}}{{Non-standard_header()}}

File and Directory Entries API の`FileSystemEntrySync` インターフェイスは、ファイルシステム内のエントリを表します。 {{domxref("FileEntrySync")}} か {{domxref("DirectoryEntry")}} のいずれかになります。 ファイルのコピー、移動、削除、および読み込みを含むファイルの操作方法や、ファイル名やルートからエントリまでのパスなど、それが指すファイルに関する情報が含まれています。

> **警告:** この API は決して受け入れられず、標準化もされませんでした。さまざまなブラウザが [File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API) (ファイルシステム API とも呼ばれます) を実装していますが、使用を避けるようにしてください。

## 基本のコンセプト

`FileSystemEntrySync` インターフェイスには、ファイルやディレクトリの操作に必要なメソッドが含まれていますが、[`toURL()`](/ja/docs/Web/API/FileSystemEntrySync$translate?tolocale=ja#toURL)というエントリの URL を取得するための便利なメソッドもあります。 また新しい URL スキーム `filesystem:` を紹介します。

Google Chrome で `filesystem:` スキームを使用すると、アプリのルートに保存されているすべてのファイルとフォルダを表示できます。 アプリの起源のルートディレクトリに `filesystem:` スキームを使用するだけです。たとえば、アプリが [`http://ww.html5rocks.com`](http://ww.html5rocks.com) にある場合は、 `filesystem:http://www.html5rocks.com/temporary/` をタブで開きます。Chrome は、アプリのオリジンに保存されているすべてのファイルとフォルダの読み取り専用リストを表示します。

## メソッド概要

| `Metadata getMetadata () raises (FileException);`                                                               |
| --------------------------------------------------------------------------------------------------------------- |
| `FileSystemEntrySync moveTo (in DirectoryEntrySync parent, optional DOMString newName) raises (FileException);` |
| `FileSystemEntrySync copyTo(in DirectoryEntrySync parent, optional DOMString newName) raises (FileException);`  |
| `DOMString toURL();`                                                                                            |
| `void remove() raises (FileException);`                                                                         |
| `DirectoryEntrySync getParent();`                                                                               |

## 属性

| 属性          | タイプ                    | 説明                                                                                                            |
| ------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `filesystem`  | `readonly FileSystemSync` | エントリが存在するファイルシステム。                                                                            |
| `fullpath`    | `readonly DOMString`      | ルートからエントリまでの完全な絶対パス。絶対パスはルートディレクトリからの相対パスで、先頭に '`/`' が付きます。 |
| `isDirectory` | `readonly boolean`        | FileSystemEntrySync がディレクトリの場合は True です。                                                          |
| `isFile`      | `readonly boolean`        | FileSystemEntrySync がファイルの場合は True です。                                                              |
| `name`        | `readonly DOMString`      | エントリに至るパスを除いたエントリの名前。                                                                      |

## メソッド

### getMetadata()

このエントリに関するメタデータを検索します。 \[ todo: どのような種類のメタデータを指定するか]

```
Metadata getMetada ()
  raises (FileException);
```

##### 引数

<dl><dt>なし</dt></dl>

##### 戻り値

<dl><dt><code>Metadata</code></dt></dl>

##### 例外

このメソッドは、次のコードで [FileException](/ja/DOM/File_API/File_System_API/FileException) が発生する可能性があります。

| 例外                | 説明                                                                        |
| ------------------- | --------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | エントリが存在しません。                                                    |
| `INVALID_STATE_ERR` | FileSystemSync は、削除される以外の何らかの理由でもはや有効ではありません。 |

### moveTo()

エントリをファイルシステム上の別の場所に移動します。 既存のファイルにファイルを移動すると、その既存のファイルが置き換えられます。既存の空のディレクトリにディレクトリを移動すると、そのディレクトリが置き換えられます。\[todo: ディレクトリが空でない場合はどうなりますか？]

\[todo: Verify ] これはファイルの名前を変更するのと同じ方法です。 同じ場所に保持してから、`newName` パラメータを定義することができます。

次の操作はできません。

- ディレクトリ自体を移動するか、任意の深さの任意の子に移動する
- 現在のエントリと異なる名前が与えられていない場合は、エントリをその親に移動する
- ファイルをディレクトリが占有しているパスに移動する、またはディレクトリをファイルが占有するパスに移動する
- 空でないディレクトリが占めるパスに要素を移動します。

```
FileSystemEntrySync moveTo (
  in DirectoryEntrySync parent, optional DOMString newName
) raises (FileException);
```

##### 引数

- parent
  - : エントリを移動するディレクトリ。
- newName
  - : エントリの新しい名前。名前を指定しない場合、ブラウザはエントリの現在の名前を保持します。

##### 戻り値

- `FileSystemEntrySync`
  - : ファイルシステム内のエントリを表すオブジェクト。

##### 例外

このメソッドは、次のコードで [FileException](/ja/DOM/File_API/File_System_API/FileException) が発生する可能性があります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <td><code>ENCODING_ERR</code></td>
      <td>
        少なくとも1つの文字が予約されているかイレギュラーなので、指定された名前は無効です。
        例には、バックスラッシュ (\)、ドット (.)、および2つのドット (..)
        が含まれます。
      </td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>ターゲットディレクトリが存在しません。</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_MODIFICATION_ERR</code></td>
      <td>
        <p>次のいずれかの操作を試行しました：</p>
        <ul>
          <li>名前を変更せずにエントリを親に移動する</li>
          <li>
            親ディレクトリをその子ディレクトリの1つに移動する。[todo: verify]
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        ソースエントリ、その親ディレクトリ、およびターゲットディレクトリのうち、いずれかが書き込み可能ではありません。
      </td>
    </tr>
  </tbody>
</table>

### copyTo()

エントリをファイルシステム上の別の場所にコピーします。エントリがディレクトリの場合は、そのエントリをコピーすることはできません。また、新しい名前を指定せずに親にコピーすることもできません。ディレクトリコピーは常に再帰的です。つまり、ディレクトリのすべての内容がコピーされます。この動作を変更することはできません。ファイルは単純に複製されます。

```
void copyTo (
  in DirectoryEntrySync parent, optional DOMString newName
) raises (FileException);
```

##### 引数

- parent
  - : エントリを移動するディレクトリ。
- newName
  - : エントリの新しい名前。名前を指定しない場合、ブラウザは FileSystemEntrySync の現在の名前を保持します。

##### 戻り値

- `FileSystemEntrySync`
  - : ファイルシステム内のエントリを表すオブジェクト。

##### 例外

このメソッドは、次のコードで [FileException](/ja/DOM/File_API/File_System_API/FileException) が発生する可能性があります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">例外</th>
      <th scope="col">説明</th>
    </tr>
    <tr>
      <td><code>ENCODING_ERR</code></td>
      <td>
        少なくとも1つの文字が予約されているかイレギュラーなので、指定された名前は無効です。
        例には、バックスラッシュ (\)、ドット (.)、および2つのドット (..)
        が含まれます。
      </td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>ターゲットディレクトリが存在しません。</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_MODIFICATION_ERR</code></td>
      <td>
        <p>次のいずれかの操作を試行しました：</p>
        <ul>
          <li>名前を変更せずにエントリを親に移動する</li>
          <li>親ディレクトリをその子ディレクトリの1つに移動する</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        ソースエントリ、その親ディレクトリ、およびターゲットディレクトリのうち、いずれかが書き込み可能ではありません。
      </td>
    </tr>
    <tr>
      <td><code>QUOTA_EXCEEDED_ERR</code></td>
      <td>
        この操作により、アプリケーションはストレージクォータを超過します。
        ユーザーが明示的に付与する必要があるより大きな永続ストレージを要求する可能性があります。詳細については、<a
          href="/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction"
          >基本概念</a
        >の記事を参照してください。
      </td>
    </tr>
  </tbody>
</table>

### toURL()

このエントリを識別するために使用できる URL を返します。これは `src` や `href` 属性を埋めるために使用できる新しい URL スキーム、 `filesystem:`を公開しています。たとえば、イメージを表示しその [fileEntry](/ja/DOM/File_API/File_System_API/FileEntry) を持つ場合、 `toURL()` を呼び出すと、イメージファイルのファイルシステム URL が得られます。
あなたは `filesystem:http://example.com/temporary/lolcat.png` のようなものを手に入れます。

ファイルシステムの URL の有効期限はありません。このメソッドはディスク上の場所を記述しているため、URL はその場所が存在する限り有効です。あなたはファイルを削除して再作成することができます。

`mimeType` を指定すると、HTTP ダウンロードに関連付けられているオプションの MIME タイプヘッダーをシミュレートできます。

```
DOMString toURL ();
```

##### 引数

<dl><dt>なし</dt></dl>

##### 戻り値

<dl><dt><code>DOMString</code></dt></dl>

##### 例外

なし

### remove()

ファイルまたはディレクトリを削除します。 空のディレクトリやファイルシステムのルートディレクトリは削除できません。 空のディレクトリを削除する場合は、代わりに [`removeRecursively()`](</ja/docs/Web/API/DirectoryEntrySync#removeRecursively()> "https://developer.mozilla.org/en/DOM/File_API/File_System_API/DirectoryEntrySync#removeRecursively()") を使用してください。

```
void remove (
) raises (FileException);
```

##### 引数

なし

##### 戻り値

<dl><dt><code>void</code></dt></dl>

##### 例外

このメソッドは、次のコードと [FileException](/ja/docs/Web/API/FileException) を発生させることができます。

| 例外                          | 説明                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`               | ターゲットディレクトリが存在しません。                                                                                                                                                                                                                                                                |
| `INVALID_MODIFICATION_ERR`    | 空でないディレクトリを削除しようとしました。 空のディレクトリを削除する場合は、代わりに[`removeRecursively()`](</ja/docs/Web/API/DirectoryEntrySync#removeRecursively()> "https://developer.mozilla.org/en/DOM/File_API/File_System_API/DirectoryEntrySync#removeRecursively()") を使用してください。 |
| `NO_MODIFICATION_ALLOWED_ERR` | ソースエントリ、その親ディレクトリ、およびターゲットディレクトリのうち、いずれかが書き込み可能ではありません。                                                                                                                                                                                        |

### getParent()

エントリを含む親 [`DirectoryEntrySync`](/ja/docs/Web/API/DirectoryEntrySync) を調べます。このエントリがファイルシステムのルートである場合、親はそれ自身です。

```
void getParent ();
```

##### 引数

なし

##### 戻り値

- [`DirectoryEntrySync`](/ja/DOM/File_API/File_System_API/DirectoryEntrySync)
  - : ファイルシステム内のディレクトリを表すオブジェクト。

##### 例外

なし

## ブラウザの互換性

{{Compat("api.FileSystemEntrySync")}}

## あわせて参照

仕様:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

リファレンス: [File System API](/ja/DOM/File_API/File_System_API)

イントロダクション: [Basic Concepts About the File System API](/ja/DOM/File_APIs/Filesystem/Basic_Concepts_About_the_Filesystem_API)
