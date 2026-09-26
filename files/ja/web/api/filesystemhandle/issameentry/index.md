---
title: "FileSystemHandle: isSameEntry() メソッド"
short-title: isSameEntry()
slug: Web/API/FileSystemHandle/isSameEntry
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`isSameEntry()`** は {{domxref("FileSystemHandle")}} インターフェイスのメソッドで、2 個の{{domxref("FileSystemHandle", "ハンドル")}}を比較し、対応する項目 (ファイルまたはディレクトリー) が一致するかを確認します。

## 構文

```js-nolint
isSameEntry(fileSystemHandle)
```

### 引数

- {{domxref("FileSystemHandle")}}
  - : メソッドを呼び出すハンドルと比較する `FileSystemHandle` です。

### 返値

項目が一致するとき `true` となる {{jsxref('Boolean')}} を返します。

## 例

以下の関数は、単一の項目を配列と比較し、一致する項目をすべて除去した新しい配列を返値として満たす {{jsxref("Promise")}} を返します。

```js
async function removeMatches(fileEntry, entriesArr) {
  const newArr = [];
  for (const entry of entriesArr) {
    if (!(await fileEntry.isSameEntry(entry))) {
      newArr.push(entry);
    }
  }
  return newArr;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
