---
title: "FileSystemHandle: requestPermission() メソッド"
short-title: requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`requestPermission()`** は {{domxref("FileSystemHandle")}} インターフェイスのメソッドで、ファイルハンドルの読み取りまたは読み書きの許可を要求します。

## 構文

```js-nolint
requestPermission(descriptor)
```

### 引数

- `descriptor` {{optional_inline}}
  - : 要求する許可のモードを指定するオブジェクトです。以下のオプションが設定可能です。
    - `'mode'` {{optional_inline}}
      - : `'read'`, `'write'`, `'readwrite'` のいずれかの値をとります。

### 返値

{{jsxref("Promise")}} であり、{{domxref('PermissionStatus.state')}} に解決します。その値は `'granted'`, `'denied'`, `'prompt'` のいずれかです。また、下記の例外のいずれかで拒否されることもあります。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が指定されていないか、`mode` が `'read'` でも `'readwrite'` でもないとき発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : 以下のいずれかの場合に発生します。
    - このメソッドは、最上位のコンテキストと[同一オリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)ではないコンテキスト（つまり、オリジンを越えるiframe）内で呼び出された。
    - ボタンの押下など、一時的な活性化がありませんでした。これには、ワーカーなど、ユーザーによる活性化を受け付けられない「ウィンドウ」以外のコンテキストでハンドルが実行されている場合も含まれます。

## セキュリティ

[ユーザーによる一時的な活性化](/ja/docs/Web/Security/Defenses/User_activation)が要求されます。この機能が動作するには、ユーザーがページまたは UI の要素を操作する必要があります。

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

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
