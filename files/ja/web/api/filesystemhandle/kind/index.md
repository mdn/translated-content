---
title: FileSystemHandle.kind
slug: Web/API/FileSystemHandle/kind
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemHandle")}} の読み取り専用プロパティ **`kind`** は、エントリーの種類を返します。`'file'` (対応するエントリーがファイルである場合) または `'directory'` が返ります。これは、ディレクトリーの中身について反復するとき、ファイルとディレクトリーを区別するために用いられます。

## 値

以下の値を取りうる文字列です。

- `'file'`: ハンドルが {{domxref('FileSystemFileHandle')}} の場合
- `'directory'`: ハンドルが {{domxref('FileSystemDirectoryHandle')}} の場合

## 例

以下の関数は、ユーザーにファイルピッカーでファイルを選択させ、返されたハンドルがファイルかディレクトリーかを調べます。

```js
// ファイルハンドルへの参照を保存する
let fileHandle;

async function getFile() {
  // ファイルピッカーを開く
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // ファイルの場合のコードを実行する
  } else if (fileHandle.kind === "directory") {
    // ディレクトリーの場合のコードを実行する
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
