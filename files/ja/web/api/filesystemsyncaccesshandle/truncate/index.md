---
title: "FileSystemSyncAccessHandle: truncate() メソッド"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`truncate()`** は {{domxref("FileSystemSyncAccessHandle")}} インターフェイスのメソッドで、ハンドルに対応するファイルのサイズを指定のバイト数にします。

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}、`truncate()` は誤って非同期メソッドとして規定されていました。一部のブラウザーの古いバージョンでは、これらのメソッドがそのように実装されています。しかし、これらのメソッドに対応する現行のブラウザーでは、すべて同期メソッドとして実装されています。

## 構文

```js-nolint
truncate(newSize)
```

### 引数

- `newSize`
  - : ファイルの変更後のサイズをバイト数で指定します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 対応するアクセスハンドルがすでに閉じられている場合、またはファイルのバイナリーデータの変更が失敗した場合に発生します。
- {{domxref("QuotaExceededError")}}
  - : `newSize` がファイルの元のサイズより大きく、ブラウザーの[ストレージ制限](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)を超える場合に発生します。
- {{jsxref("TypeError")}}
  - : 基盤となるファイルシステムが、ファイルサイズを新しいサイズに設定することに対応していない場合に発生します。

## 例

```js
async function truncateFile() {
  // 下書きファイルのハンドルを取得する
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access) <sup>(英語)</sup>
