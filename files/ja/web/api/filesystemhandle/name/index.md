---
title: FileSystemHandle.name
slug: Web/API/FileSystemHandle/name
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemHandle")}} インターフェイスの読み取り専用プロパティ **`name`** は、ハンドルが表すエントリーの名前を返します。

## 値

文字列です。

## 例

以下の関数は、ユーザーにファイルピッカーでファイルを選択させ、`name` プロパティを取得します。

```js
// ファイルハンドルへの参照を保存する
let fileHandle;

async function getFile() {
  // ファイルピッカーを開く
  [fileHandle] = await window.showOpenFilePicker();

  const fileName = fileHandle.name;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
