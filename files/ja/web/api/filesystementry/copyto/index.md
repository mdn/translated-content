---
title: "FileSystemEntry: copyTo() メソッド"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("FileSystemEntry")}} インターフェイスの **`copyTo()`** メソッドは、この項目で指定したファイルをファイルシステムの新しい場所にコピーします。

典型的な制限事項がいくつかあります。

- ディレクトリーはそれ自体にコピーすることができません。
- 新しい名前を指定しない限り、項目は親ディレクトリーにコピーされません。
- ディレクトリーをコピーする場合、コピーは常に再帰的で、サブフォルダーを省くことはできません。

## 構文

```js-nolint
copyTo(newParent)
copyTo(newParent, newName)
copyTo(newParent, newName, successCallback)
copyTo(newParent, newName, successCallback, errorCallback)
```

### 引数

- `newParent`
  - : コピー処理の宛先ディレクトリーを指定する {{domxref("FileSystemDirectoryEntry")}} オブジェクト。
- `newName` {{optional_inline}}
  - : この引数が指定された場合、コピーにはこの文字列が新しいファイル名またはディレクトリー名として指定されます。
- `successCallback` {{optional_inline}}
  - : コピー処理が完全に完了したときに呼び出される関数。
    コピーされたアイテムの新しい詳細を提供する {{domxref("FileSystemEntry")}} ベースのオブジェクトです。
- `errorCallback` {{optional_inline}}
  - : オプションのコールバックで、アイテムのコピー中にエラーが発生した場合に実行されます。
    単一の引数として、何が間違っていたのかを記述する {{domxref("FileError")}} があります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `FileError.INVALID_MODIFICATION_ERR`
  - : リクエストされた演算子には、ディレクトリーの内部や自分自身で子ディレクトリーを移動したり、同じディレクトリー内の項目を名前変更せずにコピーするなど、不可能な変更が含まれています。
- `FileError.QUOTA_EXCEEDED_ERR`
  - : 処理がユーザーのストレージクォータを超えたか、処理を運営するのに十分なストレージ空間が残っていません。

## 例

この例は、一時的なログファイルをより永続的な "log" ディレクトリーに移動させる方法を示しています。

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    workingDirectory.getDirectory(
      "log",
      {},
      (dirEntry) => {
        fileEntry.copyTo(dirEntry);
      },
      handleError,
    );
  },
  handleError,
);
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_System_API)
