---
title: FileSystemHandle.queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}

{{domxref("FileSystemHandle")}} インターフェイスの **`queryPermission()`** メソッドは、現在のハンドルの現在の許可の状態を取得します。

## 構文

```js-nolint
queryPermission(fileSystemHandlePermissionDescriptor)
```

### 引数

- FileSystemHandlePermissionDescriptor {{optional_inline}}
  - : 取得する対象の許可モードを指定するオブジェクトです。以下の設定ができます。
    - `'mode'`: `'read'` または `'readwrite'` の値を取りえます。

### 返値

`'granted'`、`'denied'`、`'prompt'` のいずれかの {{domxref('PermissionStatus.state')}} です。

`"prompt"` が返った場合は、ウェブサイトはハンドルを用いた操作を行う前に `requestPermission()` を呼ぶ必要があるでしょう。`"denied"` が返った場合は、すべての操作が拒否されるでしょう。通常、ローカルファイルシステムのハンドルファクトリーから返されたハンドルは、初期状態で読み取りの許可状態として `"granted"` を返すでしょう。しかし、ユーザーが許可を取り消した場合以外に、IndexedDB から取得したハンドルも `"prompt"` を返す可能性が高いでしょう。

### 例外

- {{jsxref("TypeError")}}
  - : `mode` が `'read'` でも `'readwrite'` でもない値に設定されたとき投げられます。

## 例

以下の非同期関数は、ユーザーがファイルハンドルに読み取りまたは読み書きの許可を与えた場合 `true` を返します。許可が与えられていない場合、許可を要求します。

```js
// fileHandle は FileSystemFileHandle
// withWrite は書き込みのとき true となる boolean 値

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // 既に許可が得られているかを確認し、許可が得られていれば true を返す
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // ファイル操作の許可を要求し、ユーザーが許可を与えれば true を返す
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
