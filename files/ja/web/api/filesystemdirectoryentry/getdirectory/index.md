---
title: "FileSystemDirectoryEntry: getDirectory() メソッド"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

{{domxref("FileSystemDirectoryEntry")}} インターフェイスのメソッド **`getDirectory()`** は、呼び出されたディレクトリーをルートとするディレクトリーサブツリーのどこかに格納されているディレクトリーに対応する {{domxref("FileSystemDirectoryEntry")}} オブジェクトを返します。

## 構文

```js-nolint
getDirectory()
getDirectory(path)
getDirectory(path, options)
getDirectory(path, options, successCallback)
getDirectory(path, options, successCallback, errorCallback)
```

### 引数

- `path` {{optional_inline}}
  - : メソッドが呼び出されたディレクトリーへの絶対パスまたは相対パスを表す文字列で、どのディレクトリー項目を返すかを記述します。
    絶対パスはセキュリティ上の理由から使用することができない場合があります。
- `options` {{optional_inline}}
  - : 項目がない場合に作成するかどうか、ファイルがすでに存在する場合にエラーとするかどうかを指定するオブジェクトです。これらのオプションは、現在のところウェブのコンテキストでは有益ではありません。
    詳しくは [options 引数](#options_引数)の節を参照してください。
- `successCallback` {{optional_inline}}
  - : {{domxref("FileSystemDirectoryEntry")}} が作成されたら呼び出されるメソッド。このメソッドは単一の引数、つまり問題のディレクトリーを表す `FileSystemDirectoryEntry` オブジェクトを受け取ります。
- `errorCallback` {{optional_inline}}
  - : エラーが発生した場合に呼び出されるメソッドです。唯一の引数として、発生したエラーを説明する {{domxref("DomException")}} オブジェクトを受け取ります。

#### `options` 引数

`options` 引数オブジェクトは、以下の引数を受け入れます。

- `create` {{optional_inline}}
  - : このプロパティが `true` で、リクエストされたディレクトリーが存在しない場合、ユーザーエージェントはそれを作成する必要があります。
    既定値は `false` です。
    親ディレクトリーはすでに存在している必要があります。
- `exclusive` {{optional_inline}}
  - : もし `true` で `create` オプションも `true` であれば、呼び出す前にディレクトリーが存在してはいけません。
    その代わり、呼び出し時に新たに作成することが可能でなければなりません。
    既定値は `false` です。この引数は `create` が `false` の場合には無視されます。

下記の表は、対象とするディレクトリーのパスが既に存在するかどうかに応じて、これらのフラグを可能な限り組み合わせた場合の結果を記述したものです。

| `create` オプション | `exclusive` オプション | パスの条件                         | 結果                                                                                                                                                 |
| ------------------- | ---------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`             | _無視_                 | パスが存在してディレクトリーである | `successCallback` が {{domxref("FileSystemDirectoryEntry")}} で呼び出される。                                                                        |
| `false`             | _無視_                 | パスが存在しているがファイルである | `errorCallback` が適切なエラーコードで呼び出される（コールバックが提供されていた場合）。                                                             |
| `true`              | `false`                | パスが存在する                     | 既存のディレクトリーが除去され、新しいディレクトリーに置き換わる。次に `successCallback` が {{domxref("FileSystemDirectoryEntry")}} で呼び出される。 |
| `true`              | `false`                | パスが存在しない                   | ディレクトリーが作成され、{{domxref("FileSystemDirectoryEntry")}} が `successCallback` に渡される。                                                  |
| `true`              | `true`                 | パスが存在する                     | `errorCallback` は `FileError.PATH_EXISTS_ERR` のような適切なエラーで呼び出されます。                                                                |
| `true`              | `true`                 | パスが存在しない                   | ディレクトリーが作成され、{{domxref("FileSystemDirectoryEntry")}} が `successCallback` に渡される。                                                  |

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : `create` オプションが指定されず（または `false` を指定します）、ディレクトリーが存在しない場合に発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : ディレクトリーへのアクセスリクエストがセキュリティ上の理由で拒否された場合に発生します。
- `TypeMismatchError` {{domxref("DOMException")}}
  - : 指定したパスがディレクトリーでない場合に発生します。おそらくファイルですが、パイプのような対応していないファイル記述子かもしれません。

## 例

この例では、指定した言語のユーザー辞書を含む JSON ファイルをユーザーのアプリデータディレクトリー内に格納し、その辞書を読み込むことを仕事とする関数を表示しています。

```js
let dictionary = null;

function loadDictionaryForLanguage(appDataDirEntry, lang) {
  dictionary = null;

  appDataDirEntry.getDirectory("Dictionaries", {}, (dirEntry) => {
    dirEntry.getFile(`${lang}-dict.json`, {}, (fileEntry) => {
      fileEntry.file((dictFile) => {
        let reader = new FileReader();

        reader.addEventListener("loadend", () => {
          dictionary = JSON.parse(reader.result);
        });

        reader.readAsText(dictFile);
      });
    });
  });
}
```

`loadDictionaryForLanguage()` 関数は、まず `getDirectory()` を使用して、指定したアプリのデータディレクトリー内にある "Dictionaries" という名前のサブフォルダーを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクトを取得します。この成功コールバックは、結果のディレクトリー項目オブジェクトを受け取り、{{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}} を呼び出して、辞書ファイルを表す {{domxref("FileSystemFileEntry")}} オブジェクトを取得します。読み込みが成功すると （{{domxref("FileReader/loadend_event", "loadend")}} イベントが発生することで示されます）、読み込まれたテキストは {{jsxref("JSON.parse()")}} に渡され、JavaScript オブジェクトに再構成されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
