---
title: FileSystemDirectoryHandle.entries()
slug: Web/API/FileSystemDirectoryHandle/entries
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemDirectoryHandle")}} インターフェイスの **`entries()`** メソッドは、[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) が提供するのと同じ順序でオブジェクト自身の列挙可能なプロパティの `[key, value]` ペアの配列を返します。(違いは、for-in ループはプロトタイプチェーン内のプロパティも列挙することです)

## 構文

```js-nolint
entries()
```

### 引数

なし

### 返値

`FileSystemDirectoryHandle` オブジェクト自身の列挙可能なプロパティの `[key, value]` ペアの配列を返します。

## 例

```js
const dirHandle = await window.showDirectoryPicker();

for await (const [key, value] of dirHandle.entries()) {
  console.log({ key, value });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
