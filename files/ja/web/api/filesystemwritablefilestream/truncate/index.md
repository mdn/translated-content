---
title: FileSystemWritableFileStream.truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
l10n:
  sourceCommit: 5a6f98403115fb88a4a123caf35e85e06ac0e3ee
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemWritableFileStream")}} インターフェイスの **`truncate()`** メソッドは、ストリームに対応するファイルのサイズを指定のバイト数にします。

指定したサイズがファイルの現在のサイズより大きい場合、ファイルの拡張部分は `null` のバイトで埋めます。そうでない場合、ファイルを切り詰めます。

`truncate()` が呼ばれると、ファイルカーソルも移動します。
オフセットがサイズより小さい場合、変化しません。
オフセットがサイズより大きい場合、オフセットがサイズに設定されます。
これにより、この後の書き込みがエラーにならないようにします。

ストリームが閉じられるまで、変更はディスク上の実際のファイルには一切書き込まれません。
通常、変更はかわりに一時ファイルに書き込まれます。

## 構文

```js-nolint
truncate()
```

### 引数

- size
  - : ストリームの新しいバイト数を表す `unsigned long` 値です。

### 返値

`undefined` で解決する {{jsxref('Promise')}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionState')}} が `'granted'` でないとき返されます。
- {{jsxref("TypeError")}}
  - : `size` が定義されていないか `unsigned long` でないとき返されます。

## 例

```js
// 未稿
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
