---
title: "FileSystemEntry: getMetadata() メソッド"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("FileSystemEntry")}} の **`getMetadata()`** インターフェイスは、更新日時やサイズなどファイルシステム項目に関する情報を持つ {{domxref("Metadata")}} オブジェクトを取得します。

## 構文

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### 引数

- `successCallback`
  - : コピー処理が完全に完了したときに呼び出される関数。
    単一の引数として、ファイルに関する情報を持つ {{domxref("Metadata")}} オブジェクトを受け取ります。
- `errorCallback` {{optional_inline}}
  - : オプションのコールバックで、メタデータの検索中にエラーが発生した場合に実行されます。引数は単一の {{domxref("FileError")}} で、何が間違っていたのかを記述します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `FileError.NOT_FOUND_ERR`
  - : {{domxref("FileSystemEntry")}} は存在しない項目を参照しています。
- `FileError.SECURITY_ERR`
  - : セキュリティ制限により、リクエストされたメタデータを取得できません。

## 例

この例では、一時フォルダー内のログファイルのサイズを調べ、それが 1 メガバイトを超えた場合、それを別のディレクトリーに移します。

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
