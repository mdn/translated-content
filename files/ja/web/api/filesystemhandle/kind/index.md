---
title: "FileSystemHandle: kind プロパティ"
short-title: kind
slug: Web/API/FileSystemHandle/kind
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`kind`** は {{domxref("FileSystemHandle")}} インターフェイスの読み取り専用プロパティで、項目の種類を返します。`'file'` (対応する項目がファイルである場合) または `'directory'` が返ります。これは、ディレクトリーの中身について反復処理するとき、ファイルとディレクトリーを区別するために用いられます。

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

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
