---
title: "FileSystemEntry: remove() メソッド"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("FileSystemEntry")}} インターフェイスの **`remove()`** メソッドは、ファイルシステムからファイルまたはディレクトリーを除去します。ディレクトリーは空でなければ除去されません。

ディレクトリーとそのコンテンツおよびサブディレクトリーをすべて再帰的に削除するには、代わりに {{domxref("FileSystemDirectoryEntry.removeRecursively()")}} を呼び出します。

## 構文

```js-nolint
remove(successCallback)
remove(successCallback, errorCallback)
```

### 引数

- `successCallback`
  - : ファイルが正常に除去されると呼び出される関数。
- `errorCallback` {{optional_inline}}
  - : ファイルの除去に失敗した場合に呼び出されるオプションのコールバック。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `FileError.INVALID_MODIFICATION_ERR`
  - : 指定した項目がファイルシステムのルートディレクトリーであったか、指定した項目が空でないディレクトリーであった場合。
- `FileError.INVALID_STATE_ERR`
  - : ファイルシステムのキャッシュ状態がディスク上の状態と矛盾しているため、安全上の理由からファイルを削除できませんでした。
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : ファイルシステムの状態がファイルやディレクトリーの除去を許可していません。
- `FileError.NOT_FOUND_ERR`
  - : ファイルまたはディレクトリーが存在しません。
- `FileError.SECURITY_ERR`
  - : 権限や他にもアクセスする制約があるため、またはファイルリソースに呼び出される数が多すぎるため、項目を除去できませんでした。

## 例

この例では、一時的な作業ファイルを削除します。

```js
workingDirectory.getFile(
  "tmp/workfile.json",
  {},
  (fileEntry) => {
    fileEntry.remove(() => {
      /* ファイルの削除に成功 */
    });
  },
  handleError,
);
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}
