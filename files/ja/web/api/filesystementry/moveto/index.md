---
title: "FileSystemEntry: moveTo() メソッド"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("FileSystemEntry")}} インターフェイスの **`moveTo()`** メソッドは、この項目で指定したファイルをファイルシステムの新しい場所に移動します。

一般的な制限もあります。

- ディレクトリーはそれ自身の中に移動することはできません。
- 新しい名前を指定しない限り、項目を親ディレクトリーに移動することはできません。
  新しい名前を指定することで、 `moveTo()` を名前の変更処理と兼用することができます。
- ディレクトリーを移動する場合、移動は常に再帰的に行われます。
- 既存のディレクトリーを置き換えるようなファイルの移動や、既存のファイルを置き換えるようなディレクトリーの移動はできません。しかし、ファイルはファイルを置き換えることができ、ディレクトリーはディレクトリーを置き換えることができます。
- ディレクトリーが空の場合のみ上書きできます。

## 構文

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### 引数

- `newParent`
  - : 移動処理の宛先ディレクトリーを指定する {{domxref("FileSystemDirectoryEntry")}} オブジェクト。
- `newName` {{optional_inline}}
  - : この引数が指定された場合、この項目にはこの文字列がファイルやディレクトリーの新しい名前となります。
- `successCallback` {{optional_inline}}
  - : 移動処理が完全に完了したときに呼び出される関数。
    移動されたアイテムの新しい詳細を提供する {{domxref("FileSystemEntry")}} ベースのオブジェクトです。
- `errorCallback` {{optional_inline}}
  - : オプションのコールバックで、アイテムの移動中にエラーが発生した場合に実行されます。
    単一の引数として、何が間違っていたのかを記述する {{domxref("FileError")}} があります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `FileError.INVALID_MODIFICATION_ERR`
  - : リクエストされた演算子には、ディレクトリーの内部や自分自身で子ディレクトリーを移動したり、同じディレクトリー内の項目を名前変更せずにコピーするなど、不可能な変更が含まれています。
- `FileError.QUOTA_EXCEEDED_ERR`
  - : 処理がユーザーのストレージクォータを超えたか、処理を運営するのに十分なストレージ空間が残っていません。

## 例

この例は、一時的なログファイルが 1 メガバイトを超えた場合に、より永続的な "log" ディレクトリーに移動させる方法を示しています。

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (metadata.size > 1048576) {
        workingDirectory.getDirectory(
          "log",
          {},
          (dirEntry) => {
            fileEntry.moveTo(dirEntry);
          },
          handleError,
        );
      }
    });
  },
  handleError,
);
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_System_API)
- {{domxref("FileSystemEntry.copyTo()")}}
