---
title: FileSystemHandle.isSameEntry()
slug: Web/API/FileSystemHandle/isSameEntry
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemHandle")}} インターフェイスの **`isSameEntry()`** メソッドは、2 個の{{domxref("FileSystemHandle", "ハンドル")}}を比較し、対応するエントリー (ファイルまたはディレクトリー) が一致するかを確認します。

## 構文

```js-nolint
isSameEntry(fileSystemHandle)
```

### 引数

- {{domxref("FileSystemHandle")}}
  - : メソッドを呼び出すハンドルと比較する `FileSystemHandle` です。

### 返値

エントリーが一致するとき `true` となる {{jsxref('Boolean')}} を返します。

### 例外

例外は投げられません。

## 例

以下の関数は、1 個のエントリーをエントリーの配列と比較し、一致するエントリーを全て取り除いた新しい配列を返します。

```js
function removeMatches(fileEntry, entriesArr) {
  let newArr = entriesArr.filter((entry) => !fileEntry.isSameEntry(entry));

  return newArr;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
