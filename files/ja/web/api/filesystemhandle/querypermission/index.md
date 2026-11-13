---
title: "FileSystemHandle: queryPermission() メソッド"
short-title: queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: b88824d7b19a323e623181768ad5dcbe2ee9e84a
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`queryPermission()`** は {{domxref("FileSystemHandle")}} インターフェイスのメソッドで、現在のハンドルの現在の許可の状態を取得します。

## 構文

```js-nolint
queryPermission(descriptor)
```

### 引数

- `descriptor` {{optional_inline}}
  - : 問い合わせる権限モードを指定するオブジェクトです。オプションは以下の通りです。
    - `'mode'` {{optional_inline}}
      - : `'read'`, `'write'`, `'readwrite'` のいずれかを取ります。

### 返値

{{jsxref("Promise")}} であり、{{domxref('PermissionStatus.state')}} に解決します。その値は `'granted'`, `'denied'`, `'prompt'` のいずれかです。また、下記の例外のいずれかで拒否されることもあります。

これが "prompt" で解決された場合、ハンドルに対する操作を行う前に、ウェブサイトは `requestPermission()` を呼び出す必要があります。これが "denied" で解決された場合は、いかなる操作も拒否されます。通常、ローカルファイルシステムのハンドルファクトリーによって返されるハンドルは、読み取り権限の状態について、最初は "granted" で解決されます。ただし、ユーザーがその権限を取り消した場合を除き、IndexedDB から取得したハンドルも "prompt" を返す可能性が高いでしょう。

### 例外

- {{jsxref("TypeError")}}
  - : `mode` が `'read'` でも `'readwrite'` でもない値に設定されたときに発生します。

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

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
