---
title: FileSystemSyncAccessHandle.truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: 4b9377a26bb7094a8f13551cf328865a6457f5ee
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemSyncAccessHandle")}} インターフェイスの **`truncate()`** メソッドは、ハンドルに対応するファイルのサイズを指定のバイト数にします。

## 構文

```js-nolint
truncate(newSize)
```

### 引数

- `newSize`
  - : ファイルのリサイズ後のバイト数です。

### 返値

`undefined` で解決する {{jsxref('Promise')}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 対応するアクセスハンドルが既に閉じられているか、ファイルのバイナリーデータの変更が失敗したとき投げられます。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : `newSize` がファイルのもとのサイズより大きく、ブラウザーの[ストレージ制限](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)を超えるとき投げられます。

## 例

```js
async function truncateFile() {
  // draft ファイルのハンドルを取得する
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 同期式アクセスハンドルを取得する
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // ファイルを 0 バイトに切り詰める
  accessHandle.truncate(0);

  // 変更をディスクに書き込む
  accessHandle.flush();

  // 完了したら、常に FileSystemSyncAccessHandle を閉じる
  accessHandle.close();
}
```

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}・{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}・{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}・`truncate()` は誤って非同期のメソッドとされていました。これは現在では[変更されています](https://github.com/whatwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
