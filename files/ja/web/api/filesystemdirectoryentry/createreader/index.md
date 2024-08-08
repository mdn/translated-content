---
title: "FileSystemDirectoryEntry: createReader() メソッド"
short-title: createReader()
slug: Web/API/FileSystemDirectoryEntry/createReader
l10n:
  sourceCommit: 23228f1b9c756862dac77b238ca74c2e5bd3c9dc
---

{{APIRef("File and Directory Entries API")}}

{{domxref("FileSystemDirectoryEntry")}} インターフェイスの **`createReader()`** メソッドは、これは、ディレクトリーの項目を読み取るために使用することができる、{{domxref("FileSystemDirectoryReader")}} オブジェクトを返します。

## 構文

```js-nolint
createReader()
```

### 引数

なし。

### 返値

ディレクトリー項目を読み込むために使用することができる {{domxref("FileSystemDirectoryReader")}} オブジェクト。

## 例

この例では、指定した {{domxref("FileSystemDirectoryEntry")}} の項目をすべて読み取って配列で返す `readDirectory()` という非同期関数を作成しています。

```js
async function readDirectory(directory) {
  const dirReader = directory.createReader();
  const entries = [];

  while (true) {
    const results = await new Promise((resolve, reject) => {
      dirReader.readEntries(resolve, reject);
    });

    if (!results.length) {
      break;
    }

    for (const entry of results) {
      entries.push(entry);
    }
  }

  return entries;
}
```

これは、{{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}} を繰り返し呼び出してディレクトリー内のすべての項目を取得し、各項目を配列に連結することで動作します。空の配列を返すと、すべての項目が読み込まれたことになり、ループが終わります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemFileEntry")}}
- {{domxref("FileSystemEntry")}}
