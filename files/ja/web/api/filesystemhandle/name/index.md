---
title: "FileSystemHandle: name プロパティ"
short-title: name
slug: Web/API/FileSystemHandle/name
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`name`** は {{domxref("FileSystemHandle")}} インターフェイスの読み取り専用プロパティで、ハンドルが表す項目の名前を返します。

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

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
