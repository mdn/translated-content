---
title: FileSystemHandle.requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}

{{domxref("FileSystemHandle")}} インターフェイスの **`requestPermission()`** メソッドは、ファイルハンドルの読み取りまたは読み書きの許可を要求します。

## 構文

```js-nolint
requestPermission(fileSystemHandlePermissionDescriptor)
```

### 引数

- FileSystemHandlePermissionDescriptor {{optional_inline}}

  - : 要求する許可のモードを指定するオブジェクトです。以下のオプションが設定可能です。

    - : `'mode'`: `'read'` または `'readwrite'` のいずれかの値をとります。

### 返値

`'granted'`、`'denied'`、`'prompt'` のいずれかである {{domxref('PermissionStatus.state')}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が指定されていないか、`mode` が `'read'` でも `'readwrite'` でもないとき投げられます。

## 例

以下の非同期関数は、許可が与えられていなければ許可を要求します。

```js
// fileHandle は FileSystemFileHandle
// withWrite は書き込みのとき true となる boolean 値

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // 既に許可されているかを確認し、許可されていれば true を返す
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // ファイル操作の許可を要求し、ユーザーが許可したら true を返す
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // ユーザーが許可しなかったので、false を返す
  return false;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
