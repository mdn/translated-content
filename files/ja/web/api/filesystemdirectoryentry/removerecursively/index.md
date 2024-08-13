---
title: "FileSystemDirectoryEntry: removeRecursively() メソッド"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("FileSystemDirectoryEntry")}} インターフェイスの **`removeRecursively()`** メソッドは、ディレクトリーとそのコンテンツをすべて除去し、子孫のファイルとディレクトリーのサブツリー全体を階層的に反復処理します。

単一のファイルや空のディレクトリーを除去するには、{{domxref("FileSystemEntry.remove()")}} を使用することもできます。

## 構文

```js-nolint
removeRecursively(successCallback)
removeRecursively(successCallback, errorCallback)
```

### 引数

- `successCallback`
  - : ディレクトリーの削除処理が完了したら呼び出す関数です。コールバックには引数はありません。
- `errorCallback` {{optional_inline}}
  - : ディレクトリーのサブツリーを除去しようとしてエラーが発生した場合に呼び出される関数です。発生したエラーを説明する {{domxref("FileError")}} を入力として受け取ります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

エラーが発生して `errorCallback` が呼び出された場合、単一の引数、つまりエラーを記述した {{domxref("FileError")}} オブジェクトが渡されます。{{domxref("FileError.code")}} は、以下のように入力したエラーの型を指定します。

- `FileError.INVALID_MODIFICATION_ERR`
  - : ルートディレクトリーを除去しようとしましたが、これは許可されていません。
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : ファイルシステムの状態が変更を許可していません。
- `FileError.NOT_FOUND_ERR`
  - : {{domxref("FileSystemDirectoryEntry")}} が表すディレクトリーがもう存在しません。
- `FileError.NOT_READABLE_ERR`
  - : ディレクトリーにアクセスできません。他のアプリケーションで使用されているか、オペレーティングシステムレベルでロックされている可能性があります。
- `FileError.SECURITY_ERR`

  - : セキュリティ上の理由でディレクトリーを除去できませんでした。取りうる理由は次の通りです。

    - ディレクトリーやその内容は、ウェブアプリケーションからアクセスするには安全ではないかもしれません。
    - ファイルシステムを呼び出す回数が多すぎます。
    - ユーザーエージェントまたはオペレーティングシステムによって提起される、セキュリティに関する他の懸念。

> [!NOTE]
> 削除できないファイルが 1 つ以上格納されているディレクトリーを削除しようとした場合、またはいくつかのファイルを削除している最中にエラーが発生した場合、いくつかのファイルが削除されないことがあります。これを監視し、処理するために `errorCallback` を提供する必要があります。

## 例

```js
directory.removeRecursively(
  () => {
    /* ディレクトリーは正常に除去された */
  },
  () => {
    /* ディレクトリーの除去中にエラーが発生した */
  },
);
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemEntry.remove()")}}
