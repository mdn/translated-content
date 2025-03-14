---
title: FileSystemWritableFileStream.seek()
slug: Web/API/FileSystemWritableFileStream/seek
l10n:
  sourceCommit: 5a6f98403115fb88a4a123caf35e85e06ac0e3ee
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemWritableFileStream")}} インターフェイスの **`seek()`** メソッドを呼ぶと、現在のファイルカーソルオフセットを (バイト単位の) 指定の位置に移動します。

## 構文

```js-nolint
seek(position)
```

### 引数

- `position`
  - : ファイルの top (最初) からのバイト単位の位置を表す `unsigned long` 値です。

### 返値

`undefined` で解決する {{jsxref('Promise')}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus.state')}} が `'granted'` でないとき返されます。
- {{jsxref("TypeError")}}
  - : `position` が定義されていないか、`unsigned long` 型でないとき返されます。

## 例

未稿

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
